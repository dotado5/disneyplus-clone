import React from "react"
import {
  AddButton,
  Background,
  Container,
  Controls,
  Descrition,
  GroupButton,
  ImageTitle,
  PlayButton,
  Subtitle,
  TraillerButton,
} from "./components styles/DetailStyle"

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/berserk-2.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/icon 1.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span> PLAY </span>
        </PlayButton>
        <TraillerButton>
          <img src="/images/play-icon-white.png" />
          <span> TRAILLER </span>
        </TraillerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <Subtitle>2018 | 7m | Family, Fantasy, Kids, Animation</Subtitle>
      <Descrition>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs up to life.
      </Descrition>
    </Container>
  )
}

export default Detail
