import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-screen">
          <h1>Something went wrong</h1>
          <p>Please head back and try again.</p>
          <a className="hero__cta" href="/">
            Back to Home
          </a>
        </div>
      )
    }
    return this.props.children
  }
}
