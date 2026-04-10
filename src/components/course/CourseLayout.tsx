import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Menu, Italic } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export interface ChapterLink { id: string; label: string; outline?: OutlineItem[] }
export interface Module { title: string; icon: React.ElementType; chapters: ChapterLink[]; }
export interface CourseTrack { title: string; modules: Module[]; } // <-- NEW 3-LEVEL ARCHITECTURE
export interface OutlineItem { id: string; label: string; }

export interface CourseLayoutProps {
    currentChapterId: string;
    onNavigate: (id: string) => void;
    tracks: CourseTrack[];
    title: string;
    outline: OutlineItem[];
    prevChapter: ChapterLink | null;
    nextChapter: ChapterLink | null;
    children: React.ReactNode;
}

export function CourseLayout({
    currentChapterId, onNavigate, tracks, outline, prevChapter, nextChapter, children
}: CourseLayoutProps) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (id: string) => {
        onNavigate(id);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const SidebarContent = () => (
        <div className="py-6 space-y-10">
            {tracks.map((track, tIdx) => (
                <div key={tIdx} className="space-y-6">

                    {/* Track Header (e.g., IT Fundamentals) */}
                    <div className="px-6">
                        <h2 className="text-xs font-black text-primary tracking-widest uppercase mb-1">{track.title}</h2>
                        <div className="h-0.5 w-8 bg-primary/30 rounded-full"></div>
                    </div>

                    {/* Modules inside the Track */}
                    <div className="space-y-6">
                        {track.modules.map((mod, mIdx) => (
                            <div key={mIdx}>
                                <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2 px-6">
                                    <mod.icon className="w-3.5 h-3.5" /> {mod.title}
                                </h3>
                                <div className="space-y-0.5 px-3">
                                    {mod.chapters.map(chap => {
                                        const isActive = currentChapterId === chap.id;
                                        return (
                                            <button
                                                key={chap.id}
                                                onClick={() => handleNav(chap.id)}
                                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                                            >
                                                {chap.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex h-screen bg-background text-foreground font-sans overflow-hidden">

            {/* Desktop Left Sidebar */}
            <aside className="w-72 bg-card border-r border-border hidden lg:flex flex-col z-10 shrink-0">
                <div className="p-6 border-b border-border bg-gradient-to-b from-secondary/30 to-background shrink-0">
                    <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
                        <ShieldCheck className="text-primary h-6 w-6" />
                        <span><span className="text-primary font-extrabold">MLA</span>Tech</span>
                    </h1>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-semibold">SOC Level 1 Bootcamp</div>
                    <div className="text-xs mt-1 tracking-widest font-semibold">Brought to you by <span className='italic'>ImpactTek</span></div>
                </div>
                {/* SCROLL FIX IS HERE: flex-1 and overflow-y-auto */}
                <div className="flex-1 overflow-y-auto">
                    <SidebarContent />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto scroll-smooth flex flex-col relative bg-background min-w-0">

                {/* Mobile Header with Hamburger */}
                <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <ShieldCheck className="text-primary h-5 w-5" />
                        <span><span className="text-primary font-extrabold">MLA</span>Tech</span>
                    </div>

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80 p-0 bg-card border-r-border flex flex-col">
                            <SheetHeader className="p-6 border-b border-border text-left shrink-0">
                                <SheetTitle className="flex items-center gap-2">
                                    <ShieldCheck className="text-primary h-5 w-5" /> Navigation
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex-1 overflow-y-auto">
                                <SidebarContent />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 lg:px-12 lg:py-12">
                    {children}

                    {/* Bottom Nav */}
                    <div className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {prevChapter ? (
                            <button
                                onClick={() => handleNav(prevChapter.id)}
                                className="group flex flex-col items-start p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-all text-left w-full shadow-sm"
                            >
                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground mb-3 transition-colors">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Previous</span>
                                </div>
                                <div className="text-base md:text-lg font-semibold text-foreground line-clamp-2">{prevChapter.label}</div>
                            </button>
                        ) : <div className="hidden sm:block" />}

                        {nextChapter && (
                            <button
                                onClick={() => handleNav(nextChapter.id)}
                                className="group flex flex-col items-end p-6 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all text-right w-full shadow-sm"
                            >
                                <div className="flex items-center gap-2 text-primary mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider">Next up</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <div className="text-base md:text-lg font-semibold text-foreground line-clamp-2">{nextChapter.label}</div>
                            </button>
                        )}
                    </div>
                </div>
            </main>

            {/* Desktop Right Sidebar (Table of Contents) */}
            <aside className="w-64 bg-card/30 border-l border-border hidden xl:block p-8 shrink-0 overflow-y-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">On this page</p>
                <nav className="space-y-3 flex flex-col">
                    {outline.map(item => (
                        <a key={item.id} href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-2">
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>

        </div>
    );
}