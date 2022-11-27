import React from 'react';
import './App.css';
import Desktop from './components/desktop';
import Window from "./components/window";
import Cmd from "./components/cmd";
import Start from "./components/start";
import terminal from "./images/windows_xp_icons/cmd-icon.jpg";
import folders_files_data from "./data/folders_files_data";
import replaceItem from './replaceItem';
import arrayCopy from './arrayCopy'
import PhotoViewer from './components/photoViewer';
import welcome from './data/Desktop_folders/cmd_body_text/welcome_text';
import Explorer from './components/explorer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_components: [
        {
          render: true,
          render_index: 0,
          z_index: 1,
          fullscreen: false,
          data: [
            {
              icon: terminal,
              title: "Welcome",
              type: "terminal",
              content: welcome
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

    switch (true) {
      //open new tab (object with render_index and data array) when button id starts with new-tab
      case /^new-tab/.test(id):
        this.setState({
          active_components: [
            ...this.state.active_components,
            {
              render: true,
              render_index: 0,
              z_index: this.state.active_components.length + 1,
              fullscreen: false,
              data: [folders_files_data[id]]
            }
          ]
        });
        break;

      //open new tab with the given url
      case /^external-link/.test(id):
        window.open(folders_files_data[id]);
        break;

      //stop rendering component using minimize button
      case /^minimize/.test(id):
        this.state.active_components[id.split("-")[1]].render = false
        this.setState({
          active_components: this.state.active_components
        });
        break;

      case /^maximize/.test(id):
        let to_maximize = id.split("-")[1];

        //change styles only if if the device width is bigger than 1000px
        if (window.innerWidth > 1000) {
          if (this.state.active_components[to_maximize].fullscreen) {

            //change the state fullscreen for selected window to be false
            this.state.active_components[to_maximize].fullscreen = false
            this.setState({
              active_components: this.state.active_components
            });
          } else {

            //change the state fullscreen for selected window to be true
            this.state.active_components[to_maximize].fullscreen = true
            this.setState({
              active_components: this.state.active_components
            });
          }
        }
        break;

      //close the selected active component
      case /^close/.test(id):
        let to_close = id.split("-")[1];
        let newArray = [];
        for (let i = 0; i < this.state.active_components.length; i++) {
          if (i != to_close) {
            newArray.push(this.state.active_components[i]);
          }
        }
        this.setState({
          active_components: newArray
        });
        break;

      case /^tab/.test(id):
        let tab = id.split("-")[1];
        //render and stop rendering component using tab button
        if (this.state.active_components[tab].z_index == this.state.active_components.length) {
          this.state.active_components[tab].render = !this.state.active_components[tab].render;
        } else {
          this.state.active_components[tab].render = true
        };
        //change z-index after clicking a tab (move clicked tab forwards)
        let selected_z_index = this.state.active_components[tab].z_index;
        for (let i = 0; i < this.state.active_components.length; i++) {
          if (i == tab) {
            this.state.active_components[i].z_index = this.state.active_components.length;
          } else if (this.state.active_components[i].z_index > selected_z_index) {
            this.state.active_components[i].z_index = this.state.active_components[i].z_index - 1;
          }
        };
        this.setState({
          active_components: this.state.active_components
        });
        break;

      //go backwards in folders
      case /^back/.test(id):
        let backIndex = id.split("-")[1];
        if (this.state.active_components[backIndex].render_index > 0) {
          this.state.active_components[backIndex].render_index--
        };
        this.setState({
          active_components: this.state.active_components
        });
        break;

      //go backwards in folders
      case /^forward/.test(id):
        let forwardIndex = id.split("-")[1];
        console.log()
        if (this.state.active_components[forwardIndex].render_index < this.state.active_components[forwardIndex].data.length - 1) {
          this.state.active_components[forwardIndex].render_index++
        };
        this.setState({
          active_components: this.state.active_components
        });
        break;

      //open new photo tab
      case /^new-photo-tab/.test(id):
        let id_array = id.split("-");
        let render_index = parseInt(id_array[id_array.length - 1]);
        let id_body = id_array.slice(0, id_array.length - 1).join("-");
        this.setState({
          active_components: [
            ...this.state.active_components,
            {
              render: true,
              render_index: render_index,
              z_index: this.state.active_components.length + 1,
              fullscreen: false,
              data: folders_files_data[id_body]
            }
          ]
        });
        break;

      case /^photo-previous/.test(id):
        let preveiousPhotoIndex = id.split("-")[2]
        if (this.state.active_components[preveiousPhotoIndex].render_index > 0) {
          this.state.active_components[preveiousPhotoIndex].render_index--;
        } else {
          this.state.active_components[preveiousPhotoIndex].render_index = this.state.active_components[preveiousPhotoIndex].data.length - 1;
        };
        this.setState({
          active_components: this.state.active_components
        });
        break;

      case /^photo/.test(id):
        let tab_index = id.split("-")[2]
        if (this.state.active_components[tab_index].render_index < this.state.active_components[tab_index].data.length - 1) {
          this.state.active_components[tab_index].render_index++;
        } else {
          this.state.active_components[tab_index].render_index = 0;
        };
        this.setState({
          active_components: this.state.active_components
        })
        break;

      default:
        //folders or files that shouldnt open a new tab and just renders new data in the same window
        let newActiveComponents = [];
        for (let i = 0; i < this.state.active_components.length; i++) {
          if (this.state.active_components[i].z_index == this.state.active_components.length) {
            let newObj = {
              render: this.state.active_components[i].render,
              render_index: this.state.active_components[i].render_index + 1,
              z_index: this.state.active_components[i].z_index,
              fullscreen: this.state.active_components[i].fullscreen,
              data: [...this.state.active_components[i].data.slice(0, this.state.active_components[i].render_index + 1), folders_files_data[id]]
            };
            newActiveComponents.push(newObj);
          } else {
            newActiveComponents.push(this.state.active_components[i]);
          }
        }
        this.setState({
          active_components: newActiveComponents
        })
    }
  }



  render() {
    // console.log(replaceItem([1, 2, 3], 1, 69))
    //rendering all components in active components
    // console.log("render state:", this.state.active_components)
    let key = -1;
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.render) {
        if (active.data[active.render_index].type == "terminal") {
          return <Cmd key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type == "photo") {
          return <PhotoViewer key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type == "window") {
          return <Window key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type == "explorer") {
          return <Explorer key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
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
