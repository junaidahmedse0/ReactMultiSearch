
import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',number:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({number: event.target.number});

    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value+'   Number::   '+this.state.number);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Number:
            <input type="text" number={this.state.number} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;