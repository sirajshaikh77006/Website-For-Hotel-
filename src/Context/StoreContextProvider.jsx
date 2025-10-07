import React from "react";
import { food_list } from '../assets/assets/'
import { StoreContext } from "./StoreContext";


const StoreContextProvider = (props) => {

    const cntextvalue = {
        food_list
    };

    return (
        <StoreContext.Provider value={cntextvalue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;