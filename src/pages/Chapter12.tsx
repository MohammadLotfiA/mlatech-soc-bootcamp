import React from 'react';
import { Settings, MonitorCog, ShieldAlert, MousePointer2 } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter12() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Settings, Control Panel, and System Tools"
                description="Windows is an old operating system that has been heavily updated. Because of this, it currently has two 'brains' for configuration: the modern, touch-friendly Settings app, and the legacy, deeply technical Control Panel."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <MonitorCog className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Two Doors, Same Room</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Microsoft is slowly moving everything into the modern <strong>Settings</strong> app. However, advanced networking and administrative tools still live in the <strong>Control Panel</strong>. Changing a setting in one app usually updates the exact same underlying Windows configuration.
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
                                A common trick in malware is to install a secondary, malicious application that silently runs in the background. Analysts must know how to navigate directly to the legacy "Programs and Features" list to audit exactly what software is installed on a machine.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Auditing the System"
                description="We are going to open both the modern and legacy configuration hubs to view the software installed on your machine."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Settings className="w-4 h-4 text-muted-foreground" /> Step 1: The Modern Settings</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Press <code className="bg-secondary px-1 rounded text-foreground">Win + I</code> to quickly open the modern Settings app.</li>
                                <li>2. Click on <strong>Apps</strong> on the left sidebar.</li>
                                <li>3. Click <strong>Installed apps</strong>.</li>
                                <li>4. Scroll through the list. This modern UI shows both traditional software and apps downloaded from the Microsoft Store.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><MonitorCog className="w-4 h-4 text-emerald-500" /> Step 2: The Legacy Control Panel</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Control Panel</code>, and press Enter.</li>
                                <li>2. Look for the green text that says <strong>Programs</strong> and click the smaller link beneath it: <strong>Uninstall a program</strong>.</li>
                                <li>3. This opens "Programs and Features". Notice how this list only shows traditional desktop software, and looks much older.</li>
                                <li>4. <em>Analytical Note:</em> You can click the "Installed On" column header to instantly sort by the newest software added to the system!</li>
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
                        prompt="Why do Windows computers currently have both a Settings app and a Control Panel?"
                        correctIndexes={[1]}
                        options={[
                            { text: "One is for the internet, and one is for local hardware.", explanation: "Incorrect. They both manage local OS configurations." },
                            { text: "Microsoft is transitioning to the modern Settings app, but many advanced legacy tools have not been moved over yet.", explanation: "Correct! It is an ongoing migration spanning multiple Windows versions." },
                            { text: "The Control Panel is strictly for Administrators, and Settings is for Standard Users.", explanation: "Incorrect. Both users can access both apps, limited only by UAC." },
                            { text: "Settings is a virus that mimics the Control Panel.", explanation: "Incorrect. Both are legitimate, native Windows tools." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If an analyst needs to see a list of newly installed software to check for unauthorized applications, which tool should they use?"
                        correctIndexes={[3]}
                        options={[
                            { text: "The Recycle Bin", explanation: "Incorrect. The Recycle Bin holds deleted files, not installed software lists." },
                            { text: "File Explorer -> Downloads", explanation: "Incorrect. The downloaded installer might be there, but it doesn't prove the software was actually installed." },
                            { text: "Task Manager", explanation: "Incorrect. Task Manager shows currently running apps, not all installed software." },
                            { text: "Settings -> Installed Apps (or Control Panel -> Programs and Features)", explanation: "Correct! This is the definitive registry of installed software on the machine." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Windows configuration tools."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 2]}
                        options={[
                            { text: "Changing a configuration in the legacy Control Panel will often reflect in the modern Settings app as well.", explanation: "True. They are often manipulating the exact same underlying OS data." },
                            { text: "You must use the Command Prompt to uninstall software.", explanation: "False. Software is normally uninstalled via the GUI in Settings or Control Panel." },
                            { text: "The Control Panel allows you to sort installed software by the exact date it was installed.", explanation: "True. Clicking the 'Installed On' column makes finding recently dropped software easy." },
                            { text: "The modern Settings app cannot be accessed by Standard Users.", explanation: "False. Standard users can use it to change their personal preferences (like wallpaper)." },
                            { text: "Control Panel is a downloadable app from the Microsoft Store.", explanation: "False. It is a native, deeply embedded part of the Windows OS." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}