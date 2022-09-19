import React, {useRef, useState, Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const addr = "ws://localhost:5000"
  const [inputs, setInputs] = useState('ws://localhost:5000');
  const [smsg, setSmsg] = useState('0');
  const [outputs, setOutputs] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);

  let ws = useRef(null);

  const connectServer = () => {
    
    setOutputs('connecting server...');
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
        //setOutputs((prevItems) => [data['message']]); //single message
        //setItems((prevItems) => [data]);
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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div>
          <App/>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
    );
  }
}