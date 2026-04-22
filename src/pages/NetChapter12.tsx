import React from 'react';
import { Shield, EyeOff, ShieldAlert, MousePointer2, Network } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NetChapter12() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="VPNs and Proxies"
                description="Every time you connect to a server on the internet, you leave your IP address behind in their logs. If you want to hide your origin, or if a company wants to force your traffic through a security scanner, they use Proxies and VPNs."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <EyeOff className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">The Middlemen</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <p>A <strong>Proxy</strong> acts on your behalf. You ask the Proxy for a website, the Proxy asks the website, and hands the result back to you. The website only sees the Proxy's IP address, not yours.</p>
                                <p>A <strong>VPN (Virtual Private Network)</strong> does the same thing, but it creates a heavily encrypted 'Tunnel' from your computer to the VPN server, hiding your traffic from your local ISP or the coffee shop Wi-Fi.</p>
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
                                Hackers always use VPNs or Proxies so their real home IP address isn't caught in your logs. Furthermore, corporate SOCs use "Forward Proxies" to intercept all employee web traffic. By forcing employees through a proxy, the SOC can block malicious websites before the traffic ever reaches the user.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Auditing Proxy Settings"
                description="We are going to check your local Windows operating system to see if your internet traffic is currently being forwarded through a proxy server."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Network className="w-4 h-4 text-muted-foreground" /> Step 1: Checking the OS Config</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Press the Windows Key and type <code className="bg-secondary px-1 rounded text-foreground">Proxy settings</code>, then press Enter.</li>
                                <li>2. This opens the modern Settings app directly to the Network & Internet area.</li>
                                <li>3. Look at the section titled <strong>Manual proxy setup</strong>.</li>
                                <li>4. If "Use a proxy server" is toggled <strong>Off</strong>, your traffic is going straight to your router.</li>
                                <li>5. <em>Corporate Note:</em> If you are on a work laptop, this might be locked to "On" with an address listed. This proves your company is intercepting and monitoring your web traffic!</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-500" /> Step 2: Checking the VPN config</h4>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. On the left sidebar of the Settings app, click <strong>VPN</strong>.</li>
                                <li>2. This screen shows any built-in encrypted tunnels configured on your OS.</li>
                                <li>3. <em>Cleanup:</em> Close the Settings app. No changes were made!</li>
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
                        prompt="What is the primary technical function of a Proxy Server?"
                        correctIndexes={[3]}
                        options={[
                            { text: "To encrypt the hard drive of the connecting computer.", explanation: "Incorrect. Proxies do not encrypt local hard drives." },
                            { text: "To replace the need for an IP address.", explanation: "Incorrect. A proxy still requires IP addresses to route data." },
                            { text: "To permanently block all internet traffic.", explanation: "Incorrect. While they can block traffic, their primary role is forwarding." },
                            { text: "To act as an intermediary, making requests to websites on behalf of the user to hide their true origin.", explanation: "Correct! The website only sees the proxy, not the user." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="How does a VPN (Virtual Private Network) differ from a standard Proxy?"
                        correctIndexes={[1]}
                        options={[
                            { text: "A VPN is a physical hardware device, a proxy is only software.", explanation: "Incorrect. Both are primarily software/routing services." },
                            { text: "A VPN creates a secure, encrypted tunnel for all traffic leaving the device, whereas proxies often just forward unencrypted web traffic.", explanation: "Correct! The encrypted tunnel is the defining feature of a VPN." },
                            { text: "A VPN only works on local LANs, while proxies work on WANs.", explanation: "Incorrect. Both are heavily used across the open internet." },
                            { text: "A VPN assigns you a permanent MAC address.", explanation: "Incorrect. MAC addresses are hardware-based and don't change via VPNs." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding VPNs, Proxies, and Security."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 1, 4]}
                        options={[
                            { text: "Corporate SOCs often force employee traffic through a proxy so they can monitor and filter malicious websites.", explanation: "True. It provides a single 'choke point' for security." },
                            { text: "If an attacker uses a VPN, the victim's server logs will show the IP address of the VPN server, not the attacker's home IP.", explanation: "True. This is why attribution (finding the real hacker) is incredibly difficult." },
                            { text: "Using a VPN completely protects a computer from downloading malware.", explanation: "False. A VPN encrypts the traffic, but if you download a virus, it will still infect your machine." },
                            { text: "Proxies speed up your internet connection by bypassing your ISP.", explanation: "False. Proxies add an extra 'hop', which usually slows down the connection slightly." },
                            { text: "Windows has native settings menus allowing administrators to route all OS traffic through a proxy.", explanation: "True. It is built right into the OS network settings." },
                            { text: "VPNs are illegal for commercial use.", explanation: "False. Thousands of companies rely on VPNs for remote work." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}