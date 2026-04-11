import React from 'react';
import { DoorOpen, FileCog, ShieldAlert, MousePointer2, Settings } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter8() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Ports & Services (The 65,535 Doors)"
                description="If an IP address is a specific apartment building, how does the mailman know which apartment door to knock on? The answer is Network Ports. A computer has 65,535 logical 'doors' (ports) that different applications use to send and receive data."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <DoorOpen className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Standardized Doors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                To prevent chaos, the internet agreed to use specific ports for specific services.
                                <br /><br />
                                • <strong>Port 80 & 443:</strong> Used by Web Browsers (HTTP/HTTPS).<br />
                                • <strong>Port 53:</strong> Used for DNS Translation.<br />
                                • <strong>Port 22:</strong> Used for remote terminal access (SSH).<br />
                                • <strong>Port 3389:</strong> Used for Remote Desktop (RDP).
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
                                Malware doesn't care about the rules. A hacker might run their Command and Control (C2) server over Port 443 so that their malicious traffic blends in perfectly with normal, everyday web browsing traffic. Analysts must investigate the actual payload, not just the port number.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Port Visibility"
                description="We are going to use the GUI to map active ports back to the programs using them."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><FileCog className="w-4 h-4 text-muted-foreground" /> Step 1: Process Identifiers (PIDs) and Ports</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>Resource Monitor</strong> (Type it into the Start Menu).</li>
                                <li>2. Go to the <strong>Network</strong> tab.</li>
                                <li>3. Expand the <strong>Listening Ports</strong> section.</li>
                                <li>4. Look at the columns: You will see the <strong>Image</strong> (the app name), the <strong>PID</strong>, the <strong>Protocol</strong> (TCP/UDP), and the <strong>Port</strong> number it is holding open!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Settings className="w-4 h-4 text-emerald-500" /> Step 2: Analysis</h4>
                            <p className="text-sm text-muted-foreground mb-2">Notice how many critical Windows services listen on high, random port numbers (like 50000+). These are dynamic ports used for temporary sessions.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. <em>Cleanup:</em> Close the Resource Monitor application.</li>
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
                        prompt="Which network port is the global standard for unencrypted web browsing (HTTP)?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Port 80", explanation: "Correct! Port 80 handles plaintext HTTP web traffic." },
                            { text: "Port 443", explanation: "Incorrect. Port 443 handles encrypted HTTPS web traffic." },
                            { text: "Port 53", explanation: "Incorrect. Port 53 handles DNS translations." },
                            { text: "Port 3389", explanation: "Incorrect. Port 3389 is Remote Desktop Protocol (RDP)." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If a SOC Analyst sees an alert for traffic coming inbound from the internet to a server on Port 3389, what is the most likely scenario?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Someone is trying to view the company's public website.", explanation: "Incorrect. Web browsing happens on ports 80 or 443." },
                            { text: "The DNS server is requesting an IP translation.", explanation: "Incorrect. DNS operates on Port 53." },
                            { text: "Someone is attempting to gain Remote Desktop (RDP) access to control the screen of the server.", explanation: "Correct! Port 3389 exposed to the internet is a massive security risk." },
                            { text: "The computer is requesting a DHCP IP lease.", explanation: "Incorrect. DHCP operates on ports 67 and 68." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Network Ports."
                        helper="Select exactly 3 options."
                        correctIndexes={[1, 3, 4]}
                        options={[
                            { text: "A computer only has exactly 100 ports available to use.", explanation: "False. There are 65,535 logical ports." },
                            { text: "If an IP address is the 'building', the Port is the 'apartment door' that directs data to the correct application.", explanation: "True. It routes the data to the specific software requesting it." },
                            { text: "Malware is physically blocked by the hardware if it tries to use Port 443.", explanation: "False. Malware frequently uses Port 443 to blend in." },
                            { text: "Port 443 is used for secure, encrypted web browsing (HTTPS).", explanation: "True. It is the modern standard for internet traffic." },
                            { text: "By using native tools like Resource Monitor or `netstat`, an analyst can link a specific Port to a specific Process ID (PID).", explanation: "True. This is a critical incident response technique." },
                            { text: "MAC addresses are used to translate port numbers.", explanation: "False. MAC addresses handle local hardware routing." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}