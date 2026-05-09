import React, { useState } from 'react';
import { Bug, Network, FileCode, ShieldAlert, Terminal, CheckCircle2, XCircle, Activity } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Attack Classification
const PBQAttackClassification = () => {
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
                    <strong>Scenario:</strong> As an Incident Responder, you are reviewing post-incident reports. You must classify the specific attack type or technique based on the forensic indicators provided.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> The attacker compromised a machine but left no executable files on the hard drive. They maintained persistence entirely within RAM using built-in PowerShell scripts.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Attack Type...</option>
                            <option value="Fileless">Fileless Malware</option>
                            <option value="ARP">ARP Poisoning</option>
                            <option value="PassTheHash">Pass the Hash</option>
                            <option value="SSRF">SSRF</option>
                        </select>
                        {getStatus(answers.q1, 'Fileless')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> The attacker intercepted traffic between the CEO and the default gateway by broadcasting unsolicited MAC address replies to the local network switch.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Attack Type...</option>
                            <option value="Fileless">Fileless Malware</option>
                            <option value="ARP">ARP Poisoning</option>
                            <option value="PassTheHash">Pass the Hash</option>
                            <option value="SSRF">SSRF</option>
                        </select>
                        {getStatus(answers.q2, 'ARP')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> The attacker dumped the memory of a compromised workstation, extracted a scrambled string of NTLM credentials, and injected it directly into an authentication session without cracking it.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Attack Type...</option>
                            <option value="Fileless">Fileless Malware</option>
                            <option value="ARP">ARP Poisoning</option>
                            <option value="PassTheHash">Pass the Hash</option>
                            <option value="SSRF">SSRF</option>
                        </select>
                        {getStatus(answers.q3, 'PassTheHash')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> The attacker sent a malicious URL parameter to the public-facing web server, forcing the server to retrieve internal AWS metadata files that the attacker couldn't reach directly.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Attack Type...</option>
                            <option value="Fileless">Fileless Malware</option>
                            <option value="ARP">ARP Poisoning</option>
                            <option value="PassTheHash">Pass the Hash</option>
                            <option value="SSRF">SSRF</option>
                        </select>
                        {getStatus(answers.q4, 'SSRF')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Fileless Malware:</strong> "Living off the land" by exclusively using RAM and built-in OS tools to evade traditional disk-based antivirus.<br />
                        2. <strong>ARP Poisoning:</strong> A classic "On-Path" (Man-in-the-Middle) attack corrupting the local layer-2 ARP cache.<br />
                        3. <strong>Pass the Hash:</strong> Exploiting the NTLM protocol by replaying the hash itself as proof of identity, bypassing the need to crack the plaintext password.<br />
                        4. <strong>SSRF (Server-Side Request Forgery):</strong> Tricking a trusted server into executing an unauthorized request on behalf of the attacker.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter13() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Malware Attack Indicators"
                description="The final step in security operations is recognizing the fingerprints of a breach. Malware is traditionally classified by how it spreads (its vector) and what it does (its payload)."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Bug className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Malware Classification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li><strong>Worms:</strong> Spread automatically across the network without user interaction.</li>
                                <li><strong>Trojans:</strong> Malicious code disguised as legitimate software (e.g., a fake game download).</li>
                                <li><strong>Fileless Malware:</strong> Never writes to the hard drive. Lives entirely in RAM and uses legitimate built-in tools (like PowerShell) to do its dirty work ("Living off the Land"). Extremely hard to detect.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <Activity className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">TTPs & IoCs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground mb-3">When a system is infected, analysts look for specific clues:</p>
                            <ul className="space-y-2 text-sm text-foreground list-disc pl-4">
                                <li><strong>IoCs (Indicators of Compromise):</strong> Specific IP addresses, file hashes, or domain names known to belong to attackers.</li>
                                <li><strong>TTPs (Tactics, Techniques, and Procedures):</strong> The behavioral methodology of the attacker, heavily mapped in the <strong>MITRE ATT&CK</strong> framework.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="network"
                title="Network & Credential Attacks"
                description="Once an attacker has a foothold, they attempt to pivot across the network, escalate privileges, and steal credentials."
            >
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Network className="w-4 h-4 text-primary" /> DDoS Amplification</h3>
                        <p className="text-sm text-muted-foreground">Attackers send tiny requests to public servers (like DNS or NTP) with a spoofed source IP matching their victim. The servers reply to the victim with massive responses, amplifying the attacker's bandwidth and crashing the target.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-primary" /> On-Path (MitM)</h3>
                        <p className="text-sm text-muted-foreground"><strong>ARP Poisoning:</strong> An attacker on the local LAN sends forged ARP messages. This tricks local computers into sending their traffic to the attacker's MAC address instead of the real default gateway.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground flex items-center gap-2"><Bug className="w-4 h-4 text-primary" /> Credential Replay</h3>
                        <p className="text-sm text-muted-foreground"><strong>Pass the Hash (PtH):</strong> Replaying an extracted NTLM hash to log into Windows without needing the plaintext password.<br /><strong>Pass the Ticket (PtT):</strong> Replaying an extracted Kerberos ticket.</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="app"
                kicker="Interactive Concept"
                title="Application Attack Indicators"
                description="Web applications are highly targeted because they inherently accept untrusted data from the public internet. Let's look at how attackers exploit the lack of input validation."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>CSRF vs SSRF:</strong> A <strong>Client-Side Request Forgery (CSRF)</strong> tricks a <em>user's browser</em> into performing an unwanted action (like transferring money) while they are logged in. A <strong>Server-Side Request Forgery (SSRF)</strong> tricks the <em>backend server</em> into fetching internal data that the attacker couldn't reach directly.
                    </p>
                </div>

                {/* Note: In your actual deployed application, the Interactive Web App Attack Simulator will render here */}
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: Analyzing Obfuscated URLs"
                description="Attackers rarely send clean, obvious payloads. They use 'Percent Encoding' (URL Encoding) to bypass Web Application Firewalls (WAFs) and IDS signatures."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Log Review Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-secondary/30 border border-border p-4 rounded-xl font-mono text-sm break-all">
                            <p className="text-destructive font-semibold mb-2">Raw IDS Log Entry:</p>
                            <p>GET /api/v1/download?file=%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd HTTP/1.1</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><FileCode className="w-4 h-4 text-emerald-500" /> Analyst Breakdown</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. <strong>The Concept:</strong> In URL encoding, the <code>%</code> symbol is followed by two hexadecimal digits representing a character.</li>
                                <li>2. <strong>The Translation:</strong> You must memorize two critical translations for SOC analysis:
                                    <ul className="list-disc pl-6 mt-1 mb-1">
                                        <li><code>%2e</code> represents a period ( <strong>.</strong> )</li>
                                        <li><code>%2f</code> represents a forward slash ( <strong>/</strong> )</li>
                                    </ul>
                                </li>
                                <li>3. <strong>The De-obfuscation:</strong> If we replace the encoded characters, the malicious string <code>%2e%2e%2f</code> translates perfectly to <code>../../</code></li>
                                <li>4. <strong>The Conclusion:</strong> The attacker was attempting a <strong>Directory Traversal</strong> attack to navigate upwards out of the web directory and steal the Linux password file!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQAttackClassification />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="Which of the following BEST describes the mechanics of a Distributed Denial of Service (DDoS) Amplification attack?"
                        correctIndexes={[1]}
                        options={[
                            { text: "The attacker installs malware on the victim's computer that consumes 100% of the CPU.", explanation: "Incorrect. That is a resource exhaustion/crypto-jacking attack, not amplification." },
                            { text: "The attacker sends small, spoofed requests to vulnerable third-party servers (like DNS), which then send massive, disproportionately large responses to the target victim.", explanation: "Correct! A small initial request 'amplifies' into a massive payload directed at the spoofed victim IP." },
                            { text: "The attacker guesses passwords at a high rate of speed.", explanation: "Incorrect. This is a brute-force attack." },
                            { text: "The attacker steals a Kerberos ticket and replays it over the network.", explanation: "Incorrect. This is a Pass the Ticket attack." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="An attacker tricks an authenticated user into clicking a hidden link on a malicious website. This link forces the user's browser to send a money transfer request to the user's bank. Because the user is already logged in, the bank processes the request. What type of attack is this?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Cross-Site Request Forgery (CSRF)", explanation: "Correct! CSRF explicitly targets the client's browser, forging a request utilizing their established, trusted session." },
                            { text: "Server-Side Request Forgery (SSRF)", explanation: "Incorrect. SSRF targets the server itself, making it fetch internal resources." },
                            { text: "SQL Injection (SQLi)", explanation: "Incorrect. No database queries were manipulated." },
                            { text: "Directory Traversal", explanation: "Incorrect. No files were accessed." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="A SOC analyst is reviewing web server logs and sees the following query string repeatedly: `http://store.com/item?id=5; DROP TABLE users;--`. What vulnerability is the attacker attempting to exploit?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Cross-Site Scripting (XSS)", explanation: "Incorrect. XSS uses HTML/JavaScript tags like <script>." },
                            { text: "XML External Entity (XXE)", explanation: "Incorrect. XXE manipulates XML parsing." },
                            { text: "Pass the Hash", explanation: "Incorrect. This is a credential replay attack." },
                            { text: "SQL Injection (SQLi)", explanation: "Correct! The attacker is appending raw SQL commands (DROP TABLE) to the URL parameter in hopes the backend database will execute it." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Which of the following characteristics are strongly associated with Fileless Malware? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 2]}
                        options={[
                            { text: "It resides in volatile memory (RAM) and avoids writing executable files to the hard drive.", explanation: "True. This makes it invisible to traditional, disk-scanning antivirus." },
                            { text: "It relies on tricking the user's browser into executing a forged money transfer.", explanation: "False. This describes a CSRF attack." },
                            { text: "It utilizes built-in, legitimate operating system tools like PowerShell or WMI to execute its payload.", explanation: "True. This is known as 'Living off the Land'." },
                            { text: "It is easily detected by standard signature-based firewall rules.", explanation: "False. Fileless malware is incredibly difficult to detect." },
                            { text: "It physically destroys the hard drive platters.", explanation: "False. Fileless malware does not cause physical hardware damage." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}