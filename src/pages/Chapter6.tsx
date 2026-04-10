import React from 'react';
import { EyeOff, FileCode2, ShieldAlert, MousePointer2, Settings } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter6() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Hidden Items and Extensions"
                description="By default, Windows hides certain files and file extensions to make the operating system look 'cleaner' and prevent beginners from accidentally breaking things. As an IT professional, you must force Windows to tell you the truth."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <FileCode2 className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">File Extensions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                A file name has two parts: the name, and the extension (e.g., <code>report.txt</code>). The extension tells Windows what program to use to open it. By default, Windows hides known extensions, showing only <code>report</code>.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/10 border-destructive/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-destructive mb-2" />
                            <CardTitle className="text-lg text-destructive">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Attackers rely on Windows hiding extensions. They will name a malicious program <code>invoice.pdf.exe</code>. Because Windows hides the <code>.exe</code>, the victim only sees <code>invoice.pdf</code>, assumes it is a safe document, and clicks it.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Unmasking the Deception"
                description="We are going to change the global folder options to reveal hidden files and unmask file extensions permanently."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><EyeOff className="w-4 h-4 text-muted-foreground" /> Step 1: Hiding a File</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <code>Lab_Work</code> folder on your Desktop (from Chapter 2).</li>
                                <li>2. Right-click <code>notes.txt</code> and select <strong>Properties</strong>.</li>
                                <li>3. At the bottom, check the box next to <strong>Hidden</strong> and click OK.</li>
                                <li>4. The file will disappear! (It is not deleted, just hidden).</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Settings className="w-4 h-4 text-emerald-500" /> Step 2: Forcing the Truth</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's change the view settings to reveal everything.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. At the top of File Explorer, click the <strong>View</strong> tab.</li>
                                <li>2. Check the box for <strong>Hidden items</strong>. Your <code>notes.txt</code> will reappear (slightly faded).</li>
                                <li>3. Check the box for <strong>File name extensions</strong>.</li>
                                <li>4. Notice how your file is now explicitly labeled <code>notes.txt</code> instead of just <code>notes</code>.</li>
                            </ol>
                            <p className="text-xs text-emerald-500 font-bold mt-3">Cleanup: We leave these settings ON! IT professionals never hide extensions.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary purpose of a file extension (like .txt or .jpg)?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It encrypts the file for security.", explanation: "Incorrect. Extensions do not encrypt data." },
                            { text: "It tells the operating system what application to use to open the file.", explanation: "Correct! It maps the file to the correct program." },
                            { text: "It determines the file's size.", explanation: "Incorrect. Size is based on the data inside the file." },
                            { text: "It prevents the file from being deleted.", explanation: "Incorrect. Files with extensions can easily be deleted." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why do attackers often name their malicious executable files 'report.pdf.exe'?"
                        correctIndexes={[2]}
                        options={[
                            { text: "To make the file run faster in Adobe Reader.", explanation: "Incorrect. Adobe Reader does not run .exe files." },
                            { text: "Because two extensions bypass antivirus software.", explanation: "Incorrect. Antivirus checks the file hash, not just the name." },
                            { text: "To trick the user. Because Windows hides the '.exe' by default, the user only sees 'report.pdf'.", explanation: "Correct! This relies entirely on Windows' default behavior to trick the human." },
                            { text: "To reduce the file size.", explanation: "Incorrect. Adding extensions does not reduce file size." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding hidden files and extensions."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 2]}
                        options={[
                            { text: "Checking the 'Hidden' property box deletes the file from the hard drive.", explanation: "False. It only stops File Explorer from displaying it." },
                            { text: "IT professionals and SOC Analysts should always have 'File name extensions' turned ON.", explanation: "True. You must be able to see the true nature of a file." },
                            { text: "Hidden files are slightly faded/transparent when viewed in File Explorer.", explanation: "True. This visually indicates to the user that the file has the hidden attribute applied." },
                            { text: "Malware cannot be marked as a hidden file.", explanation: "False. Malware heavily utilizes the hidden attribute." },
                            { text: "Renaming a file's extension from .txt to .mp3 will turn the text into audio.", explanation: "False. Changing the name does not change the actual underlying data." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}