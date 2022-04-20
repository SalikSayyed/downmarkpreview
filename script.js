// !! IMPORTANT README:
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
//**********************************
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();


import Slider from "https://cdn.skypack.dev/@material-ui/core/Slider";

class MarkdN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# Welcome to my React Markdown Previewer!
      Made By <a href="https://github.com/SalikSayyed">SalikSayyed</a>
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![MarkDown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)
`,
      copymarkdownvar: 'Copy MarkDown',
      copyhtmlvar: 'Copy HTML' };

    this.handleChange = this.handleChange.bind(this);
    this.handleeditorfontsize = this.handleeditorfontsize.bind(this);
    this.copyhtml = this.copyhtml.bind(this);
    this.copymarkdown = this.copymarkdown.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
      editorfontsize: 2 });

  }
  copyhtml() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = marked(this.state.text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    this.setState({ ...this.state, copyhtmlvar: 'Copied HTML!' });
    console.log('Clicked MArkdown');setTimeout(() => this.setState({ ...this.state, copyhtmlvar: 'Copy HTML' }), 2000);
  }
  copymarkdown() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = this.state.text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    this.setState({ ...this.state, copymarkdownvar: 'Copied Markdown!' });
    console.log('Clicked MArkdown');setTimeout(() => this.setState({ ...this.state, copymarkdownvar: 'Copy Markdown' }), 2000);
  }
  handleeditorfontsize(e) {
    this.setState({
      ...this.state,
      editorfontsize: e.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { id: "markdown" }, /*#__PURE__*/
      React.createElement("div", { id: "markhead" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.copymarkdown, id: "copymarkdown", class: "tooltip" }, /*#__PURE__*/React.createElement("div", { class: "fas fa-copy" }), /*#__PURE__*/React.createElement("span", { class: "tooltiptext" }, this.state.copymarkdownvar))), /*#__PURE__*/

      React.createElement("textarea", { id: "editor", onChange: e => this.handleChange(e) }, this.state.text)), /*#__PURE__*/


      React.createElement("div", { id: "markdownprev" }, /*#__PURE__*/
      React.createElement("div", { id: "prevhead" }, /*#__PURE__*/React.createElement("button", { onClick: this.copyhtml, id: "copyhtml", class: "tooltip" }, /*#__PURE__*/React.createElement("div", { class: "fas fa-copy" }), /*#__PURE__*/React.createElement("span", { class: "tooltiptext" }, this.state.copyhtmlvar))), /*#__PURE__*/
      React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: marked(this.state.text) },

        id: "preview" }))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdN, null), document.querySelector('#app'));