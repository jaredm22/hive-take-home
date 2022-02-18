import DropdownMenu from "./components/DropdownMenu";

export default function Home() {
  return (
    <div className="container">
        <div className="examples-container">
            <DropdownMenu 
                multipleSelect={true} 
                label={"Tag"} 
                items={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"]}
            />
            <DropdownMenu 
                multipleSelect={false} 
                label={"Age"}
                items={["None", "Twenty", "Twenty one", "Twenty one and a half"]}
            />
        </div>
        
    </div>
  )
}
