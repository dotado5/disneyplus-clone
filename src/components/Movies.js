import React from 'react'
import { Container, Content, Wrap } from './components styles/MoviesStyle'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Detail from './Detail'


function Movies() {

    const movies = useSelector(selectMovies);



    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                {movies &&
                    movies.map((movie) => {
                        <Wrap>
                            <img src={movie.cardImg} />
                        </Wrap>
                    })
                }
                <Wrap>
                    <a href="/detail" >
                        <img src="/images/berserker.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/rick and morty.png" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/bjorn and lagertha.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/black_clover.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/godzilla_vs_kong.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/wrong_turn.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/dune.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap >
                    <a href="/detail" >
                        <img src="/images/hitman.webp" alt="" />
                    </a>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
