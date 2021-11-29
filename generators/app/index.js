const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to generator-html-scss-js...");
  }

  writing() {
    this.fs.copy(
      this.templatePath("index.html"),
      this.destinationPath("index.html")
    );
    this.fs.copy(
      this.templatePath("gulpfile.js"),
      this.destinationPath("gulpfile.js")
    );
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(this.templatePath("app"), this.destinationPath("app"));
  }

  end() {
    this.log(" ");
    this.log(
      "Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally."
    );
    this.log(" ");
    this.log(
      "Once you have the Gulp CLI installed globally, run Gulp to start your day :)) !"
    );
    this.log(" ");
  }
};
