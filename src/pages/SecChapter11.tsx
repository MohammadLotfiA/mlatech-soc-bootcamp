import React, { useState } from 'react';
import { Mail, GlobeLock, ShieldAlert, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Secure Protocols
const PBQSecureProtocols = () => {
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
                    <GlobeLock className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> An external auditor has flagged several legacy, unencrypted protocols running on your network. Select the appropriate <strong>Secure Alternative</strong> to replace them.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1. Telnet (Port 23):</strong> Currently used by administrators for remote command-line access to Linux servers.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Replacement...</option>
                            <option value="SSH">SSH (Port 22)</option>
                            <option value="LDAPS">LDAPS (Port 636)</option>
                            <option value="SNMPv3">SNMPv3 (Port 161)</option>
                            <option value="SFTP">SFTP (Port 22)</option>
                        </select>
                        {getStatus(answers.q1, 'SSH')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2. FTP (Port 21):</strong> Currently used to transfer large database backups between two datacenter nodes.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Replacement...</option>
                            <option value="SSH">SSH (Port 22)</option>
                            <option value="LDAPS">LDAPS (Port 636)</option>
                            <option value="SNMPv3">SNMPv3 (Port 161)</option>
                            <option value="SFTP">SFTP (Port 22)</option>
                        </select>
                        {getStatus(answers.q2, 'SFTP')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3. LDAP (Port 389):</strong> Currently used to query the Active Directory database for user account permissions.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Replacement...</option>
                            <option value="SSH">SSH (Port 22)</option>
                            <option value="LDAPS">LDAPS (Port 636)</option>
                            <option value="SNMPv3">SNMPv3 (Port 161)</option>
                            <option value="SFTP">SFTP (Port 22)</option>
                        </select>
                        {getStatus(answers.q3, 'LDAPS')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4. SNMPv1/v2 (Port 161):</strong> Currently used by monitoring dashboards to pull health metrics from network switches using the community string "public".
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Replacement...</option>
                            <option value="SSH">SSH (Port 22)</option>
                            <option value="LDAPS">LDAPS (Port 636)</option>
                            <option value="SNMPv3">SNMPv3 (Port 161)</option>
                            <option value="SFTP">SFTP (Port 22)</option>
                        </select>
                        {getStatus(answers.q4, 'SNMPv3')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>SSH:</strong> Replaces Telnet. Encrypts the remote terminal session.<br />
                        2. <strong>SFTP / FTPS:</strong> Replaces FTP. SFTP tunnels file transfers over SSH.<br />
                        3. <strong>LDAPS:</strong> Replaces LDAP. Encrypts directory queries using TLS.<br />
                        4. <strong>SNMPv3:</strong> Replaces v1/v2c. Adds strong encryption and authentication instead of plaintext community strings.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter11() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Application Protocol Security Baselines"
                description="Many core internet protocols (HTTP, FTP, Telnet) were designed decades ago when functionality mattered more than security. Because they transmit data in cleartext, they must be aggressively replaced with their secure (encrypted) counterparts."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <GlobeLock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">TLS (Transport Layer Security)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">TLS is the modern replacement for SSL. It secures HTTP (turning it into HTTPS) and secures VPNs.</p>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Versions:</strong> You must <em>disable</em> SSL and TLS 1.0/1.1. Only use <strong>TLS 1.2 or 1.3</strong>.</li>
                                <li><strong>Downgrade Attacks:</strong> If you leave old versions enabled for "legacy compatibility," hackers will force the connection to downgrade to the weak version so they can crack it.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">DNSSEC (DNS Security Extensions)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3">Traditional DNS is easily spoofed (DNS Poisoning), redirecting users to fake websites.</p>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>DNSSEC</strong> solves this by using digital signatures. When a client requests an IP address, the DNS server attaches a cryptographic signature to the response, guaranteeing the IP address is authentic and hasn't been tampered with.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="email"
                kicker="Interactive Concept"
                title="Email Security (Spoofing & Phishing Defense)"
                description="SMTP (Simple Mail Transfer Protocol) was designed with zero authentication. Anyone can write a script to send an email claiming to be 'CEO@yourcompany.com'. To stop this, we use three DNS-based security records."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> SPF</h3>
                        <p className="text-sm text-muted-foreground"><strong>Sender Policy Framework:</strong> A list published in your public DNS showing exactly which IP addresses are authorized to send email on behalf of your domain.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> DKIM</h3>
                        <p className="text-sm text-muted-foreground"><strong>DomainKeys Identified Mail:</strong> Adds a cryptographic digital signature to every outgoing email header, proving the email actually originated from your domain.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> DMARC</h3>
                        <p className="text-sm text-muted-foreground"><strong>The Enforcer:</strong> Instructs receiving servers what to do if SPF or DKIM fails. (e.g., "If it fails SPF, reject the email and drop it").</p>
                    </div>
                </div>

                {/* Interactive DMARC Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="coding"
                title="Secure Coding Techniques"
                description="Network firewalls cannot protect against poorly written code. If a web application blindly trusts user input, it invites Injection attacks."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Input Validation</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">The Rule:</strong> Never trust user input. If a form asks for an Age, validate that the input is actually a number between 1 and 120, not a SQL command!</li>
                            <li><strong className="text-foreground">Server-Side vs. Client-Side:</strong> Client-side validation (in the browser via JavaScript) is for <em>user experience</em> (e.g., highlighting a missing @ symbol in an email). It is NOT security, because hackers bypass the browser entirely. <strong>All security checks MUST occur Server-Side.</strong></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Error Handling & Sandboxing</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong className="text-foreground">Error Handling:</strong> When an app crashes, it should log the details internally, but display a generic, vague error to the user. Detailed stack-traces shown on screen give hackers blueprints to the backend.</li>
                            <li><strong className="text-foreground">Sandboxing:</strong> Executing untrusted code or potentially malicious attachments in a completely isolated, virtual environment to observe their behavior safely ("Safe Detonation").</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Auditing Public DNS Security Records"
                description="Because SPF, DKIM, and DMARC are public DNS TXT records, anyone can query them. SOC Analysts frequently use the CLI to audit domains that are sending suspicious emails."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Step 1: The NSLookup Command</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">cmd</code>, and press Enter.</li>
                                <li>
                                    2. Let's ask the internet for Microsoft's TXT records. Type this exactly:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">nslookup -type=txt microsoft.com</pre>
                                    </div>
                                </li>
                                <li>3. Look at the output lines that start with <code>v=spf1</code>. You are looking at the exact IP addresses that are legally allowed to send emails ending in @microsoft.com!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2">Step 2: Checking DMARC Enforcement</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. DMARC records are always stored at a specific subdomain starting with `_dmarc`. Type this:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">nslookup -type=txt _dmarc.microsoft.com</pre>
                                    </div>
                                </li>
                                <li>2. Look at the output for <code>v=DMARC1</code>. Look for the <code>p=</code> policy flag. If it says <code>p=reject</code>, it means they are actively instructing the world to drop spoofed emails. If it says <code>p=none</code>, they are only monitoring!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQSecureProtocols />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A company's external vulnerability scan reveals that their web server is offering support for TLS 1.0, TLS 1.1, TLS 1.2, and TLS 1.3. Why is leaving TLS 1.0 and 1.1 enabled considered a critical security vulnerability?"
                        correctIndexes={[2]}
                        options={[
                            { text: "It prevents modern browsers from connecting to the server.", explanation: "Incorrect. Modern browsers will just negotiate the highest available protocol (TLS 1.3)." },
                            { text: "It causes the server to consume too much CPU power generating keys.", explanation: "Incorrect. Old protocols use less compute power, not more." },
                            { text: "It exposes the server to Downgrade Attacks, where an attacker intercepts the handshake and forces the connection to use the weak, easily crackable TLS 1.0 protocol.", explanation: "Correct! Attackers exploit backwards-compatibility to strip away modern encryption." },
                            { text: "It automatically disables DNSSEC on the server.", explanation: "Incorrect. DNSSEC is unrelated to web server TLS configurations." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A software developer implements a JavaScript function on a user registration page to ensure that passwords contain at least 8 characters and a special symbol. The function runs directly in the user's browser. What is the primary security flaw with this implementation?"
                        correctIndexes={[1]}
                        options={[
                            { text: "JavaScript cannot perform input validation.", explanation: "Incorrect. JavaScript is heavily used for client-side validation." },
                            { text: "Client-side validation can be easily bypassed by an attacker using a proxy tool or by simply turning off JavaScript in their browser.", explanation: "Correct! Validation must ALWAYS be enforced on the Server-Side to be considered a security control." },
                            { text: "The validation does not require a CAPTCHA.", explanation: "Incorrect. While useful against bots, it is not the primary flaw here." },
                            { text: "It causes a Buffer Overflow in the browser.", explanation: "Incorrect. Length checks prevent overflows, they don't cause them." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A company receives numerous reports that customers are receiving phishing emails appearing to come from 'support@thecompany.com'. The IT team confirms their email servers were not hacked. Which DNS record must the IT team configure to instruct receiving servers to actively reject these unauthorized, spoofed emails?"
                        correctIndexes={[3]}
                        options={[
                            { text: "DNSSEC", explanation: "Incorrect. DNSSEC protects DNS queries from poisoning, it does not stop email spoofing." },
                            { text: "MX Record", explanation: "Incorrect. MX (Mail Exchange) records just tell the internet where to deliver incoming mail." },
                            { text: "A Record", explanation: "Incorrect. An 'A' record translates a hostname to an IPv4 address." },
                            { text: "DMARC", explanation: "Correct! DMARC acts as the policy enforcer, utilizing SPF and DKIM to tell receivers to reject spoofed messages." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="When a web application encounters a critical runtime error, what are the recommended Secure Coding practices for Error Handling? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Display a detailed stack-trace with database table names to the user so they can report the exact issue to support.", explanation: "False. Revealing backend architecture to the user is a massive security risk." },
                            { text: "Display a generic, vague error message to the user (e.g., 'An unexpected error occurred. Please try again later.').", explanation: "True. Generic messages do not give hackers useful information." },
                            { text: "Automatically restart the server without logging the error to save disk space.", explanation: "False. Errors must always be logged for investigation." },
                            { text: "Log the detailed error internally in a secure, centralized log management system for the development team to review.", explanation: "True. Detailed information should be kept private and secure." },
                            { text: "Bypass the application sandbox to allow the process to recover.", explanation: "False. Security sandboxes should never be bypassed during an error state." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}