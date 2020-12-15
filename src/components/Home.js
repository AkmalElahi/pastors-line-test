import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (<div className='inner'>
        <Link to='/all'>
            <Button
                className='all-contacts btn mr-10'
            >
                All Contacts
            </Button>
        </Link>
        <Link to='/us'>
            <Button className='us-contacts btn'
            >
                US Contacts
            </Button>
        </Link>
    </div>)
}

export default Home