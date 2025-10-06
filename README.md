This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker Deployment

This project includes Docker support for containerized deployment.

### Building and Running with Docker

```bash
# Build the Docker image
docker build -t chokchai-portfolio .

# Run the container
docker run -p 3000:3000 chokchai-portfolio
```

### GitHub Actions CI/CD Pipeline

This repository includes a GitHub Actions workflow that automatically builds and pushes Docker images to Docker Hub when code is pushed to the main branch.

#### Setting up Docker Hub Integration

To enable automatic Docker image publishing, you need to set up the following secrets in your GitHub repository:

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add the following repository secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub access token (recommended) or password

#### Creating a Docker Hub Access Token (Recommended)

1. Log in to [Docker Hub](https://hub.docker.com/)
2. Go to Account Settings → Security
3. Click "New Access Token"
4. Give it a descriptive name (e.g., "GitHub Actions")
5. Copy the generated token and use it as `DOCKER_PASSWORD` secret

#### Workflow Features

- Builds Docker images for multiple architectures (linux/amd64, linux/arm64)
- Pushes images only on pushes to main branch (not on pull requests)
- Uses Docker layer caching for faster builds
- Tags images with branch name, commit SHA, and "latest" for main branch
- Only builds on pull requests without pushing to registry

The workflow will create images with tags like:
- `your-username/chokchai-portfolio:latest`
- `your-username/chokchai-portfolio:main`
- `your-username/chokchai-portfolio:main-abc1234`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
