# fis-parser-tmpl

A parser for fis to compile artTemplate file.

### fis设置

```
settings: {
        parser: {
            tmpl: {
                "output": "./build",
                "charset": "utf-8",
                "syntax": "simple",
                "helpers": null,
                "escape": true,
                "compress": false,
                "type": "default",
                "runtime": "template.js",
                "combo": true,
                "minify": false,
                "cache": false
            }
        },
        //...

var tmodjs = require(__dirname + path.sep + 'nodejsLib/node_modules/fis-parser-tmpl/index.js');

fis.config.set('modules.parser.tmpl', tmodjs);
```


