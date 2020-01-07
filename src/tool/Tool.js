import React from 'react';

class Tool extends React.Component {
  constructor() {
    super();

    this.toolGroups = [
      {
        name: "Formatting",
        tools: [
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          }
        ]
      },
      {
        name: "Formatting",
        tools: [
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          },
          {
            name: "Haste Bin",
            description: "Paste bin for your code",
            image: "/images/hastebin.jfif",
            link: "https://hastebin.com"
          }
        ]
      }
    ]

  }

  getToolsTemplate(tools) {
    const toolsTemplate = tools.map((tool) =>
      <div class="col-sm-2">
        <div class="card">
          <a href={tool.link} target="_blank">
            <img class="card-img-top" src={tool.image} alt={tool.name} />
          </a>
          <div class="card-body">
            <h5 class="card-title">{tool.name}</h5>
            <p class="card-text">{tool.description}</p>
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
      <div class="card" >
        <div class="card-header">
          {toolGroup.name}
        </div>
        <div class="card-body">
          <div class="row">
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
      this.getToolGroupsTemplate(this.toolGroups)
    );
  }
}

export default Tool;