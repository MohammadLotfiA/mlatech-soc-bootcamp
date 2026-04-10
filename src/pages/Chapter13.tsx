import React from 'react';
import { Activity, LayoutList, ShieldAlert, MousePointer2, XSquare } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter13() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Task Manager Basics: Apps vs. Processes"
                description="When you double-click a file, it wakes up and moves into your computer's active memory (RAM). Once running, it is called a 'Process'. Task Manager is your primary window into everything happening inside the machine right now."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <LayoutList className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Two Faces of Execution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>Apps</strong> are programs you can see (they have a window, like a web browser). <strong>Background Processes</strong> are programs running invisibly behind the scenes (like Windows checking for updates or your antivirus scanning).
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
                                Malware does not want to be seen. A threat actor will never launch an "App" with a visible window for the user to close. They exclusively run their malware as hidden <strong>Background Processes</strong>.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Executioner"
                description="We are going to launch a standard application and forcefully kill it using Task Manager."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-muted-foreground" /> Step 1: The Setup</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Calculator</code>, and open the app.</li>
                                <li>2. Press <code className="bg-secondary px-1 rounded text-foreground border border-border">Ctrl + Shift + Esc</code> on your keyboard. This is the fastest way to open Task Manager.</li>
                                <li>3. Ensure you are on the <strong>Processes</strong> tab (the icon of a grid/squares).</li>
                                <li>4. Look at the top of the list under the <strong>Apps</strong> category. You will see Calculator running.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><XSquare className="w-4 h-4 text-emerald-500" /> Step 2: Ending the Task</h4>
                            <p className="text-sm text-muted-foreground mb-2">When a program freezes, clicking the red "X" usually fails. Task Manager forces it to close.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Right-click <strong>Calculator</strong> in the Task Manager list.</li>
                                <li>2. Select <strong>End task</strong>.</li>
                                <li>3. Observe how the Calculator window instantly vanishes from your screen.</li>
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
                        prompt="What is the fastest keyboard shortcut to open Windows Task Manager directly?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Ctrl + Alt + Delete", explanation: "Incorrect. This opens a security screen where you then have to click Task Manager." },
                            { text: "Alt + F4", explanation: "Incorrect. This attempts to close the currently active window." },
                            { text: "Win + T", explanation: "Incorrect. This highlights items on your taskbar." },
                            { text: "Ctrl + Shift + Esc", explanation: "Correct! This bypasses menus and opens Task Manager instantly." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why do threat actors prefer their malware to run as a 'Background Process' rather than an 'App'?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Background processes are encrypted by default.", explanation: "Incorrect. They are not inherently encrypted." },
                            { text: "Background processes do not have a visible window, keeping the malware hidden from the user.", explanation: "Correct! The user won't know it is running unless they look in Task Manager." },
                            { text: "Background processes bypass the firewall automatically.", explanation: "Incorrect. Network traffic rules apply to all processes." },
                            { text: "Apps cannot access the internet.", explanation: "Incorrect. Apps (like web browsers) access the internet constantly." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Task Manager and Processes."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Task Manager only shows programs that have visible windows.", explanation: "False. It shows both visible Apps and hidden Background Processes." },
                            { text: "Using 'End task' forcefully kills a process, which is useful if an application is frozen.", explanation: "True. It tells the OS to instantly stop executing that memory block." },
                            { text: "Standard users cannot open Task Manager.", explanation: "False. Standard users can use it to kill their own apps." },
                            { text: "A dormant file resting on the C: drive is not listed in Task Manager until it is executed.", explanation: "True. Task Manager only shows active memory, not static storage." },
                            { text: "Killing a background process permanently uninstalls the software.", explanation: "False. It only stops it from running. The file remains on the hard drive." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}