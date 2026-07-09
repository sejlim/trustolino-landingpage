"use client"

import { useState, useEffect } from "react"
import { useForm } from "@tanstack/react-form"
import { CheckCircleIcon, ArrowPathIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { dictionaries, type Lang } from "@/lib/i18n"
import { Countdown } from "@/components/landing/countdown"
import { CustomSelect } from "@/components/ui/custom-select"
import { CustomInput } from "@/components/ui/custom-input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { submitSignup } from "@/server/signup"
import { motion, AnimatePresence } from "framer-motion"

type Status = "idle" | "submitting" | "success"
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function SignupForm({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])
  
  const form = useForm({
    defaultValues: {
      gender: "",
      age: "",
      email: "",
      privacyConsent: false,
    },
    onSubmit: async ({ value }) => {
      setError(null)
      const ageNum = parseInt(value.age, 10)

      if (!value.gender || !value.age.trim() || !value.email.trim()) {
        setError(t.form.errorRequired)
        return
      }
      if (isNaN(ageNum) || ageNum > 100) {
        setError(t.form.errorRequired)
        return
      }
      if (ageNum < 18) {
        setError(t.form.errorAge)
        return
      }
      if (!EMAIL_RE.test(value.email.trim())) {
        setError(t.form.errorEmail)
        return
      }
      if (!value.privacyConsent) {
        setError(t.form.errorPrivacy)
        return
      }

      setStatus("submitting")
      try {
        const res = await submitSignup({
          data: {
            gender: value.gender,
            age: ageNum,
            email: value.email,
            lang
          }
        })
        if (res.success) {
          setStatus("success")
        } else {
          setStatus("idle")
          if (res.error === "duplicate") setError(t.form.errorDuplicate)
          else setError(t.form.errorGeneric)
        }
      } catch (e) {
        setStatus("idle")
        setError(t.form.errorGeneric)
      }
    }
  })

  return (
    <div 
      id="signup"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:grid-rows-[auto_1fr]">
        
        {/* COUNTDOWN (Top on mobile, Top-Right on desktop) */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-10 lg:col-start-2 lg:row-start-1">
          <div className="flex items-center gap-2 text-sm font-extrabold">
            {t.countdown.heading}
          </div>
          <Countdown lang={lang} variant="dark" />
        </div>

        {/* LEFT SIDE: FORM (Middle on mobile, Left spanning both rows on desktop) */}
        <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-primary/10 z-10">
            <motion.div
              className="h-full bg-primary"
              initial={false}
              animate={{ width: `${status === "success" ? 100 : step === 1 ? 0 : step === 2 ? 33 : 66}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                key="error-toast"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between rounded-2xl bg-destructive px-5 py-3.5 text-sm font-bold text-destructive-foreground shadow-xl"
              >
                <span>{error}</span>
                <button 
                  type="button" 
                  onClick={() => setError(null)}
                  className="shrink-0 cursor-pointer rounded-full p-1 opacity-80 transition-opacity hover:opacity-100"
                  aria-label="Schließen"
                >
                  <XMarkIcon className="size-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-1 flex-col p-6 sm:p-10 pt-8 sm:pt-12">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircleIcon className="size-9" aria-hidden />
                </span>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{t.form.successTitle}</h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {t.form.successDesc}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  form.handleSubmit()
                }}
                className="relative flex flex-1 flex-col"
                noValidate
              >
                {/* SIZER to lock minimum height without duplicating text in DOM */}
                <div className="invisible pointer-events-none min-h-[220px]" aria-hidden />

                <div className="absolute inset-0 flex flex-col">
                  <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-full flex-col gap-6"
                    >
                      <div className="mb-2 text-left">
                        <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                          {t.form.title}
                        </h2>
                        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                          {t.form.subtitle}
                        </p>
                      </div>

                      <div className="mt-auto pt-4">
                        <Button
                          type="button"
                          onClick={() => {
                            setError(null)
                            setStep(2)
                          }}
                          className="h-14 w-full rounded-full bg-accent border border-border text-accent-foreground text-base font-extrabold transition-[transform,background-color,opacity] duration-200 hover:bg-accent/90 active:scale-[0.96]"
                          size="lg"
                        >
                          {t.form.submit}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-full flex-col gap-6"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <form.Field
                          name="gender"
                          children={(field) => (
                            <div className="flex flex-col gap-2">
                              <Label htmlFor={field.name}>{t.form.gender}</Label>
                              <CustomSelect
                                options={[
                                  { value: "male", label: t.form.genderMale },
                                  { value: "female", label: t.form.genderFemale },
                                  { value: "diverse", label: t.form.genderDiverse },
                                ]}
                                value={field.state.value}
                                onChange={field.handleChange}
                                placeholder={t.form.genderPlaceholder}
                                className="bg-white text-zinc-900 border-zinc-200"
                              />
                            </div>
                          )}
                        />
                        <form.Field
                          name="age"
                          children={(field) => (
                            <div className="flex flex-col gap-2">
                              <Label htmlFor={field.name}>{t.form.age}</Label>
                              <CustomInput
                                id={field.name}
                                type="number"
                                min="18"
                                max="100"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder={t.form.agePlaceholder}
                                className="bg-white text-zinc-900 border-zinc-200"
                                required
                              />
                            </div>
                          )}
                        />
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground bg-primary/5 p-4 rounded-xl border border-border">
                        {t.form.metricsNote}
                      </p>

                      <div className="mt-auto flex gap-4 flex-col sm:flex-row pt-4">
                        <Button
                          type="button"
                          onClick={() => {
                            setError(null)
                            setStep(1)
                          }}
                          variant="outline"
                          className="h-14 w-full sm:w-1/3 rounded-full text-base font-extrabold"
                          size="lg"
                        >
                          {t.form.back}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            const gender = form.getFieldValue("gender")
                            const age = form.getFieldValue("age")
                            if (!gender || !age.trim()) {
                              setError(t.form.errorRequired)
                              return
                            }
                            const ageNum = parseInt(age, 10)
                            if (isNaN(ageNum) || ageNum > 100) {
                              setError(t.form.errorRequired)
                              return
                            }
                            if (ageNum < 18) {
                              setError(t.form.errorAge)
                              return
                            }
                            setError(null)
                            setStep(3)
                          }}
                          className="h-14 w-full sm:w-2/3 rounded-full bg-accent border border-border text-accent-foreground text-base font-extrabold transition-[transform,background-color,opacity] duration-200 hover:bg-accent/90 active:scale-[0.96]"
                          size="lg"
                        >
                          {t.form.next}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-full flex-col gap-6"
                    >
                      <div className="grid gap-5 sm:grid-cols-1">
                        <form.Field
                          name="email"
                          children={(field) => (
                            <div className="flex flex-col gap-2">
                              <Label htmlFor={field.name}>{t.form.email}</Label>
                              <CustomInput
                                id={field.name}
                                type="email"
                                autoComplete="email"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder={t.form.emailPlaceholder}
                                className="bg-white text-zinc-900 border-zinc-200"
                                required
                              />
                            </div>
                          )}
                        />
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground bg-primary/5 p-4 rounded-xl border border-border">
                        {t.form.emailNote}
                      </p>

                      <form.Field
                        name="privacyConsent"
                        children={(field) => (
                          <Label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground group">
                            <Checkbox
                              checked={field.state.value}
                              onCheckedChange={(c) => field.handleChange(c === true)}
                              className="mt-0.5"
                            />
                            <span>
                              {t.form.privacyConsentBefore}{" "}
                              <a
                                href={lang === "de" ? "/datenschutz" : "/en/privacy"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                              >
                                {t.form.privacyConsentLink}
                              </a>{" "}
                              {t.form.privacyConsentAfter}
                            </span>
                          </Label>
                        )}
                      />

                      <div className="mt-auto flex gap-4 flex-col sm:flex-row pt-4">
                        <Button
                          type="button"
                          onClick={() => {
                            setError(null)
                            setStep(2)
                          }}
                          variant="outline"
                          className="h-14 w-full sm:w-1/3 rounded-full text-base font-extrabold"
                          size="lg"
                        >
                          {t.form.back}
                        </Button>
                        
                        <form.Subscribe
                          selector={(state) => [state.canSubmit, state.isSubmitting]}
                          children={([canSubmit, isSubmitting]) => (
                            <Button
                              type="submit"
                              disabled={status === "submitting" || !canSubmit}
                              className="h-14 w-full sm:w-2/3 rounded-full bg-accent border border-border text-accent-foreground text-base font-extrabold transition-[transform,background-color,opacity] duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.96]"
                              size="lg"
                            >
                              {status === "submitting" ? (
                                <>
                                  <ArrowPathIcon className="size-5 animate-spin" aria-hidden />
                                  {t.form.submitting}
                                </>
                              ) : (
                                <>
                                  {t.form.submit}
                                </>
                              )}
                            </Button>
                          )}
                        />
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* INFO (Bottom on mobile, Bottom-Right on desktop) */}
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border bg-primary/5 p-6 text-sm leading-relaxed text-muted-foreground sm:p-8 lg:col-start-2 lg:row-start-2">
          <p>{t.form.couponNote}</p>
        </div>

      </div>
    </div>
  )
}
