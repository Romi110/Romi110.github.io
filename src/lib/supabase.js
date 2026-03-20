import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
  Usage in any .astro page or script:
    import { supabase } from '../lib/supabase.js';

  Example leaderboard query:
    const { data, error } = await supabase
      .from('scores')
      .select('name, score')
      .order('score', { ascending: false })
      .limit(10);

  Required env vars (add to .env.local locally, repo secrets in GitHub Actions):
    PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
    PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
*/
