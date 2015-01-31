###Copy XML files into particular directory

Windows: `<your home directory>\.<product name><version number>\config\templates`

Linux: `~\.<product name><version number>\config\templates`

MacOS: `~/Library/Preferences/<product name><version number>/templates`

###Templates

####Gulp

`gulpt` - gulp.task('name', [modules], function() {})

```
gulp.task('$NAME$', [], function() {

});
```

`gulps` - gulp.src('/path').pipe()

```
gulp.src('$PATH$')
  .pipe(name(''))
```

`gulpw` - gulp.watch('/path/to/src', ['default']);

```
gulp.watch('$SRC$', ['default']);
```


####React

`rec` - React.createClass

```
var $name$ = React.createClass({
  render: function() {
    return (
      $div$
    )
  }
});
```

`cw` - componentWihMount

```
componentWithMount: function() {

}
```

`thisp` - this.props

```
this.props
```

`thiss` - this.state

```
this.state
```

`thisr` - this.refs

```
this.refs
```

`ss` - this.setState()

```
this.setState($OBJECT$);
```

`sp` - this.setProps()

```
this.setProps($OBJECT$);
```

`ree` - React.createElement

```
var $name$ = React.createElement(
  $ReactClass$,
  $PROPS$,
  $CHILDREN$
);
```


####JavaScript

`req` - require script

```
var $NAME$ = require('$SCRIPT$');
```
