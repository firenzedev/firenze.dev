import { supabase } from "@/lib/supabaseClient";


export function getPublicImageUrl(path: string, bucket = "events"): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}