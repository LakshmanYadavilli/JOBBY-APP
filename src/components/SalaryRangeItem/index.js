import './index.css'

const SalaryRangeItem = props => {
  const {data} = props
  const {label} = data

  return (
    <li>
      <input htmlFor="S" type="radio" name="salary-range" />{' '}
      <span id="S">{label}</span>
    </li>
  )
}

export default SalaryRangeItem
