const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { User } = require('../db')
module.exports = router
/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 **/

 
 process.env.GOOGLE_CLIENT_ID = '150832062609-vatcv9o8722ji1tj7urbm5t0n7ieoi00.apps.googleusercontent.com'
 process.env.GOOGLE_CLIENT_SECRET = 'A5hYiCX57FkZ1JxuZy_r0j-t'
 process.env.GOOGLE_CALLBACK = 'http://localhost:3000/auth/google/callback'
 

 if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
   console.log('Google client Id / secret not found. Skipping Google OAuth')
 } else {
   const googleConfig = {
     clientID: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: process.env.GOOGLE_CALLBACK
   }
   
   const verificationCallBack = function (token, refreshToken, profile, done) {
     const googleId = profile.id
     const name = profile.name
     const email = profile
   }
   const strategy = new GoogleStrategy(googleConfig, verificationCallBack)
   
 }