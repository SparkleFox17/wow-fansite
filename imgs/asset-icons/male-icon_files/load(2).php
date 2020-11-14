/* MediaWiki:jquery-ui/jquery.effects.js */
/*!
 * jQuery UI Effects 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($, undefined) {

$.effects = {};


/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/

// override the animation for color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor',
  'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'],
function(i, attr) {
  $.fx.step[attr] = function(fx) {
    if (!fx.colorInit) {
      fx.start = getColor(fx.elem, attr);
      fx.end = getRGB(fx.end);
      fx.colorInit = true;
    }

    fx.elem.style[attr] = 'rgb(' +
      Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
      Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
      Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
  };
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
    var result;

    // Check if we're already dealing with an array of colors
    if ( color && color.constructor == Array && color.length == 3 )
        return color;

    // Look for rgb(num,num,num)
    if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
        return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

    // Look for rgb(num%,num%,num%)
    if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
        return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

    // Look for #a0b1c2
    if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
        return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

    // Look for #fff
    if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
        return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

    // Look for rgba(0, 0, 0, 0) == transparent in Safari 3
    if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
        return colors['transparent'];

    // Otherwise, we're most likely dealing with a named color
    return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
    var color;

    do {
        // jQuery <1.4.3 uses curCSS, in 1.4.3 - 1.7.2 curCSS = css, 1.8+ only has css
        color = ($.curCSS || $.css)(elem, attr);

        // Keep going until we find an element that has color, or we hit the body
        if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
            break;

        attr = "backgroundColor";
    } while ( elem = elem.parentNode );

    return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
  aqua:[0,255,255],
  azure:[240,255,255],
  beige:[245,245,220],
  black:[0,0,0],
  blue:[0,0,255],
  brown:[165,42,42],
  cyan:[0,255,255],
  darkblue:[0,0,139],
  darkcyan:[0,139,139],
  darkgrey:[169,169,169],
  darkgreen:[0,100,0],
  darkkhaki:[189,183,107],
  darkmagenta:[139,0,139],
  darkolivegreen:[85,107,47],
  darkorange:[255,140,0],
  darkorchid:[153,50,204],
  darkred:[139,0,0],
  darksalmon:[233,150,122],
  darkviolet:[148,0,211],
  fuchsia:[255,0,255],
  gold:[255,215,0],
  green:[0,128,0],
  indigo:[75,0,130],
  khaki:[240,230,140],
  lightblue:[173,216,230],
  lightcyan:[224,255,255],
  lightgreen:[144,238,144],
  lightgrey:[211,211,211],
  lightpink:[255,182,193],
  lightyellow:[255,255,224],
  lime:[0,255,0],
  magenta:[255,0,255],
  maroon:[128,0,0],
  navy:[0,0,128],
  olive:[128,128,0],
  orange:[255,165,0],
  pink:[255,192,203],
  purple:[128,0,128],
  violet:[128,0,128],
  red:[255,0,0],
  silver:[192,192,192],
  white:[255,255,255],
  yellow:[255,255,0],
  transparent: [255,255,255]
};



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/

var classAnimationActions = ['add', 'remove', 'toggle'],
  shorthandStyles = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
  };

function getElementStyles() {
  var style = document.defaultView
      ? document.defaultView.getComputedStyle(this, null)
      : this.currentStyle,
    newStyle = {},
    key,
    camelCase;

  // webkit enumerates style porperties
  if (style && style.length && style[0] && style[style[0]]) {
    var len = style.length;
    while (len--) {
      key = style[len];
      if (typeof style[key] == 'string') {
        camelCase = key.replace(/\-(\w)/g, function(all, letter){
          return letter.toUpperCase();
        });
        newStyle[camelCase] = style[key];
      }
    }
  } else {
    for (key in style) {
      if (typeof style[key] === 'string') {
        newStyle[key] = style[key];
      }
    }
  }

  return newStyle;
}

function filterStyles(styles) {
  var name, value;
  for (name in styles) {
    value = styles[name];
    if (
      // ignore null and undefined values
      value == null ||
      // ignore functions (when does this occur?)
      $.isFunction(value) ||
      // shorthand styles that need to be expanded
      name in shorthandStyles ||
      // ignore scrollbars (break in IE)
      (/scrollbar/).test(name) ||

      // only colors or values that can be converted to numbers
      (!(/color/i).test(name) && isNaN(parseFloat(value)))
    ) {
      delete styles[name];
    }
  }

  return styles;
}

function styleDifference(oldStyle, newStyle) {
  var diff = { _: 0 }, // http://dev.jquery.com/ticket/5459
    name;

  for (name in newStyle) {
    if (oldStyle[name] != newStyle[name]) {
      diff[name] = newStyle[name];
    }
  }

  return diff;
}

$.effects.animateClass = function(value, duration, easing, callback) {
  if ($.isFunction(easing)) {
    callback = easing;
    easing = null;
  }

  return this.queue(function() {
    var that = $(this),
      originalStyleAttr = that.attr('style') || ' ',
      originalStyle = filterStyles(getElementStyles.call(this)),
      newStyle,
      className = that.attr('class') || "";

    $.each(classAnimationActions, function(i, action) {
      if (value[action]) {
        that[action + 'Class'](value[action]);
      }
    });
    newStyle = filterStyles(getElementStyles.call(this));
    that.attr('class', className);

    that.animate(styleDifference(originalStyle, newStyle), {
      queue: false,
      duration: duration,
      easing: easing,
      complete: function() {
        $.each(classAnimationActions, function(i, action) {
          if (value[action]) { that[action + 'Class'](value[action]); }
        });
        // work around bug in IE by clearing the cssText before setting it
        if (typeof that.attr('style') == 'object') {
          that.attr('style').cssText = '';
          that.attr('style').cssText = originalStyleAttr;
        } else {
          that.attr('style', originalStyleAttr);
        }
        if (callback) { callback.apply(this, arguments); }
        $.dequeue( this );
      }
    });
  });
};

$.fn.extend({
  _addClass: $.fn.addClass,
  addClass: function(classNames, speed, easing, callback) {
    return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
  },

  _removeClass: $.fn.removeClass,
  removeClass: function(classNames,speed,easing,callback) {
    return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
  },

  _toggleClass: $.fn.toggleClass,
  toggleClass: function(classNames, force, speed, easing, callback) {
    if ( typeof force == "boolean" || force === undefined ) {
      if ( !speed ) {
        // without speed parameter;
        return this._toggleClass(classNames, force);
      } else {
        return $.effects.animateClass.apply(this, [(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
      }
    } else {
      // without switch parameter;
      return $.effects.animateClass.apply(this, [{ toggle: classNames },force,speed,easing]);
    }
  },

  switchClass: function(remove,add,speed,easing,callback) {
    return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
  }
});



/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

$.extend($.effects, {
  version: "1.8.24",

  // Saves a set of properties in a data storage
  save: function(element, set) {
    for(var i=0; i < set.length; i++) {
      if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
    }
  },

  // Restores a set of previously saved properties from a data storage
  restore: function(element, set) {
    for(var i=0; i < set.length; i++) {
      if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
    }
  },

  setMode: function(el, mode) {
    if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
    return mode;
  },

  getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
    // this should be a little more flexible in the future to handle a string & hash
    var y, x;
    switch (origin[0]) {
      case 'top': y = 0; break;
      case 'middle': y = 0.5; break;
      case 'bottom': y = 1; break;
      default: y = origin[0] / original.height;
    };
    switch (origin[1]) {
      case 'left': x = 0; break;
      case 'center': x = 0.5; break;
      case 'right': x = 1; break;
      default: x = origin[1] / original.width;
    };
    return {x: x, y: y};
  },

  // Wraps the element around a wrapper that copies position properties
  createWrapper: function(element) {

    // if the element is already wrapped, return it
    if (element.parent().is('.ui-effects-wrapper')) {
      return element.parent();
    }

    // wrap the element
    var props = {
        width: element.outerWidth(true),
        height: element.outerHeight(true),
        'float': element.css('float')
      },
      wrapper = $('<div></div>')
        .addClass('ui-effects-wrapper')
        .css({
          fontSize: '100%',
          background: 'transparent',
          border: 'none',
          margin: 0,
          padding: 0
        }),
      active = document.activeElement;

    // support: Firefox
    // Firefox incorrectly exposes anonymous content
    // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
    try {
      active.id;
    } catch( e ) {
      active = document.body;
    }

    element.wrap( wrapper );

    // Fixes #7595 - Elements lose focus when wrapped.
    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
      $( active ).focus();
    }

    wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

    // transfer positioning properties to the wrapper
    if (element.css('position') == 'static') {
      wrapper.css({ position: 'relative' });
      element.css({ position: 'relative' });
    } else {
      $.extend(props, {
        position: element.css('position'),
        zIndex: element.css('z-index')
      });
      $.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
        props[pos] = element.css(pos);
        if (isNaN(parseInt(props[pos], 10))) {
          props[pos] = 'auto';
        }
      });
      element.css({position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' });
    }

    return wrapper.css(props).show();
  },

  removeWrapper: function(element) {
    var parent,
      active = document.activeElement;

    if (element.parent().is('.ui-effects-wrapper')) {
      parent = element.parent().replaceWith(element);
      // Fixes #7595 - Elements lose focus when wrapped.
      if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
        $( active ).focus();
      }
      return parent;
    }

    return element;
  },

  setTransition: function(element, list, factor, value) {
    value = value || {};
    $.each(list, function(i, x){
      var unit = element.cssUnit(x);
      if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
    });
    return value;
  }
});


function _normalizeArguments(effect, options, speed, callback) {
  // shift params for method overloading
  if (typeof effect == 'object') {
    callback = options;
    speed = null;
    options = effect;
    effect = options.effect;
  }
  if ($.isFunction(options)) {
    callback = options;
    speed = null;
    options = {};
  }
        if (typeof options == 'number' || $.fx.speeds[options]) {
    callback = speed;
    speed = options;
    options = {};
  }
  if ($.isFunction(speed)) {
    callback = speed;
    speed = null;
  }

  options = options || {};

  speed = speed || options.duration;
  speed = $.fx.off ? 0 : typeof speed == 'number'
    ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;

  callback = callback || options.complete;

  return [effect, options, speed, callback];
}

function standardSpeed( speed ) {
  // valid standard speeds
  if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
    return true;
  }

  // invalid strings - treat as "normal" speed
  if ( typeof speed === "string" && !$.effects[ speed ] ) {
    return true;
  }

  return false;
}

$.fn.extend({
  effect: function(effect, options, speed, callback) {
    var args = _normalizeArguments.apply(this, arguments),
      // TODO: make effects take actual parameters instead of a hash
      args2 = {
        options: args[1],
        duration: args[2],
        callback: args[3]
      },
      mode = args2.options.mode,
      effectMethod = $.effects[effect];

    if ( $.fx.off || !effectMethod ) {
      // delegate to the original method (e.g., .show()) if possible
      if ( mode ) {
        return this[ mode ]( args2.duration, args2.callback );
      } else {
        return this.each(function() {
          if ( args2.callback ) {
            args2.callback.call( this );
          }
        });
      }
    }

    return effectMethod.call(this, args2);
  },

  _show: $.fn.show,
  show: function(speed) {
    if ( standardSpeed( speed ) ) {
      return this._show.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = 'show';
      return this.effect.apply(this, args);
    }
  },

  _hide: $.fn.hide,
  hide: function(speed) {
    if ( standardSpeed( speed ) ) {
      return this._hide.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = 'hide';
      return this.effect.apply(this, args);
    }
  },

  // jQuery core overloads toggle and creates _toggle
  __toggle: $.fn.toggle,
  toggle: function(speed) {
    if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
      return this.__toggle.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = 'toggle';
      return this.effect.apply(this, args);
    }
  },

  // helper functions
  cssUnit: function(key) {
    var style = this.css(key), val = [];
    $.each( ['em','px','%','pt'], function(i, unit){
      if(style.indexOf(unit) > 0)
        val = [parseFloat(style), unit];
    });
    return val;
  }
});



/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
  baseEasings[ name ] = function( p ) {
    return Math.pow( p, i + 2 );
  };
});

$.extend( baseEasings, {
  Sine: function ( p ) {
    return 1 - Math.cos( p * Math.PI / 2 );
  },
  Circ: function ( p ) {
    return 1 - Math.sqrt( 1 - p * p );
  },
  Elastic: function( p ) {
    return p === 0 || p === 1 ? p :
      -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
  },
  Back: function( p ) {
    return p * p * ( 3 * p - 2 );
  },
  Bounce: function ( p ) {
    var pow2,
      bounce = 4;

    while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
    return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
  }
});

$.each( baseEasings, function( name, easeIn ) {
  $.easing[ "easeIn" + name ] = easeIn;
  $.easing[ "easeOut" + name ] = function( p ) {
    return 1 - easeIn( 1 - p );
  };
  $.easing[ "easeInOut" + name ] = function( p ) {
    return p < .5 ?
      easeIn( p * 2 ) / 2 :
      easeIn( p * -2 + 2 ) / -2 + 1;
  };
});

})(jQuery);


/*!
 * jQuery UI Effects Fade 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *  jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.fade = function(o) {
  return this.queue(function() {
    var elem = $(this),
      mode = $.effects.setMode(elem, o.options.mode || 'hide');

    elem.animate({ opacity: mode }, {
      queue: false,
      duration: o.duration,
      easing: o.options.easing,
      complete: function() {
        (o.callback && o.callback.apply(this, arguments));
        elem.dequeue();
      }
    });
  });
};

})(jQuery);


/*!
 * jQuery UI Effects Slide 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *  jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.slide = function(o) {

  return this.queue(function() {

    // Create element
    var el = $(this), props = ['position','top','bottom','left','right'];

    // Set options
    var mode = $.effects.setMode(el, o.options.mode || 'show'); // Set Mode
    var direction = o.options.direction || 'left'; // Default Direction

    // Adjust
    $.effects.save(el, props); el.show(); // Save & Show
    $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
    var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
    var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
    var distance = o.options.distance || (ref == 'top' ? el.outerHeight( true ) : el.outerWidth( true ));
    if (mode == 'show') el.css(ref, motion == 'pos' ? (isNaN(distance) ? "-" + distance : -distance) : distance); // Shift

    // Animation
    var animation = {};
    animation[ref] = (mode == 'show' ? (motion == 'pos' ? '+=' : '-=') : (motion == 'pos' ? '-=' : '+=')) + distance;

    // Animate
    el.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
      if(mode == 'hide') el.hide(); // Hide
      $.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
      if(o.callback) o.callback.apply(this, arguments); // Callback
      el.dequeue();
    }});

  });

};

})(jQuery);
;
/* u:dev:MediaWiki:AjaxRC/code.js */
importArticle({
    type: 'script',
    article: 'u:dev:MediaWiki:AjaxRC.js'
});
;
/* MediaWiki:Countdown/code.js */
//Subsumed here because of avoidable JS errors on pre-IE 10 clients
// __NOWYSIWYG__ <source lang="javascript">
/**
 * Countdown
 *
 * Version: 2.0
 *
 * Rewrite by Pecoes
 * Original script by Splarka + Eladkse
 *
 * documentation and examples at:
 * http://dev.wikia.com/wiki/Countdown
 */

