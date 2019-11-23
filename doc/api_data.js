define({ "api": [
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/records",
    "title": "Request Records Information",
    "name": "Search_Records",
    "group": "Record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Optional Field will contain the date in a &quot;YYYY-MM-DD&quot; format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Optional Field will contain the date in a &quot;YYYY-MM-DD&quot; format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minCount",
            "description": "<p>Optional Minimum count in records.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maxCount",
            "description": "<p>Optional Maximum count in records.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Custom status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message for code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "records",
            "description": "<p>List for records.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"msg\": \"Success\",\n\t\"records\": [\n\t\t{\n\t\t\t\"key\": \"xqT9N0XwJ4qwU0GQ\",\n\t\t\t\"createdAt\": \"2016-07-06T06:54:46.169Z\",\n\t\t\t\"totalCount\": 2700\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/records"
      }
    ],
    "filename": "routes/record.route.js",
    "groupTitle": "Record"
  }
] });
