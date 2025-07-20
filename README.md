# RedLeads 🎯

> AI-Powered Reddit Lead Generation and Engagement Platform

RedLeads is a comprehensive platform that monitors Reddit for relevant business conversations, scores leads using AI, and helps generate appropriate responses to convert discussions into customers.

## 🚀 Features

### Core Functionality
- **Real-time Reddit Monitoring**: Continuously scan subreddits for relevant posts and discussions
- **AI-Powered Lead Scoring**: 0-100% relevance scoring using advanced NLP models
- **Smart Lead Management**: Dashboard to track, filter, and manage potential leads
- **Response Generation**: AI-powered response suggestions that follow Reddit best practices
- **Auto-posting Capabilities**: Automated posting with safety controls and rate limiting

### Key Benefits
- **Higher Quality Leads**: AI filtering eliminates noise and focuses on high-intent prospects
- **Time Savings**: Automated monitoring and response generation saves hours daily
- **Reddit Compliance**: Built-in safety controls ensure Reddit TOS compliance
- **Analytics & Insights**: Track performance, ROI, and lead conversion metrics

## 🏗️ Architecture

```
Frontend (React/Next.js) ←→ API Gateway ←→ Microservices
                                              ├── Reddit Monitor Service
                                              ├── AI Scoring Service  
                                              ├── Response Generator
                                              └── Notification Service
```

## 🛠️ Tech Stack

**Backend:**
- Node.js/Express.js for API services
- Python for Reddit monitoring and AI integration
- PostgreSQL for primary data storage
- Redis for caching and session management
- Docker for containerization

**Frontend:**
- React/Next.js for web application
- TailwindCSS for styling
- WebSocket for real-time updates

**AI & Integrations:**
- OpenAI GPT-4 for lead scoring and response generation
- Reddit API (PRAW) for monitoring and posting
- Stripe for subscription management

## 📁 Project Structure

```
redleads/
├── backend/                 # Backend services
│   ├── api/                # Main API service
│   ├── reddit-monitor/     # Reddit monitoring service
│   ├── ai-service/         # AI scoring and response generation
│   └── shared/             # Shared utilities and types
├── frontend/               # React/Next.js web app
├── docs/                   # Documentation
├── scripts/                # Deployment and utility scripts
└── .github/                # GitHub workflows and templates
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 14+
- Redis 6+
- Docker & Docker Compose

### Environment Setup
1. Clone the repository
2. Copy `.env.example` to `.env` and configure variables
3. Install dependencies: `npm run install:all`
4. Start services: `docker-compose up -d`
5. Run migrations: `npm run migrate`
6. Start development: `npm run dev`

## 📋 Development Phases

### Phase 1: MVP Foundation (Weeks 1-6)
- [x] Project setup and infrastructure
- [ ] Reddit monitoring engine
- [ ] Basic lead management dashboard
- [ ] Email notifications

### Phase 2: AI Integration (Weeks 7-12)
- [ ] AI-powered lead scoring
- [ ] Advanced dashboard with analytics
- [ ] User feedback system

### Phase 3: Response Generation (Weeks 13-20)
- [ ] AI response generation
- [ ] Auto-posting capabilities
- [ ] Template management

### Phase 4: Premium Features (Weeks 21-28)
- [ ] Subscription and billing
- [ ] Team collaboration
- [ ] Advanced analytics

### Phase 5: Launch & Growth (Weeks 29-36)
- [ ] Beta testing
- [ ] Public launch
- [ ] Growth optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/sdntsng/redleads/issues)
- Discussions: [GitHub Discussions](https://github.com/sdntsng/redleads/discussions)

---

Built with ❤️ for the Reddit community