export const config = {
  "mapTitle": "Carbon intensity of electricity production in the EU", // The title of the map, if more than one word, separate by dash, e.g. "income-europe"
  "vercelURL": "map-ghg-electricity-production.vercel.app", // The url provided when deploying the map on Vercel
  "datasetType": "values", // "values" or "binary"; Does the data set contain numerical values or binary (0/1) values for countries?
  "datasetUnit": "fullNumbers", // "fullNumbers" or "percent"; Is the data in percent (0.25 of GDP) or full numbers (25 people)?
  "colourScheme": "purple-blue", // one of the following: "blue", "purple-blue", "green-blue", "orange-red"
  "headlineAvailable": true, // true or false; Should the map have a headline? 
  "subheadlineAvailable": true, // true or false; Should the map have a subheadline? 
  "tooltipAvailable": false, // true or false; Should the map show a tooltip when hovering over a country? 
  "scaleBarAvailable": true, // true or false; Should the map show a scale bar on the top? 
  "legendAvailable": true, // true or false; Should the map show a legend in the bottom right corner? 
  "textSourceAvailable": true, // true or false; Should the map show a source text below the map? 
  "textNoteAvailable": true, // true or false; Should the map show a text note below the map? 
  "textDataAccessAvailable": true, // true or false; Should the map show a link to the original data source below the map? 
  "legend1Color": "#cad1d9", // Specifies the color of the first round dot in the legend entry
  "legend2Color": "red", // Specifies the color of the second round dot in the legend entry
  "legend3Color": "blue", // Specifies the color of the third round dot in the legend entry
  "legend4Color": "green" // Specifies the color of the fourt round dot in the legend entry
}
