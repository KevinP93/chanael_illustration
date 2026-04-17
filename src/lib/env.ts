const vercelProductionUrl =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

const fallbackSiteUrl = vercelProductionUrl
  ? `https://${vercelProductionUrl}`
  : "http://localhost:3000";

export const siteEnv = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
};

export function hasSupabaseEnv() {
  return Boolean(siteEnv.supabaseUrl && siteEnv.supabaseAnonKey);
}

export function hasCalendlyEnv() {
  return Boolean(siteEnv.calendlyUrl);
}
