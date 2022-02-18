import { useState, useEffect } from "react";
import axios from "axios";
import DropdownMenu from "./components/DropdownMenu";

export default function Home() {

    const [teamsData, setTeamsData] = useState([])
    const ageData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, "21+"]

    // fetch nba teams data
    useEffect(() => {
        const getTeams = async () => {
            await axios.get("https://www.balldontlie.io/api/v1/teams").then(res => {
                let parsedTeamsData = res.data.data.map(t => t.full_name)
                setTeamsData(parsedTeamsData)
            })
        }
        getTeams()
    }, [])

    return (
        <div className="container">
            <div className="examples-container">
                <h1>Dropdown Menu</h1>
                <div style={{display: "flex", flexDirection:"row",  justifyContent: 'space-evenly', margin: "1rem 0", width: 1024}}>
                    <h3>Single Select</h3>
                    <DropdownMenu 
                        multipleSelect={false} 
                        label={"Age"}
                        items={ageData}
                    />
                        
                    <h3>Multiple Select</h3>
                    <DropdownMenu 
                        multipleSelect={true} 
                        label={"NBA Teams"} 
                        items={teamsData}
                    />
                </div>     
            </div>
        </div>
    )
}
