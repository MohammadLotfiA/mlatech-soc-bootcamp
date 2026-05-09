import React, { useState } from 'react';
import { FileSignature, FileText, Scale, Briefcase, CheckCircle2, XCircle, Search } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Vendor Agreements
const PBQVendorAgreements = () => {
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
                    <FileSignature className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are managing third-party risk. Match the correct legal document or vendor agreement to the specific business requirement.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> An overarching contract that establishes the general terms, conditions, and legal boundaries for all future projects with a vendor, so you don't have to renegotiate legal terms every time.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Agreement...</option>
                            <option value="SLA">SLA</option>
                            <option value="MSA">MSA</option>
                            <option value="SOW">SOW</option>
                            <option value="MOU">MOU</option>
                        </select>
                        {getStatus(answers.q1, 'MSA')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> A document outlining the specific tasks, deliverables, and timelines for a single penetration testing engagement.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Agreement...</option>
                            <option value="SLA">SLA</option>
                            <option value="MSA">MSA</option>
                            <option value="SOW">SOW</option>
                            <option value="MOU">MOU</option>
                        </select>
                        {getStatus(answers.q2, 'SOW')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> A guarantee from a cloud provider that their database servers will maintain 99.99% uptime, with financial penalties defined if they fail.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Agreement...</option>
                            <option value="SLA">SLA</option>
                            <option value="MSA">MSA</option>
                            <option value="SOW">SOW</option>
                            <option value="MOU">MOU</option>
                        </select>
                        {getStatus(answers.q3, 'SLA')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> A preliminary "letter of intent" between two companies agreeing to work together toward a common goal, often written before a formal, legally binding contract is drafted.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Agreement...</option>
                            <option value="SLA">SLA</option>
                            <option value="MSA">MSA</option>
                            <option value="SOW">SOW</option>
                            <option value="MOU">MOU</option>
                        </select>
                        {getStatus(answers.q4, 'MOU')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>MSA (Master Service Agreement):</strong> Establishes overarching legal terms.<br />
                        2. <strong>SOW (Statement of Work):</strong> Details the specific tasks and deliverables for a project.<br />
                        3. <strong>SLA (Service Level Agreement):</strong> Defines the required performance metrics (like uptime) and penalties.<br />
                        4. <strong>MOU (Memorandum of Understanding):</strong> A broad agreement of intent, generally less formal than a strict contract.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter15() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Risk Management Concepts"
                description="We cannot eliminate all risks. Risk Management is the process of identifying threats, assessing their impact, and deciding what to do about them."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Scale className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Risk Responses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Mitigate:</strong> Implementing a control to reduce the risk (e.g., installing a firewall).</li>
                                <li><strong>Transfer:</strong> Shifting the financial burden to someone else (e.g., buying cybersecurity insurance).</li>
                                <li><strong>Avoid:</strong> Stopping the risky activity entirely (e.g., deciding not to launch a feature).</li>
                                <li><strong>Accept:</strong> Acknowledging the risk and doing nothing because the cost of the fix is higher than the impact.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <FileText className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Inherent vs. Residual Risk</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3"><strong>Inherent Risk:</strong> The natural level of risk before you do anything.</p>
                            <p className="text-sm text-foreground mb-3"><strong>Residual Risk:</strong> The risk leftover *after* you implement mitigations. This leftover risk must fall within the company's <strong>Risk Appetite</strong> (the amount of risk management is willing to tolerate).</p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="quantitative"
                kicker="Interactive Concept"
                title="Quantitative Risk Analysis"
                description="Qualitative risk uses subjective labels (High, Medium, Low) mapped on a Heat Map. Quantitative risk uses hard numbers and dollar amounts to justify security budgets."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        If a server costs $100,000 (Asset Value) and a fire would destroy 50% of it (Exposure Factor), the Single Loss Expectancy (SLE) is $50,000. If a fire happens once every 10 years (ARO = 0.1), the Annualized Loss Expectancy (ALE) is $5,000. Therefore, spending $10,000 a year on a fire suppression system is a bad business decision!
                    </p>
                </div>

                {/* Interactive Quantitative Risk Calculator will render here */}
            </SectionBlock>

            <SectionBlock
                id="bia"
                title="Business Impact Analysis (BIA) Metrics"
                description="A BIA identifies Mission Essential Functions and maps out exactly how long the business can survive without them."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Downtime Metrics</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">RTO (Recovery Time Objective):</strong> The target time to get IT systems back online (e.g., servers booted up in 4 hours).</li>
                            <li><strong className="text-foreground">MTD (Maximum Tolerable Downtime):</strong> The absolute maximum time the business can be down before it goes bankrupt or suffers irreparable harm. RTO must always be *less* than MTD.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Data Loss Metrics</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">RPO (Recovery Point Objective):</strong> The maximum amount of data loss the company can tolerate, measured in time.</li>
                            <li><em>Example:</em> If your RPO is 12 hours, you must perform backups at least every 12 hours. If the server crashes, you only lose a maximum of 12 hours of work.</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="audit"
                title="Audits and Assessments"
                description="To prove that our controls are working, we must test them."
            >
                <div className="grid md:grid-cols-2 gap-6 mt-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Attestation & Audits</h3>
                        <p className="text-sm text-muted-foreground"><strong>Internal Audits:</strong> Performed by company employees to prepare for official audits. <br /><strong>External Audits:</strong> Performed by an independent third-party (like a CPA firm) to provide objective attestation for legal compliance.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Search className="w-4 h-4 text-primary" /> Penetration Testing</h3>
                        <p className="text-sm text-muted-foreground">Authorized hacking to discover exploitable weaknesses.<br /><strong>Unknown Environment (Black Box):</strong> The tester is given zero information, simulating an external attack.<br /><strong>Known Environment (White Box):</strong> The tester is given full source code and admin credentials to perform a deep audit.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQVendorAgreements />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company identifies a risk that their primary datacenter could be flooded. To deal with this, they purchase a comprehensive flood insurance policy. Which Risk Response strategy did the company employ?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Mitigate", explanation: "Incorrect. Mitigation involves lowering the likelihood or impact (e.g., building a flood wall)." },
                            { text: "Accept", explanation: "Incorrect. Acceptance means doing nothing and taking the hit." },
                            { text: "Transfer", explanation: "Correct! Insurance transfers the financial burden of the risk to a third party." },
                            { text: "Avoid", explanation: "Incorrect. Avoidance would mean moving the datacenter entirely out of the flood zone." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="During a Business Impact Analysis (BIA), leadership determines that if the order processing system is offline for more than 24 hours, the company will suffer irreparable brand damage and lose its primary client contracts. What metric does the 24 hours represent?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Recovery Time Objective (RTO)", explanation: "Incorrect. RTO is the *target* time to restore operations, which must be less than the fatal limit." },
                            { text: "Maximum Tolerable Downtime (MTD)", explanation: "Correct! MTD is the absolute limit of downtime before the business faces existential ruin." },
                            { text: "Recovery Point Objective (RPO)", explanation: "Incorrect. RPO dictates how much data loss is acceptable, dictating backup frequency." },
                            { text: "Mean Time to Repair (MTTR)", explanation: "Incorrect. MTTR is an operational average of how long it takes to fix hardware." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A company implements a strict new firewall and multi-factor authentication. Despite these new controls, there is still a small chance an advanced threat actor could breach the network. What is the term for this remaining risk?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Residual Risk", explanation: "Correct! Residual risk is the leftover risk after mitigations have been applied." },
                            { text: "Inherent Risk", explanation: "Incorrect. Inherent risk is the raw risk before any controls are applied." },
                            { text: "Risk Appetite", explanation: "Incorrect. Appetite is how much risk management is willing to stomach." },
                            { text: "Quantitative Risk", explanation: "Incorrect. Quantitative risk uses mathematical values." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following elements are explicitly used to calculate the Annualized Loss Expectancy (ALE) during a Quantitative Risk Assessment? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Maximum Tolerable Downtime (MTD)", explanation: "False. MTD is a BIA metric, not a quantitative risk calculation factor." },
                            { text: "Single Loss Expectancy (SLE)", explanation: "True. The cost of a single incident is required." },
                            { text: "Service Level Agreement (SLA)", explanation: "False. This is a vendor contract." },
                            { text: "Annualized Rate of Occurrence (ARO)", explanation: "True. You must multiply the SLE by the number of times it happens per year (ARO)." },
                            { text: "Recovery Point Objective (RPO)", explanation: "False. RPO relates to data backups." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}