
# Hand-Moveable-Slider

Hand-Moveable-Slider to create a scrollable slider using mouse interactions.

## Installation

Install the package using npm:

    npm install hand-moveable-slider


## Props

* customStyles (optional): An object to pass custom CSS styles to the HandMoveableSlider component. Default is **{border: 'none'}**, we can pass any other css what we can.


## Example

Here is an example:

```jsx
import React from 'react';
import HandMoveableSlider from 'handl-moveable-slider';

const App = () => (
  <HandMoveableSlider customStyles={{border:'none'}}>
    <div style={{border:"1px solid black"}}>hello</div>
    <div style={{border:"1px solid black"}}>hello</div>
    <div style={{border:"1px solid black"}}>hello</div>
  </HandMoveableSlider>
);

export default App;
