import React from 'react';
import { Fingerprint, TerminalSquare, ShieldAlert, MousePointer2, ListPlus } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter14() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Process Details: PIDs and Origins"
                description="Looking at the 'Apps' tab in Task Manager is for average users. To truly investigate a system, analysts must dive into the 'Details' tab, where every process reveals its unique ID and its exact origin path."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Fingerprint className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The PID (Process ID)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                You can have five different Google Chrome windows open. They are all named <code>chrome.exe</code>. To tell them apart, Windows assigns a unique, temporary number to every single execution called a <strong>PID</strong>.
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
                                Attackers often name their malware <code>svchost.exe</code> (a critical Windows process) to hide in plain sight. Analysts expose this trick by checking the <strong>Command Line</strong> column. If it launched from <code>C:\Windows</code>, it is safe. If it launched from <code>C:\Users\Downloads</code>, it is malware.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Analyst's View"
                description="We are going to configure Task Manager to show us exactly where a process was launched from."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><TerminalSquare className="w-4 h-4 text-muted-foreground" /> Step 1: Navigating to Details</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>Notepad</strong> from the Start Menu.</li>
                                <li>2. Open <strong>Task Manager</strong> (<code className="bg-secondary px-1 rounded text-foreground">Ctrl + Shift + Esc</code>).</li>
                                <li>3. Click the <strong>Details</strong> tab (the icon with horizontal lines, usually near the bottom of the left sidebar).</li>
                                <li>4. Sort the list alphabetically and find <code>notepad.exe</code>.</li>
                                <li>5. Look at the <strong>PID</strong> column next to it. Note the number.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ListPlus className="w-4 h-4 text-emerald-500" /> Step 2: Unlocking the Command Line</h4>
                            <p className="text-sm text-muted-foreground mb-2">This is one of the most powerful columns you can enable.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Right-click any of the column headers at the top (like <em>Name</em> or <em>PID</em>).</li>
                                <li>2. Click <strong>Select columns</strong>.</li>
                                <li>3. Scroll down and check the box for <strong>Command line</strong>, then click OK.</li>
                                <li>4. Look at the new column for <code>notepad.exe</code>. It explicitly proves that the process launched from <code>"C:\Windows\system32\notepad.exe"</code>.</li>
                            </ol>
                            <p className="text-xs text-emerald-500 font-bold mt-3">Cleanup: Close Notepad.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is a PID?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Personal Identity Directory, used for user logins.", explanation: "Incorrect. It is not related to user accounts." },
                            { text: "Permanent Installation Data, marking where a file is saved.", explanation: "Incorrect. It is temporary, not permanent." },
                            { text: "Process Identifier, a unique number assigned to an active running program.", explanation: "Correct! It distinguishes between multiple instances of the same app." },
                            { text: "Packet Inspection Device, used by firewalls.", explanation: "Incorrect. This is an endpoint operating system concept." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is the 'Command Line' column in the Details tab so critical for SOC Analysts?"
                        correctIndexes={[0]}
                        options={[
                            { text: "It reveals the exact absolute path the file launched from, exposing malware hiding under fake names.", explanation: "Correct! It shows the origin address, stripping away the disguise." },
                            { text: "It automatically blocks viruses from executing.", explanation: "Incorrect. The column is purely for visibility, not prevention." },
                            { text: "It allows analysts to type commands directly into Task Manager.", explanation: "Incorrect. It displays the path; it is not an interactive terminal." },
                            { text: "It shows the passwords typed by the user.", explanation: "Incorrect. It does not act as a keylogger." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding PIDs and Process Details."
                        helper="Select exactly 2 options."
                        correctIndexes={[2, 3]}
                        options={[
                            { text: "A program's PID remains exactly the same forever, even after the computer is rebooted.", explanation: "False. PIDs are randomly assigned every time the program launches." },
                            { text: "Two different programs running at the same time can share the same PID.", explanation: "False. A PID must be 100% unique." },
                            { text: "The Details tab allows you to see the username of the person who launched the process.", explanation: "True. The 'User name' column shows if it was run by the user or the SYSTEM." },
                            { text: "If malware names itself 'explorer.exe' but launches from the Downloads folder, the Command Line column will reveal the deception.", explanation: "True. The path proves it is not the legitimate Windows explorer." },
                            { text: "The Command Line column is enabled by default in Task Manager.", explanation: "False. You have to manually right-click the headers to enable it." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}