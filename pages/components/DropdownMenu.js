import { useState, useEffect } from "react"
import MenuItem from "./MenuItem"

export default function DropdownMenu(props) {
    const [inputText, setInputText] = useState(props.placeHolder || "")
    const [selectedItems, setSelectedItems] = useState(props.items.map(i => false) || [])
    const [allItemsSelected, setAllItemsSelected] = useState(false)
    const [collapsed, setCollapsed] = useState(true)

    function collapseHandler() {
        setCollapsed(!collapsed)
    }

    function selectHandler(id) {
        console.log("happens")
        let updatedSelectedItems = props.multipleSelect ? 
            selectedItems.map((item, i) => i == id ? !item : item) :
            selectedItems.map((item, i) => i == id ? true : false)

        console.log(updatedSelectedItems)
        setSelectedItems(updatedSelectedItems)
    }

    function selectAllHandler() {
        setSelectedItems(selectedItems.map(i => true))
        setAllItemsSelected(true)
    }

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

    return(
        <div className="dropdown-menu-container">
            <span className="dropdown-menu-header">{props.label}</span>
            <button className="dropdown-menu-input" onClick={collapseHandler}>{inputText}</button>

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