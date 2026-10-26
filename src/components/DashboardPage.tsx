import React, { useState } from 'react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { 
  User as UserIcon, Plus, Trash2, Send, CheckCircle2, 
  XCircle, Clock, Star, Award, BookOpen, MessageSquare, 
  Calendar, ArrowRight, TrendingUp, ShieldCheck,
  Check, Target, ChevronRight, Sparkles, GraduationCap,
  Layers, CheckSquare, Square, Flame
} from 'lucide-react';
import { SkillLevel, User, hasUserPhoto } from '../types';
import { ProgressRatingsPage } from './ProgressRatingsPage';

interface SkillProgressLevel {
  levelNumber: number;
  levelName: string;
  summary: string;
  checkpoints: { id: string; label: string; completed: boolean }[];
}

interface SkillProgressEntry {
  skillName: string;
  category: string;
  levels: SkillProgressLevel[];
}

const INITIAL_SKILL_PROGRESS: Record<string, SkillProgressEntry> = {
  Guitar: {
    skillName: 'Guitar',
    category: 'Music',
    levels: [
      {
        levelNumber: 1,
        levelName: 'Level 1: Beginner Open Chords & Strumming',
        summary: 'Standard open chords (E, A, D, G, C) and rhythm patterns.',
        checkpoints: [
          { id: 'gtr_1', label: 'E minor, A minor & C major finger accuracy', completed: true },
          { id: 'gtr_2', label: 'Steady 4/4 down-strumming with metronome', completed: true },
          { id: 'gtr_3', label: 'Play complete 3-chord song without hesitation', completed: true }
        ]
      },
      {
        levelNumber: 2,
        levelName: 'Level 2: Chord Transitions & Fingerpicking',
        summary: 'Fluid chord changes and acoustic fingerstyle patterns.',
        checkpoints: [
          { id: 'gtr_4', label: 'Fast transition between G major and D major (<1s)', completed: true },
          { id: 'gtr_5', label: 'Travis picking pattern on acoustic folk rhythms', completed: true },
          { id: 'gtr_6', label: 'Completed 1-on-1 peer exchange session with teacher', completed: true }
        ]
      },
      {
        levelNumber: 3,
        levelName: 'Level 3: Barre Chords & Music Theory Basics',
        summary: 'F major barre shape, pentatonic scales, and transposition.',
        checkpoints: [
          { id: 'gtr_7', label: 'Clean tone on 1st fret F major barre chord', completed: true },
          { id: 'gtr_8', label: 'Minor pentatonic scale across 2 octaves', completed: true },
          { id: 'gtr_9', label: 'Transpose song keys using guitar capo', completed: false }
        ]
      },
      {
        levelNumber: 4,
        levelName: 'Level 4: Advanced Solos & Performance Mastery',
        summary: 'Dynamic acoustic fingerstyle and solo improvisation.',
        checkpoints: [
          { id: 'gtr_10', label: 'Acoustic percussive slap & rhythmic tap technique', completed: false },
          { id: 'gtr_11', label: 'Improvise blues & rock solo over backing track', completed: false },
          { id: 'gtr_12', label: 'Earn SkillSwap Verified Peer Certificate for Guitar', completed: false }
        ]
      }
    ]
  },
  Python: {
    skillName: 'Python',
    category: 'Technology',
    levels: [
      {
        levelNumber: 1,
        levelName: 'Level 1: Fundamentals, Syntax & Loops',
        summary: 'Core Python syntax, variables, loops, and conditional logic.',
        checkpoints: [
          { id: 'py_1', label: 'Variables, data types and boolean logic expressions', completed: true },
          { id: 'py_2', label: 'Writing for/while loops and list comprehensions', completed: true },
          { id: 'py_3', label: 'CLI calculator script with defensive error handling', completed: true }
        ]
      },
      {
        levelNumber: 2,
        levelName: 'Level 2: Data Structures & Modular Code',
        summary: 'Dictionaries, sets, custom functions, and package imports.',
        checkpoints: [
          { id: 'py_4', label: 'Dictionary manipulation, nested JSON parsing & sorting', completed: true },
          { id: 'py_5', label: 'Writing pure functions with type hints and docstrings', completed: true },
          { id: 'py_6', label: 'Package structure with requirements.txt & virtualenv', completed: true }
        ]
      },
      {
        levelNumber: 3,
        levelName: 'Level 3: Object-Oriented Design & File I/O',
        summary: 'Classes, inheritance, exceptions, and API consumption.',
        checkpoints: [
          { id: 'py_7', label: 'Build OOP domain model with clean class inheritance', completed: true },
          { id: 'py_8', label: 'Fetch, parse and cache real REST API JSON responses', completed: true },
          { id: 'py_9', label: 'Automated CSV/Excel data processor script', completed: true }
        ]
      },
      {
        levelNumber: 4,
        levelName: 'Level 4: Backend REST APIs & Production Readiness',
        summary: 'FastAPI / Flask microservices, database ORMs, unit testing.',
        checkpoints: [
          { id: 'py_10', label: 'Deploy FastAPI REST endpoints with validation & docs', completed: true },
          { id: 'py_11', label: 'Connect database using SQLAlchemy and models', completed: true },
          { id: 'py_12', label: 'Dockerize application and automated test suite', completed: false }
        ]
      }
    ]
  },
  React: {
    skillName: 'React',
    category: 'Technology',
    levels: [
      {
        levelNumber: 1,
        levelName: 'Level 1: JSX, Props & Component Architecture',
        summary: 'Reusable functional components and props hierarchy.',
        checkpoints: [
          { id: 'rc_1', label: 'Create reusable functional components with TypeScript props', completed: true },
          { id: 'rc_2', label: 'Conditional rendering and mapping dynamic lists with keys', completed: true },
          { id: 'rc_3', label: 'Styling components with Tailwind CSS utility classes', completed: true }
        ]
      },
      {
        levelNumber: 2,
        levelName: 'Level 2: State Management & Component Lifecycle',
        summary: 'Mastering useState, useEffect, controlled inputs, and events.',
        checkpoints: [
          { id: 'rc_4', label: 'Complex form state with validation and real-time feedback', completed: true },
          { id: 'rc_5', label: 'useEffect dependency arrays, subscriptions and cleanup', completed: true },
          { id: 'rc_6', label: 'Interactive search filter catalog with dynamic tags', completed: false }
        ]
      },
      {
        levelNumber: 3,
        levelName: 'Level 3: Context API, Routing & Asynchronous Data',
        summary: 'Global state architectures, routing, and resilient API fetching.',
        checkpoints: [
          { id: 'rc_7', label: 'Implement React Context provider with reducer dispatch', completed: false },
          { id: 'rc_8', label: 'Custom query hook with loading, error & cache states', completed: false },
          { id: 'rc_9', label: 'Client-side routing with URL query params synchronization', completed: false }
        ]
      },
      {
        levelNumber: 4,
        levelName: 'Level 4: Production Optimization & Enterprise Patterns',
        summary: 'Code splitting, memoization, custom hooks, and testing.',
        checkpoints: [
          { id: 'rc_10', label: 'useMemo & useCallback optimization for expensive renders', completed: false },
          { id: 'rc_11', label: 'Custom TypeScript hooks library for common UI workflows', completed: false },
          { id: 'rc_12', label: 'Unit testing components with Vitest & Testing Library', completed: false }
        ]
      }
    ]
  },
  'Digital Marketing': {
    skillName: 'Digital Marketing',
    category: 'Business',
    levels: [
      {
        levelNumber: 1,
        levelName: 'Level 1: Marketing Funnels & Audience Strategy',
        summary: 'Customer journey mapping and core positioning.',
        checkpoints: [
          { id: 'dm_1', label: 'Construct detailed ICP (Ideal Customer Profile) persona', completed: true },
          { id: 'dm_2', label: 'Map awareness-to-retention full conversion funnel', completed: true },
          { id: 'dm_3', label: 'Formulate unique value proposition & brand messaging guide', completed: true }
        ]
      },
      {
        levelNumber: 2,
        levelName: 'Level 2: Organic Search & Content Architecture',
        summary: 'SEO keyword research, search intent, and high-converting content.',
        checkpoints: [
          { id: 'dm_4', label: 'Keyword search volume & intent mapping with difficulty analysis', completed: true },
          { id: 'dm_5', label: 'Technical on-page SEO audit (meta tags, schema, speed)', completed: true },
          { id: 'dm_6', label: 'Publish 3 pillar blog articles with internal topic clusters', completed: true }
        ]
      },
      {
        levelNumber: 3,
        levelName: 'Level 3: Paid Acquisition & Social Ads',
        summary: 'Meta Ads, Google Search Ads, creative testing, and ROAS.',
        checkpoints: [
          { id: 'dm_7', label: 'Configure Meta pixel, conversion tracking, and custom events', completed: true },
          { id: 'dm_8', label: 'Run A/B creative ad copy tests with pilot budget', completed: false },
          { id: 'dm_9', label: 'Calculate CAC, LTV:CAC ratio, and blended ROAS returns', completed: false }
        ]
      },
      {
        levelNumber: 4,
        levelName: 'Level 4: Growth Loops & Retention Analytics',
        summary: 'Email nurture automation, cohort analysis, and viral referral loops.',
        checkpoints: [
          { id: 'dm_10', label: 'Automate 5-part email nurture onboarding sequence', completed: false },
          { id: 'dm_11', label: 'Cohort retention analysis via Google Analytics 4', completed: false },
          { id: 'dm_12', label: 'Design peer-to-peer referral loop incentive mechanism', completed: false }
        ]
      }
    ]
  }
};

