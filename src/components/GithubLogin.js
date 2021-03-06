import React from 'react'

export default class GithubLogin extends React.Component{
  static propTypes = {
    setApiToken: React.PropTypes.func.isRequired
  };

  updateApiToken() {
    this.props.setApiToken(new Buffer(`${this.refs.username.value}:${this.refs.apiTokenInput.value}`).toString('base64'));
  }

  render() {
    return (
      <div>
        <h2>Github</h2>
        <h3>Set API Token</h3>
        <div className="form-inline">
          <div className="form-group">
            <input id="apiTokenInput" ref="apiTokenInput" className="form-control" placeholder="Github API Token"/>
          </div>
          <div className="form-group">
            <input id="username" ref="username" className="form-control" placeholder="Git UserName"/>
          </div>
          <div className="btn btn-default" onClick={this.updateApiToken.bind(this)}>Save</div>
          <div>
            <a href="https://github.com/settings/tokens" target="_blank">get github API token</a>
          </div>
        </div>
      </div>
    );
  }
}