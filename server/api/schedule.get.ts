import ICAL from 'ical.js'

export default defineEventHandler(async () => {
  const icsUrl = 'https://cloud.timeedit.net/liu/web/schema/ri696Q86Y33Z40Q5X3813QX4y9Zn631Z9532834Q487.ics'

  const res = await fetch(icsUrl)
  const icsText = await res.text()

  const parsed = ICAL.parse(icsText)
  const comp = new ICAL.Component(parsed)
  const vevents = comp.getAllSubcomponents('vevent')

  const events = vevents.map((vevent) => {
    const ev = new ICAL.Event(vevent)

    const descLines = (ev.description ?? '')
      .split(/\\n|\n/)
      .map(l => l.trim())
      .filter(Boolean)

    const courses: string[] = []
    const teachers: string[] = []
    let type = ''
    let info = ''

    for (const line of descLines) {
      const colon = line.indexOf(': ')
      if (colon === -1) continue
      const key = line.substring(0, colon).trim()
      const val = line.substring(colon + 2).trim()

      switch (key) {
        case 'Kurs':              courses.push(val);  break
        case 'Lärare':            teachers.push(val); break
        case 'Undervisningstyp':  type = val;         break
        case 'Information':       info = val;         break
      }
    }

    return {
      uid: ev.uid,
      summary: ev.summary,
      location: ev.location?.replace(/^Lokal:\s*/i, '') ?? '',
      start: ev.startDate.toJSDate().toISOString(),
      end: ev.endDate.toJSDate().toISOString(),
      description: ev.description,
      course: courses[0] ?? '',
      courses,
      teachers,
      type,
      info,
      mapUrl: ev.component.getFirstPropertyValue('url') ?? '',
    }
  })

  return events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
})