const generateFallbackSkillProgress = (name: string, category = 'General'): SkillProgressEntry => {
  return {
    skillName: name,
    category,
    levels: [
      {
        levelNumber: 1,
        levelName: `Level 1: Beginner Fundamentals in ${name}`,
        summary: `Core terminology, basic concepts, and introductory foundations for ${name}.`,
        checkpoints: [
          { id: `${name}_1`, label: `Master fundamental syntax and key terms in ${name}`, completed: true },
          { id: `${name}_2`, label: `Complete initial hands-on exercise with peer mentor`, completed: true },
          { id: `${name}_3`, label: `Create a starter playground project or workflow draft`, completed: true }
        ]
      },
      {
        levelNumber: 2,
        levelName: `Level 2: Intermediate Tools & Practice`,
        summary: `Practical exercises, standard tools, and workflow fluency.`,
        checkpoints: [
          { id: `${name}_4`, label: `Build an intermediate project incorporating best practices`, completed: true },
          { id: `${name}_5`, label: `Review code/deliverables with an expert peer in session`, completed: false },
          { id: `${name}_6`, label: `Pass intermediate skill competency checkpoint`, completed: false }
        ]
      },
      {
        levelNumber: 3,
        levelName: `Level 3: Real-World Applications & Peer Swaps`,
        summary: `Collaborative problem solving and production-grade delivery.`,
        checkpoints: [
          { id: `${name}_7`, label: `Deliver complete end-to-end assignment or live demonstration`, completed: false },
          { id: `${name}_8`, label: `Teach or explain a core technique to another learner`, completed: false },
          { id: `${name}_9`, label: `Resolve challenging troubleshooting edge cases`, completed: false }
        ]
      },
      {
        levelNumber: 4,
        levelName: `Level 4: Advanced Mastery & Credential Proof`,
        summary: `Industry-grade execution and verified skill credential.`,
        checkpoints: [
          { id: `${name}_10`, label: `Complete complex capstone project evaluated by mentors`, completed: false },
          { id: `${name}_11`, label: `Publish public repository or portfolio artifact`, completed: false },
          { id: `${name}_12`, label: `Receive verified SkillSwap peer certificate of mastery`, completed: false }
        ]
      }
    ]
  };
};

