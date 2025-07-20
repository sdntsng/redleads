# GitHub Issues for RedLeads Project

## Phase 1: MVP Foundation (Weeks 1-6)

### Week 1-2: Project Setup & Infrastructure

**Issue #1: Set up development environment and CI/CD pipeline**
```
Title: [TASK] Set up development environment and CI/CD pipeline
Labels: task, phase-1, infrastructure
Priority: High
Phase: 1
Estimated Time: 16 hours

## Description
Set up the foundational development environment including Docker containers, CI/CD pipeline, and development tools.

## Acceptance Criteria
- [ ] Docker Compose configuration for all services
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Development environment setup documentation
- [ ] Environment variables configuration
- [ ] Local development workflow documented

## Technical Requirements
- [ ] Docker Compose with PostgreSQL, Redis, backend, frontend
- [ ] GitHub Actions for testing and deployment
- [ ] ESLint, Prettier, and code formatting setup
- [ ] Environment configuration management
- [ ] Hot reload for development

## Files/Components
- `docker-compose.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`
- `package.json` scripts
- Development documentation
```

**Issue #2: Initialize database schema and basic authentication**
```
Title: [TASK] Initialize database schema and basic authentication system
Labels: task, phase-1, backend, database
Priority: High
Phase: 1
Estimated Time: 20 hours

## Description
Create the foundational database schema and implement JWT-based authentication system.

## Acceptance Criteria
- [ ] PostgreSQL database schema setup
- [ ] User authentication with JWT
- [ ] Password hashing and security
- [ ] Database migrations system
- [ ] Basic user registration and login endpoints

## Technical Requirements
- [ ] Database schema for users, products, leads tables
- [ ] Prisma or TypeORM setup
- [ ] JWT token generation and validation
- [ ] Password hashing with bcrypt
- [ ] Database migration scripts

## Files/Components
- `backend/database/schema.sql`
- `backend/models/User.js`
- `backend/middleware/auth.js`
- `backend/routes/auth.js`
- `backend/migrations/`
```

**Issue #3: Reddit API integration setup**
```
Title: [TASK] Reddit API integration and basic monitoring setup
Labels: task, phase-1, backend, reddit-api
Priority: High
Phase: 1
Estimated Time: 24 hours

## Description
Integrate with Reddit API using PRAW and create basic monitoring functionality.

## Acceptance Criteria
- [ ] Reddit API authentication setup
- [ ] PRAW library integration
- [ ] Basic subreddit monitoring
- [ ] Rate limiting implementation
- [ ] Error handling and retry logic

## Technical Requirements
- [ ] Reddit OAuth application setup
- [ ] PRAW Python client configuration
- [ ] Rate limiting (60 requests/minute)
- [ ] Reddit post data collection
- [ ] Basic keyword matching logic

## Files/Components
- `backend/reddit-monitor/reddit-client.py`
- `backend/reddit-monitor/monitor.py`
- `backend/services/reddit-service.js`
- `backend/utils/rate-limiter.js`
```

### Week 3-4: Reddit Monitoring Engine

**Issue #4: Core Reddit monitoring and data collection**
```
Title: [TASK] Implement core Reddit monitoring and data collection
Labels: task, phase-1, backend, monitoring
Priority: High
Phase: 1
Estimated Time: 32 hours

## Description
Build the core Reddit monitoring engine that continuously scans subreddits for relevant posts.

## Acceptance Criteria
- [ ] Continuous monitoring of specified subreddits
- [ ] Post data extraction and storage
- [ ] Keyword matching algorithm
- [ ] Data normalization and cleaning
- [ ] Background job processing

## Technical Requirements
- [ ] Real-time Reddit post streaming
- [ ] Post content analysis and extraction
- [ ] Database storage optimization
- [ ] Background job queue (Bull/Agenda)
- [ ] Monitoring health checks

## Files/Components
- `backend/reddit-monitor/stream-monitor.py`
- `backend/models/RedditPost.js`
- `backend/jobs/monitor-job.js`
- `backend/utils/keyword-matcher.js`
```

**Issue #5: Basic admin dashboard for monitoring health**
```
Title: [TASK] Create admin dashboard for monitoring system health
Labels: task, phase-1, frontend, admin
Priority: Medium
Phase: 1
Estimated Time: 16 hours

## Description
Build an admin dashboard to monitor the health and performance of the Reddit monitoring system.

## Acceptance Criteria
- [ ] System health metrics display
- [ ] Reddit API usage monitoring
- [ ] Error logs and alerts
- [ ] Performance metrics
- [ ] Manual monitoring controls

## Technical Requirements
- [ ] Real-time metrics dashboard
- [ ] API endpoint for system stats
- [ ] Error logging and display
- [ ] Manual start/stop controls
- [ ] Rate limiting status

## Files/Components
- `frontend/pages/admin/dashboard.js`
- `backend/routes/admin.js`
- `backend/middleware/admin-auth.js`
```

### Week 5-6: Basic Dashboard & Lead Management

**Issue #6: Frontend setup with React/Next.js**
```
Title: [TASK] Set up frontend application with React/Next.js
Labels: task, phase-1, frontend, setup
Priority: High
Phase: 1
Estimated Time: 20 hours

## Description
Initialize the frontend application with modern React/Next.js setup and basic routing.

## Acceptance Criteria
- [ ] Next.js application setup
- [ ] TailwindCSS styling configuration
- [ ] Basic routing and navigation
- [ ] Authentication integration
- [ ] Responsive design foundation

## Technical Requirements
- [ ] Next.js 14+ with App Router
- [ ] TailwindCSS configuration
- [ ] Authentication context/hooks
- [ ] API client setup (Axios/SWR)
- [ ] TypeScript configuration

## Files/Components
- `frontend/package.json`
- `frontend/tailwind.config.js`
- `frontend/src/components/Layout.js`
- `frontend/src/hooks/useAuth.js`
- `frontend/src/utils/api-client.js`
```

