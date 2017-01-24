import React from 'react';

const pollChoice = (props) => {
  return (
    <div className="row grey darken-2">
      <div className="col s8 offset-s2">
        <form>
        <p>
        <input id="choice" type="radio" name="choice"/>
        <label for="choice">"Choose: " + props.choice</label>
        </p>
        </form>
      </div>
    </div>
  );
};
export default pollChoice;
