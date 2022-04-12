import React from "react"
import Form from "./Form"

export default {
  component: Form,
  title: "Components/Form",
  argTypes: {
    handleClick: { action: "submit form" },
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
  },
}

const Template = args => <Form {...args} />

export const Login = Template.bind({})

Login.args = {
  label: "User Login",
  description: "Test content",
  variant: "filled",
  fields: [
    {
      type: "text",
      label: "Enter your username",
    },
    {
      type: "password",
      label: "Enter your password",
    },
  ],
}

export const CoinSelector = Template.bind({})

CoinSelector.args = {
  label: "Select a coin",
  description: "Test content",
  variant: "filled",
  fields: [
    {
      type: "select",
      label: "Select a coin",
      selectOptions: [
        {
          label: "Bitcoin",
          value: "BTC",
        },
        {
          label: "Ethereum",
          value: "ETH",
        },
        {
          label: "Dogecoin",
          value: "Doge",
        },
      ],
    },
  ],
}

export const SignUp = Template.bind({})

SignUp.args = {
  label: "Newsletter Sign-Up",
  description:
    "Sign up to our newsletter to receive all our latest products and offerings",
  variant: "filled",
  fields: [
    {
      type: "text",
      label: "Enter your email",
      // helperText: "text",
    },
    {
      type: "textArea",
      label: `Let us know why you're interested in our product`,
    },
    {
      type: "select",
      label: "How did you hear about us?",
      selectOptions: [
        {
          label: "Google search",
          value: "google",
        },
        {
          label: "Word of mouth",
          value: "word-of-mouth",
        },
        {
          label: "Online advertisement",
          value: "online-advert",
        },
        {
          label: "etc...",
          value: "",
        },
      ],
    },
  ],
}
