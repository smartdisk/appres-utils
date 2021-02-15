'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var AppresUtils = /** @class */ (function () {
  
  function AppresUtils() {
    
  }

  function enableTabKey(id) {
    var el = (typeof id)=="string" ? document.getElementById(id) : id;
    el.onkeydown = function(e) {
        if (e.keyCode === 9) { // tab was pressed
  
            // get caret position/selection
            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;
  
            // set textarea value to: text before caret + tab + text after caret
            this.value = val.substring(0, start) + '\t' + val.substring(end);
  
            // put caret at right position again
            this.selectionStart = this.selectionEnd = start + 1;
  
            // prevent the focus lose
            return false;  
        }
    };
  }

  AppresUtils.prototype.enableTabKey = function (id) {
    enableTabKey(id);
  };

  AppresUtils.appresUtils = new AppresUtils();
  AppresUtils.enableTabKey = function(id) {
    this.appresUtils.enableTabKey(id);
  };

  return AppresUtils;
}());

module.exports = AppresUtils;
module.exports.AppresUtils = AppresUtils;
