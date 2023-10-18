import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function LogRow({ shoe, onDelete, onEdit }) {

    return (
        <tr>
            <td title="What is the brand of the basketball shoes?">{shoe.brand}</td>
            <td title="What is the name of the basketball shoe?" >{shoe.name}</td>
            <td title="How much did the basketball shoe retail for?" >{shoe.price}</td>
            <td title="How is the traction of the basketball shoe?">{shoe.traction}</td>
            <td title="How are the materials of the basketball shoe?">{shoe.materials}</td>
            <td title="How is the fit of the basketball shoe?">{shoe.fit}</td>
            <td title="How is the weight of the basketball shoe?">{shoe.weight}</td>
            <td><MdDeleteForever onClick={() => onDelete(shoe._id)} /></td>
            <td><MdEdit onClick={() => onEdit(shoe)} /></td>
            <td></td>
        </tr>
    );
}


export default LogRow;