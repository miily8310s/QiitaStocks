import React from 'react'
import Notes from '../notes/Notes'
import Search from '../notes/Search'
import About from '../layout/About'

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Notes />
            <About />
        </React.Fragment>
    )
}

export default Index;