# Deployment Instructions for Horizon Maritime Website

## Option 1: Deploy to Netlify (Recommended)

### Step 1: Upload to GitHub

The code is already in a git repository. To push to the GitHub repository you selected:

```bash
cd /home/ubuntu/horizon-maritime

# Add the GitHub repository as a remote
git remote add github https://github.com/hfouda25/aamoi-student-application.git

# Push the code
git push github main
```

If the branch is named differently, use:
```bash
git push github HEAD:main
```

### Step 2: Deploy on Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Select the repository: `hfouda25/aamoi-student-application`
5. Configure build settings (should auto-detect from `netlify.toml`):
   - **Build command**: `pnpm install && pnpm build`
   - **Publish directory**: `dist/public`
   - **Node version**: 22
6. Click "Deploy site"

Your site will be live at `https://[random-name].netlify.app`

You can customize the domain in Netlify settings.

## Option 2: Manual Build and Deploy

### Build Locally

```bash
cd /home/ubuntu/horizon-maritime
pnpm install
pnpm build
```

The production files will be in `dist/public/`

### Deploy to Any Static Host

Upload the contents of `dist/public/` to:
- **Vercel**: Drag and drop the folder
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload to S3 bucket with static hosting
- **Any web host**: Upload via FTP/SFTP

## Environment Variables

This is a static site with no backend, so no environment variables are required for deployment.

## Custom Domain

### On Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Troubleshooting

### Build fails on Netlify
- Ensure Node version is set to 22 in `netlify.toml`
- Check that pnpm is being used (not npm)

### 404 errors on page refresh
- The `netlify.toml` includes redirects configuration
- For other hosts, configure server to redirect all routes to `index.html`

### Images not loading
- All images use CDN URLs, no local images to upload
- Ensure the CDN URLs are accessible from your deployment

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits (shows success toast)
- [ ] Responsive design works on mobile
- [ ] All images load properly
- [ ] Custom domain configured (if applicable)

## Support

For deployment issues, refer to:
- Netlify docs: https://docs.netlify.com/
- Project README: README.md
