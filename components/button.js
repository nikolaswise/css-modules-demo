import button from './button.module.css'

export default ({color, children, uppercase = false}) => (
  <button
    className={`${button.base} ${color ? button[color] : ''} ${uppercase ? button.uppercase : ''}`}>
    {children}
  </button>
)