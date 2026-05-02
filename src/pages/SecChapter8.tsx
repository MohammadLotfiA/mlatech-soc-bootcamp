import React, { useState } from 'react';
import { Target, Bug, ShieldAlert, FileCode2, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Vulnerability Assessment Types
const PBQVulnAssessment = () => {
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
                    <strong>Scenario:</strong> You are the lead security analyst. Match the specific vulnerability assessment or testing method to the correct business requirement.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> You need to scan the registry and internal file system of a Windows Server to determine if a specific security patch was installed successfully.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Method...</option>
                            <option value="NonCredentialed">Non-Credentialed Scan</option>
                            <option value="Credentialed">Credentialed Scan</option>
                            <option value="UnknownPenTest">Unknown (Black Box) Pen Test</option>
                            <option value="KnownPenTest">Known (White Box) Pen Test</option>
                        </select>
                        {getStatus(answers.q1, 'Credentialed')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> You hire a third-party firm to attack your network. You provide them with no IP addresses, no network diagrams, and no credentials.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Method...</option>
                            <option value="NonCredentialed">Non-Credentialed Scan</option>
                            <option value="Credentialed">Credentialed Scan</option>
                            <option value="UnknownPenTest">Unknown (Black Box) Pen Test</option>
                            <option value="KnownPenTest">Known (White Box) Pen Test</option>
                        </select>
                        {getStatus(answers.q2, 'UnknownPenTest')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> You need to quickly identify which TCP/UDP ports are open on a new web server without logging into the server itself.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Method...</option>
                            <option value="NonCredentialed">Non-Credentialed Scan</option>
                            <option value="Credentialed">Credentialed Scan</option>
                            <option value="UnknownPenTest">Unknown (Black Box) Pen Test</option>
                            <option value="KnownPenTest">Known (White Box) Pen Test</option>
                        </select>
                        {getStatus(answers.q3, 'NonCredentialed')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> You hire a third-party firm to test a new custom application. You provide them with the source code and administrative credentials to the testing environment.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Method...</option>
                            <option value="NonCredentialed">Non-Credentialed Scan</option>
                            <option value="Credentialed">Credentialed Scan</option>
                            <option value="UnknownPenTest">Unknown (Black Box) Pen Test</option>
                            <option value="KnownPenTest">Known (White Box) Pen Test</option>
                        </select>
                        {getStatus(answers.q4, 'KnownPenTest')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Credentialed Scan:</strong> The scanner is given admin rights to log in and inspect the OS deeply (lowest false positive rate).<br />
                        2. <strong>Unknown Environment (Black Box):</strong> Simulates an external hacker starting from scratch.<br />
                        3. <strong>Non-Credentialed Scan:</strong> Scanning from the outside looking in (high false positive rate).<br />
                        4. <strong>Known Environment (White Box):</strong> The testers have full transparency to conduct a thorough code-level audit.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter8() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Device & OS Vulnerabilities"
                description="A vulnerability is a weakness in a system. Effective security requires understanding the source of these weaknesses so they can be prioritized and patched."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Bug className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Zero-Days & Legacy Systems</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Zero-Day:</strong> A vulnerability completely unknown to the software vendor. There is no patch available, and traditional antivirus will not stop it.</li>
                                <li><strong>End-of-Life (EOL):</strong> Systems (like Windows 7) that no longer receive security updates from the vendor. They must be isolated or decommissioned.</li>
                                <li><strong>Misconfigurations:</strong> Often the most common vulnerability! Leaving default admin passwords or opening S3 storage buckets to the public internet.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Target className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Mobile Weaknesses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3">Mobile devices enforce strict app sandboxing. However, users often bypass this security to install unapproved software.</p>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Rooting (Android) & Jailbreaking (iOS):</strong> Gaining full administrative privileges, breaking the OS security sandbox.</li>
                                <li><strong>Sideloading:</strong> Installing apps (like .APK files) directly from the internet rather than a trusted official App Store.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="app"
                title="Application Vulnerabilities"
                description="Poorly written code is the attacker's best friend. Web Applications are particularly vulnerable because they are designed to accept input from the internet."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><FileCode2 className="w-4 h-4 text-primary" /> Memory Injection</h3>
                        <p className="text-sm text-muted-foreground"><strong>Buffer Overflow:</strong> When a program receives more data than it expects, the extra data "overflows" into adjacent memory. Attackers use this to overwrite return addresses and execute malicious code. Mitigated by using Type-Safe languages (like Rust or Python instead of C).</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><FileCode2 className="w-4 h-4 text-primary" /> Web Attacks (XSS & SQLi)</h3>
                        <p className="text-sm text-muted-foreground"><strong>SQL Injection (SQLi):</strong> Inputting database commands into a web form to steal data.<br /><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious JavaScript into a website so that it executes in the browsers of other visiting users.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><FileCode2 className="w-4 h-4 text-primary" /> Supply Chain</h3>
                        <p className="text-sm text-muted-foreground">If an attacker compromises a third-party software vendor, they can inject malicious code into a legitimate software update. Companies combat this by requesting a <strong>Software Bill of Materials (SBOM)</strong> to map every dependency in a program.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="scan"
                title="Vulnerability Identification & Analysis"
                description="How do you find the weaknesses before the attackers do?"
            >
                <div className="space-y-4 mt-6 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Vulnerability Scanners (Nessus, OpenVAS):</strong> Automated tools that sweep the network comparing OS versions and open ports against a database of known vulnerabilities.</p>
                    <p><strong className="text-foreground">False Positives vs False Negatives:</strong> A <span className="text-destructive font-semibold">False Positive</span> is an alert for a vulnerability that isn't actually there. A <span className="text-destructive font-semibold">False Negative</span> is much worse: a real vulnerability exists, but the scanner missed it entirely.</p>
                    <p><strong className="text-foreground">Threat Feeds (OSINT & ISACs):</strong> Continuous streams of Threat Intelligence providing newly discovered Indicators of Compromise (IoCs).</p>
                    <p><strong className="text-foreground">Remediation:</strong> Once a vulnerability is found, it must be prioritized based on its CVSS score. Remediation includes Patching, Segmentation, or applying Compensating Controls if a patch isn't possible.</p>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Understanding CVSS Scoring"
                description="The Common Vulnerability Scoring System (CVSS) is an industry-standard calculator. A score of 9.5 is Critical. But how is that number generated? It is based on the 'Base Metrics' of the attack. Use the calculator below to see how different vectors affect severity."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Key Metrics to watch:</strong> Notice how changing the Attack Vector from 'Local' (requires physical access) to 'Network' (can be attacked remotely over the internet) instantly spikes the severity score!
                    </p>
                </div>

                {/* Interactive CVSS Simulator will render here */}
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQVulnAssessment />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A legacy manufacturing system runs on Windows XP because the custom software cannot be upgraded. Windows XP is an End-of-Life (EOL) operating system. What is the PRIMARY security vulnerability associated with an EOL system?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It cannot connect to modern IPv6 networks.", explanation: "Incorrect. The primary issue is security, not networking protocols." },
                            { text: "The vendor will no longer provide security patches for newly discovered vulnerabilities.", explanation: "Correct! EOL means no more updates, leaving any future zero-days permanently unpatched." },
                            { text: "The system will automatically delete its own data after a set date.", explanation: "Incorrect. EOL systems continue to function." },
                            { text: "It cannot support multifactor authentication.", explanation: "Incorrect. While true, the lack of patching is the critical foundational vulnerability." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A developer is reviewing application code. They notice that a function takes data from an internet text field and copies it directly into a fixed-size array in system memory without checking the length of the input. What type of vulnerability is the developer observing?"
                        correctIndexes={[2]}
                        options={[
                            { text: "SQL Injection (SQLi)", explanation: "Incorrect. SQLi targets backend databases, not system memory arrays." },
                            { text: "Cross-Site Scripting (XSS)", explanation: "Incorrect. XSS targets client-side browsers." },
                            { text: "Buffer Overflow", explanation: "Correct! Failing to check the bounds of the input before writing it to a fixed memory buffer allows an attacker to overflow the stack." },
                            { text: "Misconfiguration", explanation: "Incorrect. This is a coding flaw, not a server configuration error." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="During a weekly vulnerability scan, the automated scanner flags an internal print server as having a Critical 'Apache Struts' vulnerability. The security analyst investigates and discovers that the print server is a bare-metal Windows server running proprietary printing software, and it does not have Apache installed anywhere on the hard drive. How should the analyst classify this scan result?"
                        correctIndexes={[0]}
                        options={[
                            { text: "False Positive", explanation: "Correct! The scanner flagged a vulnerability that does not actually exist on the system." },
                            { text: "False Negative", explanation: "Incorrect. A false negative is when a real vulnerability goes undetected." },
                            { text: "Zero-Day Exploit", explanation: "Incorrect. It is just an erroneous scan result, not an exploit." },
                            { text: "Compensating Control", explanation: "Incorrect. A compensating control is an alternative security measure." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following are considered valid mitigation strategies if a discovered software vulnerability cannot be immediately patched because the patch breaks a critical business workflow? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Rooting the device to gain administrative control.", explanation: "False. Rooting a device removes security sandboxes, increasing risk." },
                            { text: "Network Segmentation (isolating the vulnerable server from the main network).", explanation: "True. If it cannot be patched, isolate it to reduce the attack surface." },
                            { text: "Downgrading the encryption standard to a legacy cipher.", explanation: "False. Weakening cryptography introduces new vulnerabilities." },
                            { text: "Implementing Compensating Controls (like tightening firewall rules or adding an IPS in front of the server).", explanation: "True. Extra layers of defense compensate for the lack of a patch." },
                            { text: "Ignoring the scan result as a False Negative.", explanation: "False. The vulnerability is real, so it cannot be ignored." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}