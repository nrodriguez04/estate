import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Nico'
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
  cities(){
    if(this.props.globalState.populateFormsData.cities !=undefined) {
      var { cities } = this.props.globalState.populateFormsData

      console.log(cities)
      return cities.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  homeTypes(){
    if(this.props.globalState.populateFormsData.homeTypes !=undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData

      console.log(homeTypes)
      return homeTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms(){
    if(this.props.globalState.populateFormsData.bedrooms !=undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData

      console.log(bedrooms)
      return bedrooms.map((item) => {
        return(
          <option key={item} value={item}>{item} BR</option>
        )
      })
    }
  }

  render () {
    return (<section id="filter">
      <div className="inside">
      <h4>Filter</h4>
      <select name="city" className="filters city" onChange={this.props.change}>
        <option value="All">All</option>
        {this.cities()}
      </select>
      <select name="homeType" className="filters homeType" onChange={this.props.change}>
        <option value="All">All</option>
        {this.homeTypes()}
      </select>
      <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        {this.bedrooms()}
      </select>
      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
        <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
      </div>
      <div className="filters floor-space">
        <span className="title">Floor Space</span>
        <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
        <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
      </div>
      <div className="filters features">
        <span className="title">Features</span>
        <label htmlFor="features">Pool <input type="checkbox" name="pool" value="pool" onChange={this.props.change}/></label>
        <label htmlFor="features">Beach <input type="checkbox" name="beach" value="beach" onChange={this.props.change}/></label>
        <label htmlFor="features">Gym <input type="checkbox" name="gym" value="gym" onChange={this.props.change}/></label>
        <label htmlFor="features">Elevator <input type="checkbox" name="elevator" value="elevator" onChange={this.props.change}/></label>
        <label htmlFor="features">Dog park <input type="checkbox" name="dog-park" value="dog_park" onChange={this.props.change}/></label>
        <label htmlFor="features">Garage <input type="checkbox" name="garage" value="garage" onChange={this.props.change}/></label>
      </div>
      </div>
    </section>)
  }
}
