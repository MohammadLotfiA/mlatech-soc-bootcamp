import React, { useState } from 'react';
import { BookOpen, Scale, FileSignature, CheckCircle2, XCircle, } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Regulatory Compliance
const PBQCompliance = () => {
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
                    <Scale className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are the Compliance Officer for a multinational corporation. Match the correct legal framework, law, or industry regulation to the specific data type or scenario being protected.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> Your company operates an e-commerce platform and processes millions of credit card transactions globally. You must ensure the network is segmented and cardholder data is encrypted.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Regulation...</option>
                            <option value="HIPAA">HIPAA</option>
                            <option value="PCI-DSS">PCI DSS</option>
                            <option value="GDPR">GDPR</option>
                            <option value="FERPA">FERPA</option>
                        </select>
                        {getStatus(answers.q1, 'PCI-DSS')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> Your company markets a mobile app to users in France and Germany. You must provide users with the "Right to be Forgotten" and face massive fines for non-compliance.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Regulation...</option>
                            <option value="HIPAA">HIPAA</option>
                            <option value="PCI-DSS">PCI DSS</option>
                            <option value="GDPR">GDPR</option>
                            <option value="FERPA">FERPA</option>
                        </select>
                        {getStatus(answers.q2, 'GDPR')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> A hospital network needs to implement strict access controls and auditing to protect Electronic Protected Health Information (ePHI) belonging to patients.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Regulation...</option>
                            <option value="HIPAA">HIPAA</option>
                            <option value="PCI-DSS">PCI DSS</option>
                            <option value="GDPR">GDPR</option>
                            <option value="FERPA">FERPA</option>
                        </select>
                        {getStatus(answers.q3, 'HIPAA')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> A university is migrating its student grading systems to the cloud and must ensure that student educational records remain private.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Regulation...</option>
                            <option value="HIPAA">HIPAA</option>
                            <option value="PCI-DSS">PCI DSS</option>
                            <option value="GDPR">GDPR</option>
                            <option value="FERPA">FERPA</option>
                        </select>
                        {getStatus(answers.q4, 'FERPA')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>PCI DSS:</strong> The Payment Card Industry Data Security Standard is a contractual obligation for any entity handling credit card data.<br />
                        2. <strong>GDPR:</strong> The General Data Protection Regulation is the strict privacy law protecting the data of European Union (EU) citizens.<br />
                        3. <strong>HIPAA:</strong> The Health Insurance Portability and Accountability Act protects patient healthcare records in the US.<br />
                        4. <strong>FERPA:</strong> The Family Educational Rights and Privacy Act protects student educational records.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter14() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Policies, Standards, and Procedures"
                description="Cybersecurity is not just firewalls and encryption; it requires a foundation of rules. Governance dictates how an organization makes decisions and holds its employees accountable. Nothing is enforceable if it does not exist in a formal, approved document."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <BookOpen className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Document Hierarchy</CardTitle>
                        </CardHeader>
                        <CardContent>

                            <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4 mt-4">
                                <li><strong className="text-foreground">Policy (Mandatory):</strong> The highest level of governance. Broad statements outlining goals (e.g., "All company laptops must be encrypted.").</li>
                                <li><strong className="text-foreground">Standard (Mandatory):</strong> Specific, technical rules that support the policy (e.g., "Laptops must use AES-256 BitLocker encryption.").</li>
                                <li><strong className="text-foreground">Procedure (Mandatory):</strong> Step-by-step instructions on how to implement the standard.</li>
                                <li><strong className="text-foreground">Guideline (Optional):</strong> Recommendations and best practices.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <FileSignature className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Common Policies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>Acceptable Use Policy (AUP):</strong> The rules an employee signs agreeing to what they can and cannot do on corporate equipment.</li>
                                <li><strong>Incident Response Plan (IRP):</strong> Formalized steps to take when a breach occurs.</li>
                                <li><strong>Onboarding/Offboarding:</strong> Procedures to ensure new hires get access securely, and terminated employees have their access revoked immediately.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="legal"
                title="The Legal and Regulatory Environment"
                description="Governance committees ensure the organization abides by all applicable laws. Failing to do so results in massive financial penalties, loss of licenses, or even criminal charges."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Scale className="w-4 h-4 text-primary" /> Healthcare (US)</h3>
                        <p className="text-sm text-muted-foreground"><strong>HIPAA:</strong> Protects patient medical data (ePHI). Breaches of this act are severely punished by the US Department of Health and Human Services.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Scale className="w-4 h-4 text-primary" /> Privacy (EU & CA)</h3>
                        <p className="text-sm text-muted-foreground"><strong>GDPR:</strong> The European privacy law granting the 'Right to be Forgotten'.<br /><strong>CCPA:</strong> The California Consumer Privacy Act, heavily modeled on GDPR for California residents.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Scale className="w-4 h-4 text-primary" /> Financial Services</h3>
                        <p className="text-sm text-muted-foreground"><strong>PCI-DSS:</strong> Not a law, but a strict contractual standard enforced by credit card companies on any business that processes payments.<br /><strong>GLBA:</strong> US law requiring financial institutions to explain how they share consumer data.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="change"
                kicker="Interactive Concept"
                title="Change Management"
                description="IT changes (like updating a firewall or pushing new code) are the #1 cause of self-inflicted network outages. A strict Change Management Program ensures that every change is reviewed for security, impact, and rollback capabilities before it is allowed."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>The Change Advisory Board (CAB):</strong> A group of stakeholders (IT, Security, Management) that reviews proposed changes. They look for three things: 1) Has it been tested? 2) Will it be deployed during an off-hours Maintenance Window? 3) Is there a verified Backout Plan if it breaks?
                    </p>
                </div>

                {/* Interactive Change Management Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="auto"
                title="Automation and Orchestration"
                description="As networks scale to the cloud, manual procedures become a liability. We use code to enforce governance."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Automation</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li>Executing a single, repetitive task using a script (e.g., using a PowerShell script to disable an Active Directory account when HR flags a user as terminated).</li>
                            <li><strong className="text-foreground">Benefit:</strong> Reduces human error and ensures the task is completed consistently every single time.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Orchestration</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li>Coordinating *multiple* automated tasks across *different* systems into a seamless workflow.</li>
                            <li><strong className="text-foreground">Example:</strong> A SIEM detects a virus. Orchestration triggers the firewall to block the IP, triggers the EDR to isolate the laptop, and triggers a ticketing system to alert the SOC—all automatically, in seconds.</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQCompliance />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="An organization publishes a document stating: 'Passwords should be at least 14 characters long and changed every 90 days. However, shorter passwords may be used if multifactor authentication is heavily enforced.' What type of governance document is this?"
                        correctIndexes={[3]}
                        options={[
                            { text: "A Policy", explanation: "Incorrect. Policies are mandatory and use absolute language." },
                            { text: "A Standard", explanation: "Incorrect. Standards are mandatory technical requirements." },
                            { text: "A Procedure", explanation: "Incorrect. Procedures are step-by-step instructions." },
                            { text: "A Guideline", explanation: "Correct! Guidelines are recommendations that offer flexibility and use terms like 'should' instead of 'must'." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A network administrator is proposing a major upgrade to the core routing infrastructure. The Change Advisory Board (CAB) rejects the proposal, stating that the submission is incomplete. Which of the following components is the MOST critical for the administrator to include to get the change approved?"
                        correctIndexes={[1]}
                        options={[
                            { text: "A detailed list of the specific automation scripts used.", explanation: "Incorrect. While helpful, it's not the most critical governance component." },
                            { text: "A documented and tested Backout Plan.", explanation: "Correct! The CAB must know exactly how to revert the change to a working state if the upgrade causes a critical outage." },
                            { text: "Approval from the local government regulator.", explanation: "Incorrect. Hardware changes do not require legislative approval." },
                            { text: "A revised Acceptable Use Policy (AUP).", explanation: "Incorrect. The AUP governs employee behavior, not router upgrades." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A new employee is hired. Upon signing their employment contract, they are required to sign a document agreeing not to use corporate laptops for personal web browsing, cryptocurrency mining, or accessing unauthorized file-sharing sites. What document did they sign?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Acceptable Use Policy (AUP)", explanation: "Correct! The AUP explicitly outlines the allowed and prohibited uses of company IT resources." },
                            { text: "Service Level Agreement (SLA)", explanation: "Incorrect. An SLA is a contract guaranteeing uptime between a provider and a client." },
                            { text: "Non-Disclosure Agreement (NDA)", explanation: "Incorrect. An NDA prevents the sharing of trade secrets." },
                            { text: "Software Development Life Cycle (SDLC) Policy", explanation: "Incorrect. This policy governs how programmers write secure code." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following statements accurately contrast Automation and Orchestration? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "Automation typically focuses on executing a single, repetitive task efficiently.", explanation: "True. Automation is the building block." },
                            { text: "Orchestration relies entirely on manual human intervention at every step.", explanation: "False. Orchestration is heavily automated." },
                            { text: "Automation is a policy document, while Orchestration is a technical standard.", explanation: "False. Both are technical operational processes." },
                            { text: "Orchestration involves coordinating multiple automated tasks across diverse systems to accomplish a complex workflow.", explanation: "True. Orchestration ties automated scripts together into a larger sequence." },
                            { text: "Automation requires the approval of a Change Advisory Board for every individual script run.", explanation: "False. Changes to the script require CAB approval, but the daily execution does not." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}