
  
import React from 'react';
import ListItem from '../listItem/ListItem';

export default function List({inputItems, addToCompleted}) {
    return(
        <main>
            <h2>To-Do</h2>
            <ul>
                {
                    inputItems.map((item, idx) => {
                        return(
                            <ListItem
                                key={idx}
                                content={item.title} addToCompleted={addToCompleted} 
                            />
                        )
                    })
                }
            </ul>
        </main>
    )
};