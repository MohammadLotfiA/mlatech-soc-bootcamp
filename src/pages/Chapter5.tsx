import React from 'react';
import { Search, Clock, ShieldAlert, MousePointer2, ListFilter } from 'lucide-react';
import { SectionBlock } from '@/components/course/CourseBlocks';
import { QuizEngine } from '@/components/course/QuizEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Chapter5() {
    return (
        <div className="animate-in fade-in duration-700">
            <SectionBlock
                id="intro"
                title="Search, Sort, and Filter"
                description="A computer hard drive can contain millions of files. Manually clicking through folders to find one specific file is impossible. Mastering File Explorer's sorting and searching tools is essential for speed and efficiency."
            >
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card className="bg-card border-border">
                        <CardHeader className="pb-2">
                            <ListFilter className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Sorting by Metadata</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Every file has "metadata" (data about the data). This includes the date it was created, its size, and its file type. You can click the column headers in File Explorer to instantly sort thousands of files.
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
                                When a SOC analyst receives an alert that a machine was compromised at 2:14 AM, they don't look at every file. They navigate to the suspected folder and <strong>Sort by Date Modified</strong> to instantly reveal what the attacker dropped.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionBlock>

            <SectionBlock
                id="lab"
                kicker="Hands-On Practice"
                title="Lab: Finding Needles in the Haystack"
                description="We are going to navigate to a massive system folder and use sorting and searching to find specific files instantly."
            >
                <Card className="p-6 shadow-md border-border w-full">
                    <div className="mb-6 flex items-center gap-3">
                        <MousePointer2 className="h-6 w-6 text-primary shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">GUI Exercise</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-muted-foreground" /> Step 1: Sorting by Date</h4>
                            <ol className="space-y-3 text-muted-foreground text-sm pl-2">
                                <li>1. Open <strong>File Explorer</strong>.</li>
                                <li>2. Navigate to <code className="bg-secondary px-1 rounded text-foreground">C:\Windows</code> (This folder has thousands of items).</li>
                                <li>3. Ensure your view is set to <strong>Details</strong> (Click the <em>View</em> tab {'>'} <em>Details</em>).</li>
                                <li>4. Click the column header named <strong>Date modified</strong>. Click it again to reverse the order.</li>
                                <li>5. Observe how the absolute newest (or oldest) files instantly jump to the top.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 border border-border p-4 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Search className="w-4 h-4 text-emerald-500" /> Step 2: The Search Bar</h4>
                            <p className="text-sm text-muted-foreground mb-2">The search bar only searches the folder you are currently inside.</p>
                            <ol className="space-y-2 text-muted-foreground text-sm pl-2">
                                <li>1. While still inside <code>C:\Windows</code>, click the <strong>Search bar</strong> in the top right corner.</li>
                                <li>2. Type <code className="bg-secondary px-1 rounded text-foreground">explorer.exe</code> and wait a moment.</li>
                                <li>3. Notice how it filters out the thousands of other files to show you exactly what you asked for.</li>
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
                        prompt="If you suspect a hacker downloaded a malicious file to a folder 5 minutes ago, what is the fastest way to find it?"
                        correctIndexes={[3]}
                        options={[
                            { text: "Sort by Name", explanation: "Incorrect. You likely don't know the name of the malware." },
                            { text: "Sort by Size", explanation: "Incorrect. Size won't tell you when it arrived." },
                            { text: "Read every file line by line.", explanation: "Incorrect. This would take hours or days." },
                            { text: "Sort the folder by 'Date modified'.", explanation: "Correct! The newest files will instantly jump to the top of the list." }
                        ]}
                    />

                    <QuizEngine
                        number={2}
                        type="single"
                        prompt="Why is it generally a bad idea to search for a common file by clicking 'This PC' and using the search bar?"
                        correctIndexes={[1]}
                        options={[
                            { text: "It will delete the file if it finds it.", explanation: "Incorrect. Searching does not delete files." },
                            { text: "It will search the entire C: drive from the root, which can take a very long time.", explanation: "Correct! It is much faster to navigate to the specific folder first, then search." },
                            { text: "The search bar only works inside the Documents folder.", explanation: "Incorrect. The search bar works in any folder." },
                            { text: "It requires an internet connection.", explanation: "Incorrect. File Explorer search is local." }
                        ]}
                    />

                    <QuizEngine
                        number={3}
                        type="multiple"
                        prompt="Select ALL the TRUE statements regarding File Explorer sorting and searching."
                        helper="Select exactly 3 options."
                        correctIndexes={[0, 3, 4]}
                        options={[
                            { text: "File metadata includes information like Date Modified and File Size.", explanation: "True. Metadata is data about the data." },
                            { text: "Sorting by 'Size' is the best way to find the most recent file.", explanation: "False. Size has no relation to the creation date." },
                            { text: "The File Explorer search bar searches the entire internet.", explanation: "False. It searches the local hard drive folder you are currently viewing." },
                            { text: "To sort a folder, your File Explorer should generally be set to 'Details' view.", explanation: "True. The Details view exposes the clickable column headers." },
                            { text: "Clicking a column header twice reverses the sorting order (e.g., A-Z to Z-A).", explanation: "True. It toggles between ascending and descending order." }
                        ]}
                    />
                </div>
            </SectionBlock>
        </div>
    );
}