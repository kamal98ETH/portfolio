import { useState, useCallback, useEffect, useRef } from "react";
import closeIcon from "../images/windows_xp_icons/close_window.png"



function WindowHeader(props) {
    // declare variables to calculate the movement of the window
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragDistance, setDragDistance] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    // reference the header element
    const myRef = useRef(null);

    // create the function to be called when the header is pressed down 
    const handleMouseDown = useCallback((e) => {
        // intials the drag distance to be the current position of the window
        setDragDistance({
            x: e.currentTarget.getBoundingClientRect().left,
            y: e.currentTarget.getBoundingClientRect().top
        })
        // setup the starting coordinates 
        setDragStart({
            x: e.clientX - e.currentTarget.getBoundingClientRect().left,
            y: e.clientY - e.currentTarget.getBoundingClientRect().top
        });
        // start calculating the dragging
        setDragging(true)
    }, []);

    // create the function to track the mouse movement and calculating the dragging distance
    const handleMouseMove = useCallback((e) => {
        if (dragging) {
            // calculate dragging distance
            setDragDistance({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            })
            // update the values on the Window component to move it
            props.moveWindow({
                top: dragDistance.y + "px",
                left: dragDistance.x + "px"
            })
            // document.querySelector(".window-0").style.top = dragDistance.y + "px";
            // document.querySelector(".window-0").style.left = dragDistance.x + "px";
            // if (document.querySelector(".window-0").getBoundingClientRect().top < 0) {
            //     document.querySelector(".window-0").style.top = "0px";
            // }
        }
    }, [dragging, dragStart, dragDistance, props]);

    // stop the dragging when the right click is releaced
    const handleMouseUp = useCallback(() => {
        setDragging(false)
    }, []);

    // add event listeners to the elements
    useEffect(
        () => {
            let header_element = myRef.current;
            let root_element = document.getElementById("root");
            header_element.addEventListener('mousedown', handleMouseDown);
            root_element.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            // console.log(header_element)
            return () => {
                header_element.removeEventListener('mousedown', handleMouseDown);
                root_element.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    )
    // console.log(props)
    return (
        <div className="window-header">
            <div className="window-drag" id={"drag-" + props.key_id} ref={myRef} onMouseDown={props.action}></div>
            <div className="window-header-title">
                <img src={props.data.icon} alt="window header icon" />
                <h1>{props.data.title}</h1>
            </div>
            <div className="window-header-display-tools">
                <button className="minimize" title="minimize" onClick={props.action} id={"minimize-" + props.key_id}>
                    <div className="min-icon-outer" id={"minimize-" + props.key_id}>
                        <div className="min-icon-inner" id={"minimize-" + props.key_id}></div>
                    </div>
                </button>
                <button className="maximize" title="maximize" onClick={props.action} id={"maximize-" + props.key_id}>
                    <div className="max-icon-outer" id={"maximize-" + props.key_id}>
                        <div className="max-icon-inner" id={"maximize-" + props.key_id}></div>
                    </div>
                </button>
                <button className="close" title="close" onClick={props.action}>
                    <img src={closeIcon} alt="window close button" id={"close-" + props.key_id} />
                </button>
            </div>
        </div>
    )
}

export default WindowHeader;