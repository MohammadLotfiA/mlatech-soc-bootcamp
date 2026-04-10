import React from 'react';
import { Zap, ServerCog, ShieldAlert, MousePointer2, PlayCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter15() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Startup Apps & Background Services"
                description="Programs don't always wait for you to click them. Many are configured to launch automatically the moment the computer turns on. Understanding how things start automatically is crucial for troubleshooting slow computers and finding hidden threats."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <ServerCog className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">What is a Service?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                A <strong>Windows Service</strong> is a special type of background process. Services run before any user even logs in, and they usually operate with the highest possible system privileges. They handle core tasks like Wi-Fi, Audio, and Printing.
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
                                In cybersecurity, we call automatic execution <strong>Persistence</strong>. If a hacker infects a machine but the malware dies when the victim reboots, the hack failed. Attackers constantly write their malware into the Startup Apps list or install it as a hidden Service so it survives reboots.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Controlling Automatic Execution"
                description="We are going to navigate to the two primary places where software is configured to start automatically."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-muted-foreground" /> Step 1: Startup Apps</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>Task Manager</strong>.</li>
                                <li>2. Click the <strong>Startup apps</strong> tab (the icon looks like a speedometer).</li>
                                <li>3. Review the list of apps that boot when you log in. Look at the <em>Status</em> column.</li>
                                <li>4. Find a non-critical app (like Spotify, OneDrive, or Cortana), right-click it, and select <strong>Disable</strong>.</li>
                                <li>5. <em>Cleanup:</em> Right-click and <strong>Enable</strong> it again.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><PlayCircle className="w-4 h-4 text-emerald-500" /> Step 2: Observing Services</h4>
                            <p className="text-sm text-muted-foreground mb-2">We will look at services, but we will not stop them to avoid breaking your PC.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">services.msc</code>, and hit Enter.</li>
                                <li>2. This opens the Services management console. Scroll through the massive list.</li>
                                <li>3. Look at the <strong>Startup Type</strong> column. If it says <em>Automatic</em>, it boots with the PC. If it says <em>Manual</em>, it waits until a program requests it.</li>
                                <li>4. Find the <strong>Print Spooler</strong> service. Notice its status is likely 'Running' and 'Automatic'.</li>
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
                        prompt="In cybersecurity, what term describes malware configuring itself to automatically launch every time the computer is turned on?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Encryption", explanation: "Incorrect. Encryption is locking data." },
                            { text: "Persistence", explanation: "Correct! The malware is 'persisting' across reboots." },
                            { text: "Exfiltration", explanation: "Incorrect. This is the act of stealing data." },
                            { text: "Privilege Escalation", explanation: "Incorrect. This is gaining admin rights, not surviving a reboot." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="What is a distinguishing characteristic of a Windows Service?"
                        correctIndexes={[2]}
                        options={[
                            { text: "It requires a visible window to operate.", explanation: "Incorrect. Services run invisibly." },
                            { text: "It can only be launched by an Administrator clicking an icon.", explanation: "Incorrect. They launch automatically." },
                            { text: "It can run in the background before any human user even logs into the computer.", explanation: "Correct! They operate at the system level." },
                            { text: "It is automatically deleted when the computer shuts down.", explanation: "Incorrect. They persist." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Startup Apps and Services."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "Disabling an app in the Task Manager 'Startup' tab prevents it from automatically launching when you log in.", explanation: "True. It stops the auto-execution trigger." },
                            { text: "Disabling a Startup app permanently uninstalls the software from the hard drive.", explanation: "False. It only stops it from launching automatically." },
                            { text: "A service with a 'Manual' Startup Type will only run when specifically requested by the OS or an application.", explanation: "True. It does not launch on its own during boot." },
                            { text: "Standard users can freely disable critical Windows security services.", explanation: "False. Modifying services requires Administrator privileges." },
                            { text: "Threat actors often install malware as a Service to ensure it runs constantly in the background.", explanation: "True. It is a highly effective persistence mechanism." },
                            { text: "The 'services.msc' console is only available on web servers.", explanation: "False. It is available on all Windows operating systems." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}