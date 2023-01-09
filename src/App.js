import React from 'react';
import './App.css';
import Desktop from './components/desktop';
import Window from "./components/window";
import Cmd from "./components/cmd";
import Start from "./components/start";
import terminal from "./images/windows_xp_icons/cmd-icon.jpg";
import folders_files_data from "./data/folders_files_data";
import PhotoViewer from './components/photoViewer';
import welcome from './data/Desktop_folders/cmd_body_text/1_welcome_text';
import Explorer from './components/explorer';
import notif_icon from './images/windows_xp_icons/i-icon.ico';
import notifications from './data/notifications';


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
      start: false,
      notification: null,
      popups: [
        {
          icon: notif_icon,
          title: <h3>Fullscreen mode</h3>,
          position: [83, 59, 37],
          body:
            <div id="fullscreen-notification-body">
              <p>For better experience fullscreen mode is recommended. Do you want to enter fullscreen mode?</p>
              <button
                onClick={
                  // this.openFullscreen
                  () => {
                    let elem = document.documentElement;
                    if (elem.requestFullscreen) {
                      elem.requestFullscreen();
                    } else if (elem.webkitRequestFullscreen) {
                      elem.webkitRequestFullscreen();
                    } else if (elem.msRequestFullscreen) {
                      elem.msRequestFullscreen();
                    }
                    let new_notif_array = this.state.popups.slice(1);
                    this.setState({
                      popups: new_notif_array
                    })
                  }
                }>enter</button>
            </div>
        }
      ]
    };
    this.button_handler = this.button_handler.bind(this);
    this.openFullscreen = this.openFullscreen.bind(this);
  }

  openFullscreen = () => {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    let new_notif_array = this.state.popups.slice(1);
    this.setState({
      popups: new_notif_array
    })
  }

  button_handler = (event) => {
    let id = event.target.id;
    // console.log(id)
    // return;

    if (!id) {
      return;
    }

    //open and close start component
    if (id === "start") {
      this.setState({
        start: !this.state.start
      })
      return;
    }

    if (id === "popup-body-header-close") {
      // console.log(id)
      // console.log(this.state.popups.slice(1))
      let new_notif_array = this.state.popups.slice(1);
      this.setState({
        popups: new_notif_array
      })
      return;
    }

    if (id === "notification-header-close") {
      // console.log(id)
      this.setState({
        notification: null
      })
      return;
    }

    switch (true) {
      //open new tab (object with render_index and data array) when button id starts with new-tab
      case /^new-tab/.test(id):
        let new_tab_id_data = id.split("-").slice(2).join("-");
        this.setState({
          active_components: [
            ...this.state.active_components,
            {
              render: true,
              render_index: 0,
              z_index: this.state.active_components.length + 1,
              fullscreen: false,
              data: [folders_files_data[new_tab_id_data]]
            }
          ],
          start: false
        });
        break;

      //open new tab with the given url
      case /^external-link/.test(id):
        window.open(folders_files_data[id]);
        break;

      //stop rendering component using minimize button
      case /^minimize/.test(id):
        let to_minimize = id.split("-")[1];
        let minimized_array = [];
        for (let i in this.state.active_components) {
          if (i === to_minimize) {
            minimized_array.push({
              render: false,
              render_index: this.state.active_components[i].render_index,
              z_index: this.state.active_components[i].z_index,
              fullscreen: this.state.active_components[i].fullscreen,
              data: this.state.active_components[i].data
            })
          } else {
            minimized_array.push(this.state.active_components[i])
          }
        }
        this.setState({
          active_components: minimized_array
        })

        //to be deleted
        // this.state.active_components[id.split("-")[1]].render = false
        // this.setState({
        //   active_components: this.state.active_components
        // });
        break;

      case /^maximize/.test(id):
        let to_maximize = id.split("-")[1];
        let maximized_array = [];

        //change styles only if if the device width is bigger than 1000px
        if (window.innerWidth > 1000) {
          for (let i in this.state.active_components) {
            if (i === to_maximize) {
              maximized_array.push({
                render: this.state.active_components[i].render,
                render_index: this.state.active_components[i].render_index,
                z_index: this.state.active_components[i].z_index,
                fullscreen: !this.state.active_components[i].fullscreen,
                data: this.state.active_components[i].data
              })
            } else {
              maximized_array.push(this.state.active_components[i])
            }
          }

          this.setState({
            active_components: maximized_array
          })

          // to be deleted
          // if (this.state.active_components[to_maximize].fullscreen) {

          //   //change the state fullscreen for selected window to be false
          //   this.state.active_components[to_maximize].fullscreen = false
          //   this.setState({
          //     active_components: this.state.active_components
          //   });
          // } else {

          //   //change the state fullscreen for selected window to be true
          //   this.state.active_components[to_maximize].fullscreen = true
          //   this.setState({
          //     active_components: this.state.active_components
          //   });
          // }
        }
        break;

      //close the selected active component
      case /^close/.test(id):
        let to_close = id.split("-")[1];
        let closed_array = [];
        for (let i in this.state.active_components) {
          if (i !== to_close) {
            closed_array.push(this.state.active_components[i]);
          }
        }
        this.setState({
          active_components: closed_array
        });
        break;

      case /^tab/.test(id):
        let tab = id.split("-")[1];
        let tab_array = [];
        let new_tab;
        let selected_z_index = this.state.active_components[tab].z_index;

        if (this.state.active_components[tab].z_index === this.state.active_components.length) {
          new_tab = !this.state.active_components[tab].render;
        } else {
          new_tab = true
        };

        for (let i in this.state.active_components) {
          if (i === tab) {
            tab_array.push({
              render: new_tab,
              render_index: this.state.active_components[i].render_index,
              z_index: this.state.active_components.length,
              fullscreen: this.state.active_components[i].fullscreen,
              data: this.state.active_components[i].data
            })
          } else if (this.state.active_components[i].z_index > selected_z_index) {
            tab_array.push({
              render: this.state.active_components[i].render,
              render_index: this.state.active_components[i].render_index,
              z_index: this.state.active_components[i].z_index - 1,
              fullscreen: this.state.active_components[i].fullscreen,
              data: this.state.active_components[i].data
            })
          } else {
            tab_array.push(this.state.active_components[i])
          }
        }

        this.setState({
          active_components: tab_array
        })

        //to be deleted
        //render and stop rendering component using tab button
        // if (this.state.active_components[tab].z_index === this.state.active_components.length) {
        //   this.state.active_components[tab].render = !this.state.active_components[tab].render;
        // } else {
        //   this.state.active_components[tab].render = true
        // };

        //change z-index after clicking a tab (move clicked tab forwards)
        // let selected_z_index = this.state.active_components[tab].z_index;
        // for (let i = 0; i < this.state.active_components.length; i++) {
        //   if (i === tab) {
        //     this.state.active_components[i].z_index = this.state.active_components.length;
        //   } else if (this.state.active_components[i].z_index > selected_z_index) {
        //     this.state.active_components[i].z_index = this.state.active_components[i].z_index - 1;
        //   }
        // };
        // this.setState({
        //   active_components: this.state.active_components
        // });
        break;

      //go backwards in folders
      case /^back/.test(id):
        let backIndex = id.split("-")[1];

        if (this.state.active_components[backIndex].render_index > 0) {
          let back_array = [];
          for (let i in this.state.active_components) {
            if (i === backIndex) {
              back_array.push({
                render: this.state.active_components[i].render,
                render_index: this.state.active_components[i].render_index - 1,
                z_index: this.state.active_components[i].z_index,
                fullscreen: this.state.active_components[i].fullscreen,
                data: this.state.active_components[i].data
              })
            } else {
              back_array.push(this.state.active_components[i])
            }
          }
          this.setState({
            active_components: back_array
          });
        };


        // if (this.state.active_components[backIndex].render_index > 0) {
        //   this.state.active_components[backIndex].render_index--
        // };
        // this.setState({
        //   active_components: this.state.active_components
        // });
        break;

      //go backwards in folders
      case /^forward/.test(id):
        let forwardIndex = id.split("-")[1];
        let forward_array = [];

        if (this.state.active_components[forwardIndex].render_index < this.state.active_components[forwardIndex].data.length - 1) {
          for (let i in this.state.active_components) {
            if (i === forwardIndex) {
              forward_array.push({
                render: this.state.active_components[i].render,
                render_index: this.state.active_components[i].render_index + 1,
                z_index: this.state.active_components[i].z_index,
                fullscreen: this.state.active_components[i].fullscreen,
                data: this.state.active_components[i].data
              })
            } else {
              forward_array.push(this.state.active_components[i])
            }
          }

          this.setState({
            active_components: forward_array
          });
        };

        // if (this.state.active_components[forwardIndex].render_index < this.state.active_components[forwardIndex].data.length - 1) {
        //   this.state.active_components[forwardIndex].render_index++
        // };
        // this.setState({
        //   active_components: this.state.active_components
        // });
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
        let previousPhotoIndex = id.split("-")[2];
        let previous_photo_array = [];
        let previous_photo_render_index;

        if (this.state.active_components[previousPhotoIndex].render_index > 0) {
          previous_photo_render_index = this.state.active_components[previousPhotoIndex].render_index - 1;
        } else {
          previous_photo_render_index = this.state.active_components[previousPhotoIndex].data.length - 1;
        };

        for (let i in this.state.active_components) {
          if (i === previousPhotoIndex) {
            previous_photo_array.push({
              render: this.state.active_components[i].render,
              render_index: previous_photo_render_index,
              z_index: this.state.active_components[i].z_index,
              fullscreen: this.state.active_components[i].fullscreen,
              data: this.state.active_components[i].data
            })
          } else {
            previous_photo_array.push(this.state.active_components[i])
          }
        }

        this.setState({
          active_components: previous_photo_array
        });

        //to be deleted
        // if (this.state.active_components[previousPhotoIndex].render_index > 0) {
        //   this.state.active_components[previousPhotoIndex].render_index--;
        // } else {
        //   this.state.active_components[previousPhotoIndex].render_index = this.state.active_components[previousPhotoIndex].data.length - 1;
        // };
        // this.setState({
        //   active_components: this.state.active_components
        // });
        break;

      case /^photo-next/.test(id):
        let nextPhotoIndex = id.split("-")[2];
        let next_photo_array = [];
        let next_photo_render_index;

        if (this.state.active_components[nextPhotoIndex].render_index < this.state.active_components[nextPhotoIndex].data.length - 1) {
          next_photo_render_index = this.state.active_components[nextPhotoIndex].render_index + 1;
        } else {
          next_photo_render_index = 0;
        };

        for (let i in this.state.active_components) {
          if (i === nextPhotoIndex) {
            next_photo_array.push({
              render: this.state.active_components[i].render,
              render_index: next_photo_render_index,
              z_index: this.state.active_components[i].z_index,
              fullscreen: this.state.active_components[i].fullscreen,
              data: this.state.active_components[i].data
            })
          } else {
            next_photo_array.push(this.state.active_components[i])
          }
        }

        this.setState({
          active_components: next_photo_array
        });
        //to be deleted
        // if (this.state.active_components[nextPhotoIndex].render_index < this.state.active_components[nextPhotoIndex].data.length - 1) {
        //   this.state.active_components[nextPhotoIndex].render_index++;
        // } else {
        //   this.state.active_components[nextPhotoIndex].render_index = 0;
        // };
        // this.setState({
        //   active_components: this.state.active_components
        // })
        break;

      case /^notification/.test(id):
        // console.log(id)
        this.setState({
          notification: notifications[id]
        })
        break;

      default:
        //folders or files that shouldnt open a new tab and just renders new data in the same window
        let newActiveComponents = [];
        for (let i in this.state.active_components) {
          if (this.state.active_components[i].z_index === this.state.active_components.length) {
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
    //rendering all components in active components
    // console.log("render state:", this.state.active_components)
    let key = -1;
    let active_components = this.state.active_components.map((active) => {
      key++;
      if (active.render) {
        if (active.data[active.render_index].type === "terminal") {
          return <Cmd key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type === "photo") {
          return <PhotoViewer key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type === "window") {
          return <Window key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }

        if (active.data[active.render_index].type === "explorer") {
          return <Explorer key={key} key_id={key} data={active.data[active.render_index]} action={this.button_handler} z_index={active.z_index} fullscreen={active.fullscreen} />
        }
      }
      return null;
    })

    let start;
    if (this.state.start) {
      start = <Start action={this.button_handler} />
    }

    return (
      <div className="App">
        <Desktop active_components={this.state.active_components} action={this.button_handler} popups={this.state.popups} notification={this.state.notification} />
        {active_components}
        {start}
      </div>
    );

  }
}

export default App;
