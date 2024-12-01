import { StorageClient } from '@supabase/storage-js'

const STORAGE_URL = process.env.SUPABASE_STORAGE_URL || 'default_supabase_url'
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'default_service_key'

export const storage = new StorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
})