grunt-init-digitaria
====================

Project scaffolding using grunt.js for Digitaria projects.

## Setup

Be sure you already installed [grunt-init](http://gruntjs.com/project-scaffolding).

```
npm install -g grunt-init
```

Now install the template into your `.grunt-init` folder. It's best just to clone this repo to the correct position.

### Mac OS
```
cd ~/.grunt-init
git clone git@github.com:mturnwall/grunt-init-digitaria.git
```
### Windows
Clone to `%USERPROFILE%\.grunt-init\`

## Usage

This will only need to be done once when the project is created. Other developers that come onto the project will not need to run `grunt-init` since everything will already be setup.

Change to your project directory. The installation location is dependent on the type of project you are working on.

* Drupal - `drupal/sites/all/themes/[project-theme-directory]`
* Sitecore - `\htdocs`

Inside the project directory run `grunt-init digitaria`. You will be asked a bunch of questions about your project.

* name - This is the name of your project. It will be guessed from the name of the directory you are in. It's used for file naming.
* title - This is the human version of the name.
* description - A quick description of your project. This is not required.
* version - This defaults to 0.1.0.
* repository - The URL to the repo you are using.
* jquery_version - The version of jQuery the project is going to use. The current included version is 1.10.2.
* config_rb_path - Path to where the config.rb path will be. This is generally the same location you are running grunt-init in.
* handlebars - If you are going to use handlebars templates or not.

When it's complete you'll see `Done, without errors.` All the information you entered for the prompts will be output to a README file. This can be helpful for other developers that work on the project.

Now you need to install the project dependencies. Depending on your machine it could take a few minutes to download all the node modules.

```
npm install
```

## Development

When building the site run `grunt watch` in the project folder (where you ran grunt-init). This command will watch your sass and js files. When you change a SASS file it will get compiled. Any changes to a js file will execute jshint.

## Getting ready for deployment

When you are ready for to push to QA or production run this command.

```
grunt build
```

This will get the front-end ready for deployment. Here are the tasks that are ran.

* Run JS files through jshint one last time.
* Minify and concat JS files.
* Compile SASS to a minified CSS file.
* Run PNG images through a PNG crush process.
