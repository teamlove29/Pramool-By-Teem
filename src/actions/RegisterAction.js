import Axios from "axios";
import { MEMBERS_FETCH } from './type';
import { CREATE_MEMBER } from './type';

export const MembersFetch = () => {
    return dispatch => {
        Axios.get("http://localhost:4000/members").then(
            res => {
                dispatch({ type: MEMBERS_FETCH, payload : res.data });
            } )
}}

export const createMember = (values) =>{
    return dispatch => {
        Axios.post("http://localhost:4000/members/" , values).then(
            res => 
            dispatch({type : CREATE_MEMBER})
        )
    }
}