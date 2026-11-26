// Page analytics: counts page visits and the campaign that sent them (utm_* tags, e.g. the
// Simply Remote app's "More from us" banner). PostHog, cookieless: nothing is stored on the
// device (persistence "memory"), no session recording, no clicks or text captured, and every
// address loses its query string except the utm_* tags. Skipped when Do Not Track is on.
(function () {
  var KEY = "phc_pRoyQPcpPqHreuDXPsobjE8sdodhGPMwrZB9zRTFXtRK";
  var SITE = "pulse";
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
  if (!/^https:$/.test(location.protocol) || /^(localhost|127\.|\[::1\])/.test(location.hostname)) return;

  function scrub(raw) {
    if (typeof raw !== "string") return raw;
    try {
      var u = new URL(raw);
      var keep = new URLSearchParams();
      u.searchParams.forEach(function (v, k) { if (/^utm_[a-z]+$/.test(k)) keep.set(k, v); });
      var q = keep.toString();
      return u.origin + u.pathname + (q ? "?" + q : "");
    } catch (e) { return raw; }
  }

  // PostHog's standard loader snippet (queues calls until array.js arrives).
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init(KEY, {
    api_host: "https://us.i.posthog.com",
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: false,
    autocapture: false,
    disable_session_recording: true,
    disable_surveys: true,
    before_send: function (event) {
      if (!event || !event.properties) return event;
      ["$current_url", "$referrer", "$initial_current_url"].forEach(function (k) {
        if (k in event.properties) event.properties[k] = scrub(event.properties[k]);
      });
      return event;
    },
    loaded: function (ph) { ph.register({ site: SITE }); },
  });
  window.posthog.register({ site: SITE });
})();
