
import './App.css';
import weatherAPI from './api/weatherAPI';


function App() {

// -=-=-=-=-=-= GET API -=-=-=-=-=-=-=

const apiGET = async(data) => {
  weatherAPI.get('/api/weatherAPI')

  // __________  TRY - CATCH  ________

  try { 
    const respose = await weatherAPI(`/api/weatherAPI/${data}`);
    console.log(respose.data);
  } catch (error) {
    console.log(error.message);
  }
};





// -=-=-=-=-=-= RETURN -=-=-=-=-=-=-=
  return (
    <div className="App">
      <button onClick={weatherAPI}>CLICK ME FOR DATA</button>
    </div>
  );
}

export default App;
