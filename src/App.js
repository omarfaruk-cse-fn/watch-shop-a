import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import PropsVsState from './components/PropsVsState/PropsVsState';
import ReactWork from './components/ReactWork/ReactWork';

function App() {

  return (
    <div className="App  container">
      <Menu></Menu>
      <Products></Products>
      <ReactWork></ReactWork>
      <PropsVsState></PropsVsState>
    </div>
  );
}

export default App;
