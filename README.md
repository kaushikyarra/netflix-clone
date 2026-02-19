# Kodnest Movie Explorer

A Netflix-style movie web application with secure authentication and TMDB integration.

## Features

- **User Authentication**: Secure Login and Registration using JWT and bcrypt.
- **Movies Integration**: Fetches trending, top-rated, and upcoming movies from TMDB API.
- **Netflix-style UI**: Responsive, dark-themed interface with hero banner and movie rows.
- **Protected Routes**: Redirects unauthorized users to login.
- **Deployment Ready**: Configurable environment variables.

## Tech Stack

- **Frontend**: React, Vite, Axios, React Router.
- **Backend**: Node.js, Express, MySQL, JWT.

## Setup Instructions

### Prerequisites
- Node.js installed.
- MySQL installed and running.

### 1. Database Setup
1. Create a MySQL database named `kodnest_movie_db`.
2. Ensure you have a MySQL user (default `root` with no password assumed, or configure in `.env`).
3. Run the initialization script (optional as backend will attempt to create table, but good for verification):
   ```bash
   cd server
   node initDb.js
   ```

### 2. Backend Setup
1. Navigate to `server` directory.
2. Install dependencies: `npm install`.
3. Create `.env` file in `server/` with:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=kodnest_movie_db
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   ```
4. Start server: `npm run dev` (or `node index.js`).

### 3. Frontend Setup
1. Navigate to `client` directory.
2. Install dependencies: `npm install`.
3. Create `.env` file in `client/` with:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start client: `npm run dev`.

## Git & Vercel Deployment

### 1. Push to Git
1. Initialize Git: `git init`
2. Add files: `git add .`
3. Commit: `git commit -m "Initial commit"`
4. Push to your GitHub repository.

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and Import your GitHub repo.
2. Vercel should auto-detect the configuration via `vercel.json`.
3. **Environment Variables**: Add these in Vercel Project Settings:
   - `TMDB_API_KEY`: Your key.
   - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`: Your **Cloud Database** credentials (e.g., PlanetScale, Aiven).
   - `JWT_SECRET`: A secure random string.
4. Deploy!

### Local Run (Automated)
Simply double-click **`SETUP_AND_RUN.bat`** to install dependencies and start the app.

