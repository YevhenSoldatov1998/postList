import React from 'react';
import '../../App.css';
import {AppHeader as Header} from "../app-header/AppHeader";
import {SearchPanel} from '../search-panel/SearchPanel'
import { PostLists } from '../post-lists/PostList';
import {StateType} from "../types/intefaces";
import {connect} from "react-redux";


const App: React.FC<StateType> = ({items, filterValue}) => {
    return (
        <div className="App">
            <Header/>
            <SearchPanel/>
            <PostLists items={items} />
            <div className={"search"}>
                <input type="text" placeholder={"О чем вы думаете сейчас"}/>
                <div className="btn-group">
                    <button>Добавить</button>
                </div>
            </div>
        </div>
    );
}
let mapStateToProps = (state: StateType) =>{
    return{
        items: state.items,
        filterValue: state.filterValue
    }
}
export default connect(mapStateToProps)(App);
