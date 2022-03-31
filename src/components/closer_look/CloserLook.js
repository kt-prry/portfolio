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
  Link,
} from './styles'

function CloserLook(props) {
  const {
    setShowCloserLook,
    activeGraphic,
  } = props

  const activeGraphicInfo = activeGraphic && graphics.find(gfx => gfx.id === activeGraphic)
  const pairImages = activeGraphicInfo.pairImages
  const link = activeGraphicInfo.link
  const desc = activeGraphicInfo.desc

  return (
    <Container>
      <TopSection>
        <Title>{activeGraphicInfo.title}</Title>
        <GoBack onClick={() => setShowCloserLook(false)}>go back</GoBack>
      </TopSection>
      <TopSection>
      <Text bold>Tools: {activeGraphicInfo.tools}</Text>
      {link && <Text bold><Link href={link}>Live page</Link></Text>}
      </TopSection>
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
            <div style={{ overflow: 'hidden', objectFit: 'cover', width: '100%'}}>
              <img style={{ width: '100%'}} src={imgSrc} />
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}

export default CloserLook
