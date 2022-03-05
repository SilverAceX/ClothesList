import React, { Fragment, useState } from 'react';
import { AddClothes } from '../AddClothes/AddClothes';
import { RoleWrapper } from '../RoleWrapper/RoleWrapper';

export const ClothesList = (props) => {


    let hardClothes = [
        { id: 342, cname: "T-shirts", price: 25.0, description: "Black and white t-shirt.", stock: 50 },
        { id: 453, cname: "Shorts", price: 15.0, description: "Shorts in small, medium and large sizes.", stock: 30 },
        { id: 657, cname: "Sweaters", price: 20.0, description: "Sweaters in multiple colours and sizes.", stock: 70 },
        { id: 987, cname: "Hat", price: 10.0, description: "Hats in multiple colours. One size only.", stock: 20 },
        { id: 263, cname: "Socks", price: 10.0, description: "Black, white and grey socks.", stock: 100 },
        { id: 345, cname: "Basketball Headband", price: 5.0, description: "Black and white Nike headbands.", stock: 150 }
    ];
    const [ListClothes, setClothes] = useState(hardClothes);

    console.log(typeof(ListClothes))
    const [checkFilter, setFilter] = useState('');

    const filterfunction = (item) => {
        if (item.cname.startsWith(checkFilter)) {
            return item;
        } else if (checkFilter === '') {
            return item;
        }
    };

    const [addName, setName] = useState("");
    const [addPrice, setPrice] = useState(0);
    const [addDesc, setDesc] = useState("");
    const [addStock, setStock] = useState(0);

    console.log(ListClothes);
    const addItem = (ListClothes) => {
        let contains = false;
        for (let x = 0; x < hardClothes.length; x++) {
            for (let i in x[0]) {
                if (i.cname === addName) {
                    console.log('Hi');
                    contains = true;
                    i.stock += addStock;
                }
            }
        }

        if (!contains) {
            const newArray = { id: Math.floor(Math.random() * 999), name: {addName}, price: addPrice, description: addDesc, stock: addStock };
            hardClothes.push(newArray);
            setClothes(hardClothes);


        }

    }
    return (
        <div>
            <h1>Fashion Store Clothing</h1>
            <label>
                Filter:
                <input type="text" onChange={(e) => setFilter(e.target.value)} />
            </label>
            <ul className="listClothes">
                {ListClothes.filter(filterfunction).map((student) => (
                    <>
                        <li className="clothingItem">{student.id}</li>
                        <li className="clothingItem">{student.cname}</li>
                        <li className="clothingItem">{student.price}</li>
                        <li className="clothingItem">{student.description}</li>
                        <li className="clothingItem">{student.stock}</li>
                    </>
                ))}
            </ul>

            <RoleWrapper rolesAllowed={['admin']} currentRole={props.role}>
                <div>
                    <form action="">
                        <label>Name:
                            <input type="text" onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>Price
                            <input type="text" onChange={(e) => setPrice(e.target.value)} />
                        </label>
                        <label>Description
                            <input type="text" onChange={(e) => setDesc(e.target.value)} />
                        </label>
                        <label>Stock
                            <input type="text" onChange={(e) => setStock(e.target.value)} />
                        </label>
                    </form>
                    <button onClick={addItem}>Add Item</button>
                </div>
            </RoleWrapper>
        </div>
    )
}
