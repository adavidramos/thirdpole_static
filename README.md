# Third Pole Static

Static templates, CSS, JS, and images. Uses Grunt for automation and Bower for package management. Environment originally built using the Yeoman `webapp` generator, but Yeoman is not necessary to continue working with this environment.

CSS is compiled from SASS using Compass. All original CSS is written using the indented syntax.

### To deploy this project

Most of the files/directories exist to support frontend development and the build process and are not relevant for a server environment. The .html files are static templates for different page types. The templates have two dependencies:

- `dist/assets/` for static CSS, JS, fonts, and design/navigation images
- `dist/media/` for placeholder content images

### Directory layout

- `app/` : source files, including SASS
- `dist/` : templates and compiled/minified CSS/JS
	- `assets/` : to be served statically
		-	`css/`
		- `js/`
		- `fonts/` 	- `dataset.html` : template for dataset	- `index.html` : will be template for front page	- `media/` : placeholder for content uploads	- `results.html` : template for search results	-	`robots.txt`
- `Gruntfile.js` : config for Grunt
- `node_modules` : Yeoman package storage 
- `package.json` : Yeoman package list
- `README.md`
- `test` : for JS testing; not used
- `uat` : for JS testing; not used


