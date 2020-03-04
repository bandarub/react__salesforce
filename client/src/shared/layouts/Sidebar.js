import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom';

import { routerPath } from '../../constants';
import companyLogo from '../../assets/images/logo.png';

class SideBar extends Component {
	renderMenu = () => {
		const { pathname } = this.props.location;
		const menu = [
			{ content: 'Home', path: routerPath.home, icon: 'bookmark' },
			{ content: 'Properties', path: routerPath.properties, icon: 'home' },
			{ content: 'Brokers', path: routerPath.brokers, icon: 'supervisor_account' },
			{ content: 'Favorites', path: routerPath.favorites, icon: 'star' }
		];
		return menu.map((item, key) => {
			let isActive = item.path === pathname;
			if(pathname==="/"&&item.path==="/home"){
				isActive = true
			}
			let navItemClass = ['nav__navItem'];
			if (isActive) {
				navItemClass.push('active');
			}
			return (
				<div key={key} className={navItemClass.join(' ')}>
					<i className="material-icons">{item.icon}</i>
					<Link to={item.path}>{item.content}</Link>
				</div>
			);
		});
	};

	render() {
		const { onToggle, open } = this.props;
		return (
			<div className="sideBar">
				<div className={open ? 'sideBar__content' : 'sideBar__content hide'}>
					<img src={companyLogo} alt="StillArt logo" />
					<div className="nav">{this.renderMenu()}</div>
				</div>
				<i
					onClick={onToggle}
					className={open ? 'material-icons toggleIcon toggleOut' : 'material-icons toggleIcon '}
				>
					play_arrow
				</i>
			</div>
		);
	}
}

export default withRouter(SideBar);
