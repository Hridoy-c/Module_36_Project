const ListedCardSkeleton = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row">
    <div className="h-56 w-full shrink-0 rounded-2xl bg-gray-200 sm:h-auto sm:w-56" />

    <div className="flex-1">
      <div className="h-7 w-2/3 rounded bg-gray-200" />
      <div className="mt-3 h-4 w-1/3 rounded bg-gray-200" />

      <div className="mt-4 flex gap-3">
        <div className="h-7 w-24 rounded-full bg-gray-200" />
        <div className="h-7 w-20 rounded-full bg-gray-200" />
      </div>

      <div className="mt-4 flex gap-6">
        <div className="h-4 w-32 rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
      </div>

      <div className="mt-4 flex gap-3 border-t border-gray-200 pt-4">
        <div className="h-8 w-28 rounded-full bg-gray-200" />
        <div className="h-8 w-24 rounded-full bg-gray-200" />
        <div className="h-8 w-28 rounded-full bg-gray-200" />
      </div>
    </div>
  </div>
)

export default function Loading() {
  return (
    <div role="status" aria-busy="true" className="animate-pulse">
      <span className="sr-only">Loading…</span>

      {/* Title bar */}
      <div className="container mx-auto mt-6 h-[76px] rounded-2xl bg-gray-100" />

      {/* Sort dropdown */}
      <div className="mt-10 flex justify-center">
        <div className="h-11 w-40 rounded-lg bg-gray-200" />
      </div>

      {/* Tabs */}
      <div className="container mx-auto mt-10">
        <div className="flex gap-2">
          <div className="h-10 w-40 rounded-t-lg bg-gray-200" />
          <div className="h-10 w-44 rounded-t-lg bg-gray-100" />
        </div>

        <div className="space-y-6 border border-gray-200 p-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <ListedCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}