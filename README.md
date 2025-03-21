# RAG Database Frontend
Tech Stack: NextJS, Typescript, Tailwind CSS, Supabase Auth, Supabase Middleware, React

# About
* Currently deployed on [https://rag-database-website-t3i7.vercel.app/](https://rag-database-website-t3i7.vercel.app/), site is probably down because cloud services cost money and the docker images are big 😔
* NextJS SSR and SSG pages for the website
* Uses Typescript and Tailwind for best practices
* Uses Supabase Authentication and Middleware for sign-in purposes, to allow for users to save information that is private or not meant for public access (onto my supabase so please don't)
* Wrote middleware for both authentication, as well as checking if backend is down (I'm broke and the sentences_transformers file that is used for embeddings is very big 😔) - `.vercelignore` has the two pages which use sentence_transformers for that reason
* Created API endpoints to fetch from the deployed backend (as free vercel also doesn't have the memory for sentences_transformers 😔)
* Initially used prisma, but reverted after learning that Python had no prisma support
* Follows NextJS App Router best practices

# Deployment
* Run `npm run dev` to run it on the localhost

<sub>hatsune miku<sub/>

#### Refer to [RAG_Database_Backend](https://github.com/EYXLiu/RAG_Database_Backend) for the Python APIs
