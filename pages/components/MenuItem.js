export default function MenuItem(props) {
    return(
        <div className="menu-item-container">
            <input 
                type="checkbox" 
                name={`menu-item-${i}`} 
                value={props.item}
            />
            <label className="menu-item-label" for={`menu-item-${i}`}>{props.item}</label>
        </div>
    )
            
}