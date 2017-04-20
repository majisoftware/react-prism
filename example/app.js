const React = require('react')
const ReactDOM = require('react-dom')
const insertCSS = require('insert-css')
const fs = require('fs')
const Prism = require('../src/Prism')

const styles = fs.readFileSync(require.resolve('prismjs/themes/prism.css'), 'utf-8')
insertCSS(styles)

const app = (
  <div className='app'>
    <h1>react-prism example</h1>
    <Prism>
      {fs.readFileSync(__filename, 'utf-8')}
    </Prism>
  </div>
)

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(app, root)
