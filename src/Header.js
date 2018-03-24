import React from 'react';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-film fa-2x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

export default Header;