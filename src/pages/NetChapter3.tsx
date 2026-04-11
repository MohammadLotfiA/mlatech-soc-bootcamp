import React from 'react';
import { Router, Map, ShieldAlert, Terminal, Search } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter3() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="IPv4 Addresses & The Router"
                description="MAC addresses are great for talking to a computer in the same room, but they are useless for talking to a server across the country. To communicate globally, computers use logical addresses called IP Addresses."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Map className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The IP and The Gateway</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                An <strong>IP Address</strong> is a logical number assigned to your computer (e.g., <code>192.168.1.15</code>). When your computer wants to talk to the internet, it sends the data to the <strong>Default Gateway</strong>. The Gateway is simply your Router—the device sitting on the border of your network that knows how to find the outside world.
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
                                In security logs, attackers are identified by their IP addresses. If you see a malicious connection, you must immediately determine: "Is this a private IP address inside our corporate network, or a public IP address coming from Russia?"
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Finding the Exit"
                description="We are going to use the command line to discover your computer's IP address and the IP address of your router (the Default Gateway)."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Search className="w-4 h-4 text-muted-foreground" /> Step 1: The Config Command</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ipconfig</pre>
                                        <button onClick={() => copyCode('ipconfig')} className="absolute right-2 top-2 rounded bg-secondary px-2 py-1 text-[10px] font-bold text-muted-foreground hover:text-foreground border border-border z-10">COPY</button>
                                    </div>
                                </li>
                                <li>3. Locate your active adapter (e.g., Wireless LAN adapter Wi-Fi).</li>
                                <li>4. Look at the line that says <strong>IPv4 Address</strong>. This is your computer's current logical address (e.g., <code>192.168.1.45</code>).</li>
                                <li>5. Look down two lines to <strong>Default Gateway</strong>. This is the IP address of your Router (e.g., <code>192.168.1.1</code>).</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Router className="w-4 h-4 text-emerald-500" /> Concept Check</h4>
                            <p className="text-sm text-muted-foreground">
                                If you open your web browser and type your Default Gateway IP address into the URL bar, it will load the login page for your home router!
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
                        prompt="In networking, what is the role of the 'Default Gateway'?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It assigns MAC addresses to new devices.", explanation: "Incorrect. MAC addresses are set at the factory." },
                            { text: "It is the router that serves as the exit point for data trying to reach the outside internet.", explanation: "Correct! If a computer doesn't know where to send data, it defaults to the gateway." },
                            { text: "It is the primary antivirus server on a network.", explanation: "Incorrect. The gateway handles routing, not antivirus." },
                            { text: "It permanently encrypts all local network traffic.", explanation: "Incorrect. Gateways route traffic; encryption depends on the protocol (like HTTPS)." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Which command is used to quickly view a Windows computer's current IP address and Default Gateway?"
                        correctIndexes={[3]}
                        options={[
                            { text: "systeminfo", explanation: "Incorrect. This shows OS details, not network configurations." },
                            { text: "netstat", explanation: "Incorrect. This shows active network connections, but is not the best way to view your own config." },
                            { text: "tracert", explanation: "Incorrect. This maps the path to a remote server." },
                            { text: "ipconfig", explanation: "Correct! It stands for Internet Protocol Configuration." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding IP Addresses and Routing."
                        helper="Select exactly 3 options."
                        correctIndexes={[1, 3, 4]}
                        options={[
                            { text: "An IPv4 address is a permanent hardware address burned into the network card.", explanation: "False. That describes a MAC address." },
                            { text: "IP addresses are logical addresses used to route data across different networks.", explanation: "True. They are the standard for global routing." },
                            { text: "A computer can reach the open internet without a Default Gateway.", explanation: "False. It must have a gateway to cross from the LAN to the WAN." },
                            { text: "The `ipconfig` command displays the IPv4 address of the local machine.", explanation: "True. It is the primary tool for checking local network settings." },
                            { text: "In a typical home network, the Default Gateway is the IP address of your home Wi-Fi router.", explanation: "True. The home router acts as the border between your home and your ISP." },
                            { text: "IP addresses contain geographic GPS coordinates.", explanation: "False. They are assigned by providers and offer general locations, not precise GPS." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}