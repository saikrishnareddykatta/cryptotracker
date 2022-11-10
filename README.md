**Heroku Deployment Instructions**

Note: I am performing deployment using Heroku CLI

- Step 1: Sign Up for Heroku (www.heroku.com)
- Step 2: Install Heroku CLI. (Heroku CLI can be installed in multiple ways, ex: Heroku CLI Installer or using node package manager)
- Step 3: Check the Heroku CLI Version in terminal. (heroku --version)
- Step 4: Login into Heroku using Heroku CLI. (heroku login)
- Step 5: Create an application in Heroku. (heroku create application-name, ex: heroku create cryptocoinmoon)
- Step 6: Push the application into Heroku. (git push heroku main)

If we want to develop a new feature to the already deployed application, We can deploy the application again in two ways

**First Way**

- Step 1: Make the necessary development and push the code to github repository.
- Step 2: Run the command (git push heroku main)

**Second Way**

Step 1: Connecting github to heroku an providing access. (available in Deploy section of youy application in heroku)
Step 2: Enter the repository name and enable automatic deployments.
Step 3: Make the necessary development and push the code to github repository.

Deployment will be automatically started when we run the command git push.

In order to make sure we always use the latest build of the application we use a buildpack

heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs
