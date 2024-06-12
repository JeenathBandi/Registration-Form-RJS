// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {isSubmitted: false, firstName: '', lastName: '', errorMsg: ''}

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderSuccessfulSubmit = () => {
    const {isSubmitted} = this.state

    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="submitted-heading">Submitted Successfully</p>
        <button type="submit" className="submit-btn">
          Submit Another Response
        </button>
      </>
    )
  }

  getSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' || lastName === '') {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState(prevState => ({isSubmitted: !prevState.isSubmitted}))
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({errorMsg: ''})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({errorMsg: ''})
    }
  }

  render() {
    const {isSubmitted, firstName, lastName, errorMsg} = this.state
    console.log(firstName)
    console.log(lastName)
    console.log(errorMsg)
    return (
      <div className="Registration-form-container">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.getSubmit}>
          {isSubmitted ? (
            this.renderSuccessfulSubmit()
          ) : (
            <>
              <div className="label-name-container">
                <label className="labels" htmlFor="firstname">
                  FIRST NAME
                </label>
                <input
                  className="inputs"
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurFirstName}
                />
                <p className="error-msg">{errorMsg}</p>
              </div>
              <div className="label-name-container">
                <label className="labels" htmlFor="lastname">
                  LAST NAME
                </label>
                <input
                  className="inputs"
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
                />
                <p className="error-msg">{errorMsg}</p>
              </div>
              <button type="submit" className="submit-btn">
                submit
              </button>
            </>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
