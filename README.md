# Any Comp Backend API

A RESTful API backend built with Node.js and Express.js, following the MVC (Model-View-Controller) architecture principle.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (hosted on Render)
- **ORM**: Prisma
- **Validation**: Zod
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Hosting**: Vercel

## 📋 Features

- **Authentication**: User registration, login, and JWT-based authentication
- **CRUD Operations**: Full Create, Read, Update, Delete operations for all database tables
- **MVC Architecture**: Clean separation of concerns with Controllers, Services, and Routes
- **Input Validation**: Request validation using Zod schemas
- **Error Handling**: Centralized error handling middleware
- **File Upload**: Media upload functionality using Multer

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:

- **User**: User accounts with roles (user/admin) and status (activate/deactivate)
- **Specialist**: Specialist profiles with ratings, pricing, and verification status
- **Media**: File uploads (images, videos, PDFs, etc.) with different media types
- **Platform Fee**: Tiered platform fee structure (BASIC, STANDARD, PREMIUM)
- **Service Offerings**: Services offered by specialists

## 📁 Project Structure

```
src/
├── app/
│   ├── modules/          # Feature modules (MVC structure)
│   │   ├── auth/         # Authentication module
│   │   ├── user/         # User management
│   │   ├── specialist/   # Specialist management
│   │   ├── media/        # Media management
│   │   ├── platform_fee/ # Platform fee management
│   │   └── service_offerings/ # Service offerings management
│   ├── config/           # Configuration files
│   ├── errors/           # Custom error handlers
│   ├── helper/           # Helper functions
│   ├── lib/              # Library files (Prisma client)
│   ├── middleware/       # Express middleware
│   ├── routes/           # Route definitions
│   └── shared/           # Shared utilities
└── server.ts             # Application entry point
```

Each module follows MVC pattern:
- `*.controller.ts` - Request handlers (Controller)
- `*.service.ts` - Business logic (Model/Service)
- `*.route.ts` - Route definitions
- `*.zodValidation.ts` - Input validation schemas
- `*.interface.ts` - TypeScript interfaces

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd any-comp-back
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="your-postgresql-connection-string"
JWT_SECRET="your-jwt-secret-key"
PORT=3000
```

4. Generate Prisma Client
```bash
npx prisma generate
```

5. Run database migrations
```bash
npx prisma migrate dev
```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📡 API Endpoints

All API endpoints are prefixed with `/api`

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### User Management
- CRUD operations for user management

### Specialist Management
- CRUD operations for specialist profiles

### Media Management
- CRUD operations for media files
- File upload functionality

### Platform Fee
- CRUD operations for platform fee tiers

### Service Offerings
- CRUD operations for service offerings

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the request headers.

## 🌐 Hosting

- **Backend**: Hosted on Vercel
- **Database**: PostgreSQL database hosted on Render

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 🔧 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## 📄 License

ISC

