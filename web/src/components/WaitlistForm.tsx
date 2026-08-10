'use client'

import { useActionState } from 'react'
import { joinWaitlist, type WaitlistState } from '@/app/actions/waitlist'

const initial: WaitlistState | null = null

export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial)

  if (state?.ok) {
    return (
      <p className="mx-auto mt-8 max-w-md text-[1.05rem] font-bold text-gain">
        {state.message}
      </p>
    )
  }

  return (
    <div className="mx-auto mt-8 max-w-lg">
      <form className="flex flex-wrap justify-center gap-2.5" action={action}>
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          disabled={pending}
          className="min-w-[220px] flex-1 rounded-full border border-line bg-white px-5 py-3.5 text-ink outline-none placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-gain disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full bg-gain px-6 py-3.5 text-[0.95rem] font-extrabold text-ink transition hover:bg-gain-dark hover:text-white disabled:opacity-60"
        >
          {pending ? 'Joining…' : 'Join waitlist'}
        </button>
      </form>
      {state && !state.ok && (
        <p className="mt-3 text-[0.9rem] font-semibold text-red-600" role="alert">
          {state.message}
        </p>
      )}
    </div>
  )
}
