/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var TmodJS = require('tmodjs');

module.exports = function(content, file, conf){
    var config = fis.config.get('settings.parser.tmpl');
    var tmod = new TmodJS('./', fis.config.get('settings.parser.tmpl'));
    config.filename = file.id;
    var modObject = tmod.template.AOTcompile(content, config);

    var deps = modObject.requires;
    if(deps){
        deps = deps.map(function(v){
            file.addRequire(v.replace(/^\.\//, ''));
        });
    }

    return modObject.code.replace('template(','$.template(');
};
