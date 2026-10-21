# Glitz & Glam catering website

A responsive, dependency-free catering website built with HTML, CSS, and vanilla JavaScript.

## Run in VS Code

1. Open this folder in Visual Studio Code.
2. Open `index.html` in a browser. For live reload, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
3. The site uses externally hosted Unsplash photographs and Google Fonts, so those need an internet connection.

## Deploy to Render

This is a plain static website: it does not need Node.js, a package installation, a server process, or a build step. The root-level `render.yaml` configures Render to publish the project root, including `index.html`, `styles.css`, `script.js`, and the `assets` folder.

1. Push this project to a GitHub repository you can access. Make sure `render.yaml` is at the repository root.
2. In Render, choose **New** → **Blueprint** and connect that repository. Render will read `render.yaml` and create the static site. Alternatively, choose **New** → **Static Site** and set the publish directory to `.` with no build command.
3. After deployment, open the Render URL and check the page, images, contact links, and mobile menu.

Render can host the static website, but the enquiry form currently does not send or store submissions. Connect a form provider or backend before relying on it to receive quote requests.

## Update business details

Edit `index.html` to change the business name, contact person, phone and WhatsApp numbers, service area, event hours, social links, menu wording, event décor, breakfast, custom-branded still and sparkling water, and welcome drinks details. The water cans image at `assets/glitz-glam-water-cans.svg` is an illustrative brand concept, not a photograph of finished products. The current service area is South Africa, based in Pretoria; travel charges may apply depending on distance. The Instagram handle shown is only a suggestion and must be claimed before use. The WhatsApp link opens a chat using the provided number. Replace any remaining bracketed placeholders before publishing.

The enquiry form validates the required fields in the browser, but it does not send or store submissions. To receive enquiries, connect the form to a backend or a form-submission provider and update `script.js` to submit to that service.
