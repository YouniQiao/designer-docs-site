# CacheOptions

Represents a configuration object for precompiling JavaScript in the **Web** component to generate bytecode cache,which is designed to control the updating of the bytecode cache.

**Since:** 12

<!--Device-webview-interface CacheOptions--><!--Device-webview-interface CacheOptions-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## responseHeaders

```TypeScript
responseHeaders: Array<WebHeader>
```

Array of response headers from the server when a JavaScript file is requested. They include information such as E  
-Tag or Last-Modified to identify the file version and determine whether the bytecode cache needs to be refreshed.

**Type:** Array<WebHeader>

**Since:** 12

<!--Device-CacheOptions-responseHeaders: Array<WebHeader>--><!--Device-CacheOptions-responseHeaders: Array<WebHeader>-End-->

**System capability:** SystemCapability.Web.Webview.Core

