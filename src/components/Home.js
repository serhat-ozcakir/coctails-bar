import React, { useState, useContext } from "react";
import { ContextBarContext } from "../context/ContextBar";
import logo from "../image/3747371.jpg";
import newLogo from "../image/iced-cocktails-drinking-glass.jpg";
const initialState = [
  {
    category: "",
    drinkType: "",
    glassType: "",
    ingType1: "",
    ingType2: "",
    ingType3: "",
    ingType4: "",
    ingType5: "",
  },
];
const Home = () => {
  const { cocktails, ingredients, glasses, categories, alcoholic_types } =
    useContext(ContextBarContext);

  const [drinks, setDrinks] = useState(initialState);
  const [filteredIng, setFilteredIng] = useState([]);
  const [filteredDrink, setFilteredDrink] = useState([]);
  const [main, setMain] = useState(true);
  const [enter, setEnter] = useState(true);
  // console.log(ingredients.drinks.length);

  // console.log(Object.entries(filteredIng)[1][1])
  const onIng = (e) =>
    filteredIng.includes(e.target.value)
      ? null
      : setFilteredIng([...filteredIng, e.target.value]);
  // console.log('e :>> ', e);
  // console.log('filteredIng', filteredIng)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrinks({ ...drinks, [name]: value });
    // console.log("drinks", drinks);
  };
  // console.log('itemStr :>> ', item?.strIngredient2);

  // console.log(cocktails?.drinks);
  const filterDrink = cocktails?.drinks?.filter((item) => {
    // console.log('FilteredIng :>> ', filteredIng);
    if (
      item?.strCategory === drinks?.category &&
      item?.strAlcoholic === drinks?.drinkType &&
      item?.strGlass === drinks?.glassType &&
      (item?.strIngredient1 === drinks?.ingType1 ||
        drinks?.ingType2 ||
        drinks?.ingType3 ||
        drinks?.ingType4 ||
        drinks?.ingType5 ||
        item?.strIngredient2 === drinks?.ingType1 ||
        drinks?.ingType2 ||
        drinks?.ingType3 ||
        drinks?.ingType4 ||
        drinks?.ingType5 ||
        item?.strIngredient3 === drinks?.ingType1 ||
        drinks?.ingType2 ||
        drinks?.ingType3 ||
        drinks?.ingType4 ||
        drinks?.ingType5 ||
        item?.strIngredient4 === drinks?.ingType1 ||
        drinks?.ingType2 ||
        drinks?.ingType3 ||
        drinks?.ingType4 ||
        drinks?.ingType5 ||
        item?.strIngredient5 === drinks?.ingType1 ||
        drinks?.ingType2 ||
        drinks?.ingType3 ||
        drinks?.ingType4 ||
        drinks?.ingType5)
    ) {
      return true;
    }
  });

  // console.log("filteredDrink :>> ", filteredDrink);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredDrink(filterDrink);
    e.target.children[1].children[1].value = "";
    e.target.children[2].children[1].value = "";
    e.target.children[3].children[1].value = "";
    e.target.children[4].children[1].value = "";
    e.target.children[5].children[0].children[0].selected = true;
    e.target.children[6].children[0].children[0].selected = true;
    e.target.children[7].children[0].children[0].selected = true;
    e.target.children[8].children[0].children[0].selected = true;
    // console.log('e :>> ', e.target.children[5].children[0].children[0].selected );
    setEnter(false);
    if (filterDrink.length == 0) {
      setMain(false);
    }
    setDrinks(initialState);
    // console.log(drinks);
    // console.log(drinks?.ingType1, drinks?.ingType2);
  };

  // console.log(filteredIng.includes(drinks?.ingType));
  // console.log(drinks?.ingType);
  // console.log(filteredIng[1]);

  return (
    <div className="row">
      <div className="col-xl-4 col-sm-12">
        <form className="container w-50 mt-5 border" onSubmit={handleSubmit}>
          <div>
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
            <label htmlFor="phone_number" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              name="phone_number"
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

          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={handleChange}
              name={`ingType${filteredIng.length}`}
              onClick={onIng}
            >
              <option value="" selected disabled>
                Ingridients
              </option>
              {ingredients?.drinks?.map((item, index) => (
                <option
                  // onClick={onIng}
                  key={index}
                  value={item?.strIngredient1}
                >
                  {item?.strIngredient1}
                </option>
              ))}
            </select>

            <div></div>
          </div>
          <div>
            {!enter
              ? null
              : filteredIng?.map((item, index) =>
                  !item ? null : (
                    <li
                      className="list-group-item list-group-item-primary mb-2"
                      key={index}
                    >
                      {item}
                    </li>
                  )
                )}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </div>
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
              className="card-img-top"
              alt="..."
              style={{ height: 250 }}
              className="mt-2"
            />
            <p className="mt-2 fst-italic fw-bold text-success">
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
            <h5 className="card-title mt-1 text-center text-primary fs-4">
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
