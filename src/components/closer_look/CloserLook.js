import React from 'react'
import styled from 'styled-components'
import { graphics } from '../work_data'
import {
  Container,
  Grid,
  WideImage,
  TopSection,
  Title,
  Text,
  GoBack,
} from './styles'

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
