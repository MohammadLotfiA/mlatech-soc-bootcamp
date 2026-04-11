import React from 'react';
import { BookA, Search, ShieldAlert, Terminal, Network } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter5() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="DNS (The Internet Phonebook)"
                description="Humans are terrible at memorizing numbers. If you want to visit Google, you don't type '142.250.190.46' into your browser. You type 'google.com'. The Domain Name System (DNS) is the phonebook that translates the human words we type into the IP addresses the computers need."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <BookA className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Translation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When you type a URL, your computer secretly asks a DNS Server, "What is the IP address for this website?" The server replies with the number, and then your computer makes the actual connection using that IP address.
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
                                Malware needs to receive instructions from the hacker's "Command and Control" (C2) server. To find it, the malware usually makes a DNS request for a malicious domain (like <code>evil-hacker-site.com</code>). SOC Analysts monitor DNS logs to catch infected computers asking for directions to bad neighborhoods.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Querying the Phonebook"
                description="We are going to use the command line to ask the DNS server for the hidden IP addresses behind a famous website."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Search className="w-4 h-4 text-muted-foreground" /> Step 1: The nslookup Command</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">nslookup wikipedia.org</pre>
                                    </div>
                                </li>
                                <li>3. The first two lines of the output show <em>which</em> DNS server you just asked (usually your router or your ISP).</li>
                                <li>4. Below that, under "Non-authoritative answer", it will list the <strong>Addresses</strong>.</li>
                                <li>5. These numbers are the true IP addresses of Wikipedia's servers.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Network className="w-4 h-4 text-emerald-500" /> Step 2: Reverse Verification</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's prove the numbers work just as well as the words.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Highlight and copy one of the IPv4 addresses you just found (e.g., <code>103.102.166.224</code>).</li>
                                <li>2. Open your web browser.</li>
                                <li>3. Paste that raw IP address directly into the top URL bar and press Enter.</li>
                                <li>4. It will take you straight to Wikipedia!</li>
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
                        prompt="What is the primary function of the Domain Name System (DNS)?"
                        correctIndexes={[1]}
                        options={[
                            { text: "To encrypt website traffic so hackers cannot steal passwords.", explanation: "Incorrect. Encryption is handled by protocols like HTTPS." },
                            { text: "To translate human-readable domain names (like google.com) into computer-readable IP addresses.", explanation: "Correct! It acts as the directory for the internet." },
                            { text: "To block users from accessing malicious websites.", explanation: "Incorrect. While DNS filtering exists, the core function of DNS is just translation." },
                            { text: "To assign dynamic IP addresses to computers on a local network.", explanation: "Incorrect. That is the job of DHCP." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why do SOC Analysts monitor DNS logs?"
                        correctIndexes={[3]}
                        options={[
                            { text: "To ensure employees are not spending too much time on social media.", explanation: "Incorrect. That is an HR or IT Policy issue, not a security operation." },
                            { text: "To check if the firewall is turned on.", explanation: "Incorrect. DNS logs do not display firewall status." },
                            { text: "To speed up the internet connection.", explanation: "Incorrect. Analysts monitor logs for security, not performance." },
                            { text: "To detect infected computers 'beaconing' out by asking for the IP addresses of known malicious hacker domains.", explanation: "Correct! If a PC asks for the IP of a known malware server, it is likely infected." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding DNS and the `nslookup` command."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 3, 4]}
                        options={[
                            { text: "Typing a raw IP address directly into a web browser bypasses the need for a DNS lookup.", explanation: "True. You already provided the number, so the translation isn't needed." },
                            { text: "The `nslookup` command deletes the DNS cache on your computer.", explanation: "False. `ipconfig /flushdns` does that; `nslookup` just queries the server." },
                            { text: "A single domain name (like google.com) can only point to one single IP address.", explanation: "False. Massive websites have dozens of IPs for load balancing." },
                            { text: "The `nslookup` command allows you to manually query a DNS server to find the IP address of a website.", explanation: "True. It is a native diagnostic tool." },
                            { text: "Without DNS, humans would have to memorize the IP address of every website they wanted to visit.", explanation: "True. The internet would be incredibly difficult to navigate." },
                            { text: "DNS operates strictly on the physical layer of the network.", explanation: "False. DNS is an application layer protocol." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}