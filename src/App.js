import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import './App.css';
import {
  Container,
  Intro,
  Subtitle,
  Flex,
  StoryContainer,
  Text,
  TextNote,
  GraphicsContainer,
  GraphicTitle,
} from './styles'
import { stories, graphics } from './utils/work_data'
import CloserLook from './components/CloserLook'

function App() {
  const [showCloserLook, setShowCloserLook] = useState(false)
  const [activeGraphic, setActiveGraphic] = useState()
  const introText = "Hi, I'm Kati and I'm a data visualization reporter and developer at the Associated Press."
  const aboutMeText = "I'm a Mississippi native, and like many fine folks, I get excited about beautiful maps (particularly ones with shaded relief), clever visuals, and the kinds of interactive graphics that add layers to our understanding of the world around us. I’m picky about biscuits and hushpuppies, enthusiastic about good non-fiction, and eager to cycle and walk places."

  const selectCloserLook = mapID => {
    setShowCloserLook(true)
    setActiveGraphic(mapID)
  }


  const ref = useRef()

  return (
    <div>
      {showCloserLook 
        ? <CloserLook setShowCloserLook={setShowCloserLook} activeGraphic={activeGraphic} />
        : (<Container>
            <Intro>
              {introText}
            </Intro>
            <Flex>
              <Subtitle line>Here are some visuals-driven stories I've worked on:</Subtitle>
              <StoryContainer>
                {stories
                  .sort((st1, st2) => st2.year - st1.year)
                  .map((story, i) => {
                    return (
                      <Text>
                        <a key={i} href={story.link}>{story.title}</a> <TextNote>{story.org}/{story.year}</TextNote>
                      </Text>
                    )
                })}
              </StoryContainer>
              <Subtitle line>Here are some interactives and maps I've worked on:</Subtitle>
              <GraphicsContainer>
                {graphics
                  .map((graphic, i) => {
                    return (
                      <div onClick={() => selectCloserLook(graphic.id)} style={{ overflow: 'hidden', objectFit: 'cover', width: '100%', cursor: 'pointer'}}>
                        <img style={{ width: '100%' }} src={graphic.mainImage} />
                        <GraphicTitle>{graphic.title}</GraphicTitle>
                      </div>
                    )
                  })
                }
              </GraphicsContainer>
              <Subtitle line>About me:
              </Subtitle>
              <Text>{aboutMeText}</Text>
            </Flex>
          </Container>)
      }
    </div>
  )
}

export default App
