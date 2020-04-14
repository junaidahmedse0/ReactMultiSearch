import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import NameForm  from './form'
import EssayForm  from './EssayForm'
import Calculator from './Calculator'
// import FlavorForm  from './FlavorForm'


import * as serviceWorker from './serviceWorker';
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );
// function LoginButton()
// {
//   return(
//     <button>Login</button>

//   )
// }
// function LogoutButton()
// {
//   return(
//     <button>Logout</button>

//   )
// }

// function MailBox(props)
// {
//    const unreadMessages=props.unreadMessages;
//    const isLoggedIn=0;
//    return(
//      <div>

//        <h1>
//          Hello!
//        </h1>
//        <div>
//          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//        </div>
//        <div>
//       {isLoggedIn
//         ? <LoginButton/>
//         :  <LogoutButton/>
//       }
//     </div>

//        {unreadMessages.length>0&&
//          <h2>
//                 you have  {unreadMessages.length} messages

//          </h2>
     

//        }
//      </div>
//    )

// }



// const messages=['React ','Re:React','Re:Re:react'];
// ReactDOM.render(
// <MailBox unreadMessages={messages}/>  ,
//   document.getElementById('root')
// );


function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}


function DoubleValues()
{
  const numbers=[1,2,3,4,5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);


return(

  <h1>All  Numbers are shown</h1>
)




}



function ListComponent(props)
{
  const  numbers=props.numbers;
  const listItems = numbers.map((number,index) =>
  <li key={index}>{number*2}</li>
  );

  return(
    <ul>{listItems}</ul>
  )

}
const numbers=[1,2,3,4,5,6,7];

function BlogPost(props)
{
      
     const sidebar=(
       <ul>
       {props.posts.map((post)=>
          <li key={post.id}>
            {post.title}
          </li>

       )
       }

       </ul>
     )
    const contentbar=props.posts.map((post)=>
      <div key={post.id}>
        <h3> {post.title}</h3>
        <p> {post.content}</p>
      </div>
    )

  return(

<div> 
    {sidebar}
      <hr/>
    {contentbar}
    </div>
 
  )
}

// const numbers=[1,2,3,4,5,6,7];

const posts=[
  {id:1,title:'this is post 1',content:'facebook post '},
  {id:2,title:'this is blog post 1',content:'google blog post '},


]






ReactDOM.render(
 <Calculator/> ,
document.getElementById('root')
);













