import React from 'react';
import { FolderOpen, FileText, ShieldAlert, MousePointer2, AlertTriangle, Trash2 } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter2() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Files and Folders with the Mouse"
                description="Data cannot just float freely on a hard drive. It must be stored in files, and those files must be organized into folders. Understanding how to create and nest these containers is fundamental to computing."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <FolderOpen className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Folders (Directories)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Containers used to organize data. A folder can contain files, and it can also contain other folders (called sub-folders).
                            </p>
                            <p className="text-xs font-mono text-primary bg-primary/10 p-2 rounded">Example: C:\Users\Documents</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Threat actors do not drop malware randomly. They create specific, nested folder structures to hide their tools. Recognizing normal vs. abnormal folder structures is how analysts spot hidden payloads.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Creating the Evidence Container"
                description="We will use the mouse to create a nested folder structure and drop a text file inside it."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><FolderOpen className="w-4 h-4 text-muted-foreground" /> Step 1: Creation</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Go to your <strong>Desktop</strong>.</li>
                                <li>2. Right-click an empty space, select <strong>New {'>'} Folder</strong>.</li>
                                <li>3. Name the folder <code className="bg-secondary px-1 rounded text-foreground">Lab_Work</code> and press Enter.</li>
                                <li>4. Double-click <code>Lab_Work</code> to open it.</li>
                                <li>5. Inside the folder, right-click, select <strong>New {'>'} Text Document</strong>.</li>
                                <li>6. Name it <code className="bg-secondary px-1 rounded text-foreground">notes.txt</code>.</li>
                                <li>7. Open <code>notes.txt</code>, type the word <code className="text-emerald-400 font-mono">FLAG_CAPTURED</code>, and save it.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500" /> Important Note</h4>
                            <p className="text-sm text-muted-foreground">
                                Do not delete this folder yet! We will use <code>Lab_Work</code> and <code>notes.txt</code> in the next chapter.
                            </p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="Which of the following characters is INVALID and cannot be used in a Windows file name?"
                        correctIndexes={[3]}
                        options={[
                            { text: "A dash (-)", explanation: "Incorrect. Dashes are allowed." },
                            { text: "An underscore (_)", explanation: "Incorrect. Underscores are commonly used." },
                            { text: "A period (.)", explanation: "Incorrect. Periods separate the name from the extension." },
                            { text: "A forward slash (/)", explanation: "Correct! Slashes are reserved for separating directories and cannot be used in names." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is understanding folder structures critical for a SOC Analyst?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Because malware can only execute inside the Windows folder.", explanation: "Incorrect. Malware can execute from many places." },
                            { text: "Because malware drops payloads in predictable locations, and analysts must spot abnormalities.", explanation: "Correct! Knowing what belongs where is the key to hunting." },
                            { text: "To help users organize their cluttered desktops.", explanation: "Incorrect. That is a helpdesk task." },
                            { text: "Because antivirus software deletes empty folders.", explanation: "Incorrect. Antivirus scans files, not empty folders." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding files and folders in Windows."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "A folder can contain both files and other sub-folders.", explanation: "True. This allows for hierarchical organization." },
                            { text: "A folder has a maximum limit of 10 files.", explanation: "False. Folders can hold thousands of files." },
                            { text: "A file is a container that holds actual data (like text or code).", explanation: "True. Files store the actual bytes of information." },
                            { text: "A file can contain a folder inside of it.", explanation: "False. Folders hold files, not the other way around." },
                            { text: "File names in Windows cannot contain a colon (:).", explanation: "True. Colons are reserved for drive letters (like C:)." },
                            { text: "Folders are automatically deleted when the PC restarts.", explanation: "False. Folders are persistent storage." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}