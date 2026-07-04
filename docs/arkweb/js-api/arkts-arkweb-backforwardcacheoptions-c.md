# BackForwardCacheOptions

This class is used to set back forward cache options.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## constructor

```TypeScript
constructor()
```

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## size

```TypeScript
size: number
```

Set the maximum size of pages that can cache. Default is 1, max is 50.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## timeToLive

```TypeScript
timeToLive: number
```

Set the lifetime in seconds in the BackForwardCache. Unit: seconds. Default is 600.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

