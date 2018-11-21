import React, { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">{this.props.copyright}{this.props.year}</a>
            </nav>
        )
    } 
}
Footer.defaultProps = {
      copyright: '©',
      year: '2018'
    }  
export default Footer