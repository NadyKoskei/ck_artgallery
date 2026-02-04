
01
Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

02
Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

03
Configure the Vite plugin
..navigate into the vite.config.js anf you will notice that only react has been defined and configured, so we have to do the same for tailwind by adding two lines of code.
Add the @tailwindcss/vite plugin to your Vite configuration.

04
Import Tailwind CSS
..go to the App.css and index.css and delete the default styles that have already been set up.. then put the import caode in the index.css file
Add an @import to your CSS file that imports Tailwind CSS.

05
Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

