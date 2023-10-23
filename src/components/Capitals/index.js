import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const CapitalNames = props => {
  const {capitalDetails} = props
  const {capitalDisplayText, id} = capitalDetails

  return (
    <option className="capitals capital" value={id} key={id}>
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].capitalDisplayText,
  }

  selectCapital = capital => {
    console.log(capital.target.value)
    const foundCapital = countryAndCapitalsList.find(
      countryData => countryData.id === capital.target.value,
    )
    this.setState({country: foundCapital.capitalDisplayText})
  }

  findCountry = () => {
    const {country} = this.state
    const foundCountry = countryAndCapitalsList.find(
      countryData => countryData.capitalDisplayText === country,
    )

    return foundCountry ? foundCountry.country : 'not found'
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="dropdown">
            <div className="show-content">
              <select
                className="dropdown-content"
                onChange={this.selectCapital}
              >
                {countryAndCapitalsList.map(capital => (
                  <CapitalNames capitalDetails={capital} key={capital.id} />
                ))}
              </select>
            </div>
            <p className="para"> is capital of which country?</p>
          </div>

          <p className="country">{this.findCountry()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
