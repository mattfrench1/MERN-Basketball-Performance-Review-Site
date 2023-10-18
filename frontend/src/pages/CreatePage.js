import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';



export const CreatePage = () => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [traction, setTraction] = useState('');
    const [materials, setMaterials] = useState('');
    const [fit, setFit] = useState('');
    const [weight, setWeight] = useState('');

    const navigate = useNavigate();

    const addShoe = async () => {
        const newShoe = { brand, name, price, traction, materials, fit, weight };
        
        const response = await fetch('/shoes', {
            method: 'POST',
            body: JSON.stringify(newShoe),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert("Successfully added a shoe to a row in the log.");
        } else {
            alert('Failed to add a row, due to missing input');
        }
        navigate("/log");
    };

    return (
        <>
            <h2>Add a Basketball Shoe to the Database.</h2>
            <article>

                <table class="shoes">
                    <caption>Ratings on scale of 1-5 (1 being worse, 5 being best)</caption>
                
                    <tbody>
                        <tr>
                            <td>
                                Brand
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Price
                            </td>
                            <td>
                                Traction
                            </td>
                            <td>
                                Materials
                            </td>
                            <td>
                                Fit
                            </td>
                            <td>
                                Weight
                            </td>
                        </tr>

                        <tr>

                            <td><label for="shoebrand" class="required">
                                <input type="text" value={brand} id="shoebrand" name="brand"
                                        onChange={e => setBrand(e.target.value)} required
                                        autoFocus
                                        className='brand-input-box'
                                />
                                </label></td>

                            <td><label for="shoename" class="required">
                                <input type="text" value={name} id="shoename" name="name"
                                        onChange={e => setName(e.target.value)} required
                                        className='name-input-box'
                                />
                                </label></td>

                            <td><label for="shoeprice" class="required">
                                <input type="number" value={price} id="shoeprice" name="price"
                                        onChange={e => setPrice(e.target.value)} required
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoetraction" class="required">
                                <input type="number" value={traction} id="shoetraction" name="traction"
                                        onChange={e => setTraction(e.target.value)} required
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoematerials" class="required">
                                <input type="number" value={materials} id="shoematerials" name="materials"
                                        onChange={e => setMaterials(e.target.value)} required
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoefit" class="required">
                                <input type="number" value={fit} id="shoefit" name="fit"
                                        onChange={e => setFit(e.target.value)} required
                                        className='input-box'
                                />
                                </label>
                            </td>
                            
                            <td><label for="shoeweight" class="required">
                                <input type="number" value={weight} id="shoeweight" name="weight"
                                        onChange={e => setWeight(e.target.value)} required
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><button class="wait" onClick={addShoe}>Save</button></td>

                        </tr>
                    </tbody>
                </table>

            </article>
        </>
    );
}


export default CreatePage;