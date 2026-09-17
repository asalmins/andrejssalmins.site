# Andrejs Salmins - Finance Consulting Site

This is a Next.js website for Strategic Finance & Accounting Consulting services.

## Files included:

- `package.json` - Project configuration and dependencies
- `pages/index.js` - Main website page
- `.gitignore` - Files to exclude from git
- `vercel.json` - Vercel deployment configuration
- `README.md` - This file

## How to deploy to Vercel

### Step 1: Upload all files to GitHub

1. Go to your GitHub repository that you created
2. Click "Add file" → "Upload files"
3. Drag and drop or select ALL these files:
   - `package.json`
   - `.gitignore`
   - `vercel.json`
   - `README.md`
   - The entire `pages` folder (with `index.js` inside)

4. At the bottom, click "Commit changes"

### Step 2: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click "Add New..." → "Project"
4. Click "Import Git Repository"
5. Select your GitHub account and the repository you just created
6. Click "Import"
7. Vercel will auto-detect Next.js and build automatically
8. Click "Deploy"
9. Your site will be live in ~1-2 minutes at a Vercel URL (like `finance-site.vercel.app`)

### Step 3: Connect your GoDaddy domain

1. After deployment, go to your project settings in Vercel
2. Click "Domains"
3. Enter your domain name (from GoDaddy)
4. Vercel will provide DNS records to add
5. Go to your GoDaddy account and add those DNS records
6. Wait 5-15 minutes for propagation
7. Your site will be accessible at your domain!

## Making edits

To edit the website after deployment:

1. Edit the files in GitHub directly (click the file, then edit)
2. Commit changes
3. Vercel automatically rebuilds and deploys within seconds

Or hire a developer to make changes for you.

## Questions?

This is a Next.js project using React. Any Next.js developer can maintain or modify it.
