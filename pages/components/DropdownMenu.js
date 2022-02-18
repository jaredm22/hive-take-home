import { useState, useEffect } from "react"
import MenuItem from "./MenuItem"

export default function DropdownMenu(props) {

    const [items, setItems] = useState(props.items || [])
    const [inputText, setInputText] = useState("")
    const [selectedItems, setSelectedItems] = useState([])

    const [collapsed, setCollapsed] = useState(true)

    function collapseHandler() {
        setCollapsed(!collapsed)
    }

    function selectHandler(id) {
        let updatedSelectedItems = [...selectedItems]
        updatedSelectedItems[id] = !selectedItems[id]
        setSelectedItems(updatedSelectedItems)
    }

    useEffect(() => {
        var initialSelectedItems = []
        if (items != []) {
            initialSelectedItems = items.map(i => false)
        }
        setSelectedItems(initialSelectedItems)
    }, [])

    // useEffect(() => {
    //     var updatedInputText = 
    //     setSelectedItems(initialSelectedItems)
    // }, [])
    
    return(
        <div className="dropdown-menu-container">
            <span className="dropdown-menu-header">Tag</span>
            <button className="dropdown-menu-input" onClick={collapseHandler}>{inputText}</button>

            <div 
                className="menu-content" 
                style={{display: collapsed ? "none" : "flex"}}
            >
                {props.items.map((item, i) => 
                    <MenuItem key={`menu-item-${i}`} item={item} id={i} selectHandler={selectHandler} selected={selectedItems[i]}/>
                )}
            </div>
        </div>
    )
}