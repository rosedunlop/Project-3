import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AccountDetails from '../components/AccountDetails'
import SavedRecipes from '../components/SavedRecipes'
import { fetchUser } from '../helpers/api.js'

const Account = () => {
  const [accountDetails, setAccountDetails] = useState([])

  useEffect(() => {
    fetchUser().then(setAccountDetails)
  }, [])

  console.log(accountDetails)

  return (
    <div className='account-container'>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab eventKey='account' title='Account'>
          <AccountDetails
            username={accountDetails.username}
            email={accountDetails.email}
          />
        </Tab>
        <Tab eventKey='savedRecipes' title='Saved recipes'>
          <SavedRecipes recipes={accountDetails.likedRecipes} />
        </Tab>
        <Tab eventKey='myRecipes' title='My recipes'></Tab>
      </Tabs>
    </div>
  )
}

export default Account
