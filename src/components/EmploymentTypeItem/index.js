import './index.css'

const EmploymentTypeItem = props => {
  const {data} = props
  const {label} = data

  return (
    <li>
      <input htmlFor="E" type="checkbox" />
      <span id="E">{label}</span>
    </li>
  )
}

export default EmploymentTypeItem
