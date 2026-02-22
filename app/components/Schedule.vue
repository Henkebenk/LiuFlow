<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { LucideMapPin, LucideUser } from 'lucide-vue-next'

const { data: events, pending, error } = await useFetch('/api/schedule')

const props = defineProps<{
  courses?: string[]
  oneDay?: boolean
}>()

const grouped = computed(() => {
  if (!events.value) return {}

  const now = new Date()
  const allEvents = events.value as any[]

  // If oneDay is enabled, find the date of the next upcoming event
  let nextDayKey: string | null = null

  if (props.oneDay) {
    const upcomingEvents = allEvents
      .filter(event => new Date(event.end) >= now)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

    if (upcomingEvents.length > 0) {
      const firstEventDate = new Date(upcomingEvents[0].start)
      nextDayKey = `${firstEventDate.getFullYear()}-${firstEventDate.getMonth()}-${firstEventDate.getDate()}`
    }
  }

  // Fitler events
  const filtered = allEvents.filter(event => {
    const start = new Date(event.start)
    const end = new Date(event.end)

    // Filter events that have already been
    if (end < now) return false

    // Filter by selected courses
    if (
      props.courses?.length &&
      !props.courses.some(course => event.summary.includes(course))
    ) {
      return false
    }

    // If oneDay mode is on, only keep events from the upcoming
    if (props.oneDay && nextDayKey !== null) {
      const eventKey = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`
      if (eventKey !== nextDayKey) return false
    }

    return true
  })

  // Group events by date string
  return filtered.reduce((acc: Record<string, any[]>, event) => {
    const dateLabel = new Date(event.start).toLocaleDateString('sv-SE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    if (!acc[dateLabel]) acc[dateLabel] = []
    acc[dateLabel].push(event)

    return acc
  }, {})
})

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const typeColors: Record<string, string> = {
  'Seminarium': 'bg-blue-100 text-blue-800',
  'Inlämning': 'bg-orange-100 text-orange-800',
  'Föreläsning': 'bg-green-100 text-green-800',
}
</script>

<template>
  <div class="flex flex-row gap-6 h-full">
    <div v-if="pending" class="space-y-3">
      <Skeleton class="h-24 w-full" v-for="n in 4" :key="n" />
    </div>

    <p v-else-if="error" class="text-destructive">Kunde inte hämta schema.</p>

    <div v-else class="flex flex-row gap-2 w-full h-full items-start">
      <div class="flex flex-col gap-6 grow h-full overflow-auto scrollbar-hide">
        <div v-for="(dayEvents, date) in grouped" :key="date" class="flex flex-col gap-2">

          <h2 class="text-sm font-semibold uppercase text-muted-foreground tracking-wide">{{ date }}</h2>

          <Card v-for="event in dayEvents" :key="event.uid" class="hover:shadow-md transition-shadow">
            <CardHeader class="pb-2">
              <div class="flex items-start justify-between">
                <CardTitle class="text-base">{{ event.summary }}</CardTitle>
                <span class="text-sm text-muted-foreground">
                  {{ formatTime(event.start) }}–{{ formatTime(event.end) }}
                </span>
              </div>
              <CardDescription v-if="event.info" class="text-muted-foreground">
                {{ event.info }}
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm">
              <div class="flex items-center gap-2 flex-wrap">
                <Badge v-if="event.type" :class="typeColors[event.type] ?? 'bg-gray-100 text-gray-800'"
                  class="text-xs font-medium px-2 py-0.5 rounded-full border-0">
                  {{ event.type }}
                </Badge>
                <span v-if="event.location" class="text-muted-foreground flex items-center gap-1">
                  <a v-if="event.mapUrl" :href="event.mapUrl" target="_blank" class="underline flex items-center">
                    <LucideMapPin class="w-4 h-4" /> {{ event.location }}
                  </a>
                  <span v-else>
                    <LucideMapPin class="w-4 h-4" /> {{ event.location }}
                  </span>
                </span>
              </div>

              <div v-if="event.teachers?.length" class="text-muted-foreground flex items-center gap-1">
                <LucideUser class="w-4 h-4" />
                <span class="line-clamp-1">{{ event.teachers.join(', ') }}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>