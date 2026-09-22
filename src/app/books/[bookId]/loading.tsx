export default function Loading() {
  const detailRows = [0, 1, 2, 3]

  return (
    <section
      role="status"
      aria-busy="true"
      className="container mx-auto animate-pulse px-5 py-10"
    >
      <span className="sr-only">Loading…</span>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">

        {/* Cover */}
        <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8 md:p-12">
          <div className="h-80 w-56 rounded-xl bg-gray-200" />
        </div>

        {/* Info */}
        <div>
          <div className="h-9 w-2/3 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-40 rounded bg-gray-200" />

          <div className="mt-4 border-y border-gray-200 py-3">
            <div className="h-4 w-24 rounded bg-gray-200" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="h-4 w-8 rounded bg-gray-200" />
            <div className="h-7 w-24 rounded-full bg-gray-200" />
            <div className="h-7 w-20 rounded-full bg-gray-200" />
          </div>

          <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">
            {detailRows.map((row) => (
              <div key={row} className="flex gap-8">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-4 w-16 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <div className="h-12 w-28 rounded-lg bg-gray-200" />
            <div className="h-12 w-28 rounded-lg bg-gray-200" />
          </div>
        </div>

      </div>
    </section>
  )
}   
