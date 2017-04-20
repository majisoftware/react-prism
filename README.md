# @maji/react-prism

A React component for highlighting code with [Prism](http://prismjs.com/).

## Installation

This component does not bundle Prism; you have to include it in your project. To install both Prism and this component, run:

```
$ yarn add prismjs @maji/react-prism
```

## Example

A simple example of highlighting some javascript:

```js
import Prism from '@maji/react-prism'

const App = (
  <div className='app'>
    <Prism language='javascript'>
      {`
        // your code goes here...
        var foo = 'bar'
      `}
    </Prism>
  </div>
)
```

A more complete example is in `example/app.js`.

> **NOTE**: you will also need to include Prism's CSS. When installed with npm, its stylesheets are at `node_modules/prismjs/themes/*.css`.

## License

MIT
