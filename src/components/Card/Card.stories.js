import React from "react"
import Card from "./Card"

export default {
  component: Card,
  title: "Components/Card",
  argTypes: {
    handleClick: { action: "clicked" },
    theme: { options: ["dark", "light"], control: { type: "radio" } },
  },
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})

const defaultArgs = {
  title: "Card Title",
  content: "Some card content goes here",
  buttonLabel: "Click me!",
}

const defaultStory = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T9dxqkl6X5sBeoPCPFNEiP/Bitbuy-VD-Final---2020-11-12?node-id=0%3A1",
    },
  },
}

Default.args = {
  ...defaultArgs,
  theme: "light",
}

Default.story = defaultStory

Default.storyName = "Light"

export const Dark = Template.bind({})

Dark.args = {
  ...defaultArgs,
  theme: "dark",
}

Dark.story = defaultStory
