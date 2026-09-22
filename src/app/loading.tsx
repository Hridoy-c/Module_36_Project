const BookCardSkeleton = () => (
  <div className="rounded-2xl border border-gray-200 bg-white p-5">
    <div className="h-56 rounded-2xl bg-gray-200" />

    <div className="mt-5 flex gap-3">
      <div className="h-7 w-24 rounded-full bg-gray-200" />
      <div className="h-7 w-20 rounded-full bg-gray-200" />
    </div>

    <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
    <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

    <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-300 pt-4">
      <div className="h-4 w-16 rounded bg-gray-200" />
      <div className="h-4 w-14 rounded bg-gray-200" />
    </div>
  </div>
)

export default function Loading() {
  return (
    <div role="status" aria-busy="true" className="animate-pulse">
      <span className="sr-only">Loading…</span>

      {/* Banner skeleton */}
      <section className="container mx-auto px-5 py-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-gray-100 px-8 py-10 md:flex-row md:px-16 md:py-16">
          <div className="flex w-full flex-col items-center md:w-auto md:items-start">
            <div className="h-9 w-72 max-w-full rounded bg-gray-200" />
            <div className="mt-3 h-9 w-56 max-w-full rounded bg-gray-200" />
            <div className="mt-8 h-12 w-36 rounded-lg bg-gray-200" />
          </div>

          <div className="h-64 w-44 rounded-xl bg-gray-200 md:h-72 md:w-72 lg:h-80 lg:w-96" />
        </div>
      </section>

      {/* Books skeleton */}
      <section className="container mx-auto px-5 py-8">
        <div className="mx-auto h-9 w-32 rounded bg-gray-200" />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}