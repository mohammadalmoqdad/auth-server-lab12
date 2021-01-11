# OAuth Comparative Analysis

## OAuth Provider Name :
*Google*.

### Research Conducted By: 
- Fatima Atieh
- Hussam Ajour
- Aseel Mesmar
- Mohammad Almokdad

### Overall Score and Comments
#### Score (Out of 10): 10
#### General Comments:
- back-end application.
- We used in-memory Database to store the user data 
- The app uses a middleware to authorize the access of the user to a third-party provider.
- We used Google as the oAuth-provider.
- The user has to click on the login button then log in to his Google count.


#### Pros
* Avoid forgetting passwords 
* Faster login 
* Maintain privacy of the user.

#### Cons
* It needs from the user to create a Google acount.


### Ratings and Reviews
#### Documentation:
- This back-end application that allow the user to signup using one Google account without the need from the user t enter an email or passowrd.
- we used in-memory database to store the information of a user.
- We deployed our application on Heroku.


#### Systems Requirements
* **dependencies**:
- bcrypt
- cors 
- dotenv
- express
- express
- superagent
* It is working on Heroku
- Doesn't require any database.

#### Ramp-Up Projections
- 4 hours.

#### Community Support and Adoption levels
- It is so popular in the industry because of the simple usage of it.


### Links and Resources
* [docs](https://developers.google.com/identity/protocols/oauth2)
* [docs](https://developers.google.com/identity/sign-in/web/sign-in)

### Code Demos
* [live/running application](https://oauth-lab12.herokuapp.com)
* [code repository](https://github.com/mohammadalmoqdad/auth-server-lab12)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm i` for all dependencies.
* `node index.js`
* Endpoint: `/oauth/`
  * Returns a JSON object with email and token in it.
