import { SkillProgressEntry, SkillProgressLevel } from '../types';

export const generateDefaultStudentSkillProgress = (
  skillName: string, 
  category = 'General',
  studentName = 'Student'
): SkillProgressEntry => {
  return {
    skillName,
    category,
    lastEvaluatedAt: '2026-07-20 16:00',
    evaluatorName: 'Platform Moderator',
    sessionDurationMins: 45,
    moderatorNotes: `Initial baseline assessment for ${studentName}. Completed 45-minute orientation session. Level 1 fundamentals verified.`,
    levels: [
      {
        levelNumber: 1,
        levelName: `Level 1: Beginner Fundamentals in ${skillName}`,
        summary: `Core terminology, foundational concepts, and initial practical drills for ${skillName}.`,
        checkpoints: [
          { id: `${skillName}_1`, label: `Master basic terminology, syntax & theory in ${skillName}`, completed: true, completedAt: '2026-07-15', verifiedBy: 'Platform Moderator' },
          { id: `${skillName}_2`, label: `Complete initial hands-on exercise with peer mentor`, completed: true, completedAt: '2026-07-18', verifiedBy: 'Platform Moderator' },
          { id: `${skillName}_3`, label: `Demonstrate initial practical task during 45-min live session`, completed: true, completedAt: '2026-07-20', verifiedBy: 'Platform Moderator' }
        ]
      },
      {
        levelNumber: 2,
        levelName: `Level 2: Intermediate Tools & Practice`,
        summary: `Intermediate techniques, structured workflow, and error handling.`,
        checkpoints: [
          { id: `${skillName}_4`, label: `Apply intermediate methods in practice drill`, completed: true, completedAt: '2026-07-20', verifiedBy: 'Platform Moderator' },
          { id: `${skillName}_5`, label: `Review deliverables with an expert peer in 45-min session`, completed: false },
          { id: `${skillName}_6`, label: `Pass intermediate competency review by mentor`, completed: false }
        ]
      },
      {
        levelNumber: 3,
        levelName: `Level 3: Real-World Applications & Peer Swaps`,
        summary: `Collaborative execution, peer testing, and applied problem solving.`,
        checkpoints: [
          { id: `${skillName}_7`, label: `Deliver complete end-to-end task demonstration`, completed: false },
          { id: `${skillName}_8`, label: `Collaborate in 45-min live exchange session`, completed: false },
          { id: `${skillName}_9`, label: `Troubleshoot and resolve edge cases independently`, completed: false }
        ]
      },
      {
        levelNumber: 4,
        levelName: `Level 4: Advanced Mastery & Credential Sign-Off`,
        summary: `Industry-standard execution and verified skill credential approval.`,
        checkpoints: [
          { id: `${skillName}_10`, label: `Complete comprehensive capstone evaluated by moderator`, completed: false },
          { id: `${skillName}_11`, label: `Publish public repository or portfolio artifact`, completed: false },
          { id: `${skillName}_12`, label: `Receive verified SkillSwap peer certificate of mastery`, completed: false }
        ]
      }
    ]
  };
};

