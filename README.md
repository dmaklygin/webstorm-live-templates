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


####JavaScript

`req` - require script

```
var $NAME$ = require('$SCRIPT$');
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
