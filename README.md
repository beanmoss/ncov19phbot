#Bot for ncov19PH messenger

1. Create a facebook messenger app
2. Retreive the required values in .env.sample file from facebook developer page.
3. Rename .env.sample to .env
4. Install ngrok or any tunneling tools to expose your local service to the public and use it as fb app webhook url.
5. npm install
6. npm start
7. run ngrok point to the port of your running node server.
8. copy the public https url ngrok is exposing and use it as webhook url. Don't forget to add /webhook to that url for it to work.
