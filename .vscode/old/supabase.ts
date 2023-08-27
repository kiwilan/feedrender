// import type { SupabaseClient } from '@supabase/supabase-js'
// import { createClient } from '@supabase/supabase-js'

// type Table = 'users'

// export class Supabase {
//   protected constructor(
//     protected client: SupabaseClient,
//   ) {}

//   public static make(): Supabase {
//     const dotenv = globalThis.dotenv()
//     const client = createClient(dotenv.SUPABASE_URL!, dotenv.SUPABASE_KEY!, {
//       auth: {
//         persistSession: false,
//       },
//     })
//     const self = new Supabase(client)

//     return self
//   }

//   public async table(name: Table) {
//     this.client.rpc('create_table', { name: 'cache', columns: ['id SERIAL PRIMARY KEY', 'url TEXT', 'token TEXT'] })

//     const { error } = await this.client
//       .from('countries')
//       .insert({ name: 'United Kingdom' })

//     console.error(error)
//   }

//   public async all(name: Table) {
//     const { data, error } = await this.client.from('countries').select('*')

//     console.error(error)
//     console.error(data)
//   }
// }