interface DashboardPageProps {
  onSelectUserForSwap?: (user: User) => void;
  onOpenUserProfile?: (user: User) => void;
  initialTab?: 'requests' | 'skills' | 'progress' | 'history';
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onSelectUserForSwap,
  onOpenUserProfile,
  initialTab
}) => {
  const { 
    currentUser, swapRequests, respondToSwapRequest, 
    addSkill, removeSkill, 
    sessions, reviews, certificates, setActiveView, users,
    peerRatingFactors, improvementSuggestions, skillGapAnalysis
  } = useSkillSwap();

  const [activeTab, setActiveTab] = useState<'requests' | 'skills' | 'progress' | 'history'>(initialTab || 'requests');

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Skill Add Form State
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillType, setNewSkillType] = useState<'Teach' | 'Learn'>('Teach');
  const [newSkillLevel, setNewSkillLevel] = useState<SkillLevel>('Intermediate');

  if (!currentUser) return null;

  // Requests filtered for current user
  const receivedRequests = swapRequests.filter(r => r.receiverId === currentUser.id);
  const sentRequests = swapRequests.filter(r => r.senderId === currentUser.id);

  const mySessions = sessions.filter(s => s.teacherId === currentUser.id || s.learnerId === currentUser.id);
  const myReviews = reviews.filter(r => r.receiverId === currentUser.id);
  const myCertificates = certificates.filter(c => c.userId === currentUser.id);

  const handleAddSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    addSkill(newSkillName.trim(), newSkillLevel, newSkillType);
    setNewSkillName('');
  };

  // Interactive Skill Progress & Percentage Tracker State
  const [skillProgressMap, setSkillProgressMap] = useState<Record<string, SkillProgressEntry>>(INITIAL_SKILL_PROGRESS);
  const [selectedProgressSkill, setSelectedProgressSkill] = useState<string>(
    currentUser?.learnSkills[0]?.skillName || 'Guitar'
  );

  // Toggle checkpoint completion
  const toggleCheckpoint = (skillName: string, levelIndex: number, checkpointId: string) => {
    setSkillProgressMap(prev => {
      const existing = prev[skillName] || generateFallbackSkillProgress(skillName);
      const updatedLevels = existing.levels.map((lvl, lIdx) => {
        if (lIdx !== levelIndex) return lvl;
        return {
          ...lvl,
          checkpoints: lvl.checkpoints.map(cp => {
            if (cp.id !== checkpointId) return cp;
            return { ...cp, completed: !cp.completed };
          })
        };
      });
      return {
        ...prev,
        [skillName]: {
          ...existing,
          levels: updatedLevels
        }
      };
    });
  };

  // Mark all checkpoints in a level cleared or uncleared
  const toggleLevelCleared = (skillName: string, levelIndex: number) => {
    setSkillProgressMap(prev => {
      const existing = prev[skillName] || generateFallbackSkillProgress(skillName);
      const targetLevel = existing.levels[levelIndex];
      if (!targetLevel) return prev;
      const allDone = targetLevel.checkpoints.every(cp => cp.completed);
      const updatedLevels = existing.levels.map((lvl, lIdx) => {
        if (lIdx !== levelIndex) return lvl;
        return {
          ...lvl,
          checkpoints: lvl.checkpoints.map(cp => ({ ...cp, completed: !allDone }))
        };
      });
      return {
        ...prev,
        [skillName]: {
          ...existing,
          levels: updatedLevels
        }
      };
    });
  };

  // List of all user skills (Learned + Taught)
  const allUserSkillsList = Array.from(new Set([
    ...currentUser.learnSkills.map(s => s.skillName),
    ...currentUser.teachSkills.map(s => s.skillName),
    ...Object.keys(skillProgressMap)
  ]));

  // Selected skill calculations
  const activeSkillData = skillProgressMap[selectedProgressSkill] || generateFallbackSkillProgress(selectedProgressSkill);
  const totalSelectedCheckpoints = activeSkillData.levels.flatMap(l => l.checkpoints).length;
  const completedSelectedCheckpoints = activeSkillData.levels.flatMap(l => l.checkpoints).filter(c => c.completed).length;
  const activeSkillPercentage = totalSelectedCheckpoints > 0 ? Math.round((completedSelectedCheckpoints / totalSelectedCheckpoints) * 100) : 0;
  const activeSkillLevelsCleared = activeSkillData.levels.filter(l => l.checkpoints.every(c => c.completed)).length;
  const activeSkillTotalLevels = activeSkillData.levels.length;

  // Platform-wide calculations for "Kiti like level clear kele" and "kiti skills learn kele till date"
  const totalLevelsClearedTillDate = allUserSkillsList.reduce((acc, sName) => {
    const sData = skillProgressMap[sName] || generateFallbackSkillProgress(sName);
    return acc + sData.levels.filter(lvl => lvl.checkpoints.length > 0 && lvl.checkpoints.every(cp => cp.completed)).length;
  }, 0);

  const totalSkillsLearnedTillDate = currentUser.learnSkills.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner Profile Summary */}
      <div className="bg-white border border-slate-200/90 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            {hasUserPhoto(currentUser.photo) ? (
              <img src={currentUser.photo} alt={currentUser.name} className="w-full h-full object-cover" />
            ) : (
              <UserIcon className="w-7 h-7" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{currentUser.name}</h1>
              {currentUser.isVerified && (
                <CheckCircle2 className="w-5 h-5 text-slate-900" title="Verified Member" />
              )}
              {currentUser.isVerifiedMentor && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-100" /> Verified Mentor
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentUser.city} • <span className="text-slate-900 font-bold">{currentUser.mode}</span> • {currentUser.experienceLevel} Level
            </p>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center min-w-[90px]">
            <div className="text-lg font-bold text-slate-900">{mySessions.length}</div>
            <div className="text-[10px] text-slate-500 font-medium">Sessions</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center min-w-[90px]">
            <div className="text-lg font-bold text-amber-600 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{currentUser.rating}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium">{myReviews.length} Reviews</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center min-w-[90px]">
            <div className="text-lg font-bold text-slate-900">{myCertificates.length}</div>
            <div className="text-[10px] text-slate-500 font-medium">Certificates</div>
          </div>
          <button 
            onClick={() => setActiveTab('progress')}
            className={`p-3 rounded-xl border text-center min-w-[90px] transition-all cursor-pointer ${
              activeTab === 'progress' 
                ? 'bg-blue-50 border-blue-400 text-blue-700 ring-2 ring-blue-500/20' 
                : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
            }`}
            title="View Skill Levels & Progress Tracker"
          >
            <div className="text-lg font-bold flex items-center justify-center gap-1 text-blue-600">
              <TrendingUp className="w-4 h-4" />
              <span>Track</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium">Levels & %</div>
          </button>
        </div>

      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 overflow-x-auto text-xs font-bold">
        <button
          onClick={() => setActiveTab('requests')}
          className={`pb-3 px-1 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
            activeTab === 'requests' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>Swap Requests</span>
          {receivedRequests.filter(r => r.status === 'Pending').length > 0 && (
            <span className="bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
              {receivedRequests.filter(r => r.status === 'Pending').length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`pb-3 px-1 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
            activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>My Skills Manager</span>
        </button>

        <button
          onClick={() => setActiveTab('progress')}
          className={`pb-3 px-1 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
            activeTab === 'progress' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Progress & Ratings</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 px-1 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
            activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Session History & Certs</span>
        </button>
      </div>

      {/* Tab 1: Swap Requests */}
      {activeTab === 'requests' && (
        <div className="space-y-6">
          
          {/* Received Requests */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>Received Proposals</span>
              <span className="text-xs text-slate-500 font-normal">({receivedRequests.length})</span>
            </h2>

            {receivedRequests.length === 0 ? (
              <p className="text-xs text-slate-500 bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                No received proposals yet. Members will contact you when they see your skills!
              </p>
            ) : (
              <div className="space-y-3">
                {receivedRequests.map(req => {
                  const sender = users.find(u => u.id === req.senderId);
                  return (
                    <div 
                      key={req.id} 
                      className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                          <UserIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{sender?.name}</div>
                          <div className="text-xs text-slate-600 mt-0.5">
                            Wants to exchange <span className="text-slate-900 font-bold">{req.teachSkill}</span> for your <span className="text-slate-900 font-bold">{req.learnSkill}</span>
                          </div>
                          <p className="text-xs text-slate-700 italic mt-1 bg-slate-50 p-2 rounded-lg border border-slate-200">
                            "{req.notes}"
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        {req.status === 'Pending' ? (
                          <>
                            <button
                              onClick={() => respondToSwapRequest(req.id, 'Rejected')}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-rose-600 text-xs font-semibold border border-slate-200 transition-colors"
                            >
                              Decline
                            </button>
                            <button
                              onClick={() => respondToSwapRequest(req.id, 'Accepted')}
                              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                            >
                              Accept Proposal
                            </button>
                          </>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                              {req.status}
                            </span>
                            <button
                              onClick={() => setActiveView('messages')}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 flex items-center gap-1"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-slate-800" />
                              <span>Chat</span>
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sent Requests */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>Sent Proposals</span>
              <span className="text-xs text-slate-500 font-normal">({sentRequests.length})</span>
            </h2>

            {sentRequests.length === 0 ? (
              <p className="text-xs text-slate-500 bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                You haven't sent any proposals yet. Search skills to send your first swap request!
              </p>
            ) : (
              <div className="space-y-3">
                {sentRequests.map(req => {
                  const receiver = users.find(u => u.id === req.receiverId);
                  return (
                    <div 
                      key={req.id} 
                      className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                          <UserIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">To: {receiver?.name}</div>
                          <div className="text-xs text-slate-600">
                            Offering {req.teachSkill} → Asking for {req.learnSkill}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                          req.status === 'Accepted' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {req.status}
                        </span>
                        {req.status === 'Accepted' && (
                          <button
                            onClick={() => setActiveView('messages')}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs border border-slate-200"
                          >
                            Open Chat
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

      {/* Tab 2: Skills Manager */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Add New Skill Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-5 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Plus className="w-4 h-4 text-slate-900" />
              <span>Add New Skill</span>
            </h2>

            <form onSubmit={handleAddSkillSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Skill Name</label>
                <input
                  type="text"
                  placeholder="e.g. Data Analytics, Public Speaking, Cooking"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category Type</label>
                  <select
                    value={newSkillType}
                    onChange={(e: any) => setNewSkillType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-black"
                  >
                    <option value="Teach">I Can Teach This</option>
                    <option value="Learn">I Want to Learn This</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Proficiency Level</label>
                  <select
                    value={newSkillLevel}
                    onChange={(e: any) => setNewSkillLevel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-black"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs transition-colors cursor-pointer"
              >
                Save Skill
              </button>
            </form>
          </div>

          {/* Current Skills Lists */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Can Teach */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Skills I Can Teach ({currentUser.teachSkills.length})
              </h3>
              <div className="space-y-2">
                {currentUser.teachSkills.map(sk => (
                  <div key={sk.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{sk.skillName}</span>
                      <span className="ml-2 text-[10px] bg-slate-200 text-slate-900 border border-slate-300 px-2 py-0.5 rounded-md font-medium">{sk.level}</span>
                    </div>
                    <button
                      onClick={() => removeSkill(sk.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove Skill"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Wants to Learn */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-sm">
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Skills I Want to Learn ({currentUser.learnSkills.length})
              </h3>
              <div className="space-y-2">
                {currentUser.learnSkills.map(sk => (
                  <div key={sk.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{sk.skillName}</span>
                      <span className="ml-2 text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-medium">{sk.level}</span>
                    </div>
                    <button
                      onClick={() => removeSkill(sk.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove Skill"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}


      {/* Tab: Progress & Ratings */}
      {activeTab === 'progress' && (
        <ProgressRatingsPage isEmbedded={true} />
      )}

      {/* Tab 3: History & Certificates */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          
          {/* My Certificates */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>My Earned Verified Certificates ({myCertificates.length})</span>
            </h2>

            {myCertificates.length === 0 ? (
              <p className="text-xs text-slate-500 bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                Complete a skill swap session to receive your official downloadable SkillSwap Certificate!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myCertificates.map(cert => (
                  <div key={cert.id} className="bg-white border border-amber-300 p-5 rounded-2xl shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        Verified Barter Certificate
                      </span>
                      <span className="text-[10px] text-slate-500">{cert.issueDate}</span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">{cert.skillName}</h3>
                      <p className="text-xs text-slate-600">Mentored by: <span className="text-slate-900 font-bold">{cert.teacherName}</span></p>
                    </div>

                    <div className="text-[10px] text-slate-500 font-mono bg-slate-50 p-2 rounded-lg border border-slate-200">
                      Code: {cert.certificateCode}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
