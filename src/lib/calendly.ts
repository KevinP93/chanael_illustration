export function buildCalendlyEmbedUrl(
  baseUrl: string,
  params?: { name?: string; email?: string },
) {
  const url = new URL(baseUrl);

  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "fbf7f2");
  url.searchParams.set("text_color", "111111");
  url.searchParams.set("primary_color", "b66f59");

  if (params?.name) {
    url.searchParams.set("name", params.name);
  }

  if (params?.email) {
    url.searchParams.set("email", params.email);
  }

  return url.toString();
}
