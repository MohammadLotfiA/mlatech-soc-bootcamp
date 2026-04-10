import React from 'react';
import { CalendarClock, Calculator, ShieldAlert, MousePointer2, Trash2 } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter16() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Task Scheduler"
                description="Not all programs are launched by humans clicking a mouse. Windows has a built-in alarm clock called Task Scheduler. It allows the operating system—or a user—to execute a specific program automatically when a certain trigger occurs (like a specific time, or when a user logs in)."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <CalendarClock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Triggers and Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Every scheduled task has two main parts. The <strong>Trigger</strong> (the 'When') and the <strong>Action</strong> (the 'What'). For example, Windows uses Task Scheduler to silently download software updates every night at 3:00 AM while you are asleep.
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
                                Advanced Threat Actors love Task Scheduler. Instead of leaving a malicious process running 24/7 (which is easy to spot in Task Manager), they configure a scheduled task to launch their malware for just 5 minutes every day to steal data, and then close it.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Time Bomb"
                description="We are going to create a benign scheduled task that will automatically execute the Calculator app in exactly a few minutes."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Calculator className="w-4 h-4 text-muted-foreground" /> Step 1: Creating the Task</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Task Scheduler</code>, and press Enter.</li>
                                <li>2. On the far right sidebar (Actions menu), click <strong>Create Basic Task...</strong></li>
                                <li>3. Name it <code className="bg-secondary px-1 rounded text-foreground">Lab Test</code> and click Next.</li>
                                <li>4. For the Trigger, select <strong>One time</strong> and click Next.</li>
                                <li>5. Set the time for exactly <strong>3 minutes from right now</strong>. Click Next.</li>
                                <li>6. For the Action, select <strong>Start a program</strong>.</li>
                                <li>7. Type <code className="bg-secondary px-1 rounded text-foreground">calc.exe</code> in the Program/script box. Click Next, then Finish.</li>
                                <li>8. Wait patiently. In exactly 3 minutes, the Calculator will magically appear on your screen!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Trash2 className="w-4 h-4 text-emerald-500" /> Step 2: Cleanup</h4>
                            <p className="text-sm text-muted-foreground mb-2">We must remove our lab artifacts so the task list remains clean.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. In the left sidebar of Task Scheduler, click <strong>Task Scheduler Library</strong>.</li>
                                <li>2. Find <code>Lab Test</code> in the middle list.</li>
                                <li>3. Right-click it and select <strong>Delete</strong>. Confirm by clicking Yes.</li>
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
                        prompt="What are the two mandatory components of every Scheduled Task?"
                        correctIndexes={[1]}
                        options={[
                            { text: "A password and an encryption key.", explanation: "Incorrect. Scheduled tasks do not require encryption keys." },
                            { text: "A Trigger (When) and an Action (What).", explanation: "Correct! The task must know when to run and what to do." },
                            { text: "An Administrator account and a network connection.", explanation: "Incorrect. Standard users can make offline tasks." },
                            { text: "A hidden file and a system service.", explanation: "Incorrect. Tasks are independent of hidden files." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is Task Scheduler an attractive tool for hackers?"
                        correctIndexes={[3]}
                        options={[
                            { text: "It prevents Windows Defender from scanning files.", explanation: "Incorrect. Scheduled tasks do not disable antivirus." },
                            { text: "It allows them to guess user passwords.", explanation: "Incorrect. It is an execution tool, not a password cracking tool." },
                            { text: "It requires no knowledge of coding to use.", explanation: "Incorrect. While true, this isn't why it's tactically attractive for malware." },
                            { text: "It allows malware to execute periodically, avoiding the need to run 24/7, which makes it harder for analysts to spot.", explanation: "Correct! It is a stealthy persistence mechanism." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Task Scheduler."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 4]}
                        options={[
                            { text: "Task Scheduler is a native, built-in feature of the Windows operating system.", explanation: "True. It is installed by default on all Windows PCs." },
                            { text: "A trigger can be based on a specific time, or a specific event (like a user logging in).", explanation: "True. Triggers are highly flexible." },
                            { text: "Once a scheduled task is created, it cannot be deleted.", explanation: "False. Tasks can be easily modified or deleted." },
                            { text: "Task Scheduler can only launch Microsoft-approved applications.", explanation: "False. It can launch any executable or script on the hard drive." },
                            { text: "Windows uses Task Scheduler for its own routine maintenance (like checking for updates).", explanation: "True. The OS heavily relies on this tool to manage itself." },
                            { text: "Task Scheduler is only available in the command line interface.", explanation: "False. It has a robust graphical interface (taskschd.msc)." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}