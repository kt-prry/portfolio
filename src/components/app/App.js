import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import {
  Container,
  Intro,
  Subtitle,
  Flex,
  StoryContainer,
  Text,
  Link,
  TextNote,
  GraphicsContainer,
  GraphicContainer,
  GraphicTitle,
  Tools,
} from './styles'
import { stories, graphics } from '../work_data'
import CloserLook from '../closer_look'

function App() {
  const [showCloserLook, setShowCloserLook] = useState(false)
  const [activeGraphic, setActiveGraphic] = useState()
  const introText = "Hello! My name is Kati, I'm a graphics reporter at the Washington Post."
  const aboutMeText = "I'm a Mississippi native, and like many fine folks, I get excited about beautiful maps (particularly ones with shaded relief), clever visuals, and the kinds of interactive graphics that add layers to our understanding of the world around us. I’m picky about biscuits and hushpuppies, enthusiastic about book cover art, and eager to cycle and walk places."
  const toolkit = ['JS', 'React', 'D3', 'Illustrator', 'Photoshop', 'QGIS', 'R', 'Git', 'HTML/CSS']

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
              <Subtitle line>⚡️ Here are a handful stories I'm especially proud of:</Subtitle>
              <StoryContainer>
                {stories
                  .sort((st1, st2) => st2.year - st1.year)
                  .map((story, i) => {
                    return (
                      <Text>
                        <Link key={i} href={story.link}>{story.title}</Link> <TextNote>{story.org}/{story.year}</TextNote>
                      </Text>
                    )
                })}
              </StoryContainer>
              {/*<Subtitle line>👩🏻‍💻 I've also worked on interactives and individual graphics to support breaking news and other data-driven storytelling. Here are some examples: </Subtitle>*/}
{/*              <GraphicsContainer>
                {graphics
                  .map((graphic, i) => {
                    return (
                      <GraphicContainer onClick={() => selectCloserLook(graphic.id)}>
                        <img style={{ width: '100%' }} src={graphic.mainImage} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <GraphicTitle>{graphic.title}</GraphicTitle> <TextNote>{graphic.org}/{graphic.year}</TextNote>
                        </div>
                      </GraphicContainer>
                    )
                  })
                }
              </GraphicsContainer>*/}
              <Subtitle line>🛠 Toolkit</Subtitle>
              <Tools>
                {toolkit.map((tool, i) => (<Text>{tool}</Text>))}
              </Tools>
              <Subtitle line>👋🏻 About me:</Subtitle>
              <Text>{aboutMeText}</Text>
            </Flex>
            <Text>Find a full list of <Link href='https://www.washingtonpost.com/people/kati-perry/'>my stories for the Washington Post</Link> and/or find me on <Link href='https://twitter.com/kt_prry'>Twitter</Link>.</Text>
            <Text>Last updated April 2023.</Text>
          </Container>)
      }

    </div>
  )
}

export default App
