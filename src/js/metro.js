/*
 * Metro 4 Components Library v4.2.28 build 706 (https://metroui.org.ua)
 * Copyright 2018 Sergey Pimenov
 * Licensed under MIT
 */

(function( factory ) {
  if ( typeof define === 'function' && define.amd ) {
    define([ 'jquery' ], factory );
  } else {
    factory( jQuery );
  }
}(function( jQuery ) {
  var meta_init = $("meta[name='metro4:init']").attr("");

  if (window.METRO_INIT === undefined) {
    window.METRO_INIT = meta_init !== undefined ? JSON.parse(meta_init) : true;
  }

  if (typeof Object.values !== 'function') {}

  var isTouch = (
    ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
  );

  var Metro = {
    init: function(){
      var widgets = $("[data-role]");
      this.initWidgets(widgets);
      return this;
    },

    initWidgets: function(widgets) {
      var that = this;

      $.each(widgets, function () {
        var $this = $(this), w = this;
        var roles = $this.data('role').split(/\s*,\s*/);
        roles.map(function (func) {
          if ($.fn[func] !== undefined && $this.attr("data-role-"+func) === undefined) {
            $.fn[func].call($this);
          }
        });
      });
    },

    plugin: function(name, object){
      $.fn[name] = function( options ) {
        return this.each(function() {
          $.data( this, name, Object.create(object).init(options, this ));
        });
      };
    },
  };

  window['Metro'] = Metro;

  // Source: js/plugins/tiles.js
  var ImageTile = {
    init: function( options, elem ) {
      this.options = $.extend( {}, this.options, options );
      this.element = $(elem);
      this._create();
      return this;
    },

    options: {
      size: "medium",
    },

    _create: function(){
      this._createTile();
    },

    _createTile: function(){
      var that = this, element = this.element, o = this.options;
      element.addClass("image-tile-" + o.size);
    },
  };

  Metro.plugin('imagetile', ImageTile);

  return METRO_INIT === true ? Metro.init() : Metro;

}));
