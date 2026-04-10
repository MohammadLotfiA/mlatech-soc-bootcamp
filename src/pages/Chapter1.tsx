import React from 'react';
import { Monitor, MousePointer2, ShieldAlert, CheckSquare, Settings } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter1() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="What a Computer Is & The Windows Desktop"
                description="The Windows Desktop is the starting point for almost every user. While it looks like a flat screen with pictures, it is actually a highly organized graphical interface designed to make the underlying operating system easy to use."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Monitor className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Desktop is a Folder</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                To a user, the Desktop is the background image. To Windows, the Desktop is just a specific folder located inside their user profile. When you save a file to the "Desktop," you are just dropping it into that folder.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Threat actors design malware to look like normal Desktop icons. As an analyst, you must understand the standard user environment to know exactly what a victim saw and clicked on during a phishing attack.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Manipulating the Environment"
                description="Let's build muscle memory by modifying the user interface and then returning it to its original state."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Settings className="w-4 h-4 text-muted-foreground" /> Step 1: Pinning</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the <strong>Start Menu</strong> (the Windows icon on your taskbar).</li>
                                <li>2. Type <code className="bg-secondary px-1 rounded text-foreground">Calculator</code>.</li>
                                <li>3. Right-click the Calculator app and select <strong>Pin to taskbar</strong>.</li>
                                <li>4. Verify the icon now stays on your bottom taskbar.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckSquare className="w-4 h-4 text-emerald-500" /> Step 2: Cleanup</h4>
                            <p className="text-sm text-muted-foreground mb-2">We always revert lab changes so the system remains clean.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Right-click the Calculator icon on your taskbar.</li>
                                <li>2. Select <strong>Unpin from taskbar</strong>.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="To the Windows Operating System, what is the Desktop?"
                        correctIndexes={[2]}
                        options={[
                            { text: "A specialized hard drive partition.", explanation: "Incorrect. The desktop does not require its own partition." },
                            { text: "A read-only display area for shortcuts.", explanation: "Incorrect. You can write files directly to it." },
                            { text: "A specific folder located inside the user's profile.", explanation: "Correct! The desktop is just a visual representation of a folder." },
                            { text: "A cloud-synced storage area.", explanation: "Incorrect. While it can be synced, fundamentally it is a local folder." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is understanding the standard Windows Desktop important for a SOC Analyst?"
                        correctIndexes={[0]}
                        options={[
                            { text: "To understand the victim's perspective and what they likely clicked on.", explanation: "Correct! You must recreate the user's environment to understand the attack." },
                            { text: "Because malware can only execute if it is placed on the Desktop.", explanation: "Incorrect. Malware can execute from almost anywhere." },
                            { text: "Because the Desktop folder requires Administrator privileges to view.", explanation: "Incorrect. Standard users have full access to their own Desktop." },
                            { text: "To help users change their wallpaper after a ransomware attack.", explanation: "Incorrect. This is a Helpdesk task, not a SOC task." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding the Windows taskbar and icons."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "A desktop shortcut is the actual software program.", explanation: "False. A shortcut is just a pointer to the real file." },
                            { text: "Pinning an app to the taskbar creates a convenient shortcut for quick access.", explanation: "True. It keeps the shortcut readily available." },
                            { text: "Only Administrators can pin apps to the taskbar.", explanation: "False. Standard users can customize their own taskbar." },
                            { text: "The Start Menu is a graphical way to search for and launch applications.", explanation: "True. It is the primary application launcher in Windows." },
                            { text: "Unpinning an app from the taskbar uninstalls the software.", explanation: "False. It only removes the visual shortcut." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}