import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to my application</h1>
      <Counter/>
    </main>
  )
}
