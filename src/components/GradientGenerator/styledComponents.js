import styled from 'styled-components'

export const GradientContainer = styled.div`
  background: ${props => props.backgroundGradient};
  height: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
`
export const DirHeading = styled.p`
  color: #ffffff79;
  font-size: 20px;
`
export const ColorContainer = styled.div`
  display: flex;
`
export const EachColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const Label = styled.p`
  color: #ffffff79;
  font-size: 20px;
`

export const Input = styled.input`
  border: 0px none;
  margin: 10px;
  background-color: transparent;
`

export const Button = styled.button`
  background-color: #00c9b7;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  border: 0px none;
  border-radius: 5px;
`
export const UnOrderedList = styled.ul`
  list-style-type: none;
  display: flex;
`
