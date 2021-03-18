import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { editType, setTypes, addOneType } from "../store/types";
import { editCountry, setCountries, addOneCountry } from "../store/countries";
import { editYear, setYears, addOneYear } from "../store/years";

const AdminCategories = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const years = useSelector((state) => state.years);
  const countries = useSelector((state) => state.countries);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItem, setEditItem] = useState();
  const [name, setName] = useState();
  const [showAdd, setShowAdd] = useState(false);
  const [addItem, setAddItem] = useState();

  const submitEditHandler = (e, id, route, stateFunc) => {
    e.preventDefault();
    const isAdmin = currentUser.isAdmin;

    axios
      .put(`/api/categories/${route}/${id}/${isAdmin}`, { name })
      .then((category) => {
        console.log(name);
        dispatch(stateFunc(category.data));
      });
    setName();
  };

  const submitAddHandler = (e, route, stateFunc) => {
    e.preventDefault();
    const isAdmin = currentUser.isAdmin;

    axios
      .post(`/api/categories/${route}/${isAdmin}`, { name })
      .then((newCategory) => {
        dispatch(stateFunc(newCategory.data));
      });
    setName();
  };

  const editForm = (e, id) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
    setEditItem(id);
  };

  const addForm = (e, category) => {
    e.preventDefault();
    setShowAdd(!showAdd);
    setAddItem(category);
  };

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const handleDelete = (e, id, route, setFunc, state) => {
    e.preventDefault();
    const isAdmin = currentUser.isAdmin;

    axios.delete(`/api/categories/${route}/${id}/${isAdmin}`).then(() => {
      dispatch(setFunc(state.filter((category) => category.id != id)));
    });
  };

  return (
    <>
      <div>
        <h2>Types</h2>
        {types.length &&
          types.map((type) => {
            return (
              <div key={type.id}>
                <p>{type.name}</p>
                <button
                  onClick={(e) =>
                    handleDelete(e, type.id, "types", setTypes, types)
                  }
                >
                  Delete
                </button>{" "}
                <button onClick={(e) => editForm(e, type.name)}>Edit</button>
                {showEditForm && editItem === type.name ? (
                  <form
                    onSubmit={(e) =>
                      submitEditHandler(e, type.id, "types", editType)
                    }
                  >
                    <label htmlFor="typeName">Name: </label>
                    <input
                      onChange={(e) => changeHandler(e)}
                      name="typeName"
                      type="text"
                    />{" "}
                    <button type="submit">Submit</button>
                  </form>
                ) : null}
              </div>
            );
          })}
        <div>
          <button onClick={(e) => addForm(e, "type")}>
            {showAdd ? "Cancel" : "Add a type"}
          </button>
          {showAdd && addItem === "type" ? (
            <form onSubmit={(e) => submitAddHandler(e, "types", addOneType)}>
              <label htmlFor="typeAdd">Name: </label>
              <input
                onChange={(e) => changeHandler(e)}
                name="typeAdd"
                type="text"
              />{" "}
              <button type="submit">Add</button>
            </form>
          ) : null}
        </div>
      </div>
      <div>
        <h2>Countries</h2>
        {countries.length &&
          countries.map((country) => {
            return (
              <div key={country.id}>
                <p>{country.name}</p>
                <button
                  onClick={(e) =>
                    handleDelete(
                      e,
                      country.id,
                      "countries",
                      setCountries,
                      countries
                    )
                  }
                >
                  Delete
                </button>{" "}
                <button onClick={(e) => editForm(e, country.name)}>Edit</button>
                {showEditForm && editItem === country.name ? (
                  <form
                    onSubmit={(e) =>
                      submitEditHandler(e, country.id, "countries", editCountry)
                    }
                  >
                    <label htmlFor="typeName">Name: </label>
                    <input
                      onChange={(e) => changeHandler(e)}
                      name="typeName"
                      type="text"
                    />{" "}
                    <button type="submit">Submit</button>
                  </form>
                ) : null}
              </div>
            );
          })}
        <div>
          <button onClick={(e) => addForm(e, "country")}>
            {showAdd ? "Cancel" : "Add a country"}
          </button>
          {showAdd && addItem === "country" ? (
            <form onSubmit={(e) => submitAddHandler(e, "countries", addOneCountry)}>
              <label htmlFor="countryAdd">Name: </label>
              <input
                onChange={(e) => changeHandler(e)}
                name="countryAdd"
                type="text"
              />{" "}
              <button type="submit">Add</button>
            </form>
          ) : null}
        </div>
      </div>
      <div>
        <h2>Years</h2>
        {years.length &&
          years.map((year) => {
            return (
              <div key={year.id}>
                <p>{year.name}</p>
                <button
                  onClick={(e) =>
                    handleDelete(e, year.id, "years", setYears, years)
                  }
                >
                  Delete
                </button>{" "}
                <button onClick={(e) => editForm(e, year.name)}>Edit</button>
                {showEditForm && editItem === year.name ? (
                  <form
                    onSubmit={(e) =>
                      submitEditHandler(e, year.id, "years", editYear)
                    }
                  >
                    <label htmlFor="typeName">Name: </label>
                    <input
                      onChange={(e) => changeHandler(e)}
                      name="typeName"
                      type="number"
                    />{" "}
                    <button type="submit">Submit</button>
                  </form>
                ) : null}
              </div>
            );
          })}
       <div>
          <button onClick={(e) => addForm(e, "year")}>
            {showAdd ? "Cancel" : "Add a year"}
          </button>
          {showAdd && addItem === "year" ? (
            <form onSubmit={(e) => submitAddHandler(e, "years", addOneYear)}>
              <label htmlFor="yearAdd">Name: </label>
              <input
                onChange={(e) => changeHandler(e)}
                name="yearAdd"
                type="number"
              />{" "}
              <button type="submit">Add</button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AdminCategories;
