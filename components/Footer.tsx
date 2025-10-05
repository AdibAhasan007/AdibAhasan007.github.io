// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-6 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-200 hover:text-indigo-400 transition">
          Adib Ahasan Chowdhury
        </span>
        . All rights reserved.
      </p>
    </footer>
  )
}
