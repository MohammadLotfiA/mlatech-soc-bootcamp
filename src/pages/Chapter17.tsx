import React from 'react';
import { ShieldCheck, History, ShieldAlert, MousePointer2, ScanSearch } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter17() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Windows Defender & Protection History"
                description="Every modern Windows computer comes with a built-in Antivirus called Windows Defender (now part of Windows Security). It constantly scans the hard drive and memory for malicious signatures, acting as the first line of defense against cyber threats."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Quarantine</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When an antivirus detects malware, it rarely deletes it immediately. Instead, it places the file in a <strong>Quarantine</strong>—a locked, secure folder where the malware cannot execute. This prevents accidental deletion of legitimate files (False Positives).
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
                                In an enterprise SOC, you will see antivirus alerts pop up on your dashboard. However, you must understand exactly how the end-user sees that alert on their screen. Navigating their local "Protection History" tells you exactly what Defender blocked and when.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Antivirus Console"
                description="We are going to open the native security center, run a manual scan, and investigate the historical logs of blocked threats."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><ScanSearch className="w-4 h-4 text-muted-foreground" /> Step 1: Running a Manual Scan</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Windows Security</code>, and open the app.</li>
                                <li>2. Click on <strong>Virus & threat protection</strong>.</li>
                                <li>3. Click the <strong>Quick scan</strong> button.</li>
                                <li>4. Observe how it quickly checks the most common areas malware hides (like Startup folders and the Registry) rather than scanning the entire hard drive.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><History className="w-4 h-4 text-emerald-500" /> Step 2: Investigating the Log</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's check the local history of security events.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Underneath the "Quick scan" button, click <strong>Protection history</strong>.</li>
                                <li>2. This page lists all recently quarantined items, blocked actions, and recommendations.</li>
                                <li>3. If your list is empty, that is a good thing! If you see items, you can click them to view the exact absolute path of the file that triggered the alarm.</li>
                                <li>4. <em>Cleanup:</em> Simply close the Windows Security app.</li>
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
                        prompt="When Windows Defender detects a malicious file, what does it usually do by default?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It permanently deletes the file immediately.", explanation: "Incorrect. Deleting it immediately risks destroying legitimate files by mistake." },
                            { text: "It moves the file to the Quarantine to prevent execution.", explanation: "Correct! It safely locks the file away for review." },
                            { text: "It renames the file extension to .txt.", explanation: "Incorrect. Changing the extension is not a standard AV containment method." },
                            { text: "It emails the file to Microsoft.", explanation: "Incorrect. While it may share telemetry, it does not email your files." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="What is a 'False Positive' in cybersecurity?"
                        correctIndexes={[0]}
                        options={[
                            { text: "When an antivirus flags a perfectly safe, legitimate file as malware.", explanation: "Correct! The security tool made a mistake and blocked something innocent." },
                            { text: "When malware successfully bypasses the antivirus.", explanation: "Incorrect. This is known as a False Negative." },
                            { text: "When a user intentionally downloads a virus.", explanation: "Incorrect. This is just reckless user behavior." },
                            { text: "When a scan completes but finds zero threats.", explanation: "Incorrect. This is a True Negative (the system is genuinely clean)." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Windows Defender and Antivirus software."
                        helper="Select exactly 3 options."
                        correctIndexes={[1, 2, 5]}
                        options={[
                            { text: "A 'Quick Scan' checks every single file on the entire C:\\ drive.", explanation: "False. A Full Scan does this. A Quick Scan only checks critical areas." },
                            { text: "Protection History allows a user to see the exact absolute path of a quarantined file.", explanation: "True. It provides the necessary details to investigate the origin." },
                            { text: "Windows Defender is built into modern Windows operating systems by default.", explanation: "True. You do not need to download it separately." },
                            { text: "Standard users can turn off real-time antivirus protection.", explanation: "False. Disabling security tools requires Administrator privileges." },
                            { text: "If a file is in Quarantine, it can still execute if the user double-clicks it.", explanation: "False. Quarantined files are locked and cannot be run." },
                            { text: "Antivirus software relies on 'signatures' (known digital fingerprints) to identify malware.", explanation: "True. This is the primary method of classic detection." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}