import React, { Fragment, useState } from 'react';
import { RoleWrapper } from '../RoleWrapper/RoleWrapper';
import { Form, Button, ListGroup } from 'react-bootstrap';
import './ClothesList.css';

export const ClothesList = (props) => {

    const [aName, sName] = useState("");
    const [addPrice, setPrice] = useState(0);
    const [addDesc, setDesc] = useState("");
    const [addStock, setStock] = useState(0);
    const [checkFilter, setFilter] = useState('');
    const [Refresh, setRefresh] = useState(false);

    let hardClothes = [
        { id: 342, cname: "T-shirts", price: 25.0, description: "Black and white t-shirt.", stock: 50 },
        { id: 453, cname: "Shorts", price: 15.0, description: "Shorts in small, medium and large sizes.", stock: 30 },
        { id: 657, cname: "Sweaters", price: 20.0, description: "Sweaters in multiple colours and sizes.", stock: 70 },
        { id: 987, cname: "Hat", price: 10.0, description: "Hats in multiple colours. One size only.", stock: 20 },
        { id: 263, cname: "Socks", price: 10.0, description: "Black, white and grey socks.", stock: 100 },
        { id: 345, cname: "Basketball Headband", price: 5.0, description: "Black and white Nike headbands.", stock: 150 }
    ];
    const [ListClothes, setClothes] = useState(hardClothes);



    const filterfunction = (item) => {
        if (item.cname.startsWith(checkFilter)) {
            return item;
        } else if (checkFilter === '') {
            return item;
        }
    };

    const addItem = (ListClothes) => {
        setClothes(ListClothes);
        let contains = false;
        for (let x = 0; x < ListClothes.length; x++) {
            if (ListClothes[x].cname === aName) {
                contains = true;
                ListClothes[x].stock = parseInt(ListClothes[x].stock) + parseInt(addStock);
            }
        }
        if (!contains) {
            ListClothes.push({ id: Math.floor(Math.random() * 999), cname: aName, price: addPrice, description: addDesc, stock: addStock })
        }
        setClothes(ListClothes);
        setRefresh(!Refresh)
        const form = document.getElementById("itemForm");
        form.reset();
    }

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Control type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Filter" />
            </Form.Group>

            <ListGroup as="ul" className="listClothes">
                {ListClothes.filter(filterfunction).map((clothing) => (
                    <>
                        <ListGroup.Item as="li" className="itemName">{clothing.cname}</ListGroup.Item>
                        <ListGroup.Item as="li" className="clothingItem">ID: {clothing.id}</ListGroup.Item>
                        <ListGroup.Item as="li" className="clothingItem">Price: ${clothing.price}</ListGroup.Item>
                        <ListGroup.Item as="li" className="clothingItem">Description: {clothing.description}</ListGroup.Item>
                        <ListGroup.Item as="li" className="clothingItem">Number in stock: {clothing.stock}</ListGroup.Item>
                        <br />
                    </>
                ))}
            </ListGroup>

            <RoleWrapper rolesAllowed={['admin']} currentRole={props.role}>
                <Form id='itemForm'>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => sName(e.target.value)} placeholder="Enter item" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={(e) => setDesc(e.target.value)} placeholder="Item Description" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStock(e.target.value)} placeholder="Item Stock" />
                    </Form.Group>

                    <Button className='sbtn' variant="primary" onClick={() => addItem(ListClothes)}>
                        Submit
                    </Button>
                </Form>
            </RoleWrapper>

        </div>
    )

};
