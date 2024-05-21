// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <div>
      <div className="imagebackground">
        <img src={imgUrl} className="image" />
        <p> {name} </p>
      </div>
    </div>
  )
}
export default DestinationItem
