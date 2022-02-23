// import axios from 'axios'

// export const getCocktails = (setDataCocktails)=>{
//     var cocktails = {
//         method : 'get',
//         url : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
//     }
// }

// axios(cocktails)
// .then(function (response) {
//   // console.log(response.data.result);
//   // console.log(response);
//   setDataCocktails(response.data.result)
// })
// .catch(function (error) {
//   console.log(error);
// });



import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ContextBarContext = createContext({ children })

function ContextBarContextProvider(){
    const [cocktails, setCocktails] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [glasses, setGlasses] = useState([])
    const [categories, setCategories] = useState([])
    const [alcoholic_types, setAlcoholic_types] = useState([])
}

useEffect(()=>{
    const getCocktails = async () => {
        const cocktail = await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
          .then((res) => res.data);
          setCocktails(cocktail);
          console.log(cocktail);
      };
      getItem();
})

return (
    <ContextBarContext.Provider value={values}>
      {children}
    </ContextBarContext.Provider>
  );

export default ContextBarContextProvider;