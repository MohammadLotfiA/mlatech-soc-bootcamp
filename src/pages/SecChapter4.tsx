import React, { useState } from 'react';
import { Fingerprint, KeySquare, ShieldAlert, Terminal, Lock, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Access Control Models
const PBQAccessControl = () => {
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
                    <strong>Scenario:</strong> As a security architect, you must evaluate different environments and apply the correct <strong>Access Control Model</strong> to each. Match the scenario to the model.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> A military network where files are assigned "Top Secret" labels. Users can only read the files if their account has been granted a matching or higher clearance.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Model...</option>
                            <option value="DAC">DAC</option>
                            <option value="MAC">MAC</option>
                            <option value="RBAC">RBAC</option>
                            <option value="ABAC">ABAC</option>
                        </select>
                        {getStatus(answers.q1, 'MAC')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> A file server where the employee who created the document has the ultimate authority to manually share it with specific colleagues.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Model...</option>
                            <option value="DAC">DAC</option>
                            <option value="MAC">MAC</option>
                            <option value="RBAC">RBAC</option>
                            <option value="ABAC">ABAC</option>
                        </select>
                        {getStatus(answers.q2, 'DAC')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> An HR database where users are placed into a specific security group. Only members of that group inherit the permissions to view employee records.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Model...</option>
                            <option value="DAC">DAC</option>
                            <option value="MAC">MAC</option>
                            <option value="RBAC">RBAC</option>
                            <option value="ABAC">ABAC</option>
                        </select>
                        {getStatus(answers.q3, 'RBAC')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> A cloud application that grants access ONLY if the user is in the "Finance" group, AND is connecting from a US-based IP address, AND the time is between 9 AM - 5 PM.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Model...</option>
                            <option value="DAC">DAC</option>
                            <option value="MAC">MAC</option>
                            <option value="RBAC">RBAC</option>
                            <option value="ABAC">ABAC</option>
                        </select>
                        {getStatus(answers.q4, 'ABAC')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>MAC (Mandatory Access Control):</strong> Driven by strict system labels and clearances. Users cannot override it.<br />
                        2. <strong>DAC (Discretionary Access Control):</strong> Driven by resource ownership. The creator has the discretion to share it.<br />
                        3. <strong>RBAC (Role-Based Access Control):</strong> Driven by job function and group membership.<br />
                        4. <strong>ABAC (Attribute-Based Access Control):</strong> Driven by a complex combination of attributes (Time, Location, Device health, User role).
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter4() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Authentication Factors"
                description="Identity and Access Management (IAM) begins with proving who you are. Modern security requires moving beyond single passwords and implementing Multifactor Authentication (MFA)."
            >
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <KeySquare className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Knowledge (You Know)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Passwords, PIN numbers, or answers to security questions. This is the weakest factor because it can be stolen or guessed.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Lock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Ownership (You Have)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Smart cards, Security Keys (FIDO U2F), or mobile phones receiving One-Time Passwords (OTP) via SMS or Authenticator Apps.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Fingerprint className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Inherence (You Are)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Biometrics like fingerprint scanners, facial recognition, or retina scans. <br /><br /><em>Exam Tip:</em> A False Rejection Rate (FRR) blocks a valid user. A False Acceptance Rate (FAR) accidentally lets a hacker in!</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-foreground font-semibold flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-destructive" /> Note on True MFA
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Entering a Password and a PIN is NOT multifactor authentication—it is two of the same factor (Knowledge). True MFA requires mixing categories (e.g., Password + Phone App).
                    </p>
                </div>
            </SectionBlock>

            <SectionBlock
                id="identity"
                title="Identity Management & Federation"
                description="Once a user is authenticated, how does that authentication translate across multiple servers or websites? We use SSO and Federation."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Directory & Internal SSO</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">LDAP (Lightweight Directory Access Protocol):</strong> The protocol used to query and update directory services (like Microsoft Active Directory).</li>
                            <li><strong className="text-foreground">Kerberos:</strong> The primary internal SSO protocol. Uses a Key Distribution Center (KDC) to issue "Tickets" so users don't have to type their password for every internal server they access.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Federated Identity</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">SAML (Security Assertion Markup Language):</strong> An XML-based standard used for Enterprise web-based SSO. (e.g., Logging into Salesforce using your corporate Microsoft account).</li>
                            <li><strong className="text-foreground">OAuth / OIDC:</strong> A JSON/REST-based framework. Designed more for consumer apps and <em>Authorization</em>. (e.g., A website asking "Log in with Google").</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Auditing Account Policies"
                description="One of the primary goals of Access Management is ensuring strict password policies to prevent Brute Force attacks. Let's use the CLI to audit the local IAM policies on your machine."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Step 1: Checking Password Rules</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">cmd</code>, and press Enter.</li>
                                <li>
                                    2. We want to see the system-wide account rules. Type this and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">net accounts</pre>
                                    </div>
                                </li>
                                <li>3. Look at the output. You will see critical IAM configurations like <strong>Minimum password length</strong>, <strong>Maximum password age</strong> (forcing rotation), and the <strong>Lockout threshold</strong>.</li>
                                <li>4. <em>Analysis:</em> If the Lockout threshold is set to "Never", your machine is highly vulnerable to brute-force password guessing!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">Step 2: Checking Specific Users</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. To see all the users on your machine, type:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">net user</pre>
                                    </div>
                                </li>
                                <li>
                                    2. To audit a specific user's privileges, type `net user` followed by your exact username. (e.g., <code>net user Administrator</code>).
                                </li>
                                <li>3. This reveals exactly which <strong>Local Group Memberships</strong> (RBAC) the user belongs to, proving what level of access they hold!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQAccessControl />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A corporate security team is tuning their new biometric facial recognition system. Employees are complaining that they have to scan their face three or four times before the system finally recognizes them and unlocks the door. Which biometric metric is currently too high?"
                        correctIndexes={[0]}
                        options={[
                            { text: "False Rejection Rate (FRR / Type I Error)", explanation: "Correct! The system is falsely rejecting authorized, legitimate users." },
                            { text: "False Acceptance Rate (FAR / Type II Error)", explanation: "Incorrect. If FAR was too high, unauthorized people would be getting in." },
                            { text: "Crossover Error Rate (CER)", explanation: "Incorrect. CER is the point where FRR and FAR intersect, used to evaluate overall system accuracy." },
                            { text: "Single Sign-On (SSO)", explanation: "Incorrect. This is an authentication concept, not a biometric metric." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A software developer is tasked with implementing a Federated Identity solution so users can log into their SaaS application using their corporate Microsoft Azure AD credentials. The integration requires an XML-based framework to exchange authentication assertions. Which standard should the developer use?"
                        correctIndexes={[1]}
                        options={[
                            { text: "OAuth", explanation: "Incorrect. OAuth uses JSON and RESTful APIs, not XML." },
                            { text: "SAML (Security Assertion Markup Language)", explanation: "Correct! SAML is the premier XML-based standard for Enterprise SSO Federation." },
                            { text: "Kerberos", explanation: "Incorrect. Kerberos is used for internal network SSO, not external web-based Federation." },
                            { text: "LDAP", explanation: "Incorrect. LDAP is used to query directories, not exchange federated web claims." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="To adhere to the principle of least privilege, a company implements a Privileged Access Management (PAM) solution. IT administrators are no longer given 'standing' domain admin accounts. Instead, they must check out an admin account from a vault, and the password is automatically changed by the system every 4 hours. What concept does this describe?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Attribute-Based Access Control (ABAC)", explanation: "Incorrect. While ABAC is powerful, the scenario specifically describes vaulting and temporary access." },
                            { text: "Discretionary Access Control (DAC)", explanation: "Incorrect. DAC relies on resource ownership, not vaulting." },
                            { text: "Ephemeral Credentials / Zero Standing Privileges", explanation: "Correct! The credentials are short-lived (ephemeral) and no one has permanent (standing) admin rights." },
                            { text: "Passwordless Authentication", explanation: "Incorrect. Passwords are still being used, they are just being managed by a vault." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="A company wants to upgrade their authentication systems to require TRUE Multifactor Authentication (MFA). Which of the following combinations successfully satisfy the requirements of MFA? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "A complex Password and a fingerprint scan.", explanation: "True. This combines 'Something you Know' with 'Something you Are'." },
                            { text: "A complex Password and a 6-digit PIN.", explanation: "False. These are both 'Something you Know' (Knowledge factors)." },
                            { text: "A physical Smart Card and an SMS Text message.", explanation: "False. These are both 'Something you Have' (Ownership factors)." },
                            { text: "A physical USB Security Key (FIDO) and a PIN.", explanation: "True. This combines 'Something you Have' with 'Something you Know'." },
                            { text: "A fingerprint scan and a retinal scan.", explanation: "False. These are both 'Something you Are' (Inherence factors)." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}