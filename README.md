![Alt text](Screencastfrom21202401170520-ezgif.com-video-to-gif-converter.gif?raw=true "Title")
# User stories

- Create a User Portfolio Management App according to the design. 
- By default, users are asked to sign in. 
- On 'Sign In' Page, users can choose login with Github or by email and password. 
- On 'Sign In' Page, users can select the 'forgot password' option and be redirected to the 'Forgot password' page 
- On 'Forgot Password' page, user can enter their email and get a magic link after selecting the 'Reset Password' button. 
- When users select the magic link, they are redirected to the 'Choose new password' page. 
- On 'Choose new password' page, users can enter a new password with the requirements given in the design. 
- On 'Profile setting' page, logged-in users can update their profile image, job title, name, and bio.
- On 'Projects setting' page, logged-in users can add new projects with project name, demo URL, repository URL, and description. 
- On 'Projects setting' page, logged-in users can edit added projects.
- On 'Portfolio' page, users can see the name, job title, bio, and the projects. 
- On 'Portfolio' page, others can send the user an email by selecting the contact button. 
- Deploy the solution and submit Repository URL and Demo URL.


# Stack
- [Next.js](https://nextjs.org)
- [Typescript]
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## ho to run project
```bash
# dev mode 
npx prisma migrate dev
npm run dev
# production mode
npx prisma migrate deploy
npm run build
npm start
