import React, { useState } from 'react';
import { Monitor, Users, Activity, ShieldAlert, Terminal } from 'lucide-react';
import { CourseLayout } from '@/components/course/CourseLayout';
import Chapter1 from '@/pages/Chapter1';
import Chapter2 from '@/pages/Chapter2';
import Chapter3 from '@/pages/Chapter3';
import Chapter4 from '@/pages/Chapter4';
import Chapter5 from '@/pages/Chapter5';
import Chapter6 from '@/pages/Chapter6';
import Chapter7 from '@/pages/Chapter7';
import Chapter8 from '@/pages/Chapter8';
import Chapter9 from '@/pages/Chapter9';
import Chapter10 from '@/pages/Chapter10';
import Chapter11 from '@/pages/Chapter11';
import Chapter12 from '@/pages/Chapter12';
import Chapter13 from '@/pages/Chapter13';
import Chapter14 from '@/pages/Chapter14';
import Chapter15 from '@/pages/Chapter15';
import Chapter16 from '@/pages/Chapter16';
import Chapter17 from '@/pages/Chapter17';
import Chapter18 from '@/pages/Chapter18';
import Chapter19 from '@/pages/Chapter19';
import Chapter20 from '@/pages/Chapter20';

export default function App() {
  const [currentChapterId, setCurrentChapterId] = useState<string>('chap1');

  // THE NEW 3-LEVEL ARCHITECTURE (TRACK -> MODULE -> CHAPTER)
  const TRACKS = [
    {
      title: "Track 1: IT Fundamentals",
      modules: [
        {
          title: "Module 1: The Visual OS",
          icon: Monitor,
          chapters: [
            { id: 'chap1', label: '1. What is the Desktop?', component: <Chapter1 />, outline: [{ id: 'intro', label: 'The Windows Desktop' }, { id: 'lab', label: 'Lab: Manipulation' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap2', label: '2. Files & Folders', component: <Chapter2 />, outline: [{ id: 'intro', label: 'Data Containers' }, { id: 'lab', label: 'Lab: Creation' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap3', label: '3. Paths & Addresses', component: <Chapter3 />, outline: [{ id: 'intro', label: 'System Addresses' }, { id: 'lab', label: 'Lab: Revealing Paths' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap4', label: '4. Important Windows Places', component: <Chapter4 />, outline: [{ id: 'intro', label: 'The Users Neighborhood' }, { id: 'lab', label: 'Lab: Exploring' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap5', label: '5. Search, Sort, & Filter', component: <Chapter5 />, outline: [{ id: 'intro', label: 'Sorting by Metadata' }, { id: 'lab', label: 'Lab: Finding Needles' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap6', label: '6. Hidden Items & Extensions', component: <Chapter6 />, outline: [{ id: 'intro', label: 'File Extensions' }, { id: 'lab', label: 'Lab: Unmasking' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap7', label: '7. Copy, Move, Delete', component: <Chapter7 />, outline: [{ id: 'intro', label: 'Delete & Restore' }, { id: 'lab', label: 'Lab: The Safety Net' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap8', label: '8. ZIP Files & Extraction', component: <Chapter8 />, outline: [{ id: 'intro', label: 'Compression' }, { id: 'lab', label: 'Lab: Pack & Unpack' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap9', label: '9. Browser Basics & Downloads', component: <Chapter9 />, outline: [{ id: 'intro', label: 'Open vs. Save' }, { id: 'lab', label: 'Lab: Tracing Downloads' }, { id: 'quiz', label: 'Knowledge Check' }] }
          ]
        },
        {
          title: "Module 2: Users & Settings",
          icon: Users,
          chapters: [
            { id: 'chap10', label: '10. Local User Accounts', component: <Chapter10 />, outline: [{ id: 'intro', label: 'Local vs Microsoft' }, { id: 'lab', label: 'Lab: Account Creation' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap11', label: '11. Standard vs. Admin (UAC)', component: <Chapter11 />, outline: [{ id: 'intro', label: 'The UAC Safety Net' }, { id: 'lab', label: 'Lab: Privilege Elevation' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap12', label: '12. Settings & Control Panel', component: <Chapter12 />, outline: [{ id: 'intro', label: 'Two Doors, Same Room' }, { id: 'lab', label: 'Lab: System Auditing' }, { id: 'quiz', label: 'Knowledge Check' }] }
          ]
        },
        {
          title: "Module 3: Execution & Automation",
          icon: Activity,
          chapters: [
            { id: 'chap13', label: '13. Apps vs. Processes', component: <Chapter13 />, outline: [{ id: 'intro', label: 'The Two Faces' }, { id: 'lab', label: 'Lab: The Executioner' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap14', label: '14. PIDs & Origins', component: <Chapter14 />, outline: [{ id: 'intro', label: 'Process Details' }, { id: 'lab', label: 'Lab: The Analyst View' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap15', label: '15. Startup & Services', component: <Chapter15 />, outline: [{ id: 'intro', label: 'Background Services' }, { id: 'lab', label: 'Lab: Auto-Execution' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap16', label: '16. Task Scheduler', component: <Chapter16 />, outline: [{ id: 'intro', label: 'Triggers & Actions' }, { id: 'lab', label: 'Lab: The Time Bomb' }, { id: 'quiz', label: 'Knowledge Check' }] }
          ]
        },
        {
          title: "Module 4: Security & Interrogation",
          icon: ShieldAlert,
          chapters: [
            { id: 'chap17', label: '17. Windows Defender', component: <Chapter17 />, outline: [{ id: 'intro', label: 'The Quarantine' }, { id: 'lab', label: 'Lab: The Console' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap18', label: '18. Event Viewer Basics', component: <Chapter18 />, outline: [{ id: 'intro', label: 'The Noise Problem' }, { id: 'lab', label: 'Lab: Taming Logs' }, { id: 'quiz', label: 'Knowledge Check' }] }
          ]
        },
        {
          title: "Module 5: The Command Line",
          icon: Terminal,
          chapters: [
            { id: 'chap19', label: '19. Command Prompt Basics', component: <Chapter19 />, outline: [{ id: 'intro', label: 'Interrogation Without Changing' }, { id: 'lab', label: 'Lab: The Interrogation' }, { id: 'quiz', label: 'Knowledge Check' }] },
            { id: 'chap20', label: '20. CLI Navigation', component: <Chapter20 />, outline: [{ id: 'intro', label: 'Location, Location, Location' }, { id: 'lab', label: 'Lab: Bridging the Worlds' }, { id: 'quiz', label: 'Knowledge Check' }] }
          ]
        }
      ]
    }
  ];

  // --- AUTOMATION ENGINE (Updated for 3 levels) ---
  // We flatten Tracks -> Modules -> Chapters to find previous/next links
  const flatChapters = TRACKS.flatMap(track => track.modules.flatMap(mod => mod.chapters));

  const currentIndex = flatChapters.findIndex(c => c.id === currentChapterId);
  const activeChapter = flatChapters[currentIndex] || flatChapters[0];
  const prevChapter = currentIndex > 0 ? flatChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < flatChapters.length - 1 ? flatChapters[currentIndex + 1] : null;

  return (
    <CourseLayout
      currentChapterId={currentChapterId}
      onNavigate={setCurrentChapterId}
      tracks={TRACKS}
      title={activeChapter.label}
      outline={activeChapter.outline}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      {activeChapter.component}
    </CourseLayout>
  );
}