export default function MenuItem(props) {

    function selectHandlerWrapper() {
        props.selectHandler(props.id)
    }

    return(
        <div 
            className={`menu-item-container ${props.selected ? "selected" : ""}`}
            onClick={selectHandlerWrapper}
        >
            {props.multipleSelect ? 
                <input 
                    type="checkbox" 
                    name={`menu-item-${props.id}`} 
                    value={props.id || ""}
                    checked={props.selected || false} 
                    readOnly
                /> : false}
            
            <label className="menu-item-label">{props.item}</label>
        </div>
    )
            
}