import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 25px 0;
  max-width: 800px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-bottom: 50px;
  padding-top: 50px;
`

export const WideImage = styled.img`
  width: 100%;
  margin: 50px 0;

  @media only screen and (max-width: 600px) {
    margin: 25px 0;
  }
`

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    gap: 15px;
  }
`
export const Title = styled.h1`
  font-family: 'Work Sans', Arial, sans-serif;
  font-size: 30px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`

export const Text = styled.h2`
  font-family: 'Work Sans', Arial, sans-serif;
  font-size: 16px;
  font-weight: ${props => props.bold ? '600' : '400' };
  letter-spacing: -1px;
`

export const Link = styled.a`
  &:visited {
    color: black;
  }
`

export const GoBack = styled.button`
  border: none;
  background-color: #eee;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
`