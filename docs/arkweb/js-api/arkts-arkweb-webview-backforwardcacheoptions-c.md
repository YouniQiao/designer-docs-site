# BackForwardCacheOptions

This class is used to set back forward cache options.

**Since:** 12

<!--Device-webview-class BackForwardCacheOptions--><!--Device-webview-class BackForwardCacheOptions-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

**Since:** 12

<!--Device-BackForwardCacheOptions-constructor()--><!--Device-BackForwardCacheOptions-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

## size

```TypeScript
size: number
```

Set the maximum size of pages that can cache.Default is 1, max is 50.

**Type:** number

**Since:** 12

<!--Device-BackForwardCacheOptions-size: number--><!--Device-BackForwardCacheOptions-size: number-End-->

**System capability:** SystemCapability.Web.Webview.Core

## timeToLive

```TypeScript
timeToLive: number
```

Set the lifetime in seconds in the BackForwardCache.Unit: seconds. Default is 600.

**Type:** number

**Since:** 12

<!--Device-BackForwardCacheOptions-timeToLive: number--><!--Device-BackForwardCacheOptions-timeToLive: number-End-->

**System capability:** SystemCapability.Web.Webview.Core

