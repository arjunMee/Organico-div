import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import  './Sidebar.css';
import Organicologo from "./Organicologo.png"
import Home from '../pages/Home';

const Nav = styled.div`
  background: #3EB489;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #3EB489;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} className="sidebarIcon"/>
          </NavIcon>
          <img className="logo" onClick={Home} src={Organicologo} alt="Organico"
          />

          <div className="searchBar">
            <input className="searchInput" type="text"/>
            <FaIcons.FaSearch className="searchIcon"/>
          </div>

          <div className="wishlist">
            <FaIcons.FaRegGrinHearts/>
          </div>
          
          <div className="cart">
            <FaIcons.FaShoppingBasket w3-xxlarge  /> 
            <span className="basketCount">0</span>
          </div>

        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;