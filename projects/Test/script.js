class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
    this.refs.search.focus();
  }

   fetchUsers() {
    fetch(`https://api.myjson.com/bins/j23xw`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data.data,
        })
      )
      .catch(error => console.log(" ERROR "));
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value });

  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function (user) {
        return user.name.toLowerCase().match(search);
      });
    }

    return (
      React.createElement("div", null,
      React.createElement("div", null,
      React.createElement("h3", null, "List of User from https://api.myjson.com/bins/j23xw"),
      React.createElement("input", {
        type: "text",
        value: this.state.searchString,
        ref: "search",
        onChange: this.handleChange,
        placeholder: "Type user's name or email here" }),
      React.createElement("ul", null,
      _users.map(l => {
        return (
          React.createElement("li", null,l.name, " ", React.createElement("a", { href: "#" }, l.email),"   ", React.createElement('img',{src: l.avatar,height:40}) )
          );
      })))));
  }}
ReactDOM.render(React.createElement(Search, null), document.getElementById("app"));