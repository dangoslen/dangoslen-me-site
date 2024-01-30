import React from "react"
import styled from "styled-components"

import Device from "./sizing"

const Tiles = ({ tiles }) => (
    <TileContainer>
        {
        tiles.map((tile, idx) => {
            return (
                <Tile key={idx}>
                    <TileIcon>{ tile.icon }</TileIcon>
                    <p>{ tile.description }</p>
                    { tile.secondary && <Secondary>{ tile.secondary }</Secondary> }
                </Tile>
            )})
        }
    </TileContainer>
)

const TileContainer =  styled.div`
  @media ${Device.laptopL} {
      right: 15%;
      width: 130%;
  }

  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
  }

  margin-bottom: 30px;
`

const Tile = styled.div`
  font-size: 1.3em;
  display: block;
  text-align: center;
  padding: 15px;
  margin-bottom: 15px;

  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 10px 0px;

  @media ${Device.tablet} {
    width: 40%;
    margin-bottom: 20px;
  }

  div {
    width: 100%;
    padding: 15px;
    @media ${Device.tablet} {
      width: 50%;
    }
  }
`

const TileIcon = styled.p`
  width: 100%;
  display: block;
  align-text: center;
  font-size: 2.2em
`

const Secondary = styled.p`
  margin-top: -1.25em;
`

export default Tiles;