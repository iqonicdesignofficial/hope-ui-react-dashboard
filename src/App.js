//router
import IndexRouters from "./router/index"

//scss
import "./assets/scss/hope-ui.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/custom.scss"
import "./assets/scss/customizer.scss"

function App() {
  return (
    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;
