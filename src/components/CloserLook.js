import React from 'react'
import styled from 'styled-components'
import { graphics } from '../utils/work_data'
import { Intro } from '../styles'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 25px 0;
  max-width: 800px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-bottom: 50px;
`

const WideImage = styled.img`
  width: 100%;
  margin: 50px 0;
`

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 30px;
`

const Text = styled.h2`
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
`

const GoBack = styled.button`
  border: none;
  background-color: #eee;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
`

function CloserLook(props) {
  const {
    setShowCloserLook,
    activeGraphic,
  } = props

  const activeGraphicInfo = activeGraphic && graphics.find(gfx => gfx.id === activeGraphic)
  const pairImages = activeGraphicInfo.pairImages


  return (
    <Container>
      <TopSection>
        <Title>{activeGraphicInfo.title}</Title>
        <GoBack onClick={() => setShowCloserLook(false)}>go back</GoBack>
      </TopSection>
      <Text>Tools: {activeGraphicInfo.tools}</Text>
      <Text>{activeGraphicInfo.desc}</Text>
      {activeGraphicInfo.wideImages.map((imgSrc, i) => {
        return (
          <div style={{ overflow: 'hidden', objectFit: 'cover', width: '100%', cursor: 'pointer'}}>
            <WideImage src={imgSrc} />
          </div>
        )
      })}
      <Grid>
        {pairImages && activeGraphicInfo.pairImages.map((imgSrc, i) => {
          return (
            <div style={{ overflow: 'hidden', objectFit: 'cover', width: '100%', cursor: 'pointer'}}>
              <img style={{ width: '100%'}} src={imgSrc} />
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default CloserLook
