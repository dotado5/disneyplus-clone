import styled from "styled-components"

export const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;

  @media (max-width: 780px) {
    justify-content: space-between;
  }
`
export const Logo = styled.img`
  width: 80px;
  margin-top: -15px;
  margin-left: 5px;
`

export const SideBar = styled.div`
  display: flex;
  align-items: center;

  a img {
    width: 20px;
    height: 20px;
    margin-left: -30px;

    @media (min-width: 768px) {
      display: none;
    }
  }
`
export const DropDown = styled.div`
  background-color: #f9f9f9;
  color: black;
  height: 100vh;
  z-index: 10000;

  ul {
    list-style: none;
  }
`
export const NavMenu = styled.div`
  display: flex;
  padding: 0 12px;
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;

  @media (max-width: 780px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      color: white;
      font-size: 10px;
      letter-spacing: 1.2px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`
export const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
export const UserImgWrap = styled.div``
