import './App.css';
// import Example from './Custom-Hooks/CustomHooks';
import CustomHooks from './Custom-Hooks/CustomHooks1';
import Monster from './Monster-Rolodex/Monsters';
// import MultipleInputs from './Multiple_Inputs/MultipleInputExample';
// import UseRefBasics from './UseRefBasics/UseRefBasics';
import Index from './UseReducer';
import ContextAPI from './UseReducer/contextApi';
import PropDrilling from './UseReducer/propdrilling';

function App() {
  return (
    // <MultipleInputs/>
    // <UseRefBasics/>
    // <Index />
    // <PropDrilling/>
    // <Monster />
    // <ContextAPI/>
    // <Example /> //Custom hooks example which demonstrates products with item name,price,company and images
    <CustomHooks />
  );
}

export default App;
