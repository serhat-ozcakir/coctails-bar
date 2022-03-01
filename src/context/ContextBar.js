import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// I preferred to use the contex API structure while making this application.
// First, I pulled all the data from the API into the context structure
// I wrapped the structure I built with context and sent it to Home.js

export const ContextBarContext = createContext()

function ContextBarContextProvider({ children }) {
    const [cocktails, setCocktails] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [glasses, setGlasses] = useState([])
    const [categories, setCategories] = useState([])
    const [alcoholic_types, setAlcoholic_types] = useState([])


    
  
    // console.log(cocktails);
    // console.log(ingredients);
    // console.log(glasses);
    // console.log(categories);
    // console.log(alcoholic_types);
  
   
    useEffect(() => {
      const getCocktails = async () => {
        const cocktail = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
          .then((res) => res.data);
          setCocktails(cocktail);
      };
      getCocktails();

      const getCategory = async () => {
        const category = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
          .then((res) => res.data);
          setCategories(category);
      };
      getCategory();

      const getIngredients = async () => {
        const ingredient = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
          .then((res) => res.data);
          setIngredients(ingredient);
      };
      getIngredients();

      const getGlasses = async () => {
        const glass = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
          .then((res) => res.data);
          setGlasses(glass);
      };
      getGlasses();

      const getAlcoholic_Types = async () => {
        const type = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
          .then((res) => res.data);
          setAlcoholic_types(type);
      };
      getAlcoholic_Types();
      
    }, []);
  

    const values = {cocktails, ingredients, glasses, categories, alcoholic_types };
    return (
      <ContextBarContext.Provider value={values}>
        {children}
      </ContextBarContext.Provider>
    );
  }
  export default ContextBarContextProvider;