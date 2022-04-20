import React from 'react';

export default function ListItem(props, {handleClick}) {
    return(
        <main>
            <li onClick={() => props.addToCompleted(props.content)}>
                {
                    props.content
                }
                <button>
                    Completed
                </button>
            </li>
        </main>

    )
};