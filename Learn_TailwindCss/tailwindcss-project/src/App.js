import './App.css';
import GridAlignContent from './Grid/GridAlignContent';
import GridFlowExample from './Grid/GridFlowExample';
import GridJustifyItem from './Grid/GridJustifyItem';

function App() {
  return (
    <>
      <h1 className='font-bold italic text-center m-5'>Helllo TailwindCss</h1>
      <GridFlowExample />
      <GridJustifyItem />
      <GridAlignContent />
    </>
  );
}

export default App;