/*jshint jquery:true, browser:true, es5:true, devel:true, camelcase:true, curly:false, undef:true, bitwise:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, unused:true, regexp:true, strict:true, trailing:false */
/*global mediaWiki:true*/

;(function (module, mw, $) {

    'use strict';

    var translations = $.extend(true, {
        en: {
            and: 'and',
            second: 'second',
            seconds: 'seconds',
            minute: 'minute',
            minutes: 'minutes',
            hour: 'hour',
            hours: 'hours',
            day: 'day',
            days: 'days'
        },
        fr: {
            and: 'et',
            second: 'seconde',
            seconds: 'secondes',
            minute: 'minute',
            minutes: 'minutes',
            hour: 'heure',
            hours: 'heures',
            day: 'jour',
            days: 'jours'
        },
        es: {
            and: 'y',
            second: 'segundo',
            seconds: 'segundos',
            minute: 'minuto',
            minutes: 'minutos',
            hour: 'hora',
            hours: 'horas',
            day: 'día',
            days: 'días'
        },
        ca: {
            and: 'i',
            second: 'segon',
            seconds: 'segons',
            minute: 'minut',
            minutes: 'minuts',
            hour: 'hora',
            hours: 'hores',
            day: 'dia',
            days: 'dies'
        },
        'pt-br': {
            and: 'e',
            second: 'segundo',
            seconds: 'segundos',
            minute: 'minuto',
            minutes: 'minutos',
            hour: 'hora',
            hours: 'horas',
            day: 'dia',
            days: 'dias'

        },
        pt: {
            and: 'e',
            second: 'segundo',
            seconds: 'segundos',
            minute: 'minuto',
            minutes: 'minutos',
            hour: 'hora',
            hours: 'horas',
            day: 'dia',
            days: 'dias'

        },
        de: {
            and: 'und',
            second: 'Sekunde',
            seconds: 'Sekunden',
            minute: 'Minute',
            minutes: 'Minuten',
            hour: 'Stunde',
            hours: 'Stunden',
            day: 'Tag',
            days: 'Tage'
        },
        it: {
            and: 'e',
            second: 'secondo',
            seconds: 'secondi',
            minute: 'minuto',
            minutes: 'minuti',
            hour: 'ora',
            hours: 'ore',
            day: 'giorno',
            days: 'giorni'
        },
        nl: {
            and: 'en',
            second: 'seconde',
            seconds: 'seconden',
            minute: 'minuut',
            minutes: 'minuten',
            hour: 'uur',
            hours: 'uur',
            day: 'dag',
            days: 'dagen'
        },
        pl: {
            and: 'i',
            second: 'sekunda',
            seconds: 'sekund(y)',
            minute: 'minuta',
            minutes: 'minut(y)',
            hour: 'godzina',
            hours: 'godzin(y)',
            day: 'dzień',
            days: 'dni'
        },
        sr: {
            and: 'i',
            second: 'sekundu',
            seconds: 'sekunde/-i',
            minute: 'minutu',
            minutes: 'minute/-a',
            hour: 'sat',
            hours: 'sata/-i',
            day: 'dan',
            days: 'dana'
        },
        zh: {
            and: ' ',
            second: '秒',
            seconds: '秒',
            minute: '分',
            minutes: '分',
            hour: '小时',
            hours: '小时',
            day: '天',
            days: '天'
        },
        ru: {
            and: 'и',
            second: 'секунда',
            seconds: 'секунд',
            minute: 'минута',
            minutes: 'минут',
            hour: 'час',
            hours: 'часов',
            day: 'день',
            days: 'дней'
        },
        hu: {
            and: 'és',
            second: 'másodperc',
            seconds: 'másodperc',
            minute: 'perc',
            minutes: 'perc',
            hour: 'óra',
            hours: 'óra',
            day: 'nap',
            days: 'nap'
        }
    }, module.translations || {}),
    i18n = translations[
        mw.config.get('wgContentLanguage')
    ] || translations.en;

    var countdowns = [];

    var NO_LEADING_ZEROS = 1;

    function output (i, diff) {
        /*jshint bitwise:false*/
        var delta, result, parts = [];
        delta = diff % 60;
        parts.unshift(delta + ' ' + i18n[delta === 1 ? 'second' : 'seconds']);
        diff = Math.floor(diff / 60);
        delta = diff % 60;
        parts.unshift(delta + ' ' + i18n[delta === 1 ? 'minute' : 'minutes']);
        diff = Math.floor(diff / 60);
        delta = diff % 24;
        parts.unshift(delta + ' ' + i18n[delta === 1 ? 'hour'   : 'hours'  ]);
        diff = Math.floor(diff / 24);
        parts.unshift(diff  + ' ' + i18n[diff  === 1 ? 'day'    : 'days'   ]);
        result = parts.pop();
        if (countdowns[i].opts & NO_LEADING_ZEROS) {
            while (parts.length && parts[0][0] === '0') {
                parts.shift();
            }
        }
        if (parts.length) {
            result = parts.join(', ') + ' ' + i18n.and + ' ' + result;
        }
        countdowns[i].node.text(result);
    }

    function end(i) {
        var c = countdowns[i].node.parent();
        switch (c.attr('data-end')) {
            case 'remove':
                c.remove();
                countdowns.splice(i, 1);
                return;
            case 'stop':
                output(i, 0);
                countdowns.splice(i, 1);
                return;
            case 'toggle':
                var toggle = c.attr('data-toggle');
                if (toggle && $(toggle).length) {
                    $(toggle).css('display', 'inline');
                    c.css('display', 'none');
                    countdowns.splice(i, 1);
                    return;
                }
                break;
            case 'callback':
                var callback = c.attr('data-callback');
                if (callback && $.isFunction(module[callback])) {
                    output(i, 0);
                    countdowns.splice(i, 1);
                    module[callback].call(c);
                    return;
                }
                break;
        }
        countdowns[i].countup = true;
        output(i, 0);
    }

    function update () {
        var now = Date.now();
        $.each(countdowns.slice(0), function (i, countdown) {
            var diff = Math.floor((countdown.date - now) / 1000);
            if (diff <= 0 && !countdown.countup) {
                end(i);
            } else {
                output(i, Math.abs(diff));
            }
        });
        if (countdowns.length) {
            window.setTimeout(function () {
                update();
            }, 1000);
        }
    }

    function getOptions (node) {
        /*jshint bitwise:false*/
        var text = node.parent().attr('data-options'),
            opts = 0;
        if (text) {
            if (/no-leading-zeros/.test(text)) {
                opts |= NO_LEADING_ZEROS;
            }
        }
        return opts;
    }

    $(function () {
        var countdown = $('.countdown');
        if (!countdown.length) return;
        $('.nocountdown').css('display', 'none');
        countdown
        .css('display', 'inline')
        .find('.countdowndate')
        .each(function () {
            var $this = $(this),
                date = (new Date($this.text())).valueOf();
            if (isNaN(date)) {
                $this.text('BAD DATE');
                return;
            }
            countdowns.push({
                node: $this,
                opts: getOptions($this),
                date: date
            });
        });
        if (countdowns.length) {
            update();
        }
    });

}(window.countdownTimer = window.countdownTimer || {}, mediaWiki, jQuery));
//</source>
;
/* MediaWiki:FloatingToc/code.js */
/* Augments the core Media Wiki TOC boxes to allow an optionally float-able version. */

/**************************************************************************************

* This 'MediaWiki:FloatingToc/code.js' is included by MediaWiki:Common.js, and is
loaded after MW / Oasis, 'Common' and 'Wikia', will be loaded via import as 'load.php'
which appears at the *bottom* of the page.

* All files will be checked and minified nearly the same.

* This version stabilizes aspects of the original work, for high volume site.

* Attribution: Author Pecoes http://dev.wikia.com/FloatingToc.

* The deal breaker was not being able to fix wiggle because of "inline-block" set on
#toc-wrapper, where #toc has 'block' naturally, and the em margin measurements meant
no matter which one you override to make same, it will either harm MW TOC mechanics or
wiggle in-transition for either title line-height or differences in meaning for em on
margin.hp

***************************************************************************************/

/**
* TODO:
* - resize constraint
* - auto-open option
*/

/*jshint jquery:true, browser:true, devel:true, camelcase:true, curly:false, undef:true, bitwise:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, unused:true, regexp:true, strict:true, trailing:true, maxcomplexity:10 */
/*global mediaWiki:true*/

