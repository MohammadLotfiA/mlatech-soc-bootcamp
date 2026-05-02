import React, { useState } from 'react';
import { Cloud, Server, ShieldAlert, Cpu, CheckCircle2, XCircle } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom Security+ PBQ Component: Cloud Shared Responsibility
const PBQSharedResponsibility = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
    const [submitted, setSubmitted] = useState(false);

    const checkPBQ = () => setSubmitted(true);

    const getStatus = (val: string, expected: string) => {
        if (!submitted) return null;
        return val === expected ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> : <XCircle className="w-5 h-5 text-destructive shrink-0" />;
    };

    return (
        <Card className="border-primary/20 shadow-md mb-8">
            <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                    Performance-Based Question (PBQ)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    <strong>Scenario:</strong> You are migrating on-premises assets to the cloud. You must identify whether the <strong>Customer</strong> or the <strong>Cloud Provider</strong> is responsible for the specific security control based on the service model.
                </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Requirement 1 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>1.</strong> Applying monthly OS security patches to a Windows Server virtual machine hosted in an <strong>IaaS</strong> (Infrastructure as a Service) environment.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}>
                            <option value="">Responsible Party...</option>
                            <option value="Customer">Customer</option>
                            <option value="Provider">Cloud Provider</option>
                        </select>
                        {getStatus(answers.q1, 'Customer')}
                    </div>
                </div>

                {/* Requirement 2 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>2.</strong> Ensuring the physical servers and hard drives running the underlying hypervisor are protected by security guards and biometric locks in an <strong>IaaS</strong> environment.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}>
                            <option value="">Responsible Party...</option>
                            <option value="Customer">Customer</option>
                            <option value="Provider">Cloud Provider</option>
                        </select>
                        {getStatus(answers.q2, 'Provider')}
                    </div>
                </div>

                {/* Requirement 3 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>3.</strong> Configuring the password complexity requirements and MFA for employee accounts logging into Salesforce (a <strong>SaaS</strong> environment).
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}>
                            <option value="">Responsible Party...</option>
                            <option value="Customer">Customer</option>
                            <option value="Provider">Cloud Provider</option>
                        </select>
                        {getStatus(answers.q3, 'Customer')}
                    </div>
                </div>

                {/* Requirement 4 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-secondary/20 rounded-lg border border-border">
                    <div className="text-sm flex-1">
                        <strong>4.</strong> Updating the runtime engine (e.g., PHP or Node.js) that executes your company's custom code in a <strong>PaaS</strong> (Platform as a Service) environment.
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-48 shrink-0">
                        <select className="p-2 rounded border border-border bg-background text-sm w-full" disabled={submitted} onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}>
                            <option value="">Responsible Party...</option>
                            <option value="Customer">Customer</option>
                            <option value="Provider">Cloud Provider</option>
                        </select>
                        {getStatus(answers.q4, 'Provider')}
                    </div>
                </div>

                {!submitted ? (
                    <Button onClick={checkPBQ} className="w-full">Submit Simulation</Button>
                ) : (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground">
                        <strong>Feedback:</strong><br />
                        1. <strong>IaaS OS:</strong> In IaaS, the provider gives you the virtual hardware. YOU are responsible for managing the OS inside it.<br />
                        2. <strong>IaaS Physical:</strong> The provider ALWAYS handles physical security and hardware maintenance across all models.<br />
                        3. <strong>SaaS IAM:</strong> Even if the provider builds the software (SaaS), YOU are always responsible for managing your own users' identities and access.<br />
                        4. <strong>PaaS Runtime:</strong> In PaaS, the provider manages the underlying OS and runtime environments, allowing developers to just focus on the code.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default function SecChapter6() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Cloud Architecture & Service Models"
                description="The cloud is simply 'someone else's computer'. However, the way we consume those computers dictates our security responsibilities."
            >
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Server className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">IaaS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground"><strong>Infrastructure as a Service:</strong> You rent virtual hardware (Compute, Storage, Network). You manage the OS, apps, and data. <em>(e.g., AWS EC2)</em>.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Cpu className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">PaaS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground"><strong>Platform as a Service:</strong> You rent an environment to run code. The provider manages the OS and runtime. You just manage your app and data. <em>(e.g., Heroku)</em>.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <Cloud className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">SaaS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground"><strong>Software as a Service:</strong> You rent access to a finished application. The provider manages everything underneath. You only manage your users' access. <em>(e.g., Office 365)</em>.</p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="shared"
                title="The Shared Responsibility Model"
                description="A major cause of cloud breaches is a misunderstanding of responsibility. The Cloud Provider is responsible for security OF the cloud (physical hardware, virtualization layer). The Customer is responsible for security IN the cloud (data protection, user identities, firewall configurations)."
            >
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm text-foreground">
                    <strong className="text-primary block mb-2">Modern Cloud Concepts:</strong>
                    <ul className="space-y-2 list-disc pl-4">
                        <li><strong>Software Defined Networking (SDN):</strong> Decoupling the network routing logic (Control Plane) from the hardware moving the data (Data Plane), allowing for fully automated, script-based network deployments.</li>
                        <li><strong>Serverless & Microservices:</strong> Breaking monolithic applications down into tiny, independent functions that run on-demand without managing any underlying server infrastructure.</li>
                        <li><strong>Resiliency:</strong> Using Geographic Redundant Storage (GRS) to replicate data across different global regions, ensuring High Availability if a natural disaster strikes one datacenter.</li>
                    </ul>
                </div>
            </SectionBlock>

            <SectionBlock
                id="iot"
                title="Embedded Systems & IoT"
                description="Not all network endpoints are laptops or cloud servers. The physical world is increasingly connected."
            >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Industrial Control Systems (ICS)</h3>
                        <p className="text-sm text-muted-foreground mb-3">ICS and SCADA networks control physical infrastructure (Power grids, Water plants, Manufacturing lines).</p>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li>They use <strong>Programmable Logic Controllers (PLCs)</strong> to interact with physical machinery.</li>
                            <li>A cyber attack here can cause physical destruction or loss of life (e.g., Stuxnet).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Internet of Things (IoT)</h3>
                        <p className="text-sm text-muted-foreground mb-3">Consumer and commercial smart devices (Smart thermostats, Medical monitors, Connected cars).</p>
                        <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                            <li><strong>The Security Risk:</strong> They are rushed to market, often lack the processing power to run encryption, use hardcoded default passwords, and are notoriously "Un-patchable".</li>
                        </ul>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                id="zero-trust"
                kicker="Interactive Concept"
                title="Deperimeterization & Zero Trust"
                description="In the past, networks were built like castles: a hard perimeter firewall with a soft, trusted inside. With remote work, mobile devices, and the cloud, the perimeter has dissolved. The modern approach is 'Zero Trust'. Let's visualize the difference."
            >
                <div className="space-y-4 mb-6">
                    <p className="text-sm text-muted-foreground"><strong>The Zero Trust Mantra:</strong> "Never trust, always verify."</p>
                    <p className="text-sm text-muted-foreground">In a Zero Trust Architecture, the network assumes that the threat is <em>already inside</em>. It requires continuous authentication and microsegmentation for every single resource-to-resource connection.</p>
                </div>

                {/* The interactive widget generated above will render right here! */}
            </SectionBlock>

            <SectionBlock id="quiz" kicker="Exam Preparation" title="Security+ SY0-701 Practice">
                <div className="space-y-8">

                    <PBQSharedResponsibility />

                    <QuizEngine
                        number={1}
                        type="single"
                        prompt="A manufacturing facility uses a specialized network to control robotic assembly arms and monitor temperature sensors on the factory floor. This network is separated from the corporate email network. What type of system does the factory floor network represent?"
                        correctIndexes={[2]}
                        options={[
                            { text: "Software Defined Network (SDN)", explanation: "Incorrect. SDN is a method of managing network control planes, usually in datacenters." },
                            { text: "Platform as a Service (PaaS)", explanation: "Incorrect. PaaS is a cloud development model." },
                            { text: "Supervisory Control and Data Acquisition (SCADA) / ICS", explanation: "Correct! SCADA/ICS networks are used to monitor and control physical industrial processes." },
                            { text: "Zero Trust Architecture", explanation: "Incorrect. This describes a security model, not an industrial control network." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="A company is moving their primary application to the cloud. They want the cloud provider to manage the underlying operating system patching, the web server runtime environment, and the database engine. The company only wants to deploy their application code and manage the resulting data. Which deployment model should they choose?"
                        correctIndexes={[1]}
                        options={[
                            { text: "Infrastructure as a Service (IaaS)", explanation: "Incorrect. In IaaS, the company would have to manage the OS patching and the web server installation." },
                            { text: "Platform as a Service (PaaS)", explanation: "Correct! PaaS abstracts away the OS and runtime layers, allowing developers to focus solely on code deployment." },
                            { text: "Software as a Service (SaaS)", explanation: "Incorrect. SaaS implies the provider built the application code as well (like Office 365)." },
                            { text: "On-Premises", explanation: "Incorrect. This requires managing all hardware and software locally." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="single"
                        prompt="Which of the following is the PRIMARY security concern associated with consumer Internet of Things (IoT) devices deployed on corporate networks?"
                        correctIndexes={[0]}
                        options={[
                            { text: "They often lack update mechanisms, use hardcoded credentials, and have insufficient processing power for strong encryption.", explanation: "Correct! These are the defining security flaws of rushed IoT devices." },
                            { text: "They require excessive amounts of physical storage space.", explanation: "Incorrect. IoT devices are usually physically small." },
                            { text: "They enforce strict Zero Trust policies that disrupt employee workflow.", explanation: "Incorrect. They rarely support any advanced security frameworks." },
                            { text: "They automatically encrypt all network traffic, blinding the IDS.", explanation: "Incorrect. They often lack the compute power to encrypt traffic." }
                        ]}
                    />

                    <QuizEngine
                        number={4}
                        type="multiple"
                        prompt="The traditional network security model relied heavily on a strong perimeter firewall protecting a 'trusted' internal network. Which of the following trends are driving the shift toward Deperimeterization and Zero Trust? (Select TWO)."
                        helper="Select exactly 2 options."
                        correctIndexes={[0, 3]}
                        options={[
                            { text: "The widespread adoption of Cloud Computing.", explanation: "True. Corporate data no longer lives exclusively inside the corporate building." },
                            { text: "The decreasing cost of physical servers.", explanation: "False. Physical server costs do not drive perimeter dissolution." },
                            { text: "The development of symmetric encryption algorithms.", explanation: "False. Encryption secures data, but it didn't cause deperimeterization." },
                            { text: "The increase in remote work and mobile devices.", explanation: "True. Employees are accessing data from untrusted networks (coffee shops, home Wi-Fi)." },
                            { text: "The deprecation of IPv4 addressing.", explanation: "False. IP exhaustion is a routing issue, not a security architecture issue." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}