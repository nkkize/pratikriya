# Dependencies
1. Make sure you're running at least npm 2.2.1 or above and Node 8.0.0 or above.

# Create App Dev Notes
1. `npx nano-react-app <app_name>`
> Parcel is the build tool
2. install redux : `npm install redux`
3. install react-redux: `npm install react-redux`
4. create a src/reducer folder
5. create `reducers/store-config.js` file which return the redux store
6. use `combineReducers` module in `reducers/index.js` to combine and return each reducer
7. Link the reducers to the react main app (index.js).
8. Wrap your app inside react-redux *Provider*

# Starting the Application
- `npm install` - This will install all the dependencies. 
- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.
