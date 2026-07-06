import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let initialized = false;

function init() {
  if (initialized || typeof window === "undefined" || !MIXPANEL_TOKEN) return;
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: false,
    persistence: "localStorage",
  });
  initialized = true;
}

export function trackPageview(url: string) {
  init();
  if (!initialized) return;
  mixpanel.track("Page View", { url });
}

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  init();
  if (!initialized) return;
  mixpanel.track(name, properties);
}
