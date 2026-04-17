import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { hasSupabaseEnv, siteEnv } from "@/lib/env";

let client: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (!hasSupabaseEnv()) {
    return null;
  }

  if (!client) {
    client = createBrowserClient(
      siteEnv.supabaseUrl!,
      siteEnv.supabaseAnonKey!,
    );
  }

  return client;
}
