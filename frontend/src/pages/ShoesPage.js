import { useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogTable from '../components/LogTable';

function ShoesPage({ setShoe }) {
    //Use navigate
    const redirect = useNavigate();

    //Use state to bring in data
    const [shoes, setShoes] = useState([]);

    //Retrieve list of shoes
    const loadShoes = async () => {
        const response = await fetch('/shoes');
        const shoes = await response.json();
        setShoes(shoes);
    }

    //Update a single shoe
    const onEditShoe = async shoe => {
        setShoe(shoe);
        redirect("/edit-shoe");
    }

    //Delete a single shoe
    const onDeleteShoe = async _id => {
        const response = await fetch(`/shoes/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/shoes');
            const shoes = await getResponse.json();
            setShoes(shoes);
        } else {
            console.error(`Failed to delete a shoe with _id = ${_id}, status code = ${response.status}`);
        }
    }

    //Load all the shoes
    useEffect(() => {
        loadShoes();
    }, []);

    //Display the shoes
    return (
        <>
            <h2>Basketball Shoe Performances</h2>
            <p>Every current basketball shoe that I have played in. Ratings based on a scale of 1-5, with '1' being the worse and '5' being the best.
            </p>
        
            
            <LogTable
                shoes={shoes}
                onEdit={onEditShoe}
                onDelete={onDeleteShoe}
            />
        </>
    );

}


export default ShoesPage;