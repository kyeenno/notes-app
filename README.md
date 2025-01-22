# Notes App
## Description
Notes App is a fullstack web application for creating notes.

### Features
- Create a note
- Update the note
- Discard/save changes made
- Delete the notes

**The notes are saved in a database and can be accessed after reloading/relaunching the app.**

### Technologies used
- **Frontend:** Next.js (JavaScript), React, TailwindCSS, RemixIcon for icons
- **Backend:** Express.js, Node.js, CORS, Prisma, Nodemon
- **Database:** PostgreSQL, Aiven

## Installation

### Prerequisites
- Node.js (v14 or higher)
- NPM (v6 or higher)
- PostgreSQL if using a local database

### Instructions
#### 1. Clone the repo 
```sh
git clone https://github.com/kyeenno/notes-app.git
cd notes-app
```
#### 2. Set up the backend  
Navigate to the backend directory:
```sh
cd app/backend
```
Install the dependencies:
```sh
npm install
```
Create a `.env` file and add your database URL:
```
DATABASE_URL="postgresql://john:smith@localhost:5432/database"
```
Migrate the database using `Prisma` client:
```sh
npx prisma migrate dev
```
Start the backend server:
```sh
npm start
```
#### 3. Set up the frontend
Navigate to the frontend directory:
```sh
cd ../frontend
```
Install the dependencies:
```sh
npm install
```
Start the frontent server:
```sh
npm run dev
```
#### 4. Accessing the app
All set! Now you can access the app by opening your browser and navigating to `http://localhost:3000`

## Usage
### Creating a note
1. Fill in the "Title" and "Content" fields in the form on the left side of the screen.
2. Click the "Add Note" button to save the note.
3. New note will appear in the list on your right.

### Updating a note
1. Click on the note you want to update.
2. The note's title and content will appear in the form.
3. After making changes to the note, click the "check" icon under the form to save the changes. To discard the changes, simply click the "close" icon under the form.

### Deleting a note
To delete a note, simply click on the "close" icon in the top right of the note.

## Contact
**Project made by Valerija Kovalova**

If you have any questions or feedback, feel free to reach out:  
- **Email**: kovalyovabu@gmail.com
- **GitHub**: [kyeenno](https://github.com/kyeenno)