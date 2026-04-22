import React, { useState } from 'react';
import { Key, FileCheck, Server, ShieldAlert, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom PBQ Component for Security+ Simulation
const PerformanceBasedQuestion = () => {
    const [answers, setAnswers] = useState({
        q1Cat: '', q1Type: '',
        q2Cat: '', q2Type: '',
        q3Cat: '', q3Type: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const checkPBQ = () => setSubmitted(true);

    const getStatus = (catVal: string, typeVal: string, expCat: string, expType: string) => {
        if (!submitted) return null;
        if (catVal === expCat && typeVal === expType) return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
        return <XCircle className="w-5 h-5 text-destructive" />;
    };

    return (
        <Card className="border-primary/20 shadow-md">
            <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are the new ISSO for a hospital. You must classify three newly implemented security controls by their <strong>Category</strong> (Implementation method) and <strong>Functional Type</strong> (Purpose).
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {/* PBQ Row 1 */}
                <div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="font-semibold text-sm">1. A locked server room door</div>
                    <select className="p-2 rounded border border-border bg-background text-sm" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1Cat: e.target.value })}>
                        <option value="">Select Category...</option>
                        <option value="Managerial">Managerial</option>
                        <option value="Operational">Operational</option>
                        <option value="Technical">Technical</option>
                        <option value="Physical">Physical</option>
                    </select>
                    <div className="flex items-center gap-3">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1Type: e.target.value })}>
                            <option value="">Select Type...</option>
                            <option value="Preventive">Preventive</option>
                            <option value="Detective">Detective</option>
                            <option value="Corrective">Corrective</option>
                        </select>
                        {getStatus(answers.q1Cat, answers.q1Type, 'Physical', 'Preventive')}
                    </div>
                </div>

                {/* PBQ Row 2 */}
                <div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="font-semibold text-sm">2. An automated firewall dropping traffic</div>
                    <select className="p-2 rounded border border-border bg-background text-sm" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2Cat: e.target.value })}>
                        <option value="">Select Category...</option>
                        <option value="Managerial">Managerial</option>
                        <option value="Operational">Operational</option>
                        <option value="Technical">Technical</option>
                        <option value="Physical">Physical</option>
                    </select>
                    <div className="flex items-center gap-3">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2Type: e.target.value })}>
                            <option value="">Select Type...</option>
                            <option value="Preventive">Preventive</option>
                            <option value="Detective">Detective</option>
                            <option value="Corrective">Corrective</option>
                        </select>
                        {getStatus(answers.q2Cat, answers.q2Type, 'Technical', 'Preventive')}
                    </div>
                </div>

                {/* PBQ Row 3 */}
                <div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="font-semibold text-sm">3. Security awareness training for staff</div>
                    <select className="p-2 rounded border border-border bg-background text-sm" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3Cat: e.target.value })}>
                        <option value="">Select Category...</option>
                        <option value="Managerial">Managerial</option>
                        <option value="Operational">Operational</option>
                        <option value="Technical">Technical</option>
                        <option value="Physical">Physical</option>
                    </select>
                    <div className="flex items-center gap-3">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3Type: e.target.value })}>
                            <option value="">Select Type...</option>
                            <option value="Preventive">Preventive</option>
                            <option value="Detective">Detective</option>
                            <option value="Corrective">Corrective</option>
                        </select>
                        {getStatus(answers.q3Cat, answers.q3Type, 'Operational', 'Preventive')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Simulation Feedback:</strong><br />
                        1. A door lock is a <strong>Physical</strong> control designed to <strong>Prevent</strong> entry.<br />
                        2. A firewall is a <strong>Technical</strong> control implemented in software/hardware to <strong>Prevent</strong> traffic.<br />
                        3. Training relies on humans (<strong>Operational</strong>) to <strong>Prevent</strong> mistakes. (Note: Policies writing the training are Managerial).
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter1() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Summarizing Fundamental Security Concepts"
                description="Welcome to Security+. We are moving away from general IT support and stepping into the mindset of a Security Operations Center (SOC). Every decision a security professional makes is driven by core frameworks and the ultimate goal of protecting data."
            >
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Key className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Confidentiality</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Information should only be read by authorized persons. (e.g., Encryption, Passwords).</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <FileCheck className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Integrity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Data is stored and transferred exactly as intended without unauthorized modification. (e.g., File Hashing).</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Server className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Availability</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Information is accessible to those authorized to view it when they need it. (e.g., Backups, DDoS protection).</p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="controls"
                title="Security Controls: Categories vs. Types"
                description="When an auditor assesses a company via a Cybersecurity Framework (like NIST), they perform a 'Gap Analysis' to see what defenses are missing. These defenses are called Controls. You must be able to classify them by HOW they are implemented (Category) and WHAT they do (Functional Type)."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Categories (The Implementation)</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">Managerial:</strong> Rules and oversight (Policies, Risk Assessments).</li>
                            <li><strong className="text-foreground">Operational:</strong> Relies on humans to execute (Guards, Security Training).</li>
                            <li><strong className="text-foreground">Technical:</strong> Executed by the system (Firewalls, Antivirus, OS permissions).</li>
                            <li><strong className="text-foreground">Physical:</strong> Tangible real-world barriers (Fences, Locks, Cameras).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Functional Types (The Purpose)</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">Preventive:</strong> Stops an attack before it happens (Locks, Firewalls).</li>
                            <li><strong className="text-foreground">Detective:</strong> Identifies an intrusion during or after (Alarms, Logs).</li>
                            <li><strong className="text-foreground">Corrective:</strong> Fixes the damage after an attack (Restoring Backups).</li>
                            <li><strong className="text-foreground">Deterrent:</strong> Psychologically discourages attacks (Warning signs).</li>
                            <li><strong className="text-foreground">Compensating:</strong> A temporary substitute when the main control fails.</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Proving Data Integrity"
                description="One of the core pillars of the CIA triad is Integrity. How do you mathematically prove that a file was not altered by a hacker in transit? You use File Hashing. We will use Windows PowerShell to prove this concept."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">Step 1: Creating the Asset</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">PowerShell</code>, and press Enter.</li>
                                <li>
                                    2. Let's create a text file with a secret message. Type this exactly:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">echo "Pay $100 to Account A" {'>'} finance.txt</pre>
                                    </div>
                                </li>
                                <li>
                                    3. Now, generate a mathematical fingerprint (Hash) of that file:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">Get-FileHash finance.txt</pre>
                                    </div>
                                </li>
                                <li>4. Look at the long string of letters and numbers outputted under the "Hash" column. Note the first few characters.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">Step 2: The Attack & The Proof</h4>
                            <p className="text-sm text-muted-foreground mb-2">Imagine a hacker intercepts the file and changes a single digit before it reaches the bank.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. Overwrite the file with a slightly altered message:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">echo "Pay $900 to Account A" {'>'} finance.txt</pre>
                                    </div>
                                </li>
                                <li>
                                    2. Run the hash command again:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">Get-FileHash finance.txt</pre>
                                    </div>
                                </li>
                                <li>3. <strong>Observation:</strong> Even though only one number changed, the resulting Hash is <em>completely</em> different. The receiver would compare this new hash against the original, realize it doesn't match, and reject the file, thus preserving <strong>Integrity</strong>!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PerformanceBasedQuestion />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company recently suffered a ransomware attack that encrypted their primary database. The incident response team successfully restored the database using daily offline backups. In the context of security controls, what functional type of control does the backup represent?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Preventive", explanation: "Incorrect. Backups do not prevent the ransomware from executing." },
                            { text: "Detective", explanation: "Incorrect. Backups do not detect the presence of the ransomware." },
                            { text: "Corrective", explanation: "Correct! Corrective controls are deployed to fix the damage and restore functionality after an incident has occurred." },
                            { text: "Deterrent", explanation: "Incorrect. Ransomware operators are not psychologically deterred by backups." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A financial institution implements a policy that requires all users to digitally sign their emails. Furthermore, the system logs every transaction mapped to the user's secure ID. This prevents employees from claiming they did not authorize a specific wire transfer. Which security concept is being enforced?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Confidentiality", explanation: "Incorrect. Digital signatures ensure authenticity, not necessarily secrecy." },
                            { text: "Availability", explanation: "Incorrect. This does not ensure system uptime." },
                            { text: "Gap Analysis", explanation: "Incorrect. That is an auditing technique." },
                            { text: "Non-repudiation", explanation: "Correct! Non-repudiation ensures that a subject cannot falsely deny having performed an action." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="Which business unit is specifically designed to integrate security practices continuously into the software creation and deployment pipeline, rather than treating security as an afterthought?"
                        correctIndexes={[1]}
                        options={[
                            { text: "SOC (Security Operations Center)", explanation: "Incorrect. A SOC monitors live environments; they do not typically code the software." },
                            { text: "DevSecOps", explanation: "Correct! Development, Security, and Operations merges these fields into one continuous CI/CD pipeline." },
                            { text: "CIRT (Cyber Incident Response Team)", explanation: "Incorrect. A CIRT responds to active breaches." },
                            { text: "CIO (Chief Information Officer)", explanation: "Incorrect. This is an executive role, not a business unit." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="An auditor is assessing a company's implementation of Technical Security Controls. Which of the following would the auditor classify as Technical controls? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "Configuring an Access Control List (ACL) on a router.", explanation: "True. This is a logical restriction implemented by a system." },
                            { text: "Hiring a security guard to patrol the data center.", explanation: "False. This is a Physical and Operational control." },
                            { text: "Publishing a mandatory password rotation policy.", explanation: "False. The written policy itself is a Managerial control." },
                            { text: "Installing an Intrusion Prevention System (IPS) appliance.", explanation: "True. Software and security appliances are technical implementations." },
                            { text: "Conducting an annual tabletop exercise for the CIRT.", explanation: "False. This is an Operational training control." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}