import React, { useState } from 'react';
import { Database, Activity, ShieldAlert, Terminal, ServerCrash, MapPin, Search, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Resiliency & Redundancy
const PBQResiliency = () => {
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
                    <strong>Scenario:</strong> You are the Disaster Recovery Coordinator. Match the correct resiliency or redundancy strategy to the business requirement.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> An empty facility with power and HVAC, but no servers or data. It will take weeks to become operational after a disaster.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Strategy...</option>
                            <option value="HotSite">Hot Site</option>
                            <option value="WarmSite">Warm Site</option>
                            <option value="ColdSite">Cold Site</option>
                            <option value="ActiveActive">Active/Active Cluster</option>
                        </select>
                        {getStatus(answers.q1, 'ColdSite')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> An exact replica of the primary datacenter. Data is synchronized in real-time, allowing failover in minutes or seconds.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Strategy...</option>
                            <option value="HotSite">Hot Site</option>
                            <option value="WarmSite">Warm Site</option>
                            <option value="ColdSite">Cold Site</option>
                            <option value="ActiveActive">Active/Active Cluster</option>
                        </select>
                        {getStatus(answers.q2, 'HotSite')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> A facility with hardware installed and configured, but data backups are only restored periodically (e.g., weekly). Failover takes a few days.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Strategy...</option>
                            <option value="HotSite">Hot Site</option>
                            <option value="WarmSite">Warm Site</option>
                            <option value="ColdSite">Cold Site</option>
                            <option value="ActiveActive">Active/Active Cluster</option>
                        </select>
                        {getStatus(answers.q3, 'WarmSite')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> Two database servers processing client requests simultaneously. If one fails, the other seamlessly assumes the entire load without downtime.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Strategy...</option>
                            <option value="HotSite">Hot Site</option>
                            <option value="WarmSite">Warm Site</option>
                            <option value="ColdSite">Cold Site</option>
                            <option value="ActiveActive">Active/Active Cluster</option>
                        </select>
                        {getStatus(answers.q4, 'ActiveActive')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Cold Site:</strong> Cheapest option, but takes the longest to recover. No hardware present.<br />
                        2. <strong>Hot Site:</strong> Most expensive option, allows for immediate failover. Hardware and live data are present.<br />
                        3. <strong>Warm Site:</strong> A middle ground. Hardware is present, but data must be manually restored before operations resume.<br />
                        4. <strong>Active/Active:</strong> A clustering technique ensuring zero downtime, as all nodes are processing traffic simultaneously.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter7() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Asset Management & Data Protection"
                description="You cannot protect what you do not know you have. The first step of any security program is building an inventory."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Search className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The CMDB</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                A <strong>Configuration Management Database (CMDB)</strong> is the central repository holding the inventory of all IT assets (servers, laptops, routers). If an asset isn't in the CMDB, it is a rogue device and a massive security risk. Mobile devices are managed separately via <strong>Mobile Device Management (MDM)</strong>.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Database className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Backups & Destruction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Backups are your ultimate defense against Ransomware. However, to truly survive, backups must be <strong>Air-Gapped</strong> (physically disconnected from the network). When an asset reaches the end of its life, drives must undergo secure <strong>Sanitization</strong> or physical <strong>Destruction</strong> to prevent data recovery.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="redundancy"
                kicker="Interactive Concept"
                title="Continuity & Resiliency Strategies"
                description="Resiliency is the ability to maintain operations in the presence of adversity. We achieve this through High Availability (HA) designs like Clustering and Alternate Processing Sites."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Clustering</h3>
                        <p className="text-sm text-muted-foreground">Multiple redundant nodes sharing data. In <strong>Active/Active</strong>, all nodes process traffic. In <strong>Active/Passive</strong>, one node sits idle until the primary fails.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Recovery Sites</h3>
                        <p className="text-sm text-muted-foreground"><strong>Hot Site:</strong> Ready instantly. Full data replica.<br /><strong>Warm Site:</strong> Hardware ready, but needs data restored.<br /><strong>Cold Site:</strong> Empty room, takes weeks to configure.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><ServerCrash className="w-4 h-4 text-primary" /> Power Redundancy</h3>
                        <p className="text-sm text-muted-foreground"><strong>UPS (Uninterruptible Power Supply):</strong> Batteries that provide short-term power to allow for graceful shutdowns or to bridge the gap until Diesel Generators kick in.</p>
                    </div>
                </div>

                {/* Interactive Clustering Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="physical"
                title="Physical Security"
                description="Cybersecurity is irrelevant if an attacker can simply walk into the datacenter and steal the hard drive."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Deterrence & Delay</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">Fencing & Lighting:</strong> First line of deterrence.</li>
                            <li><strong className="text-foreground">Bollards:</strong> Heavy concrete pillars designed to stop a vehicle from ramming the building.</li>
                            <li><strong className="text-foreground">Mantrap (Access Control Vestibule):</strong> A small room with two doors. The first door must close and lock before the second door will open, preventing "tailgating".</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Detection</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">CCTV:</strong> Surveillance cameras.</li>
                            <li><strong className="text-foreground">Proximity Readers:</strong> Used with RFID access badges.</li>
                            <li><strong className="text-foreground">Sensors:</strong> Infrared (heat), Microwave (motion), and Contact/Circuit (door opening).</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Capacity Planning & Resource Exhaustion"
                description="A major threat to Availability is Resource Exhaustion (running out of RAM or Disk Space), whether caused by a DDoS attack, a rogue application, or just poor capacity planning. Let's use PowerShell to check our physical resiliency."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Step 1: Checking Disk Capacity</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">PowerShell</code>, and press Enter.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">Get-Volume</pre>
                                    </div>
                                </li>
                                <li>3. This instantly lists all storage drives on the system. Look at the <strong>SizeRemaining</strong> vs <strong>Size</strong> columns. If the system drive hits 0, the OS will crash!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">Step 2: Checking Memory (RAM) Health</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. To see how much RAM is currently available for processing, type:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">Get-CimInstance Win32_OperatingSystem | Select FreePhysicalMemory</pre>
                                    </div>
                                </li>
                                <li>2. <em>Note:</em> The output is in Kilobytes (KB). Continuous monitoring of this metric is how SOCs detect active Denial of Service attacks attempting to exhaust server resources.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQResiliency />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A Chief Security Officer (CSO) wants to implement a physical security control that specifically prevents an unauthorized individual from closely following an authorized employee through a secure doorway into the datacenter. Which control should the CSO implement?"
                        correctIndexes={[3]}
                        options={[
                            { text: "CCTV Cameras", explanation: "Incorrect. Cameras detect tailgating but do not physically prevent it." },
                            { text: "Bollards", explanation: "Incorrect. Bollards prevent vehicular access." },
                            { text: "Biometric Scanners", explanation: "Incorrect. While secure, if the door is held open, an unauthorized person can still walk through." },
                            { text: "An Access Control Vestibule (Mantrap)", explanation: "Correct! The two-door system ensures only one authenticated person can pass through at a time." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A hospital suffered a severe ransomware attack that encrypted all primary databases and the on-network backup servers. The IT team was only able to recover because they had a secondary set of backups that were entirely disconnected from the network and stored in a vault. What concept saved the hospital?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Air-Gapped Backups", explanation: "Correct! Because the backups were physically disconnected (air-gapped), the ransomware could not reach them over the network." },
                            { text: "Active/Active Clustering", explanation: "Incorrect. Ransomware would replicate across an active cluster instantly." },
                            { text: "Configuration Management Database (CMDB)", explanation: "Incorrect. A CMDB tracks assets, it does not store data backups." },
                            { text: "Data Deduplication", explanation: "Incorrect. Deduplication saves storage space; it does not protect against malware." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="An organization is disposing of old hard drives that contained highly sensitive financial data. They require a method that completely renders the physical platters of the hard drive unusable and unreadable by any means. Which asset disposal method should be used?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Sanitization (Wiping)", explanation: "Incorrect. Sanitization overwrites the data with software but leaves the physical drive intact." },
                            { text: "Physical Destruction (Shredding/Pulverizing)", explanation: "Correct! Shredding destroys the physical media entirely, guaranteeing data cannot be recovered." },
                            { text: "Formatting", explanation: "Incorrect. Standard formatting leaves data easily recoverable via forensic tools." },
                            { text: "Certification", explanation: "Incorrect. Certification is the documentation proving destruction occurred; it is not the method of destruction." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following statements accurately describe aspects of Capacity Planning and Redundancy? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 2]}
                        options={[
                            { text: "An Uninterruptible Power Supply (UPS) provides short-term battery power to allow servers to shut down gracefully during an outage.", explanation: "True. A UPS bridges the gap before generators start or allows a safe shutdown." },
                            { text: "A Cold Site provides the fastest possible recovery time objective (RTO).", explanation: "False. A Hot Site is the fastest; a Cold Site is the slowest." },
                            { text: "In an Active/Passive cluster, the passive node does not handle client traffic until the active node fails.", explanation: "True. The passive node sits in standby mode." },
                            { text: "Capacity planning is only concerned with network bandwidth, not storage or CPU usage.", explanation: "False. It covers all compute resources." },
                            { text: "MDM solutions are used to track and manage on-premises physical datacenter servers.", explanation: "False. MDM is for Mobile Devices; CMDB is for servers." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}