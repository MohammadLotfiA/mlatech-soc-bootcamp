import React from 'react';
import { Cpu, Fingerprint, ShieldAlert, Terminal, Info } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter2() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="MAC Addresses & The Switch"
                description="Before computers can talk across the globe, they have to know how to talk to the device sitting right next to them. This local communication relies on permanent, physical hardware addresses."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Cpu className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Physical Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                Every network card (Wi-Fi chip or Ethernet port) is burned with a permanent, unique 12-character code at the factory. This is the <strong>MAC (Media Access Control) Address</strong>. A Network Switch uses MAC addresses to forward data to the correct device inside a LAN.
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
                                IP addresses change constantly, but a MAC address usually never changes. If an analyst detects a rogue device on the network, they hunt for its MAC address. Once they have it, they can track exactly which physical port on the wall the hacker is plugged into.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Identifying Your Hardware"
                description="We are going to use the command line to ask your operating system to reveal the physical MAC address burned into your network card."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Fingerprint className="w-4 h-4 text-muted-foreground" /> Step 1: Revealing the MAC</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">ipconfig /all</pre>

                                    </div>
                                </li>
                                <li>3. This outputs a lot of text! Scroll up until you find the section for your active connection (usually labeled <em>Wireless LAN adapter Wi-Fi</em> or <em>Ethernet adapter</em>).</li>
                                <li>4. Look for the line that says <strong>Physical Address</strong>.</li>
                                <li>5. The value will look like a mix of letters and numbers separated by dashes (e.g., <code>A1-B2-C3-D4-E5-F6</code>). This is your MAC Address!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-emerald-500" /> Analytical Note</h4>
                            <p className="text-sm text-muted-foreground">
                                The first half of a MAC address (first 6 characters) identifies the manufacturer (like Intel or Apple). The second half is a unique serial number for your specific device.
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
                        prompt="What is a MAC address?"
                        correctIndexes={[2]}
                        options={[
                            { text: "A temporary address assigned by your internet provider.", explanation: "Incorrect. That describes a public IP address." },
                            { text: "The physical location of a server on a map.", explanation: "Incorrect. It is a hardware identifier, not GPS coordinates." },
                            { text: "A permanent physical address burned into a network card at the factory.", explanation: "Correct! It is the true identity of the hardware." },
                            { text: "An Apple-specific networking protocol.", explanation: "Incorrect. It applies to all network devices, not just Macs." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why might a SOC Analyst look for a MAC address during an investigation?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Because unlike IP addresses which change, a MAC address provides a reliable way to identify a specific physical device.", explanation: "Correct! It is the ultimate fingerprint of the hardware." },
                            { text: "To determine the attacker's physical home address.", explanation: "Incorrect. MAC addresses do not contain geographic data." },
                            { text: "Because MAC addresses are immune to malware.", explanation: "Incorrect. The address type has no bearing on malware immunity." },
                            { text: "To encrypt the logs.", explanation: "Incorrect. MAC addresses are used for local routing, not encryption." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding MAC addresses and Layer 2 networking."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "A Network Switch uses MAC addresses to forward data to the correct device inside a local network (LAN).", explanation: "True. Switches operate on Layer 2 and rely exclusively on MAC addresses." },
                            { text: "Your MAC address changes every time you restart your computer.", explanation: "False. It is a permanent, burned-in physical address." },
                            { text: "The command `systeminfo` is the best way to find your MAC address.", explanation: "False. The `ipconfig /all` command is used for network interfaces." },
                            { text: "In Windows, the MAC address is listed under the label 'Physical Address' in the command line output.", explanation: "True. Microsoft uses the term Physical Address." },
                            { text: "Two devices on the same network can share the exact same MAC address without causing issues.", explanation: "False. Duplicate MAC addresses cause severe network collisions." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}