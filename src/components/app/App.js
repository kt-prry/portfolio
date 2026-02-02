import React from 'react'
import {
  Container,
  Intro,
  Subtitle,
  Flex,
  StoryContainer,
  Text,
  Link,
  TextNote,
  Tools,
} from './styles'
import { stories } from '../work_data'
import { imgKey } from '../imgs/imgs'

function App() {
  const introText = "Hi! I'm Kati, and I'm a graphics reporter at the Washington Post."
  const aboutMeText = "I'm a Mississippi native, and I love to learn and build things."
  const toolkit = ['JS', 'React', 'D3', 'Node', 'Illustrator', 'R', 'TypeScript', 'Github Actions', 'QGIS', 'Illustrator', 'Photoshop']

  return (
    <div>
      <Container>
        <Intro>
          {introText}
        </Intro>
        <Flex>
          {/* Story section */}
          <Subtitle line>⚡️ Here are some stories I'm especially proud of:</Subtitle>
          <StoryContainer>
            {stories
              .sort((st1, st2) => st2.year - st1.year)
              .map((story, i) => {
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }} key={i}>
                    {story.path && (
                      <a href={story.link} target='_blank' style={{ display: 'block', width: '100%', height: '85%' }}>
                      <img 
                        src={imgKey[story.path]} 
                        alt={`Promo image for story`} 
                        style={{ 
                          objectFit: 'cover', 
                          objectPosition: 'center', 
                          width: '100%', 
                          height: '100%'
                        }} 
                      />
                      </a>
                    )}
                    <Text>
                      <Link href={story.link} target='_blank'>{story.title}</Link> <TextNote>{story.org}/{story.year}</TextNote>
                    </Text>
                  </div>
                )
            })}
          </StoryContainer>
          
          {/* Tools */}
          <Subtitle line>🛠 Toolkit</Subtitle>
          <Tools>
            {toolkit.map((tool, i) => (<Text>{tool}</Text>))}
          </Tools>

          {/* Intro */}
          <Subtitle line>👋🏻 About me:</Subtitle>
          <Text>{aboutMeText}</Text>
        </Flex>
        <Text>Check out all <Link href='https://www.washingtonpost.com/people/kati-perry/'>my stories for the Washington Post</Link>.</Text>
        <Text>Last updated February 2026.</Text>
      </Container>
    </div>
  )
}

export default App
