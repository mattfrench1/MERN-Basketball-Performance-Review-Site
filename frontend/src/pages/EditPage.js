import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



//Edit function
export const EditPage = ({ shoe }) => {
    const [brand, setBrand] = useState(shoe.brand);
    const [name, setName] = useState(shoe.name);
    const [price, setPrice] = useState(shoe.price);
    const [traction, setTraction] = useState(shoe.traction);
    const [materials, setMaterials] = useState(shoe.materials);
    const [fit, setFit] = useState(shoe.fit);
    const [weight, setWeight] = useState(shoe.weight);

    const navigate = useNavigate();

    const editShoe = async () => {

        const response = await fetch(`/shoes/${shoe._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                brand: brand,
                name: name,
                price: price,
                traction: traction,
                materials: materials,
                fit: fit,
                weight: weight
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            
            alert("Successfully edited exercise!");
        } else {
            const errMessage = await response.json();
           
            alert(`Failed to update shoe, Status ${response.status}. ${errMessage}`);
        }
        navigate("/log");
    };

    return (
        <>

            <article>
            <h2>Edit a basketball shoe in the collection</h2>
            <p>Update any of the following characteristics about the basketball shoe below:</p>

            <table class="shoes">
                    <caption>Add a basketball shoe to the log.</caption>
                
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

                            <td><label for="shoebrand" >
                                <input type="text" value={brand} id="shoebrand" name="brand"
                                        onChange={e => setBrand(e.target.value)} 
                                        autoFocus
                                        className='brand-input-box'
                                />
                                </label></td>

                            <td><label for="shoename" >
                                <input type="text" value={name} id="shoename" name="name"
                                        onChange={e => setName(e.target.value)} 
                                        className='name-input-box'
                                />
                                </label></td>

                            <td><label for="shoeprice" >
                                <input type="number" value={price} id="shoeprice" name="price"
                                        onChange={e => setPrice(e.target.value)} 
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoetraction" >
                                <input type="number" value={traction} id="shoetraction" name="traction"
                                        onChange={e => setTraction(e.target.value)} 
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoematerials" >
                                <input type="number" value={materials} id="shoematerials" name="materials"
                                        onChange={e => setMaterials(e.target.value)} 
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoefit" >
                                <input type="number" value={fit} id="shoefit" name="fit"
                                        onChange={e => setFit(e.target.value)} 
                                        className='input-box'
                                />
                                </label>
                            </td>

                            <td><label for="shoeweight" >
                                <input type="number" value={weight} id="shoeweight" name="weight"
                                        onChange={e => setWeight(e.target.value)} 
                                        className='input-box'
                                />
                                </label>
                            </td>                            

                            <td><button class="wait" onClick={editShoe}>Save</button></td>

                        </tr>
                    </tbody>
                </table>


            </article>


        </>
    );

}
export default EditPage;