import React from 'react';
import { Lock, Unlock, ShieldAlert, MousePointer2, FileBadge } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter10() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="HTTP vs. HTTPS (Encryption)"
                description="When data travels across the internet, it passes through dozens of routers owned by strangers. If you send data using standard HTTP, it is sent in 'plaintext'—meaning anyone watching the wire can read it. HTTPS adds a layer of encryption to scramble the data."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Unlock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Man in the Middle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                If you log into a website using <strong>HTTP (Port 80)</strong>, your password travels across the internet as readable text. If a hacker intercepts the traffic, they simply read it. <strong>HTTPS (Port 443)</strong> scrambles the traffic into mathematical gibberish using SSL/TLS Certificates.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Encryption is a double-edged sword. It protects user passwords, but it also <strong>protects malware</strong>. If an employee downloads a virus over HTTPS, the corporate firewall cannot see the virus because it is encrypted! Corporate SOCs often have to use special "SSL Decryption" tools just to inspect their own network traffic.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Inspecting the Certificate"
                description="We are going to use the web browser to inspect the digital certificate that makes HTTPS encryption possible."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Lock className="w-4 h-4 text-muted-foreground" /> Step 1: Finding the Lock</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open a new tab in your web browser.</li>
                                <li>2. Go to a secure website like <strong>wikipedia.org</strong>.</li>
                                <li>3. Look at the very top of the browser, right next to the URL address.</li>
                                <li>4. You will see a small <strong>Padlock</strong> icon (or a toggle icon in newer browsers). Click it!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><FileBadge className="w-4 h-4 text-emerald-500" /> Step 2: The Digital ID</h4>
                            <p className="text-sm text-muted-foreground mb-2">A certificate is a digital ID card proving the website is who it claims to be.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. In the menu that dropped down, click <strong>Connection is secure</strong>.</li>
                                <li>2. Click the icon that says <strong>Certificate is valid</strong> (or a similar certificate icon).</li>
                                <li>3. A new window will open revealing the raw Certificate data.</li>
                                <li>4. Look for the <strong>Issued By</strong> field. This tells you the name of the security company that verified the website.</li>
                                <li>5. Look for the <strong>Valid From/To</strong> dates. Certificates expire and must be renewed, just like a driver's license!</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary difference between HTTP and HTTPS?"
                        correctIndexes={[1]}
                        options={[
                            { text: "HTTP is faster, HTTPS is slower but uses less data.", explanation: "Incorrect. The main difference is security, not speed." },
                            { text: "HTTP sends data in readable plaintext, while HTTPS encrypts the data.", explanation: "Correct! The 'S' stands for Secure." },
                            { text: "HTTP is used for text, HTTPS is used for video.", explanation: "Incorrect. Both can handle multiple media types." },
                            { text: "HTTP requires a password, HTTPS does not.", explanation: "Incorrect. Both can support logins." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why does HTTPS make it harder for SOC Analysts to detect malware entering a corporate network?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Because HTTPS automatically disables Windows Defender.", explanation: "Incorrect. It does not affect local antivirus." },
                            { text: "Because HTTPS traffic cannot be logged.", explanation: "Incorrect. The connection logs exist, just not the payload." },
                            { text: "Because the malicious payload is encrypted in transit, blinding the network security monitors.", explanation: "Correct! The firewall sees encrypted gibberish instead of the virus signature." },
                            { text: "Because HTTPS uses UDP instead of TCP.", explanation: "Incorrect. HTTPS still uses TCP." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding HTTPS and Certificates."
                        helper="Select exactly 3 options."
                        correctIndexes={[1, 3, 4]}
                        options={[
                            { text: "A digital certificate lasts forever once a website buys it.", explanation: "False. Certificates expire and must be renewed regularly." },
                            { text: "HTTPS traffic standardly operates over Port 443.", explanation: "True. Port 80 is for HTTP, Port 443 is for HTTPS." },
                            { text: "Encryption prevents anyone who intercepts the network traffic from reading the passwords inside.", explanation: "True. The data looks like randomized math to anyone without the decryption key." },
                            { text: "A web browser displays a padlock icon to indicate a valid SSL/TLS certificate is encrypting the connection.", explanation: "True. This is the universal UI indicator for safety." },
                            { text: "Threat actors can buy and use valid SSL certificates for their malicious websites.", explanation: "True. Just because a site has a padlock does NOT mean the site isn't run by a hacker!" },
                            { text: "HTTPS ensures that the website will not sell your data.", explanation: "False. It only protects the data while it travels over the network." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}