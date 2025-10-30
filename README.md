# PERN Stack CRUD Application

A full-stack Client Management System built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js) that allows you to Create, Read, Update, and Delete client records with search functionality.

## 🚀 Features

- **Full CRUD Operations:** Create, read, update, and delete client records
- **Advanced Search:** Search clients by name, email, or job description
- **Responsive Design:** Mobile-friendly interface built with Tailwind CSS and DaisyUI
- **Real-time Updates:** Instant UI updates after operations without page reload
- **Client Status Management:** Track active/inactive client status
- **Modern UI:** Clean and intuitive user interface

## 🛠️ Tech Stack

### Frontend

- **React.js** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Axios** - HTTP client for API calls
### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## ⚙️ Installation & Setup

### Prerequisites:

- Node.js
- PostgreSQL
- npm or yarn

### Backend Setup

**Navigate to backend directory:**

   ```bash
   cd "crud-backend"
   ```

**Install dependencies:**

   ```bash
   npm install
   ```
**Set up environment variables:**
Create a .env file in the backend directory with:

```bash
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
PORT=3000
```
**Create database:**
Create a PostgreSQL database with the name specified in your .env file.

**Run the backend server:**

```bash
nodemon src/index.js
```
Server will run on http://localhost:3000
### Frontend Setup
**Open a new PowerShell window and navigate to frontend directory:**

```bash
cd "crud-frontend"
```
**Install dependencies:**

```bash
npm install
```
**Run the development server:**

```bash
npm run dev
```
Frontend will run on http://localhost:5173

## 🗄️ Database Schema
```bash
CREATE TABLE clients_tb (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
job VARCHAR(50),
rate NUMERIC(10, 2) DEFAULT 100.00,
isactive BOOLEAN DEFAULT TRUE,
);
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/clients` | Get all clients |
| GET | `/api/clients/search?q=term` | Search clients |
| POST | `/api/clients` | Create new client |
| PUT | `/api/clients/:id` | Update client |
| DELETE | `/api/clients/:id` | Delete client |

## 🎯 Usage

### Adding a Client
- Click the **"Add Client"** button in the navbar
- Fill in the client details **(name, email, job, rate, status)**
- Click **"Add Client"** to save

### Searching Clients
- Use the search bar in the navbar to search by **name, email, or job description**
- Search happens in real-time as you type

### Updating a Client
- Click the **"Update"** button next to any client in the table
- Modify the details in the modal form
- Click **"Save Changes"** to update

### Deleting a Client
- Click the **"Delete"** button next to any client
- Confirm the deletion in the dialog box

## 🎨 Components

- **NavBar:** Search functionality and add client button
- **TableList:** Displays all clients with update/delete actions
- **ModalForm:** Reusable form for adding/editing clients

### Note: Make sure both backend and frontend servers are running simultaneously for the application to work properly.
