<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/235ff2d4-8a6b-4b9f-8598-5e36048ee959

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Project Inquiry Email

The Project Specification Inquiry form sends submissions to `codehive.solutions@gmail.com` through Gmail SMTP. Create a Google App Password for that account, copy `.env.example` to `.env`, and set `GMAIL_USER` and `GMAIL_APP_PASSWORD`. Do not commit `.env` or expose the App Password in frontend code.

`npm run dev` starts both the Vite app and the email API. For deployment, build the frontend with `npm run build` and run `npm start` with the same environment variables; the Node server serves the built app and handles inquiry requests.
