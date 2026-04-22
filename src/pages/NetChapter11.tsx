import React from 'react';
import { BrickWall, ShieldAlert, MousePointer2, ShieldOff, AlertTriangle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter11() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Firewalls & Access Control"
                description="A firewall is a digital bouncer. It stands at the door of your network (or your computer) and inspects every packet trying to enter or leave, deciding whether to 'Allow' or 'Drop' the traffic based on strict rules."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <BrickWall className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Network vs. Host</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <p>A <strong>Network Firewall</strong> sits at the border of a company, protecting the entire building from the outside internet.</p>
                                <p>A <strong>Host Firewall</strong> (like Windows Defender Firewall) lives directly on the computer itself, protecting that specific machine even if the network is compromised.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Most firewalls block bad traffic trying to come <strong>Inbound</strong>. However, SOC Analysts heavily rely on <strong>Outbound</strong> rules. If a computer gets infected by a USB drive, a strong Outbound firewall rule will block the malware from 'phoning home' to the hacker's C2 server.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Building a Wall"
                description="We are going to open the native Windows Firewall and explicitly block a system application from communicating."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><ShieldOff className="w-4 h-4 text-muted-foreground" /> Step 1: Writing the Rule</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Windows Defender Firewall with Advanced Security</code>, and hit Enter.</li>
                                <li>2. On the left sidebar, click <strong>Outbound Rules</strong>.</li>
                                <li>3. On the far right sidebar, click <strong>New Rule...</strong></li>
                                <li>4. Select <strong>Program</strong> and click Next.</li>
                                <li>5. Select "This program path". Type exactly this: <code className="bg-secondary px-1 rounded text-foreground border border-border">C:\Windows\System32\PING.EXE</code> and click Next.</li>
                                <li>6. Choose <strong>Block the connection</strong> and click Next.</li>
                                <li>7. Leave all profiles (Domain, Private, Public) checked and click Next.</li>
                                <li>8. Name it <code className="bg-destructive/20 text-destructive px-1 rounded font-bold">Lab_Block_Ping</code> and click Finish.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-emerald-500" /> Step 2: Testing & Cleanup</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>2. Type <code className="bg-black/40 text-primary px-1 rounded font-mono">ping 8.8.8.8</code> and hit Enter.</li>
                                <li>3. It will instantly say <strong>"General failure."</strong> The firewall physically dropped the packets!</li>
                                <li>4. <em>Cleanup:</em> Go back to the Firewall window. Find your <code>Lab_Block_Ping</code> rule at the top of the Outbound list. Right-click it and select <strong>Delete</strong>.</li>
                                <li>5. Try the ping command again. It will succeed!</li>
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
                        prompt="What is the difference between a Host Firewall and a Network Firewall?"
                        correctIndexes={[0]}
                        options={[
                            { text: "A Host firewall runs directly on a single computer, while a Network firewall sits at the perimeter of the entire building.", explanation: "Correct! One protects the endpoint, the other protects the boundary." },
                            { text: "Host firewalls block inbound traffic, Network firewalls block outbound traffic.", explanation: "Incorrect. Both can block inbound and outbound traffic." },
                            { text: "Host firewalls are physical hardware, Network firewalls are software.", explanation: "Incorrect. It is usually the other way around." },
                            { text: "Host firewalls only encrypt data, they do not block traffic.", explanation: "Incorrect. Firewalls do not encrypt data; they filter it." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why are 'Outbound' firewall rules critical for a SOC Analyst to implement?"
                        correctIndexes={[1]}
                        options={[
                            { text: "They prevent hackers from scanning the network from the outside.", explanation: "Incorrect. That is the job of Inbound rules." },
                            { text: "They prevent malware that is already inside the network from communicating back out to the internet to steal data.", explanation: "Correct! Outbound rules stop data exfiltration and C2 beaconing." },
                            { text: "They encrypt passwords sent to websites.", explanation: "Incorrect. Encryption is handled by HTTPS, not firewalls." },
                            { text: "They speed up internet downloads by prioritizing traffic.", explanation: "Incorrect. This is Quality of Service (QoS), not firewalling." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Firewalls."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "Firewalls can be configured to block traffic based on specific applications (like ping.exe).", explanation: "True. App-based blocking is a core feature." },
                            { text: "Firewalls automatically delete viruses from the hard drive.", explanation: "False. That is the job of Antivirus software." },
                            { text: "By default, Windows Defender Firewall allows almost all Outbound traffic to leave the computer.", explanation: "True. It assumes if the user initiated it, it is safe." },
                            { text: "Standard users without Admin privileges can easily modify the corporate Network Firewall.", explanation: "False. Modifying firewalls requires high administrative access." },
                            { text: "A rule set to 'Drop' will silently discard network packets without notifying the sender.", explanation: "True. Dropping packets is stealthier than 'Rejecting' them." },
                            { text: "Firewalls only work on Wi-Fi connections, not Ethernet.", explanation: "False. They work on all network interfaces." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}