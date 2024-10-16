# Chrome Extension built with React + Parcel
## Fun Practice


# CLI Commands

## Development

```Shell
npm run watch
```

Starts the watcher for building project when a file changed.

## Building

```Shell
npm run build
```

Preps your app for deployment. Minifies all files, piping them to the `src/build` folder.


## Step 1: Creating Project Files
manifest.json file for providing information about Chrome extension, Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information like name, version, and permissions


## Step 2: Creating package.json
'watch' command watches your main.js and compiles if there was a change or if dependencies are imported from main.js.
'build' command builds your files into the src/build/main.js file.


## Step 3: Creating files and folders
Create a source folder
Create a components folder in src folder
Create main.js ,popup.js and popup.html files


## Step 4: Writing the Popup
The popup appears at the top of the bar in Chrome when a user clicks the icon of the extension.


## Step 5: Rendering React App
At this point, main.js should listen to messages which are coming from popup.js.


## Testing it
For testing your extension:
If you didn’t build your files, build them by running the npm run build command
Go to “chrome://extensions”
Check the “Developer Mode” switcher
Click the “Load Unpacked” button, then select your project folder

