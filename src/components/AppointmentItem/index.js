import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarted} = props
  const {id, title, date, isStarted} = appointmentDetails
  const starImageUrl = isStarted
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarted(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          testid="star"
          className="star-button"
          onClickStar={onClickStar}
        >
          <img src={starImageUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
