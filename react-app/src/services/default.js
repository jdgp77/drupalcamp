const defaultjs = {
  defaultJson: function(newJson, defaultJson) {
    //  Si no efxisten nuevos datos retorna el defaultJson
    if(newJson===undefined) { return defaultJson; }
    for(var keyDefaultJson in defaultJson) { if(newJson[keyDefaultJson]===undefined) { newJson[keyDefaultJson] = defaultJson[keyDefaultJson]; } }
    return newJson;
  },
  isJson: function(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  
};

export default defaultjs;