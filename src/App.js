import React from 'react';
import './App.css';
import Desktop from './desktop';
import Window from "./window";
import Cmd from "./cmd";
// import Start from "./start";
import terminal from "./images/cmd-icon.jpg";
import folders_files_data from "./folders_files_data"
import arrayPop from './arrayPop';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_components: [
        {
          icon: terminal,
          title: "Welcome",
          type: "terminal",
          content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
        }, {
          icon: terminal,
          title: "Welcome",
          type: "terminal",
          content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
        }
      ]
    };
    this.button_handler = this.button_handler.bind(this);
  }

  button_handler = (event) => {
    // console.log(event.target.id)
    let id = event.target.id;
    // console.log(this.state.active_components[this.state.active_components.length - 1].title)


    // this.setState({
    //   active_components: this.state.active_components.splice(this.state.active_components.length - 1, 0)
    // });
    // console.log(this.state.active_components)




    //working close but deletes similar objects
    if (id == "close-button") {
      this.setState({
        active_components: arrayPop(this.state.active_components)
      })
        ;
      return;
    }

    this.setState({
      active_components: [...this.state.active_components, folders_files_data[id]]
    })

  }


  render() {

    //rendring last item in active components
    // let cmd;
    // let window;
    // let feedData = this.state.active_components[this.state.active_components.length - 1]
    // if (feedData) {
    //   if (feedData.type == "terminal") {
    //     cmd = <Cmd data={feedData} action={this.button_handler} />
    //   }

    //   if (feedData.type == "window") {
    //     window = <Window data={feedData} action={this.button_handler} />
    //   }
    // }

    //rendering all components in active components
    let key = -1;
    // console.log(this.state.active_components)
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.type == "terminal") {
        return <Cmd key={key} data={active} action={this.button_handler} />
      }

      if (active.type == "window") {
        return <Window key={key} data={active} action={this.button_handler} />
      }
    })

    return (
      <div className="App">
        <Desktop active_components={this.state.active_components} action={this.button_handler} />
        {active_components}
        {/* {cmd}
        {window} */}
        {/* <Start /> */}
      </div>
    );

  }
}

export default App;
