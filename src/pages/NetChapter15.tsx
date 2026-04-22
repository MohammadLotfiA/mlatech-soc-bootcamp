import React from 'react';
import { Waves, Search, ShieldAlert, Filter } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter15() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Reading Wireshark"
                description="A PCAP file is just raw, unreadable binary data. To analyze it, SOC Analysts use the industry-standard software tool: Wireshark. Wireshark parses the binary and displays the packets in a human-readable interface."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Waves className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Three Panes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Wireshark is famously divided into three views:</p>
                                <ol className="list-decimal pl-4">
                                    <li><strong>Packet List:</strong> A chronological list of every packet captured.</li>
                                    <li><strong>Packet Details:</strong> Deep dive into the Header of the selected packet.</li>
                                    <li><strong>Packet Bytes:</strong> The raw hexadecimal and ASCII data (the Payload).</li>
                                </ol>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                A 5-minute PCAP file can contain 100,000 packets. An analyst never reads them one by one. The true skill of using Wireshark is mastering its <strong>Display Filters</strong> to instantly strip away the noise and reveal exactly what the hacker did.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Conceptual Analysis"
                title="Lab: Mastering Filters"
                description="Since we aren't installing third-party tools today, we are going to learn the syntax of the most powerful Wireshark filters used in Incident Response."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Search className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Syntax Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Filter className="w-4 h-4 text-muted-foreground" /> Step 1: Filtering by Address</h4>
                            <p className="text-sm text-muted-foreground mb-2">If you know the IP address of the hacker, you type this into the Wireshark filter bar at the top:</p>
                            <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                <pre className="text-primary font-mono text-sm">ip.addr == 192.168.1.50</pre>
                            </div>
                            <p className="text-sm text-muted-foreground">This immediately hides the 99,000 packets that don't involve that specific IP address.</p>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2">Step 2: Filtering by Protocol</h4>
                            <p className="text-sm text-muted-foreground mb-2">If you want to see if the user sent a plaintext password over an unencrypted website, you filter for HTTP:</p>
                            <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                <pre className="text-primary font-mono text-sm">http</pre>
                            </div>
                            <p className="text-sm text-muted-foreground">You can then right-click a packet and select <strong>"Follow TCP Stream"</strong>. Wireshark will reassemble the packets and show you the exact webpage the user saw, including any passwords they typed!</p>
                        </div>
                    </div>
                </Card>
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Verification" title="Knowledge Check">
                <div className="space-y-8">
                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="What is the primary purpose of Wireshark?"
                        correctIndexes={[1]}
                        options={[
                            { text: "To block malware from entering the network.", explanation: "Incorrect. Wireshark is an analysis tool, not a firewall." },
                            { text: "To parse and display captured PCAP data in a human-readable graphical interface.", explanation: "Correct! It translates the binary capture into readable packets." },
                            { text: "To encrypt passwords on a local machine.", explanation: "Incorrect. It does not encrypt data." },
                            { text: "To assign IP addresses to new computers.", explanation: "Incorrect. That is the job of DHCP." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If an analyst types `ip.addr == 8.8.8.8` into the Wireshark display filter, what happens?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Wireshark hides all packets except those sent to or received from the IP address 8.8.8.8.", explanation: "Correct! It isolates traffic involving that specific IP." },
                            { text: "Wireshark automatically blocks 8.8.8.8 at the firewall.", explanation: "Incorrect. Wireshark cannot alter firewall configurations." },
                            { text: "Wireshark deletes all packets associated with 8.8.8.8 to save space.", explanation: "Incorrect. Filters only hide data from view; they don't delete it." },
                            { text: "Wireshark decrypts the traffic coming from 8.8.8.8.", explanation: "Incorrect. You need SSL keys to decrypt traffic." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Wireshark."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 2, 4]}
                        options={[
                            { text: "Wireshark's 'Follow TCP Stream' feature can reassemble fragmented packets to show the raw data payload (like a plaintext password) as one cohesive document.", explanation: "True. It reconstructs the conversation." },
                            { text: "Wireshark can only read live network traffic; it cannot open saved files.", explanation: "False. Opening saved .pcap files is its primary use." },
                            { text: "Wireshark allows you to filter traffic by specific protocols, such as typing `http` or `dns` into the filter bar.", explanation: "True. Protocol filtering cuts down noise instantly." },
                            { text: "Wireshark automatically detects and deletes viruses during a capture.", explanation: "False. It captures everything passively; it takes no action against malware." },
                            { text: "In Wireshark, the 'Packet Details' pane allows you to deeply inspect the Header information (like MAC addresses and Ports).", explanation: "True. This pane breaks down the envelope." },
                            { text: "You must pay for a commercial license to use Wireshark in a SOC.", explanation: "False. Wireshark is free and open-source." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}