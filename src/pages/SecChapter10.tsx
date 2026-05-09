import React, { useState } from 'react';
import { Laptop, ShieldCheck, FileCheck, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Endpoint Security Capabilities
const PBQEndpointCapabilities = () => {
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
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are the Chief Information Security Officer (CISO). Select the correct Endpoint Security Capability to fulfill each operational requirement.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> You need to continuously record running processes on all employee laptops, analyze behavioral telemetry, and automatically isolate any machine exhibiting ransomware-like behavior.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Capability...</option>
                            <option value="EDR">EDR</option>
                            <option value="MDM">MDM</option>
                            <option value="DLP">DLP</option>
                            <option value="AllowList">Application Allow List</option>
                        </select>
                        {getStatus(answers.q1, 'EDR')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> You need to enforce password complexity, push Wi-Fi certificates, and enable remote wipe capabilities on all corporate-owned smartphones.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Capability...</option>
                            <option value="EDR">EDR</option>
                            <option value="MDM">MDM</option>
                            <option value="DLP">DLP</option>
                            <option value="AllowList">Application Allow List</option>
                        </select>
                        {getStatus(answers.q2, 'MDM')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> You must ensure that highly sensitive intellectual property cannot be copied from a Windows workstation onto a personal USB flash drive.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Capability...</option>
                            <option value="EDR">EDR</option>
                            <option value="MDM">MDM</option>
                            <option value="DLP">DLP</option>
                            <option value="AllowList">Application Allow List</option>
                        </select>
                        {getStatus(answers.q3, 'DLP')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> You want to lock down a high-security server by ensuring that ONLY pre-approved, digitally signed executables are permitted to run, blocking everything else by default.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Capability...</option>
                            <option value="EDR">EDR</option>
                            <option value="MDM">MDM</option>
                            <option value="DLP">DLP</option>
                            <option value="AllowList">Application Allow List</option>
                        </select>
                        {getStatus(answers.q4, 'AllowList')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>EDR:</strong> Endpoint Detection and Response replaces traditional AV by monitoring live behavior and responding dynamically.<br />
                        2. <strong>MDM:</strong> Mobile Device Management controls policies and security on mobile operating systems.<br />
                        3. <strong>DLP:</strong> Data Loss Prevention prevents sensitive data from exfiltrating the environment (like USB blocking).<br />
                        4. <strong>Application Allow List:</strong> A "Default Deny" posture where only explicitly approved software can execute.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter10() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Endpoint Hardening & Configuration"
                description="The network perimeter is porous. Security must ultimately rest on the endpoint itself (the laptop, server, or smartphone). Hardening an endpoint involves reducing its attack surface to the absolute minimum required to function."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Laptop className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Core Hardening</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Change Defaults:</strong> Rename the built-in Administrator account and change default passwords immediately.</li>
                                <li><strong>Disable Unnecessary Services:</strong> If a server isn't hosting a website, disable IIS or Apache. Close unused ports.</li>
                                <li><strong>Full Disk Encryption (FDE):</strong> Protects data at rest (e.g., BitLocker) if the physical laptop is stolen.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <FileCheck className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Configuration Enforcement</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Group Policy (Windows):</strong> Pushing registry settings and security rules to thousands of computers simultaneously from a central Domain Controller.</li>
                                <li><strong>SELinux:</strong> Security-Enhanced Linux uses Mandatory Access Control (MAC) to strictly confine programs to only the files they absolutely need.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="edr"
                title="Advanced Endpoint Protection (EDR / XDR)"
                description="Traditional Antivirus (AV) is dead. Legacy AV relied on static file signatures. If a hacker wrote a brand new virus (a zero-day), the AV wouldn't recognize it. Modern security relies on EDR."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Endpoint Detection and Response</h3>
                        <p className="text-sm text-muted-foreground mb-3"><strong>EDR</strong> acts like a flight data recorder. It continuously monitors running processes, registry changes, and network connections. It looks for <em>behaviors</em>, not just file hashes. If a seemingly harmless PDF suddenly launches PowerShell and tries to encrypt the hard drive, EDR immediately kills the process and isolates the machine from the network.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">XDR and HIDS</h3>
                        <p className="text-sm text-muted-foreground mb-3"><strong>XDR (Extended Detection and Response)</strong> takes EDR and feeds the telemetry into cloud infrastructure and network firewalls to create a unified defense. <strong>HIDS/HIPS (Host-Based Intrusion Detection)</strong> performs similar deep monitoring specifically focused on a single host's traffic and file integrity.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="mobile"
                kicker="Interactive Concept"
                title="Mobile Device Management (MDM)"
                description="Mobile devices carry the same sensitive corporate data as laptops, but they fit in a pocket and are easily lost. We manage them using MDM to enforce screen locks, remote wipe, and geolocation (Geofencing). However, deployment models dictate how much control the company has over the device."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Deployment Models:</strong> Every company must choose a balance between purchasing devices themselves (Cost/Control) versus letting employees use their own phones (Privacy/Risk).
                    </p>
                </div>

                {/* Interactive Mobile Deployment Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Application Allow Listing (AppLocker)"
                description="The most secure endpoint posture is 'Default Deny'. Instead of trying to maintain a list of 10 million bad viruses to block (Block Listing), you create a list of the 10 programs that are Allowed to run, and block everything else. Let's look at how this is configured in Windows."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI/CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Step 1: The Local Security Policy</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">secpol.msc</code>, and press Enter to open the Local Security Policy editor.</li>
                                <li>2. Expand <strong>Application Control Policies</strong>.</li>
                                <li>3. Click on <strong>AppLocker</strong>.</li>
                                <li>4. This is where administrators enforce Allow Lists. Click on <strong>Executable Rules</strong>.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">Step 2: Publisher Rules</h4>
                            <p className="text-sm text-muted-foreground mb-2">Creating rules by file hash is tedious because hashes change every time an app updates. Instead, we use Publisher Rules.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Right-click in the empty space and select <strong>Create New Rule...</strong></li>
                                <li>2. You can create a rule that says: <em>"Allow ANY executable to run, as long as it is digitally signed by the 'Microsoft Corporation' publisher certificate."</em></li>
                                <li>3. This means if a user downloads `evil_malware.exe`, it won't run, because the hacker doesn't possess Microsoft's private signing keys!</li>
                                <li>4. <em>Cleanup:</em> Close the Security Policy window.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQEndpointCapabilities />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the fundamental difference between Endpoint Detection and Response (EDR) and traditional Antivirus (AV) software?"
                        correctIndexes={[2]}
                        options={[
                            { text: "EDR only protects against network-based attacks, while AV protects against file-based attacks.", explanation: "Incorrect. Both protect the host from file execution." },
                            { text: "AV is cloud-based, while EDR runs locally on the endpoint.", explanation: "Incorrect. EDR relies heavily on cloud analytics." },
                            { text: "Traditional AV relies primarily on static file signatures, whereas EDR monitors behavioral telemetry to detect novel (zero-day) threats.", explanation: "Correct! EDR watches what a program DOES, not just what it LOOKS like." },
                            { text: "EDR is used for Mobile devices, while AV is used for Windows endpoints.", explanation: "Incorrect. EDR covers workstations and servers as well." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A corporate policy allows employees to use their personal smartphones for work. To protect corporate data without monitoring the employee's personal text messages, the IT department installs a specialized encrypted container app that holds corporate email and documents. Which mobile deployment model does this describe?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Bring Your Own Device (BYOD)", explanation: "Correct! The user owns the device, and the company protects its data via containerization." },
                            { text: "Corporate-Owned, Personally Enabled (COPE)", explanation: "Incorrect. The company does not own the device in this scenario." },
                            { text: "Corporate-Owned, Business Only (COBO)", explanation: "Incorrect. Personal use is allowed." },
                            { text: "Choose Your Own Device (CYOD)", explanation: "Incorrect. The user didn't choose a company phone; they used their own existing personal phone." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A threat actor acquires a photograph taken by a corporate executive on their smartphone. The attacker uses a metadata viewer to extract the exact latitude and longitude coordinates embedded within the image file to determine the executive's home address. What is this data called?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Geofencing", explanation: "Incorrect. Geofencing creates virtual boundaries." },
                            { text: "Near-Field Communications (NFC)", explanation: "Incorrect. NFC is used for mobile payments." },
                            { text: "Indoor Positioning System (IPS)", explanation: "Incorrect. IPS uses Wi-Fi/Bluetooth for indoor tracking." },
                            { text: "EXIF Data / GPS Tagging", explanation: "Correct! EXIF data embeds camera and GPS information directly into the image file." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following actions are considered fundamental Endpoint Hardening techniques that reduce the attack surface of an operating system? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 1]}
                        options={[
                            { text: "Disabling unnecessary services and closing unused ports.", explanation: "True. If a service isn't running, it cannot be exploited." },
                            { text: "Changing default administrative credentials immediately upon deployment.", explanation: "True. Default passwords are well-known to attackers." },
                            { text: "Switching the firewall from a 'Fail-Close' to a 'Fail-Open' configuration.", explanation: "False. Fail-Open decreases security by prioritizing availability over confidentiality." },
                            { text: "Deploying a Network Intrusion Prevention System (NIPS) at the perimeter.", explanation: "False. This is a network control, not an endpoint hardening technique." },
                            { text: "Allowing users to sideline applications from unofficial app stores.", explanation: "False. Sideloading massively increases the risk of malware." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}