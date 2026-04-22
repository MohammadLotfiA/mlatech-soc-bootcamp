import React, { useState } from 'react';
import { Skull, Target, UserX, ShieldAlert, BookOpen, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Attack Vectors
const PBQThreatVectors = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
    const [submitted, setSubmitted] = useState(false);

    const checkPBQ = () => setSubmitted(true);

    const getStatus = (val: string, expected: string) => {
        if (!submitted) return null;
        return val === expected ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> : <XCircle className="w-5 h-5 text-destructive shrink-0" />;
    };

    return (
        <Card className="border-primary/20 shadow-md">
            <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are analyzing incident tickets in the SOC. Classify the specific <strong>Attack Vector</strong> used by the threat actors in each of the following breaches.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Incident 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Incident A:</strong> Attackers infected a popular industry forum website knowing that employees from their target company visit it daily.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-64 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Vector...</option>
                            <option value="Supply Chain">Supply Chain</option>
                            <option value="Watering Hole">Watering Hole</option>
                            <option value="Typosquatting">Typosquatting</option>
                            <option value="Vishing">Vishing</option>
                        </select>
                        {getStatus(answers.q1, 'Watering Hole')}
                    </div>
                </div>

                {/* Incident 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Incident B:</strong> An attacker compromised a software vendor's update server. When clients downloaded the latest update, they unknowingly installed malware.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-64 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Vector...</option>
                            <option value="Supply Chain">Supply Chain</option>
                            <option value="Watering Hole">Watering Hole</option>
                            <option value="Typosquatting">Typosquatting</option>
                            <option value="Vishing">Vishing</option>
                        </select>
                        {getStatus(answers.q2, 'Supply Chain')}
                    </div>
                </div>

                {/* Incident 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Incident C:</strong> The CFO received an email from <code>billing@rnicrosoft.com</code> instructing them to wire funds immediately to a new vendor.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-64 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Vector...</option>
                            <option value="Supply Chain">Supply Chain</option>
                            <option value="Watering Hole">Watering Hole</option>
                            <option value="Typosquatting">Typosquatting</option>
                            <option value="Vishing">Vishing</option>
                        </select>
                        {getStatus(answers.q3, 'Typosquatting')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        A: Infecting a specific site visited by the target is a <strong>Watering Hole</strong> attack.<br />
                        B: Compromising a vendor to attack their clients is a <strong>Supply Chain</strong> attack.<br />
                        C: Using an "rn" instead of an "m" in the domain name is classic <strong>Typosquatting</strong>.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter2() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Vulnerability, Threat, and Risk"
                description="Before analyzing who is attacking a network, we must understand the core terminology of an incident. A vulnerability is a weakness. A threat is something that can exploit it. Risk is the likelihood of it happening combined with the potential damage."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Skull className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Threat Actors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Nation-State (APT):</strong> Highly funded, highly skilled. Motivation: Cyber espionage, political disruption.</li>
                                <li><strong>Organized Crime:</strong> Well-resourced. Motivation: Financial profit (e.g., Ransomware).</li>
                                <li><strong>Hacktivists:</strong> Hacker groups. Motivation: Political or social messaging.</li>
                                <li><strong>Insider Threat:</strong> Employees or contractors. Can be malicious (sabotage) or unintentional (clicking a bad link).</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Target className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">Attack Surfaces & Vectors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-2">
                                The <strong>Attack Surface</strong> is every point where a system is exposed (Physical ports, Open TCP ports, Employee emails).
                            </p>
                            <p className="text-sm text-foreground">
                                The <strong>Attack Vector</strong> is the path the hacker takes. This could be a Lure (a dropped USB drive), a Message (Phishing email), or a Supply Chain compromise (infecting a vendor's software).
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="social-eng"
                title="Hacking the Human: Social Engineering"
                description="Why spend weeks trying to crack a firewall when you can just ask an employee for their password? Social engineering uses psychological manipulation to bypass technical controls."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><UserX className="w-4 h-4 text-primary" /> Phishing Variants</h3>
                        <p className="text-sm text-muted-foreground"><strong>Phishing:</strong> Email-based deception.<br /><strong>Vishing:</strong> Voice-based (phone calls).<br /><strong>SMiShing:</strong> SMS/Text message based.<br /><strong>Spear Phishing:</strong> Highly targeted at a specific person or role.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><UserX className="w-4 h-4 text-primary" /> BEC & Impersonation</h3>
                        <p className="text-sm text-muted-foreground"><strong>Business Email Compromise (BEC):</strong> Posing as a CEO or vendor to authorize fraudulent wire transfers. Often relies heavily on spoofing or stealing executives' email accounts.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><UserX className="w-4 h-4 text-primary" /> DNS & Domains</h3>
                        <p className="text-sm text-muted-foreground"><strong>Pharming:</strong> Redirection via DNS poisoning.<br /><strong>Typosquatting:</strong> Registering domains that look like real ones to trick the human eye (e.g., amaz0n.com).</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: The Typosquatting Investigation"
                description="As a SOC Analyst, you will constantly review suspicious emails reported by users. The most critical skill is visually deconstructing the 'From' address and URLs to spot Typosquatting."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Analytical Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-secondary/30 border border-border p-4 rounded-xl font-mono text-sm">
                            <p><strong>From:</strong> IT Support &lt;admin@paypa1.com&gt;</p>
                            <p><strong>To:</strong> employee@yourcompany.com</p>
                            <p><strong>Subject:</strong> URGENT: Verify Your Account</p>
                            <br />
                            <p>Your account has been locked due to suspicious activity. Please click the link below to verify your identity:</p>
                            <p className="text-blue-500 underline cursor-not-allowed">http://www.secure-login.paypaI.com-update.net/login</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-emerald-500" /> Analyst Breakdown</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. <strong>The Sender:</strong> Look closely at the "From" domain: <code>paypa1.com</code>. The attacker used a number '1' instead of the letter 'l'. This is Typosquatting.</li>
                                <li>2. <strong>The Link:</strong> Look at the URL. A domain is read from right to left before the first single slash. The actual domain the user is being sent to is <code>com-update.net</code>, NOT paypal! The attacker just created a subdomain named 'secure-login.paypal' to trick the user's eye.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQThreatVectors />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company's unpatched web server represents a weakness in their perimeter. A known hacker group actively scanning the internet for this specific unpatched server represents a potential attack. The combination of the weakness and the likelihood of the attack succeeding is known as:"
                        correctIndexes={[3]}
                        options={[
                            { text: "An Exploit", explanation: "Incorrect. An exploit is the tool used to take advantage of the weakness." },
                            { text: "A Vulnerability", explanation: "Incorrect. The unpatched server is the vulnerability." },
                            { text: "A Threat Vector", explanation: "Incorrect. The vector is the path (the internet scan)." },
                            { text: "Risk", explanation: "Correct! Risk is the intersection of a Vulnerability and a Threat." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A disgruntled database administrator is passed over for a promotion. Before resigning, they use their legitimate administrative credentials to delete three massive tables of customer data. Which threat actor classification best describes this scenario?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Advanced Persistent Threat (APT)", explanation: "Incorrect. APTs are highly skilled, patient, and usually state-sponsored." },
                            { text: "Malicious Insider Threat", explanation: "Correct! The actor already possessed authorized access and used it maliciously." },
                            { text: "Unintentional Insider Threat", explanation: "Incorrect. The deletion was deliberate, not accidental." },
                            { text: "Hacktivist", explanation: "Incorrect. Hacktivism is motivated by political or social messaging, not personal workplace grievances." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="An attacker calls a corporate help desk, claims to be the CEO who is traveling abroad, and angrily demands that their password be reset immediately. The help desk technician complies out of fear. What specific type of social engineering was utilized?"
                        correctIndexes={[2]}
                        options={[
                            { text: "SMiShing", explanation: "Incorrect. SMiShing utilizes SMS text messages." },
                            { text: "Pharming", explanation: "Incorrect. Pharming involves malicious DNS redirection." },
                            { text: "Vishing with Pretexting", explanation: "Correct! The attacker used a Voice channel (Vishing) and adopted a false identity/scenario (Pretexting)." },
                            { text: "Watering Hole Attack", explanation: "Incorrect. Watering holes involve infecting targeted websites." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following attributes are MOST commonly associated with Nation-State threat actors (APTs)? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Motivation is primarily quick financial extortion.", explanation: "False. This is typical of Organized Crime (Ransomware groups)." },
                            { text: "Possesses extremely high levels of funding and capabilities.", explanation: "True. They are backed by national intelligence/military budgets." },
                            { text: "Relies entirely on open-source 'script kiddie' tools.", explanation: "False. They develop novel, zero-day threat vectors." },
                            { text: "Motivation centers on cyber espionage, intellectual property theft, or political disruption.", explanation: "True. Their goals align with national interests." },
                            { text: "Typically attacks targets randomly with little reconnaissance.", explanation: "False. They are highly targeted and patient." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}