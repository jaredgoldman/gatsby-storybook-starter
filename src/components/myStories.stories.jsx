// myStories.stories.jsx
import { withDesign } from "storybook-addon-designs"
import Button from "./Button"

export default {
  title: "myStories",
  decorators: [withDesign],
  component: Button,
}

export const myStory = () => <Button />

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Gr60wVgQB4htmzBV3aWQpg/Bitbuy-Web---Signup?node-id=503%3A929",
  },
}
