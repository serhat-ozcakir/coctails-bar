import React, { useState, useContext } from "react";
import { ContextBarContext } from "../context/ContextBar";
import logo from "../image/3747371.jpg"

const Home = () => {
  const { cocktails, ingredients, glasses, categories, alcoholic_types } =
    useContext(ContextBarContext);

  const [drinks, setDrinks] = useState([
    { category: "", drinkType: "", glassType: ""}
  ]);

  // console.log("cocktails :>> ", cocktails.drinks);
  // console.log(ingredients);
  // const ing = []
  // console.log('ing', ing)

  // console.log("drinks :>> ", drinks);
  const [filteredDrink, setFilteredDrink] = useState([]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrinks({ ...drinks, [name]: value });
    
    // setIng({...ing, [name]: value })
  };
  




  const filterDrink = cocktails?.drinks?.filter((item) => {
    if (
      item?.strCategory === drinks?.category &&
      item?.strAlcoholic === drinks?.drinkType &&
      item?.strGlass === drinks?.glassType
      //  &&
      // item?.strIngredient1 === drinks?.ingType
      ) {
        return true;
      }
    });
    const [main, setMain] = useState(true)
    // console.log('main :>> ', main);
  // console.log("filterDrink :>> ", filterDrink);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredDrink(filterDrink);
    const { value } = e.target;
    // setDrinks({ ...drinks});
    console.log(filterDrink);
    
    // console.log(filteredDrink);
    if (filterDrink.length == 0){
      setMain(false)
    } 
    
  };

  return (
    <div className="row">
      <div className="col-xl-4 col-sm-12">
        <form className="container w-50 mt-5 border" onSubmit={handleSubmit} >
          <div className="">
            <h1>Order a drink</h1>
          </div>
          <div className=" mb-3 ">
            <label for="name" className="form-label">
              Cocktail bar
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={drinks.name}
              onChange={handleChange}
              required
              placeholder="Cocktail name.."
            />
          </div>
          <div className=" mb-3 ">
            <label for="full name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="full_name"
              required
              placeholder="Full name.."
              value={drinks.full_name}
              onChange={handleChange}
            />
          </div>
          <div className=" mb-3 ">
            <label for="url" class="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="phone_name"
              required
              placeholder="Number.."
              value={drinks.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className=" mb-3 ">
            <label for="url" class="form-label">
              Email adress
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="email_name"
              required
              placeholder="Email adress.."
              value={drinks.email_name}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="category"
              required
            >
              <option value="" selected disabled>
                Category
              </option>

              {categories?.drinks?.map((item,index) => (
                <option key={index} value={item?.strCategory}>{item?.strCategory}</option>
              ))}
            </select>
          </div>
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="drinkType"
              required
            >
              <option value="" selected disabled>
                Type of drink
              </option>
              {alcoholic_types?.drinks?.map((item,index) => (
                <option key={index} value={item?.strAlcoholic}>{item?.strAlcoholic}</option>
              ))}
            </select>
          </div>
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="glassType"
              required
            >
              <option value="" selected disabled>
                Type of glass
              </option>
              {glasses?.drinks?.map((item,index) => (
                <option key={index} value={item?.strGlass}>{item?.strGlass}</option>
              ))}
            </select>
          </div>
{/* 
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleIng}
              name="ingType"
              required
            >
              <option value="" selected disabled>
                İngridients
              </option>
              {ingredients?.drinks?.map((item) => (
                <option value={item?.strIngredient1}>{item?.strIngredient1}</option>
              ))}
            </select>
            <div>

            )} 
            </div>
            </div> */}
          <button
            type="submit"
            // onClick={handleSubmit}
            // className="btn btn-primary"
            className="btn btn-primary"
          >
            Search
          </button>
        </form>
      </div>
{/* {filteredDrink.length == 0 ? <div>araba</div> : null } */}
      { 
      main  ?
      filteredDrink?.map((item) => (
        // <div className="container">
          <div className="col-xl-4 col-sm-12">
            <div class="card mt-5 p-3 mx-3" style={{ minHeight: 440 }}>
              <img
                src={item.strDrinkThumb}
                class="card-img-top"
                alt="..."
                style={{ height: 250 }}
              />
              <h5 class="card-title mt-1">{item.strDrink}</h5>
              <p class="card-text">{item.strInstructions}</p>
              <div class="card-body"></div>
            </div>
          </div>
        // </div>
      ))
       : 
      
       <div className="col-xl-4 col-sm-12">
       <div class="card mt-5 p-3 mx-3" style={{ minHeight: 440 }}>
         <h5 class="card-title mt-1 text">Sorry, no beverage found matching your search criteria.</h5>
         <img
           src={logo}
           class="card-img-top"
           alt="..."
           style={{ height: 250 }}
         />
         
         
       </div>
     </div>

      }
    </div>
  );
};

export default Home;
