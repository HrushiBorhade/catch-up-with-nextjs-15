import { createUser } from "@/app/action";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState);
  return (
    <form action={formAction} className="flex flex-col gap-2 w-sm">
      <label htmlFor="email">Email</label>
      <input className="border" type="text" id="email" name="email" required />
      <p aria-live="polite">{state?.message}</p>
      <button className="border" disabled={pending}>Sign up</button>
    </form>
  );
}

