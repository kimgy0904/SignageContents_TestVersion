// Signage 3 번 App.js

import React, {useRef, useState, Component, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const addr = "ws://localhost:5000";
  const [inputs, setInputs] = useState('ws://localhost:5000');
  const [smsg, setSmsg] = useState('0');
  const [outputs, setOutputs] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);

  let ws = useRef(null);

  const connectServer = () => {

    setOutputs('connecting server...')
    if(!ws.current){
      ws.current = new WebSocket(addr);
      ws.current.onopen = () => {
        console.log("connected to " + addr);
        setOutputs("connected to " + addr)
        setSocketConnected(true);
      };
      ws.current.onclose = (error) => {
        console.log("disconnect from " + addr);
        setOutputs("disconnect from " + addr)
        console.log(error);
      };
      ws.current.onerror = (error) => {
        console.log("connection error " + addr);
        setOutputs("connection error " + addr)
        console.log(error);
      };
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        console.log(data);
        setOutputs((prevItems) => [data[1]]);
      };
    };
  };

  const onSendChange = (e) => {
    setSmsg(e.target.value);
  }

  const sendmsg = () => {
    if (socketConnected){
      ws.current.send(
          JSON.stringify({
            message: smsg
          })
      )
    }
  }



  return (
      <div>
        <div>
        <input value={inputs}/>
          {/*connect버튼 클릭시 connectServer 함수 실행 */}
        <button onClick={connectServer}>connect</button>
      </div>
        <div>
          <input onChange={onSendChange} value={smsg}/>
          <button onClick={sendmsg}>send</button>
        </div>
        <div>
          output: {outputs}
        </div>
      </div>
  );
}

export default App;