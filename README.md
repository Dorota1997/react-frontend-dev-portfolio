<img width="80%" align="center" src="https://github.com/Dorota1997/react-frontend-dev-portfolio/blob/images/images/portfolio_mockup.png" alt="portfolio template mockup" /> <br/>
<img height="350px" align="right" src="https://github.com/Dorota1997/react-frontend-dev-portfolio/blob/images/images/mobile-demo.gif" alt="portfolio mobile demo gif"/>

<img align="left" src="https://github.com/leungwensen/svg-icon/blob/master/dist/svg/logos/react.svg" height="50" alt="react icon"/>
<h2>Portfolio Template</h2>

<pre>
⭐ Easy to adapt and deploy portfolio project covering most important 
sections(about, exp, skills, projects), inspired with solutions found 
at GitHub. Check live preview(link below).
</pre>

<strong>:crown: advantages</strong>

<img src="https://img.shields.io/badge/-multilingual-blue" alt="multilingual"/> &nbsp; <img src="https://img.shields.io/badge/-mobile friendly-blue" alt="mobile friendly"/> &nbsp; <img src="https://img.shields.io/badge/-light/dark mode-blue" alt="light/dark mode"/> &nbsp; <img src="https://img.shields.io/badge/-json fetched data-blue" alt="json fetched data"/> &nbsp; <img src="https://img.shields.io/badge/-minimalistic-blue" alt="minimalistic"/> &nbsp; <img src="https://img.shields.io/badge/-expandable-blue" alt="expandable"/>

<br/>

<h3>:eye_speech_bubble: Live demo</h3>

Check live demonstration <a href="https://dorota1997.github.io/react-frontend-dev-portfolio/"><strong>here</strong></a>

<img width="100%" src="https://github.com/Dorota1997/react-frontend-dev-portfolio/blob/images/images/react_portfolio_about.png" alt="react frontend dev portfolio preview"/>

<h3>:books: Getting started</h3>

1. Clone or fork project.
2. Install required dependencies with `npm install`.
3. Remove `homepage` entirely from `package.json` or set it to single dot. 

```
// package.json
{
  "name": "react-frontend-dev-portfolio",
  "homepage": "https://dorota1997.github.io/react-frontend-dev-portfolio/",   <-- remove/edit this
  "version": "0.1.0",
  "private": true,
  "dependencies": {
  ...
}
```

4. `npm start` project and customize it.
5. Deploy on github-pages using `npm run deploy` command.

<pre>
⚠️ Note that:
- if you want to have portfolio on different repository than `{username}.github.io`, 
set `homepage` in `package.json` to `https://{username}.github.io/{repository-name}/` 
before deploying portfolio.
- if you want to run it locally with <strong>npm run start</strong>, make sure that you have edited 
homepage property or json data won't load.
</pre>

<h3>:star: Inspirations</h3>

<a href="https://github.com/stephane-monnot/react-vertical-timeline">React Vertical Timeline</a> <br/>
<a href="https://github.com/rcaferati/react-awesome-slider">React Awesome Slider</a> <br/>
<a href="https://github.com/markusenglund/react-switch">React Switch</a> <br/>
<a href="https://github.com/catalinmiron/react-typical">React Typical</a> <br/>
<a href="https://iconify.design/icon-sets/?query=angular">Iconify Design</a> <br/>
<a href="https://www.w3docs.com/snippets/css/how-to-create-polaroid-image-with-css.html#">Polaroid effect</a> <br/>
<a href="https://tholman.com/github-corners/">GitHub Ref Corner</a>

<h3>:memo: Changelog</h3>

<details>
<summary>[ 03.10.2021, contributor: <a href="https://github.com/shahednasser">@shahednasser</a> ]</summary>
<pre>
- updated sass dependency.
</pre>
</details>
<details>
<summary>[ 26.05.2021, contributor: <a href="https://github.com/DavidMatalik">@DavidMatalik</a> ]</summary>
<pre>
- removed nonexisting logos references: logo192 and logo512.  
</pre>
</details>
<details>
<summary>[ 17.01.2021, contributor: <a href="https://github.com/igorperic17">@igorperic17</a> ]</summary>
<pre>
- wrapped the Typical component into a fixed height div due to the bad transitions for a brief moment between two titles when the string is empty (the content bellow jumps up-down very quickly).
- removed the title from the page document.title due to the increased title length.
</pre>
</details>
<details>
<summary>[ 30.11.2020, contributor: <a href="https://github.com/dorota1997">@dorota1997</a> ]</summary>
<pre>
- updated readme section
- fixed problem of json files not being read
</pre>
</details>
<details>
<summary>[ 29/30.11.2020, contributor: <a href="https://github.com/trolit">@trolit</a> ]</summary>
<pre>
- changed resume files names to more "universal"
- moved languages names to global variables
- moved section names to json files
- added target="_blank" for footer links
- added startDate property for projects
- excluded common json data to portfolio_shared_data file
- added header section height calculation based on formula: window.innerHeight - 140
- small changes to vertical timeline item (color/font-size)
- project link in modal is not shown if empty
- changed slider preloader bar color
- wrapped each skill into tile
- footer fullname is fetched from json now
- added mising "px" for avatar in About.js component
- updated json files content
- page title is fetched from json data
- added GitHub reference corner "label"
- edited page meta
- added margin, padding 0 for html tag
- excluded light theme ref from theme-dark file
- slightly changed Header.js section look
- made some changes to App.js to apply global variables/shared json etc.
- centered fullname/pos/theme toggler in Header section
</pre>
</details>

<h3>:gear: Contribution</h3>

If you have any suggestions on what to improve in <em>react-frontend-dev-portfolio</em> and would like to share them, feel free to leave an issue or fork project to implement your own ideas :slightly_smiling_face:

<h3>:camera: Credits(images)</h3>

Images used in portfolio template come from Pixabay, references:

<a href="https://pixabay.com/photos/people-woman-girl-clothing-eye-2563491/">p1</a>, <a href="https://pixabay.com/photos/dog-puppy-sharpei-petit-animal-1865712/">p2</a>, <a href="https://pixabay.com/photos/night-camera-photographer-photo-1927265/">p3</a>, <a href="https://pixabay.com/photos/road-forest-season-autumn-fall-1072823/">p4</a>, <a href="https://pixabay.com/photos/neuschwanstein-castle-bavaria-701732/">p5</a>, <a href="https://pixabay.com/photos/hohenschwangau-alps-alpsee-bavaria-532864/">p6</a>
