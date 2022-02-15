import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--beige);
    ul {
      max-width: 1200px;
      margin: 0 auto;
      width: 90%;
      text-align: center;
      li {
        display: inline-block;
        border-radius: 8px;
        transition: 0.3s ease background-color;
        
      }
      a {
        display: inline-block;
        position: relative;
        font-family: 'Inter Regular';
        letter-spacing: .5rem;
        margin: 2.1rem 5rem;
        font-size: 1.6rem;
        color: var(--black);
        outline: none;
      }
      a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: var(--orange);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      .active {
        text-decoration: underline;
        text-decoration-color: var(--orange);
        text-underline-position: under;
        transition: transform 1s ease-out;
       
      }
    }
    .mobile-menu-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 4rem;
      cursor: pointer;
      display: none;
    }
    .closeNavIcon {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      padding: 0;
      .hide-item {
        transform: translateY(calc(-100% - var(--top)));
      }

      .mobile-menu-icon {
        display: block;
      }
      .navItems {
        --top: 1rem;
        transition: 0.3s ease transform;
        background-color: var(--white);
        padding: 2rem;
        width: 90%;
        max-width: 300px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        .closeNavIcon {
          display: block;
          width: 3rem;
          margin: 0 0 0 auto;
          cursor: pointer;
          * {
            pointer-events: none;
          }
        }
        li {
          display: block;
          margin-bottom: 1rem;
        }
      }
    }
`;

export const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowNav(!showNav)}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowNav(!showNav)}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setShowNav(!showNav)}
          >
            INICIO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setShowNav(!showNav)}
          >
            ACERCA DE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setShowNav(!showNav)}
          >
            CONTACTO
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
};
