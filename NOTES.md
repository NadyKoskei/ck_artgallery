a) How i set up my project
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

b) files i created
1.Components filw for my components
1.Pages file to store th diff pages

c) React Router

- Use 'npm install react-router-dom'
- In main.jsx, 'import { BrowserRouter } from "react-router-dom";' and the wrap your App with the browser router tag  
  <BrowserRouter>
     <App />
  </BrowserRouter>
- Define routes in App.jsx 'import { Routes, Route, Link } from "react-router-dom";' and use
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
