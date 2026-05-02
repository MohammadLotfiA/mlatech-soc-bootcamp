import React, { useState } from 'react';
import { Network, Server, ShieldAlert, Terminal, BrickWall, CheckCircle2, XCircle, Key } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Network Appliance Placement
const PBQAppliancePlacement = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
    const [submitted, setSubmitted] = useState(false);

    const checkPBQ = () => setSubmitted(true);

    const getStatus = (val: string, expected: string) => {
        if (!submitted) return null;
        return val === expected ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> : <XCircle className="w-5 h-5 text-destructive shrink-0" />;
    };

    return (
        <Card className="border-primary/20 shadow-md mb-8">
            <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are designing a defense-in-depth architecture for a new corporate campus. Select the appropriate security appliance for each specific use case.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> You need a device placed inline at the network perimeter that can actively block incoming traffic matching known malware signatures.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Appliance...</option>
                            <option value="WAF">Web App Firewall (WAF)</option>
                            <option value="ForwardProxy">Forward Proxy</option>
                            <option value="IPS">Intrusion Prevention (IPS)</option>
                            <option value="JumpServer">Jump Server</option>
                        </select>
                        {getStatus(answers.q1, 'IPS')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> You need a device to inspect HTTP/HTTPS traffic targeting your public-facing web server to prevent SQL Injection and Cross-Site Scripting (XSS).
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Appliance...</option>
                            <option value="WAF">Web App Firewall (WAF)</option>
                            <option value="ForwardProxy">Forward Proxy</option>
                            <option value="IPS">Intrusion Prevention (IPS)</option>
                            <option value="JumpServer">Jump Server</option>
                        </select>
                        {getStatus(answers.q2, 'WAF')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> You need a system that intercepts all internal employee requests going out to the internet to filter malicious domains and cache common downloads.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Appliance...</option>
                            <option value="WAF">Web App Firewall (WAF)</option>
                            <option value="ForwardProxy">Forward Proxy</option>
                            <option value="IPS">Intrusion Prevention (IPS)</option>
                            <option value="JumpServer">Jump Server</option>
                        </select>
                        {getStatus(answers.q3, 'ForwardProxy')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> You need a highly secure, hardened host that IT administrators must connect to first before they are allowed to SSH into the backend database servers.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Appliance...</option>
                            <option value="WAF">Web App Firewall (WAF)</option>
                            <option value="ForwardProxy">Forward Proxy</option>
                            <option value="IPS">Intrusion Prevention (IPS)</option>
                            <option value="JumpServer">Jump Server</option>
                        </select>
                        {getStatus(answers.q4, 'JumpServer')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>IPS:</strong> An Intrusion Prevention System sits inline and actively drops packets based on signatures.<br />
                        2. <strong>WAF:</strong> A Web Application Firewall specifically inspects Layer 7 code (HTTP) for application attacks like SQLi.<br />
                        3. <strong>Forward Proxy:</strong> Sits between internal users and the internet, acting on behalf of the clients to filter and cache.<br />
                        4. <strong>Jump Server:</strong> An out-of-band management host used to strictly control administrative access to secure zones.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter5() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Enterprise Network Architecture"
                description="A secure network isn't just a collection of cables; it is a carefully designed series of Security Zones. By segmenting the network into Public, Private, and Restricted zones, we ensure that a breach in the lobby doesn't immediately compromise the vault."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Network className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Port Security (802.1X)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                You cannot allow someone to plug a laptop into a wall jack and instantly access the network. <strong>IEEE 802.1X</strong> requires authentication at the switch level. <br /><br />
                                • <strong>Supplicant:</strong> The user's computer.<br />
                                • <strong>Authenticator:</strong> The network switch.<br />
                                • <strong>Authentication Server:</strong> The RADIUS server holding the credentials.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Server className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Device Placement & State</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Inline vs. Tap:</strong> "Inline" means the device sits directly in the path of traffic and can block it. "Tap/Monitor" means it passively receives a copy of the traffic (SPAN port) for analysis.</li>
                                <li><strong>Fail-Open vs. Fail-Close:</strong> If a security appliance crashes, does it let traffic flow freely to maintain <em>Availability</em> (Fail-Open), or does it block everything to maintain <em>Confidentiality/Integrity</em> (Fail-Close)?</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="appliances"
                title="Network Security Appliances"
                description="To enforce our security zones, we deploy specialized hardware and software appliances."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><BrickWall className="w-4 h-4 text-primary" /> Firewalls</h3>
                        <p className="text-sm text-muted-foreground"><strong>Layer 4 (Transport):</strong> Inspects IPs and Ports. Uses a "State Table" to track established connections.<br /><strong>Layer 7 (Application):</strong> Deep Packet Inspection (DPI). Can identify specific applications (e.g., blocking Facebook Chat but allowing Facebook login).</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-primary" /> IDS vs. IPS</h3>
                        <p className="text-sm text-muted-foreground">An <strong>Intrusion Detection System (IDS)</strong> is placed on a Tap port. It generates alerts but is <em>passive</em>. An <strong>Intrusion Prevention System (IPS)</strong> is placed Inline and actively drops malicious packets.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Server className="w-4 h-4 text-primary" /> Load Balancers</h3>
                        <p className="text-sm text-muted-foreground">Distributes requests across a server farm. Uses algorithms like <strong>Round Robin</strong> or <strong>Least Connections</strong>. <em>(Hint: See the interactive widget above to visualize this!)</em></p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="vpn"
                title="Virtual Private Networks & Tunnels"
                description="How do remote employees securely access the internal enterprise network from a coffee shop? They use encrypted tunnels."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">IPsec (Internet Protocol Security)</h3>
                        <p className="text-sm text-muted-foreground mb-3">IPsec operates at Layer 3. It uses two main protocols:</p>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">AH (Authentication Header):</strong> Signs the packet for Integrity and Authentication, but does NOT encrypt the payload.</li>
                            <li><strong className="text-foreground">ESP (Encapsulating Security Payload):</strong> Provides Confidentiality by fully encrypting the payload.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3">It operates in <strong>Tunnel Mode</strong> (encrypts the entire original IP packet, used for Site-to-Site VPNs) or <strong>Transport Mode</strong> (only encrypts the payload, used for Host-to-Host).</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">TLS VPNs & Secure Shell (SSH)</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">TLS VPN:</strong> Uses standard web encryption (like HTTPS). Easier to configure for remote users because it rarely gets blocked by hotel or coffee shop firewalls.</li>
                            <li><strong className="text-foreground">SSH:</strong> Used by administrators for secure remote terminal access to Linux servers. Uses public/private keys for authentication.</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: The Concept of a Jump Server"
                description="A Jump Server (or Bastion Host) is a highly secured machine used as a stepping stone. You cannot SSH directly into the database. You must SSH into the Jump Server first, and from there, SSH into the database. Let's simulate this logic."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">The Architecture Rule</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Imagine the Firewall is configured like this:<br />
                                <code>DENY Port 22 from ANY to Database</code><br />
                                <code>ALLOW Port 22 from JumpServer to Database</code>
                            </p>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. The administrator opens their terminal and connects to the Jump Server facing the public internet:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ssh admin@jumpserver.company.com</pre>
                                    </div>
                                </li>
                                <li>2. They authenticate using their Private Key and a Multifactor Token.</li>
                                <li>
                                    3. Now that they are "inside" the secure zone on the Jump Server, they issue the second command to reach the restricted asset:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ssh root@10.0.5.50</pre>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Key className="w-4 h-4 text-emerald-500" /> Advanced Concept: SSH Agent Forwarding</h4>
                            <p className="text-sm text-muted-foreground">
                                In the real world, you do not want to store your private keys on the Jump Server! Administrators use the <code>-A</code> flag (<code>ssh -A admin@jumpserver</code>) to "forward" their local laptop's key through the jump server to authenticate to the database securely.
                            </p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQAppliancePlacement />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company implements 802.1X for port security on all office network jacks. When an employee plugs in their laptop, the network switch halts their traffic and requests authentication credentials, which it then forwards to a central RADIUS server. In the 802.1X framework, what role is the network switch playing?"
                        correctIndexes={[1]}
                        options={[
                            { text: "The Supplicant", explanation: "Incorrect. The laptop/employee is the Supplicant." },
                            { text: "The Authenticator", explanation: "Correct! The switch acts as the gatekeeper (Authenticator) between the Supplicant and the Authentication Server." },
                            { text: "The Authentication Server", explanation: "Incorrect. The RADIUS server is the Authentication Server." },
                            { text: "The Jump Server", explanation: "Incorrect. A Jump Server is for administrative remote access." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A network engineer is configuring a Site-to-Site IPsec VPN. Corporate policy dictates that all traffic passing through the tunnel MUST be encrypted to maintain confidentiality. Which IPsec protocol must the engineer ensure is configured?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Authentication Header (AH)", explanation: "Incorrect. AH provides integrity and authentication, but does NOT encrypt the payload." },
                            { text: "Internet Key Exchange (IKE)", explanation: "Incorrect. IKE sets up the security associations, it does not encrypt the bulk payload." },
                            { text: "Encapsulating Security Payload (ESP)", explanation: "Correct! ESP provides full payload encryption (Confidentiality)." },
                            { text: "Transport Layer Security (TLS)", explanation: "Incorrect. TLS is a different tunneling protocol, not part of the IPsec suite." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A Chief Information Security Officer (CISO) mandates that if the corporate firewall experiences a critical hardware failure and its inspection engine crashes, it must completely sever all internet connectivity to the building rather than allowing uninspected traffic to pass. This configuration is known as:"
                        correctIndexes={[0]}
                        options={[
                            { text: "Fail-Close", explanation: "Correct! Fail-Close prioritizes security over availability, shutting the door if the lock breaks." },
                            { text: "Fail-Open", explanation: "Incorrect. Fail-Open would allow traffic to bypass the broken firewall to maintain internet availability." },
                            { text: "Out-of-Band Management", explanation: "Incorrect. OOB is a separate network for administrating devices." },
                            { text: "Spanning Tree Protocol", explanation: "Incorrect. STP prevents layer 2 switching loops." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following are distinct characteristics of an Intrusion Prevention System (IPS) as opposed to a standard Intrusion Detection System (IDS)? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "It is placed inline on the network.", explanation: "True. An IPS must be inline so the traffic physically passes through it to be blocked." },
                            { text: "It is placed on a TAP or SPAN monitor port.", explanation: "False. This is characteristic of a passive IDS." },
                            { text: "It only generates alerts and log files.", explanation: "False. An IDS only alerts; an IPS acts." },
                            { text: "It can actively drop, reset, or redirect malicious connections.", explanation: "True. Active response is the defining feature of 'Prevention'." },
                            { text: "It acts as the primary DHCP server for the zone.", explanation: "False. Neither system handles IP address leasing." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}