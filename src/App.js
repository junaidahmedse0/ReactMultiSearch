import React,{Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import CountryTable from './CountryTable/CountryTable'
export class App extends Component {
  constructor(props) {

   
    super(props);
    this.data = [

       

    ];
    this.state = {
      country: '',
      region: '',
      subregion: '',
      isLoading: true,
    };
}






  componentDidMount() { 
    
const array=[
  {
    country:'pakistan',
    capital:'islamabad',
    region:'pindi',
    subregion:'peshawar',
    language:'urdu'
  
  },
  {
    country:'pakistan',
    capital:'islamabad',
    region:'pindi',
    subregion:'lahore',
    language:'urdu'
  
  },

  {
    country:'india',
    capital:'dehli',
    region:'hindu',
    subregion:'sargoda',
    language:'urdu'
  
  }, {
    country:'iran',
    capital:'tihran',
    region:'pindi',
    subregion:'chakwal',
    language:'urdu'
  
  }

  
  ]     
     this.data = array;       
       this.setState({          
       isLoading: false,
      });


//     fetch(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)   
//    .then(response => response.json())      
//    .then(data =>  {             
//      let array = []; 
        
//      for (let i = 0; i < data.length; i++) {             
//       let entry = {};      
//       entry.country = data[i].name.official;          
//       entry.capital = data[i].capital;          
//       entry.region = data[i].region;          
//       entry.subregion = data[i].subregion;                
//       entry.language = data[i].languages[Object.keys
// (data[i].languages)[0]];
//        array[i] = entry;       
//      } 
//      this.data = array;       
//      this.setState({          
//        isLoading: false,
//      });      
//    })    
//    .catch(error => this.setState({ error, isLoading: false }));  
}

handleSearchEvents = (title, name) => {
  this.setState({ [name]: title });
}
render() {
  const filteredData = this.data.filter((dataObj)=>
  (dataObj.country.indexOf(this.state.country) !== -1)&&
  (dataObj.region.indexOf(this.state.region) !== -1)&&
  (dataObj.subregion.indexOf(this.state.subregion) !== -1));
  
  return (
    <div className="row">
       <div className="col-md-8 offset-2">

       <div className="App">
      <h1 className="text-center pt-5"> React Multi-Search </h1>
      <SearchBar
        country={this.state.country}
        region={this.state.region}
        subregion={this.state.subregion}
        handleSearchEvents={this.handleSearchEvents} />
      <CountryTable
        country={this.state.country}
        region={this.state.region}
        subregion={this.state.subregion}
        data={filteredData} /> 
    </div>

       </div>



    </div>
    
  )
}
}


export default App;
