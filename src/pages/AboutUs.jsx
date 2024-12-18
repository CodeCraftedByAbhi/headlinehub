import React from 'react';

const AboutUs = () => {
  return (
    <div class="container my-2">
    <h1 className='text-decoration-underline text-center my-4'>Overview of the Headline Hub</h1>
    <p>The Headline Hub is designed to pull real-time news from an external API and present it to users in an intuitive and visually appealing manner. Here's a breakdown of the key elements of the app and how React's component-based architecture and hooks are utilized to achieve this:</p>

    <h2>1. Component-Based Architecture</h2>
    <h3>1.1 Navbar Component</h3>
    <p><strong>Purpose:</strong> Provides navigation links and a dropdown menu for selecting news categories.</p>
    <p><strong>Features:</strong></p>
    <ul>
        <li><strong>React Router Integration:</strong> Uses <code>Link</code> from <code>react-router-dom</code> to navigate between different views such as the homepage and category-specific news pages.</li>
        <li><strong>Responsive Design:</strong> Includes a navbar-toggler for mobile responsiveness.</li>
    </ul>

    <h3>1.2 NewsList Component</h3>
    <p><strong>Purpose:</strong> Displays a list of news articles as cards.</p>
    <p><strong>Features:</strong></p>
    <ul>
        <li><strong>Card Layout:</strong> Each news item is shown with an image, title, description, and a "Read More" button.</li>
        <li><strong>Data Mapping:</strong> Uses the <code>map</code> function to iterate over the array of news articles and render each one using the <code>NewsCard</code> component.</li>
    </ul>

    <h3>1.3 NewsCard Component</h3>
    <p><strong>Purpose:</strong> Represents a single news article in a card format.</p>
    <p><strong>Features:</strong></p>
    <ul>
        <li><strong>Props:</strong> Receives <code>title</code>, <code>description</code>, <code>imageUrl</code>, and <code>url</code> as props to dynamically display content for each news article.</li>
        <li><strong>Button Handling:</strong> Includes a "Read More" button that links to the original news source.</li>
    </ul>

    <h3>1.4 NewsPage Component</h3>
    <p><strong>Purpose:</strong> Fetches and displays news articles based on the selected category.</p>
    <p><strong>Features:</strong></p>
    <ul>
        <li><strong>Dynamic Data Fetching:</strong> Retrieves news articles from the API based on the category provided in the URL parameters.</li>
        <li><strong>Loading and Error Handling:</strong> Manages loading state and handles potential errors gracefully.</li>
    </ul>

    <h3>1.5 AboutUs Component</h3>
    <p><strong>Purpose:</strong> Provides information about the Headline Hub.</p>
    <p><strong>Features:</strong></p>
    <ul>
        <li><strong>Static Content:</strong> Displays a static description of the application’s purpose, features, and technology stack.</li>
    </ul>

    <h2>2. Utilizing React Hooks</h2>
    <h3>2.1 useState</h3>
    <p><strong>Purpose:</strong> Manages the state within functional components.</p>
    <p><strong>Usage:</strong></p>
    <ul>
        <li><strong>NewsPage Component:</strong> Manages the state for news articles and loading status.</li>
    </ul>

    <h3>2.2 useEffect</h3>
    <p><strong>Purpose:</strong> Handles side effects such as data fetching and updates based on changes in dependencies.</p>
    <p><strong>Usage:</strong></p>
    <ul>
        <li><strong>NewsPage Component:</strong> Fetches news data when the component mounts or when the category changes.</li>
    </ul>

    <h2>3. Real-Time Data Handling</h2>
    <p><strong>API Integration:</strong> The application pulls real-time news from an external API (such as NewsAPI) using asynchronous calls. This ensures that users always see the most current news.</p>
    <p><strong>Pagination:</strong> Handles displaying a set number of news articles per page and provides buttons to navigate to additional pages.</p>

    <h2>4. User Experience and Responsiveness</h2>
    <p><strong>Responsive Design:</strong> The Navbar includes a toggler for mobile view to enhance user experience on different devices.</p>
    <p><strong>Error Handling:</strong> Provides feedback to users if there are issues fetching data or if no news is available.</p>

    <h2>5. Performance Considerations</h2>
    <p><strong>Efficient Data Fetching:</strong> Uses <code>useEffect</code> to fetch data only when necessary, minimizing unnecessary re-renders.</p>
    <p><strong>Conditional Rendering:</strong> Displays loading indicators and handles cases where no news is available, improving user experience.</p>

    <p style={{marginBottom:"50px"}}>By following these steps, you can prevent the <code>map</code> function from being called on <code>undefined</code> and ensure that your application works smoothly.</p>
</div>
  );
};

export default AboutUs;