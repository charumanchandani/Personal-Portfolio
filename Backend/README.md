# Portfolio Backend Server

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env`:
```bash
   cp .env.example .env
```

2. Update `.env` with your Gmail credentials:
```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
```

### 3. Get Gmail App Password
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification (if not already enabled)
4. Search for "App passwords"
5. Generate a new app password for "Mail"
6. Copy the 16-character password to your `.env` file

### 4. Start the Server
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Send Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

## Troubleshooting

If emails aren't sending:
1. Verify Gmail App Password is correct
2. Check that 2-Step Verification is enabled
3. Ensure "Less secure app access" is NOT required (use App Passwords instead)
4. Check server logs for error messages