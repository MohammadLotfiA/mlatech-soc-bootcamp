import React from 'react';
import { CalendarClock, Server, ShieldAlert, Terminal, Info } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter4() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="DHCP & IP Leases"
                description="If a network has 500 computers, an IT administrator cannot manually type a unique IP address into every single one. Instead, they use DHCP (Dynamic Host Configuration Protocol)—a server that automatically hands out IP addresses to devices as they connect."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <CalendarClock className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The IP Lease</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                When DHCP gives your computer an IP address, you do not own it forever. You are only <strong>Leasing</strong> it. If you disconnect from the network, that IP address goes back into the pool to be given to someone else.
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
                                Because of DHCP, the laptop that had the IP <code>192.168.1.50</code> on Monday might be a completely different laptop on Tuesday. If an analyst finds a security alert for an IP address from 3 days ago, they must check the DHCP logs to see <em>who exactly</em> was leasing that IP at that specific moment in time.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Checking Your Lease Timeline"
                description="We are going to use the command line to see exactly when your computer leased its current IP address, and when that lease expires."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Server className="w-4 h-4 text-muted-foreground" /> Step 1: The Advanced Config</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ipconfig /all</pre>
                                    </div>
                                </li>
                                <li>3. Scroll up to find your active network adapter (e.g., Wireless LAN adapter).</li>
                                <li>4. Look underneath your IPv4 Address. You will find two crucial lines: <strong>Lease Obtained</strong> and <strong>Lease Expires</strong>.</li>
                                <li>5. Note the exact day and time your lease runs out!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-emerald-500" /> Analytical Note</h4>
                            <p className="text-sm text-muted-foreground">
                                If your computer is turned on when the lease expires, it doesn't lose internet. It simply asks the DHCP server to quietly renew the lease in the background.
                            </p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary purpose of a DHCP server?"
                        correctIndexes={[1]}
                        options={[
                            { text: "To encrypt data leaving the local network.", explanation: "Incorrect. Encryption is handled by protocols like HTTPS." },
                            { text: "To automatically assign IP addresses and network configurations to devices.", explanation: "Correct! It saves IT administrators from typing IPs manually." },
                            { text: "To block malware from communicating with the internet.", explanation: "Incorrect. That is the job of a Firewall." },
                            { text: "To translate domain names into IP addresses.", explanation: "Incorrect. That is the job of a DNS server." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why does DHCP make a SOC Analyst's job slightly more complicated during an investigation?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Because IP addresses change over time, so an IP from yesterday might belong to a different machine today.", explanation: "Correct! Analysts must correlate IPs with time-stamped DHCP logs." },
                            { text: "Because DHCP hides the MAC address of the attacker.", explanation: "Incorrect. DHCP relies on MAC addresses to hand out leases." },
                            { text: "Because DHCP servers automatically delete security logs.", explanation: "Incorrect. DHCP generates logs, it doesn't delete security logs." },
                            { text: "Because DHCP traffic cannot be monitored.", explanation: "Incorrect. DHCP traffic is highly visible on the local network." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding DHCP and IP Leases."
                        helper="Select exactly 2 options."
                        correctIndexes={[2, 3]}
                        options={[
                            { text: "Once an IP address is leased to a computer, it can never be used by another device.", explanation: "False. Once the lease expires and the device disconnects, it goes back into the pool." },
                            { text: "A standard user must manually enter a password to renew their DHCP lease.", explanation: "False. Lease renewal happens automatically in the background." },
                            { text: "Servers and printers usually bypass DHCP and use 'Static' (permanent) IP addresses so they never change.", explanation: "True. You don't want a printer's address changing every day." },
                            { text: "The `ipconfig /all` command reveals the exact dates and times of a computer's IP lease.", explanation: "True. It provides the detailed lease timeline." },
                            { text: "DHCP is only used on corporate networks, not home Wi-Fi.", explanation: "False. Your home router acts as a DHCP server for your phones and laptops." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}