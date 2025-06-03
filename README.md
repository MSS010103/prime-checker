

A simple web application that checks if a number is prime.

 Project Structure


prime-number-api/
├── public/
│   └── index.html    # Frontend interface
├── src/
│   └── index.js      # Server code and API endpoints
├── package.json      # Project dependencies
└── README.md        # This file


## Features

- Simple and clean user interface
- API endpoint to check if a number is prime
- Input validation
- Error handling

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

## API Endpoint

POST `/api/check-prime`
- Request body: `{ "number": integer }`
- Response: `{ "number": integer, "isPrime": boolean }`
- Example:
  ```bash
  curl -X POST http://localhost:3000/api/check-prime \
       -H "Content-Type: application/json" \
       -d '{"number": 17}'
  ```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)






Using curl:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"number": 17}' http://localhost:3000/api/check-prime
```

Using JavaScript/Fetch:
```javascript
fetch('http://localhost:3000/api/check-prime', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    number: 17
  }),
})
.then(response => response.json())
.then(data => console.log(data));
``` # prime-checker
