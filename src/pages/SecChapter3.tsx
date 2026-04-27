import React, { useState } from 'react';
import { KeyRound, ShieldAlert, Terminal, Lock, Hash, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Cryptographic Solutions Matching
const PBQCryptography = () => {
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
                    <strong>Scenario:</strong> You are the lead security architect. Match the correct cryptographic solution to each specific business requirement.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Req 1:</strong> Rapidly encrypt a massive 2-Terabyte database. Performance and speed are the top priorities.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-72 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Select Solution...</option>
                            <option value="Symmetric">Symmetric Encryption (e.g., AES)</option>
                            <option value="Asymmetric">Asymmetric Encryption (e.g., RSA)</option>
                            <option value="HashingSalt">Hashing + Salting (e.g., SHA-256)</option>
                            <option value="DigitalSig">Digital Signature</option>
                        </select>
                        {getStatus(answers.q1, 'Symmetric')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Req 2:</strong> Securely share a secret decryption key with a remote partner over an untrusted, public internet connection.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-72 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Select Solution...</option>
                            <option value="Symmetric">Symmetric Encryption (e.g., AES)</option>
                            <option value="Asymmetric">Asymmetric Encryption (e.g., RSA)</option>
                            <option value="HashingSalt">Hashing + Salting (e.g., SHA-256)</option>
                            <option value="DigitalSig">Digital Signature</option>
                        </select>
                        {getStatus(answers.q2, 'Asymmetric')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Req 3:</strong> Store user passwords in a database in a way that prevents "rainbow table" or pre-computed dictionary attacks.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-72 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Select Solution...</option>
                            <option value="Symmetric">Symmetric Encryption (e.g., AES)</option>
                            <option value="Asymmetric">Asymmetric Encryption (e.g., RSA)</option>
                            <option value="HashingSalt">Hashing + Salting (e.g., SHA-256)</option>
                            <option value="DigitalSig">Digital Signature</option>
                        </select>
                        {getStatus(answers.q3, 'HashingSalt')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>Req 4:</strong> Provide Non-Repudiation for an email, ensuring the sender cannot deny sending it and the contents were not altered.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-72 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Select Solution...</option>
                            <option value="Symmetric">Symmetric Encryption (e.g., AES)</option>
                            <option value="Asymmetric">Asymmetric Encryption (e.g., RSA)</option>
                            <option value="HashingSalt">Hashing + Salting (e.g., SHA-256)</option>
                            <option value="DigitalSig">Digital Signature</option>
                        </select>
                        {getStatus(answers.q4, 'DigitalSig')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>Symmetric:</strong> Extremely fast, uses a single key, perfect for bulk data (AES).<br />
                        2. <strong>Asymmetric:</strong> Uses public/private key pairs, perfect for securely exchanging keys over public networks (RSA/ECC).<br />
                        3. <strong>Hashing + Salting:</strong> Adding a random "salt" before hashing prevents attackers from using pre-computed hash tables.<br />
                        4. <strong>Digital Signature:</strong> Hashing a message and encrypting the hash with the sender's Private Key proves exactly who sent it (Non-Repudiation).
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter3() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Cryptographic Algorithms"
                description="Cryptography is the foundation of network security. It allows us to scramble data so unauthorized people cannot read it, and it allows us to mathematically prove the identity of devices on the internet."
            >
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Lock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Symmetric</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Uses the <strong>same key</strong> to encrypt and decrypt. It is incredibly fast and used for bulk data (like encrypting a hard drive). Example: <strong>AES-256</strong>.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <KeyRound className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Asymmetric</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Uses a <strong>key pair</strong> (Public Key to encrypt, Private Key to decrypt). It is slow, but solves the problem of sharing keys over the internet. Example: <strong>RSA</strong>.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Hash className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Hashing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">A <strong>one-way</strong> mathematical function that creates a fixed-length signature. It cannot be decrypted. Used for password storage and file integrity. Example: <strong>SHA-256</strong>.</p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="pki"
                title="Public Key Infrastructure (PKI)"
                description="How do you know that the public key you just downloaded actually belongs to your bank, and not to a hacker? Public Key Infrastructure (PKI) is the system of trust that proves identities on the internet."
            >
                <div className="space-y-4 mt-6 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Certificate Authorities (CA):</strong> Organizations (like DigiCert or Let's Encrypt) that verify a company's identity and issue Digital Certificates. If your computer trusts the CA (the Root of Trust), it trusts the certificates they issue.</p>
                    <p><strong className="text-foreground">Certificate Signing Request (CSR):</strong> When a web admin wants a certificate, they generate a key pair. They send their <strong>Public Key</strong> to the CA in a CSR. The <strong>Private Key</strong> is strictly kept secret on their server.</p>
                    <p><strong className="text-foreground">Revocation (CRL & OCSP):</strong> If a web server is hacked and the private key is stolen, the certificate must be revoked. Browsers check the Certificate Revocation List (CRL) or use OCSP to ensure a certificate is still valid.</p>
                </div>
            </SectionBlock>

            <SectionBlock
                id="solutions"
                title="Cryptographic Solutions"
                description="Applying these algorithms in the real world."
            >
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground">Salting and Key Stretching</h3>
                        <p className="text-sm text-muted-foreground">Hackers crack passwords by guessing millions of words, hashing them, and comparing them to stolen databases (Brute Force/Rainbow Tables). <strong>Salting</strong> adds random data to every password before hashing it, breaking pre-computed tables. <strong>Key Stretching</strong> runs the algorithm thousands of times, purposely slowing down the hacker's computer.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-foreground">Digital Signatures</h3>
                        <p className="text-sm text-muted-foreground">To prove you sent a message and that it wasn't tampered with, you hash the message, and then <strong>encrypt the hash with your Private Key</strong>. Anyone can decrypt it with your Public Key to verify it was you (Non-Repudiation).</p>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="SOC Analyst Lab"
                title="Lab: The Root of Trust"
                description="Your computer inherently trusts hundreds of Certificate Authorities by default. We are going to use the command line to view the hidden 'Trust Store' built into your operating system."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Step 1: Revealing the Trusted Roots</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">PowerShell</code>, and press Enter.</li>
                                <li>
                                    2. Type the following command exactly as written and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">dir cert:\LocalMachine\Root</pre>
                                    </div>
                                </li>
                                <li>3. You will see a massive list of digital certificates! Look at the <strong>Subject</strong> column. You will see names like "DigiCert", "GlobalSign", and "Microsoft Root Certificate Authority".</li>
                                <li>4. <strong>The Concept:</strong> Because these Roots are installed here, if a website presents a certificate signed by "DigiCert", your browser instantly shows the green Padlock icon!</li>
                                <li>5. <em>Cleanup:</em> Type <code>exit</code> to close PowerShell.</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQCryptography />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="An administrator is configuring a new e-commerce website and needs to request a digital certificate from a third-party Certificate Authority (CA). Which of the following MUST the administrator include in the Certificate Signing Request (CSR) sent to the CA?"
                        correctIndexes={[1]}
                        options={[
                            { text: "The web server's Private Key.", explanation: "Incorrect. The Private Key must NEVER be shared with anyone, not even the CA." },
                            { text: "The web server's Public Key.", explanation: "Correct! The CSR contains the Public Key and the organizational identity information to be signed." },
                            { text: "The root certificate of the CA.", explanation: "Incorrect. The CA already has its own root certificate." },
                            { text: "A symmetric AES encryption key.", explanation: "Incorrect. CSRs are based on asymmetric public/private key pairs." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A company's web server was compromised, and the server's private key was stolen by an attacker. The administrator quickly generates a new key pair and obtains a new certificate. What must the administrator do to ensure users do not trust the stolen certificate?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Delete the certificate from the web server.", explanation: "Incorrect. Deleting it locally does not stop the attacker from using the stolen copy on a malicious server." },
                            { text: "Change the symmetric encryption algorithm to AES-256.", explanation: "Incorrect. This does not invalidate the compromised asymmetric certificate." },
                            { text: "Notify the Internet Service Provider (ISP).", explanation: "Incorrect. ISPs do not manage certificate validity." },
                            { text: "Revoke the certificate so it is added to the CRL and flagged by OCSP.", explanation: "Correct! Revocation officially informs browsers that the certificate is no longer trustworthy." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="An application developer is designing a login system. To protect against database breaches, the developer hashes all user passwords using SHA-256. However, a security audit reveals the hashes are vulnerable to rainbow table attacks. What should the developer implement to mitigate this specific vulnerability?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Salting", explanation: "Correct! Salting adds a unique, random string to each password before hashing, rendering pre-computed rainbow tables useless." },
                            { text: "Steganography", explanation: "Incorrect. Steganography hides data within other files (like images)." },
                            { text: "RSA Encryption", explanation: "Incorrect. Passwords should be hashed (one-way), not encrypted (reversible)." },
                            { text: "Perfect Forward Secrecy (PFS)", explanation: "Incorrect. PFS ensures compromised keys cannot decrypt past traffic; it is not for database password storage." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="Digital signatures combine multiple cryptographic concepts to achieve their security goals. Which TWO of the following are required to successfully create and verify a digital signature? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 2]}
                        options={[
                            { text: "A hashing algorithm (e.g., SHA-256) to create a message digest.", explanation: "True. The message is hashed first to ensure integrity." },
                            { text: "A symmetric algorithm (e.g., AES) to encrypt the message payload.", explanation: "False. Digital signatures do not require the message itself to be encrypted (though it can be)." },
                            { text: "The sender's asymmetric Private Key to encrypt the hash.", explanation: "True. Encrypting the hash with the private key provides authentication and non-repudiation." },
                            { text: "A Certificate Revocation List (CRL).", explanation: "False. While CRLs check validity, they are not mechanically required to create a signature." },
                            { text: "A random Salt appended to the end of the message.", explanation: "False. Salting is used for password storage, not standard digital signatures." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}