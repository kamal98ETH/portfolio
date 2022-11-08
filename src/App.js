import React from 'react';
import './App.css';
import Desktop from './desktop';
import Window from "./window";
import Cmd from "./cmd";
import Start from "./start";
import terminal from "./images/cmd-icon.jpg"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_components: [
        {
          icon: terminal,
          title: "welcome",
          terminal: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my porfolio</p>
        }, {
          icon: terminal,
          title: "welcome 2",
          terminal: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my porfolio</p>
        }
      ]
    }
  }


  render() {
    let cmd;
    let cmd_content = this.state.active_components[this.state.active_components.length - 1].terminal;
    let window;
    let window_content = this.state.active_components[this.state.active_components.length - 1].window;
    if (cmd_content) {
      cmd = <Cmd content={cmd_content} />
    }

    if (window_content) {
      window = <Window />
    }

    return (
      <div className="App">
        <Desktop active_components={this.state.active_components} />
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
