import {StateType} from "../components/types/intefaces";

const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';


const initialState: StateType = {
    items: [
        {title: 'title1', like: false, id: 1},
        {title: 'title1', like: true, id: 2},
        {title: 'title1', like: true, id: 3},
    ],
    filterValue: 'All'
}
export const postReducer = (state = initialState, action: AllActions) => {
    return state
};

interface IAddPostCreator {
    type: string,
    title: string
}
interface IRemovePost {
    type: string,
    postId: number
}

let addPost = (title: string) => ({type: ADD_POST,title});
let removePost = (postId: number) => ({type: REMOVE_POST, postId});
type AllActions = IAddPostCreator | IRemovePost;