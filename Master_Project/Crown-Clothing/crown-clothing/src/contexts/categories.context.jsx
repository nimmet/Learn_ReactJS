
import {createContext, useState,useEffect} from 'react';
import { getCategoriesAndDoccuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children})=> {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(() => {
        const getCatetoriesMap = async() => {
            const categoryMap = await getCategoriesAndDoccuments()
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCatetoriesMap()
    },[])
    // useEffect(()=> { 
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    //this code used to add local data to firebase store. after fetching the data, we have to stop this servise otherwise it will fetch every render time.
    const value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>
            {children}</CategoriesContext.Provider>
    )
}
