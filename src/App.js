import React from 'react';
import './App.css';
import Desktop from './components/desktop';
import Window from "./components/window";
import Cmd from "./components/cmd";
import Start from "./components/start";
import terminal from "./images/windows_xp_icons/cmd-icon.jpg";
import folders_files_data from "./data/folders_files_data"
import arrayPop from './arrayPop';
import arrayCopy from './arrayCopy'
import PhotoViewer from './components/photoViewer';

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
      ],
      start: false
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
      this.setState({
        start: !this.state.start
      })
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
      let tab = id.split("-")[1];
      //render and stop rendering component using tab button
      if (this.state.active_components[tab].z_index == this.state.active_components.length) {
        this.state.active_components[tab].render = !this.state.active_components[tab].render;
      } else {
        this.state.active_components[tab].render = true
      }

      //change z-index after clicking a tab (move clicked tab forwards)
      let selected_z_index = this.state.active_components[tab].z_index;
      for (let i = 0; i < this.state.active_components.length; i++) {
        if (i == tab) {
          this.state.active_components[i].z_index = this.state.active_components.length;
        } else if (this.state.active_components[i].z_index > selected_z_index) {
          this.state.active_components[i].z_index = this.state.active_components[i].z_index - 1;
        }
      }

      this.setState({
        active_components: this.state.active_components
      })

    } else if (/^back/.test(id)) {
      //go backwards in folders
      let index = id.split("-")[1];
      if (this.state.active_components[index].render_index > 0) {
        this.state.active_components[index].render_index--
      };
      this.setState({
        active_components: this.state.active_components
      });

    } else if (/^forward/.test(id)) {
      //go backwards in folders
      let index = id.split("-")[1];
      console.log()
      if (this.state.active_components[index].render_index < this.state.active_components[index].data.length - 1) {
        this.state.active_components[index].render_index++
      }
      this.setState({
        active_components: this.state.active_components
      })

    } else {
      //folders or files that shouldnt open a new tab and just renders new data in the same window
      let newArray = [];
      for (let i = 0; i < this.state.active_components.length; i++) {
        if (this.state.active_components[i].z_index == this.state.active_components.length) {
          let newObj = {
            render: this.state.active_components[i].render,
            render_index: this.state.active_components[i].render_index + 1,
            z_index: this.state.active_components[i].z_index,
            data: [...this.state.active_components[i].data.slice(0, this.state.active_components[i].render_index + 1), folders_files_data[id]]
          };
          newArray.push(newObj);
        } else {
          newArray.push(this.state.active_components[i]);
        }
      }
      this.setState({
        active_components: newArray
      })
    }
  }


  render() {
    //rendering all components in active components
    // console.log("render state:", this.state.active_components)
    let key = -1;
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.render) {
        if (active.data[active.render_index].type == "terminal") {
          return <Cmd key={key} data={active.data[active.render_index]} minimize_id={"minimize-" + key} maximize_id={"maximize-" + key} close_id={"close-" + key} action={this.button_handler} z_index={active.z_index} />
        }

        if (active.data[active.render_index].type == "photo") {
          return <PhotoViewer key={key} data={active.data[active.render_index]} minimize_id={"minimize-" + key} maximize_id={"maximize-" + key} close_id={"close-" + key} action={this.button_handler} z_index={active.z_index} />
        }

        if (active.data[active.render_index].type == "window") {
          return <Window key={key} data={active.data[active.render_index]} minimize_id={"minimize-" + key} maximaze_id={"maximaze-" + key} close_id={"close-" + key} back_id={"back-" + key} forward_id={"forward-" + key} action={this.button_handler} z_index={active.z_index} />
        }
      }
    })

    let start;
    if (this.state.start) {
      start = <Start />
    }

    return (
      <div className="App">
        <Desktop active_components={this.state.active_components} action={this.button_handler} />
        {active_components}
        {/* {start} */}
      </div>
    );

  }
}

export default App;
