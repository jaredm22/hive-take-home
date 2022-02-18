import DropdownMenu from "./components/DropdownMenu";

export default function Home() {
  return (
    <div className="container">
        <DropdownMenu multipleSelect={false} items={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"]}/>
    </div>
  )
}
