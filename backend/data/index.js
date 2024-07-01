export const authors = [
    {
        name: 'Rishabh Raj',
        linkedinUrl: 'https://www.linkedin.com/in/rishabh-raj-2622a1198/'
    }
]

export const blogs = [
    {
        title: 'Understanding JavaScript Closures',
        author: '66821b5cf120f4519331d7e5',
        imageUrl: 'https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg',
        content: `A comprehensive guide to understanding closures in JavaScript. Closures are an essential concept in JavaScript that every developer should grasp.

        In essence, a closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.
    
        Closures are created every time a function is created, at function creation time. This means that whenever a function is defined in JavaScript, a closure is created. This can be used for powerful patterns like data encapsulation and the module pattern.
    
        One of the most common uses of closures is to create function factories. For example, you can create a generic function that generates specific functions tailored to your needs. This is often used in functional programming.
    
        Understanding closures can significantly improve your JavaScript skills, making your code more efficient and easier to maintain. They are not just a quirky feature of the language, but a fundamental aspect that underpins many advanced programming techniques.`
    },
    {
        title: 'Introduction to Node.js',
        author: '66821b5cf120f4519331d7e5', 
        imageUrl: 'https://th.bing.com/th/id/OIP.3pPJQKaUEdqQUjkWge0M3gAAAA?rs=1&pid=ImgDetMain',
        content: `This article introduces you to the basics of Node.js. Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

        Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

        The Node.js runtime is built on the V8 JavaScript engine, which is used in Google Chrome. It is designed to build scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

        Node.js is particularly good for I/O-bound applications like web servers. Its non-blocking model allows it to handle many connections simultaneously with high throughput, making it ideal for real-time applications.

        Learning Node.js opens up many possibilities for building modern web applications, including back-end development, API creation, and more. It's an essential skill for any JavaScript developer looking to expand their capabilities.`
    },
    {
        title: 'Mastering CSS Grid',
        author: '66821b5cf120f4519331d7e5', // Will be replaced with the author's ObjectId
        imageUrl: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/2147496605/images/adSKFRGlQnauNI2eNk5y_blog-CSSGrid.jpg',
        content: `CSS Grid is a powerful tool for creating complex layouts on the web. It allows developers to design responsive and flexible grid-based layouts using a two-dimensional grid system.

        With CSS Grid, you can create layouts that were previously impossible or very difficult to achieve with floats or flexbox. It provides more control over the placement of items within a grid container, making it easier to design responsive layouts.

        CSS Grid works by defining a grid container with rows and columns. You can then place grid items within this container using grid lines, which makes it possible to create complex layouts with just a few lines of code.

        One of the great things about CSS Grid is its support for both fixed and flexible layouts. You can define specific sizes for rows and columns, or you can use flexible units like fractions and percentages to create responsive designs that adapt to different screen sizes.

        Mastering CSS Grid is essential for modern web development. It simplifies the process of creating complex, responsive layouts and opens up new possibilities for design and creativity.`
    },
    {
        title: 'Building RESTful APIs with Express',
        author: '66821b5cf120f4519331d7e5', // Will be replaced with the author's ObjectId
        imageUrl: 'https://th.bing.com/th/id/OIP.NDRJm3UusxljumF_fxYrsgHaEK?rs=1&pid=ImgDetMain',
        content: `Learn how to build RESTful APIs using Express, a minimal and flexible Node.js web application framework. Express provides a robust set of features to develop web and mobile applications.

        RESTful APIs follow a stateless, client-server, cacheable communications protocol — the HTTP protocol. They use standard HTTP methods like GET, POST, PUT, and DELETE for CRUD operations.

        Building RESTful APIs with Express involves setting up routes to handle different HTTP requests. Each route corresponds to a specific endpoint and performs a particular action, like retrieving data or updating a record.

        Express makes it easy to handle requests and responses, work with middleware for tasks like authentication and logging, and integrate with databases to store and retrieve data.

        By mastering RESTful API development with Express, you can create scalable, maintainable, and efficient web services. This knowledge is crucial for building modern web applications that interact with front-end clients, mobile apps, and other services.`
    }
]