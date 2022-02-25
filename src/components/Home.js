import React, { useState, useContext } from "react";
import { ContextBarContext } from "../context/ContextBar";

const Home = () => {
  const { cocktails, ingredients, glasses, categories, alcoholic_types } =
    useContext(ContextBarContext);
  
   

  const [drinks, setDrinks] = useState({
    category: "",
    drinkType: "",
    glassType: "",
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrinks({ ...drinks, [name]: value });
  };

  const filterDrink = cocktails?.drinks?.filter((item) => {
    if (
      item?.strCategory === drinks?.category &&
      item?.strAlcoholic === drinks?.drinkType &&
      item?.strGlass === drinks?.glassType 
      
    ) {
      return true;
    }
  });

  // const handleSubmit = (e) => {
  //   e.preventdefault()
  //   filterDrink.push(filtered)

  // };

  return (
    <div className="row">
      <div className="col-xl-4 col-sm-12">
        <form
          className="container w-50 mt-5"
          // onSubmit={handleSubmit}
        >
          <div>
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
              name="full name"
              required
              //   value={inputs.title || ""}
              //   onChange={handleChange}
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
              name="url_name"
              required
              //   value={inputs.url_name || ""}
              //   onChange={handleChange}
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
              name="url_name"
              required
              //   value={inputs.url_name || ""}
              //   onChange={handleChange}
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

              {categories?.drinks?.map((item) => (
                <option value={item?.strCategory}>{item?.strCategory}</option>
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
              {alcoholic_types?.drinks?.map((item) => (
                <option value={item?.strAlcoholic}>{item?.strAlcoholic}</option>
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
              {glasses?.drinks?.map((item) => (
                <option value={item?.strGlass}>{item?.strGlass}</option>
              ))}
            </select>
          </div>

          <div className=" mb-3 ">
            {/* <label for="title" className="form-label">
              Ingredients
            </label>
            <br /> */}
     
            {/* <input
              type="checkbox"
              // class="form-control"
              id="title"
              name="title"
              required
              //   value={inputs.title || ""}
              //   onChange={handleChange}
            /> */}
          </div>
          {/* <button
           onClick={()=>setClicked(true)}
            className="btn btn-primary">
            Search
          </button> */}
        </form>
      </div>
      {filterDrink?.map((item) => (
        <div className="col-xl-4 col-sm-12">
          <div class="card mt-5">
            <img src={item.strDrinkThumb} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.strDrink}</h5>
              <p class="card-text">{item.strInstructions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
