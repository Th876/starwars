import { useState } from 'react';


export default function StarShipCard ({ship}) {
//set details of ship to false so that it doesn't show until 'onClick'
const [details, setDetails] = useState(false);

function handleShow() {
    setDetails(!details);
    console.log(details);
}

console.log(ship.model);


    return (
    <div onClick={handleShow}>
        <h3 className='btn'>{ship.name}</h3>
        {/* ternary operatory, if details exist, display the following details, if not (:) make it toggle(hide)*/}
        {details ? 
            <div className='details'>
                <h3>Model: {ship.model}</h3>
                <h3>Manufacturer: {ship.manufacturer}</h3>
                <h3>Cost in Credits: {ship.cost_in_credits}</h3>
                <h3>Length: {ship.length}</h3>
                <h3>Maximum Atmosphering Speed: {ship.max_atmosphering_speed}</h3>
                <h3>Crew: {ship.crew}</h3>
                <h3>Passengers: {ship.passengers}</h3>
                <h3>Cargo Capacity: {ship.cargo_capacity}</h3>
                <h3>Consumables: {ship.consumables}</h3>
                <h3>Hyperdrive Rating: {ship.hyperdrive_rating}</h3>
                <h3>Megalight Per Hour: {ship.mglt}</h3>
                <h3>Starship Class: {ship.starship_class}</h3>
                <h3>Films: 
                    <br></br>
                    {ship.films[0]}<br></br>
                    {ship.films[1]}<br></br>
                    {ship.films[0]}
                </h3>
                <h3>Created: {ship.created}</h3>
                <h3>Edited: {ship.edited}</h3>
                <h3>Url: {ship.url}</h3>
 </div> : null
 }
    </div>
    )


};
