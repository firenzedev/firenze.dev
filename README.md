# firenze.dev 

> the website https://firenze.dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses React and TypeScript.

## Getting Started

First, run the development server:

```bash
yarn dev
# or
npm run dev
#prefer yarn
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## scripts 

```bash
yarn pretty
#npm run pretty
```

format source code

## Contribute 

Non vediamo l'ora che tu contribuisca a questo progetto. 

Per ogni informazione puoi contattarci su discord, ti risponderemo e ti daremo supporto, puoi usare questo invito: https://discord.com/invite/fZMUd9KCQA

### Technical information

The technolgies used in this project are: 
* Next.js
* TypeScript
* Tailwind css

### Before commit

Before committing run the command

```bash
yarn prettier
```

to format the source code.

### Deploy

The branch main is automatically deployed to https://firenze.dev 

when you open a Pull request, we make a preview deployement. So you can view anche check it from the pull request page.

### Commit style

You should use conventional commit messages: https://www.conventionalcommits.org/en/v1.0.0/ 

### Supabase
[Supabase cli](https://supabase.com/docs/guides/local-development/cli/getting-started)
Create migration 

```bash
supabase migration new migration_name
```

Start local db in docker

```bash
supabase start 
```
Test Migration in local Environment

```bash
supabase db reset
```
```bash
supabase migration up
```

Push change to remote db 

```bash
supabase db push
```
