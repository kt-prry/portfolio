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
  const aboutMeText = "I'm a Mississippi native, and I love to learn and build things. Catch me eating delicious food in the DMV and trying to cook yummy stuff at home."
  const toolkit = ['JS', 'React', 'D3', 'Illustrator', 'Photoshop', 'QGIS', 'R']

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
                    <Link key={i} href={story.link}>{story.title}</Link> <TextNote>{story.org}/{story.year}</TextNote>
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
        <Text>Check out all <Link href='https://www.washingtonpost.com/people/kati-perry/'>my stories for the Washington Post</Link> and/or find me on <Link href='https://twitter.com/kt_prry'>Twitter</Link>.</Text>
        <Text>Last updated August 2024.</Text>
      </Container>
    </div>
  )
}

export default App
