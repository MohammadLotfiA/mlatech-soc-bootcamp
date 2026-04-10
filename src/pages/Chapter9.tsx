import React from 'react';
import { Globe, Download, ShieldAlert, MousePointer2, FileSearch } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter9() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Browser Basics & Downloads"
                description="A web browser (Chrome, Edge, Firefox) is your window to the outside world. Understanding exactly what happens when a file moves from a web server out on the internet, through the browser, and onto your local hard drive is a critical analytical skill."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Globe className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Open vs. Save</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When you click a file online, you can "Open" it or "Save" it. Even if you just click "Open" (like viewing a PDF in the browser), the computer <strong>still downloads it</strong> to a temporary hidden folder on your hard drive.
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
                                When a user claims, "I didn't download anything, I just clicked a link," analysts know better. Windows applies a hidden "Mark of the Web" tag to files that came from browsers. We use the browser's download history to trace exactly which malicious URL the file came from.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Tracing the Download"
                description="We are going to download a safe file and use the browser's native tools to locate its absolute path on the hard drive."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Download className="w-4 h-4 text-muted-foreground" /> Step 1: The Acquisition</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open your preferred web browser (Chrome, Edge, etc.).</li>
                                <li>2. Go to any safe website (like google.com or wikipedia.org).</li>
                                <li>3. Right-click any image on the page and select <strong>Save image as...</strong></li>
                                <li>4. Save it directly to your <strong>Desktop</strong>.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><FileSearch className="w-4 h-4 text-emerald-500" /> Step 2: The Investigation</h4>
                            <p className="text-sm text-muted-foreground mb-2">Imagine you lost the file, or you need to prove exactly where it landed.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. In your browser, press <code className="bg-secondary px-1 rounded text-foreground">Ctrl + J</code>. This opens the browser's Download History.</li>
                                <li>2. Find the image you just downloaded in the list.</li>
                                <li>3. Do <strong>not</strong> click the image itself. Instead, look for a button or folder icon that says <strong>Show in folder</strong> and click it.</li>
                                <li>4. File Explorer will open, taking you directly to the Desktop and highlighting the exact file.</li>
                            </ol>
                            <p className="text-xs text-emerald-500 font-bold mt-3">Cleanup: Delete the image from your Desktop.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="If a user clicks a link to view a PDF in their browser, but never explicitly clicks 'Save', what happens technically?"
                        correctIndexes={[2]}
                        options={[
                            { text: "The file stays purely in the cloud and never touches the local machine.", explanation: "Incorrect. The computer must download the data to display it." },
                            { text: "The file is permanently saved to the Documents folder.", explanation: "Incorrect. It is not saved to a permanent user directory automatically." },
                            { text: "The file is silently downloaded and stored in a temporary hidden folder on the hard drive.", explanation: "Correct! Viewing a file online still requires downloading it to local storage." },
                            { text: "The browser blocks the file from opening for security.", explanation: "Incorrect. Browsers natively open PDFs." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is the 'Show in folder' button in a browser's download history useful for a SOC Analyst?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It automatically deletes the malware.", explanation: "Incorrect. It only opens File Explorer." },
                            { text: "It instantly navigates to the exact absolute path where the payload landed, avoiding manual searching.", explanation: "Correct! It bridges the gap between the browser and the file system." },
                            { text: "It encrypts the downloaded file.", explanation: "Incorrect. It does not alter the file." },
                            { text: "It reveals the IP address of the attacker.", explanation: "Incorrect. It reveals local file paths, not network IP addresses." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding web browsers and downloads."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "Browsers keep a log (history) of downloaded files, which analysts can use during investigations.", explanation: "True. Pressing Ctrl+J reveals this timeline." },
                            { text: "Files downloaded from the internet are always 100% safe if using Google Chrome.", explanation: "False. Browsers cannot block all malware." },
                            { text: "Windows applies a hidden 'Mark of the Web' attribute to files downloaded via a browser.", explanation: "True. This is how Windows knows to show the 'Protected View' warning." },
                            { text: "You cannot change the default download location in a browser.", explanation: "False. You can configure browsers to save to the Desktop or prompt you every time." },
                            { text: "Threat actors use phishing emails to trick users into downloading malicious files via their browser.", explanation: "True. This is a primary initial access technique." },
                            { text: "Once a file is downloaded, closing the browser deletes the file.", explanation: "False. Downloads persist on the hard drive." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}