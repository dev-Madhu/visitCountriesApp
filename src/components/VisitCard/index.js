import './index.css'

const VisitCard = props => {
  const {countryDetails, onClickVisited} = props
  const {id, name, isVisited} = countryDetails

  const statusText = isVisited ? 'Visited' : 'Visit'
  const toggleVisitBtn = () => {
    onClickVisited(id)
  }

  return (
    <li className="country-item">
      <p className="country">{name}</p>
      {isVisited ? (
        <p className="status">{statusText}</p>
      ) : (
        <button type="button" className="status-btn" onClick={toggleVisitBtn}>
          {statusText}
        </button>
      )}
    </li>
  )
}
export default VisitCard
