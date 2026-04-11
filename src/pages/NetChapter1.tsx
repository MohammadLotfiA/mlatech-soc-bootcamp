import React from 'react';
import { Globe, Network, ShieldAlert, Terminal, MapPin } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter1() {
    const copyCode = (text: string) => navigator.clipboard.writeText(text);

    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="What is a Network? (LAN vs. WAN)"
                description="A network is simply two or more computers connected together so they can share data. To secure a network, you must understand the boundary between the 'inside' of your house and the 'outside' world."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Network className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Local vs. The Wide</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                A <strong>LAN (Local Area Network)</strong> is a private network in a single location, like your home or an office building. A <strong>WAN (Wide Area Network)</strong> connects multiple LANs across large distances. The internet itself is just the world's largest WAN.
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
                                Analysts classify traffic into two main types: <strong>North-South</strong> (traffic leaving your LAN to the internet, like data exfiltration) and <strong>East-West</strong> (traffic moving device-to-device inside your LAN, like a worm spreading between office computers).
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Tracing the Route"
                description="Data does not teleport. It hops physically from router to router. We are going to trace the exact number of hops it takes for your computer to reach Google's servers."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground" /> Step 1: Mapping the Internet</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open the <strong>Command Prompt</strong> (<code className="bg-secondary px-1 rounded">cmd</code>).</li>
                                <li>
                                    2. Type the following command and press Enter:
                                    <div className="relative rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">tracert 8.8.8.8</pre>
                                        <button onClick={() => copyCode('tracert 8.8.8.8')} className="absolute right-2 top-2 rounded bg-secondary px-2 py-1 text-[10px] font-bold text-muted-foreground hover:text-foreground border border-border z-10">COPY</button>
                                    </div>
                                </li>
                                <li>3. Watch as the tool maps every single "hop". The first hop is usually your home router. Every hop after that is your ISP routing your data across the country!</li>
                                <li>4. <em>Note:</em> If you see an asterisk (*), it just means a router along the way refused to respond to the ping for security reasons.</li>
                                <li>5. <em>Cleanup:</em> Type <code className="bg-secondary px-1 rounded">exit</code> to safely close the terminal.</li>
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
                        prompt="Which of the following best describes the Internet?"
                        correctIndexes={[2]}
                        options={[
                            { text: "A massive Local Area Network (LAN).", explanation: "Incorrect. A LAN is restricted to a single physical location." },
                            { text: "A secure, encrypted cloud partition.", explanation: "Incorrect. The internet is inherently public and not encrypted by default." },
                            { text: "The world's largest Wide Area Network (WAN).", explanation: "Correct! It is a massive network of interconnected networks spanning the globe." },
                            { text: "A hardware device installed by your ISP.", explanation: "Incorrect. That is a modem or router, not the internet itself." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If a SOC Analyst detects malware spreading from an infected laptop in the HR department directly to a desktop in the Finance department, what kind of traffic is this?"
                        correctIndexes={[1]}
                        options={[
                            { text: "North-South Traffic", explanation: "Incorrect. North-South is traffic leaving the network to the internet." },
                            { text: "East-West Traffic", explanation: "Correct! This describes lateral movement inside the local network." },
                            { text: "Inbound Exfiltration", explanation: "Incorrect. Exfiltration means data leaving the network." },
                            { text: "Encrypted Cloud Traffic", explanation: "Incorrect. This is internal device-to-device communication." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding Networks and the `tracert` command."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 4]}
                        options={[
                            { text: "A Local Area Network (LAN) connects devices within a single physical location, like an office.", explanation: "True. LANs are geographically restricted." },
                            { text: "The `tracert` command maps the path data takes by revealing every router it 'hops' through.", explanation: "True. It shows the exact path to the destination." },
                            { text: "If `tracert` returns an asterisk (*), it means your computer has a virus.", explanation: "False. It simply means a router dropped the diagnostic packet." },
                            { text: "East-West traffic refers to data leaving a corporate network and going to an external hacker.", explanation: "False. That describes North-South traffic." },
                            { text: "Data sent across the internet rarely takes a direct path; it bounces through multiple intermediary networks.", explanation: "True. Data follows the most efficient routed path, which involves many hops." },
                            { text: "A WAN is generally much faster and more secure than a LAN.", explanation: "False. LANs are usually much faster and easier to secure." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}