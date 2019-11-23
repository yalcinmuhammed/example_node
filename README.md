# Example Node.js Restfull API 
Nodejs Example RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

#### API Document

[API Documentation](https://example-node-restfull-api.herokuapp.com/doc)

For more information about API Documentation visit [Apidoc](https://apidocjs.com/)

#### Deployment

> https://example-node-restfull-api.herokuapp.com

> Healthcheck: https://example-node-restfull-api.herokuapp.com/healthcheck

[Deployment Link](https://example-node-restfull-api.herokuapp.com)

For more information about deployment visit [Heroku](https://www.heroku.com/)

#### Run

`$ npm install`
`$ npm start`

#### Test

`$ npm test`

For more information about unit/integration testing visit [Jest](https://jestjs.io/)

#### Endpoint

> POST :  /api/v1/records
```
To filter records;
{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 2700, 
  "maxCount": 3000 
}
```
```
Response Data; 
{
  "code":0, 
  "msg":"Success", 
  "records":[
      {
        "key": "xqT9N0XwJ4qwU0GQ",
        "createdAt": "2016-07-06T06:54:46.169Z",
        "totalCount": 2700
      }
  ] 
} 
```

For more information about service endpoint testing [Postman](https://www.getpostman.com/)