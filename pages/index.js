import text from '../styles/text.module.css'
import Button from '../components/button.js'
import Nested from '../components/nested.js'

export default () => (
  <div>
    <h1>CSS-in-JS</h1>

{/*
    <p>
      This is a paragraph  <Button>With A Button</Button>
    </p>

    <p>
      This is a paragraph  <Button uppercase={true}>With An Uppercase Button</Button>
    </p>
*/}

    <p
      className={text.green}>
      This is a green paragraph.
    </p>
    <Nested />
    <p>
      <Button color='green'> This is a green button</Button>
    </p>

{/*    <p
      className={text.red}>
      This is a red paragraph.
    </p>
    <p
      className={`${text.red} ${text.uppercase}`}>
      This is an uppercase red paragraph.
    </p>
*/}
  </div>
)
