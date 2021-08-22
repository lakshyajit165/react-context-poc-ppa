import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = React.createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);

    function loadData() {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res);
            setLoading(false);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    // we can add multiple useEffects(as per requirement)
    // useEffect(() => {
    //     loadData();

    // }, [])

    const value = {
        posts,
        loading,
        setPosts,
        loadData
    }
    
    
    return (
        <GlobalContext.Provider value={value}>
            { children }
        </GlobalContext.Provider>
    )
}