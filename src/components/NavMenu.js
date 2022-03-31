import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  user-select: none;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: ${(props) =>
    props.navBarColor ? "transparent" : "var(--primary)"};
  /* transition: 0.3s; */
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
    div {
      display: inline-block;
      position: relative;
      font-family: "Inter Regular";
      letter-spacing: 0.5rem;
      margin: 2.1rem 5rem;
      font-size: 1.6rem;
      color: var(--secondary);
      outline: none;
      cursor: pointer;
    }
    div::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--tertiary);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    div:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    .active {
      text-decoration: underline;
      text-decoration-color: var(--tertiary);
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
      background-color: var(--contact-background);
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
  const [active, setActive] = useState(1);
  const [scroll, setScroll] = useState(1);
  const [navBarColor, setNavBarColor] = useState(false);

  useEffect(() => {
    let pant = window.screen.width;
    // console.log(pant);
    if (scroll === 1) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else if (scroll === 2) {
      if (pant >= 1351) {
        window.scroll({
          top: 760,
          behavior: "smooth",
        });
      } else if (pant >= 1241 && pant <= 1350) {
        window.scroll({
          top: 650,
          behavior: "smooth",
        });
      } else if (pant >= 1131 && pant <= 1240) {
        window.scroll({
          top: 700,
          behavior: "smooth",
        });
      } else if (pant >= 881 && pant <= 1130) {
        window.scroll({
          top: 620,
          behavior: "smooth",
        });
      } else if (pant >= 769 && pant <= 880) {
        window.scroll({
          top: 492,
          behavior: "smooth",
        });
      } else if (pant >= 500 && pant <= 768) {
        window.scroll({
          top: 380,
          behavior: "smooth",
        });
      } else if (pant >= 200 && pant <= 499) {
        window.scroll({
          top: 300,
          behavior: "smooth",
        });
      }
    } else if (scroll === 3) {
      window.scroll({
        top: 3900,
        behavior: "smooth",
      });
    }
  }, [scroll]);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    value >= 3720 ? setNavBarColor(true) : setNavBarColor(false);
    if (value !== -1) {
      setScroll(4);
    }
  });

  return (
    <NavMenuStyles className="navBar" navBarColor={navBarColor}>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowNav(!showNav)}
      >
        <MdMenu color={'var(--secondary)'} />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowNav(!showNav)}
        >
          <MdClose color={'var(--secondary)'} />
        </div>
        <li>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => {
              setShowNav(!showNav);
              setActive(1);
              setScroll(1);
            }}
            onKeyDown={() => setShowNav(!showNav)}
          >
            INICIO
          </div>
        </li>
        <li>
          <div
            className={active === 2 ? "active" : ""}
            onClick={(e) => {
              setShowNav(!showNav);
              setActive(2);
              setScroll(2);
            }}
            onKeyDown={() => setShowNav(!showNav)}
          >
            ACERCA DE
          </div>
        </li>
        <li>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => {
              setShowNav(!showNav);
              setActive(3);
              setScroll(3);
            }}
            onKeyDown={() => setShowNav(!showNav)}
          >
            CONTACTO
          </div>
        </li>
      </ul>
    </NavMenuStyles>
  );
};
