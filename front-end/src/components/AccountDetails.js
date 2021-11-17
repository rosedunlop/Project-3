import React from 'react'

const AccountDetails = ({ username, email }) => {
  return (
    <>
      <div className='accountDetails-container'>
        <h2 className='account-header'>Your account details</h2>
        <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>username</h3>
            </div>
            <button></button>
          </div>
          <div className='accountField-input'>
            <form>
              <input id='username' value={username}></input>
            </form>
          </div>
        </div>
        <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>email</h3>
            </div>
            <button></button>
            <div className='accountField-input'>
              <form>
                <input id='email' value={email}></input>
              </form>
            </div>
          </div>
        </div>
        <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>password</h3>
            </div>
            <button></button>
            <div className='accountField-input'>
              <form>
                <input type='password' value='password'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountDetails
