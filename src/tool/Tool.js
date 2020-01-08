import React from 'react';
import "./Tool.css";

class Tool extends React.Component {
  constructor() {
    super();

    this.state = {
      toolGroups: []
    };

    fetch('assets/toolGroups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          toolGroups: data.toolGroups
        });
      }).catch(function (error) {
        console.log(error);
      });
  }

  getToolsTemplate(tools) {
    const toolsTemplate = tools.map((tool) =>
      <div className="col-sm-2">
        <div className="card">
          <a href={tool.link} target="_blank">
            <img className="card-img-top card-img" src={tool.image} alt={tool.name} />
          </a>
          <div className="card-body">
            <a href={tool.link} target="_blank">
              <h5 className="card-title">{tool.name}</h5>
            </a>
            <p className="card-text">{tool.description}</p>
          </div>
        </div>
      </div>
    );

    return (
      [toolsTemplate]
    );
  }

  getToolGroupsTemplate(toolGroups) {
    const toolGroupsTemplate = toolGroups.map((toolGroup) =>
      <div className="card" >
        <div className="card-header">
          {toolGroup.name}
        </div>
        <div className="card-body">
          <div className="row">
            {this.getToolsTemplate(toolGroup.tools)}
          </div>
        </div>
      </div>
    );

    return (
      [toolGroupsTemplate]
    );
  }

  render() {
    return (
      <div className="cardGroups">
        {this.getToolGroupsTemplate(this.state.toolGroups)}
      </div>
    );
  }
}

export default Tool;