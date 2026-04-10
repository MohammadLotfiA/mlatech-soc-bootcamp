import React from 'react';
import { Home, Download, ShieldAlert, MousePointer2, Users } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter4() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Important Windows Places"
                description="Windows automatically creates specific folders for every person who logs into the computer. Knowing exactly where these default locations live on the hard drive is essential for organizing your data and investigating security alerts."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Users className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The "Users" Neighborhood</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                If you navigate to <code>C:\Users</code>, you will see a folder for every account on the PC. Inside your personal folder, Windows creates your default <strong>Desktop</strong>, <strong>Documents</strong>, and <strong>Downloads</strong> folders. Your files are isolated from other standard users.
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
                                The <strong>Downloads</strong> folder is the number one entry point for malware. When a user clicks a malicious link in a phishing email, the payload almost always lands in <code>C:\Users\Username\Downloads</code>. This is the first place analysts check.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Exploring Your Profile"
                description="Let's navigate the file system manually to find where your personal data actually lives on the C: drive."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Home className="w-4 h-4 text-muted-foreground" /> Step 1: Manual Navigation</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>File Explorer</strong> (Click the yellow folder on the taskbar or press <code className="bg-secondary px-1 rounded text-foreground">Win + E</code>).</li>
                                <li>2. On the left sidebar, click <strong>This PC</strong>.</li>
                                <li>3. Double-click <strong>Local Disk (C:)</strong>.</li>
                                <li>4. Double-click the <strong>Users</strong> folder.</li>
                                <li>5. Find the folder with your username and double-click it.</li>
                                <li>6. Observe the default folders inside (Desktop, Documents, Downloads, Music, Pictures).</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Download className="w-4 h-4 text-emerald-500" /> Step 2: Verification</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Double-click your <strong>Downloads</strong> folder.</li>
                                <li>2. Click the empty space in the address bar at the top to reveal the absolute path.</li>
                                <li>3. Verify it says something like <code>C:\Users\YourName\Downloads</code>.</li>
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
                        prompt="Where do files downloaded from the internet via a web browser usually go by default?"
                        correctIndexes={[2]}
                        options={[
                            { text: "C:\\Windows\\System32", explanation: "Incorrect. That is for core operating system files." },
                            { text: "Directly onto the Desktop", explanation: "Incorrect. While you can save them there, it is not the browser's default." },
                            { text: "C:\\Users\\YourName\\Downloads", explanation: "Correct! The Downloads folder inside the user profile is the default destination." },
                            { text: "The Recycle Bin", explanation: "Incorrect. The Recycle Bin is for deleted items." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is the Downloads folder a primary focus for SOC Analysts?"
                        correctIndexes={[0]}
                        options={[
                            { text: "It is the most common initial entry point for downloaded malware and phishing payloads.", explanation: "Correct! When users fall for tricks, the payload usually lands here." },
                            { text: "It is the only folder that cannot be scanned by antivirus.", explanation: "Incorrect. Antivirus scans the Downloads folder constantly." },
                            { text: "It is where Windows stores passwords.", explanation: "Incorrect. Windows uses the Credential Manager and secure vaults for passwords." },
                            { text: "It requires Administrator privileges to access.", explanation: "Incorrect. Users have full access to their own Downloads folder." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Windows User folders."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 4]}
                        options={[
                            { text: "All users share the exact same Documents folder.", explanation: "False. Each user gets their own isolated Documents folder." },
                            { text: "The Desktop is actually a folder located inside C:\\Users.", explanation: "True. It is a standard folder tied to your specific user profile." },
                            { text: "Deleting a file from Downloads permanently removes it instantly.", explanation: "False. It generally goes to the Recycle Bin first." },
                            { text: "Users can freely read files in other standard users' personal folders by default.", explanation: "False. Windows permissions block standard users from reading each other's data." },
                            { text: "The C:\\Users directory contains a folder for every user account created on the PC.", explanation: "True. Every profile gets its own container here." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}