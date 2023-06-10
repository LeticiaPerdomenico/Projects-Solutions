import React from 'react';
import Navigation from '../navigation';
/*9*/
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        /*9*/
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
};

export default Root;