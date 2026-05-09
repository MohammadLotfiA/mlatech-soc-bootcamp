import React, { useState } from 'react';
import { Network, ShieldCheck, ShieldAlert, Terminal, CheckCircle2, XCircle, SearchCode } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Operations and Capabilities
const PBQSecCapabilities = () => {
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
                    <strong>Scenario:</strong> As a Network Security Engineer, you must evaluate and deploy the correct capability, framework, or standard to meet specific operational requirements. Match the term to the scenario.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> The DoD requires your servers to be hardened to a strict, standardized configuration baseline before being allowed on the network.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Standard...</option>
                            <option value="STIG">STIG</option>
                            <option value="UEBA">UEBA</option>
                            <option value="SAE">SAE</option>
                            <option value="ScreenedSubnet">Screened Subnet</option>
                        </select>
                        {getStatus(answers.q1, 'STIG')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> You need to replace the vulnerable Pre-Shared Key (PSK) 4-way handshake on your wireless networks to prevent offline dictionary attacks.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Standard...</option>
                            <option value="STIG">STIG</option>
                            <option value="UEBA">UEBA</option>
                            <option value="SAE">SAE</option>
                            <option value="ScreenedSubnet">Screened Subnet</option>
                        </select>
                        {getStatus(answers.q2, 'SAE')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> You are deploying a public-facing web server that requires internet access, but it must be completely isolated from the sensitive internal corporate LAN.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Standard...</option>
                            <option value="STIG">STIG</option>
                            <option value="UEBA">UEBA</option>
                            <option value="SAE">SAE</option>
                            <option value="ScreenedSubnet">Screened Subnet</option>
                        </select>
                        {getStatus(answers.q3, 'ScreenedSubnet')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> You need an anomaly detection system that establishes a baseline of normal employee behavior and alerts you if an employee suddenly downloads gigabytes of data at 2 AM.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Standard...</option>
                            <option value="STIG">STIG</option>
                            <option value="UEBA">UEBA</option>
                            <option value="SAE">SAE</option>
                            <option value="ScreenedSubnet">Screened Subnet</option>
                        </select>
                        {getStatus(answers.q4, 'UEBA')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>STIG:</strong> Security Technical Implementation Guides are rigorous configuration baselines, prominently used by the military and government.<br />
                        2. <strong>SAE:</strong> Simultaneous Authentication of Equals is the secure key exchange protocol introduced in WPA3 to replace vulnerable PSKs.<br />
                        3. <strong>Screened Subnet:</strong> Formerly known as a DMZ, this is a neutral network zone sandwiched between the public internet and the private LAN.<br />
                        4. <strong>UEBA:</strong> User and Entity Behavior Analytics uses machine learning to detect behavioral anomalies that differ from a user's normal daily trends.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter9() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Network Security Baselines"
                description="Out of the box, operating systems and routers are configured for ease of use, not security. A critical part of security operations is 'Hardening' these devices using established secure baselines."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Baselines & Benchmarks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">Instead of guessing what settings to secure, professionals use industry-standard configuration guides.</p>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>CIS Benchmarks:</strong> Center for Internet Security best practices.</li>
                                <li><strong>STIGs:</strong> Security Technical Implementation Guides (developed by the US Department of Defense).</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Terminal className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Configuration Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3">You cannot manually configure 1,000 servers. We use Infrastructure as Code (IaC) to automatically deploy and enforce these baselines.</p>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Tools:</strong> Ansible, Puppet, Chef.</li>
                                <li><strong>SCAP:</strong> Security Content Automation Protocol. Used by automated scanners (like CIS-CAT) to instantly verify if a server is compliant with the baseline.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="wireless"
                title="Wireless Security Operations"
                description="Wireless networks project data out into the physical world, making them inherently vulnerable to interception. Modern Wi-Fi relies on strong encryption and authentication frameworks."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Encryption Standards</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">WPA2:</strong> The older standard. Used AES encryption, but relied on a 4-way handshake that is vulnerable to offline dictionary attacks if the attacker captures the handshake.</li>
                            <li><strong className="text-foreground">WPA3 (SAE):</strong> The modern standard. Replaces the Pre-Shared Key (PSK) with <strong>Simultaneous Authentication of Equals (SAE)</strong>, providing forward secrecy and immunity to offline cracking.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Authentication Methods</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">Personal (PSK/SAE):</strong> Everyone uses the same password to connect. Suitable for homes, terrible for enterprises.</li>
                            <li><strong className="text-foreground">Enterprise (802.1X/RADIUS):</strong> Users authenticate with their own unique username/password or digital certificate. If an employee leaves, you just disable their account, rather than changing the Wi-Fi password for the whole building!</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="acl"
                title="Access Control Lists & Screened Subnets"
                description="At the network border, firewalls utilize Access Control Lists (ACLs) to filter traffic. A critical architectural design pattern is the Screened Subnet (formerly known as a DMZ)."
            >
                <div className="space-y-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                        A <strong>Screened Subnet</strong> is an isolated network segment designed to host public-facing servers (like your company website or email server). It acts as a buffer. If a hacker breaches the web server in the screened subnet, they still cannot access the private internal corporate network because a second firewall blocks them.
                    </p>
                    <div className="my-6">

                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="ids"
                title="IDS/IPS Detection Methods"
                description="Intrusion Detection and Prevention Systems (like Snort or Suricata) look deep into the network traffic to find malicious intent. They generally use two detection philosophies:"
            >
                <div className="grid md:grid-cols-2 gap-6 mt-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><SearchCode className="w-4 h-4 text-primary" /> Signature-Based</h3>
                        <p className="text-sm text-muted-foreground">The system looks for specific patterns (signatures) of known malware, much like an antivirus scanner. <br /><br /><strong>Pro:</strong> Very low false positive rate.<br /><strong>Con:</strong> Completely blind to zero-day (new/unknown) attacks.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Network className="w-4 h-4 text-primary" /> Anomaly / Behavioral</h3>
                        <p className="text-sm text-muted-foreground">The system spends a week learning what "normal" traffic looks like. If something deviates from normal (an Anomaly), it alerts. <strong>UEBA (User and Entity Behavior Analytics)</strong> tracks this on a per-user level.<br /><br /><strong>Pro:</strong> Can catch zero-day attacks!<br /><strong>Con:</strong> High rate of false positives.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Top-Down ACL Processing"
                description="Firewall ACLs evaluate rules from the TOP down. The moment a packet matches a rule, the firewall executes that rule (Allow or Deny) and STOPS evaluating. It ignores all rules below it. Use the simulator below to test incoming packets against a 3-rule firewall."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Analyst Note:</strong> Always put your highly specific DENY rules at the very top, and your general ALLOW rules below them. Every firewall inherently has an "Implicit Deny" hidden at the very bottom—if a packet doesn't match any rule above, it is automatically dropped!
                    </p>
                </div>

                {/* Interactive Firewall ACL Simulator will render here */}
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQSecCapabilities />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company recently upgraded their wireless infrastructure to support WPA3. What specific cryptographic mechanism does WPA3 introduce to protect against offline dictionary attacks that previously plagued WPA2 Pre-Shared Keys?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Wi-Fi Protected Setup (WPS)", explanation: "Incorrect. WPS is an older, highly vulnerable protocol that should be disabled." },
                            { text: "Simultaneous Authentication of Equals (SAE)", explanation: "Correct! SAE replaces the 4-way handshake, providing forward secrecy and resistance to offline cracking." },
                            { text: "Wired Equivalent Privacy (WEP)", explanation: "Incorrect. WEP is completely obsolete and easily cracked." },
                            { text: "Extensible Authentication Protocol (EAP)", explanation: "Incorrect. EAP is used in Enterprise setups, but SAE is the specific mechanism replacing PSK in WPA3-Personal." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A security analyst is tuning a newly installed Intrusion Prevention System (IPS). The system is successfully blocking known malware strains, but it completely failed to detect a custom, never-before-seen ransomware variant created by an Advanced Persistent Threat (APT). Which detection method is the IPS currently relying on?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Anomaly-Based Detection", explanation: "Incorrect. Anomaly detection specifically looks for deviations, which could catch unknown variants." },
                            { text: "Behavioral-Based Detection", explanation: "Incorrect. Behavioral analysis looks at the actions the software takes, which might catch ransomware encrypting files." },
                            { text: "Signature-Based Detection", explanation: "Correct! Signature-based systems require a known hash or pattern. If the malware is custom/new (a zero-day), there is no signature, and the IPS will miss it." },
                            { text: "User and Entity Behavior Analytics (UEBA)", explanation: "Incorrect. UEBA tracks user behavior anomalies." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="An administrator is attempting to configure a firewall Access Control List (ACL). They want to block IP address 10.0.0.5 from accessing the web server, but allow all other internal traffic. They write the following rules in order:\n\nRule 1: ALLOW Source ANY Destination WebServer\nRule 2: DENY Source 10.0.0.5 Destination WebServer\n\nWhen testing, 10.0.0.5 is still able to access the web server. Why?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Because ACLs process top-down. The 'ALLOW ANY' rule was matched first, granting access before the DENY rule was ever evaluated.", explanation: "Correct! The packet hits Rule 1, matches 'ANY', and the firewall stops reading. Specific rules must go above general rules." },
                            { text: "Because firewalls cannot block internal IP addresses.", explanation: "Incorrect. Firewalls can block any routable IP." },
                            { text: "Because the Implicit Deny at the bottom of the list overrode Rule 2.", explanation: "Incorrect. The Implicit Deny is only reached if no other rules match." },
                            { text: "Because Rule 2 is missing the subnet mask.", explanation: "Incorrect. The issue is the processing order (Top-Down)." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="An organization is moving away from manual server configuration and adopting Infrastructure as Code (IaC) to ensure all new servers meet the CIS Secure Baseline automatically. Which of the following tools and protocols are commonly associated with automated configuration management and baseline verification? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "Ansible", explanation: "True. Ansible, Puppet, and Chef are premier configuration management deployment tools." },
                            { text: "Suricata", explanation: "False. Suricata is an IDS/IPS engine, not a configuration management tool." },
                            { text: "WPA2-Enterprise", explanation: "False. This is a wireless authentication framework." },
                            { text: "Security Content Automation Protocol (SCAP)", explanation: "True. SCAP is a suite of specifications that standardize the format of baseline configurations and vulnerability scans." },
                            { text: "802.1X", explanation: "False. This is a port-based network access control standard." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}