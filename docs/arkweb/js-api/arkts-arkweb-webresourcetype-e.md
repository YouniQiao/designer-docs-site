# WebResourceType

Defines the resource type of request.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## MAIN_FRAME

```TypeScript
MAIN_FRAME = 0
```

Top level page.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## SUB_FRAME

```TypeScript
SUB_FRAME = 1
```

Frame or Iframe.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## STYLE_SHEET

```TypeScript
STYLE_SHEET = 2
```

CSS stylesheet.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## SCRIPT

```TypeScript
SCRIPT = 3
```

External script.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## IMAGE

```TypeScript
IMAGE = 4
```

Image (jpg/gif/png/etc).

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## FONT_RESOURCE

```TypeScript
FONT_RESOURCE = 5
```

Font.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## SUB_RESOURCE

```TypeScript
SUB_RESOURCE = 6
```

Some other subresource. This is the default type if the actual type is unknown.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## OBJECT

```TypeScript
OBJECT = 7
```

Object (or embed) tag for a plugin, or a resource that a plugin requested.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## MEDIA

```TypeScript
MEDIA = 8
```

Media resource.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## WORKER

```TypeScript
WORKER = 9
```

Main resource of a dedicated worker.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## SHARED_WORKER

```TypeScript
SHARED_WORKER = 10
```

Main resource of a shared worker.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## PREFETCH

```TypeScript
PREFETCH = 11
```

Explicitly requested prefetch.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## FAVICON

```TypeScript
FAVICON = 12
```

Favicon.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## XHR

```TypeScript
XHR = 13
```

XMLHttpRequest.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## PING

```TypeScript
PING = 14
```

Ping request for <a ping>/sendBeacon.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## SERVICE_WORKER

```TypeScript
SERVICE_WORKER = 15
```

The main resource of a service worker.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## CSP_REPORT

```TypeScript
CSP_REPORT = 16
```

Report of Content Security Policy violations.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## PLUGIN_RESOURCE

```TypeScript
PLUGIN_RESOURCE = 17
```

Resource that a plugin requested.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## NAVIGATION_PRELOAD_MAIN_FRAME

```TypeScript
NAVIGATION_PRELOAD_MAIN_FRAME = 19
```

A main-frame service worker navigation preload request.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## NAVIGATION_PRELOAD_SUB_FRAME

```TypeScript
NAVIGATION_PRELOAD_SUB_FRAME = 20
```

A sub-frame service worker navigation preload request.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

