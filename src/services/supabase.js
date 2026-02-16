
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sjdxekioziyduintsadm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZHhla2lveml5ZHVpbnRzYWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5Nzg0MTMsImV4cCI6MjA4NjU1NDQxM30.HqnVdv0umFTItuXbwsu127kymQtzV7W1DyYu-VoZdto";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase