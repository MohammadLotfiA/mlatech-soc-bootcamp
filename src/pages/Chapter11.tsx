import React from 'react';
import { Shield, ShieldAlert, MousePointer2, Trash2, Unlock } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter11() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Standard Users, Administrators, & UAC"
                description="Not all users are equal. Windows uses the 'Principle of Least Privilege', meaning users should only have the exact permissions they need to do their job, and nothing more."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Shield className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The UAC Safety Net</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                A <strong>Standard User</strong> can save files and run apps, but cannot install software or change system settings. When they try, <strong>User Account Control (UAC)</strong> pops up, demanding an Administrator's password to proceed. This blocks malware from silently installing itself.
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
                                If an attacker compromises a Standard User account, they are trapped. They cannot disable the antivirus or read other users' files. Their primary goal becomes <strong>Privilege Escalation</strong>—finding a vulnerability to upgrade their Standard account into an Administrator account.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Elevating Privileges"
                description="We are going to upgrade the standard account we created in Chapter 10 into an Administrator, and then cleanly delete it."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Unlock className="w-4 h-4 text-muted-foreground" /> Step 1: Promotion</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>Settings</strong> {'>'} <strong>Accounts</strong> {'>'} <strong>Other users</strong>.</li>
                                <li>2. Click on the <code>SOC_Student</code> account you created.</li>
                                <li>3. Click the <strong>Change account type</strong> button.</li>
                                <li>4. In the dropdown menu, change "Standard User" to <strong>Administrator</strong> and click OK.</li>
                                <li>5. <em>Concept Check:</em> If an attacker did this, they would now have total control over your machine.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Trash2 className="w-4 h-4 text-emerald-500" /> Step 2: Demotion & Cleanup</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's remove our lab artifacts to keep the system clean.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Click <strong>Change account type</strong> again, and revert <code>SOC_Student</code> to a <strong>Standard User</strong>.</li>
                                <li>2. Click the <strong>Remove</strong> button next to the <code>SOC_Student</code> account.</li>
                                <li>3. Confirm by clicking <strong>Delete account and data</strong>.</li>
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
                        prompt="What is the primary function of User Account Control (UAC)?"
                        correctIndexes={[1]}
                        options={[
                            { text: "To encrypt all files on the user's Desktop.", explanation: "Incorrect. UAC does not perform file encryption." },
                            { text: "To pause system-altering actions and prompt for administrative confirmation or credentials.", explanation: "Correct! It acts as a gatekeeper to prevent silent, unauthorized system changes." },
                            { text: "To automatically delete malware from the Downloads folder.", explanation: "Incorrect. That is the job of Windows Defender (Antivirus)." },
                            { text: "To monitor the user's internet browsing history.", explanation: "Incorrect. UAC has nothing to do with web tracking." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="In cybersecurity, what is 'Privilege Escalation'?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Paying a ransom to unlock encrypted files.", explanation: "Incorrect. That is related to Ransomware." },
                            { text: "Downloading a file faster using Administrator bandwidth.", explanation: "Incorrect. Network bandwidth is not tied to local account permissions." },
                            { text: "The process of an attacker exploiting a flaw to turn their limited Standard access into full Administrator control.", explanation: "Correct! It is the act of 'escalating' your permissions illegally." },
                            { text: "Creating a new cloud email account.", explanation: "Incorrect. That is just standard account creation." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the actions that a STANDARD User is typically PREVENTED from doing without an Administrator password."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 3]}
                        options={[
                            { text: "Installing system-wide software.", explanation: "True. Software installation alters the core OS and requires Admin rights." },
                            { text: "Disabling Windows Defender Antivirus.", explanation: "True. Standard users cannot turn off critical security tools." },
                            { text: "Changing their own desktop wallpaper.", explanation: "False. Standard users have full control over personalizing their own environment." },
                            { text: "Viewing the files inside another user's 'Documents' folder.", explanation: "True. NTFS permissions block horizontal access between standard users." },
                            { text: "Creating a new text document on their own Desktop.", explanation: "False. Standard users have full write access to their own profile folders." },
                            { text: "Connecting to a Wi-Fi network.", explanation: "False. This is considered a standard usability feature." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}