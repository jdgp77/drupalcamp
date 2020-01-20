const textModifier = {
  normalize: (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
   
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
   
    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }      
        return ret.join( '' );
    }
  })(),
  replaceAll: function(str, _this, _that) {
    return str.split(_this).join(_that)
  },
  quitarDoblesEspacios: function(str) {
    str = this.replaceAll(str, "                                ", " ");
    str = this.replaceAll(str, "                ", " ");
    str = this.replaceAll(str, "        ", " ");
    str = this.replaceAll(str, "    ", " ");
    str = this.replaceAll(str, "  ", " ");
    str = this.replaceAll(str, "  ", " ");

    return str;
  },
  quitarCaracteresRaros: function(str) {
    str = this.replaceAll(str, "-", " ");
    str = this.replaceAll(str, "_", " ");

    return str;
  },
  machine: function(str) {
    str = str.toLowerCase();
    str = this.normalize(str);
    str = this.quitarCaracteresRaros(str);
    str = this.quitarDoblesEspacios(str);
    str = this.replaceAll(str, " ", "_");
    
    return str;
  }
}

export default textModifier;