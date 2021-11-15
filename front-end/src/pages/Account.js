import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Account = () => {
  return (
    <div className='account-container'>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab eventKey='account' title='Account'></Tab>
        <Tab eventKey='savedRecipes' title='Saved recipes'></Tab>
        <Tab eventKey='myRecipes' title='My recipes'></Tab>
      </Tabs>
    </div>
  )
}

export default Account
