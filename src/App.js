import React from 'react';
import './App.css';
import Desktop from './desktop';
import Window from "./window";
import Cmd from "./cmd";
// import Start from "./start";
import terminal from "./images/cmd-icon.jpg";
import folders_files_data from "./folders_files_data"
import arrayPop from './arrayPop';
import arrayCopy from './arrayCopy'


// import profile from "./images/profile.ico";
// import folder from "./images/folder.ico";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_components: [
        {
          render: true,
          render_index: 0,
          z_index: 1,
          data: [
            {
              icon: terminal,
              title: "Welcome",
              type: "terminal",
              content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
            }
          ]
        }
      ]
    };
    this.button_handler = this.button_handler.bind(this);
  }

  button_handler = (event) => {
    let id = event.target.id;
    // console.log(id)
    // return;

    if (!id) {
      return;
    }

    //open and close start component
    if (id == "start") {
      return;
    }

    //open new tab (object with render_index and data array) when button id starts with new-tab
    if (/^new-tab/.test(id)) {
      this.setState({
        active_components: [
          ...this.state.active_components,
          {
            render: true,
            render_index: 0,
            z_index: this.state.active_components.length + 1,
            data: [folders_files_data[id]]
          }
        ]
      })
    } else if (/^external-link/.test(id)) {
      //open new tab with the given url
      window.open(folders_files_data[id])
    } else if (/^minimize/.test(id)) {
      //stop rendering component using minimize button
      this.state.active_components[id.split("-")[1]].render = false
      this.setState({
        active_components: this.state.active_components
      })
    } else if (/^maximize/.test(id)) {

    } else if (/^close/.test(id)) {
      //close the selected active component
      let to_close = id.split("-")[1];
      let newArray = [];
      for (let i = 0; i < this.state.active_components.length; i++) {
        if (i != to_close) {
          newArray.push(this.state.active_components[i]);
        }
      }
      this.setState({
        active_components: newArray
      })
    } else if (/^tab/.test(id)) {
      //render and stop rendering component using tab button
      this.state.active_components[id.split("-")[1]].render = !this.state.active_components[id.split("-")[1]].render;
      this.setState({
        active_components: this.state.active_components
      })
    } else {
      //folders or files that shouldnt open a new tab and just renders new data in the same window
      let lastItem = this.state.active_components[this.state.active_components.length - 1];
      lastItem.render_index++;
      lastItem.data.push(folders_files_data[id]);
      this.setState({
        active_components: [...arrayPop(this.state.active_components), lastItem]
      })
    }
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
    // console.log("render state:", this.state.active_components)
    let key = -1;
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.render) {
        if (active.data[active.render_index].type == "terminal") {
          return <Cmd key={key} data={active.data[active.render_index]} minimize_id={"minimize-" + key} maximize_id={"maximize-" + key} close_id={"close-" + key} action={this.button_handler} />
        }

        if (active.data[active.render_index].type == "window") {
          return <Window key={key} data={active.data[active.render_index]} minimize_id={"minimize-" + key} maximaze_id={"maximaze-" + key} close_id={"close-" + key} action={this.button_handler} />
        }
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
