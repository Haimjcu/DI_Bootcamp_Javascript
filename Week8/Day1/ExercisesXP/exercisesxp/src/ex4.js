import './Exercise4.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
        // <h1 style={{color:'red',backgroundColor:'lightblue'}}>Hello</h1>
const Exercise4 = () => {
    return (
        <>
        <h1 style={style_header}>Hello</h1>
        <p className="para">Happy Purim!!</p>
        <a href="https://google.com">This is a link</a>
        <form >
            <input type="text" id="fname" name="fname"></input>
            <button>Submit</button>
        </form>
        <img src="./logo512.png"></img>
        <ul>
            <li>list one</li>
            <li>list two</li>
            <li>list three</li>
        </ul>
    
        </>

    )

    
}

export default Exercise4