  function getRealStyle(element,styleName){
    var realStyle = null;
    if(element.currentStyle){
      	realStyle = element.currentStyle[styleName];//IE
      }else if(window.getComputedStyle){
      	realStyle=window.getComputedStyle(element,null)[styleName];//W3C
      }
    return realStyle;
  }