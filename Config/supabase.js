require('dotenv').config()
const {createClient} = require('@supabase/supabase-js')

const db = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY)

module.exports = {db}