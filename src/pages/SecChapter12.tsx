import React, { useState } from 'react';
import { Terminal, Search, CheckCircle2, XCircle, Database, Stethoscope, Briefcase } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Data Sources
const PBQDataSources = () => {
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
                    <Database className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are investigating a complex security breach. Match the specific <strong>Data Source</strong> you would query to find the evidence needed for each step of the investigation.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> You need to see if an employee recently escalated their administrative privileges or repeatedly failed to log in to the domain.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Source...</option>
                            <option value="NetFlow">NetFlow</option>
                            <option value="WindowsEvent">Windows Security Event Log</option>
                            <option value="PacketCapture">Packet Capture (PCAP)</option>
                            <option value="VulnerabilityScan">Vulnerability Scan Report</option>
                        </select>
                        {getStatus(answers.q1, 'WindowsEvent')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> You need to know exactly how much data (bandwidth statistics and conversation metadata) was uploaded to a suspicious external IP address yesterday.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Source...</option>
                            <option value="NetFlow">NetFlow</option>
                            <option value="WindowsEvent">Windows Security Event Log</option>
                            <option value="PacketCapture">Packet Capture (PCAP)</option>
                            <option value="VulnerabilityScan">Vulnerability Scan Report</option>
                        </select>
                        {getStatus(answers.q2, 'NetFlow')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> You need to read the actual, raw, unencrypted payload of an HTTP request to see exactly what SQL injection command the attacker typed.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Source...</option>
                            <option value="NetFlow">NetFlow</option>
                            <option value="WindowsEvent">Windows Security Event Log</option>
                            <option value="PacketCapture">Packet Capture (PCAP)</option>
                            <option value="VulnerabilityScan">Vulnerability Scan Report</option>
                        </select>
                        {getStatus(answers.q3, 'PacketCapture')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> You need to determine if a server was already susceptible to the Apache Struts exploit *before* the attack occurred.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Source...</option>
                            <option value="NetFlow">NetFlow</option>
                            <option value="WindowsEvent">Windows Security Event Log</option>
                            <option value="PacketCapture">Packet Capture (PCAP)</option>
                            <option value="VulnerabilityScan">Vulnerability Scan Report</option>
                        </select>
                        {getStatus(answers.q4, 'VulnerabilityScan')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Windows Security Event Log:</strong> Logs local endpoint authentication, authorization, and process execution.<br />
                        2. <strong>NetFlow:</strong> Provides lightweight, high-level statistics about network sessions (metadata, IPs, byte counts) without recording the payload.<br />
                        3. <strong>Packet Capture (PCAP):</strong> The heaviest data source, recording the full, raw binary data sent across the wire (the payload).<br />
                        4. <strong>Vulnerability Scan Report:</strong> Provides historical point-in-time data regarding the patch posture of systems on the network.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter12() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                kicker="Interactive Concept"
                title="The Incident Response Process"
                description="Despite all preventive controls, breaches happen. A Security Operations Center (SOC) must have a standardized, practiced procedure for reacting to a crisis. This is the Incident Response (IR) Lifecycle."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Tabletop Exercises:</strong> You cannot learn Incident Response during an actual breach. Teams practice via "Tabletop Exercises"—a facilitator presents a hypothetical scenario, and the team talks through their playbook steps in a stress-free environment.
                    </p>
                </div>

                {/* Interactive IR Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="forensics"
                title="Digital Forensics & Evidence"
                description="Incident Response is about stopping the bleeding. Digital Forensics is about carefully collecting the evidence so it holds up in a court of law."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Stethoscope className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Order of Volatility</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">When seizing a computer, you must collect evidence starting with the most fragile data first, before the system loses power or overwrites it:</p>
                            <ol className="list-decimal pl-4 space-y-1 text-sm text-muted-foreground">
                                <li>CPU Cache & Registers</li>
                                <li>Routing Tables & ARP Cache</li>
                                <li>System Memory (RAM)</li>
                                <li>Temporary File Systems</li>
                                <li>Persistent Hard Drives</li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Briefcase className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Chain of Custody</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Cryptographic Hashing:</strong> Before analyzing a seized hard drive, forensic experts create a bit-by-bit copy (using tools like `dd`) and hash the drive to mathematically prove they didn't alter any data.</li>
                                <li><strong>Write Blockers:</strong> Hardware devices that ensure the analyst's computer cannot accidentally write data back to the suspect's drive.</li>
                                <li><strong>Chain of Custody:</strong> A continuous, documented log of exactly who had physical possession of the evidence at all times.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="siem"
                title="SIEM & Alert Tuning"
                description="A massive enterprise generates millions of log entries every hour. No human can read them. We use a SIEM (Security Information and Event Management) system to aggregate, normalize, and correlate these logs into actionable alerts."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Aggregation & Correlation</h3>
                        <p className="text-sm text-muted-foreground mb-3"><strong>Aggregation:</strong> Pulling logs from Windows Servers, Cisco Firewalls, and Cloud Services into one central database.</p>
                        <p className="text-sm text-muted-foreground"><strong>Correlation:</strong> The magic of the SIEM. It links seemingly unrelated logs together. <em>(e.g., The SIEM sees a failed login on a firewall, followed by a successful login on a Windows Server from the same IP, followed by a large database query).</em></p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Alert Fatigue</h3>
                        <p className="text-sm text-muted-foreground mb-3">If a SIEM generates 5,000 alerts a day, analysts stop paying attention. This is <strong>Alert Fatigue</strong>.</p>
                        <p className="text-sm text-muted-foreground">SOCs must constantly perform <strong>Alert Tuning</strong>—refining detection rules to minimize False Positives without accidentally creating False Negatives (missing real attacks).</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Analyzing Syslog Messages"
                description="Almost all network appliances (Firewalls, Routers, Linux Servers) send their logs to the SIEM using the Syslog protocol. As an analyst, you must be able to read raw Syslog formatting."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Log Review Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-secondary/30 border border-border p-4 rounded-xl font-mono text-sm">
                            <p>Oct 14 02:33:10 WebServer01 sshd[1453]: Failed password for root from 192.168.1.50 port 49122 ssh2</p>
                            <br />
                            <p>Oct 14 02:33:11 WebServer01 sshd[1453]: Failed password for root from 192.168.1.50 port 49122 ssh2</p>
                            <br />
                            <p>Oct 14 02:33:12 WebServer01 sshd[1453]: Accepted password for root from 192.168.1.50 port 49122 ssh2</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Search className="w-4 h-4 text-emerald-500" /> Analyst Breakdown</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. <strong>Timestamp & Host:</strong> Occurred on Oct 14 at 2 AM on the host "WebServer01". This tells us it happened outside normal business hours.</li>
                                <li>2. <strong>The Daemon:</strong> <code>sshd</code> indicates this is the Secure Shell service handling remote administrative logins.</li>
                                <li>3. <strong>The Event:</strong> Two failed passwords followed immediately by a success. This is a classic indicator of a successful Brute Force attack against the highly privileged 'root' account!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQDataSources />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="During a severe malware outbreak, the Incident Response team decides to physically disconnect the infected server from the network switch, but they leave the server powered on. Which phase of the Incident Response lifecycle does this action represent?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Identification", explanation: "Incorrect. The incident was already identified." },
                            { text: "Containment", explanation: "Correct! Disconnecting the network stops the spread (isolation) while leaving the power on preserves forensic evidence in RAM." },
                            { text: "Eradication", explanation: "Incorrect. Eradication involves actively removing the malware from the hard drive." },
                            { text: "Recovery", explanation: "Incorrect. Recovery is returning the cleaned system back to production." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A forensic investigator is called to analyze a compromised workstation. The system is currently powered on and running. According to the Order of Volatility, which of the following should the investigator capture FIRST?"
                        correctIndexes={[0]}
                        options={[
                            { text: "System Memory (RAM)", explanation: "Correct! RAM is volatile. If the system loses power or continues running, the data in RAM will be destroyed or overwritten." },
                            { text: "The primary hard drive", explanation: "Incorrect. Hard drives are non-volatile (persistent) and can be imaged later." },
                            { text: "Temporary files in the Temp folder", explanation: "Incorrect. While temporary, they are still written to the non-volatile disk." },
                            { text: "USB thumb drives plugged into the machine", explanation: "Incorrect. Removable media is non-volatile." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A junior analyst complains that they spend 90% of their shift acknowledging and closing alerts generated by the SIEM for normal, legitimate administrative network traffic. What phenomenon is the analyst experiencing?"
                        correctIndexes={[2]}
                        options={[
                            { text: "False Negatives", explanation: "Incorrect. A false negative is when the system misses a real attack." },
                            { text: "Log Normalization", explanation: "Incorrect. Normalization is the process of formatting logs into a standard readable structure." },
                            { text: "Alert Fatigue caused by False Positives", explanation: "Correct! Too many false alarms cause analysts to become desensitized, increasing the risk they will ignore a real alert." },
                            { text: "Tabletop Exercises", explanation: "Incorrect. This is a training method." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following are primary functions of a SIEM (Security Information and Event Management) system? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Actively dropping network packets that contain known malware signatures.", explanation: "False. That is the job of an IPS or Firewall." },
                            { text: "Aggregating log data from multiple disparate sources into a central repository.", explanation: "True. Centralization is a core feature." },
                            { text: "Generating digital certificates for new web servers.", explanation: "False. That is the job of a Certificate Authority (CA)." },
                            { text: "Correlating events to identify complex attack patterns across different systems.", explanation: "True. Correlation is the 'intelligence' of a SIEM." },
                            { text: "Creating a bit-by-bit forensic image of a hard drive.", explanation: "False. That requires dedicated digital forensic software." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}