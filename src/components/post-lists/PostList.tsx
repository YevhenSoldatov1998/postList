import React from 'react'
import {FaTrashAlt, FaStar} from "react-icons/fa";
import {ItemType} from "../types/intefaces";
interface IPostLists {
    items: Array<ItemType>
}
export const PostLists: React.FC<IPostLists>= (props) => {
    debugger
    return (
        <main>
            {props.items.map((item) => {
                return (
                    <article key={item.id}>
                        <div>{item.title}</div>
                        <p><FaStar/></p>
                        <p><FaTrashAlt/></p>
                    </article>
                )
            })}

        </main>
    )
}