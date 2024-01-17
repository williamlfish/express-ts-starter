# TS starter repo

This repo is meant to be a template to start any express backend and can be easily  
modified to support other server types (graphql, grpc)

## Start the service :raised_hands:
`npm start` should do it  
That runs a start script in the `./bin` folder that also handles any setup needed to run the service,  
if new dependencies are added, it's advised to add the setup there ( seed a db, run a thing, whatever )


## Other features
The repo is already setup with linting and prettier to run on as a pre-commit hook.  