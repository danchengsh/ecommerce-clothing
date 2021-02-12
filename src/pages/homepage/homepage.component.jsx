import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (        //functional component cos we dont need any lifecycle methods nor store any state/props
    <div className="homepage">
        <Directory></Directory>
    </div>
);

export default HomePage;