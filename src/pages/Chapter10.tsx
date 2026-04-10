import React from 'react';
import { Users, UserPlus, ShieldAlert, MousePointer2, Info } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter10() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Local User Accounts and Profiles"
                description="A Windows computer is designed to be shared. To prevent users from overwriting each other's data, Windows uses 'User Accounts' to isolate environments. Every account gets its own Desktop, Documents, and Downloads folders."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Users className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Local vs. Microsoft Accounts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                A <strong>Microsoft Account</strong> is an email tied to the cloud (like an Xbox or Office 365 login). A <strong>Local Account</strong> exists strictly on that specific hard drive. IT environments heavily rely on local or domain-joined accounts, not personal emails.
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
                                When an attacker successfully hacks a computer, they know you might discover and delete their malware. To maintain a "backdoor," they will quietly create a new, hidden Local User account so they can log back in later.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Creating a Local User"
                description="We are going to use the Windows Settings GUI to create a local, offline user account without tying it to an email address."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><UserPlus className="w-4 h-4 text-muted-foreground" /> Step 1: The Account Creation</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu and open <strong>Settings</strong> (the gear icon).</li>
                                <li>2. Navigate to <strong>Accounts</strong> {'>'} <strong>Other users</strong> (or <em>Family & other users</em>).</li>
                                <li>3. Click <strong>Add account</strong>.</li>
                                <li>4. When prompted for an email, click <strong>"I don't have this person's sign-in information"</strong>.</li>
                                <li>5. On the next screen, click <strong>"Add a user without a Microsoft account"</strong>.</li>
                                <li>6. Set the username to <code className="bg-secondary px-1 rounded text-foreground">SOC_Student</code> and leave the password blank. Click Next.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-emerald-500" /> Step 2: Verification</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Look at your "Other users" list in Settings. You will see <code>SOC_Student</code> listed as a <strong>Local account</strong>.</li>
                                <li>2. <em>Note:</em> Windows won't actually create their <code>C:\Users\SOC_Student</code> folder until the first time they log in.</li>
                            </ol>
                            <p className="text-xs text-primary font-bold mt-3">Do not delete this account! We need it for the next chapter.</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary difference between a Local Account and a Microsoft Account?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Local accounts can only access the internet via Ethernet.", explanation: "Incorrect. Account types do not dictate network connectivity." },
                            { text: "Microsoft accounts are free, while Local accounts require a paid license.", explanation: "Incorrect. Both are native features of Windows." },
                            { text: "A Local account exists purely on the physical machine, while a Microsoft account is tied to cloud services via an email.", explanation: "Correct! Local accounts are strictly offline and machine-specific." },
                            { text: "Local accounts cannot have passwords.", explanation: "Incorrect. Local accounts can and should be secured with passwords." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is monitoring the creation of new user accounts a critical SOC function?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Attackers create rogue local accounts to establish a backdoor for future access.", explanation: "Correct! This is a classic 'Persistence' technique." },
                            { text: "To ensure the company is not billed for extra software licenses.", explanation: "Incorrect. While true for IT management, it is not a primary SOC security function." },
                            { text: "Because every new user account slows down the CPU.", explanation: "Incorrect. Accounts simply take up a small amount of hard drive space." },
                            { text: "To prevent users from customizing their desktop wallpaper.", explanation: "Incorrect. This is an IT policy issue, not a security threat." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Windows User Accounts."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 3, 4]}
                        options={[
                            { text: "Windows creates a unique set of folders (Desktop, Documents, etc.) for every account.", explanation: "True. Environments are isolated by design." },
                            { text: "Standard users can freely read and delete files on the Administrator's Desktop.", explanation: "False. Permissions block standard users from accessing other profiles." },
                            { text: "You must have an active internet connection to create a Local Account.", explanation: "False. Local accounts can be created completely offline." },
                            { text: "The physical C:\\Users\\Username folder is not generated until the user logs in for the first time.", explanation: "True. Windows builds the profile upon first login." },
                            { text: "A computer can have multiple Local Accounts and multiple Microsoft Accounts at the same time.", explanation: "True. Windows supports hybrid account environments." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}