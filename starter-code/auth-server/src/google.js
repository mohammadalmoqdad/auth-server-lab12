'use strict';

const superagent = require('superagent');
const users = require('./users.js');

/*
  Resources
  https://developer.github.com/apps/building-oauth-apps/
*/
// www.googleapis.com/oauth2/v1/userinfo
const tokenServerUrl = process.env.TOKEN_SERVER;
const remoteAPI = process.env.REMOTE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = process.env.API_SERVER;

module.exports = async function authorize(req, res, next) {

  try {
    let code = req.query.code;
    console.log('(1) CODE:', code);

    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) ACCESS TOKEN:', remoteToken)

    let remoteUser = await getRemoteUserInfo(remoteToken);
    console.log('(3) GITHUB USER', remoteUser)

    let [email, token] = await getUser(remoteUser);
    req.email = email;
    req.token = token;
    console.log('(4) LOCAL USER', email);

    next();
  } catch (e) { next(`ERROR: ${e.message}`) }

}

async function exchangeCodeForToken(code) {

  let tokenResponse = await superagent.post(tokenServerUrl).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: API_SERVER,
    grant_type: 'authorization_code'
    })
  console.log("this is tooooooooken response",tokenResponse)
  let access_token = tokenResponse.body.access_token;
  console.log(access_token)
  
  return access_token;

}

async function getRemoteUserInfo(token) {

  let userResponse =
    await superagent.get(remoteAPI)
    .set('user-agent', 'express-app')
    .set('Authorization', `Bearer ${token}`)
    // to check if it is exists it is in the header 

  let user = userResponse.body; //user info that i got from google 
  return user;

}

async function getUser(remoteUser) {
  console.log(remoteUser);
  let userRecord = {
    email: remoteUser.email,
    password: 'oauthpassword'
  }

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token];

}