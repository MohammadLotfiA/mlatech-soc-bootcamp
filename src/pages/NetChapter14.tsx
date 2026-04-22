import React from 'react';
import { PackageOpen, Mail, ShieldAlert, BookOpen } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter14() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Introduction to Packet Captures (PCAP)"
                description="Logs can lie. A sophisticated hacker can delete an Event Log or manipulate a firewall record. But the actual electrical signals sent over the physical wire cannot be faked. Recording raw network traffic is called a Packet Capture (PCAP)."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <PackageOpen className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Anatomy of a Packet</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                A packet is like a piece of physical mail. <br /><br />
                                <strong>The Header (The Envelope):</strong> Contains the source IP, destination IP, MAC addresses, and ports. It tells the routers where to send the data.<br /><br />
                                <strong>The Payload (The Letter):</strong> The actual data inside (like the text of a webpage, or the code of a virus).
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
                                When a SOC Analyst investigates a major breach, they download the PCAP file. It acts as a DVR recording of the network. They can literally 'rewind' time, open the packets, and read the exact commands the hacker typed, or extract the exact files the hacker stole.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Conceptual Analysis"
                title="Lab: The Envelope vs. The Letter"
                description="Understanding how security tools view packets is critical. Some tools only read the envelope, while others open the mail."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Theory Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground" /> Step 1: Deep Packet Inspection (DPI)</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                A standard Network Firewall only looks at the <strong>Header</strong>. It checks the IP addresses and ports, and if they are allowed, it lets the packet through. It does not care what is inside.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                An Intrusion Detection System (IDS) performs <strong>Deep Packet Inspection</strong>. It rips open the envelope and reads the <strong>Payload</strong>. If the payload contains the signature of a known virus, it triggers an alarm.
                            </p>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2">The Encryption Problem</h4>
                            <p className="text-sm text-muted-foreground">
                                If the packet is sent over HTTPS, the <strong>Payload</strong> is encrypted. The IDS can open the envelope, but the letter inside is unreadable. This is why capturing PCAPs without SSL Decryption keys can sometimes be frustrating for analysts!
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
                        prompt="What is a PCAP?"
                        correctIndexes={[1]}
                        options={[
                            { text: "A Personal Computer Antivirus Program.", explanation: "Incorrect. It stands for Packet Capture." },
                            { text: "A digital recording of raw network traffic packets sent across a wire.", explanation: "Correct! It is the ultimate ground truth of network analysis." },
                            { text: "A hardware device used to connect two routers.", explanation: "Incorrect. PCAPs are files containing data." },
                            { text: "An encrypted password vault.", explanation: "Incorrect. PCAPs contain network traffic." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Which part of a network packet contains the actual data being transferred (like the text of an email)?"
                        correctIndexes={[3]}
                        options={[
                            { text: "The Source IP", explanation: "Incorrect. This is part of the routing header." },
                            { text: "The Destination MAC", explanation: "Incorrect. This is part of the routing header." },
                            { text: "The Port Number", explanation: "Incorrect. This directs the traffic to an application." },
                            { text: "The Payload", explanation: "Correct! The payload is the 'letter' inside the envelope." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Packet Captures and Inspection."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 4]}
                        options={[
                            { text: "A standard firewall primarily inspects the Header (IPs and Ports) to make routing decisions.", explanation: "True. It acts like a mail sorter reading zip codes." },
                            { text: "Deep Packet Inspection (DPI) encrypts the payload before sending it.", explanation: "False. DPI reads the payload; it does not encrypt it." },
                            { text: "PCAPs can only record traffic from the internet, not local LAN traffic.", explanation: "False. PCAPs capture whatever crosses the specific network interface." },
                            { text: "Threat actors can easily delete a packet from a captured PCAP file without leaving a trace.", explanation: "False. Modifying raw PCAP files is incredibly difficult and leaves forensic artifacts." },
                            { text: "If traffic is sent via HTTPS, the Payload is encrypted, but the Header (IPs) must remain unencrypted so routers know where to send it.", explanation: "True. You cannot encrypt the mailing address on the outside of the envelope!" }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}