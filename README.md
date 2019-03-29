<p align="center"><h2 align="center">XML Project</h2></p>
<p align="center"><img src="https://travis-ci.org/dwyl/esta.svg?branch=master" width="100" /></p>

It is a webserver that converts JSON(JavaScript Object Notation) to XML(Extensible Markup Language)

## Deployment
The project is deployed on heroku sevice: https://graphql-json.herokuapp.com/

## Test Query
query ($input: String) {
  me(
    test: $input
  )
}

## Query variable
{
  "input": "{'me': {'firstname':'Rushil','lastname':'Gupta'}}"
}
