import React from 'react';
import { Copy, Trash2, ShieldAlert, MousePointer2, AlertCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter7() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Copy, Move, Delete, Restore"
                description="Data is constantly shifting. Understanding the difference between copying (duplicating) and moving (relocating) is critical. Furthermore, you must understand that 'deleting' a file in Windows does not instantly destroy it."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Trash2 className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Recycle Bin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When you press the Delete key, Windows does not destroy the file. It simply moves it to a hidden system folder called the Recycle Bin. The data is still sitting on your hard drive, taking up space, until the bin is emptied.
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
                                Analysts frequently <strong>Move</strong> live malware out of the Downloads folder and into secure, isolated folders for analysis. Additionally, if an attacker tries to hastily delete their tools, analysts can sometimes recover them from the Recycle Bin.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Safety Net"
                description="We will manipulate the file we created in Chapter 2, delete it, recover it, and then destroy it permanently."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Copy className="w-4 h-4 text-muted-foreground" /> Step 1: Copying and Deleting</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open your <code>Lab_Work</code> folder on the Desktop.</li>
                                <li>2. Right-click <code>notes.txt</code> and select <strong>Copy</strong> (<code className="bg-secondary px-1 rounded">Ctrl + C</code>).</li>
                                <li>3. Open your <strong>Documents</strong> folder, right-click, and select <strong>Paste</strong> (<code className="bg-secondary px-1 rounded">Ctrl + V</code>). You now have two identical files.</li>
                                <li>4. Go back to the Desktop <code>Lab_Work</code> folder. Select the original <code>notes.txt</code> and press the <strong>Delete</strong> key.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-emerald-500" /> Step 2: Restoration and Permanent Deletion</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Go to your Desktop and double-click the <strong>Recycle Bin</strong> icon.</li>
                                <li>2. Find <code>notes.txt</code>, right-click it, and select <strong>Restore</strong>. It will instantly return to the <code>Lab_Work</code> folder.</li>
                                <li>3. Go to <code>Lab_Work</code>. Select <code>notes.txt</code>.</li>
                                <li>4. This time, hold <strong>Shift</strong> and press <strong>Delete</strong>.</li>
                                <li>5. Notice the warning says "permanently delete". Click Yes. It skips the Recycle Bin entirely.</li>
                            </ol>
                            <p className="text-xs text-emerald-500 font-bold mt-3">Cleanup: Delete the extra copy in Documents, and delete the Lab_Work folder permanently.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the core difference between Copying and Moving a file?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Copying changes the file extension, moving does not.", explanation: "Incorrect. Neither action alters the file extension." },
                            { text: "Copying creates a duplicate, leaving the original intact. Moving relocates the original file.", explanation: "Correct! Moving (Cut/Paste) leaves only one file at the end." },
                            { text: "Moving a file requires Administrator privileges.", explanation: "Incorrect. Standard users can move their own files." },
                            { text: "Copying a file deletes the original.", explanation: "Incorrect. That describes moving (cutting)." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="When you select a file and press the standard 'Delete' key, what happens to the data?"
                        correctIndexes={[3]}
                        options={[
                            { text: "It is permanently erased from the hard drive.", explanation: "Incorrect. Standard deletion does not destroy data immediately." },
                            { text: "It is sent to the cloud for backup.", explanation: "Incorrect. Deletion is a local process." },
                            { text: "The file is encrypted so no one can read it.", explanation: "Incorrect. Deletion does not encrypt files." },
                            { text: "It is relocated to the Recycle Bin and still occupies hard drive space.", explanation: "Correct! It acts as a safety net until you empty the bin." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding deletion and the Recycle Bin."
                        helper="Select exactly 3 options."
                        correctIndexes={[1, 2, 4]}
                        options={[
                            { text: "Emptying the Recycle Bin will restore all the files to their original locations.", explanation: "False. Emptying the bin permanently deletes them." },
                            { text: "Using the shortcut 'Shift + Delete' bypasses the Recycle Bin and permanently deletes the file.", explanation: "True. This is the fast way to destroy a file." },
                            { text: "Restoring a file from the Recycle Bin automatically places it back in the exact folder it was deleted from.", explanation: "True. Windows remembers its original absolute path." },
                            { text: "Files in the Recycle Bin do not take up any storage space.", explanation: "False. The data is still on the drive taking up space." },
                            { text: "If a threat actor accidentally deletes a script normally, an analyst might find it in the Recycle Bin.", explanation: "True. If they don't Shift+Delete, the evidence remains." },
                            { text: "The Recycle Bin can only hold up to 10 files at a time.", explanation: "False. It holds thousands of files until it reaches a designated size limit." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}