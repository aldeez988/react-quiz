/*
 * ============= Question 4 =============
 *
 * Convert the MonkeysExhibit component below to a class component.
 */

import React from "react";
class MonkeysExhibit extends React.Component {

  render() {
    return (
      <section className="monkeys">
        <h2>Latin name: {this.props.latinName}</h2>
        <ul>
          {this.props.commonSpecies.map((speciesName, index) => {
            return <li key={index}>{speciesName}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default MonkeysExhibit;
