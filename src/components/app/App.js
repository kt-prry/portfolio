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
  const introText = "Hi, I'm Kati! I'm a data visualization reporter and developer at the Associated Press."
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
              <Subtitle line>⚡️ I love working on visual stories and graphics that help create an identity for a piece in concert with other formats. Here are a couple of my favorites:</Subtitle>
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
              <Subtitle line>👩🏻‍💻 I've also worked on interactives and individual graphics to support breaking news and other data-driven storytelling. Here are some examples: </Subtitle>
              <GraphicsContainer>
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
              </GraphicsContainer>
              <Subtitle line>🛠 Toolkit</Subtitle>
              <Tools>
                {toolkit.map((tool, i) => (<Text>{tool}</Text>))}
              </Tools>
              <Subtitle line>👋🏻 About me:</Subtitle>
              <Text>{aboutMeText}</Text>
            </Flex>
            <Text>(Find me on <Link href='https://twitter.com/kt_prry'>Twitter</Link>)</Text>
          </Container>)
      }
    </div>
  )
}

export default App
