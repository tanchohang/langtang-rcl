import { ComponentMeta } from '@storybook/react';
import { Post } from './Post';

export default {
  title: 'Blog/Medium/Post',
  component: Post,
  args: {
    title: 'Create Web Components with Lit Element, Vite, and Tailwind',
    body: `Next.js is a JavaScript framework that is built on top of React, a popular library for building user export interfaces. This means that you can use React to build your app, and Next.js provides additional tools and features to make the process easier.

    One of the main benefits of Next.js is that it enables server-side rendering. This means the server can generate the HTML for a page and send it to the client, rather than the client generating the HTML using JavaScript. This can improve the performance and SEO of your app.
    
    Next.js also includes a number of other features that can be helpful when building and deploying web applications. For example, it has automatic code splitting, meaning that your app will only load the code needed for the current page, rather than loading all of the code at once. This can improve the performance of your app. Next.js also has a built-in development server and a toolchain for deploying your app to production.
    
    Now that you know more about Next.js let’s explore what the Next.js 13 release has brought us.
    
    What’s New in Next.js 13?
    Next.js 13 represents the first comprehensive attempt to integrate React’s two identities — the UI Library and the Architecture. So, what’s new about it?
    
    1. App/Directory for File-Based Routing
    One of Next.js’s best features is file-based routing. Instead of dealing with complicated route settings in a program like react-router, routes can be specified using the directory project structure. By adding an entry point to the directory page, you can create a new path.
    
    Next.js 13 includes updated file routing with the new directory. The optional app directory introduces a new layout structure as well as several new features and improvements.
    
    The directory structure has undergone minor changes due to the new routing mechanism. Each path in the route has a dedicated directory with a page.js file that serves as the content entry point in Next.js 13.
    
    Differences in Routing
    
    We can now include additional files in each path directory thanks to the new structure. Additionally, the page.js for a route, such as:
    
    layout.js — A path and its sub-paths system.
    loading.js — A React-based system for instant loading.
    Suspense under the hood & error.js, a component is displayed if the primary component cannot load.
    
    We can now co-locate source files inside our path directories because each path is now its directory.
    
    2. React Server Components
    What’s most exciting about the new version of Next.js is the expanded support for React server components. Server components let us run and render React components on the server side for faster delivery, a smaller JavaScript bundle, and less expensive client-side rendering.
    
    In addition, depending on the kind of data required to generate a route, server components are automatically cached at build-time or runtime for added performance benefits.
    
    Combining server and client components allows you to use server components for fast loaded, non-interactive parts of your programme while using client components for interaction, browser APIs, and other features.
    
    When constructing client components for your Next.js application, you can designate them as such by using the ‘use client’; directive at the top of the file. However, if you utilise any third-party packages, you might need to create a client wrapper.
    
    3. Async Components & Data Fetching
    In addition, Next.js 13 introduces async components, a fresh approach to data collection for server-rendered components. When using async components, we can render systems using Promises using async & await.
    
    When requesting data from an external service or API that returns a Promise, we declare the component as async and wait for the response:
    
    async func getData() {
      const res = await fetch ('https://api.shamim.com/...');​
      return res.json();
    }
    
    export default async function About() {
      const name = await getData();
      return '...';
    }
    The following example demonstrates a Next.js 12 method for obtaining data from a third-party service:
    
    
    export default function About({data}) {
      return '...';
    }
    
    function getServerSideProps(){
        // Fetch data from external API
        const res = await fetch(https://.../data)
        const data = await res.json()
    
        // Pass data to the page via props return
        return { 
            props: { data } 
        }
    }
    This way API request has been simplified and its very intuitive and easy to understand now in the newer version.
    
    4. Streaming
    Previously, users might have to wait for the complete page to generate. Now the server will transmit the client small pieces of the UI as it is generated. It implies that bigger pieces won’t get in the way of smaller ones. Of course, as of right now, just the app directory is supported for this feature, and it doesn’t seem that this will change.
    
    This new feature won’t benefit individuals with strong internet connections or speedy Wi-Fi as much as those with weaker connections. There are more of them than you would have thought, in fact. It’s great that faster site loading times will improve user experience.
    
    5. Turbopack
    The last important change introduced with Next.js 13 release was a new JavaScript bundler called Turbopack, which is referred to as the “successor to Webpack”. Webpack, one of the most used JavaScript build tools, is tremendously powerful and configurable but may occasionally be slow and complicated.
    
    Turbopack, which was developed by the Webpack creators and is constructed in Rust, promises to be 700 times faster than the original Webpack (and 10x faster than Vite, a more modern alternative).
    
    Additional upgrades
    next/image:
    The new Image component in Next.js includes less client-side JavaScript, styling and configuration, and improved accessibility. In terms of code changes, the next/legacy/image import has been renamed to next/image, and the next/future/image import has been changed to next/image. A codemod is available to enable quick migration.
    
    next/font:
    You can use Google Fonts (or any other custom font) with the new @next/font without the browser submitting any queries. In addition to other static assets, CSS and font files are downloaded during build time.
    
    next/link:
    It is a novel font system that increases efficiency and privacy by providing automatic font optimization, the possibility to integrate custom fonts, and all of these features without using any outside network requests.
    
    Conclusion
    Next.js 13 undoubtedly is packed with several cool features and remarkable upgrades. But it’s so unfinished that it almost counts as an alpha. Even cutting-edge features from the most recent React, which are heavily utilised but are still in the RFC stage, are frequently not included.
    
    While I advise against utilising it in production, you should give it a shot.
    
    Build apps with reusable components like Lego`,
    imgUrl:
      'https://miro.medium.com/fit/c/224/224/1*WrZ3oOZAV16XbmOu0fmI6g.jpeg',
    tags: ['TailwindCss'],
    created_at: new Date('2023-02-03T23:02:06.407+00:00'),
    slug: 'Create_Web_Components_with_Lit_Element',
    creator: {
      imgUrl:
        'https://miro.medium.com/fit/c/176/176/1*55KbukPZhXbLhvQ3QLpPGg.png',
      name: 'Frontend Team',
    },
  },
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Post>;

export const Defult = {};
export const WihoutCreator = { args: { creator: null } };
