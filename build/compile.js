var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var templates = [];
var rootPath = path.resolve(__dirname, '../');
var readmePath = path.resolve(__dirname, '../README.md');
var writeStream = fs.createWriteStream(readmePath);
writeStream.once('open', function(fd) {

  writeStream.write(fs.readFileSync(path.resolve(__dirname, './README.header.md')));
  writeStream.write('\n\n');
  writeStream.write('###Templates');
  writeStream.write('\n\n');

  fs.readdir(rootPath, function(err, files) {

    if (err) throw err;
    var tempFiles = [];
    files.forEach(function (fileName) {
      if (/^[A-Za-z0-9]*\.xml$/g.exec(fileName)) {
        tempFiles.push(fileName);
      }
    });

    tempFiles.forEach(function (fileName, index) {
      var filePath = path.resolve(rootPath, fileName);
      fs.readFile(filePath, function (err, data) {
        if (err) throw err;
        xml2js.parseString(data, function (err, result) {
          if (err) throw err;
          var lines = [];
          lines.push('####' + result.templateSet.$.group);
          lines.push('');
          result.templateSet.template.forEach(function(template) {
            lines.push('`' + template.$.name + '` - ' + template.$.description + '\n');
            lines.push('```');
            lines.push(template.$.value);
            lines.push('```');
            lines.push('');
          });

          templates.push(lines.join('\n'));

          //fs.appendFile(readmePath, lines.join('\n'));
          //writeStream.write(lines.join('\r\n\n'));
          if (tempFiles.length == templates.length) {
            writeStream.write(templates.join('\n\n'));
          }
        });
      });
    });
  });
});
