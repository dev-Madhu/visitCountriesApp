import './index.css'

const VisitedCard = props => {
  const {visitedDetails, deleteVisitedPlace} = props
  const {id, name, imageUrl} = visitedDetails
  const onClickRemoveBtn = () => {
    deleteVisitedPlace(id)
  }

  return (
    <li className="visited-box">
      <img src={imageUrl} className="country-img" alt="thumbnail" />
      <div className="box">
        <p className="country">{name}</p>
        <button className="remove" type="button" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCard
