import React, { useActionState, useRef } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export interface QuizOption {
    text: string;
    explanation: string;
}

export interface QuizEngineProps {
    number: number;
    prompt: string;
    helper?: string;
    type?: 'single' | 'multiple';
    options: QuizOption[];
    correctIndexes: number[]; // Array to support both single [1] and multiple [0, 2]
}

type QuizState = {
    status: 'idle' | 'success' | 'error';
    message: string | React.ReactNode;
} | null;

export function QuizEngine({ number, prompt, helper, type = 'single', options, correctIndexes }: QuizEngineProps) {
    const formRef = useRef<HTMLFormElement>(null);

    const [quizState, submitAction, isPending] = useActionState<QuizState, FormData>(
        async (prevState, formData) => {
            const intent = formData.get('intent');
            if (intent === 'reset') {
                formRef.current?.reset();
                return null;
            }

            // Extract answers (handles both single radio and multiple checkboxes)
            const answers = formData.getAll(`q${number}`).map(val => parseInt(val.toString(), 10));

            if (answers.length === 0) return { status: 'idle', message: 'Please select an answer.' };

            const isCorrect =
                answers.length === correctIndexes.length &&
                correctIndexes.every(idx => answers.includes(idx));

            if (isCorrect) {
                return { status: 'success', message: 'Perfect! You got it right.' };
            }

            // Detailed Error Feedback
            return {
                status: 'error',
                message: (
                    <div className="space-y-2 mt-2">
                        <p><strong>Review your choices:</strong></p>
                        <ul className="space-y-2 list-disc pl-5">
                            {answers.map(idx => (
                                <li key={idx} className="text-sm">
                                    <span className="font-medium text-foreground">{options[idx].text}</span>
                                    <span className="text-muted-foreground block mt-0.5">{options[idx].explanation}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            };
        },
        null
    );

    return (
        <Card className="p-5 md:p-8 shadow-lg w-full max-w-full overflow-hidden border-border bg-card">
            <div className="mb-6">
                <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground border border-border">
                    Question {number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">{prompt}</h3>
                {helper && <p className="text-sm text-muted-foreground">{helper}</p>}
            </div>

            <form action={submitAction} ref={formRef}>
                <div className="space-y-3 mb-6">
                    {options.map((option, idx) => (
                        <label
                            key={idx}
                            className={`flex cursor-pointer items-start gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50 ${type === 'single' ? 'has-[:checked]:border-primary has-[:checked]:bg-primary/5' : 'has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5'}`}
                        >
                            {type === 'single' ? (
                                <input type="radio" name={`q${number}`} value={idx} className="mt-1 h-5 w-5 accent-primary shrink-0" />
                            ) : (
                                <Checkbox name={`q${number}`} value={idx.toString()} className="mt-1 h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                            )}
                            <span className="text-sm md:text-base text-foreground leading-relaxed break-words">{option.text}</span>
                        </label>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button type="submit" name="intent" value="submit" disabled={isPending || quizState?.status === 'success'} className="w-full sm:w-auto font-bold px-8">
                        {isPending ? 'Checking...' : 'Check Answer'}
                    </Button>

                    {(quizState?.status === 'error' || quizState?.status === 'success') && (
                        <Button type="submit" name="intent" value="reset" variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Reset
                        </Button>
                    )}
                </div>
            </form>

            {quizState && quizState.status !== 'idle' && (
                <div className={`mt-6 rounded-2xl border p-5 animate-in slide-in-from-top-2 ${quizState.status === 'success' ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-destructive/30 bg-destructive/10'}`}>
                    <div className={`mb-3 flex items-center gap-2 font-bold ${quizState.status === 'success' ? 'text-emerald-500' : 'text-destructive'}`}>
                        {quizState.status === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                        {quizState.status === 'success' ? 'Correct' : 'Not quite'}
                    </div>
                    <div className="text-sm text-foreground leading-relaxed">
                        {quizState.message}
                    </div>
                </div>
            )}
        </Card>
    );
}