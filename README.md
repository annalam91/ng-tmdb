# Movie Database Search

## Requirements

-    Submits search text to https://developers.themoviedb.org/3 and returns the name, year and description of anything that matches that text
-   Takes the movie description and submits that to a Yoda translator -  https://funtranslations.com/api/yoda
-   The application should show the relevant movie information with the translation of the movie’s description passed through the Yoda Translator.
-   Please include a README.md

## Installation

Install node.js: [https://nodejs.org/en/](https://nodejs.org/en/)

Run `npm install` to setup the application.

## Serve

Run `ng serve` to serve the project in a new browser window.

## Search Component

The search compoennt performs a movie search on the movie database API. It will return Movies. 

## Translation

The Yoda translation will only run 5 results per hour.

## Future work
- The search component exapnded out to take in multi search which supports searching for movies, tv shows and people in a single request.
- The translation to return the original description when you have hit your limit of 5 result per hour.
- Validation checks on the input.
- Improve the CSS
- Fix the error when calling the Yoda translation API. Supposed to be POST not GET.
