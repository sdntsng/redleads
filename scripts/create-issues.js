#!/usr/bin/env node

/**
 * Script to create GitHub issues for RedLeads project
 * Run: node scripts/create-issues.js
 */

const { execSync } = require('child_process');

const issues = [
  // Phase 1: MVP Foundation
  {
    title: "[TASK] Set up development environment and CI/CD pipeline",
    body: `## Description
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
- \`docker-compose.yml\`
- \`.github/workflows/ci.yml\`
- \`.github/workflows/deploy.yml\`
- \`package.json\` scripts
- Development documentation

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 1-2
- **Estimated Time**: 16 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "infrastructure", "high-priority"]
  },
  
  {
    title: "[TASK] Initialize database schema and basic authentication system",
    body: `## Description
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
- \`backend/database/schema.sql\`
- \`backend/models/User.js\`
- \`backend/middleware/auth.js\`
- \`backend/routes/auth.js\`
- \`backend/migrations/\`

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 1-2
- **Estimated Time**: 20 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "backend", "database", "high-priority"]
  },

  {
    title: "[TASK] Reddit API integration and basic monitoring setup",
    body: `## Description
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
- \`backend/reddit-monitor/reddit-client.py\`
- \`backend/reddit-monitor/monitor.py\`
- \`backend/services/reddit-service.js\`
- \`backend/utils/rate-limiter.js\`

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 1-2
- **Estimated Time**: 24 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "backend", "reddit-api", "high-priority"]
  },

  {
    title: "[TASK] Implement core Reddit monitoring and data collection",
    body: `## Description
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
- \`backend/reddit-monitor/stream-monitor.py\`
- \`backend/models/RedditPost.js\`
- \`backend/jobs/monitor-job.js\`
- \`backend/utils/keyword-matcher.js\`

## Dependencies
- Requires: #2 (Database schema)
- Requires: #3 (Reddit API integration)

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 3-4
- **Estimated Time**: 32 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "backend", "monitoring", "high-priority"]
  },

  {
    title: "[TASK] Set up frontend application with React/Next.js",
    body: `## Description
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
- \`frontend/package.json\`
- \`frontend/tailwind.config.js\`
- \`frontend/src/components/Layout.js\`
- \`frontend/src/hooks/useAuth.js\`
- \`frontend/src/utils/api-client.js\`

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 5-6
- **Estimated Time**: 20 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "frontend", "setup", "high-priority"]
  },

  {
    title: "[TASK] Create lead feed UI with filtering and management actions",
    body: `## Description
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
- \`frontend/src/components/LeadFeed.js\`
- \`frontend/src/components/LeadCard.js\`
- \`frontend/src/components/LeadFilters.js\`
- \`frontend/src/components/LeadModal.js\`

## Dependencies
- Requires: #5 (Frontend setup)
- Requires: #4 (Reddit monitoring)

## Phase & Timeline
- **Phase**: 1
- **Sprint Week**: 5-6
- **Estimated Time**: 28 hours
- **Priority**: High`,
    labels: ["task", "phase-1", "frontend", "leads", "high-priority"]
  }
];

// Create labels first
const labels = [
  { name: "task", description: "Development task", color: "0052cc" },
  { name: "feature", description: "New feature request", color: "84b6eb" },
  { name: "bug", description: "Bug report", color: "d73a4a" },
  { name: "phase-1", description: "Phase 1: MVP Foundation", color: "0e8a16" },
  { name: "phase-2", description: "Phase 2: AI Integration", color: "1d76db" },
  { name: "phase-3", description: "Phase 3: Response Generation", color: "5319e7" },
  { name: "phase-4", description: "Phase 4: Premium Features", color: "e99695" },
  { name: "phase-5", description: "Phase 5: Launch & Growth", color: "f9d0c4" },
  { name: "backend", description: "Backend development", color: "d4c5f9" },
  { name: "frontend", description: "Frontend development", color: "c5def5" },
  { name: "infrastructure", description: "Infrastructure and DevOps", color: "f9c513" },
  { name: "high-priority", description: "High priority task", color: "b60205" },
  { name: "medium-priority", description: "Medium priority task", color: "fbca04" },
  { name: "low-priority", description: "Low priority task", color: "0e8a16" }
];

function createLabels() {
  console.log('Creating GitHub labels...');
  labels.forEach(label => {
    try {
      execSync(\`gh label create "\${label.name}" --description "\${label.description}" --color "\${label.color}"\`, { stdio: 'inherit' });
    } catch (error) {
      console.log(\`Label \${label.name} already exists or error occurred\`);
    }
  });
}

function createIssues() {
  console.log('Creating GitHub issues...');
  issues.forEach((issue, index) => {
    const labelsString = issue.labels.join(',');
    const bodyFile = \`/tmp/issue-body-\${index}.md\`;
    
    // Write body to temporary file
    require('fs').writeFileSync(bodyFile, issue.body);
    
    try {
      execSync(\`gh issue create --title "\${issue.title}" --body-file "\${bodyFile}" --label "\${labelsString}"\`, { stdio: 'inherit' });
      console.log(\`✅ Created issue: \${issue.title}\`);
    } catch (error) {
      console.error(\`❌ Failed to create issue: \${issue.title}\`);
      console.error(error.message);
    }
    
    // Clean up temp file
    require('fs').unlinkSync(bodyFile);
  });
}

// Main execution
console.log('🚀 Setting up GitHub repository for RedLeads...');

try {
  // Check if gh CLI is authenticated
  execSync('gh auth status', { stdio: 'pipe' });
  
  createLabels();
  createIssues();
  
  console.log('✅ All issues created successfully!');
  console.log('🔗 View issues at: https://github.com/sdntsng/redleads/issues');
  
} catch (error) {
  console.error('❌ Error: GitHub CLI not authenticated or repository not found');
  console.error('Please run: gh auth login');
  console.error('And ensure you have created the repository: https://github.com/sdntsng/redleads');
}