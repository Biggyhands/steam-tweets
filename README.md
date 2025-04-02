# steam-tweets

This project was developed as part of a technical assessment for a Frontend Developer position. It leverages Next.js to create a simplified, Steam-inspired web application.

## About Steam-Tweets

Steam-Tweets is a mock-up website that simulates a user browsing experience inspired by the Steam platform. Key features include:

- **User Search:** Allows users to search for other users within the application.
- **Profile Overview:** Provides access to simulated user profiles, displaying relevant information.
- **"Activity Feed" (Posts):** Mimics Steam's "Activity" feed, showcasing user-generated content retrieved from the JSONPlaceholder API. This content simulates posts or updates from users.

**❗❗Important Disclaimer:❗❗** Steam-Tweets is an _unofficial_ tribute to the Steam platform. As a fan project, it replicates certain aspects of Steam's design and functionality for demonstration purposes only. I, as the developer, do _NOT_ own any of the assets, trademarks, or styles inspired by the Steam platform. All rights belong to their respective owners.

## Technologies Used

This project utilizes the following technologies:

- **React.js:** A JavaScript library for building user interfaces.
- **Next.js:** A React framework for building performant and scalable web applications.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **Tailwind CSS:** A utility-first CSS framework for styling and visual presentation.
- **Shadcn:** A collection of accessible and customizable UI components built on Radix and Tailwind CSS.
- **Lucide:** A set of open-source, beautifully designed SVG icons optimized for React applications.
- **TanStack Query:** A powerful data-fetching and state management library for React that simplifies asynchronous operations, caching, and synchronization.

## Project Structure

## Installation and Setup

Follow these steps to set up and run the project on your local environment.

Clone this repository to your local machine using:

- **git clone https://github.com/Biggyhands/steam-tweets.git**

Then, navigate to the project directory:

- **cd steam-tweets**

Install the required dependencies with:

- **npm install**

Run the development server with:

- **npm run dev**

## Technical Decisions and Considerations

### Organization of the /app or /pages Folder

We have chosen to organize our application as follows:

- **Modular Structure:** The /pages folder is organized by routes, where each file or folder represents a URL in our application. This maintains a clear and predictable flow for how routes are created and makes maintenance easier.

- **Components Structure:** Within each route, we separate related components into a logically hierarchical structure. For example, common components are placed in a components folder, which can be reused across different routes.

- **Separation of Logic and Presentation:** We implement container components in the main pages that handle business logic and data, passing necessary props to smaller presentation components to keep the code clean and maintainable.

### Logic Structure with TanStack (React Query)

In this project, we leveraged **TanStack's React Query** to smartly manage data fetching and synchronization. Here's how and why it influenced our use of Client Components:

- **Smart Data Handling:** React Query centralized our data fetching and caching, allowing us to retrieve and sync data seamlessly without bogging down our components with heavy state management.

- **Client Components Focus:** By using Client Components, we could focus on interactivity and UI updates. Since React Query handles the heavy lifting of data synchronization and state updates, our components could remain lightweight and responsive.

- **Interactivity and Real-time Updates:** The real power of using Client Components is evident with real-time UI updates. React Query’s hooks, like `useQuery` and `useMutation`, made it easy to show instant feedback to users, enhancing the interactive experience.

## Demo


https://steam-tweets.vercel.app/
