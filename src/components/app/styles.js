import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 700px;
  margin-bottom: 125px;
`

export const Intro = styled.h1`
  font-family: 'Work Sans', Arial, sans-serif;
  font-size: 36px;
  font-weight: 600;
  padding-top: 35px;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`

export const Subtitle = styled.h2`
  font-family: 'Work Sans', Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 0 10px 0;
  border-bottom: ${props => props.line ? '1px #888 solid' : ''};
  margin: 0 0 20px 0;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const StoryContainer = styled.div`
  display: block;
  margin-bottom: 50px;
`

export const Text = styled.p`
  font-family: 'Work Sans', Arial, sans-serif;
  margin: 0 0 12px 0;
  padding: 2px 0;
`

export const Link = styled.a`
  &:visited {
    color: black;
  }
`

export const TextNote = styled.span`
  font-family: 'Work Sans', Arial, sans-serif;
  font-size: 12px;
  padding-left: 4px;
  color: #888;
  font-weight: 400;
`

export const GraphicsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const GraphicContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  cursor: pointer;
`

export const GraphicTitle = styled.p`
  font-family: 'Work Sans', Arial, sans-serif;
  padding: 4px 0;
  margin: 0;
  font-size: 14px;
`

export const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  margin-bottom: 50px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
`
