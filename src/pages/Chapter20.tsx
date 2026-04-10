import React from 'react';
import { FolderTree, Keyboard, ShieldAlert, MousePointer2, CheckCircle2, Terminal } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter20() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="CLI Navigation & File Operations"
                description="Now that you know how to read the system, it is time to move around. In the GUI, you move by double-clicking folders. In the CLI, you move by typing 'cd' (Change Directory). We are going to prove that the black terminal screen and your visual desktop are the exact same place."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <FolderTree className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Location, Location, Location</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When you open the terminal, you are "standing" inside a specific folder (usually <code>C:\Users\YourName</code>). Any command you type happens <em>in that folder</em>. To see what files are in the room with you, you use the <strong>dir</strong> (Directory) command.
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
                                Attackers use CLI commands to navigate the hard drive and create hidden staging folders for their stolen data. Analysts must know how to read these commands. If you see a log showing an attacker typed <code>mkdir C:\Temp\Stolen</code>, you know exactly what they did.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Bridging the Worlds"
                description="We are going to use the command line to create a folder on your visual desktop, proving that both interfaces control the same file system."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Keyboard className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI to GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Terminal className="w-4 h-4 text-muted-foreground" /> Step 1: Navigating and Creating</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>. Notice the prompt shows your current path (e.g., <code>C:\Users\Name{'>'}</code>).</li>
                                <li>
                                    2. Let's move to the Desktop. Type the following and press Enter:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">cd Desktop</pre>
                                    </div>
                                    <em>(Notice how the prompt changes to C:\Users\Name\Desktop{'>'})</em>
                                </li>
                                <li>
                                    3. Let's create a new folder (Make Directory). Type:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">mkdir CLI_Lab</pre>
                                    </div>
                                </li>
                                <li>
                                    4. Let's list the files to verify it worked. Type:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">dir</pre>
                                    </div>
                                    <em>(You will see "CLI_Lab" listed in the text output).</em>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Step 2: Visual Proof & Cleanup</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Minimize the Command Prompt window and look at your actual graphical Desktop.</li>
                                <li>2. You will see the yellow folder named <strong>CLI_Lab</strong> sitting there!</li>
                                <li>3. <em>Cleanup:</em> Use your mouse to right-click the folder and <strong>Delete</strong> it. You have successfully bridged the CLI and the GUI.</li>
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
                        prompt="What does the 'cd' command stand for in the Windows terminal?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Change Directory", explanation: "Correct! It is used to move from one folder to another." },
                            { text: "Copy Data", explanation: "Incorrect. The copy command is literally 'copy'." },
                            { text: "Clear Drive", explanation: "Incorrect. This would be highly destructive!" },
                            { text: "Current Desktop", explanation: "Incorrect. It works for any folder, not just the desktop." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If an analyst sees a log showing a user typed 'mkdir Secret_Files', what exactly happened?"
                        correctIndexes={[1]}
                        options={[
                            { text: "The user deleted a folder called Secret_Files.", explanation: "Incorrect. 'rmdir' or 'del' removes items." },
                            { text: "The user created a new folder named Secret_Files.", explanation: "Correct! 'mkdir' stands for Make Directory." },
                            { text: "The user encrypted a folder named Secret_Files.", explanation: "Incorrect. 'mkdir' does not encrypt data." },
                            { text: "The user moved a file into Secret_Files.", explanation: "Incorrect. The 'move' command relocates files." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding CLI Navigation."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "A folder created in the CLI is completely invisible in the graphical Desktop.", explanation: "False. The CLI and GUI are just two windows into the exact same file system." },
                            { text: "The 'dir' command lists all the files and folders inside your current directory.", explanation: "True. It is the text equivalent of double-clicking a folder to see what is inside." },
                            { text: "The CLI cannot be used to navigate to the C:\\Windows folder.", explanation: "False. You can navigate anywhere you have permissions to go." },
                            { text: "If a folder name has spaces, like 'My Documents', you must wrap it in quotes when typing the command (e.g., cd \"My Documents\").", explanation: "True. Without quotes, the CLI thinks 'My' and 'Documents' are two separate commands." },
                            { text: "The 'cd' command is used to delete files.", explanation: "False. It is used to Change Directory." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}