export const INITIAL_STUDENT_PROGRESS_MAP: Record<string, Record<string, SkillProgressEntry>> = {
  usr_rahul: {
    Guitar: {
      skillName: 'Guitar',
      category: 'Music',
      lastEvaluatedAt: '2026-07-22 17:45',
      evaluatorName: 'Kedar Shivkar (Lead Moderator)',
      sessionDurationMins: 45,
      moderatorNotes: 'Moderator Assessment after 45-min Session #1: Rahul demonstrated clean rhythm timing and clean finger placement on open E, A, D, G, and C chords. Level 1 & Level 2 are fully cleared and certified. In Level 3, F barre chord transitions still need finger pressure practice before sign-off.',
      levels: [
        {
          levelNumber: 1,
          levelName: 'Level 1: Beginner Open Chords & Strumming',
          summary: 'Standard open chords (E, A, D, G, C) and fundamental rhythm patterns.',
          checkpoints: [
            { id: 'gtr_1', label: 'E minor, A minor & C major clean finger accuracy', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_2', label: 'Steady 4/4 down-strumming with a metronome', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_3', label: 'Play complete 3-chord song progression without pausing', completed: true, completedAt: '2026-07-17', verifiedBy: 'Kedar Shivkar (Moderator)' }
          ]
        },
        {
          levelNumber: 2,
          levelName: 'Level 2: Chord Transitions & Fingerpicking',
          summary: 'Fluid chord changes and acoustic fingerstyle patterns.',
          checkpoints: [
            { id: 'gtr_4', label: 'Fast transition between G major and D major (<1s)', completed: true, completedAt: '2026-07-18', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_5', label: 'Travis picking pattern on acoustic folk rhythms', completed: true, completedAt: '2026-07-20', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_6', label: 'Completed 45-min live session with teacher Priya Patel', completed: true, completedAt: '2026-07-22', verifiedBy: 'Kedar Shivkar (Moderator)' }
          ]
        },
        {
          levelNumber: 3,
          levelName: 'Level 3: Barre Chords & Music Theory Basics',
          summary: 'F major barre shape, pentatonic scales, and key transposition.',
          checkpoints: [
            { id: 'gtr_7', label: 'Clean tone on 1st fret F major barre chord', completed: true, completedAt: '2026-07-22', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_8', label: 'Minor pentatonic scale across 2 octaves', completed: true, completedAt: '2026-07-22', verifiedBy: 'Kedar Shivkar (Moderator)' },
            { id: 'gtr_9', label: 'Transpose song keys using guitar capo during live performance', completed: false }
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
    React: {
      skillName: 'React',
      category: 'Technology',
      lastEvaluatedAt: '2026-07-19 15:30',
      evaluatorName: 'Ananya Desai (Verified Mentor & Moderator)',
      sessionDurationMins: 45,
      moderatorNotes: 'Moderator Assessment after 45-min Session #2: Components, TypeScript props, and conditional mapping validated. Passed Level 1. State hook exercises ongoing for Level 2.',
      levels: [
        {
          levelNumber: 1,
          levelName: 'Level 1: JSX, Props & Component Architecture',
          summary: 'Reusable functional components and props hierarchy.',
          checkpoints: [
            { id: 'rc_1', label: 'Create reusable functional components with TypeScript props', completed: true, completedAt: '2026-07-18', verifiedBy: 'Ananya Desai (Mentor)' },
            { id: 'rc_2', label: 'Conditional rendering and mapping dynamic lists with keys', completed: true, completedAt: '2026-07-18', verifiedBy: 'Ananya Desai (Mentor)' },
            { id: 'rc_3', label: 'Styling components with Tailwind CSS utility classes', completed: true, completedAt: '2026-07-19', verifiedBy: 'Ananya Desai (Mentor)' }
          ]
        },
        {
          levelNumber: 2,
          levelName: 'Level 2: State Management & Component Lifecycle',
          summary: 'Mastering useState, useEffect, controlled inputs, and events.',
          checkpoints: [
            { id: 'rc_4', label: 'Complex form state with validation and real-time feedback', completed: true, completedAt: '2026-07-19', verifiedBy: 'Ananya Desai (Mentor)' },
            { id: 'rc_5', label: 'useEffect dependency arrays, subscriptions and cleanup', completed: true, completedAt: '2026-07-19', verifiedBy: 'Ananya Desai (Mentor)' },
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
      lastEvaluatedAt: '2026-07-15 18:30',
      evaluatorName: 'Carlos Mendez (Verified Mentor & Moderator)',
      sessionDurationMins: 45,
      moderatorNotes: 'Moderator Assessment after 45-min Session #1: Student has solid conceptual grasp of ICP personas and on-page SEO. Cleared Level 1 & Level 2. Live ad campaign scheduled for next 45-min session.',
      levels: [
        {
          levelNumber: 1,
          levelName: 'Level 1: Marketing Funnels & Audience Strategy',
          summary: 'Customer journey mapping and core positioning.',
          checkpoints: [
            { id: 'dm_1', label: 'Construct detailed ICP (Ideal Customer Profile) persona', completed: true, completedAt: '2026-07-12', verifiedBy: 'Carlos Mendez' },
            { id: 'dm_2', label: 'Map awareness-to-retention full conversion funnel', completed: true, completedAt: '2026-07-14', verifiedBy: 'Carlos Mendez' },
            { id: 'dm_3', label: 'Formulate unique value proposition & brand messaging guide', completed: true, completedAt: '2026-07-15', verifiedBy: 'Carlos Mendez' }
          ]
        },
        {
          levelNumber: 2,
          levelName: 'Level 2: Organic Search & Content Architecture',
          summary: 'SEO keyword research, search intent, and high-converting content.',
          checkpoints: [
            { id: 'dm_4', label: 'Keyword search volume & intent mapping with difficulty analysis', completed: true, completedAt: '2026-07-15', verifiedBy: 'Carlos Mendez' },
            { id: 'dm_5', label: 'Technical on-page SEO audit (meta tags, schema, speed)', completed: true, completedAt: '2026-07-15', verifiedBy: 'Carlos Mendez' },
            { id: 'dm_6', label: 'Publish 3 pillar blog articles with internal topic clusters', completed: true, completedAt: '2026-07-15', verifiedBy: 'Carlos Mendez' }
          ]
        },
        {
          levelNumber: 3,
          levelName: 'Level 3: Paid Acquisition & Social Ads',
          summary: 'Meta Ads, Google Search Ads, creative testing, and ROAS.',
          checkpoints: [
            { id: 'dm_7', label: 'Configure Meta pixel, conversion tracking, and custom events', completed: true, completedAt: '2026-07-15', verifiedBy: 'Carlos Mendez' },
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
  },
  usr_priya: {
    Python: {
      skillName: 'Python',
      category: 'Technology',
      lastEvaluatedAt: '2026-07-16 16:45',
      evaluatorName: 'Kedar Shivkar (Lead Moderator)',
      sessionDurationMins: 45,
      moderatorNotes: 'Moderator Assessment after 45-min Session #3: Built FastAPI calculator endpoints and validated JSON requests with 100% accuracy. Cleared Levels 1, 2, and 3. Final Level 4 production containerization scheduled.',
      levels: [
        {
          levelNumber: 1,
          levelName: 'Level 1: Fundamentals, Syntax & Loops',
          summary: 'Core Python syntax, variables, loops, and conditional logic.',
          checkpoints: [
            { id: 'py_1', label: 'Variables, data types and boolean logic expressions', completed: true, completedAt: '2026-07-10', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_2', label: 'Writing for/while loops and list comprehensions', completed: true, completedAt: '2026-07-12', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_3', label: 'CLI calculator script with defensive error handling', completed: true, completedAt: '2026-07-14', verifiedBy: 'Kedar Shivkar' }
          ]
        },
        {
          levelNumber: 2,
          levelName: 'Level 2: Data Structures & Modular Code',
          summary: 'Dictionaries, sets, custom functions, and package imports.',
          checkpoints: [
            { id: 'py_4', label: 'Dictionary manipulation, nested JSON parsing & sorting', completed: true, completedAt: '2026-07-15', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_5', label: 'Writing pure functions with type hints and docstrings', completed: true, completedAt: '2026-07-15', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_6', label: 'Package structure with requirements.txt & virtualenv', completed: true, completedAt: '2026-07-15', verifiedBy: 'Kedar Shivkar' }
          ]
        },
        {
          levelNumber: 3,
          levelName: 'Level 3: Object-Oriented Design & File I/O',
          summary: 'Classes, inheritance, exceptions, and API consumption.',
          checkpoints: [
            { id: 'py_7', label: 'Build OOP domain model with clean class inheritance', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_8', label: 'Fetch, parse and cache real REST API JSON responses', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_9', label: 'Automated CSV/Excel data processor script', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar' }
          ]
        },
        {
          levelNumber: 4,
          levelName: 'Level 4: Backend REST APIs & Production Readiness',
          summary: 'FastAPI / Flask microservices, database ORMs, unit testing.',
          checkpoints: [
            { id: 'py_10', label: 'Deploy FastAPI REST endpoints with validation & docs', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_11', label: 'Connect database using SQLAlchemy and models', completed: true, completedAt: '2026-07-16', verifiedBy: 'Kedar Shivkar' },
            { id: 'py_12', label: 'Dockerize application and automated test suite', completed: false }
          ]
        }
      ]
    }
  }
};
