import DropdownMenu from "./components/DropdownMenu";

export default function Home() {
  return (
    <div className="container">
        
        <div className="examples-container">
            <h1>Dropdown Menu</h1>
            <div style={{display: "flex", flexDirection:"row",  justifyContent: 'space-evenly', margin: "1rem 0", width: 1024}}>
                <h3>Single Select</h3>
                <DropdownMenu 
                    multipleSelect={false} 
                    label={"Age"}
                    items={["None", "Twenty", "Twenty one", "Twenty one and a half"]}
                />

                <h3>Multiple Select</h3>
                <DropdownMenu 
                    multipleSelect={true} 
                    label={"Tag"} 
                    items={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"]}
                />     
            </div>
                  
        </div>
        
    </div>
  )
}
