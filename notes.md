npm install react

npm install --save-dev @babel/core @babel/cli


npm install @babel/preset-env --dev


npx babel src/brand.js


created a file called .babelrc



{
    "presets": [
        [
          "@babel/preset-env"
        ]
    ]
}


--


npx babel src/brand.js


create a source map for debugging

npx babel src --out-dir dist --source-maps