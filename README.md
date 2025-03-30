# RAG Database Frontend
Tech Stack: NextJS App Router, Typescript, Tailwind CSS, Supabase Auth, Supabase Middleware, React, Vercel

# About
* Currently deployed on [https://rag-database-website-t3i7.vercel.app/](https://rag-database-website-t3i7.vercel.app/), site is probably not usable because cloud services cost money and the docker images are big 😔
* NextJS SSR and SSG pages for the website
* Uses Typescript and Tailwind for best practices
* Tested Supabase Authentication and Middleware for sign-in purposes
* Created custom Authentication, Client and Service Instance, and Middleware, more explanation below
* Created API endpoints to fetch from the deployed backend (as free vercel also doesn't have the memory for sentences_transformers 😔)
* Initially used prisma, but reverted after learning that Python had no prisma support
* Follows NextJS App Router best practices

# Authentication
* Created custom authentication and middleware components, similar to supabase, in the `utils/custom` folder
* Middleware follows a similar structure to Supabase
* User data is saved on an instance created on the frontend, data is transferred, authenticated, and sent back on the backend
* Data is stored on a JWT encrypted key on the frontend, with current data stored as a JSON object, similar to cookies
* Uses backend API endpoints for data transfer, refer to the repo linked below for more details

# Deployment
* Run `npm run dev` to run it on the localhost

<sub>hatsune miku<sub/>

#### Refer to [RAG_Database_Backend](https://github.com/EYXLiu/RAG_Database_Backend) for the Python APIs
