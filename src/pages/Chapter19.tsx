import React from 'react';
import { Terminal, Search, ShieldAlert, MousePointer2, Info } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter19() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Command Prompt Read-Only Basics"
                description="The Command Prompt (cmd.exe) is a text-based way to interact with Windows. Instead of clicking menus with a mouse, you type commands. It can look intimidating, but it is just a faster, more direct way to ask the computer questions."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Search className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Interrogation Without Changing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Before we learn how to create or delete files with the CLI (Command Line Interface), we must learn how to "read" the system. We can ask Windows for its IP address, its running processes, and its hardware specs in milliseconds.
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
                                Incident Responders rarely use a mouse. When a server is compromised, loading graphical windows is slow and risks triggering malware traps. Analysts use the CLI to quietly and quickly interrogate the machine to find out what the attacker did.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Interrogation"
                description="We are going to open the terminal and run three safe, read-only commands to gather information about your computer."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Terminal className="w-4 h-4 text-muted-foreground" /> Step 1: Gathering Intelligence</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">cmd</code>, and press Enter to open the Command Prompt.</li>
                                <li>
                                    2. Let's ask the OS for its core details. Type the following and press Enter:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">systeminfo</pre>
                                    </div>
                                    <em>(Wait a few seconds as it loads your RAM, OS version, and boot time).</em>
                                </li>
                                <li>
                                    3. Let's test if you have internet connectivity by sending packets to Google. Type:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ping 8.8.8.8</pre>
                                    </div>
                                </li>
                                <li>
                                    4. Let's view all running processes (the CLI version of Task Manager!). Type:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">tasklist</pre>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-emerald-500" /> Step 2: Safe Cleanup</h4>
                            <p className="text-sm text-muted-foreground mb-2">You can close the window with the red X, but real professionals close it with a command.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. Type the following and press Enter to close the terminal:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">exit</pre>
                                    </div>
                                </li>
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
                        prompt="Which command is used to display a text-based list of all currently running programs and their Process IDs (PIDs)?"
                        correctIndexes={[2]}
                        options={[
                            { text: "systeminfo", explanation: "Incorrect. This shows OS architecture and boot times." },
                            { text: "ping", explanation: "Incorrect. This tests network reachability." },
                            { text: "tasklist", explanation: "Correct! This is the CLI equivalent of the Task Manager Processes tab." },
                            { text: "exit", explanation: "Incorrect. This closes the terminal." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why do Incident Responders generally prefer the Command Line Interface (CLI) over the Graphical User Interface (GUI)?"
                        correctIndexes={[0]}
                        options={[
                            { text: "It is faster, uses fewer system resources, and avoids triggering visual malware traps.", explanation: "Correct! Speed and stealth are critical during incident response." },
                            { text: "The CLI automatically deletes viruses when it opens.", explanation: "Incorrect. The CLI is an interface, not an antivirus tool." },
                            { text: "The GUI requires an internet connection to work.", explanation: "Incorrect. The GUI works perfectly fine offline." },
                            { text: "The CLI allows them to use a mouse more efficiently.", explanation: "Incorrect. The CLI relies almost entirely on the keyboard." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding the Windows Command Prompt."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 3, 4]}
                        options={[
                            { text: "The 'ping' command is used to test if your computer can reach another device over the network.", explanation: "True. It sends small packets of data and waits for a reply." },
                            { text: "Using the CLI permanently uninstalls the Windows graphical interface.", explanation: "False. They run side-by-side perfectly." },
                            { text: "The Command Prompt can only be opened if you are an Administrator.", explanation: "False. Standard users can open it, they just have limited permissions." },
                            { text: "Typing 'exit' and pressing Enter is the proper command to close the terminal window.", explanation: "True. It safely terminates the command prompt session." },
                            { text: "The CLI and the GUI interact with the exact same underlying operating system.", explanation: "True. They are just two different ways of talking to the same 'brain'." },
                            { text: "Typing a command wrong will physically damage the hard drive.", explanation: "False. It will simply return a 'Command not recognized' error." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}