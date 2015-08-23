# JSPM Loader: CSS Modules

A CSS Modules loader for JSPM

Install the plugin and name it `css` locally

```
jspm install css=npm:jspm-loader-css-modules
```

Write some CSS Modules:

```css
/* component.css */
.myComponent {
  composes: redBackground from "./backgrounds.css";
  color: white;
}
```

```css
/* backgrounds.css */
.redBackground {
  background-color: red;
}
```

and use them in your JS:

```js
import styles from './component.css!'
elem.innerHTML = `<div class="${styles.myComponent}"></div>`
```

The following CSS is generated:

```css
._path_to_backgrounds__redBackground { background-color: red; }
._path_to_component__myComponent { color: white; }
```

And the `styles` variable returns

```json
{
  "myComponent": "_path_to_backgrounds__redBackground _path_to_component__myComponent"
}
```

For the opt-in version, using `:local` to declare exported classnames, use the default [JSPM CSS Loader](https://github.com/geelen/jspm-loader-css) instead.
