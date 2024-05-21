import DestinationItem from '../DestinationItem'

import {Component} from 'react'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    const {id,name,imgUrl} = destinationsList
    return (
      <div className="background">
        <h1> DestinationSearch </h1>
        <input type="search" onClick={onSearch} />
        {destinationsList.map(each => (
          <DestinationSearch destinationsList={each} />
        ))}
      </div>
    )
  }
}

export default DestinationSearch

