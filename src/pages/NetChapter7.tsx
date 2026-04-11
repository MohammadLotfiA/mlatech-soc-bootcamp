import React from 'react';
import { Handshake, Activity, ShieldAlert, Terminal, ListFilter } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter7() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="The TCP 3-Way Handshake"
                description="TCP is the protocol of guaranteed delivery. But before a computer can send guaranteed data, it must first prove that the destination computer is actually awake and listening. It does this via a strict, three-step greeting called the Handshake."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Handshake className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">SYN, SYN-ACK, ACK</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-4">
                                <li><strong>SYN (Synchronize):</strong> Your computer says, "Hello, are you there? I want to talk."</li>
                                <li><strong>SYN-ACK (Synchronize-Acknowledge):</strong> The server says, "I am here, and I acknowledge your request. I also want to talk."</li>
                                <li><strong>ACK (Acknowledge):</strong> Your computer says, "Great, I acknowledge your reply. Here comes the data."</li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The SOC Perspective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                Hackers use a tool called Nmap to "Port Scan" networks to find targets. To do this stealthily, they send a <strong>SYN</strong> packet. If the server replies with <strong>SYN-ACK</strong>, the hacker immediately drops the connection before sending the final <strong>ACK</strong>. This half-open connection proves the server is alive, but often bypasses basic security logs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Observing Connection States"
                description="We are going to use the command line to view the current state of every TCP connection on your computer."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-muted-foreground" /> Step 1: The Netstat Command</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">netstat -an</pre>
                                    </div>
                                </li>
                                <li>3. You will see a massive list of IP addresses. Look at the column on the far right labeled <strong>State</strong>.</li>
                                <li>4. You will see words like <strong>LISTENING</strong> (waiting for a SYN), <strong>ESTABLISHED</strong> (the 3-way handshake finished perfectly), and <strong>TIME_WAIT</strong> (the connection recently closed).</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ListFilter className="w-4 h-4 text-emerald-500" /> Step 2: Filtering the Noise</h4>
                            <p className="text-sm text-muted-foreground mb-2">Let's ask Windows to only show us the fully established, active connections.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>
                                    1. In the terminal, type this exactly and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">netstat -an | findstr ESTABLISHED</pre>
                                    </div>
                                </li>
                                <li>2. The "pipe" character (<code>|</code>) takes the output of netstat and sends it to the <code>findstr</code> search tool.</li>
                                <li>3. <em>Cleanup:</em> Type <code>exit</code> to close the terminal.</li>
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
                        prompt="What is the correct order of packets sent during a TCP 3-Way Handshake?"
                        correctIndexes={[2]}
                        options={[
                            { text: "ACK, SYN, SYN-ACK", explanation: "Incorrect. You cannot acknowledge a connection before synchronizing." },
                            { text: "SYN, ACK, SYN-ACK", explanation: "Incorrect. The server replies with both simultaneously." },
                            { text: "SYN, SYN-ACK, ACK", explanation: "Correct! The initiator asks, the server replies, the initiator confirms." },
                            { text: "FIN, SYN, ACK", explanation: "Incorrect. FIN is used to close a connection, not start one." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why do attackers use 'half-open' SYN scans (sending SYN, receiving SYN-ACK, but dropping before ACK)?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Because it encrypts the network traffic.", explanation: "Incorrect. Scans do not encrypt data." },
                            { text: "To determine if a server is online while attempting to avoid being logged by the server's basic security systems.", explanation: "Correct! Many older systems only log fully 'ESTABLISHED' connections." },
                            { text: "Because it is faster to download files this way.", explanation: "Incorrect. You cannot download files until the handshake finishes." },
                            { text: "To permanently crash the server.", explanation: "Incorrect. A single dropped handshake will not crash a server." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding TCP connection states."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "A port in the 'LISTENING' state is passively waiting for an incoming SYN packet from another computer.", explanation: "True. It is keeping the door open, waiting for visitors." },
                            { text: "UDP traffic also uses the SYN, SYN-ACK, ACK handshake.", explanation: "False. UDP is connectionless and has no handshake." },
                            { text: "The `netstat` command permanently deletes network connections.", explanation: "False. It is a read-only diagnostic tool." },
                            { text: "If a connection is marked 'ESTABLISHED', it means the 3-way handshake was successfully completed.", explanation: "True. Data is actively flowing between the two devices." },
                            { text: "You must unplug your router to close an ESTABLISHED connection.", explanation: "False. Software closes connections via FIN or RST packets automatically." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}