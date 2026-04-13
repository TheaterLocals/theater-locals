import { redirect } from "next/navigation";

// Content has been integrated into /about (§③ How Tonight Works section).
// Redirect visitors to the canonical location.
export default function HowItWorksPage() {
  redirect("/about");
}
