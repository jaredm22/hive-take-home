import { useState, useEffect } from "react"
import MenuItem from "./MenuItem"

export default function DropdownMenu(props) {
    const [items, setItems] = useState(props.items || [])
    const [inputText, setInputText] = useState("")
    const [selectedItems, setSelectedItems] = useState([])
    const [allItemsSelected, setAllItemsSelected] = useState(false)

    const [collapsed, setCollapsed] = useState(true)

    function collapseHandler() {
        setCollapsed(!collapsed)
    }

    function selectHandler(id) {
        let updatedSelectedItems = props.multipleSelect ? 
            selectedItems.map((item, i) => i == id ? !item : item) :
            selectedItems.map((item, i) => i == id ? true : false)

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

    useEffect(() => {
        if (items != [] && items) {
            var initialSelectedItems = items.map(i => false)
            setSelectedItems(initialSelectedItems)
        }
    }, [])

    useEffect(() => {
        var updatedInputText = "" 
        selectedItems.forEach((selected, i) => {
            if (selected) {
                updatedInputText += (updatedInputText == "" ? "" : ", ") + items[i]
            }
        })
        setInputText(updatedInputText)
    }, [selectedItems])

    console.log(allItemsSelected)

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
                {props.multipleSelect && !allItemsSelected ? 
                    <button className="select-all-button" onClick={selectAllHandler}>Select All</button> :
                    <button className="select-all-button" onClick={deselectAllHandler}>Deselect All</button>
                }
            </div>
        </div>
    )
}