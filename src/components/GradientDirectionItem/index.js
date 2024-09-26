import {List, DisplayText} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsList, renderActiveId, activeId} = props
  const {directionId, displayText} = gradientDirectionsList

  const onClickButton = () => {
    renderActiveId(directionId)
  }

  return (
    <List>
      <DisplayText type="button" onClick={onClickButton} active={activeId}>
        {displayText}
      </DisplayText>
    </List>
  )
}

export default GradientDirectionItem
