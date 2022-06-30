import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { LeoMorenoLogo } from "../assets/images/svgs";
import { MdClose, MdMenu } from "react-icons/md";
// import ProjectIcon from "./ProjectIcon";
import SocialLogo from "./SocialLogo";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { srConfig } from "../config";
import sr from "../utils/sr";

const NavMenuStyles = styled.div`
  position: fixed;
  user-select: none;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 8.2rem;
  padding: 1rem 0;
  /* border-bottom: 1px solid var(--secondary); */
  box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.15);
  background: var(--primary);
  transform: ${(props) =>
    props.navBarPosition ? "translateY(-8.2rem)" : "translateY(0px)"};
  transition: var(--transition);
  .items__container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ul {
      /* max-width: 1200px; */
      margin: 0 auto;
      width: 90%;
      text-align: center;
      width: 97vw;
      height: 97vh;
      .items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90%;
      }
      li {
        display: inline-block;
        border-radius: 8px;
        transition: 0.3s ease background-color;
      }
      a {
        transition: var(--transition);
      }
      div {
        display: inline-block;
        position: relative;
        font-family: "Inter Regular";
        letter-spacing: 0.5rem;
        margin: 2.1rem 0px;
        font-size: 1.6rem;
        color: var(--secondary);
        outline: none;
        cursor: pointer;
        transition: 0.2s color;
        &:hover {
          color: var(--tertiary);
        }
      }
      div::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: var(--primary);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      div:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      /* .active {
            text-decoration: underline;
            text-decoration-color: var(--primary);
            text-underline-position: under;
            transition: transform 1s ease-out;
            } */
    }

    .logo {
      width: 42px;
      height: 27px;
      margin: 0 10rem;
    }
    .mobile-menu-icon {
      /* position: absolute;
            right: 1rem;
            top: 1rem; */
      width: 4rem;
      cursor: pointer;
      /* display: none; */
    }
    .closeNavIcon {
      display: none;
    }
    .navItems {
      transition: 0.3s ease transform;
      background-color: var(--primary);
      border: 1px solid var(--secondary);
      padding: 2rem;
      width: calc(100vw - 2rem);
      height: calc(100vh - 2rem);
      /* max-width: 300px; */
      position: absolute;
      right: 1rem;
      top: 1rem;
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
    .hide-item {
      transform: translateY(calc(-100% - 1rem));
    }
  }
  @media only screen and (max-width: 768px) {
    height: 5rem;
    transform: ${(props) =>
      props.navBarPosition ? "translateY(-5rem)" : "translateY(0px)"};
    .items__container {
      .mobile-menu-icon {
        width: 3rem;
      }
    }
  }
`;

export const NavMenuNew = () => {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [scroll2, setScroll2] = useState(0);
  const [click, setClick] = useState(0);
  const [navBarPosition, setNavBarPosition] = useState(true);
  const revealIcon1 = useRef(null);
  const revealIcon2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (scroll2 !== scroll){
      if (scroll > scroll2) {
        setNavBarPosition(true);
      } else {
        setNavBarPosition(false);
      }
      setScroll2(scroll);
    }
  }, [scroll, scroll2]);

  useEffect(() => {
    click ? setNavBarPosition(true) : setNavBarPosition(false);
  }, [click]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealIcon1.current, srConfig(2000));
    sr.reveal(revealIcon2.current, srConfig(2000));
  }, [prefersReducedMotion]);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  return (
    <NavMenuStyles navBarPosition={navBarPosition}>
      <div className="items__container">
        <SocialLogo
          revealIcon={revealIcon1}
          className="logo"
          svg={LeoMorenoLogo}
          href="/"
          filled
          dimensions={3.5}
          target=""
        />
        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowNav(!showNav)}
          ref={revealIcon2}
        >
          <MdMenu color={"var(--secondary)"} />
        </div>
        <ul className={!showNav ? "navItems hide-item" : "navItems"}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setShowNav(!showNav)}
          >
            <MdClose color={"var(--secondary)"} />
          </div>
          <div className="items">
            <li>
              <a className="active" href="/#home">
                <div
                  onClick={(e) => {
                    setShowNav(!showNav);
                    setClick(true);
                  }}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  INICIO
                </div>
              </a>
            </li>
            <li>
              <a className="active" href="/#about">
                <div
                  onClick={(e) => {
                    setShowNav(!showNav);
                    setClick(true);
                  }}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  ACERCA DE
                </div>
              </a>
            </li>
            <li>
              <a className="active" href="/#skills">
                <div
                  onClick={(e) => {
                    setShowNav(!showNav);
                    setClick(true);
                  }}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  SKILLS
                </div>
              </a>
            </li>
            <li>
              <a className="active" href="/#projects">
                <div
                  onClick={() => {
                    setShowNav(!showNav);
                    setClick(true);
                  }}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  PROYECTOS
                </div>
              </a>
            </li>
            <li>
              <a className="active" href="/#contact">
                <div
                  onClick={() => {
                    setShowNav(!showNav);
                    setClick(true);
                  }}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  CONTACTO
                </div>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </NavMenuStyles>
  );
};
