# JQuery Advanced - Holberton School

This project aims to practice advanced usage of jQuery through progressive exercises, including DOM manipulation, AJAX requests, pagination, form handling, and using a mock server with json-server.

## Project Content

- **0 to 4-index.html**: Creating and dynamically manipulating HTML elements (tables, paragraphs) with jQuery.
- **5 to 6-index.html**: Dynamically adding members to a table, form handling, inserting at the top or bottom of the table.
- **7 to 9-index.html**: Wikipedia search via API, displaying results, pagination management, loading effect.
- **10 to 12-index.html**: Using json-server to simulate a REST API, displaying, adding, and deleting posts via AJAX.

## Installation and Usage

1. **Install dependencies**

At the root of the project:

```bash
npm install json-server
```

2. **Start the mock server**

Still at the root of the project:

```bash
npx json-server --watch JQuery_advanced/db.json
```

The server will be available at http://localhost:3000

3. **Open the HTML files**

Open the files `JQuery_advanced/*.html` in your browser to test the different features.

## db.json Structure

The `db.json` file contains sample posts, comments, and a profile. You can modify the data as you wish.

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" },
    ...
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

## Key Points

- Use of jQuery for all DOM and AJAX manipulations.
- Respect of best practices (accessibility, error handling, structured code).
- Use of json-server to simulate a real REST API.

## Author

[Notsay](https://github.com/Notsayy)
