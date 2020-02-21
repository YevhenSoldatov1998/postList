import React from 'react';
import '../../App.css';
import {AppHeader as Header} from "../app-header/AppHeader";
import {SearchPanel} from '../search-panel/SearchPanel'
import { PostLists } from '../post-lists/PostList';
import {state} from '../redux/demo-state'
function App() {
    return (
        <div className="App">
            <Header/>
            <SearchPanel/>
            <PostLists items={state.items} />
            <div className={"search"}>
                <input type="text" placeholder={"О чем вы думаете сейчас"}/>
                <div className="btn-group">
                    <button>Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default App;
