import React from 'react';
import Navbar from './../components/Navbar'


const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div className='text-3xl font-bold underline bg-green-600'>
                <p>Main</p>
            </div>
        </div>
    )
}

export default Main;