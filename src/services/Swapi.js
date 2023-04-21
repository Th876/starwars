//Learned to consume a third-party API in React and invoke the call to that API using the useEffecthook.
//ensure that all API/fetch calls are made from this module
import {useState, useEffect} from "react";
import StarShipCard from "../components/StarShipCard";

//set State to hold starships data

export default function Swapi() {
    const [starShips, setStarShips] = useState(null);
    //to let user know we're fetching data
    // const [loading, setLoading] = useState(true);

    
         const getStarShips = async () =>  {
            try{
            const response = await fetch("https://swapi.dev/api/starships/");
            //set variable for data
            const data = await response.json();
            setStarShips(data);
         } catch(e) {
            console.error(e)
         }
         };

         useEffect(() => {
         getStarShips();
         }, []);

         console.log(starShips);

        const loaded = () => {
            if(starShips === null) {
                getStarShips();
            }
        }

        const loading = () => {
            return <h1>Loading...</h1>
        }

        return (
            <div className='shipContainer'>
                {starShips? starShips.results.map((ship, index) => {
                   return <StarShipCard key={index} ship={ship}/> 
                }) : loaded()}
            </div>
        )
}
       