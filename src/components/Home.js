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

  

cocktails?.drinks?.map((item)=>{
  console.log(item?.strGlass);
  // console.log(drinks?.glassType);
  item?.strGlass === drinks?.glassType ? console.log("true") : console.log("false")
})

  //   function filterById(item) {
  //     if (item?.strIngredient1 === ) {
  //         return true;
  //     }
  // }

  // const arrById = ingredients?.filter((item) => {
  //   if (Object.values(cocktails.drinks[0]).includes(item?.strIngredient1)) {
  //     return true;
  //   }
  // });

  // console.log("drinks :>> ", cocktails.drinks);

  return (
    <div className="row">
      <div className="col-xl-4 col-sm-12">
        <form
          className="container w-50 mt-5"
          //   onSubmit={handleSubmit}
          method="POST"
          //   action="http://127.0.0.1:8000/linktree_list"
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
              //   value={inputs.name || ""}
              //   onChange={handleChange}
            />
          </div>
          <div className=" mb-3 ">
            <label for="title" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
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
            >
              <option selected disabled>
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
            >
              <option selected disabled>
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
            >
              <option selected disabled>
                Type of glass
              </option>
              {glasses?.drinks?.map((item) => (
                <option value={item?.strGlass}>{item?.strGlass}</option>
              ))}
            </select>
          </div>

          <div className=" mb-3 ">
            <label for="title" className="form-label">
              Ingredients
            </label>
            <br />
            <input
              type="checkbox"
              // class="form-control"
              id="title"
              name="title"
              required
              //   value={inputs.title || ""}
              //   onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-xl-4 col-sm-12">
        <div class="card mt-5">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
