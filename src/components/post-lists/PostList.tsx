import React from 'react'
import {FaTrashAlt, FaStar} from "react-icons/fa";
import {StateType} from '../redux/demo-state';

export const PostLists = ({items}: any) => {
    debugger
    return (
        <main>
            {items.map((item: any) => {
                return (
                    <article key={item.key}>
                        <div>{item.title}</div>
                        <p><FaStar/></p>
                        <p><FaTrashAlt/></p>
                    </article>
                )
            })}

        </main>
    )
}