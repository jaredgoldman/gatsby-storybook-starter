import React from "react"
import Card from "./Card"

export default {
  component: Card,
  title: "Components/Card",
  argTypes: { handleClick: { action: "clicked" } },
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})

const defaultArgs = {
  title: "Card Title",
  content: "Some card content goes here",
  buttonLabel: "Click me!",
}

Default.args = {
  ...defaultArgs,
  theme: "light",
}

Default.storyName = "Light"

export const Dark = Template.bind({})

Dark.args = {
  ...defaultArgs,
  theme: "dark",
}
