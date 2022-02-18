import { useState } from "react"

export default function DropdownMenu(props) {

    const [buttonText, setButtonText] = useState("")
    const [selectedItems, setSelectedItems] = useState([])

    const [collapsed, setCollapsed] = useState(true)

    function collapseHandler() {
        setCollapsed(!collapsed)
    }

    

    return(
        <div className="dropdown-menu-container">
            <span className="dropdown-menu-header">Tag</span>
            <button className="dropdown-menu-input" onClick={collapseHandler}></button>
            <div class="menu-content" style={{display: collapsed ? "none" : "flex"}}>
                {props.items.map((item, i) => 
                    <div className="menu-item-container">
                        <input 
                            className="checkbox-input"
                            type="checkbox" 
                            name={`menu-item-${i}`} 
                            value={item}
                        />
                        <label className="menu-item-label" for={`menu-item-${i}`}>{item}</label>
                    </div>
                )}
            </div>
        </div>
    )
}