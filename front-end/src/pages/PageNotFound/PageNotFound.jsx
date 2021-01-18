import React, { Component } from 'react'

export class PageNotFound extends Component {
    render() {
        document.title = `InStock - Page Not Found`
        return (
            <div>
                <p>Page not found, I'd go back by clicking the links above if I were you!</p>
            </div>
        )
    }
}

export default PageNotFound
