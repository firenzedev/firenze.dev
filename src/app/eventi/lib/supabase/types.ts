export type RawEvent = {
    id: string
    title: string
    subtitle: string
    icon: string
    image: string
    current?: boolean
    abstract: string
    date: string 
    place: string | null
    sponsor?: string
    address: string
    eventbriteId?: string
    eventbriteLink?: string
    externalLink?: string
    ticketTailorId?: number
    type: string
    hideSponsorInNetworking?: boolean
  }