**Issue #7: Lead feed UI with filtering and actions**
```
Title: [TASK] Create lead feed UI with filtering and management actions
Labels: task, phase-1, frontend, leads
Priority: High
Phase: 1
Estimated Time: 28 hours

## Description
Build the main lead management interface where users can view, filter, and take actions on potential leads.

## Acceptance Criteria
- [ ] Lead list view with pagination
- [ ] Filtering by date, subreddit, keywords
- [ ] Lead action buttons (mark read, archive)
- [ ] Lead detail modal/view
- [ ] Responsive mobile design

## Technical Requirements
- [ ] Lead feed component with infinite scroll
- [ ] Advanced filtering controls
- [ ] Lead action handling
- [ ] Real-time updates with WebSocket
- [ ] Mobile-responsive design

## Files/Components
- `frontend/src/components/LeadFeed.js`
- `frontend/src/components/LeadCard.js`
- `frontend/src/components/LeadFilters.js`
- `frontend/src/components/LeadModal.js`
```

**Issue #8: User settings and keyword configuration**
```
Title: [TASK] Implement user settings and keyword configuration
Labels: task, phase-1, frontend, settings
Priority: High
Phase: 1
Estimated Time: 24 hours

## Description
Create user settings interface for configuring monitoring keywords, subreddits, and preferences.

## Acceptance Criteria
- [ ] Product information setup form
- [ ] Keyword management interface
- [ ] Subreddit selection and filtering
- [ ] Notification preferences
- [ ] Settings validation and save

## Technical Requirements
- [ ] Form validation and error handling
- [ ] Dynamic keyword addition/removal
- [ ] Subreddit autocomplete
- [ ] Settings API integration
- [ ] Real-time preview of changes

## Files/Components
- `frontend/src/pages/settings.js`
- `frontend/src/components/ProductSetup.js`
- `frontend/src/components/KeywordManager.js`
- `backend/routes/settings.js`
```

**Issue #9: Email notification system**
```
Title: [TASK] Implement email notification system for new leads
Labels: task, phase-1, backend, notifications
Priority: Medium
Phase: 1
Estimated Time: 16 hours

## Description
Set up email notification system to alert users about new high-quality leads.

## Acceptance Criteria
- [ ] Email template system
- [ ] SendGrid integration
- [ ] Notification preferences
- [ ] Email queue management
- [ ] Unsubscribe functionality

## Technical Requirements
- [ ] Email template engine
- [ ] SMTP/SendGrid configuration
- [ ] Background email jobs
- [ ] User notification preferences
- [ ] Email delivery tracking

## Files/Components
- `backend/services/email-service.js`
- `backend/templates/lead-notification.html`
- `backend/jobs/email-job.js`
```

## Phase 2: AI Integration & Scoring (Weeks 7-12)

### Week 7-8: AI Service Foundation

**Issue #10: OpenAI/Claude API integration setup**
```
Title: [TASK] Set up AI service with OpenAI/Claude API integration
Labels: task, phase-2, ai, backend
Priority: High
Phase: 2
Estimated Time: 20 hours

## Description
Create the AI service foundation with OpenAI and/or Claude API integration for lead scoring and analysis.

## Acceptance Criteria
- [ ] OpenAI API client setup
- [ ] Claude API integration (optional)
- [ ] API key management and rotation
- [ ] Error handling and fallbacks
- [ ] Cost monitoring and limits

## Technical Requirements
- [ ] AI service architecture design
- [ ] Multiple AI provider support
- [ ] Request/response logging
- [ ] Rate limiting and cost controls
- [ ] Prompt template system

## Files/Components
- `backend/ai-service/ai-client.js`
- `backend/ai-service/providers/openai.js`
- `backend/ai-service/providers/claude.js`
- `backend/ai-service/prompt-templates.js`
```

**Issue #11: Basic relevance scoring algorithm**
```
Title: [TASK] Implement basic AI-powered relevance scoring algorithm
Labels: task, phase-2, ai, algorithm
Priority: High
Phase: 2
Estimated Time: 32 hours

## Description
Develop the core algorithm that scores Reddit posts for lead generation relevance using AI.

## Acceptance Criteria
- [ ] 0-100% relevance scoring system
- [ ] Context-aware analysis
- [ ] Buying intent detection
- [ ] Quality scoring factors
- [ ] Score explanation generation

## Technical Requirements
- [ ] AI prompt engineering for scoring
- [ ] Multi-factor scoring algorithm
- [ ] Score normalization and calibration
- [ ] Reasoning/explanation generation
- [ ] Performance optimization

## Files/Components
- `backend/ai-service/scoring-engine.js`
- `backend/ai-service/score-calculator.js`
- `backend/models/LeadScore.js`
```

Continue with remaining issues...

## Quick Setup Commands

After creating the GitHub repository manually, run these commands:

```bash
# Add remote origin
git remote add origin https://github.com/sdntsng/redleads.git

# Push to GitHub
git push -u origin main

# Create labels for issues
gh label create "phase-1" --description "Phase 1: MVP Foundation" --color "0e8a16"
gh label create "phase-2" --description "Phase 2: AI Integration" --color "1d76db"
gh label create "phase-3" --description "Phase 3: Response Generation" --color "5319e7"
gh label create "phase-4" --description "Phase 4: Premium Features" --color "e99695"
gh label create "phase-5" --description "Phase 5: Launch & Growth" --color "f9d0c4"
```

## Issue Creation Script

You can use this script to create all issues at once:

```bash
# Run from project root
node scripts/create-issues.js
```