import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategoriesMap(categories);
        }
        getCategoriesMap(); 
    }, []);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};
