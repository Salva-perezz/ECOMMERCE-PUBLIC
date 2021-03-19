import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

const CategoryDropdown = () => {
  const currentUser = useSelector((state) => state.currentUser)
  const typeCategories = useSelector((state) => state.types)
  const countryCategories = useSelector((state) => state.countries)
  const yearCategories = useSelector((state) => state.years)
  const [showMenuType, setShowMenuType] = useState(false)
  const [showMenuCountry, setShowMenuCountry] = useState(false)
  const [showMenuYear, setShowMenuYear] = useState(false)
  const history = useHistory()

  const searchCategory = (query, model) => {
    history.push(`/search?q=${query}&m=${model}`)
  }

  return (
    <>
      {currentUser.isAdmin ? (
        <div className="categories">
          <div className="categoriesOptions">
          <Link to="/admin/categories"><button>Categories</button></Link>
          </div>
          <div className="categoriesOptions">
          <Link to="/admin/products"><button>Products</button></Link>
          </div>
          <div className="categoriesOptions">
            <Link to="/admin/users"><button>Users</button></Link>
          </div>
        </div>
      ) : (
        <div className="categories">
          <div className="categoriesOptions">
            <button
              onClick={() => {
                setShowMenuType(!showMenuType)
                setShowMenuYear(false)
                setShowMenuCountry(false)
              }}
            >
              Type
            </button>
            {showMenuType ? (
              <ul className="categoriesOptionsList">
                {typeCategories.map((type, i) => {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => {
                          searchCategory(type.name, "Type")
                          setShowMenuType(false)
                        }}
                      >
                        {type.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
          <div className="categoriesOptions">
            <button
              onClick={() => {
                setShowMenuCountry(!showMenuCountry)
                setShowMenuYear(false)
                setShowMenuType(false)
              }}
            >
              Country
            </button>
            {showMenuCountry ? (
              <ul className="categoriesOptionsList">
                {countryCategories.map((country, i) => {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => {
                          searchCategory(country.name, "Country")
                          setShowMenuCountry(false)
                        }}
                      >
                        {country.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
          <div className="categoriesOptions">
            <button
              onClick={() => {
                setShowMenuYear(!showMenuYear)
                setShowMenuCountry(false)
                setShowMenuType(false)
              }}
            >
              Vintage
            </button>
            {showMenuYear ? (
              <ul className="categoriesOptionsList">
                {yearCategories.map((year, i) => {
                  return (
                    <li key={i}>
                      {" "}
                      <button
                        onClick={() => {
                          searchCategory(year.name, "Year")
                          setShowMenuYear(false)
                        }}
                      >
                        {year.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryDropdown
