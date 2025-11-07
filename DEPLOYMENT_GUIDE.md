# 🚀 Deployment Guide: Next.js to Cloudflare Pages with Functions

This comprehensive guide will walk you through deploying your Next.js application to Cloudflare Pages with Functions support.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Configuration](#configuration)
4. [Building the Project](#building-the-project)
5. [Deployment Process](#deployment-process)
6. [Verification Steps](#verification-steps)
7. [Troubleshooting](#troubleshooting)
8. [Advanced Configuration](#advanced-configuration)

## 🔧 Prerequisites

Before you begin, make sure you have:

- A Cloudflare account (sign up at [cloudflare.com](https://cloudflare.com))
- Node.js 18+ installed locally
- Git installed and configured
- Your project code pushed to a Git repository (GitHub, GitLab, etc.)

## 🚀 Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Wrangler CLI (Cloudflare's CLI tool)

```bash
npm install -g wrangler
```

Or use npx to run it without installing globally:

```bash
npx wrangler --version
```

### 3. Authenticate with Cloudflare

```bash
npx wrangler auth login
```

This will open a browser window to authenticate with your Cloudflare account.

## ⚙️ Configuration

### 1. Update Next.js Configuration

Your [`next.config.ts`](next.config.ts:1) is already configured for Cloudflare Pages with Functions:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  webpack: (config: any, { dev, isServer }: any) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/*'],
      };
    }
    
    // Fix for Cloudflare Pages with Functions
    if (!isServer && config.resolve) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure for Cloudflare Pages with Functions
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for Cloudflare Functions
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;
```

### 2. Update Wrangler Configuration

Your [`wrangler.toml`](wrangler.toml:1) is already set up with basic configuration:

```toml
name = "futuremedia-v1"
compatibility_date = "2024-11-07"
compatibility_flags = ["nodejs_compat"]

[env.production]
name = "futuremedia-v1-prod"

[env.preview]
name = "futuremedia-v1-preview"

# Environment variables for production
[env.production.vars]
NODE_ENV = "production"

# Environment variables for preview
[env.preview.vars]
NODE_ENV = "development"
```

### 3. Update Package.json Scripts

Add the following scripts to your [`package.json`](package.json:5) if they don't already exist:

```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start",
    "build:cloudflare": "next build",
    "preview": "wrangler pages dev .next",
    "deploy:preview": "wrangler pages deploy .next --env preview",
    "deploy:production": "wrangler pages deploy .next --env production"
  }
}
```

### 4. Database Configuration (Optional)

If you're using Prisma with SQLite (as configured in your project), you have two options:

#### Option A: Use Cloudflare D1 (Recommended)

1. Create a D1 database:

```bash
npx wrangler d1 create futuremedia-db
```

2. Note the database ID from the output and update your [`wrangler.toml`](wrangler.toml:26):

```toml
# D1 database for SQLite
[[d1_databases]]
binding = "DB"
database_name = "futuremedia-db"
database_id = "your-database-id-here"
```

3. Update your [`prisma/schema.prisma`](prisma/schema.prisma:11):

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db" // For local development
}
```

4. Run migrations:

```bash
npx wrangler d1 migrations create futuremedia-db --config wrangler.toml
npx wrangler d1 migrations apply futuremedia-db --config wrangler.toml
```

#### Option B: Use External SQLite

If you prefer to use an external SQLite database, make sure it's accessible from your Cloudflare Functions.

### 5. Environment Variables

Create a `.env.local` file for local development:

```env
DATABASE_URL="file:./dev.db"
NODE_ENV="development"
```

For production, set these environment variables in your Cloudflare Pages dashboard:

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to Settings > Environment variables
4. Add the following variables:
   - `DATABASE_URL`: Your database connection string
   - `NODE_ENV`: `production`

## 🏗️ Building the Project

### 1. Generate Prisma Client

```bash
npx prisma generate
```

### 2. Build for Production

```bash
npm run build
```

This will create a `.next` directory with the optimized production build.

## 🚀 Deployment Process

### Option A: Deploy via Wrangler CLI

#### Deploy to Preview Environment

```bash
npm run deploy:preview
```

#### Deploy to Production Environment

```bash
npm run deploy:production
```

### Option B: Deploy via Cloudflare Dashboard (Git Integration)

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project" or select an existing project
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Node.js version**: `18` or higher
5. Add environment variables in the Settings tab
6. Deploy!

### Option C: Deploy with Custom Domain

1. After deploying, go to your project settings in Cloudflare Dashboard
2. Go to "Custom domains"
3. Add your custom domain
4. Update your DNS records as instructed by Cloudflare

## ✅ Verification Steps

### 1. Check Deployment Status

```bash
npx wrangler pages deployment list
```

### 2. Test Your Application

1. Visit your preview URL (ends in `.pages.dev`)
2. Check if all pages load correctly
3. Test API endpoints:
   - Health check: `https://your-domain.pages.dev/api/health`
4. Test any interactive features

### 3. Check Functions

If you have API routes, verify they're working:

```bash
curl https://your-domain.pages.dev/api/health
```

Expected response:
```json
{"message":"Good!"}
```

### 4. Monitor Logs

```bash
npx wrangler pages deployment tail [deployment-id]
```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Build Errors

**Issue**: TypeScript errors during build

**Solution**: The project is configured to ignore TypeScript build errors in [`next.config.ts`](next.config.ts:5). If you want to fix them:

```typescript
typescript: {
  ignoreBuildErrors: false, // Change to false to enforce type checking
},
```

#### 2. API Routes Not Working

**Issue**: API routes returning 404 or 500 errors

**Solution**: 
- Ensure your API routes are in the correct directory structure (`src/app/api/`)
- Check that your `output: 'export'` configuration in [`next.config.ts`](next.config.ts:35) is compatible with your API routes
- For full API support, consider using `output: 'standalone'` instead

#### 3. Database Connection Issues

**Issue**: Database connection errors

**Solution**:
- Verify your `DATABASE_URL` environment variable is correctly set
- If using D1, ensure your database is properly configured in [`wrangler.toml`](wrangler.toml:26)
- Check that your migrations have been applied

#### 4. Image Optimization Issues

**Issue**: Images not loading correctly

**Solution**: The project is configured with `images: { unoptimized: true }` in [`next.config.ts`](next.config.ts:37). If you want to use Cloudflare's image optimization:

1. Remove the `unoptimized: true` setting
2. Configure Cloudflare Image Resizing in your dashboard

#### 5. Function Timeout

**Issue**: Functions timing out

**Solution**:
- Optimize your function code for performance
- Consider increasing the timeout limit in your Cloudflare settings
- For long-running operations, consider using Cloudflare Workers instead

#### 6. Environment Variables Not Available

**Issue**: Environment variables not accessible in your application

**Solution**:
- Ensure variables are added in the correct environment (preview/production)
- Use `process.env.VARIABLE_NAME` to access variables in your code
- For client-side variables, prefix with `NEXT_PUBLIC_`

## 🎯 Advanced Configuration

### 1. Custom Domain Setup

1. Add your domain in Cloudflare Pages dashboard
2. Update DNS records as instructed
3. Configure SSL (automatically handled by Cloudflare)

### 2. Caching Strategy

Add caching headers to your API routes:

```typescript
// src/app/api/example/route.ts
export async function GET() {
  return NextResponse.json(
    { data: "example" },
    { 
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}
```

### 3. Analytics Integration

Add Cloudflare Analytics:

1. Go to your project settings
2. Enable Web Analytics
3. Add the analytics script to your [`src/app/layout.tsx`](src/app/layout.tsx:1)

### 4. Performance Optimization

1. Enable Cloudflare's Auto Minify in settings
2. Configure Brotli compression
3. Use Cloudflare's CDN features for static assets

### 5. Security Headers

Add security headers in your [`next.config.ts`](next.config.ts:3):

```typescript
const nextConfig: NextConfig = {
  // ... other config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## 🔄 Continuous Deployment

Set up automatic deployments:

1. Connect your Git repository to Cloudflare Pages
2. Configure deployment triggers:
   - Deploy on every push to main branch (production)
   - Deploy on every push to dev branch (preview)
3. Set up branch protection rules in your Git repository

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

## 🎉 Conclusion

You've successfully deployed your Next.js application to Cloudflare Pages with Functions! Your application is now running on Cloudflare's global network with:

- ⚡ Lightning-fast performance
- 🔒 Built-in security
- 🌍 Global CDN
- 🔄 Automatic deployments
- 📊 Analytics and monitoring

For any issues or questions, refer to the troubleshooting section or consult the official documentation.