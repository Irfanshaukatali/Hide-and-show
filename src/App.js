import React from "react";
import "./style.css";

// export default class App extends React.PureComponent {
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//     console.log("re-render")
//     return(
//       <>
//        {
//          this.state.show?
//          <h1>hello i am irfan</h1>
//          :null
//        }
//         <button onClick={()=>this.setState({show:!this.state.show})}>hide</button>
//       </>
//     )
//   }
// }
export default function App(){
  const [show, setShow] = React.useState(true)
  function click(){
    setShow(
      !show
    )
  }
  return(
    <div>
      {
        show?
        <h1>irfan</h1>
        :null
      }
      <button onClick={click}>hide/show</button>
    </div>
  )
}
