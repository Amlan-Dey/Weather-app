# Weather-app

A small, client-side weather application that fetches and displays current weather information for a given city.

## Features

- Search current weather by city name
- Displays temperature, humidity, wind speed, and a short description
- Minimal, dependency-free front-end (HTML, CSS, JavaScript)

## Files

- `index.html`: Main page and UI
- `app.js`: JavaScript logic that fetches and displays weather data
- `README.md`: This file

## Setup & Usage

No build step or package manager is required — this is a static frontend app.

Options to run locally:

- Open `index.html` directly in your browser (double-click or `File -> Open`).
- Serve with a simple HTTP server (recommended to avoid CORS and some browser restrictions):

	- Using Python 3 (works in PowerShell):

		`python -m http.server 8000`

		Then open `http://localhost:8000` and click `index.html` or visit `http://localhost:8000/index.html`.

## Configuration

- If the app requires an API key (e.g., OpenWeatherMap), add the key where the `app.js` code expects it. Check the top of `app.js` for a labeled `API_KEY` variable or comment.

## Development

- Edit `index.html` and `app.js` and refresh the browser to see changes.

## Contributing

- Fork the repo, make changes on a feature branch, and open a pull request.

## License

This project is provided under the MIT License.

## Author

- Amlan-Dey

If you'd like the README tailored with screenshots, a live demo link, or specific API setup instructions (including where to store the API key), tell me which details to add and I'll update it.
