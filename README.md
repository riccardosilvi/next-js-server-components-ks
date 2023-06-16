## React Server Components with NextJS KS

## About

The app aims to showoff at the /movies route the basics how Server Components:
- fetch multiple data sources at once ( app/movies/page.tsx )
- render a server component that fetches data without blocking the first render of the Page ( app/movies/charachter.tsx )
- render a Server component as a child of a Client component (app/does-work-children-inside-client.tsx)
- Client components only apis (context api and react hooks) in app/movies/planets.tsx and sub-components
- how to setup a Context Provider in a Server Component (app/movies/layout.tsx)

It is based off Next JS doc:
- [React Essentials](https://nextjs.org/docs/getting-started/react-essentials) which explains the basics of React Server Components and how to use them in conjunction with Client Components.
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) which explains how to fetch data effectively in Next JS with Server Components

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/movies](http://localhost:3000/movies) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
