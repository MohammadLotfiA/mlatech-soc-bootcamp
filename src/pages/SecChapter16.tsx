import React, { useState } from 'react';
import { Database, Map, Users, FileSearch, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Data Classification
const PBQDataClassification = () => {
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
                    <strong>Scenario:</strong> You are the Data Privacy Officer (DPO) updating the corporate data inventory. Match the specific data example to its correct organizational classification type.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> The upcoming, unannounced source code for the company's new flagship software product, which competitors would pay millions to acquire.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Classification...</option>
                            <option value="PII">Personally Identifiable Information (PII)</option>
                            <option value="TradeSecret">Trade Secret / IP</option>
                            <option value="PHI">Protected Health Information (PHI)</option>
                            <option value="Public">Public Data</option>
                        </select>
                        {getStatus(answers.q1, 'TradeSecret')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> A database containing the full names, home addresses, and Social Security Numbers of all current employees.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Classification...</option>
                            <option value="PII">Personally Identifiable Information (PII)</option>
                            <option value="TradeSecret">Trade Secret / IP</option>
                            <option value="PHI">Protected Health Information (PHI)</option>
                            <option value="Public">Public Data</option>
                        </select>
                        {getStatus(answers.q2, 'PII')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> A press release posted on the corporate website announcing the hiring of a new Chief Executive Officer.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Classification...</option>
                            <option value="PII">Personally Identifiable Information (PII)</option>
                            <option value="TradeSecret">Trade Secret / IP</option>
                            <option value="PHI">Protected Health Information (PHI)</option>
                            <option value="Public">Public Data</option>
                        </select>
                        {getStatus(answers.q3, 'Public')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> Medical records belonging to an employee detailing their recent surgery, which was submitted to HR for insurance purposes.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Classification...</option>
                            <option value="PII">Personally Identifiable Information (PII)</option>
                            <option value="TradeSecret">Trade Secret / IP</option>
                            <option value="PHI">Protected Health Information (PHI)</option>
                            <option value="Public">Public Data</option>
                        </select>
                        {getStatus(answers.q4, 'PHI')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Trade Secret / Intellectual Property:</strong> Highly sensitive corporate data that provides a competitive advantage.<br />
                        2. <strong>PII:</strong> Any data that can be used to identify a specific individual (SSN, home address).<br />
                        3. <strong>Public Data:</strong> Information intentionally released to the world. Requires no confidentiality protections.<br />
                        4. <strong>PHI:</strong> Health information tied to a specific individual, fiercely protected by HIPAA regulations.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter16() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Data Classification & Privacy"
                description="Not all data is equal. You wouldn't spend $10,000 securing a server that only hosts the public cafeteria menu. Data must be classified to determine the level of protection it requires."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Database className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Classification Levels</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Public:</strong> No damage if exposed (Press releases).</li>
                                <li><strong>Internal/Private:</strong> Mild damage if exposed (Employee phone directory).</li>
                                <li><strong>Confidential/Restricted:</strong> Severe damage if exposed (Source code, Trade Secrets, PII, PHI).</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Users className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Privacy Roles (GDPR)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3">Under modern privacy laws, you do not "own" the user's data.</p>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Data Subject:</strong> The user whom the data is about.</li>
                                <li><strong>Data Controller:</strong> The company that decides *why* the data is collected.</li>
                                <li><strong>Data Processor:</strong> A third-party vendor (like AWS) that actually stores or calculates the data on behalf of the controller.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="privacy"
                title="Data Sovereignty"
                description="Data Sovereignty refers to the legal jurisdiction that governs the data. If a US company stores data in a German datacenter, that data is subject to German law and the GDPR, not US law."
            >
                <div className="mt-4 p-4 bg-secondary/30 border border-border rounded-lg">
                    <p className="text-sm text-foreground font-semibold flex items-center gap-2 mb-2">
                        <Map className="w-4 h-4 text-primary" /> Geographical Considerations
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Many countries legally require that the data of their citizens MUST be stored on servers physically located within their borders. Cloud engineers must use strict 'Geofencing' or region-locking to ensure backups aren't accidentally replicated to a datacenter in another country, which would trigger massive compliance fines.
                    </p>
                </div>
            </SectionBlock>

            <SectionBlock
                id="states"
                kicker="Interactive Concept"
                title="The Three States of Data"
                description="Data requires completely different types of cryptographic protection depending on what it is currently doing."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Data Loss Prevention (DLP):</strong> DLP software watches all three states to stop sensitive data (like credit card numbers) from leaving the organization. It can block a user from saving a file to a USB (Data At-Rest), block an email from sending (Data In-Motion), or block a user from copying/pasting text (Data In-Use).
                    </p>
                </div>

                {/* Interactive Data States Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Configuring DLP with Regular Expressions (Regex)"
                description="How does a Data Loss Prevention (DLP) firewall know what a Social Security Number looks like? It doesn't read English; it uses Regular Expressions (Regex) to pattern-match."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <FileSearch className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Rule Configuration Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-secondary/30 border border-border p-4 rounded-xl font-mono text-sm">
                            <p className="text-muted-foreground mb-2">Requirement: Block any outbound email containing a US Social Security Number (Format: XXX-XX-XXXX)</p>
                            <p className="text-emerald-500 font-bold">\b[0-9]&#123;3&#125;-[0-9]&#123;2&#125;-[0-9]&#123;4&#125;\b</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Analyst Breakdown</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. <strong>\b</strong>: Word boundary. Tells the scanner to look for an independent word, not something buried inside a longer string.</li>
                                <li>2. <strong>[0-9]&#123;3&#125;</strong>: Matches exactly three digits between 0 and 9.</li>
                                <li>3. <strong>-</strong>: Matches a literal hyphen.</li>
                                <li>4. <strong>[0-9]&#123;2&#125;</strong>: Matches exactly two digits.</li>
                                <li>5. <strong>-</strong>: Matches a literal hyphen.</li>
                                <li>6. <strong>[0-9]&#123;4&#125;</strong>: Matches exactly four digits.</li>
                                <li><em>Result:</em> If the DLP scanner sees a string matching this exact mathematical pattern in an email, it automatically quarantines the email and alerts the SOC.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQDataClassification />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A multinational corporation headquartered in New York uses a cloud provider to store its HR database. The database is physically stored in a datacenter located in Frankfurt, Germany. Which of the following concepts dictates that this data is subject to the privacy laws of the European Union?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Data Loss Prevention", explanation: "Incorrect. DLP prevents data exfiltration." },
                            { text: "Data Sovereignty", explanation: "Correct! Data is legally subject to the laws of the country where it physically resides." },
                            { text: "Data In-Use", explanation: "Incorrect. This refers to data actively processing in RAM." },
                            { text: "Code of Conduct", explanation: "Incorrect. This governs employee behavior." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Under the General Data Protection Regulation (GDPR), which role determines the 'purpose and means' of processing personal data? (Who decides *why* the data is collected?)"
                        correctIndexes={[0]}
                        options={[
                            { text: "Data Controller", explanation: "Correct! The Controller dictates the purpose of the data collection." },
                            { text: "Data Processor", explanation: "Incorrect. The Processor just handles the data on behalf of the Controller (like a cloud hosting provider)." },
                            { text: "Data Subject", explanation: "Incorrect. The Subject is the human whom the data is about." },
                            { text: "Data Owner", explanation: "Incorrect. 'Owner' is an internal classification term, not the formal GDPR legal role." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A security administrator implements Full Disk Encryption (FDE) using BitLocker on all corporate laptops. Which state of data is this control specifically designed to protect?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Data At-Rest", explanation: "Correct! FDE protects data while it is stored on the persistent hard drive." },
                            { text: "Data In-Motion", explanation: "Incorrect. TLS or VPNs protect data moving across a network." },
                            { text: "Data In-Use", explanation: "Incorrect. Data is decrypted when loaded into RAM/CPU for use." },
                            { text: "Data In-Transit", explanation: "Incorrect. Transit is synonymous with Motion." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following are primary capabilities of a Data Loss Prevention (DLP) system? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "Scanning outbound emails and blocking the transmission of unencrypted Credit Card numbers.", explanation: "True. DLP actively blocks data in-motion from leaving the network." },
                            { text: "Providing an encrypted VPN tunnel for remote workers.", explanation: "False. That is the job of an IPsec or TLS VPN gateway." },
                            { text: "Hashing user passwords in the active directory database.", explanation: "False. This is a cryptographic identity function, not DLP." },
                            { text: "Preventing users from copying sensitive text to their clipboard or saving files to a USB drive.", explanation: "True. Endpoint DLP agents can block in-use and at-rest exfiltration." },
                            { text: "Performing internal vulnerability scans against the web server.", explanation: "False. This is the job of a tool like Nessus." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}