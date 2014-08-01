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

### 支持生成模板依赖到map.json

```javascript
//生成map.json
fis.config.set('modules.postpackager', function(ret, conf, settings, opt) {
    fis.util.map(ret.map.res, function(id, res) {
        var file = ids[id];
        if(file.isJSTemplate && file.deps && file.deps.length){
            //处理artTemplate依赖
            res.deps = file.deps;
        }
    });
}
```
