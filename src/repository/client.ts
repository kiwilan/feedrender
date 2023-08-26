import { createClient } from '@supabase/supabase-js'
import { Dotenv } from '@/services/dotenv'

export function client() {
  const dotenv = Dotenv.load()

  return createClient(dotenv.SUPABASE_URL!, dotenv.SUPABASE_KEY!)
}
