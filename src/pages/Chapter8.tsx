import React from 'react';
import { Archive, FileArchive, ShieldAlert, MousePointer2 } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter8() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="ZIP Files and Extracted Folders"
                description="Sometimes you need to send 50 files over the internet. Instead of sending 50 separate emails, you can 'compress' them into a single ZIP file. A ZIP file acts like a digital suitcase—it bundles files together and shrinks their size."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <FileArchive className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Compression vs. Extraction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>Compression</strong> takes files and shrinks them into a <code>.zip</code> package. <strong>Extraction</strong> is the process of unpacking that suitcase so the operating system can actually read and run the files normally.
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
                                Corporate email filters automatically block <code>.exe</code> files. To bypass this, hackers compress their malware into a <code>.zip</code> file. The email filter sees a harmless suitcase, lets it through, and the user extracts the malware themselves.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Packing and Unpacking"
                description="We are going to use native Windows tools to bundle files into a ZIP archive and then extract them."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Archive className="w-4 h-4 text-muted-foreground" /> Step 1: Creating the Archive</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Create a new folder on your Desktop called <code className="bg-secondary px-1 rounded text-foreground">Zip_Lab</code>.</li>
                                <li>2. Inside that folder, create two empty text documents: <code>file1.txt</code> and <code>file2.txt</code>.</li>
                                <li>3. Go back to the Desktop. Right-click the <code>Zip_Lab</code> folder.</li>
                                <li>4. Select <strong>Compress to ZIP file</strong> (or <em>Send to {'>'} Compressed (zipped) folder</em> on older Windows).</li>
                                <li>5. Notice a new file appears with a zipper icon named <code>Zip_Lab.zip</code>.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><FileArchive className="w-4 h-4 text-emerald-500" /> Step 2: Extraction</h4>
                            <p className="text-sm text-muted-foreground mb-2">Programs often crash if you try to run them while they are still packed inside the ZIP.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Right-click the <code>Zip_Lab.zip</code> file.</li>
                                <li>2. Select <strong>Extract All...</strong></li>
                                <li>3. A window will ask where to put the files. Leave the default path and click <strong>Extract</strong>.</li>
                                <li>4. A new, normal folder will appear containing your uncompressed files.</li>
                            </ol>
                            <p className="text-xs text-emerald-500 font-bold mt-3">Cleanup: Highlight the original folder, the ZIP file, and the extracted folder, and delete all three.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary technical benefit of compressing files into a ZIP archive?"
                        correctIndexes={[3]}
                        options={[
                            { text: "It permanently encrypts the files so they cannot be read.", explanation: "Incorrect. While ZIPs can have passwords, their primary purpose is not encryption." },
                            { text: "It converts text files into executable programs.", explanation: "Incorrect. Compression does not alter the underlying file types." },
                            { text: "It increases the file size to improve video quality.", explanation: "Incorrect. Compression does the exact opposite." },
                            { text: "It bundles multiple files together and reduces their overall file size for easier transfer.", explanation: "Correct! It creates a smaller, easily transportable package." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is it highly recommended to 'Extract All' before trying to run an application located inside a ZIP file?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Because extracting it changes the code into HTML.", explanation: "Incorrect. Extraction un-packages the code, it doesn't translate it." },
                            { text: "Because the application may need to read other files bundled in the folder, which it cannot do while compressed.", explanation: "Correct! If an app is 'packed', it can't " },
                            { text: "Because ZIP files automatically delete themselves after 5 minutes.", explanation: "Incorrect. ZIP files persist until manually deleted." },
                            { text: "Because Windows Defender cannot scan extracted files.", explanation: "Incorrect. Windows Defender scans both compressed and extracted files." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding ZIP files and security."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 4]}
                        options={[
                            { text: "Threat actors often use ZIP files to bypass corporate email filters that block raw .exe files.", explanation: "True. The ZIP file acts as a disguise to get past the initial security gate." },
                            { text: "A ZIP file is a type of hardware storage.", explanation: "False. It is a software file format." },
                            { text: "You must download third-party software to extract ZIP files in modern Windows.", explanation: "False. Windows natively supports ZIP compression and extraction." },
                            { text: "ZIP files can only contain text documents.", explanation: "False. ZIP files can contain any file type." },
                            { text: "Extracting a ZIP file leaves the original compressed .zip package intact on the hard drive.", explanation: "True. You are left with both the ZIP and the uncompressed folder." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}