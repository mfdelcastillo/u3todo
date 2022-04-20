import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import List from "../components/list/List";
import Completed from "../components/finished/Finished";
import toDoListData from "../data";


export default function App(props) {
    const [inputItems, setInputItems] = useState(toDoListData);
    const [completedItems, setCompletedItems] = useState([]);
    const [buttonPress, setButtonPress] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3000/')
                    // setInputItems(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [buttonPress]);

    const addToCompleted = (item) => {
        const completedItemsArr = [item, ...completedItems];
        setCompletedItems(completedItemsArr);
    };

    const handleClick = async (statusChange, id) => {
        try {
            const response = await fetch(`htttp://localhost:3000/${id}`, {
                status: statusChange
            })
            if(response.status === 200) {
                setButtonPress(!buttonPress)
            } else {
                console.log('Something Went Wrong')
            }
        } catch(err) {
            console.log(err)
        }
    };

    const handleSubmit = (item) => {
        setInputItems([{title: item}, ...inputItems]);
    };

    return(
        <main className="App">
            <Header />
            <Input handleSubmit={handleSubmit} />
            <List inputItems={inputItems} addToCompleted={addToCompleted} />
            <Completed handleClick={handleClick} inputItems={inputItems} completedItems={completedItems} />
        </main>
    )
};