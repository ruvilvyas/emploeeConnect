# Employee Connekt

A bridge to fill the gap between employees in an organization.

## About

Employee Connekt is a platform that helps employees get help at the right time. The main motive is to leverage a collaborative workspace for employees to connect, share experiences, and support each other.

## Core Features

- **Employee Networking** – A forum for employees to ask & answer work-related queries
- **Tech Interview Experiences** – Share interview experiences and insights
- **Help Requests** – Request and provide help across departments
- **Search & Filter** – Find relevant discussions based on tags, categories, and keywords

## Tech Stack

- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB
- **Authentication:** NextAuth.js (Google, GitHub, Email)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
├── lib/               # Utility functions and configurations
├── models/            # Database models
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 