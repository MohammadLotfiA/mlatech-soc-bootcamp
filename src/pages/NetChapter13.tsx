import React from 'react';
import { Activity, Search, ShieldAlert, Terminal, Eye } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter13() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Connections and netstat"
                description="If malware is actively communicating with a hacker's server, it holds open a network connection. By interrogating the local machine, analysts can view every single active connection and trace it back to the exact program causing it."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Activity className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The -ANO Flags</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                                The Windows command `netstat` shows network statistics. But by adding flags `-ano`, we ask it to show <strong>All</strong> connections, using <strong>Numerical</strong> IP addresses, and—most importantly—the <strong>Owning Process ID (PID)</strong> of the program making the connection.
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
                                This is the ultimate bridge between the Network and the Endpoint. If an external firewall alerts you to a malicious connection, you can remote into the suspected machine, run `netstat -ano`, find the malicious IP, grab its PID, and open Task Manager to catch the malware red-handed.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: The Bridge Investigation"
                description="We are going to use the command line to find an active connection, grab its PID, and map it back to the GUI Task Manager."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <Terminal className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">CLI to GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Search className="w-4 h-4 text-muted-foreground" /> Step 1: Finding the PID</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open a web browser (like Chrome or Edge) and go to any website. Leave it open.</li>
                                <li>2. Open the <strong>Command Prompt</strong>.</li>
                                <li>
                                    3. Type the following exactly and press Enter:
                                    <div className="rounded-lg border border-border bg-black/40 p-3 mt-2 mb-2 w-fit">
                                        <pre className="text-primary font-mono text-sm">netstat -ano | findstr ESTABLISHED</pre>
                                    </div>
                                </li>
                                <li>4. Look at the output. The far-right column is the <strong>PID</strong>. Pick any PID number from that list and write it down.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Eye className="w-4 h-4 text-emerald-500" /> Step 2: Unmasking the Program</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>Task Manager</strong> (<code className="bg-secondary px-1 rounded text-foreground">Ctrl + Shift + Esc</code>).</li>
                                <li>2. Navigate to the <strong>Details</strong> tab.</li>
                                <li>3. Sort the list by the <strong>PID</strong> column by clicking the header.</li>
                                <li>4. Scroll until you find the exact PID you wrote down. Look at the application name next to it—you have successfully traced a network packet to an executable file!</li>
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
                        prompt="What is the critical piece of information the `-o` flag adds to the standard `netstat` output?"
                        correctIndexes={[2]}
                        options={[
                            { text: "It Output's the data to a text file.", explanation: "Incorrect. Output redirection uses the `>` symbol." },
                            { text: "It Organizes the IPs alphabetically.", explanation: "Incorrect. The list is usually sorted by connection state or port." },
                            { text: "It displays the Owning Process ID (PID) associated with each connection.", explanation: "Correct! This allows you to link the network traffic to an actual program." },
                            { text: "It Obscures the IP addresses for privacy.", explanation: "Incorrect. Analysts need to see the IP addresses clearly." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="If you find a suspicious 'ESTABLISHED' connection in netstat, what is the immediate next step for an analyst?"
                        correctIndexes={[0]}
                        options={[
                            { text: "Note the PID, open Task Manager's Details tab, and find exactly which program is holding the connection open.", explanation: "Correct! You must identify the binary executing the traffic." },
                            { text: "Unplug the computer's power cord immediately.", explanation: "Incorrect. This destroys RAM evidence (like the PID you just found)." },
                            { text: "Delete the Windows System32 folder.", explanation: "Incorrect. This destroys the operating system." },
                            { text: "Ping Google to check if the internet still works.", explanation: "Incorrect. Pinging does not further the investigation." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding the `netstat` command."
                        helper="Select exactly 2 options."
                        correctIndexes={[1, 3]}
                        options={[
                            { text: "Running `netstat` requires an active internet connection to function.", explanation: "False. It can show local loopback connections without internet." },
                            { text: "Adding `| findstr ESTABLISHED` filters the output to only show active, fully connected network sessions.", explanation: "True. It cuts through the noise of 'LISTENING' ports." },
                            { text: "The `netstat` command permanently terminates malicious connections.", explanation: "False. It is a read-only tool. You use Task Manager to terminate the PID." },
                            { text: "By default, `netstat -ano` displays the local IP/Port, the foreign (destination) IP/Port, the connection state, and the PID.", explanation: "True. It provides the complete layout of the socket." },
                            { text: "It is only available on Linux operating systems.", explanation: "False. `netstat` is a native Windows tool." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}