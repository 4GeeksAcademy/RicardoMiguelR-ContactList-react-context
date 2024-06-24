import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {

	const location = useLocation();
  	const isAddContactRoute = location.pathname === '/add-contact';
	const isContactRoute = location.pathname === '/';
		
  	const shouldShowButton = !isAddContactRoute;
	const ShouldNotShowButton = !isContactRoute;

	return (
		<nav className="nav-principal container-fluid navbar p-3 mb-3 justify-content-end">
			<div className='img-nav'>
				<img src='https://i.pinimg.com/originals/f0/57/c0/f057c007ae5f30210dcadd3c7c3dd1f1.gif' width="150px" />
			</div>
			<div className="back">
				{ShouldNotShowButton && (
					<Link to="/">
						<button onClick={()=> {ShouldNotShowButton}} id='button-return' className="btn">
							<i className="bi bi-arrow-bar-left me-2" style={{fontSize: '20px'}}></i>
							Get Back To Contacts</button>
					</Link>
				)}
			</div>
			<div className="ml-auto">
				{shouldShowButton && (
        			<Link to="/add-contact">
          				<button onClick={()=> {shouldShowButton}} id='button-add' className="btn">
						  	<i className="bi bi-person-fill-add me-2" style={{fontSize: '20px'}}></i>
							Add New Contact</button>
        			</Link>
      			)}
			</div>
		</nav>
	);
};
