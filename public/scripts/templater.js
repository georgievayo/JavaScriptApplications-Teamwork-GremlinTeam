let templates = {
    get: function (templateName) {
        let url = `./scripts/templates/${templateName}.handlebars`;
        return requester.get(url);
    }
};

if (typeof module !== "undefined") {
  module.exports = (function(){ 
    return [
      templates
    ]; 
  })();
}