(function (module, mw, $, window) {

  'use strict';

  if (module.loaded) return;
  module.loaded = true;

  var translations = {
    en: {
      contents: 'Contents',
      toc: 'Table of Contents',
      open: 'Open',
      close: 'Close',
      back: 'Back to Top',
      reset: 'Reset'
    },
    de: {
      contents: 'Inhalt',
      toc: 'Inhaltsverzeichnis',
      open: 'Öffnen',
      close: 'Schließen',
      back: 'Seitenanfang',
      reset: 'Zurücksetzen'
    },
    hu: {
      contents: 'Tartalom',
      toc: 'Tartalomjegyzék',
      open: 'Kinyit',
      close: 'Összecsuk',
      back: 'Vissza a tetejére',
      reset: 'Alaphelyzetbe állítás'
    },
    pl: {
      contents: 'Treść',
      toc: 'Spis treści',
      open: 'Otwórz',
      close: 'Zamknij',
      back: 'Powrót na górę',
      reset: 'Reset'
    },
    ca: {
      contents: 'Continguts',
      toc: 'Taula de continguts',
      open: 'Obrir',
      close: 'Tancar',
      back: 'Tornar a dalt',
      reset: 'Restablir configuració'
    },
    es: {
      contents: 'Contenidos',
      toc: 'Tabla de contenidos',
      open: 'Abrir',
      close: 'Cerrar',
      back: 'Volver arriba',
      reset: 'Restablecer configuración'
    },
    ru: {
      contents: 'Содержание',
      toc: 'Вернуться к содержанию',
      open: 'Развернуть',
      close: 'Закрыть',
      back: 'В начало страницы',
      reset: 'Обновить'
    }
  };

  var SPEED = 300;

  var win, page, toc, i18n, tocLinks;

  // Don't rely on load order, assumptions on display state, or validity of js reference.
  //  Use these for each set of code instead of global var. 
  function getpagetoc() { return $('#toc'); }
  function getdialogtoc() { return $('#tocDialogNav'); }
  function gettoclist(toc) { return toc.find('ol:first') || toc.find('ul:first') }

  function initToc() {

    var root = getpagetoc(),               // this is what will be wrapped
      offset = root.offset(),
      tocButton, wrapper;

    function contents() {
      var tocList = gettoclist(getpagetoc())[0];
      return tocList ? tocList.outerHTML : "";              // this exists at parse from above
    }

    function show() {
      wrapper.slideDown(SPEED);        // this 'wrapper' wont exist until the end of this init
    }

    // Build text
    var swrap = '<div id="toc-wrapper"></div>';

    var satop = '<a href="#toc" class="toc-link" title="Table of Contents"></a>';

    // Wrap root and grab references
    root.wrap(swrap);
    wrapper = $('#toc-wrapper');

    //root.append(sbutton);
    tocButton = $('<button id="open-toc-win"></button>')
      .appendTo('#toctitle')
      .button({
        icons: {
          primary: "ui-icon-newwin"
        },
        text: false
      })
      .attr('title', i18n.open)
      .click(function () {
        var tocList = gettoclist(getpagetoc());
        toc.width = tocList.width();            // get these at the last minite, and each time.
        toc.height = tocList.height();          //   cause we need fit whatever current size is
        wrapper.slideUp(SPEED);
        tocLinks.css('display', 'none');
      });

    $(satop)
        .insertBefore($('#mw-content-text').find('h2,h3').find('.editsection'));
    tocLinks = $('.toc-link');

    toc = {
      top: offset.top,
      left: offset.left,
      button: tocButton,
      show: show,
      contents: contents
    };
  }

  function initDialog() {

    var core, panel, resizing = false;

    function fixPosition() {
      if (panel.css('position') === 'fixed') return;
      var offset = panel.offset();
      panel.css({
        top: offset.top - win.scrollTop() + 'px',
        left: offset.left - win.scrollLeft(),
        position: 'fixed'
      });
    }

    function create() {
      /*jshint validthis:true*/

      panel = $(this).parent();

      var closeButton = panel.find('.ui-dialog-titlebar-close')
        .attr('title', i18n.close);

      $(document.body)
        .prepend('<a name="top" style="display: none;"></a>');

      $('<button id="toc-back"></button>')
        .insertBefore(closeButton)
        .button({
          icons: {
            primary: 'ui-icon-arrowreturnthick-1-n'
          },
          text: false
        })
        .attr('title', i18n.back)
        .click(function () {
          window.location.hash = '#top';
          win.scrollTop(0);
        });

      $('<button id="toc-maximize"></button>')
        .insertBefore(closeButton)
        .button({
          icons: {
            primary: 'ui-icon-refresh'
          },
          text: false
        })
        .attr('title', i18n.reset)
        .click(reset);
    }

    function reset() {
      var leftGutter = page.offset().left - toc.width - 30,
        posLeft = leftGutter > 0 ? Math.floor(leftGutter * 0.75) : 'center',
        height = Math.min(toc.height + 30, win.height() - 8),
        topGutter = win.height() - height,
        posTop = topGutter > 200 ? Math.floor(topGutter * 0.2) : 'center';
      core.dialog('option', 'height', height);
      core.dialog('option', 'width', toc.width + 30);
      core.dialog('option', 'position', [posLeft, posTop]);
      var dialogNav = getdialogtoc()[0];
      if (dialogNav) dialogNav.innerHTML = toc.contents();
    }

    function open() {
      panel.css('display', 'none');
      reset();
      panel.slideDown(SPEED);
      window.setTimeout(function () {
        fixPosition();
        core.find('a').blur();
      }, SPEED + 50);
    }

    function beforeClose() {
      panel.css({
        position: 'absolute',
        top: panel.offset().top + 'px',
        left: panel.offset().left + 'px'
      });
      window.location.href = '#toc';
      if (win.scrollTop() > toc.top) {
        if (toc.top + toc.height < win.height()) {
          win.scrollTop(0);
        } else {
          win.scrollTop(toc.top - 20);
        }
      }
      toc.show();
      panel.stop().slideUp(SPEED);
      tocLinks.css('display', 'inline-block');
    }

    function resizeStart() {
      resizing = true;
    }

    function resizeStop() {
      resizing = false;
      fixPosition();
    }

    function init() {

      core.dialog({
        dialogClass: 'toc-dialog',
        height: Math.min(toc.height + 30, win.height() - 8),
        width: toc.width + 30,
        position: { my: 'center', at: 'center', of: toc.root },
        create: create,
        beforeClose: beforeClose,
        open: open,
        resizeStart: resizeStart,
        resizeStop: resizeStop
      });

      panel = core.parent()
        .draggable('option', 'scroll', false)
        .draggable('option', 'containment', 'window');

      toc.button
        .click(function () {
          core.dialog('open');
        });

      var resizeTimeout = false;
      win.resize(function () {
        if (core.dialog('isOpen') && !resizing) {
          panel.css('display', 'none');
          if (resizeTimeout) window.clearTimeout(resizeTimeout);
          resizeTimeout = window.setTimeout(function () {
            reset();
            panel.slideDown(SPEED);
          }, 200);
        }
      });
    }

    // this defines the dialog
    core = $('<div id="tocDialog" class="WikiaArticle" title="' + i18n.contents +
        '" style="display:none;"><nav id="tocDialogNav" class="toc show"></nav></div>')
      .appendTo('#WikiaArticle');

    toc.button
      .one('click', init);
  }

  // Start
  $(function () {
    if (window.document.getElementById('toc')) {

      win = $(window);
      page = $('#WikiaPage');
      i18n = translations[module.lang || mw.config.get('wgContentLanguage')] || translations.en;

      mw.loader.using(['jquery.ui.dialog'], function () { // importing effects directly, effects not depend on ui core
        //mw.loader.using(['jquery.ui.dialog', 'jquery.effects.slide'], function () {
        initToc();
        initDialog();
      });
    }
  });

} ((window.dev = window.dev || {}).floatingToc = window.dev.floatingToc || {}, mediaWiki, jQuery, window));
;
/* MediaWiki:Wikiaapp.js */
function addWordmarkLink () {
  $('<a href="/Portal:Main" accesskey="z"><img alt="WoWWiki" src="https://images.wikia.nocookie.net/__cb1/wowwiki/images/8/89/Wiki-wordmark.png"></a>').before('#firstHeading');
}

if ( wgNamespaceNumber != -1 && !window.WordmarkLink  ) {
  $( addWordmarkLink );
}
var WordmarkLink = true; // prevent duplication
;
/* MediaWiki:Map/code.js */
/* Adds visual map and mapping constructs to wiki pages. */

/**************************************************************************************

* This 'MediaWiki:Map/code.js' is included by MediaWiki:Common.js, and is
loaded after MW / Oasis, 'Common' and 'Wikia', will be loaded via import as 'load.php'
which appears at the *bottom* of the page.

* All files will be checked and minified nearly the same.

***************************************************************************************/

/*jshint multistr:true, jquery:true, browser:true, devel:true, camelcase:true,
 curly:false, undef:true, unused:true, bitwise:true, eqeqeq:true, forin:true,
 immed:true, latedef:true, newcap:true, noarg:true, unused:true, regexp:true,
 strict:true, trailing:true */
/*global mediaWiki:true*/

