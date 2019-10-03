import React from 'react'

import { validateModelDef } from './schema-validation';

const isJson = j => {
  try {
    JSON.parse(j)
    return true;
  } catch (err) {
    return false;
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {content: '', errors: null};
  }

  handleSubmit = () => {
    const { content } = this.state;

    // 1 check if JSON
    if (!isJson(content)) {
      const errors = ['the string you entered is not a JSON string, try again'];
      this.setState({errors, message: null});
      return;
    }

    // 2 check if it is a DDL file
    const validation = validateModelDef(content);
    if(validation && !validation.status) {
      const errors = ['the string you entered is not a properly formatted DDL file, try again'].concat(validation.errors.map(x => {
        return x;
      })
    );

      this.setState({errors, message: null});
      return;
    }
    

    // else
    const errors = null;
    const message = 'Congratulations, this is a valid file';

    this.setState({errors, message});
  }

  handleChange = (a) => {
    const content = a.target.value;

    this.setState({content});
  }

  renderError() {
    const { errors } = this.state;

    if (!errors) {
      return null;
    }

    return (<ul className="list-group">
      {errors.map((error, i) => {
        return <li className="list-group-item list-group-item-danger" key={i}>{error}</li>
      })}
    </ul>)
  }

  renderSuccess() {
    const { message } = this.state;
    if (!message) {
      return null;
    }

    return <p className="alert alert-success">{message}</p>;
  }

  render() {
    const {content} = this.state;
    return (<div className="container">
      <h1>DDL Checker</h1>
      <p>Details <a href="https://nexysweb.github.io/DevelopmentConsultingFramework/ddl-json">here</a></p>

      {this.renderError()}
      {this.renderSuccess()}

      <div className="row">
        <div className="col-md-12">
          <textarea className="form-control" style={{minWidth: '100%', height: '400px'}} placeholder={'insert your json here'} value={content} onChange={this.handleChange}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Validate</button>
        </div>
      </div>
    </div>)
  }
}