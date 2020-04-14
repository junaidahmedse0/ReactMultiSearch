import React,{Component} from 'react'
import TableRow from './TableRow'

export class CountryTable extends Component {    
    render() {
        let rows = [];
        this.props.data.forEach((dataObj) => {
          rows.push(
            <TableRow
              key={dataObj.country}
              country={dataObj.country}
              capital={dataObj.capital}
              region={dataObj.region}
              subregion={dataObj.subregion}
              language={dataObj.language} />);
        });     
        return (
          <table className="table  table-bordered">
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Subregion</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        )
      } 
}
  

  export default CountryTable;