import React from 'react';
import './App.css';
import Desktop from './desktop';
import Window from "./window";
import Cmd from "./cmd";
// import Start from "./start";
import terminal from "./images/cmd-icon.jpg";
import folders_files_data from "./folders_files_data"


import profile from "./images/profile.ico";
import folder from "./images/folder.ico";


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
        }
      ]
    };
    this.button_handler = this.button_handler.bind(this);
  }

  button_handler = (event) => {
    // console.log(event.target.id)
    let id = event.target.id;
    console.log(this.state.active_components[this.state.active_components.length - 1].title)


    // this.setState({
    //   active_components: this.state.active_components.splice(this.state.active_components.length - 1, 0)
    // });
    // console.log(this.state.active_components)

    // if (id == "close-button") {
    //   console.log("close")
    //   this.setState({
    //     active_components: this.state.active_components.filter((data) => {
    //       return data.title != this.state.active_components[this.state.active_components.length - 1].title
    //     })
    //   });
    //   return;
    // }

    this.setState({
      active_components: [...this.state.active_components, folders_files_data[id]]
    })


  }


  render() {
    let cmd;
    let window;
    let feedData = this.state.active_components[this.state.active_components.length - 1]
    // console.log(feedData)
    // console.log(this.state.active_components[this.state.active_components.length - 1])
    // console.log(feedData.type)
    if (feedData) {
      if (feedData.type == "terminal") {
        cmd = <Cmd data={feedData} action={this.button_handler} />
      }

      if (feedData.type == "window") {
        window = <Window data={feedData} />
      }

    }


    return (
      <div className="App">
        <Desktop active_components={this.state.active_components} action={this.button_handler} />
        {cmd}
        {window}
        {/* <Window /> */}
        {/* <Cmd content={this.state.active_components[this.state.active_components.length - 2].terminal} /> */}
        {/* <Start /> */}
      </div>
    );

  }
}

export default App;
