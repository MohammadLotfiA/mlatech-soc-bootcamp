import React from 'react';
import { Map, ChevronRight, ShieldAlert, MousePointer2 } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter3() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Paths and Addresses"
                description="Just like a house has a street address, every file has an absolute 'Path'. The path tells the operating system exactly which drive and which folders to travel through to find the file."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Map className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Breadcrumbs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                File Explorer shows a friendly "Breadcrumb" trail at the top (e.g., <code>This PC {'>'} Desktop</code>). However, clicking the empty space in that bar reveals the true, absolute path.
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
                                When an Antivirus triggers an alert, it doesn't just say "malware found." It gives you the exact absolute path. You must know how to navigate to that precise location to investigate the file.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Revealing the Absolute Path"
                description="We will find the exact system address of the folder we created in Chapter 2."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-muted-foreground" /> Step 1: Extract the Path</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <code>Lab_Work</code> folder on your Desktop.</li>
                                <li>2. Look at the top bar. It likely says <code className="bg-secondary px-1 rounded text-foreground">This PC {'>'} Desktop {'>'} Lab_Work</code>.</li>
                                <li>3. Click in the <strong>empty blank space</strong> to the right of "Lab_Work" in that bar.</li>
                                <li>4. The text will instantly change to a blue, highlighted absolute path (e.g., <code className="bg-secondary px-1 rounded text-primary">C:\Users\YourName\Desktop\Lab_Work</code>).</li>
                                <li>5. Right-click the blue text and select <strong>Copy</strong>.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2">Step 2: Save the Evidence</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Open your <code>notes.txt</code> file.</li>
                                <li>2. Paste the copied path on a new line below your flag.</li>
                                <li>3. Save the file.</li>
                            </ol>
                            <p className="text-xs text-primary font-bold mt-3">We will keep this folder for the next lesson!</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="In a standard Windows file path, what does 'C:\' represent?"
                        correctIndexes={[1]}
                        options={[
                            { text: "The cloud backup partition.", explanation: "Incorrect. C:\\ is a local drive." },
                            { text: "The root of the primary hard drive.", explanation: "Correct! It is the highest level of the main storage drive." },
                            { text: "The Command Prompt execution layer.", explanation: "Incorrect. C represents the drive letter." },
                            { text: "The current user's profile folder.", explanation: "Incorrect. The profile folder is further down the path." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is the absolute path important for threat hunting?"
                        correctIndexes={[0]}
                        options={[
                            { text: "It gives the exact, unmistakable location of a malicious file.", explanation: "Correct! You need the exact address to quarantine or analyze the threat." },
                            { text: "It automatically deletes the malware when clicked.", explanation: "Incorrect. A path is just an address; it does not take action." },
                            { text: "It hides the file from the user.", explanation: "Incorrect. Paths define visibility; they do not inherently hide things." },
                            { text: "It encrypts the file for safe transit.", explanation: "Incorrect. File paths have nothing to do with encryption." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Choose the statements that correctly describe paths and addresses in Windows."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Two files can have the exact same absolute path and the exact same name.", explanation: "False. A path must be completely unique to one file." },
                            { text: "The File Explorer address bar can be clicked to copy the full absolute path.", explanation: "True. This is a primary shortcut for copying addresses." },
                            { text: "File paths are only visible in the Command Prompt.", explanation: "False. They are easily visible in the GUI." },
                            { text: "File paths in Windows are separated by backslashes ( \\ ).", explanation: "True. Unlike URLs which use forward slashes, Windows uses backslashes." },
                            { text: "The 'Quick Access' menu always shows the absolute path.", explanation: "False. Quick Access hides the path to make it look friendlier." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}