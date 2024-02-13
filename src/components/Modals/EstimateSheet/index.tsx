import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import Stepper from './Stepper'
import SelectableBadge from './SelectableBadge'
import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'
import { ArrowRight, Check, Send } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import Loading from '@/components/Animations/Loading'

type EstimateSheetData = {
    type?: 'APP' | 'WEBSITE' | 'WEBAPP' | 'OTHER'
    budget?: number[]
    description?: string

    name?: string
    companyName?: string
    tlf?: string
    email?: string
}

export default function EstimateSheet({
    children,
}: {
    children: React.ReactNode
}) {
    const [step, setStep] = useState(1)
    const [submitting, setSubmitting] = useState(false)
    const [sent, setSent] = useState(false)
    const [data, setData] = useState<EstimateSheetData>({
        budget: [2000],
    })

    function selectAppType(type: 'APP' | 'WEBSITE' | 'WEBAPP' | 'OTHER') {
        setData({ ...data, type })
        setStep(2)
    }

    function NextButton() {
        return (
            <div className="flex flex-row justify-end">
                <button
                    onClick={() => setStep(step + 1)}
                    className="p-2 transition-all border-2 rounded-md border-main text-main hover:bg-main hover:text-white"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        )
    }

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (submitting) return
        setSubmitting(true)
        let res = await fetch('/api/estimate', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        if (res.status != 200) {
            setSubmitting(false)
            alert('An error occured, please try again later.')
            return
        }

        setSubmitting(false)
        setSent(true)
    }

    return (
        <Sheet
            onOpenChange={(open) => {
                if (open == false) {
                    setStep(1)
                    setSent(false)
                    setData({
                        budget: [10000],
                    })
                }
            }}
        >
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="p-10 z-[100] w-[600px] overflow-y-scroll">
                {sent == false ? (
                    <form
                        className="flex flex-col gap-8 mt-8"
                        onSubmit={submit}
                    >
                        <div>
                            <Stepper steps={4} step={step} setStep={setStep} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold text-main">
                                Estimate the price of your project
                            </h1>
                            <p className="mt-2 text-gray-500 text-md">
                                Please fill out the form below and we will get
                                to you as soon as possible with an estimate on
                                your project.
                            </p>
                            <hr className="mt-4 border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2
                                    onClick={() => setStep(1)}
                                    className={cn(
                                        'text-lg font-medium text-main',
                                        step != 1 &&
                                            'opacity-50 font-medium cursor-pointer'
                                    )}
                                >
                                    Which type of product is it?
                                </h2>
                                {step == 1 && (
                                    <div className="flex flex-col gap-2">
                                        <p className="mt-2 text-gray-500 text-mds">
                                            They have different complexities and
                                            therefore different prices.
                                        </p>
                                        <div className="flex flex-row flex-wrap items-center gap-4 mt-4">
                                            <SelectableBadge
                                                tooltip="An app is an application that can be downloaded from the App Store or Google Play Store."
                                                selected={data.type == 'APP'}
                                                text="App"
                                                onSelect={() =>
                                                    selectAppType('APP')
                                                }
                                            />
                                            <SelectableBadge
                                                tooltip="A regular website without login or other complex functions, e.g. marketing agencies."
                                                selected={
                                                    data.type == 'WEBSITE'
                                                }
                                                text="Website"
                                                onSelect={() =>
                                                    selectAppType('WEBSITE')
                                                }
                                            />
                                            <SelectableBadge
                                                tooltip="Website with larger complex functions, e.g. webshops, SaaS platforms, etc."
                                                selected={data.type == 'WEBAPP'}
                                                text="Web app"
                                                onSelect={() =>
                                                    selectAppType('WEBAPP')
                                                }
                                            />
                                            <SelectableBadge
                                                tooltip="If you have a project that does not fit into any of the other categories, choose this one."
                                                selected={data.type == 'OTHER'}
                                                text="Other"
                                                onSelect={() =>
                                                    selectAppType('OTHER')
                                                }
                                            />
                                        </div>
                                        <NextButton />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2
                                    onClick={() => setStep(2)}
                                    className={cn(
                                        'text-lg font-medium text-main',
                                        step != 2 &&
                                            'opacity-50 font-medium cursor-pointer'
                                    )}
                                >
                                    What is your budget?
                                </h2>
                                {step == 2 && (
                                    <div className="flex flex-col gap-2">
                                        <p className="mt-2 text-gray-500 text-mds">
                                            It is important to have a realistic
                                            budget as it helps us to provide a
                                            more accurate estimate.
                                        </p>
                                        <div className="flex flex-col gap-3 mt-4">
                                            <Slider
                                                min={100}
                                                max={25000}
                                                step={100}
                                                value={data.budget}
                                                onValueChange={(value) =>
                                                    setData({
                                                        ...data,
                                                        budget: value,
                                                    })
                                                }
                                            />
                                            <p className="font-medium text-main">
                                                $
                                                {data.budget?.[0]
                                                    .toString()
                                                    .replace(
                                                        /\B(?=(\d{3})+(?!\d))/g,
                                                        '.'
                                                    )}{' '}
                                            </p>
                                        </div>
                                        <NextButton />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2
                                    onClick={() => setStep(3)}
                                    className={cn(
                                        'text-lg font-medium text-main',
                                        step != 3 &&
                                            'opacity-50 font-medium cursor-pointer'
                                    )}
                                >
                                    Describe your project
                                </h2>
                                {step == 3 && (
                                    <div className="flex flex-col gap-2">
                                        <p className="mt-2 text-gray-500 text-mds">
                                            Give us as many details as possible
                                            your project so we can give you one
                                            more accurate estimate.
                                        </p>
                                        <div className="flex items-center gap-4 mt-2 mb-2">
                                            <Textarea
                                                placeholder="Describe your project..."
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        description:
                                                            e.target.value,
                                                    })
                                                }
                                                rows={5}
                                            />
                                        </div>
                                        <NextButton />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2
                                    onClick={() => setStep(4)}
                                    className={cn(
                                        'text-lg font-medium text-main',
                                        step != 4 &&
                                            'opacity-50 font-medium cursor-pointer'
                                    )}
                                >
                                    Contact information
                                </h2>
                                {step == 4 && (
                                    <div className="flex flex-col gap-2">
                                        <p className="mt-2 text-gray-500 text-mds">
                                            We will return as soon as possible
                                            to you with an estimate of your
                                            project.
                                        </p>
                                        <div className="flex flex-col items-center gap-2 mt-2 mb-2 md:gap-4">
                                            <div className="flex flex-col w-full gap-2 md:flex-row">
                                                <Input
                                                    className="flex-1"
                                                    placeholder="Name"
                                                    required
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                                <Input
                                                    className="flex-1"
                                                    placeholder="Company"
                                                    required
                                                    value={data.companyName}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            companyName:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="flex flex-col w-full gap-2 md:flex-row">
                                                <Input
                                                    className="flex-1"
                                                    placeholder="Phone number"
                                                    required
                                                    type="tel"
                                                    value={data.tlf}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            tlf: e.target.value,
                                                        })
                                                    }
                                                />
                                                <Input
                                                    className="flex-1"
                                                    placeholder="E-mail"
                                                    required
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-end mt-4 md:mt-0">
                                            <button
                                                type="submit"
                                                className={cn(
                                                    'flex flex-row items-center justify-center gap-2 p-2 px-6 transition-all border-2 rounded-md border-main text-main hover:bg-main hover:text-white',
                                                    submitting &&
                                                        'bg-main cursor-wait text-white'
                                                )}
                                            >
                                                {submitting ? (
                                                    <Loading
                                                        size={'xs'}
                                                        color="#ffffff"
                                                    />
                                                ) : (
                                                    <>
                                                        <p className="font-medium">
                                                            Send inquiry
                                                        </p>
                                                        <Send size={20} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-main">
                                    <Check size={32} color="white" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold text-main">
                                Thank you for your inquiry!
                            </h2>
                            <p className="text-gray-500 text-mds">
                                We will get back to you as soon as possible an
                                estimate on your project.
                            </p>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
