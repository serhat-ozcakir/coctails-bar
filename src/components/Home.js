import React, { useState, useContext } from "react";
import { ContextBarContext } from "../context/ContextBar";
import logo from "../image/3747371.jpg";
import newLogo from "../image/iced-cocktails-drinking-glass.jpg";

const Home = () => {
  const { cocktails, ingredients, glasses, categories, alcoholic_types } =
    useContext(ContextBarContext);

  const [drinks, setDrinks] = useState([
    { category: "", drinkType: "", glassType: "" },
  ]);

  const [filteredDrink, setFilteredDrink] = useState([]);
  const [main, setMain] = useState(true);
  const [enter, setEnter] = useState(true);
  // console.log(ingredients);


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

  // console.log("filterDrink :>> ", filterDrink);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredDrink(filterDrink);
    setEnter(false);
    if (filterDrink.length == 0) {
      setMain(false);
    }
  };

  return (
    <div className="row">
      <div className="col-xl-4 col-sm-12">
        <form className="container w-50 mt-5 border" onSubmit={handleSubmit}>
          <div >
            <h1 className="text-primary fs-2">Order a drink</h1>
          </div>
          <div className=" mb-3 ">
            <label htmlFor="name" className="form-label">
              Cocktail name
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
            <label htmlFor="full name" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="full_name"
              required
              placeholder="Full name.."
              value={drinks.full_name}
              onChange={handleChange}
            />
          </div>
          <div className=" mb-3 ">
            <label htmlFor="url" className="form-label">
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
            <label htmlFor="url" className="form-label">
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
          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="category"
              required
            >
              <option value="" selected disabled>
                Category
              </option>

              {categories?.drinks?.map((item, index) => (
                <option key={index} value={item?.strCategory}>
                  {item?.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="drinkType"
              required
            >
              <option value="" selected disabled>
                Type of drink
              </option>
              {alcoholic_types?.drinks?.map((item, index) => (
                <option key={index} value={item?.strAlcoholic}>
                  {item?.strAlcoholic}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name="glassType"
              required
            >
              <option value="" selected disabled>
                Type of glass
              </option>
              {glasses?.drinks?.map((item, index) => (
                <option key={index} value={item?.strGlass}>
                  {item?.strGlass}
                </option>
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
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      {enter ? (
        <div className="col-xl-4 col-sm-12">
          <div
            className="card mt-5 p-3 mx-3"
            style={{ minHeight: 440, minWidth: 750 }}
          >
            <h5 className="card-title mt-1 text text-center text-primary fs-3 fst-italic">
              Welcome to my cocktails bar
            </h5>
            <img
              src={newLogo}
              class="card-img-top"
              alt="..."
              style={{ height: 250 }}
              className="mt-2"
            />
            <p className="mt-2 fst-italic fw-bold">
              Delicious drinks await you. You can choose very special drinks for
              yourself at the Cocktail Bar. All you have to do is set your
              wishes and then enjoy yourself...
            </p>
          </div>
        </div>
      ) : main ? (
        filteredDrink?.map((item) => (
          // <div className="container">
          <div className="col-xl-4 col-sm-12">
            <div className="card mt-5 p-3 mx-3" style={{ minHeight: 440 }}>
              <img
                src={item.strDrinkThumb}
                className="card-img-top"
                alt="..."
                style={{ height: 250 }}
              />
              <h5 className="card-title mt-1">{item.strDrink}</h5>
              <p className="card-text">{item.strInstructions}</p>
              <div className="card-body"></div>
            </div>
          </div>
          // </div>
        ))
      ) : (
        <div className="col-xl-4 col-sm-12">
          <div
            className="card mt-5 p-3 mx-3"
            style={{ minHeight: 440, minWidth: 600 }}
          >
            <h5 className="card-title mt-1 text-center text-danger">
              Sorry, no beverage found matching your search criteria.
            </h5>
            <img
              src={logo}
              className="card-img-top"
              alt="..."
              style={{ height: 250 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
