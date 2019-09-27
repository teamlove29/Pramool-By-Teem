import { MEMBERS_FETCH } from '../actions/type' 
import { CREATE_MEMBER } from '../actions/type' 

export default function(state=[], action) {
    switch (action.type){
        case MEMBERS_FETCH : return action.payload;
        case CREATE_MEMBER : return {saved : true, message : "สมัครสมาชิกเรียบร้อย"}
        default : return state;
    }
}