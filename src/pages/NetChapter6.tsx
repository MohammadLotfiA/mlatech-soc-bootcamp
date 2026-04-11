import React from 'react';
import { ArrowRightLeft, FastForward, ShieldAlert, MousePointer2, ListFilter } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter6() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="TCP vs. UDP"
                description="Once an IP address is found, data must be shipped. There are two primary delivery methods on the internet: TCP (The Registered Mail) and UDP (The Postcard). They both move data, but they behave very differently."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <ArrowRightLeft className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Reliability vs. Speed</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <p><strong>TCP (Transmission Control Protocol)</strong> requires a "handshake" before sending data. It numbers every packet and demands a receipt. If a packet is lost, it resends it. It is reliable but slower (Used for Websites, Emails, File Downloads).</p>
                                <p><strong>UDP (User Datagram Protocol)</strong> just blasts data at the target without checking if they received it. If packets are lost, oh well. It is unreliable but incredibly fast (Used for Live Video, Voice calls, Gaming).</p>
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
                                Attackers use both. If a hacker wants a stable "Reverse Shell" to control a victim's keyboard, they use TCP because they cannot afford dropped commands. If they want to overwhelm a server with a massive DDoS attack, they use UDP to blast data as fast as possible.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Observing Local Traffic"
                description="We are going to open a native Windows GUI tool to observe the live TCP and UDP connections currently running on your machine."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><ListFilter className="w-4 h-4 text-muted-foreground" /> Step 1: The Resource Monitor</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Click the Start Menu, type <code className="bg-secondary px-1 rounded text-foreground">Resource Monitor</code>, and open it.</li>
                                <li>2. Click on the <strong>Network</strong> tab at the top.</li>
                                <li>3. Expand the <strong>Network Activity</strong> panel by clicking its title bar.</li>
                                <li>4. Look at the column labeled <strong>Protocol</strong>.</li>
                                <li>5. You will see a live view of your computer's network traffic. Notice how almost all of your browser traffic (like Chrome or Edge) is listed as <strong>TCP</strong>!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><FastForward className="w-4 h-4 text-emerald-500" /> Step 2: Finding UDP</h4>
                            <p className="text-sm text-muted-foreground mb-2">UDP is harder to spot because it doesn't hold open persistent connections like TCP.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Expand the <strong>Listening Ports</strong> panel.</li>
                                <li>2. Sort the list by clicking the <strong>Protocol</strong> column header.</li>
                                <li>3. Look at the UDP section. You will likely see background Windows services (like `svchost.exe`) listening on UDP ports for local network discovery.</li>
                                <li>4. <em>Cleanup:</em> Close Resource Monitor.</li>
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
                        prompt="Which of the following scenarios is the best use case for UDP (User Datagram Protocol)?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Downloading a large PDF document.", explanation: "Incorrect. A PDF must be downloaded via TCP so no pages are missing." },
                            { text: "Sending an important email.", explanation: "Incorrect. Emails require guaranteed delivery via TCP." },
                            { text: "Logging into a secure banking website.", explanation: "Incorrect. Secure web traffic requires TCP handshakes." },
                            { text: "Streaming a live video call.", explanation: "Correct! UDP prioritizes speed; a dropped frame is better than buffering lag." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why would a threat actor prefer TCP when establishing a remote command-line connection (Reverse Shell) to an infected computer?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Because TCP guarantees the delivery of data, ensuring the commands they type are executed perfectly without packet loss.", explanation: "Correct! Hacking requires precision, which TCP provides." },
                            { text: "Because TCP is faster than UDP.", explanation: "Incorrect. TCP is slower due to its overhead and handshakes." },
                            { text: "Because TCP traffic is invisible to network monitors.", explanation: "Incorrect. TCP is highly visible on the wire." },
                            { text: "Because UDP cannot be used over the internet.", explanation: "Incorrect. UDP traverses the internet freely." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding TCP and UDP."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 4]}
                        options={[
                            { text: "TCP requires a 'handshake' to establish a connection before any data is sent.", explanation: "True. It establishes the connection formally." },
                            { text: "If a TCP packet is lost in transit, the sender will re-transmit it.", explanation: "True. TCP ensures guaranteed delivery." },
                            { text: "UDP requires a receipt of acknowledgment for every packet it sends.", explanation: "False. UDP is 'fire and forget' and does not ask for receipts." },
                            { text: "Viewing a web page (HTTP/HTTPS) almost exclusively relies on UDP.", explanation: "False. Web browsing relies heavily on TCP." },
                            { text: "UDP is often used in Denial of Service (DDoS) attacks because the attacker can blast traffic quickly without waiting for a connection.", explanation: "True. Its connectionless nature makes it a great weapon for flooding." },
                            { text: "TCP stands for Temporary Connection Protocol.", explanation: "False. It stands for Transmission Control Protocol." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}