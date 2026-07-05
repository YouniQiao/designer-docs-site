# CacheMode

Enum type supplied to {@link cacheMode} for setting the Web cache mode.

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## Default

```TypeScript
Default = 0
```

load cache when they are available and not expired, otherwise load online.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## None

```TypeScript
None = 1
```

load cache when they are available, otherwise load online.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## Online

```TypeScript
Online = 2
```

Load online and not cache.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## Only

```TypeScript
Only = 3
```

load cache and not online.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

