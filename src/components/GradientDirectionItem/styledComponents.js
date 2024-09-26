import styled from 'styled-components'

export const List = styled.li`
  width: 90px;
`
export const DisplayText = styled.button`
  font-weight: bold;
  border: 0px none;
  background-color: transparent;
  opacity: ${props => (props.active ? 1 : 0.5)};
  background-color: #ededed;
  border-radius: 5px;
  text-align: center;
  height: 40px;
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`
