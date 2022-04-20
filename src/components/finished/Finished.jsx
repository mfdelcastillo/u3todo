import React from 'react';

export default function Completed(props, {handleClick}) {
    return(
        <main>
            <h2>Finished</h2>
            <ul>
                {
                    props.completedItems.map((item) => {
                        return(
                            <li>
                                {item}
                                <button>
                                    Remove
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
};