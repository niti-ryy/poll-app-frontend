const initialState={user:{}}
const userReducer=(state,action)=>{
        switch(action.type){
            case "USER_LOGIN":{
                return {...state,user:action.payload}
            }
            case "LOGOUT_USER":{
                return {...state,user:{},myPolls:[]}
            }
            case "SET_MY_POLLS":{
                return {...state,myPolls:action.payload}
            }
            case "ADD_MY_POLL":{
                console.log(action.type,action.payload)
                return {...state,myPolls:[...state.myPolls,action.payload]}
                
            }
            default:{
                return {...state}
            }
        }
}

export default userReducer