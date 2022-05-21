import styled from "styled-components";
import LogoImg from "../assets/images/leomoreno-logo.svg"


const NavMenuStyles = styled.div`
    position: fixed;
    user-select: none;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 82px;
    padding: 1rem 0;
    background: transparent;
    .items__container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        .logo {
            width: 42px;
            height: 27px;
            margin: 0 10rem;
        }
    }

    @media only screen and (max-width: 1200px) {
        .items__container {
            width: 90%;
            margin: 0 auto;
        .logo {
            margin: 0px !important;
        }
    }
    }
`

export const NavMenuNew = () => {

    return (
        <NavMenuStyles>
            <div className="items__container" >
                <img className="logo" src={LogoImg} alt='logo'/>
            </div>
        </NavMenuStyles>
    )
}