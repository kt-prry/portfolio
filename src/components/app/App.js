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

function App() {
  const introText = "Hi! I'm Kati, and I'm a graphics reporter at the Washington Post."
  const aboutMeText = "I'm a Mississippi native, and I love to learn and build things."
  const toolkit = ['JS', 'React', 'D3', 'Node', 'Illustrator', 'R', 'QGIS', 'Photoshop']

  return (
    <div>
      <Container>
        <Intro>
          {introText}
        </Intro>
        <Flex>
          <Subtitle line>⚡️ Here are some stories I'm especially proud of:</Subtitle>
          <StoryContainer>
            {stories
              .sort((st1, st2) => st2.year - st1.year)
              .map((story, i) => {
                return (
                  <Text>
                    <Link key={i} href={story.link} target='_blank'>{story.title}</Link> <TextNote>{story.org}/{story.year}</TextNote>
                  </Text>
                )
            })}
          </StoryContainer>
          <Subtitle line>🛠 Toolkit</Subtitle>
          <Tools>
            {toolkit.map((tool, i) => (<Text>{tool}</Text>))}
          </Tools>
          <Subtitle line>👋🏻 About me:</Subtitle>
          <Text>{aboutMeText}</Text>
        </Flex>
        <Text>Check out all <Link href='https://www.washingtonpost.com/people/kati-perry/'>my stories for the Washington Post</Link>.</Text>
        <Text>Last updated April 2025.</Text>
      </Container>
    </div>
  )
}

export default App
