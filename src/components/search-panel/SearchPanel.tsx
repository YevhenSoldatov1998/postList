import React from 'react'
export const SearchPanel = () => {
    return (
        <div className={"search"}>
            <input type="text" placeholder={"Поиск по записям"}/>
            <div className="btn-group">
                <button className={"blue"}>Все</button>
                <button>Понравилось</button>
            </div>
        </div>
    )
}