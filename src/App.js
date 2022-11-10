import React from 'react';
import './App.css';
import Desktop from './desktop';
import Window from "./window";
import Cmd from "./cmd";
// import Start from "./start";
import terminal from "./images/cmd-icon.jpg";
import folders_files_data from "./folders_files_data"
import arrayPop from './arrayPop';


import profile from "./images/profile.ico";
import folder from "./images/folder.ico";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_components: [
        {
          render_index: 0,
          data: [
            {
              icon: terminal,
              title: "Welcome",
              type: "terminal",
              content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
            }
          ]
        }
        , {
          render_index: 0,
          data: [
            {
              icon: profile,
              title: "About me",
              type: "window",
              content: {
                address: "k:\ Web Dev projects",
                folders_files: [
                  {
                    icon: folder,
                    title: "folder1"
                  },
                  {
                    icon: folder,
                    title: "folder1"
                  },
                  {
                    icon: folder,
                    title: "folder1"
                  },
                  {
                    icon: folder,
                    title: "folder1"
                  }
                ]
              }
            }]
        }
      ]
    };
    this.button_handler = this.button_handler.bind(this);
  }

  button_handler = (event) => {
    // console.log(event.target.id)
    let id = event.target.id;


    //working close but deletes similar objects
    if (id == "close-button") {
      this.setState({
        active_components: arrayPop(this.state.active_components)
      })
        ;
      return;
    }

    //open new tab (object with render_index and data array) when button id starts with new-tab
    if (/^new-tab/.test(id)) {
      this.setState({
        active_components: [
          ...this.state.active_components,
          {
            render_index: 0,
            data: [folders_files_data[id]]
          }
        ]
      })
    } else {
      //folders or files that shouldnt open a new tab and just renders new data in the same window
      let lastItem = this.state.active_components[this.state.active_components.length - 1];
      console.log(lastItem)
      lastItem.render_index++;
      lastItem.data.push(folders_files_data[id]);
      console.log(lastItem)

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
    console.log(this.state.active_components)
    let key = -1;
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.data[active.render_index].type == "terminal") {
        return <Cmd key={key} data={active.data[active.render_index]} action={this.button_handler} />
      }

      if (active.data[active.render_index].type == "window") {
        return <Window key={key} data={active.data[active.render_index]} action={this.button_handler} />
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
