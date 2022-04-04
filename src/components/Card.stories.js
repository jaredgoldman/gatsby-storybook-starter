import React from "react"

import Card from "./Card"

export default {
  component: Card,
  title: "Components/Card",
  argTypes: { handleClick: { action: "clicked" } },
}

const Template = args => <Card {...args} />

export const Default = Card.bind({})

Default.args = {
  title: "Card Title",
  content: "Some card content goes here",
  buttonLabel: "Click me!",
}
