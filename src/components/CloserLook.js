import React from 'react'
import styled from 'styled-components'
import { graphics } from '../utils/work_data'

const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  text-align: center;
`
function CloserLook(props) {
  const {
    setShowCloserLook,
    activeGraphic,
  } = props


  return (
    <div onClick={() => setShowCloserLook(false)}>
      hi
    </div>
  )
}

export default CloserLook
