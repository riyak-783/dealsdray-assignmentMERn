# Employee Management Admin Panel

A MERN-based web application for managing employees. This panel allows an admin to create, update, and delete employees and upload their photos. All employee data is stored in MongoDB, ensuring secure and organized management of employee information.

## Features

- **Employee Management**: Admin can create, update, and delete employee records.
- **Photo Upload**: Admin can upload employee photos to enhance the employee profile.
- **Data Persistence**: Employee details are stored in MongoDB for secure, scalable storage.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Upload**: (Specify any additional tools or services used for image storage, like Cloudinary or Firebase, if applicable)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas account)
- (If applicable) A service account for image storage, such as [Cloudinary](https://cloudinary.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies** for both frontend and backend:

   ```bash
   # Install server dependencies
   cd backend
   npm install

   # Install client dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `server` directory and add the following variables:

   ```bash
   MONGO_URI=<Your MongoDB connection string>
   PORT=<Port number, e.g., 5000>
   ```

   If you’re using an external service for image uploads, add:

   ```bash
   CLOUDINARY_URL=<Your Cloudinary API URL>
   ```

4. **Run the application**:

   - Start the backend server:

     ```bash
     cd backend
     npm start
     ```

   - Start the frontend:

     ```bash
     cd frontend
     cd admin
     npm start
     ```

   The application should now be running on `http://localhost:3000`.
   
## License

This project is licensed under the MIT License.