(function (mw, $, window, document) {

  'use strict';

  // Wrapper function, allows selectively and cleanly loading Map based on page context
  function initMaps($maps) {

    //var LEGEND_BG_LINK = '//images1.wikia.nocookie.net/__cb1/wowwiki/images/5/50/Map-legend-bg.jpg';
    var LEGEND_BG_LINK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tMnrPwAHOwLfJJG8pgAAAABJRU5ErkJggg=='; //#E2B24A
    var ABOUT_NOTE_LINK = '/Template:Map/Note';
    var EDIT_NOTE_ENABLE = true;
    var MAP_RATIO = null;

    var MAP_MIN_WIDTH = 50,
      MAP_MAX_WIDTH = 1002,
      MAP_MAX_HEIGHT = 880,
      COLUMN_WIDTH = 240,
      COLUMN_PADDING = 6,
      HEADER_HEIGHT = 15,
      HEADER_PADDING = 4,
      MARGIN_INNER = 10,
      MARGIN_VERTICAL = 15,
      MARGIN_HORIZONTAL = 25,
      LEGEND_PADDING = 10,
      MIN_SCALE = 25;         // minimum percent of max scale before not open or auto close map

    var nId = 0;  // counter for for non-conflicting node IDs

    function GetValue(value, defvalue) { return value || parseInt(value) == 0  ?  value : defvalue; }
    var $settings = $('.map-settings').last();
    if ($settings.length) {
      LEGEND_BG_LINK = GetValue($settings.data("legend-bg-link"), LEGEND_BG_LINK);
      ABOUT_NOTE_LINK = GetValue($settings.data("about-note-link"), ABOUT_NOTE_LINK);
      EDIT_NOTE_ENABLE = GetValue($settings.data("edit-note-enable"), EDIT_NOTE_ENABLE) != 0;
      MAP_RATIO = GetValue($settings.data("map-ratio"), MAP_RATIO);
      MAP_MAX_WIDTH = GetValue($settings.data("map-max-width"), MAP_MAX_WIDTH);
      MAP_MAX_HEIGHT = GetValue($settings.data("map-max-height"), MAP_MAX_HEIGHT);
    }

    var callbacks = {
      close: $.Callbacks('unique'),
      enable: $.Callbacks('unique'),
      disable: $.Callbacks('unique'),
      refresh: $.Callbacks('unique'),
      resize: $.Callbacks('unique')
    };

/* *********************  Preloader  ********************* */

    var preloader = {

      imgDefers: {},
      imgDefer: function (src) {
        var imgDefer = this.imgDefers[src];
        if (!imgDefer) {
          var defer = $.Deferred(),
            img = new Image();

          img.src = src;
          img.onload = defer.resolve;
          this.imgDefers[src] = imgDefer = {
            defer: defer, img: img
          };
        }
        return imgDefer;
      },
      imgPromise: function (src) {
        var imgDefer = this.imgDefer(src);
        return imgDefer.defer.promise();
      },
      imgObj: function (src) {
        var imgDefer = this.imgDefer(src);
        var promise = imgDefer.defer.promise();
        if (promise.state() === 'pending')
          return null;

        return imgDefer.img;
      },

      marker: function (marker) {     // preload markers
        var $marker = $(marker);
        var bg = $marker.css("background-image");
        if (bg === "none") {
          bg = $marker.find("img").attr("src");
        } else {
          bg = bg.replace(/^url\(['"]?(.+?)['"]?\)/,'$1');
        }
        return (typeof bg == "string") ? this.imgPromise(bg) : $.when();
      },

      cancel: function (src) {
        delete preloader.imgDefers[src];
      },
    };

/* *********************  Sort  ********************* */

    function SortedObject(obj) {
      this.keys = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          this.keys.push(i);
        }
      }
      this.keys.sort(this.compare);
      this.obj = obj;
      this.walker = -1;
    }

    var STOP_WORD_REGEX = /^\s*(?:a|the)\s+(.*)/i;

    $.extend(SortedObject.prototype, {

      compare: function (a, b) {
        /*jshint camelcase:false*/
        var m_a = a.match(STOP_WORD_REGEX),
          m_b = b.match(STOP_WORD_REGEX);
        a = m_a ? m_a[1] : a;
        b = m_b ? m_b[1] : b;
        return a > b ? 1 : (a < b ? -1 : 0);
      },

      reset: function () {
        this.walker = -1;
      },

      next: function () {
        return ++this.walker < this.keys.length;
      },

      key: function () {
        return this.keys[this.walker];
      },

      val: function () {
        return this.obj[this.keys[this.walker]];
      }
    });

/* *********************  Tool Tips  ********************* */

    // portions of this tipsie section derrived from mediawiki tipsy 12/1/17:
    // tipsy, facebook style tooltips for jquery, version 1.0.0a*
    // (c) 2008-2010 jason frame [jason@onehackoranother.com]
    // released under the MIT license
    // - shorter non-global version, w/ some mobile support
    // - note: CB means DOM callback verison that expects a DOM 'this'

    var tipsie = {
        get: function (elem) {
            return $.data(elem, 'tipsie');
        },

        enterCB: function () {
            var that = tipsie.get(this);
            if (!that) return;
            var options = that.options;
            that.hoverState = 'in';
            if (options.delayIn == 0) {
                that.show();
            } else {
                that.fixTitle();
                setTimeout(function() { if (that.hoverState == 'in') that.show(); }, options.delayIn);
            }
        },

        leaveCB: function() {
            var that = tipsie.get(this);
            if (!that) return;
            var options = that.options;
            that.hoverState = 'out';
            if (options.delayOut == 0) {
                that.hide();
            } else {
                setTimeout(function() { if (that.hoverState == 'out') that.hide(); }, options.delayOut);
            }
        },

        set: function ($elems, options) {
            if (!this.Tipsie) this.initTipsie();

            options = $.extend({}, this.defaults, options);

            $elems.each(function() {
                if (!tipsie.get(this)) $.data(this, 'tipsie', new tipsie.Tipsie(this, options));
            });

            if (options.trigger != 'manual')
                $elems.on(options.trigger == 'hover' ? 'mouseenter focus' : 'focus', this.enterCB)
              .on(options.trigger == 'hover' ? 'mouseleave blur' : 'blur', this.leaveCB);

            return this;
        },

        initTipsie: function () {
            this.defaults = {
                tipClass: null,
                delayIn: 0,
                delayOut: 0,
                fade: true,
                fallback: '',
                gravity: 'n',
                center: true,
                html: false,
                live: false,
                offset: 0,
                opacity: 1.0,
                title: 'title',
                trigger: 'hover'
            };

            this.Tipsie = function (element, options) {
                this.$element = $(element);
                this.options = $.metadata ? $.extend({}, options, this.$element.metadata()) : options;
                this.enabled = true;
                this.keyHandler = $.proxy( this.closeOnEsc, this );
                this.$template = null,
                this.fixTitle();
            };

            this.Tipsie.prototype = {
/******** start Tipsie prototype ********/

show: function() {
    var title = null;
    if (!this.enabled || !(title = this.getTitle())) return;
    var element = this.$element[0], options = this.options;

    // measurethat - http://tinyurl.com/ycfdnf5k jsperf - http://tinyurl.com/y9fuegc7
    if (!this.$template)
      this.$template = $('<div class="tipsie" role="tooltip" aria-hidden="false">' +
        '<div class="tipsie-arrow"></div><div class="tipsie-inner"></div></div>');
    var $this = this.$template.clone();

    var gravity = options.gravity, tipClass = options.tipClass;
    if (typeof gravity == 'function') gravity = gravity.call(element);
    if (typeof tipClass == 'function') tipClass = tipClass.call(element);
    $this.addClass('tipsie-' + gravity + ' ' + tipClass);

    $this.find('.tipsie-inner')[options.html ? 'html' : 'text'](title);

    var offset = this.$element.offset(), left = offset.left, top = offset.top,
      width = element.offsetWidth, height = element.offsetHeight;

    if (this.$tooltip) this.$tooltip.remove();
    this.$tooltip = $this;
    $this.appendTo(document.body);   // force layout

    var tipWidth = $this[0].offsetWidth, tipHeight = $this[0].offsetHeight;

    switch (gravity.charAt(0)) {
        case 'n': top = top + height + options.offset; left = left + width / 2 - tipWidth / 2; break;
        case 's': top = top - tipHeight - options.offset; left = left + width / 2 - tipWidth / 2; break;
        case 'e': top = top + height / 2 - tipHeight / 2; left = left - tipWidth - options.offset; break;
        case 'w': top = top + height / 2 - actualHeight / 2; left = left + width + options.offset; break;
    }
    switch (gravity.charAt(1)) {
        case 'e': left = options.center ? (offset.left + width / 2 - tipWidth + 15) : (offset.left + width); break;
        case 'w': left = options.center ? (offset.left + width / 2 - 15) : offset.left; break;
    }

    $( document ).on( 'keydown', this.keyHandler );
    if (options.fade)
        $this.stop().css({ top: top, left: left }).animate({ opacity: options.opacity }, 100);
    else
        $this.css({ top: top, left: left, opacity: options.opacity});
},

hide: function() {
    $( document ).off( 'keydown', this.keyHandler );
    if (this.$tooltip) {
      if (this.options.fade)
          this.$tooltip.stop().fadeOut(100, function() { $(this).remove(); });
      else
          this.$tooltip.remove();
    }
},

fixTitle: function() {
    var $element = this.$element;
    if ($element.attr('title') || typeof($element.attr('original-title')) != 'string') {
        $element.attr('original-title', $element.attr('title') || '').removeAttr('title');
    }
},

getTitle: function() {
    var title, $element = this.$element, o = this.options;
    this.fixTitle();
    if (typeof o.title == 'string') {
        title = $element.attr(o.title == 'title' ? 'original-title' : o.title);
    } else if (typeof o.title == 'function') {
        title = o.title.call($element[0]);
    }
    title = ('' + title).replace(/(^\s*|\s*$)/, "");
    return title || o.fallback;
},

validate: function() {
    if (!this.$element[0].parentNode) {
        this.hide();
        this.$element = null;
        this.options = null;
    }
},

closeOnEsc: function ( e ) {
    if ( e.keyCode === 27 ) {
        this.hide();
    }
},

enable: function() { this.enabled = true; },
disable: function() { this.enabled = false; },

/******** end Tipsie prototype ********/
            };
        }
    }

    /* map ToolTip interface */
    var tips = {
        // adds a text ToolTip
        addTextTip: function ($elems, trigger, autoShow) {
            var that = tipsie.set($elems, {
                tipClass: 'map-tip-text',
                delayIn: 20,  //50
                opacity: 1,
                trigger: trigger,
                fade: true,
                gravity: tips.gravityCB
              });

            if (autoShow && $elems.length) {
                this.show($elems);
                this.closeElems.push($elems);
                callbacks.close.add(tips.close);
            }
        },

        close: function () {
          var a = tips.closeElems;
          tips.closeElems = [];
          for (var i= 0, len = a.length; i < len; i++)
              tips.hide(a[i]);
        },
        closeElems: [],

        show: function ($elems) {
            $elems.each(function () { var that = tipsie.get(this); if (that) that.show(); })
        },

        hide: function ($elems) {
            $elems.each(function () { var that = tipsie.get(this); if (that) that.hide(); })
        },

        gravityCB: function () {
            var $elem = $(this),
                w = $elem.parent().width(),
                offset = w / 100 * $elem.data('x');
            return offset > 200 ? (offset < w - 200 ? 's' : 'se') : 'sw';
        }
    };

/* *********************  Lightbox  ********************* */

    var blackOut = {

      $blackOut: null,

      create: function () {
        var defer = $.Deferred();

        this.$blackOut = $('<div></div>')
          .addClass('map-blackout')
          .css({
            width: $(document).width() + 'px',
            height: $(document).height() + 'px',
            display: 'none'
          })
          .appendTo(document.body)
          .fadeIn(200, function () {
            $('html').css('overflow', 'hidden');
            blackOut.refresh();

            blackOut.$blackOut.click(callbacks.close.fire);

            callbacks.refresh.add(blackOut.refresh);
            callbacks.close.add(blackOut.close);

            defer.resolve();
          });

        return defer.promise();
      },

      refresh: function () {
        var $blackOut = blackOut.$blackOut;
        if (!$blackOut || !$blackOut.length) return;

        var $document = $(document);
        $blackOut
          .css({
            width: $document.width() + 'px',
            height: $document.height() + 'px'
          });
      },

      close: function () {
        var $blackOut = blackOut.$blackOut;
        if (!$blackOut || !$blackOut.length) return;

        $('html').css('overflow', 'auto');

        callbacks.refresh.remove(blackOut.refresh);
        callbacks.close.remove(blackOut.close);

        $blackOut
          .off('click')
          .stop().fadeOut(100, function () {
            $blackOut.remove();
            $blackOut = null;
          });
      }
    };

/* *********************  Map Base  ********************* */

    function Map() { }

    $.extend(Map.prototype, {
      $map: null,         // map dom object
      src: null,          // smallSrc href string
      extents: null,      // map coordinates meta

      mapLightbox: null,  // lightbox class object

      initMap: function ($map, editLink, $markers, autoShow) {
        var projectionType = $map.data('projection'),
          dataFile = $map.data('file'),
          largeSrc = $map.data('large'),
          smallSrc = $map.data('small');

        var projectionType = projectionType ? process : "flat";
        var file = 'File:' + dataFile;
        var href = mw.config.get('wgArticlePath').replace(/\$1/, file);

        // constrain wire size of large map, if larger than any max
        var maxW = MAP_MAX_WIDTH, maxH = MAP_MAX_HEIGHT;
        largeSrc = largeSrc.replace(/\/latest/, '/latest/scale-to-'
          + (maxW < maxH ? ('width-down/' + maxW) : ('height-down/' + maxH)));

        var left = Number($map.data('left')), top = Number($map.data('top')),
          right = Number($map.data('right')), bottom = Number($map.data('bottom')),
          centerx = Number($map.data('centerx')), centery = Number($map.data('centery'));
        var extents = {   // coordinate extents for this map image
          left: left ? left : 0.0,
          top: top ? top : 0.0,
          right: right ? right : 100.0,
          bottom: bottom ? bottom : 100.0,
          centerx: centerx ? centerx : null,
          centery: centery ? centery : null
        };

        this.$map = $map;
        this.src = smallSrc
        this.extents = extents;

        this.mapLightbox = new MapLightbox({
          projectionType: projectionType,
          src: largeSrc,        // full href to largeSrc
          zone: $map.data('zone'),
          extents: extents,
          editLink: editLink, // edit notes link
          file: file,           // wiki file name
          href: href,           // full href to wiki file
          $markers: $markers,
          autoShow: autoShow
        });

        this.callbacks = {
          enable: $.proxy(this.enable, this),
          disable: $.proxy(this.disable, this)
        };

        callbacks.enable.add(this.callbacks.enable);
        callbacks.disable.add(this.callbacks.disable);
      },

      openMapInLightboxCB: function () {
        var $this = $(this);
        var that = $this.data('map');

        // start the preload now
        var largeSrc = that.mapLightbox.largeSrc;

        var legendPromise = preloader.imgPromise(LEGEND_BG_LINK),
          largeSrcPromise = preloader.imgPromise(largeSrc);

        blackOut.create()
          .done(function () {
            $.when(
              legendPromise,
              largeSrcPromise,
              that.mapLightbox.create()
            )
            .done(function () {
              that.mapLightbox.initLightbox();
            });
          });
      },

      enable: function () {
        this.$map
          .removeClass('map-disabled')
          .off('click')
          .attr('title', 'click to enlarge')
          .click(this.openMapInLightboxCB);

        callbacks.enable.remove(this.callbacks.enable);
        callbacks.disable.add(this.callbacks.disable);
      },

      disable: function () {
        this.$map
          .addClass('map-disabled')
          .attr('title', '(window too small to display map)')
          .off('click');

        callbacks.disable.remove(this.callbacks.disable);
        callbacks.enable.add(this.callbacks.enable);
      },

      getMapPopupWH: function () {  // temp popup html, for small map popup
        var mapRatio = layout.getMapRatio(this.src);
        var w = this.$map.data('width'),
          h = mapRatio ? Math.round(w / mapRatio) : null;

        var w2 = !h ? Math.round(w / 2) : null;

        return { w:w, h:h, w2:w2 };
      },

      createMapPopupHtml: function () {   // real popup html, for small map popup
        var dim = this.getMapPopupWH();
        var w = dim.w, h = dim.h;

        var content = '<div style="position: relative;">' +
          '<img src="' + this.src + '" width="' + w +
          (h ? ('px" height="' + h) : '') + 'px">';

        var $markers = this.$map.find('.map-marker');
        $markers.each(function () {       // add markers verbatim from embedded markers
          content += $(this).prop('outerHTML');
        });

        return content += '</div>';
      },

      createMapPopupDefer: function () {  // temp popup html, for small map popup
        var dim = this.getMapPopupWH();
        var w = dim.w, h = dim.h;
        if (!dim.h) { w = dim.w2; h = w; }

        return '<div style="position: relative; width: ' +
          w + 'px; height: ' + h + 'px;' + '" class="map map-zone map-preload"></div>'
      },

      createMapPopupCB: function () {   // only used small map popup
        var $this = $(this);
        var that = $this.data('map');

        var promise = preloader.imgPromise(that.src);
        var pending = promise.state() === 'pending';

        if (pending) {
          var $markers = $this.find('.map-marker');
          $markers.each(function () {   // make sure markers preload also
            if (pending) promise = $.when(preloader.marker(this), promise);
          });

          promise.done(function () {    // reload and re-layout the popup
            that.mapPopupTooltipShow();
          });
          return that.createMapPopupDefer();
        }
        return that.createMapPopupHtml();
      },

      gravityCB: function () {
        var $this = $(this);
        var that = $this.data('map');

        // need the restricted height via the restricted width and current ratio
        var dim = that.getMapPopupWH();
        var height = dim.h ? dim.h : dim.w2;
        var top = $this.offset().top;

        return (top - height - 20) < $(window).scrollTop() ? 'nw' : 'sw';
      },

      mapPopupTooltipShowCB: function () {
        var $this = $(this);
        tips.show($this);
      },

      mapPopupTooltipHideCB: function () {
        var $this = $(this);
        tips.hide($this);
     },

      mapPopupTooltipShow: function () {
        tips.show(this.$map);
      },

      mapPopupTooltipHide: function () {
        tips.hide(this.$map);
      },

      createMapPopupTooltip: function () { // only used small map popup
          tipsie.set(this.$map, {
            tipClass: 'map-tip-popup',
            delayIn: 50,
            opacity: '1.0',
            html: true,
            fade: true,
            trigger: 'manual',
            gravity: this.gravityCB,
            title: this.createMapPopupCB
          });
          this.$map
            .on('mouseover mouseenter', this.mapPopupTooltipShowCB)
            .on('mouseleave click', this.mapPopupTooltipHideCB);
      },

    });

/* *********************  Map Coords with Hover Popup ********************* */

    function Coords($map) {
      var that = this;

      this.x = $map.data('x');
      this.y = $map.data('y');
      this.iconTitle = '[' + this.x + ',' + this.y + ']';

      var $a = $map.find('a');
      if ($a.length) {
        $map.find('sup').unwrap();
      }

      var $markers = $map.find('.map-marker');

      this.initMap($map, false, $markers, true);

      that.createMapPopupTooltip();
    }

    Coords.prototype = new Map();

/* *********************  Map Link with Hover Popup ********************* */

    function Link($map) {
      var that = this;

      var $a = $map.find('a');
      if ($a.length) {
        $map.text($a.text());
      }

      this.initMap($map, false, false, false);

      that.createMapPopupTooltip();
    }

    Link.prototype = new Map();

/* *********************  Embeded Map ********************* */

    function Embedded($map) { // Template:Map

      var smallSrc = $map.data('small');

      var $markers = $map.find('.map-marker');

      this.initMap($map, this.findEditLink($map), $markers.length ? $markers : false, false);

      $map.find('> a > img')
        .unwrap();

      if ($markers.length) {
        $map
          .addClass('map-preload');

        var defer = $.when(
          preloader.imgPromise(smallSrc)
        )

        $markers.each(function () {
          defer = $.when(preloader.marker(this), defer); // first display, make sure markers preload also
        });

        defer.done(function () {
          $map
            .removeClass('map-preload');
          tips.addTextTip($markers, 'hover');
        });
      } else {
        $map
          .removeClass('map-preload');
      }
    }

    Embedded.prototype = new Map();

    $.extend(Embedded.prototype, {

      findEditLink: function ($map) {
        var $walker = $map,
          $prev, $h = false,
          $top = $('#mw-content-text');

        while (!$walker.is($top)) {
          if (/^h\d$/i.test($walker[0].nodeName)) {
            $h = $walker;
            break;
          }
          $prev = $walker.prev();
          $walker = $prev.length ? $prev : $walker.parent();
        }

        if (!mw.config.get('wgUserName')) {
          return '/Special:SignUp?returnto=' +
            mw.util.wikiUrlencode(
              mw.config.get('wgPageName') +
              ($h ? '#' + $h
                .find('.mw-headline')
                .attr('id') : '')
            ) +
            '&type=login';
        }

        return $h ? $h
          .find('.editsection > a')
          .attr('href') : '?action=edit';
      }
    });

/* *********************  Legend  ********************* */

    function Legend($markers) {
      this.parsed = {};
      this.forceIndex = [];

      $markers.each(
        $.proxy(this.readNote, this)
      );
      delete this.forceIndex;
    }

    $.extend(Legend.prototype, {

      isEmpty: function () {
        if (this.empty === undefined) {
          this.empty = true;
          for (var i in this.parsed) {
            if (this.parsed.hasOwnProperty(i)) {
              this.empty = false;
              break;
            }
          }
        }
        return this.empty;
      },

      isCoord: function (coord) {
        return (/^[-+]?\d{1,16}(?:\.\d{1,6})?$/).test(coord);
      },

      parseNote: function (node) {
        var $note = $(node),
          x, y, title, icon, id, legend;

        if (!$note.attr('title')) return false;

        x = $note.data('x');
        if (!this.isCoord(x)) return false;
        y = $note.data('y');
        if (!this.isCoord(y)) return false;

        title = $note.data('title') || '';

        icon = $note.data('icon');
        if (!icon || !icon.length) return false;

        legend = $note.data('legend');
        if (!legend || !legend.length) return false;

        id = 'mn' + nId++;
        $note.attr('data-note', id);

        return { id: id, legend: legend };
      },

      readNote: function (key, node) {
        var i, g, legend, hash, colon,
          note = this.parseNote(node);
        if (!note) return;

        legend = note.legend.split(/\s*;;\s*/);
        for (i = 0; i < legend.length; i++) {
          hash = legend[i].split(/\s*##\s*/);
          if (hash.length === 2) {
            this.parsed[hash[0]] = this.parsed[hash[0]] || {
              indexed: {}, named: {}
            };
            g = this.parsed[hash[0]];
            g.indexed[hash[1]] = g.indexed[hash[1]] || [];
            g.indexed[hash[1]].push(note.id);
          } else {
            colon = legend[i].split(/\s*::\s*/);
            if (colon.length === 2) {
              this.parsed[colon[0]] = this.parsed[colon[0]] || {
                indexed: {}, named: {}
              };
              g = this.parsed[colon[0]];
              if (this.forceIndex.indexOf(colon[1]) !== -1) {
                g.indexed[colon[1]].push(note.id);
              } else if (g.named[colon[1]]) {
                this.forceIndex.push(colon[1]);
                g.indexed[colon[1]] = g.indexed[colon[1]] || [];
                g.indexed[colon[1]].push(g.named[colon[1]]);
                g.indexed[colon[1]].push(note.id);
                delete g.named[colon[1]];
              } else {
                g.named[colon[1]] = note.id;
              }
            }
          }
        }
      },

      renderIndexed: function (key, notes) {
        var i, node, span;

        span = document.createElement('span');
        span.setAttribute('class', 'map-subGroup-name');
        span.appendChild(
          document.createTextNode(key)
        );

        node = document.createElement('div');
        node.setAttribute('class', 'map-subGroup');
        node.appendChild(span);

        for (i = 0; i < notes.length; i++) {
          span = document.createElement('span');
          span.setAttribute('class', 'map-subGroup-note pseudo-link');
          span.setAttribute('data-note', notes[i]);
          span.appendChild(
            document.createTextNode(i + 1)
          );
          node.appendChild(span);
        }

        return node;
      },

      renderNamed: function (key, value) {
        var node = document.createElement('div');
        node.setAttribute('data-note', value);
        node.setAttribute('class', 'map-group-note pseudo-link');
        node.appendChild(
          document.createTextNode(key)
        );
        return node;
      },

      renderGroup: function (key, list) {
        var sorted, nodes = [], div;

        div = document.createElement('div');
        div.setAttribute('class', 'map-group-name')
        div.appendChild(
          document.createTextNode(key)
        );
        nodes.push(div);

        div = document.createElement('div');
        div.setAttribute('class', 'map-group')
        nodes.push(div);

        sorted = new SortedObject(list.indexed);
        while (sorted.next()) {
          div.appendChild(
            this.renderIndexed(sorted.key(), sorted.val())
          );
        }

        sorted = new SortedObject(list.named);
        while (sorted.next()) {
          div.appendChild(
            this.renderNamed(sorted.key(), sorted.val())
          );
        }

        return nodes;
      },

      render: function () {
        var sorted = new SortedObject(this.parsed),
          nodes = [];

        while (sorted.next()) {
          nodes = nodes.concat(this.renderGroup(sorted.key(), sorted.val()));
        }

        this.$wrapper = $(document.createElement('div'))
          .addClass('map-legend-wrapper')
          .append(nodes);

        return $(document.createElement('div'))
          .addClass('map-legend')
          .css('background-image', "url('" + LEGEND_BG_LINK +"')")
          .append(this.$wrapper);
      },

      addScrollbar: function () {
        this.$wrapper.removeAttr('style');
        if (this.$wrapper.height() > layout.legend.h) {
          this.$wrapper
          .css({
            width: '255px',
            paddingRight: '15px',
            maxHeight: (layout.legend.h - 2 * LEGEND_PADDING) + 'px'
          });
        }
      }
    });

/* *********************  Map in Lightbox  ********************* */

    function MapLightbox(data) {
      this.projectionType = data.projectionType;
      this.largeSrc = data.src;
      this.zoneName = data.zone;
      this.extents = data.extents;
      this.editLink = data.editLink;
      this.file = data.file;
      this.href = data.href;
      this.autoShow = data.autoShow;

      var $markers = data.$markers

      if ($markers && $markers.length) {
        this.$markersOriginal = $markers;
        this.legend = new Legend($markers);
      }

      this.empty = !this.legend || this.legend.isEmpty();
    }

    $.extend(MapLightbox.prototype, {

      create: function () {
        var defer = $.Deferred();

        layout.setImage(this.largeSrc)

        this.createHeader();
        this.createLargeMap();
        if (!this.empty) {
          this.createLegend();
        }

        layout.setLegend(this.empty);

        return defer.resolve().promise();
      },

      initLightbox: function () {
        var that = this;

        layout.doLayout();  // need re-layout after image pre-load completes
        this.resize();          //  which suplies data to these resizes and inits

        this.initHeader();
        this.initLargeMap();
        if (!this.empty) {
          this.initLegend();
        }

        this.callbacks = {
          close: function () { that.close(); },
          resize: function () { that.resize(); },
          refresh: function () { that.refresh(); }
        };

        callbacks.refresh.add(this.callbacks.refresh);
        callbacks.resize.add(this.callbacks.resize);
        callbacks.close.add(this.callbacks.close);
      },

      createHeader: function () {
        this.$scale = $('<span class="map-scale" style="display:none;"></span>');
        this.$coordinates = $('<span class="map-coordinates" style="display:none;"></span>');
        this.$close = $('<a href="#" class="map-close pseudo-link" title="Close">Close</a>');

        this.$info = $('<span class="map-info"></span>')
          .append( $('<span class="map-title"></span>')
            .text(this.zoneName))
          .append(this.$scale)
          .append(this.$coordinates);

        this.$buttons = $('<span class="map-buttons"></span>');

        this.$buttons
          .append($('<a class="map-href"></a>')
              .prop('href', mw.html.escape(this.href))
              .prop('title', mw.html.escape(this.file))
              .text(this.file));

        if (EDIT_NOTE_ENABLE && this.editLink) {
          this.$buttons
            .append($('<a class="map-href" title="Edit Map Notes">Edit Map Notes</a>')
              .prop('href', this.editLink))
            .append($('<a class="map-href" title="About Map Notes">About Map Notes</a>')
              .prop('href', ABOUT_NOTE_LINK));
        }

        this.$buttons
          .append(this.$close);

        this.$header = $('<div class="map-header" style="display:none;"></div>')
          .css('background-image', "url('" + LEGEND_BG_LINK +"')")
          .append(this.$info)
          .append(this.$buttons)
          .appendTo(document.body);
      },

      closeButtonClick: function () {
        callbacks.close.fire();
        return false;
      },

      initHeader: function () {
        this.$close
          .click( this.closeButtonClick );
      },

      showNotice: function () {
        if (this.$notice) return;

        this.$notice = $('<div class="map-title">press SPACE to fade map</div>')
          .css({
            position: 'fixed',
            left: layout.map.x + layout.map.w / 20 + 'px',
            top: layout.map.y + layout.map.h / 10 * 9 + 'px'
          });

        this.$largeMap
          .append(this.$notice);

        this.clearNotice = $.proxy(this.removeNotice, this);
        callbacks.close.add(this.clearNotice);
        callbacks.refresh.add(this.clearNotice);
        callbacks.resize.add(this.clearNotice);

        window.setTimeout($.proxy(this.fadeNotice, this), 3000);
      },

      fadeNotice: function () {
        if (!this.$notice) return;
        this.$notice
          .fadeOut(200,
            $.proxy(this.removeNotice, this)
          );
      },

      removeNotice: function () {
        if (!this.$notice) return;
        this.$notice.remove();
        callbacks.close.remove(this.clearNotice);
        callbacks.refresh.remove(this.clearNotice);
        callbacks.resize.remove(this.clearNotice);
        delete this.$notice;
        delete this.clearNotice;
      },

      createLargeMap: function () {
        if (this.$markersOriginal) {
          this.$markers = this.$markersOriginal
            .clone()
            .each(function () {
              var $this = $(this);
              $this
                .attr({
                  id: $this.attr('data-note'),
                  title: $this.attr('original-title')
                })
                .removeAttr('orginal-title');
            });
        }

        this.$image = $('<img>', {
          src: this.largeSrc
        });

        this.$largeMap = $('<div class="map-large" style="display:none;"></div>')
          .append(this.$image);

        if (this.$markers) {
          this.$largeMap
            .append(this.$markers);
        }

        this.$largeMap
          .appendTo(document.body);
      },

      initLargeMap: function () {
        var that = this;

        if (this.$markers) {
          tips.addTextTip(this.$markers, 'hover', this.autoShow);
          //tips.addTextTip(this.$markers, 'manual', this.autoShow);
        }

        this.$largeMap
          .on('mouseenter mousemove', $.proxy(this.updateCoords, this))
          .mouseleave($.proxy(this.hideCoords, this));

        if (this.$markers) {
          this.showNotice();

          $(document.body)
            .on('keydown.mapLightbox', function (e) {
              if (e.which === 32) that.fadeMap();
            })
            .on('keyup.mapLightbox', function (e) {
              if (e.which === 32) that.showMap();
            })
            .on('keypress.mapLightbox', function (e) {
              e.stopImmediatePropagation();
              e.preventDefault();
            });
        }
      },

      createLegend: function () {
        this.$legend = this.legend.render()
          .css('display', 'none')
          .appendTo(document.body);
      },

      initLegend: function () {
        var that = this;
        this.$legend
          .find('.pseudo-link')
          .mouseenter(function () {
            tips.show($( document.getElementById($(this).data('note')) ));
          })
          .mouseleave(function () {
            tips.hide($( document.getElementById($(this).data('note')) ));
          });

        this.$legend
          .find('.map-group-name')
          .data('opened', true)
          .css('cursor', 'pointer')
          .click(function () {
            var $this = $(this),
              move = $this.data('opened') ? 'slideUp' : 'slideDown',
              $group = $this.next('.map-group');

            $this.data('opened', !$this.data('opened'));

            $group[move](100, function () {
              that.legend.addScrollbar();
            });
          });
      },

      hideCoords: function () {
        this.$coordinates.css('display', 'none');
        this.showMap();
        this.showHideButtons();
      },

      fadeMap: function () {
        if (!this.isInCorner) {
          this.$image.stop().animate({ opacity: 0.25 }, 200);
          this.isInCorner = true;
        }
      },

      showMap: function () {
        if (this.isInCorner) {
          this.$image.stop().animate({ opacity: 1 }, 200);
          this.isInCorner = false;
        }
      },

      updateCoords: function (e) {                // display current mouse hover map coordinates
        var projection = projectionLinear;
        //var projection = projectionEPSG3857;

        var displayString = projection.clientPointToCoordsDisplay(e, layout.map, this.extents)

        this.$coordinates
          .css('display', 'inline')
          .text(displayString);

        this.showHideButtons();
      },

/*
      formatCoord: function (coord, min, max) {   // format and clip coordinates to extents
        var c = Math.round(coord * 10.0) / 10.0;
        if (min > max) { var m = min; min = max; max = m; } // dont assume the coord systems handedness
        c = Math.min(max - 0.1, Math.max(min + 0.1, c));
        return Math.round(c) === c ? c + '.0' : c;
      },

      updateCoords: function (e) {                // display current mouse hover map coordinates
        var map = layout.map, extents = this.extents;
        var left = extents.left, top = extents.top,
          right = extents.right, bottom = extents.bottom,
          centerx = extents.centerx, centery = extents.centery;

        var x100 = (e.clientX - map.x) / map.w * 100.0,
          y100 = (e.clientY - map.y) / map.h * 100.0;

        var x, y;
        if (centerx)
          if (x100 < 50.0)
            x = ((x100 * 2) / 100.0) * (centerx - left) + left;
          else
            x = (((x100 - 50.0) * 2) / 100.0) * (right - centerx) + centerx;
        else
          x = (x100 / 100.0) * (right - left) + left;

        if (centery)
          if (y100 < 50.0)
            y = ((y100 * 2) / 100.0) * (centery - top) + top;
          else
            y = (((y100 - 50.0) * 2) / 100.0) * (bottom - centery) + centery;
        else
          y = (y100 / 100.0) * (bottom - top) + top;

        this.$coordinates
          .css('display', 'inline')
          .text(
            this.formatCoord(x, left,  right) + ',' +
            this.formatCoord(y, top, bottom) + (
              left == 0 && top == 0 && right == 100 && bottom == 100 ? '' :
              '   (' + this.formatCoord(x100, 0, 100) + ',' +
              this.formatCoord(y100, 0, 100) + ')'
            )
          );

        this.showHideButtons();
      },
*/
      refresh: function () {
        this.$header
          .add(this.$largeMap)
          .add(this.$legend)
          .css('display', 'none');
      },

      resize: function () {
        var map = layout.map;

        this.resizePart(this.$header, layout.header);
        this.resizePart(this.$largeMap, map);
        if (!this.empty) {
          this.resizePart(this.$legend, layout.legend);
        }

        this.$image.attr({
          width: map.w + 'px',
          height: map.h + 'px'
        });

        if (map.scale !== 100) {
          this.$scale
            .css('display', 'inline')
            .text('scale: ' + map.scale + '%');
        } else {
          this.$scale
            .css('display', 'none');
        }

        if (this.$legend) {
          this.legend.addScrollbar();
        }

        this.showHideButtons();
      },

      showHideButtons: function () {
        var infoWidth = this.$info.width(),
          buttonWidth = this.$buttons.removeClass('map-minimal').width();

        if (infoWidth + buttonWidth + 20 >= layout.map.w) {
          this.$buttons.addClass('map-minimal');
        }
      },

      resizePart: function (part, values) {
        part
          .css({
            width: values.w + 'px', height: values.h + 'px',
            left: values.x + 'px', top: values.y + 'px',
            display: 'block'
          });
      },

      close: function () {
        this.$header.remove();
        this.$largeMap.remove();
        if (!this.empty) {
          this.$legend.remove();
        }

        delete this.$info;
        delete this.$buttons;
        delete this.$scale;
        delete this.$coordinates;
        delete this.$close;
        delete this.$header;
        delete this.$image;
        delete this.$markers;
        delete this.$largeMap;
        if (!this.empty) {
          delete this.$legend;
          delete this.legend.$wrapper;
        }

        callbacks.refresh.remove(this.callbacks.refresh);
        callbacks.resize.remove(this.callbacks.resize);
        callbacks.close.remove(this.callbacks.close);
        delete this.callbacks;
      }
    }); // end of Map in Lightbox, MapLightbox


/* *********************  MapProjection  ********************* */

    var projectionLinear = {

      formatCoord: function (coord, min, max) {   // format and clip coordinates to extents
        var c = Math.round(coord * 10.0) / 10.0;
        if (min > max) { var m = min; min = max; max = m; } // dont assume the coord systems handedness
        c = Math.min(max - 0.1, Math.max(min + 0.1, c));
        return Math.round(c) === c ? c + '.0' : c;
      },

      // display current mouse hover map coordinates
      clientPointToCoordsDisplay: function (e, map, extents) {
        // find client point and percentage
        var left = extents.left, top = extents.top,
          right = extents.right, bottom = extents.bottom,
          centerx = extents.centerx, centery = extents.centery;

        var x100 = (e.clientX - map.x) / map.w * 100.0,
          y100 = (e.clientY - map.y) / map.h * 100.0;

        var x, y;
        if (centerx)
          if (x100 < 50.0)
            x = ((x100 * 2) / 100.0) * (centerx - left) + left;
          else
            x = (((x100 - 50.0) * 2) / 100.0) * (right - centerx) + centerx;
        else
          x = (x100 / 100.0) * (right - left) + left;

        if (centery)
          if (y100 < 50.0)
            y = ((y100 * 2) / 100.0) * (centery - top) + top;
          else
            y = (((y100 - 50.0) * 2) / 100.0) * (bottom - centery) + centery;
        else
          y = (y100 / 100.0) * (bottom - top) + top;

        // update display
        return this.formatCoord(x, left,  right) + ',' +
            this.formatCoord(y, top, bottom) + (
              left == 0 && top == 0 && right == 100 && bottom == 100 ? '' :
              '   (' + this.formatCoord(x100, 0, 100) + ',' +
              this.formatCoord(y100, 0, 100) + ')');
      }
    };

    var projectionEPSG3857 = {

      R: 6378137,
      MAX_LATITUDE: 85.0511287798,

      _a: null, _b: null, _c: null, _d: null,
      setTransform: function (a,b,c,d) {
        this._a = a; this._b = b; this._c = c; this._d = d;
      },

      formatCoord: function (coord, min, max) {   // format and clip coordinates to extents
        var c = Math.round(coord * 10.0) / 10.0;
        if (min > max) { var m = min; min = max; max = m; } // dont assume the coord systems handedness
        c = Math.min(max - 0.1, Math.max(min + 0.1, c));
        return Math.round(c) === c ? c + '.0' : c;
      },

      // display current mouse hover map coordintes
      clientPointToCoordsDisplay: function (e, map, extents) {
        // set environment for EPSG:3857
        var scale = 0.5 / (Math.PI * this.R);
        this.setTransform(scale, 0.5, -scale, 0.5)

        // find client point and percentage
        var left = extents.left, top = extents.top,
          right = extents.right, bottom = extents.bottom,
          centerx = extents.centerx, centery = extents.centery;

        var xP = e.clientX - map.x,
          yP = e.clientY - map.y;
        var x100 = xP / map.w * 100.0,
          y100 = yP / map.h * 100.0;
        var xPE = this.R * (x100 / 100.0),
          yPE = this.R * (y100 / 100.0);

        // transform the point to EPSG:3857
        scale = null;
        var scale = scale || 1;
        //var xPS = (xPE / scale - this._b) / this._a,
        //  yPS = (yPE / scale - this._d) / this._c;
        var xPS = xPE,
          yPS = yPE;

        var d = 180 / Math.PI;
        var y2 = (2 * Math.atan(Math.exp(yPS / this.R)) - (Math.PI / 2)) * d,
          x2 = xPS * d / this.R;
        if (isNaN(y2) || isNaN(x2))
          { y2 = 0; x2 = 0; }

        // transform as linear sections
        var x, y;
        if (centerx)
          if (x100 < 50.0)
            x = ((x100 * 2) / 100.0) * (centerx - left) + left;
          else
            x = (((x100 - 50.0) * 2) / 100.0) * (right - centerx) + centerx;
        else
          x = (x100 / 100.0) * (right - left) + left;

        if (centery)
          if (y100 < 50.0)
            y = ((y100 * 2) / 100.0) * (centery - top) + top;
          else
            y = (((y100 - 50.0) * 2) / 100.0) * (bottom - centery) + centery;
        else
          y = (y100 / 100.0) * (bottom - top) + top;

        // update display
        return this.formatCoord(x, left,  right) + ',' +
            this.formatCoord(y, top, bottom) +
            (left == 0 && top == 0 && right == 100 && bottom == 100 ? '' :
              '   (' + this.formatCoord(x100, 0, 100) + ',' +
              this.formatCoord(y100, 0, 100) + ')') +
            ('   (' + this.formatCoord(x2, -999999999999, 999999999999) + ',' +
              this.formatCoord(y2, -999999999999, 999999999999) + ')');
            //('   (' + x2 + ',' +
            //  y2 + ')');
      }
    };
          /*
      R: 6378137,
      MAX_LATITUDE: 85.0511287798,

      export function Transformation(a, b, c, d) {
        if (Util.isArray(a)) {
          // use array properties
          this._a = a[0];
          this._b = a[1];
          this._c = a[2];
          this._d = a[3];
          return;
        }
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
      }

      export function toTransformation(a, b, c, d) {
        return new Transformation(a, b, c, d);
      }

      transformation: (function () {
        var scale = 0.5 / (Math.PI * SphericalMercator.R);
        return toTransformation(scale, 0.5, -scale, 0.5);
      }())

      scale: function (zoom) {
        return 256 * Math.pow(2, zoom);
      },
      zoom: function (scale) {
        return Math.log(scale / 256) / Math.LN2;
      },

      pointToLatLng: function (point, zoom) {
        var scale = this.scale(zoom),
            untransformedPoint = this.transformation.untransform(point, scale);

        return this.projection.unproject(untransformedPoint);
      },

      untransform: function (point, scale) {
        scale = scale || 1;
        return new Point(
                (point.x / scale - this._b) / this._a,
                (point.y / scale - this._d) / this._c);
      }

      unproject: function (point) {
        var d = 180 / Math.PI;
        return new LatLng(
          (2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
            point.x * d / this.R);
      },

      export function LatLng(lat, lng, alt) {
        if (isNaN(lat) || isNaN(lng)) {
          throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
        }

        // @property lat: Number
        // Latitude in degrees
        this.lat = +lat;

        // @property lng: Number
        // Longitude in degrees
        this.lng = +lng;

        // @property alt: Number
        // Altitude in meters (optional)
        if (alt !== undefined) {
          this.alt = +alt;
        }
      }
      */

      /*
      transformation: (function () {
        var scale = 0.5 / (Math.PI * SphericalMercator.R);
        return toTransformation(scale, 0.5, -scale, 0.5);
      }())

      scale: function (zoom) {
        return 256 * Math.pow(2, zoom);
      },

      zoom: function (scale) {
        return Math.log(scale / 256) / Math.LN2;
      },

      pointToLatLng: function (point, zoom) {
        var scale = null; //1; //256 * Math.pow(2, zoom ? zoom : 1);

        scale = scale || 1;
        var x = (point.x / scale - this._b) / this._a;
        var y = (point.y / scale - this._d) / this._c;

        return this.projection.unproject(untransformedPoint);
      },

      untransform: function (point, scale) {
        scale = scale || 1;
        return new Point(
                (point.x / scale - this._b) / this._a,
                (point.y / scale - this._d) / this._c);
      }

      unproject: function (point) {
        var d = 180 / Math.PI;
        return new LatLng(
          (2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
            point.x * d / this.R);
      },
      */
/*
      formatCoord: function (coord, min, max) {   // format and clip coordinates to extents
        var c = Math.round(coord * 10.0) / 10.0;
        if (min > max) { var m = min; min = max; max = m; } // dont assume the coord systems handedness
        c = Math.min(max - 0.1, Math.max(min + 0.1, c));
        return Math.round(c) === c ? c + '.0' : c;
      },

      clientPointToCoordsDisplay: function (e, map, extents) {  // display current mouse hover map coordinates
        var left = extents.left, top = extents.top,
          right = extents.right, bottom = extents.bottom,
          centerx = extents.centerx, centery = extents.centery;

        var x100 = (e.clientX - map.x) / map.w * 100.0,
          y100 = (e.clientY - map.y) / map.h * 100.0;

        var d = 180 / Math.PI;
        var y2 = (2 * Math.atan(Math.exp(y100 / this.R)) - (Math.PI / 2)) * d;
        var x2 = x100 * d / this.R;

        var x, y;
        if (centerx)
          if (x100 < 50.0)
            x = ((x100 * 2) / 100.0) * (centerx - left) + left;
          else
            x = (((x100 - 50.0) * 2) / 100.0) * (right - centerx) + centerx;
        else
          x = (x100 / 100.0) * (right - left) + left;

        if (centery)
          if (y100 < 50.0)
            y = ((y100 * 2) / 100.0) * (centery - top) + top;
          else
            y = (((y100 - 50.0) * 2) / 100.0) * (bottom - centery) + centery;
        else
          y = (y100 / 100.0) * (bottom - top) + top;

        return this.formatCoord(x, left,  right) + ',' +
            this.formatCoord(y, top, bottom) +
            (left == 0 && top == 0 && right == 100 && bottom == 100 ? '' :
              '   (' + this.formatCoord(x100, 0, 100) + ',' +
              this.formatCoord(y100, 0, 100) + ')') +
            ('   (' + this.formatCoord(x2, left,  right) + ',' +
              this.formatCoord(y2, top, bottom) + ')');
      },
*/

/* *********************  Map in Lightbox Layout  ********************* */

    var layout = ({

      header: {
        h: HEADER_HEIGHT + HEADER_PADDING * 2
      },

      margin: {
        vertical: MARGIN_VERTICAL * 2,
        horizontal: MARGIN_HORIZONTAL * 2
      },

      between: {
        headerMap: MARGIN_INNER
      },

      // current layout, in pixels
      image: {        // natural image
        src: null
      },
      win: {          // html client window
        w: null,
        h: null
      },
      map: {          // image display layout
        w: null,
        h: null,
        scale: null   // percent scale of max display size
      },

      setImage: function (imageSrc) {
        this.image.src = imageSrc;
        preloader.imgObj(imageSrc);   // start the preload right away
      },

      getMapRatio: function (imageSrc) {
        var mapRatio = MAP_RATIO;       // predfined image ratio from settings

        if (!mapRatio) {  // get natural ratio if not predefined, if image is loaded
          var imgObj = preloader.imgObj(imageSrc);

          if (imgObj) {
            var w = imgObj.naturalWidth,
              h = imgObj.naturalHeight;

            if (w && h) {
              mapRatio = w / h;
            }
          }
        }
        return mapRatio;
      },

      resetLegend: function () {
        this.legend = {
          w: COLUMN_WIDTH + COLUMN_PADDING * 2
        };
        this.between.mapLegend = MARGIN_INNER;
      },

      setLegend: function (empty) {
        if (empty) {
          this.legend = { w: 0, h: 0, x: 0, y: 0 };
          this.between.mapLegend = 0;
        } else {
          this.resetLegend();
        }

        this.doLayout();
      },

      // sets layout of interface elements based on current client area and maximum possible image
      doLayout: function () {

        var win = this.win, $window = $(window);
        win.w = $window.width();
        win.h = $window.height();

        // total remaining area left-over available for image, inside current client area
        var header = this.header, legend = this.legend;
        var maxImageW = win.w - (legend.w + this.between.mapLegend + this.margin.horizontal);
        var maxImageH = win.h - (header.h + this.between.headerMap + this.margin.vertical);

        // clip max available height and width
        maxImageW = Math.min(MAP_MAX_WIDTH, maxImageW);
        maxImageH = Math.min(MAP_MAX_HEIGHT, maxImageH);

        // get image aspect ratio from predfined settings or image
        var mapRatio = this.getMapRatio(this.image.src);

        // scale max available height and width to ratio
        if (mapRatio) {
          var newHeight = Math.round(maxImageW / mapRatio);  // 3 wide / 2 high -> height = width / 1.5

          if (newHeight > maxImageH)                         // rescale width if scale height needs clipping
            maxImageW = Math.round(maxImageH * mapRatio);    // like 2 high * 1.5 = 3 wide
          else
            maxImageH = newHeight;                           // set new available height
        }

        // set straw-man image width and height
        var map = this.map;
        map.w = maxImageW;
        map.h = maxImageH;

        map.scale = Math.min(Math.max(Math.round(map.w / MAP_MAX_WIDTH * 100),
            Math.round(map.h / MAP_MAX_HEIGHT * 100)), 100);

        if (map.scale < MIN_SCALE) {  // image hole is less than 50% of the max hole then bail, not sure why
          callbacks.disable.fire();
          callbacks.close.fire();

        } else {
          header.y = Math.round((win.h - map.h - header.h - this.between.headerMap) / 2);
          header.x = Math.round((win.w - map.w - legend.w - this.between.mapLegend) / 2);
          header.w = map.w;

          map.x = header.x;
          map.y = header.y + header.h + this.between.headerMap;

          if (legend.w) {
            legend.h = map.h + header.h + this.between.headerMap;
            legend.x = map.x + header.w + this.between.mapLegend;
            legend.y = Math.round((win.h - legend.h) / 2);
          }

          callbacks.enable.fire();
        }
      },

      init: function () {
        this.resetLegend();
        callbacks.refresh.add($.proxy(this.doLayout, this));
        callbacks.close.add($.proxy(this.resetLegend, this));
        return this;
      }

    }).init();

    function isWikiaImage(src) {
      return src && src.length &&
        /^(?:https?:)?\/\/(images|static|img|vignette)(\d*)\.wikia\.(?:nocookie\.net|com)\//.test(src);
    }

    function isWithinBounds(data, min, max) {
      return data !== undefined && data !== null && data >= min && data <= max;
    }

    // now that the infrastructure is in place, process each command on the page
    $maps.each(function () {
      var $map = $(this);

      if (!$map.data('map') &&
        isWikiaImage($map.data('small')) &&
        isWikiaImage($map.data('large')) &&
        isWithinBounds($map.data('width'), MAP_MIN_WIDTH, MAP_MAX_WIDTH)
      ) {
        if ($map.hasClass('map-coords')                 // Template:Map/Coords
        ) {
          $map.data('map', new Coords($map));
        } else if ($map.hasClass('map-textlink')) { // Template:Map/Link
          $map.data('map', new Link($map));
        } else if ($map.hasClass('map-embed')) {    // Template:Map
          $map.data('map', new Embedded($map));
        }
      }
    });

    layout.doLayout();   // will also set Map to enabled
    $(window)
      .resize(callbacks.refresh.fire)
      .resize($.debounce(100, callbacks.resize.fire));

  } // end of initMaps()

  // only initialize map plugin if maps are found
  $(function () {
    var $maps = $('.map');    // maps are marked with map class
    if ($maps.length) {
      initMaps($maps);
    }
  });

}(mediaWiki, jQuery, window, window.document));
;
/* MediaWiki:SlideShow/code.js */
// This is archival, will more than likely get in-lined in Common.js
// See MediaWiki:SlideShow for SlideShow extension details 

/*jshint jquery:true, browser:true, devel:true, camelcase:true, curly:false, undef:true, bitwise:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, unused:true, regexp:true, strict:true, trailing:true, maxcomplexity:10 */
/*global mediaWiki:true*/

function wwSlideShow(shows) {
  var wwtimer;
  var wwplaying;

  function change(show, index) {
    var slides = show.find('.ww-sshowslide');
    slides.stop(true, true);

    var effect = show.data('wweffect');
    if (effect == 'slide' && $.effects && $.effects['slide']) { // slide
      slides.eq(index).siblings().hide('slide', { direction: 'left' }, 1500);
      slides.eq(index).show('slide', { direction: 'right' }, 1500);
    } else {                 // fade
      slides.fadeOut('normal');
      slides.eq(index).fadeIn(1500);
    }

    show[0].wwlastSlide = index;
  }

  function rotates() {
    var show = $(this);
    if (show[0].wwstop) return;
    var slides = show.find('.ww-sshowslide');
    if (slides.length <= 1) return;

    var index = (show[0].wwindex || 0) + 1;
    if (index > (slides.length - 1)) index = 0;
    if (show[0].wwlastSlide == index) return;

    change(show, index);
    show[0].wwindex = index;
  }
  function rotate() {
    shows.each(rotates);
  }

  function play(show) {
    var slides = show.find('.ww-sshowslide');
    if (slides.length <= 1) return;
    if (!wwplaying) {
      wwplaying = true;
      wwtimer = window.setInterval(rotate, 5000);   // one timer for all shows for now
    }
  }

  function pause(show) {
    var slides = show.find('.ww-sshowslide');
    if (slides.length <= 1) return;
    window.clearInterval(wwtimer);
    wwplaying = false;
  }

  shows.each(function () {
    var show = $(this);
    show.hover(function () { pause($(this)); }, function () { play($(this)); });
    show.click(function () { var show = $(this); pause(show); show[0].wwstop = true; });
    play(show);
  });
}

function wwSlideShowInit() {
  var shows = $(".ww-sshow");
  if (shows.length == 0) return;
  wwSlideShow(shows);
}

$(function () {
  wwSlideShowInit();
});

// below needed only when need to load modules through loader, end-to-end is more expensive for client
//(function (mw, $, window) {
//  $(function () {
//    if ($(".ww-sshow").length > 0) {
//      mw.loader.using(['jquery.ui.core'], function () {  // loading effects separately, not rely on ui-core
//      //mw.loader.using(['jquery.ui.core','jquery.effects.core','jquery.effects.slide'], function () {
//        wwSlideShow($(".ww-sshow"));
//      });
//    }
//  });
//}(mediaWiki, jQuery, window));
;
/* MediaWiki:UserTags/code.js */
/**
* UserTags
* Replacement for InactiveUsers and UserRightsIcons and
* general user name and tag code.
*
* Notes:
*  Subsumed here and rewritten for efficiency and because of avoidable JS errors
*  on pre-IE 10 clients. Works on Special:Contributions. 
*
* Credits:
* InactiveUsers documentation at: http://dev.wikia.com/wiki/InactiveUsers
*  (c) Peter Coester, 2012
* UserRightsIcons written by USER:RAPPY_4187
*  06:49, November 1, 2011 (UTC)
*/
/*jshint curly:false laxbreak:true es5:true jquery:true */

function wwUserTags(user, isInactive) {

  var tags = [];

  // ** InactiveUsers
  if (isInactive)
    tags.push("Inactive");

  // ** UserRightsIcons
  var users = {};

  // BEGIN LIST OF ACCOUNTS GIVEN EXTRA USER RIGHTS ICONS

  // STAFF
  users["Kirkburn"] = ["Staff", "Bureaucrat Emeritus", "Administrator"],
  users["Raylan13"] = ["Staff", "Bureaucrat", "Sleepless"],

  // FOUNDERS

  users["WoWWiki-Rustak"] = ["Founder", "Bureaucrat Emeritus", "Administrator"],

  // BUREAUCRATS

  users["Fandyllic"]    = ["Bureaucrat", "Administrator", "Crazy Person", "Expert", "Templates"],
  // users[""]          = ["Bureaucrat","Administrator"],

  // BUREAUCRATS EMERITUS

  users["WoWWiki-Sancus"] = ["Bureaucrat Emeritus", "Administrator"],

  // ADMINISTRATORS

  users["Bubsy87"]      = ["Administrator"],
  users["Celess22"]     = ["Administrator", "Expert", "Javascript"],
  users["Frejya"]       = ["Administrator", "Patroller"],
  users["Sitb"]         = ["Administrator", "Expert", "Guild achiever"],

  // ADMINISTRATORS (Inactive)
  users["Macrophager"]  = ["Administrator (Inactive)", "Expert", "Mounts"],
  users["Pecoes"]       = ["Administrator (Inactive)", "Expert", "CSS"],
  users["Servian"]      = ["Administrator (Inactive)", "Wannabe Fixer of Worlds"],
  users["Tankingmage"]  = ["Administrator (Inactive)", "Expert", "Warcraft lore"],

  // ADMINISTRATORS EMERITUS

  users["AlexanderYoshi"] = ["Administrator Emeritus"],

  // MODERATORS (Old)

  users["Zmario"]       = ["Moderator", "Patroller"],

  // CHAT MODERATORS

  users["Sawpog46"] = ["Chat Moderator"],

  // CONTENT MODERATORS

  users["Cecijo"] = ["Content Moderator"],

  // PATROLLERS/MODERATORS

  users["Alex Weaver110352"] = ["Patroller"],
  users["ByzantiosAE"] = ["Patroller"],
  users["Icyveins"] = ["Patroller", "Expert", "External linker"],
  users["Jonrae"] = ["Patroller", "Timeless expert"],
  users["Corgi"] = ["Patroller"],
  users["Scout1534"] = ["Patroller"],
  users["Sasyn"] = ["Patroller"],
  users["TessaVarzi"] = ["Patroller"],
  users["THE GMoD"] = ["Patroller"],
  users["TheKaldorei"] = ["Patroller"],
  users["WoWRper"] = ["Patroller"],
  users["Xideta"] = ["Patroller"],
  users["RainingPain17"] = ["Patroller"],

  // ROLLBACK

  // users[""]    = ["Rollback"],

  // EXPERTS

  //users["Celess22"]       = ["Expert", "Javascript"],
  //users["Fandyllic"]      = ["Expert", "Templates"],
  //users["Icyveins"]       = ["Expert", "External links"],
  users["Lil' Miss Rarity"] = ["Expert", "Javascript"],     // was Icecreamcaekbot
  //users["Macrophager"]    = ["Expert", "Mounts and Riding"],
  //users["Pecoes"]         = ["Expert", "CSS"],
  users["RBoy"]             = ["Expert", "Battle pets"],
  //users["Tankingmage"]    = ["Expert", "Warcraft lore"],
  users["Vilnisr"]          = ["Expert", "Pollster"],
  users["PIESOFTHENORTH"]   = ["Expert", "RTS"],

  // MISCELLANEOUS

  // users[""]       = ["Misc","Stuff"],

  // TEST ACCTS, BOTS, & AWB

  users["WikiaBot"] = ["Wikia Bot"],
  users["Wikia"] = ["Wikia User Bot"];

  // END LIST OF ACCOUNTS GIVEN EXTRA USER RIGHTS ICONS

  // append per-user tags, if any
  if (typeof users[user] != "undefined")
    tags = tags.concat(users[user]);
  if (tags.length <= 0) return;

  // remove old tags and add new
  if (skin == 'uncyclopedia' || skin == 'wowwiki' || skin == 'lostbook' || skin == 'monobook') {
    var context = $('h1#firstHeading');
    context.find('.inactive-user').remove();
    for (var i = 0, len = tags.length; i < len; i++) {
      $('  <span class="tag ' + (tags[i] == 'Inactive' ? 'inactive-user' : '') + '">[' + tags[i].toLowerCase() + ']</span>').appendTo(context);
    }
  } else {      // 'oasis' engine
    $('.UserProfileMasthead .masthead-info span.tag').remove();
    for (var i = 0, len = tags.length; i < len; i++) {
      $('<span class="tag' + (tags[i] == 'Inactive' ? ' inactive-user' : '') + '">' + tags[i] + '</span>').appendTo('.masthead-info hgroup');
    }
  }
};

// Startup
$(function () {
  var daysToInactive = 90;

  var user = wgTitle, userIndex = user.lastIndexOf('/'),
      namespace = wgNamespaceNumber, special = wgCanonicalSpecialPageName;

  // check is correct page namespace (user type pages) and probable user name
  if ([2, 3, 500, 501, 1200].indexOf(namespace) == -1 &&
      (['Contributions', 'Following'].indexOf(special) == -1 || userIndex == -1 ||
      (user = user.substring(userIndex + 1)).length == 0)) return;

  // Polyfill for ECMAScript 5 function (so it works in older browsers)
  if (!Date.prototype.toISOString) Date.prototype.toISOString = function () {
    function p(s) { return (s += '').length < 2 ? '0' + s : s; }
    return this.getUTCFullYear() + '-' + p(this.getUTCMonth() + 1) + '-' + p(this.getUTCDate()) +
    'T' + p(this.getUTCHours()) + ':' + p(this.getUTCMinutes()) + ':' + p(this.getUTCSeconds()) +
    '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).substr(-3) + 'Z';
  };

  // Query server if user is inactive, then call UserTags to update page
  var apiUrl = wgScriptPath + '/api' + wgScriptExtension +  // mw.util.wikiScript('api') is only available in MW 1.19
    '?action=query&list=usercontribs&uclimit=1&ucprop=title|timestamp&format=json' +
    '&ucuser=' + encodeURIComponent(user) + '&ucstart=' + wgNow.toISOString() +
    '&ucend=' + new Date(wgNow - daysToInactive * 86400000).toISOString();

  $.getJSON(apiUrl, function (result) {
    var query = result.query;
    wwUserTags(user, query && query.usercontribs && !query.usercontribs.length);
  });
});
;
;
mw.loader.state({"wikia.fake.articles.34bf1f35b68a8f95472c12300e6bfda4":"ready"});
