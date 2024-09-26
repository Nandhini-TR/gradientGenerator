import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  DirHeading,
  ColorContainer,
  Label,
  Input,
  Button,
  EachColorContainer,
  UnOrderedList,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    backgroundGradient: 'linear-gradient(to top, #8ae323, #014f7b)',
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  renderActiveId = id => {
    const activeDirection = gradientDirectionsList.find(
      eachItem => eachItem.directionId === id,
    ).value
    this.setState({activeDirection})
  }

  onGenerateGradient = () => {
    const {firstColor, secondColor, activeDirection} = this.state
    const newGradient = `linear-gradient(to ${activeDirection}, ${firstColor}, ${secondColor})`
    this.setState({backgroundGradient: newGradient})
  }

  render() {
    const {
      firstColor,
      secondColor,
      backgroundGradient,
      activeDirection,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        backgroundGradient={backgroundGradient}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirHeading>Choose Direction</DirHeading>
        <UnOrderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientDirectionsList={each}
              renderActiveId={this.renderActiveId}
              activeId={each.directionId === activeDirection} // Pass the active direction to the button
            />
          ))}
        </UnOrderedList>
        <DirHeading>Pick the Colors</DirHeading>
        <ColorContainer>
          <EachColorContainer>
            <Label>{firstColor}</Label>
            <Input
              type="color"
              id="firstColor"
              value={firstColor} // Bind the input to the state
              onChange={this.onChangeFirstColor} // Update the state when color changes
            />
          </EachColorContainer>
          <EachColorContainer>
            <Label>{secondColor}</Label>
            <Input
              type="color"
              id="secondColor"
              value={secondColor} // Bind the input to the state
              onChange={this.onChangeSecondColor} // Update the state when color changes
            />
          </EachColorContainer>
        </ColorContainer>
        <Button type="button" onClick={this.onGenerateGradient}>
          Generate
        </Button>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
