module.exports = {
  lambdaSidebar: [
    {
      type: "link",
      label: "← Back to main docs",
      href: "/docs",
    },
    "lambda",
    {
      collapsed: false,
      type: "category",
      label: "CLI",
      items: [
        "lambda/cli",
        "lambda/cli/sites",
        "lambda/cli/functions",
        "lambda/cli/render",
        "lambda/cli/still",
        "lambda/cli/policies",
        "lambda/cli/regions",
        "lambda/cli/quotas",
      ],
    },
    "lambda/setup",
    "lambda/permissions",
    "lambda/region-selection",
    "lambda/concurrency",
    "lambda/runtime",
    "lambda/disk-size",
    "lambda/faq",
    "lambda/light-client",
    "lambda/custom-layers",
    {
      collapsed: false,
      type: "category",
      label: "Node.JS APIs",
      items: [
        "lambda/estimateprice",
        "lambda/deployfunction",
        "lambda/deletefunction",
        "lambda/getfunctioninfo",
        "lambda/getfunctions",
        "lambda/deletesite",
        "lambda/deploysite",
        "lambda/getawsclient",
        "lambda/getregions",
        "lambda/getsites",
        "lambda/downloadmedia",
        "lambda/getuserpolicy",
        "lambda/getrolepolicy",
        "lambda/getorcreatebucket",
        "lambda/getrenderprogress",
        "lambda/presignurl",
        "lambda/rendermediaonlambda",
        "lambda/renderstillonlambda",
        "lambda/simulatepermissions",
      ],
    },
    "lambda/checklist",
    {
      collapsed: false,
      type: "category",
      label: "Troubleshooting",
      items: [
        "lambda/troubleshooting/permissions",
        "lambda/troubleshooting/rate-limit",
      ],
    },
    "lambda/changelog",
    "lambda/upgrading",
    "lambda/uninstall",
  ],
  someSidebar: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "timeline",
        "render",
      ],
    },
    {
      type: "category",
      label: "Techniques",
      items: [
        "assets",
        "using-audio",
        "fonts",
        "using-randomness",
        "audio-visualization",
        "use-img-and-iframe",
        "javascript",
        "data-fetching",
        "encoding",
        "transparent-videos",
        "parametrized-rendering",
        "dynamic-metadata",
        "ssr",
        "webpack",
        "tailwind",
        "legacy-babel",
        "env-variables",
        "third-party",
        "stills",
        "scaling",
        "video-manipulation",
        "render-as-gif",
      ],
    },
    {
      type: "category",
      label: "CLI",
      link: {
        type: "doc",
        id: "cli/cli",
      },
      collapsed: true,
      items: [
        "cli/preview",
        "cli/render",
        "cli/still",
        "cli/compositions",
        {
          type: "link",
          href: "/docs/lambda/cli",
          label: "lambda ↗️",
        },
        "cli/versions",
        "cli/upgrade",
        "cli/help",
      ],
    },
    "config",
    {
      type: "category",
      label: "API - remotion",
      items: [
        "continue-render",
        "delay-render",
        "interpolate",
        "interpolate-colors",
        "get-input-props",
        "measure-spring",
        "random",
        "register-root",
        "spring",
        "staticfile",
        "use-current-frame",
        "use-video-config",
        "audio",
        "composition",
        "sequence",
        "loop",
        "video",
        "offthreadvideo",
        "absolute-fill",
        "img",
        "iframe",
        "freeze",
        "still",
        "series",
        "folder",
        "easing",
      ],
    },
    {
      type: "category",
      label: "API - @remotion/bundler",
      items: ["bundle"],
    },
    "gif",
    {
      type: "category",
      label: "API - @remotion/media-utils",
      items: [
        "audio-buffer-to-data-url",
        "get-audio-data",
        "get-audio-duration-in-seconds",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
      ],
    },
    {
      type: "link",
      href: "/docs/lambda",
      label: "API - @remotion/lambda",
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/player",
      },
      label: "API - @remotion/player",
      items: [
        "player/installation",
        "player/examples",
        "player/api",
        "player/scaling",
        "player/integration",
        "player/autoplay",
        "player/preloading",
        "player/best-practices",
      ],
    },
    {
      type: "category",
      label: "API - @remotion/three",
      link: {
        type: "doc",
        id: "three",
      },
      items: ["three-canvas", "use-video-texture"],
    },
    {
      type: "category",
      label: "API - @remotion/skia",
      link: {
        type: "doc",
        id: "skia/skia",
      },
      items: ["skia/enable-skia", "skia/skia-canvas"],
    },
    {
      type: "category",
      label: "API - @remotion/lottie",
      link: {
        type: "doc",
        id: "lottie/lottie-index",
      },
      items: [
        "lottie/lottie-comp",
        "lottie/lottie-staticfile",
        "lottie/lottie-remote",
        "lottie/lottie-aftereffects",
      ],
    },
    {
      type: "category",
      label: "API - @remotion/preload",
      link: {
        type: "doc",
        id: "preload/preload",
      },
      items: [
        "preload/preload-video",
        "preload/preload-audio",
        "preload/resolve-redirect",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "renderer",
      },
      label: "API - @remotion/renderer",
      items: [
        "renderer/get-compositions",
        "renderer/render-media",
        "renderer/render-frames",
        "renderer/render-still",
        "renderer/stitch-frames-to-video",
        "renderer/open-browser",
        "renderer/make-cancel-signal",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "timeout",
        "target-closed",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
        "version-mismatch",
        "enametoolong",
        "slow-method-to-extract-frame",
        "wrong-composition-mount",
        "staticfile-relative-paths",
        "staticfile-remote-urls",
      ],
    },
    {
      type: "category",
      label: "Miscellaneous",
      items: [
        "brownfield",
        "chromium-flags",
        "video-vs-offthreadvideo",
        "prereleases",
        "gpu",
        "react-18",
        "miscellaneous/typescript-aliases",
        "miscellaneous/render-all",
        "miscellaneous/render-in-browser",
      ],
    },
    "3-0-migration",
    "2-0-migration",
    "license",
  ],
};
