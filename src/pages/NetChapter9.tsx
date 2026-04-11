import React from 'react';
import { Home, Globe, ShieldAlert, MousePointer2, ArrowRight } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter9() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="NAT & Private IPs"
                description="There are over 10 billion devices on the internet, but IPv4 only has 4 billion addresses available. To solve this shortage, the world created Private IPs and NAT. Your home devices don't actually have real internet IP addresses."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Home className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Network Address Translation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Any IP starting with <strong>192.168.x.x</strong> or <strong>10.x.x.x</strong> is a "Private" IP. It only works inside your house/LAN. When your phone asks for a website, your router catches the request, swaps your private IP for the router's single, <strong>Public IP</strong>, and sends it to the internet. This is called <strong>NAT</strong>.
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
                                Because of NAT, if an analyst looks at external firewall logs, they will only see the Router's Public IP making the connection. To find out <em>which specific employee's laptop</em> triggered the alert, the analyst must correlate the firewall log with the router's internal NAT translation logs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The NAT Illusion"
                description="We are going to compare your computer's local perspective of itself against how the internet actually sees you."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI/CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Home className="w-4 h-4 text-muted-foreground" /> Step 1: The Internal View</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>2. Type <code className="bg-secondary px-1 rounded text-foreground">ipconfig</code> and press Enter.</li>
                                <li>3. Note your IPv4 Address. It almost certainly starts with <code>192.168...</code>, <code>10...</code>, or <code>172...</code>.</li>
                                <li>4. This is your <strong>Private IP</strong>. It is not routable on the open internet.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-emerald-500" /> Step 2: The External View</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's see what IP address the Google servers actually see when you visit them.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Open a web browser.</li>
                                <li>2. Go to Google and search: <strong>"What is my IP"</strong></li>
                                <li>3. Google will return a completely different number (e.g., <code>73.14.99.12</code>).</li>
                                <li>4. This is your router's <strong>Public IP</strong>. Your router used NAT to hide your private IP from the internet!</li>
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
                        prompt="Which of the following IP addresses is a globally recognized 'Private' IP address that cannot be routed over the public internet?"
                        correctIndexes={[2]}
                        options={[
                            { text: "8.8.8.8", explanation: "Incorrect. This is a public IP address owned by Google." },
                            { text: "73.14.55.201", explanation: "Incorrect. This is a public IP address." },
                            { text: "192.168.1.15", explanation: "Correct! The 192.168.x.x block is strictly reserved for private, local networks." },
                            { text: "142.250.190.46", explanation: "Incorrect. This is a public IP address." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="What problem did Network Address Translation (NAT) primarily solve?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It stopped viruses from executing in memory.", explanation: "Incorrect. NAT does not scan memory or files." },
                            { text: "It allowed multiple local devices to share a single Public IP address, delaying the exhaustion of IPv4 addresses.", explanation: "Correct! Without NAT, we would have run out of IP addresses in the 1900s." },
                            { text: "It encrypted web traffic.", explanation: "Incorrect. HTTPS encrypts traffic, not NAT." },
                            { text: "It replaced the need for DNS servers.", explanation: "Incorrect. You still need DNS to translate names into IPs." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding NAT and IP addresses."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 2]}
                        options={[
                            { text: "When you visit a website, the web server only sees the Public IP address of your router, not the Private IP of your laptop.", explanation: "True. The router masks the internal network." },
                            { text: "The command `ipconfig` displays your Public IP address.", explanation: "False. `ipconfig` displays your local, Private network configurations." },
                            { text: "Because of NAT, if an analyst sees a malicious outbound connection on an external firewall log, they must check internal router logs to find the specific laptop that caused it.", explanation: "True. The external log only shows the router making the connection." },
                            { text: "Private IP addresses cost money to lease from the government.", explanation: "False. Anyone can use Private IP addresses inside their LAN for free." },
                            { text: "NAT is primarily a Layer 2 function utilizing MAC addresses.", explanation: "False. NAT translates IP addresses, making it a Layer 3 function." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}