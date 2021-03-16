import React, { useState } from "react"

const Checkout = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [showAddressForm, setShowAddressForm] = useState(false)
  //   const [cards, setCards] = useState([])
  //   const [addresses, setAddresses] = useState([])

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [zipCode, setZipCode] = useState("")

  const cards = [
    {
      id: 1,
      fullname: "Juan Perez",
      cardType: "Visa",
      hiddenNumber: "********2398",
      secCode: 421,
      expirationMonth: 12,
      expirationYear: 21,
    },
    {
      id: 2,
      fullname: "Juan Perez",
      cardType: "American Express",
      hiddenNumber: "********2438",
      secCode: 994,
      expirationMonth: 2,
      expirationYear: 22,
    },
    {
      id: 3,
      fullname: "Juan Perez",
      cardType: "MasterCard",
      hiddenNumber: "********2943",
      secCode: 334,
      expirationMonth: 10,
      expirationYear: 21,
    },
  ]

  const addresses = [
    {
      id: 1,
      address: "Cabildo 1002",
      country: "Argentina",
      city: "Buenos Aires",
      state: "CABA",
      zipCode: 1414,
    },
    {
      id: 2,
      address: "Amenabar 489",
      country: "Argentina",
      city: "Buenos Aires",
      state: "CABA",
      zipCode: 1435,
    },
    {
      id: 3,
      address: "Olazabal 2178",
      country: "Argentina",
      city: "Buenos Aires",
      state: "CABA",
      zipCode: 1467,
    },
  ]

  return (
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
                  <input name="card" type="radio" value={card.id} />
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
                <img
                  className="checkout-delete-icon"
                  src="icons/delete.png"
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
              <h2 className="payment-or-address-title">Add Address</h2>
              <form
                className="payment-or-address-form"
                // onSubmit={handleSubmit}
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
      <div className="address-container">
        <div className="payment-or-address-container">
          <h2 className="payment-or-address-title">Select Shipping Address</h2>
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
                    <input name="card" type="radio" value={address.id} />
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
                // onSubmit={handleSubmit}
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
  )
}

export default Checkout
