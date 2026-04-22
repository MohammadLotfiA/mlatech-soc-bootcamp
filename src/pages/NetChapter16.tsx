import React from 'react';
import { Flag, Crosshair, ShieldAlert, BookOpen, Fingerprint, Terminal } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter16() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="The SOC Network Perspective (Capstone)"
                description="You have learned how endpoints execute files, and how networks route data. It is time to tie it all together. A true Tier 1 SOC Analyst does not look at these systems in isolation. They form a single, unbroken chain of evidence."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Crosshair className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Golden Timeline</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Investigations usually start at the Network (a firewall alert) and end at the Endpoint (a malicious file). The analyst must trace the IP address, find the physical computer, locate the process in memory, and finally isolate the file on the hard drive.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader className="pb-2">
                            <ShieldAlert className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg text-primary">The Final Test</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground">
                                In this final lab, you will not press buttons. You will perform a mental Tabletop Exercise tracing a simulated cyber attack step-by-step using everything you have learned in the past 36 chapters.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Tabletop Exercise"
                title="Lab: Tracing the Beacon"
                description="Read the scenario below carefully. This is exactly what you will do on your first day working in a real Security Operations Center."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">Incident Scenario</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Flag className="w-4 h-4 text-muted-foreground" /> Step 1: The Alert</h4>
                            <p className="text-sm text-muted-foreground">
                                At 2:00 PM, your Network Firewall alerts you: "Malicious outbound traffic detected heading to a known Russian C2 server." The firewall log says the internal Private IP address making the connection is <code>192.168.1.100</code>.
                            </p>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Fingerprint className="w-4 h-4 text-emerald-500" /> Step 2: The Translation</h4>
                            <p className="text-sm text-muted-foreground">
                                You know IP addresses change. You open the <strong>DHCP Server Logs</strong> for 2:00 PM. You discover that at that exact time, the IP <code>192.168.1.100</code> was leased to a MAC Address belonging to Sarah's laptop in the Accounting department.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Terminal className="w-4 h-4 text-muted-foreground" /> Step 3: The Interrogation</h4>
                            <p className="text-sm text-muted-foreground">
                                You remote into Sarah's laptop. You open the Command Prompt and run <code>netstat -ano</code>. You find an active 'ESTABLISHED' connection to the Russian IP address! The owning PID is <strong>4092</strong>.
                            </p>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-emerald-500" /> Step 4: The Execution</h4>
                            <p className="text-sm text-muted-foreground">
                                You open Task Manager, go to Details, and look up PID 4092. You add the <strong>Command Line</strong> column. It reveals that the malicious connection is coming from a file hiding at <code>C:\Users\Sarah\Downloads\invoice.pdf.exe</code>. You kill the process, quarantine the file, and close the ticket!
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
                        prompt="In the capstone scenario, why did the analyst have to check the DHCP logs?"
                        correctIndexes={[1]}
                        options={[
                            { text: "To encrypt Sarah's laptop before remoting into it.", explanation: "Incorrect. DHCP does not encrypt laptops." },
                            { text: "Because Private IP addresses change via leases. The DHCP log proves which specific physical device had that IP at the exact time of the alert.", explanation: "Correct! DHCP links the logical IP to the physical MAC address over time." },
                            { text: "To translate the Russian IP address into a domain name.", explanation: "Incorrect. That is the job of DNS, not DHCP." },
                            { text: "To block the firewall from dropping the connection.", explanation: "Incorrect. DHCP assigns IPs; it doesn't control firewalls." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="In the capstone scenario, what tool bridged the gap between the Network (the IP address) and the Endpoint (the PID)?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Wireshark", explanation: "Incorrect. Wireshark reads PCAPs; it does not list local PIDs." },
                            { text: "Task Scheduler", explanation: "Incorrect. Task Scheduler automates programs." },
                            { text: "nslookup", explanation: "Incorrect. nslookup translates DNS." },
                            { text: "netstat -ano", explanation: "Correct! Netstat shows active connections and their owning PIDs." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Congratulations! You have completed the foundational tracks. Select ALL the TRUE statements regarding a SOC Analyst's workflow."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 3]}
                        options={[
                            { text: "A Network Firewall can alert you that an internal IP is communicating with a malicious external IP (Outbound Traffic).", explanation: "True. This is a primary detection mechanism." },
                            { text: "Adding the 'Command Line' column in Task Manager allows an analyst to see the exact absolute path where malware launched from.", explanation: "True. It unmasks the file's origin." },
                            { text: "Standard users have the permissions required to delete firewall logs to hide their tracks.", explanation: "False. Manipulating security logs requires Administrator rights." },
                            { text: "If malware names itself 'svchost.exe' to blend in, an analyst can use netstat and Task Manager to expose it.", explanation: "True. The tools reveal the truth behind fake names." },
                            { text: "Once malware is deleted from the Downloads folder, all active processes in RAM are instantly killed.", explanation: "False. You must kill the process (PID) in memory separately from deleting the file." },
                            { text: "A SOC Analyst rarely uses the Command Line Interface (CLI).", explanation: "False. The CLI is heavily used for speed and stealth." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}