const initState = {
    posts: [
        {id:1, title:"Irgendwas"},
         {id:2, title:"Your horse"},
          {id:3, title:"My dog"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;