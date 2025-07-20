# RedLeads Setup Instructions

## 🚀 Quick Start Guide

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `redleads`
3. Owner: `sdntsng`
4. Description: "AI-Powered Reddit Lead Generation and Engagement Platform"
5. Set to **Public**
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### 2. Push Local Code to GitHub

```bash
# Navigate to project directory
cd /home/sid/redleads

# Add remote repository
git remote add origin https://github.com/sdntsng/redleads.git

# Push code to GitHub
git push -u origin main
```

### 3. Set up GitHub Issues and Labels

Option A: Use GitHub CLI (if authenticated):
```bash
# Install and authenticate GitHub CLI
gh auth login

# Run the automated script
node scripts/create-issues.js
```

Option B: Manual setup:
1. Create labels manually using the label list in `docs/github-issues.md`
2. Create issues one by one using the issue templates in `.github/ISSUE_TEMPLATE/`

### 4. Development Environment Setup

```bash
# Clone repository (if working from different machine)
git clone https://github.com/sdntsng/redleads.git
cd redleads

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Install dependencies
npm run install:all

# Start development environment
npm run docker:up
npm run dev
```

### 5. Required Environment Variables

Before starting development, you'll need to obtain:

1. **Reddit API Credentials**:
   - Go to https://www.reddit.com/prefs/apps
   - Create a new application
   - Get CLIENT_ID and CLIENT_SECRET

2. **OpenAI API Key**:
   - Visit https://platform.openai.com/api-keys
   - Create a new API key

3. **SendGrid API Key** (for emails):
   - Sign up at https://sendgrid.com
   - Get API key from dashboard

4. **Stripe Keys** (for payments):
   - Create account at https://stripe.com
   - Get publishable and secret keys

### 6. Project Structure Overview

```
redleads/
├── 📁 backend/              # Backend API services
│   ├── 📁 api/             # Main REST API
│   ├── 📁 reddit-monitor/  # Reddit monitoring service
│   ├── 📁 ai-service/      # AI scoring and response generation
│   └── 📁 shared/          # Shared utilities
├── 📁 frontend/            # React/Next.js web application
├── 📁 docs/                # Project documentation
├── 📁 scripts/             # Utility scripts
├── 📁 .github/             # GitHub workflows and templates
├── 📄 docker-compose.yml   # Local development environment
├── 📄 package.json         # Root package configuration
└── 📄 README.md           # Project overview
```

### 7. Development Workflow

1. **Pick an Issue**: Start with Phase 1 issues
2. **Create Branch**: `git checkout -b feature/issue-name`
3. **Develop**: Follow the acceptance criteria
4. **Test**: Run tests before committing
5. **Commit**: Use conventional commit messages
6. **Push**: `git push origin feature/issue-name`
7. **PR**: Create pull request for review

### 8. Available Commands

```bash
# Development
npm run dev              # Start full development environment
npm run dev:backend      # Start only backend
npm run dev:frontend     # Start only frontend

# Docker
npm run docker:up        # Start Docker containers
npm run docker:down      # Stop Docker containers

# Database
npm run migrate          # Run database migrations
npm run seed             # Seed database with sample data

# Testing
npm test                 # Run all tests
npm run test:backend     # Backend tests only
npm run test:frontend    # Frontend tests only

# Building
npm run build            # Build for production
npm start               # Start production server
```

### 9. Next Steps

1. **Phase 1 Priority Issues** (Start here):
   - Issue #1: Development environment setup
   - Issue #2: Database schema and authentication
   - Issue #3: Reddit API integration

2. **Team Setup**:
   - Add team members to repository
   - Set up project board in GitHub
   - Configure branch protection rules

3. **Monitoring Setup**:
   - Set up error tracking (Sentry)
   - Configure logging and monitoring
   - Set up deployment pipeline

### 10. Getting Help

- 📖 **Documentation**: Check `docs/` folder
- 🐛 **Issues**: Use GitHub issue templates
- 💬 **Discussions**: GitHub Discussions for questions
- 📧 **Contact**: Create issue with `question` label

---

**Ready to start building? Begin with Issue #1! 🚀**