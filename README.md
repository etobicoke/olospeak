# Olospeak

**Version:** 0.0.1  
**Private:** Yes

## Project Description

Olospeak is a [Next.js](https://nextjs.org/) web application. It uses various modern web technologies including React, Redux, and TailwindCSS, and integrates with multiple OAuth providers such as Google, Facebook, and Microsoft for authentication.

## Installation

To get started with Olospeak, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/olospeak.git
cd olospeak
npm install
```

## Scripts

The following npm scripts are available for managing the project:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the application in production mode.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

## Dependencies

Olospeak relies on a number of core dependencies:

- **@reduxjs/toolkit**: A powerful toolset for managing Redux state.
- **@tanstack/react-query**: Library for fetching, caching, and synchronizing server state in React.
- **aws-sdk**: SDK for interacting with AWS services.
- **axios**: A promise-based HTTP client for making API requests.
- **mongoose**: MongoDB object modeling tool for Node.js.
- **next**: The React framework used for building this application.
- **next-auth**: A library to handle authentication in Next.js apps.
- **next-pwa**: Adds Progressive Web App (PWA) support to the application.
- **react**: The core React library.
- **react-dom**: Provides DOM-specific methods for React.

## Dev Dependencies

These are the tools and libraries used during development:

- **autoprefixer**: A plugin to add vendor prefixes to CSS rules.
- **eslint**: A linter tool to help ensure code quality.
- **eslint-config-next**: ESLint configuration specifically for Next.js projects.
- **postcss**: A tool to process CSS with JavaScript plugins.
- **sass**: A CSS preprocessor to help write maintainable styles.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.

## Environment Variables

To run this project, you'll need to set up the following environment variables in a `.env.local` file at the root of your project:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
NEXT_PUBLIC_API_URL=your-public-api-url
```

These environment variables are used to configure OAuth authentication and API endpoint access.

## Usage

1. **Start the development server**:
    ```bash
    npm run dev
    ```
   Visit `http://localhost:3000` to view the app in the browser.

2. **Build the application**:
    ```bash
    npm run build
    ```

3. **Start the application in production mode**:
    ```bash
    npm run start
    ```

4. **Lint the codebase**:
    ```bash
    npm run lint
    ```

## License

This project is private and not intended for public distribution.

---

*Note: Replace the environment variable values with your actual credentials.*
```