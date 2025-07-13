// MongoDB initialization script
// This script creates the user and database for the application

db = db.getSiblingDB('astral_db');

// Create the application user with read/write permissions
db.createUser({
  user: 'astral_user',
  pwd: 'astral_password',
  roles: [
    {
      role: 'readWrite',
      db: 'astral_db'
    }
  ]
});

console.log('Database and user created successfully');