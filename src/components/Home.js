import React, { useEffect } from "react"
import db from "../firebase"
import { Container } from "./components styles/HomePageStyle"
import ImgSlider from "./ImgSlider"
import Movies from "./Movies"
import Viewers from "./Viewers"
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      // console.log(snapshot)
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log("ran")
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies))
    })
  }, [])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home
