import React from 'react';
import LogRow from './LogRow';
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from 'react-router-dom';

function LogTable({ shoes, onDelete, onEdit}) {
    return (
        <table id="shoes">
            <caption>Delete/Edit/Add buttons on far right</caption>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Price ($USD)</th>
                    <th>Traction</th>
                    <th>Materials</th>
                    <th>Fit</th>
                    <th>Weight</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="../add-shoe"><i><TiDocumentAdd title="Add a basketball shoe" /></i></Link></th>
                </tr>
            </thead>
            <tbody>
                {shoes.map((shoe, i) => 
                    <LogRow 
                        shoe={shoe}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );

}

export default LogTable;