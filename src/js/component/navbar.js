import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
	const location = useLocation();
  	const isAddContactRoute = location.pathname === '/add-contact';
	const isContactRoute = location.pathname === '/';
		
	
  	const shouldShowButton = !isAddContactRoute;
	const ShouldNotShowButton = !isContactRoute;

	return (
		<nav className=" container-fluid d-flex navbar navbar-dark bg-dark p-3 mb-3">
			{ShouldNotShowButton && (
        			<Link to="/">
          				<button onClick={()=> {ShouldNotShowButton}} id='button-return' className="btn btn-primary">Get Back To Contacts</button>
        			</Link>
      			)}
			<div className="ml-auto">
				{shouldShowButton && (
        			<Link to="/add-contact">
          				<button onClick={()=> {shouldShowButton}} id='button-add' className="btn btn-primary ">Add New Contact</button>
        			</Link>
      			)}
			</div>
		</nav>
	);
};
