
import React,{Component} from 'react';

export class SearchBar extends Component {

   handleOnChange = (e) => {
  this.props.handleSearchEvents(e.target.value, e.target.name);
};
   
render() {
  return (
    <form>

    <div className="row m-5">

        <div className="col-sm-3">
        <input
        className="form-control"
        type="text"
        name='country'
        value={this.props.country}
        onChange={this.handleOnChange}
        placeholder='Countries...'/>
        </div>
        <div className="col-sm-3 offset-1">
        <input
        className="form-control"

        type="text"
        name='region'
        value={this.props.region}
        onChange={this.handleOnChange}
        placeholder='Regions...'/>
        </div>
        <div className="col-sm-3 offset-1">
        <input
        className="form-control"

        type="text"
        name='subregion'
        value={this.props.subregion}
        onChange={this.handleOnChange}
        placeholder='Subregions...'/>
        </div>
    </div>
     
     
     
    </form>
  )
}
  }
  export default SearchBar;
