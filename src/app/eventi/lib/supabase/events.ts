import { supabase } from '@/lib/supabaseClient'
import { RawEvent } from './types'
import { FDevEvent } from '../types'
import { convertRawEvent, convertRawEvents } from './mappers'

export async function fetchAllEvents(): Promise<FDevEvent[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: false })

  if (error) {
    console.error('Errore nel recupero degli eventi:', error.message)
    throw new Error(error.message)
  }

  return data ? convertRawEvents(data as RawEvent[]) : []
}

export async function fetchCurrentEvents(): Promise<FDevEvent[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('current', true)
    .order('date', { ascending: true })

  if (error) {
    console.error('Errore nel recupero degli eventi attuali:', error.message)
    throw new Error(error.message)
  }

  return data ? convertRawEvents(data as RawEvent[]) : []
}

export async function fetchEventById(id: string): Promise<FDevEvent | null> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(`Errore nel recupero dell'evento con ID ${id}:`, error.message)
    throw new Error(error.message)
  }

  return data ? convertRawEvent(data as RawEvent) : null
}
