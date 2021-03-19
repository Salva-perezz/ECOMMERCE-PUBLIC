import React, { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { clearStoreCart } from "../store/currentCartItems"
import { loadStoreCart } from "../store/currentCart"

const Checkout = () => {
  const currentCart = useSelector((state) => state.currentCart)
  const currentUser = useSelector((state) => state.currentUser)

  const [cards, setCards] = useState([])
  const [addresses, setAddresses] = useState([])

  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const [selectedPayment, setSelectedPayment] = useState("")
  const [selectedAddress, setSelectedAddress] = useState("")

  const [fullName, setFullname] = useState("")
  const [cardType, setCardType] = useState("")
  const [ccNumber, setCCNumber] = useState("")
  const [secCode, setSecCode] = useState("")
  const [expirationMonth, setExpirationMonth] = useState("")
  const [expirationYear, setExpirationYear] = useState("")

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [zipCode, setZipCode] = useState("")

  const history = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log(currentUser.id)
    if (currentUser)
      axios.get("/api/payments/" + currentUser.id).then((cards) => {
        setCards(cards.data)
      })
  }, [currentUser])

  React.useEffect(() => {
    console.log(currentUser.id)
    if (currentUser)
      axios.get("/api/addresses/" + currentUser.id).then((address) => {
        setAddresses(address.data)
      })
  }, [currentUser])

  const handleTransactionSubmit = (event) => {
    event.preventDefault()
    let checkoutDate = new Date()
    axios
      .put("/api/transactions/" + currentCart.id, {
        checkoutDate,
        paymentId: selectedPayment,
        addressId: selectedAddress,
      })
      .then(() => {
        dispatch(clearStoreCart())
        return axios.post("/api/transactions", {
          userId: currentUser.id,
        })
      })
      .then((newTransaction) => {
        dispatch(loadStoreCart({ id: newTransaction.data.id }))
        history.push("/")
      })
      .catch((error) => console.log(error))
  }

  const handleAddressSubmit = (event) => {
    event.preventDefault()
    axios
      .post("/api/addresses/", {
        address,
        city,
        state,
        country,
        zipCode,
        userId: currentUser.id,
      })
      .then((newAddress) => {
        setAddresses([...addresses, newAddress.data])
        setAddress("")
        setCity("")
        setState("")
        setCountry("")
        setZipCode("")
        setShowAddressForm(false)
      })
  }

  const handlePaymentSubmit = (event) => {
    event.preventDefault()
    axios
      .post("/api/payments/", {
        fullName,
        cardType,
        ccNumber,
        secCode,
        expirationMonth,
        expirationYear,
        userId: currentUser.id,
      })
      .then((newPayment) => {
        console.log(newPayment)
        setCards([...cards, newPayment.data])
        console.log(cards)
        setFullname("")
        setCardType("")
        setCCNumber("")
        setSecCode("")
        setExpirationMonth("")
        setExpirationYear("")
        setShowPaymentForm(false)
      })
  }

  const removePayment = function ({ id }) {
    axios
      .delete("/api/payments/" + id)
      .then(() => setCards(cards.filter((card) => card.id !== id)))
  }

  const removeAddress = function ({ id }) {
    axios
      .delete("/api/addresses/" + id)
      .then(() =>
        setAddresses(addresses.filter((address) => address.id !== id))
      )
  }

  return (
    <>
      <div className="checkout-container">
        <div className="payment-container">
          <div className="payment-or-address-container">
            <h2 className="payment-or-address-title">Select Payment Method</h2>
            <hr />
            {cards.length > 0 &&
              cards.map((card, index) => (
                <>
                  <div className="card-or-address-option">
                    <div
                      className="card-or-address-input-and-name"
                      key={index}
                      value={card.id}
                    >
                      <input
                        name="card"
                        type="radio"
                        value={card.id}
                        onChange={(event) =>
                          setSelectedPayment(event.target.value)
                        }
                      />
                      <div>
                        {card.cardType + ", " + card.hiddenNumber}
                        <div>
                          {"Expiration date: " +
                            card.expirationMonth +
                            "/" +
                            card.expirationYear}
                        </div>
                      </div>
                    </div>
                    {console.log(__dirname)}
                    <img
                      className="checkout-delete-icon"
                      src="icons/delete.png"
                      onClick={() => removePayment(card)}
                    ></img>
                  </div>
                  <hr />
                </>
              ))}
            {showPaymentForm ? null : (
              <div>
                <button onClick={() => setShowPaymentForm(true)}>
                  Add New Payment Method
                </button>
              </div>
            )}
          </div>
          {showPaymentForm ? (
            <>
              <div className="payment-or-address-container">
                <h2 className="payment-or-address-title">Add Payment Method</h2>
                <form
                  className="payment-or-address-form"
                  onSubmit={handlePaymentSubmit}
                >
                  <label>Credit Card Number</label>
                  <input
                    type="text"
                    name="ccNumber"
                    onChange={(event) => setCCNumber(event.target.value)}
                  />
                  <label>Type</label>
                  <input
                    type="text"
                    name="cardType"
                    onChange={(event) => setCardType(event.target.value)}
                  />
                  <label>Name on Card</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={(event) => setFullname(event.target.value)}
                  />
                  <div className="security-code-and-expiration-date">
                    <div className="security-code">
                      <label>Security Code</label>
                      <input
                        type="text"
                        name="secCode"
                        onChange={(event) => setSecCode(event.target.value)}
                      />
                    </div>
                    <div>
                      <label>Expiration Date</label>
                      <div className="expiration-date">
                        <input
                          type="text"
                          name="expirationMonth"
                          onChange={(event) =>
                            setExpirationMonth(event.target.value)
                          }
                        />
                        <input
                          type="text"
                          name="setExpirationYear"
                          onChange={(event) =>
                            setExpirationYear(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <button>Save Payment Method</button>
                </form>
              </div>
            </>
          ) : null}
        </div>
        <div className="address-container">
          <div className="payment-or-address-container">
            <h2 className="payment-or-address-title">
              Select Shipping Address
            </h2>
            <hr />
            {addresses.length > 0 &&
              addresses.map((address, index) => (
                <>
                  <div className="card-or-address-option">
                    <div
                      className="card-or-address-input-and-name"
                      key={index}
                      value={address.id}
                    >
                      <input
                        name="address"
                        type="radio"
                        value={address.id}
                        onChange={(event) =>
                          setSelectedAddress(event.target.value)
                        }
                      />
                      <div>
                        <div>{address.address}</div>
                        <div>
                          {address.city +
                            ", " +
                            address.state +
                            ", " +
                            address.zipCode +
                            ", " +
                            address.country}
                        </div>
                      </div>
                    </div>
                    <img
                      className="checkout-delete-icon"
                      src="icons/delete.png"
                      onClick={() => removeAddress(address)}
                    ></img>
                  </div>
                  <hr />
                </>
              ))}
            {showAddressForm ? null : (
              <div>
                <button onClick={() => setShowAddressForm(true)}>
                  Add New Address
                </button>
              </div>
            )}
          </div>
          {showAddressForm ? (
            <>
              <div className="payment-or-address-container">
                <h2 className="payment-or-address-title">Add Address</h2>
                <form
                  className="payment-or-address-form"
                  onSubmit={handleAddressSubmit}
                >
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={(event) => setCity(event.target.value)}
                  />
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    onChange={(event) => setState(event.target.value)}
                  />
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip_code"
                    onChange={(event) => setZipCode(event.target.value)}
                  />
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    onChange={(event) => setCountry(event.target.value)}
                  />
                  <button>Save Address</button>
                </form>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="checkout-submit-container">
        <button onClick={handleTransactionSubmit}>Confirm Order</button>
      </div>
    </>
  )
}

export default Checkout
