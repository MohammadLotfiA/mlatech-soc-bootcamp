import React from 'react';
import { BookOpen, Filter, ShieldAlert, MousePointer2, AlertCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter18() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Event Viewer Basics"
                description="Everything that happens on a Windows machine generates a log. When a user logs in, a program crashes, or a scheduled task runs, Windows writes a permanent record of it. The Event Viewer is the graphical tool used to read these historical logs."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <BookOpen className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Noise Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Windows logs thousands of events every single day. If you open Event Viewer without knowing what you are looking for, you will be completely overwhelmed. A healthy computer throws hundreds of harmless "Errors" natively.
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
                                Logs are the ground truth of an investigation. A hacker can delete malware, but it is incredibly difficult for them to delete the logs showing they executed it. Analysts use Event Viewer to piece together the timeline of a cyber attack.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Taming the Logs"
                description="We are going to open the Event Viewer, navigate to the System log, and use filters to cut through the noise."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-muted-foreground" /> Step 1: Navigating the Viewer</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Event Viewer</code>, and open the app.</li>
                                <li>2. On the left sidebar, expand the <strong>Windows Logs</strong> folder.</li>
                                <li>3. Click on the <strong>System</strong> log. (This log tracks OS-level events, like drivers loading or services starting).</li>
                                <li>4. Notice the sheer volume of "Information" logs in the middle pane.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Filter className="w-4 h-4 text-emerald-500" /> Step 2: Applying a Filter</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's hide the routine "Information" logs and only view Warnings and Errors.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. On the far right sidebar (Actions menu), click <strong>Filter Current Log...</strong></li>
                                <li>2. In the pop-up window, under "Event level:", check the boxes for <strong>Critical</strong>, <strong>Warning</strong>, and <strong>Error</strong>.</li>
                                <li>3. Click OK.</li>
                                <li>4. Observe how the middle list shrinks, exposing only the system hiccups. (Do not panic at the errors, this is normal!).</li>
                                <li>5. <em>Cleanup:</em> On the right sidebar, click <strong>Clear Filter</strong> so the log returns to normal. Close Event Viewer.</li>
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
                        prompt="If you open Event Viewer and see 50 'Error' level logs in the System folder, what should you do?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Immediately reinstall Windows, the system is corrupted.", explanation: "Incorrect. This is a massive overreaction." },
                            { text: "Nothing. A healthy Windows machine generates harmless errors natively during routine operation.", explanation: "Correct! Context is everything. Do not panic at red icons." },
                            { text: "Assume a hacker has compromised the machine.", explanation: "Incorrect. Errors usually indicate minor software timeouts or network drops." },
                            { text: "Delete the logs to save hard drive space.", explanation: "Incorrect. Analysts should never delete logs." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is filtering essential when working with Windows Logs?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Filtering permanently deletes unwanted logs.", explanation: "Incorrect. Filtering only hides them from the current view." },
                            { text: "Filtering encrypts the logs so attackers cannot read them.", explanation: "Incorrect. Filters are for display, not security." },
                            { text: "Because Windows generates thousands of routine logs a day, making it impossible to manually read through the noise.", explanation: "Correct! Analysts use filters to find the needle in the haystack." },
                            { text: "Filtering is required to unlock the Event Viewer application.", explanation: "Incorrect. Event Viewer is unlocked by default." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding the Event Viewer."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "Logs are permanent, unchangeable records of historical actions on the computer.", explanation: "True. They form the timeline of an investigation." },
                            { text: "Event Viewer is only used to fix broken printers.", explanation: "False. It is the primary diagnostic and security audit tool for Windows." },
                            { text: "Threat actors cannot easily delete logs because it requires deep Administrator privileges and leaves a massive alert behind.", explanation: "True. Deleting logs is loud and difficult." },
                            { text: "The 'Filter Current Log' tool alters the data on the hard drive.", explanation: "False. It only changes what is visually displayed on your screen." },
                            { text: "The 'Windows Logs' folder contains sub-categories like System, Application, and Security logs.", explanation: "True. Logs are categorized by the component that generated them." },
                            { text: "You must download Event Viewer from the Microsoft Store.", explanation: "False. It is a deeply embedded native Windows tool." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}