Currecntly: fixing few bugs in production related to caching and read 
preview of the app can be found below
![image](https://user-images.githubusercontent.com/87586713/234116248-eb3b070d-20e8-4f02-bddc-6c395b68b338.png)
![image](https://user-images.githubusercontent.com/87586713/234116401-3a704320-11a1-4aef-98a0-1b76b007198a.png)
![image](https://user-images.githubusercontent.com/87586713/234117078-13ce184f-9783-49dc-a7d2-4cacea8eb0a4.png)

<h1>News Web Application with Live Data</h1>
<p>This is a web application built with <strong>Next13.3</strong>, <strong>TypeScript</strong>, and <strong>GraphQL</strong>, utilizing <strong>StepZen</strong> for generating TypeScript definitions automatically. Live data is pulled via the <strong>Mediastash API</strong> with revalidation of stale data every 20 seconds using next revalidate, prebuilt pages along with instant caching to reduce wait time and pulling dynamic data at each request. The application also includes a dark/light mode feature using <strong>next-themes</strong> and <strong>tailwindcss</strong>.</p>
<h2>Technologies Used</h2>
<ul>
  <li>Next13.3</li>
  <li>TypeScript</li>
  <li>GraphQL</li>
  <li>StepZen</li>
  <li>Mediastash API</li>
  <li>Next-Themes</li>
  <li>TailwindCSS</li>
</ul>
<h2>Features</h2>
<ul>
  <li>Live data from the Mediastash API with revalidation</li>
  <li>GraphQL for efficient batching of multiple API calls</li>
  <li>Automatic TypeScript definition generation with StepZen</li>
  <li>Prebuilt pages to reduce wait time</li>
  <li>Streaming SSR for incremental rendering parts of UI to the client.</li>
  <li>Custom svg loader using React Suspense under the hood.</li>
  <li>Dark/light mode feature with next-themes and tailwindcss</li>
</ul>
<h2>Installation and Usage</h2>
<ol>
  <li>Clone the repository: <code>git clone https://github.com/your-username/news-web-app.git</code></li>
  <li>Install dependencies: <code>npm install</code> or <code>yarn</code> or <code>pnpm install</code></li>
  <li>Start the development server: <code>npm run dev</code> or <code>yarn run dev</code> or <code>pnpm run dev</code></li>
  <li>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the app.</li>
</ol>
<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to open issues or pull requests.</p>


