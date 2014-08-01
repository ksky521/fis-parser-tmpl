/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var TmodJS = require('tmodjs');

module.exports = function(content, file, conf){
    var tmod = new TmodJS('./', fis.config.get('settings.parser.tmpl'));
    var modObject = tmod.template.AOTcompile(content, {
        filename: file.id
    });

    var deps = modObject.requires;
    if(deps){
        deps = deps.map(function(v){
            return v.replace(/^\.\//, '');
        });
    }
    file.deps = deps;
    return modObject.code;
};
