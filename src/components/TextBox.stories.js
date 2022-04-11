import React from "react"
import TextBox from "./TextBox"

export default {
  component: TextBox,
  title: "Components/TextBox",
}

const Template = args => <TextBox {...args} />

export const Default = Template.bind({})

Default.storyName = "Light"

const defaultArgs = {
  placeholder: "Enter your text here",
}

Default.args = {
  ...defaultArgs,
  theme: "light",
}

export const Dark = Template.bind({})

Dark.args = {
  ...defaultArgs,
  theme: "dark",
}
