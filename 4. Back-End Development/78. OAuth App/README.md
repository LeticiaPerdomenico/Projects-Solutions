# OAuth App
![OAuth App](/public/Screenshot.png)
Create an application that can be authenticated by your GitHub account.
To set the Client ID and the Client secrets you must:
- Go to your Github account, click on your picture (right upper corner) and go to "Settings",
- Then on the left menu go to "Developer Settings",
- After in the left menu again choose "OAuth Apps", and click on the "Register a new application"
- Choose an application name, in this case is OAuth Project, in Homepage URL: http://localhost:3000 and in Authorization Callback URL: http://localhost:3000/auth/github/callback
- Click "Register application"
- Take note of the Client ID and paste it in the .env file and "Generate a new client secret" copy and paste it in the .env file too.
