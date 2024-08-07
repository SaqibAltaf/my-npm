
# Handle-Moveable-Slider

Handle-Moveable-Slider to create a scrollable slider using mouse interactions.

## Installation

Install the package using npm:

    npm install handle-moveable-slider


## Props

* customStyles (optional): An object to pass custom CSS styles to the HandleMoveableSlider component. Default is **{border: 'none'}**, we can pass any other css what we can.


## Example

Here is an example:

```jsx
import React from 'react';
import HandleMoveableSlider from 'handle-moveable-slider';

const App = () => (
  <HandleMoveableSlider customStyles={{border:'none'}}>
    <div style={{border:"1px solid black"}}>hello</div>
    <div style={{border:"1px solid black"}}>hello</div>
    <div style={{border:"1px solid black"}}>hello</div>
  </HandleMoveableSlider>
);

export default App;
