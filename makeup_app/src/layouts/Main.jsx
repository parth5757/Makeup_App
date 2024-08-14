import React from 'react';
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto  text-3xl font-bold underline bg-green">
                <p>Main</p>
            </div>
            <Footer />
        </>
    )
}

export default Main;