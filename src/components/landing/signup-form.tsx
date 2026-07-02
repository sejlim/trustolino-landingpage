"use client"

import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { CheckCircleIcon, ArrowPathIcon } from "@heroicons/react/16/solid"
import { dictionaries, type Lang } from "@/lib/i18n"
import { Countdown } from "@/components/landing/countdown"
import { CustomSelect } from "@/components/ui/custom-select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { submitSignup } from "@/server/signup"

type Status = "idle" | "submitting" | "success"
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function SignupForm({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  
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
      if (isNaN(ageNum) || ageNum < 14 || ageNum > 100) {
        setError(t.form.errorRequired) // Or a specific age error
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
      className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-card lg:max-w-none"
    >
          {/* Countdown banner */}
          <div className="flex flex-col items-center gap-3 bg-primary px-6 py-5 text-primary-foreground sm:py-6">
            <div className="flex items-center gap-2 text-sm font-extrabold">
              {t.countdown.heading}
            </div>
            <Countdown lang={lang} variant="dark" />
          </div>

          <div className="p-6 sm:p-10">
            {status === "success" ? (
              <div 
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircleIcon className="size-9" aria-hidden />
                </span>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{t.form.successTitle}</h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {t.form.successDesc}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7 text-center">
                  <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {t.form.title}
                  </h2>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {t.form.subtitle}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                  }}
                  className="flex flex-col gap-5"
                  noValidate
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
                          />
                        </div>
                      )}
                    />
                    <form.Field
                      name="age"
                      children={(field) => (
                        <div className="flex flex-col gap-2">
                          <Label htmlFor={field.name}>{t.form.age}</Label>
                          <Input
                            id={field.name}
                            type="number"
                            min="14"
                            max="100"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder={t.form.agePlaceholder}
                            className="h-11 rounded-xl"
                            required
                          />
                        </div>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-1">
                    <form.Field
                      name="email"
                      children={(field) => (
                        <div className="flex flex-col gap-2">
                          <Label htmlFor={field.name}>{t.form.email}</Label>
                          <Input
                            id={field.name}
                            type="email"
                            autoComplete="email"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder={t.form.emailPlaceholder}
                            className="h-11 rounded-xl"
                            required
                          />
                        </div>
                      )}
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl bg-destructive/10 px-4 py-2.5 text-sm font-bold text-destructive" role="alert">
                      {error}
                    </p>
                  )}

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
                            href={lang === "de" ? "/datenschutz" : "/en/privacy-policy"}
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

                  <div className="flex flex-col gap-2 rounded-xl bg-primary/5 p-4 text-xs leading-relaxed text-muted-foreground">
                    <p>{t.form.emailNote}</p>
                    <p>{t.form.couponNote}</p>
                  </div>

                  <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                      <Button
                        type="submit"
                        disabled={status === "submitting" || !canSubmit}
                        className="mt-1 h-13 w-full rounded-full text-base font-extrabold transition-[transform,opacity] duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.96]"
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
                </form>
              </>
            )}
          </div>
    </div>
  )
}
