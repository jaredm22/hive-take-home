import { useState, useEffect } from "react"
import MenuItem from "./MenuItem"

export default function DropdownMenu(props) {
    const [inputText, setInputText] = useState(props.placeHolder || "")
    const [selectedItems, setSelectedItems] = useState(props.items ? props.items.map(i => false) : [])
    const [allItemsSelected, setAllItemsSelected] = useState(false)
    const [collapsed, setCollapsed] = useState(true)

    // handles collapse
    function collapseHandler() {
        setCollapsed(!collapsed)
    }

    // handles select
    function selectHandler(id) {
        let updatedSelectedItems = props.multipleSelect ? 
            selectedItems.map((item, i) => i == id ? !item : item) :
            selectedItems.map((item, i) => i == id ? true : false)
        setSelectedItems(updatedSelectedItems)
    }

    // handles select all
    function selectAllHandler() {
        setSelectedItems(selectedItems.map(i => true))
        setAllItemsSelected(true)
    }

    // handles deselect all
    function deselectAllHandler() {
        setSelectedItems(selectedItems.map(i => false))
        setAllItemsSelected(false)
    }

    // handles selected item events
    useEffect(() => {
        var updatedInputText = "" 
        selectedItems.forEach((selected, i) => {
            if (selected) {
                updatedInputText += (updatedInputText == "" ? "" : ", ") + props.items[i]
            }
        })
        setInputText(updatedInputText)
    }, [selectedItems])

    // sets all selected items to false
    useEffect(() => {
        let initialSelectedItems = props.items.map(i => false)
        setSelectedItems(initialSelectedItems)
    }, [props.items])

    return(
        <div className="dropdown-menu-container">
            <span className="dropdown-menu-header">{props.label}</span>
            <div className="dropdown-menu-input" onClick={collapseHandler}>
                {inputText}
                <div className="caret-icon">
                    {collapsed ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#000000" d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#000000" d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                    }
                </div>
                
            </div>
            
            <div 
                className="menu-content" 
                style={{display: collapsed ? "none" : "flex"}}
            >
                {props.items ? 
                    props.items.map((item, i) => 
                        <MenuItem 
                            key={`menu-item-${i}`} 
                            item={item} 
                            id={i} 
                            selectHandler={selectHandler} 
                            selected={selectedItems[i]}
                            multipleSelect={props.multipleSelect}
                        />
                    ) 
                : false}

                {props.multipleSelect ? 
                    !allItemsSelected ? 
                        <button className="select-all-button" onClick={selectAllHandler}>Select All</button> :
                        <button className="select-all-button" onClick={deselectAllHandler}>Deselect All</button>
                    : false
                }
            </div>
        </div>
    )
}