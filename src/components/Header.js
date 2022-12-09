import React from "react"
import {
  Logo,
  Nav,
  NavMenu,
  UserImg,
  Login,
  LoginContainer,
  SideBar,
  DropDown,
} from "./components styles/HeaderStyle"
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/User/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { auth, provider } from "../firebase"
import { useHistory, Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  const [drop, setDrop] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      )
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut())
      history.push("/login")
    })
  }

  return (
    <Nav>
      <SideBar>
        <a href="#" onClick={() => setDrop(true)}>
          <img src="/images/list.svg" />
        </a>
      </SideBar>
      <Logo src="/images/logo.svg" />
      {/* {
                !userName ?
                    (
                        <LoginContainer>
                            <Login onClick={signIn}> Login</Login>
                        </LoginContainer>
                    )
                    : */}
      <>
        <NavMenu>
          <Link>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </Link>
          <Link>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
          </Link>
          <Link>
            <img src="/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
          </Link>
          <Link>
            <img src="/images/original-icon.svg" />
            <span>ORIGINALS</span>
          </Link>
          <Link>
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
          </Link>
          <Link>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
          </Link>
        </NavMenu>
        <UserImg src="/images/rick and morty.png" onClick={signOut} />
      </>
      {/* } */}
    </Nav>
  )
}

export default Header
