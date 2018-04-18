import React from 'react'
import Tooltip, { TooltipButton, TooltipArrow, TooltipLink } from './Tooltip'
import Icon from './Icon'

const CustomButton = ({onClick, children}) => <button onClick={onClick}>{children}</button>

const App = () => (
  <div>
    <p>Normal</p>
    <Tooltip>
      <TooltipButton>Button CTA</TooltipButton>
      <TooltipArrow />
      <TooltipLink href='https://google.com'>
        <Icon name="account" colour="white" height={20} width={20} />
        Google
      </TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
    <p>Arrow positioned left</p>
    <Tooltip>
      <TooltipButton>Button CTA</TooltipButton>
      <TooltipArrow position="left" />
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
    <p>200px width</p>
    <Tooltip width={200}>
      <TooltipButton>Button CTA</TooltipButton>
      <TooltipArrow />
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
    <p>500px width</p>
    <Tooltip width={500}>
      <TooltipButton>Button CTA</TooltipButton>
      <TooltipArrow />
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
    <p>Custom button text</p>
    <Tooltip>
      <TooltipButton>Custom button text</TooltipButton>
      <TooltipArrow />
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
    <p>500px width with custom button component</p>
    <Tooltip width={500}>
      <TooltipButton View={CustomButton}>Recusandae ullam vitae magni</TooltipButton>
      <TooltipArrow />
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
      <TooltipLink href='https://google.com'>Google</TooltipLink>
    </Tooltip>
  </div>
)

export default App

