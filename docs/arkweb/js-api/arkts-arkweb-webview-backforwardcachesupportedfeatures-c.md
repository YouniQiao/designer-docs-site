# BackForwardCacheSupportedFeatures

This class is used to enable back forward cache supported features.

**Since:** 12

<!--Device-webview-class BackForwardCacheSupportedFeatures--><!--Device-webview-class BackForwardCacheSupportedFeatures-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## constructor

```TypeScript
constructor()
```

**Since:** 12

<!--Device-BackForwardCacheSupportedFeatures-constructor()--><!--Device-BackForwardCacheSupportedFeatures-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

## mediaTakeOver

```TypeScript
mediaTakeOver: boolean
```

Whether cache the pages that use media take over.<p><strong>API Note</strong>:<br>When the value is set to **true**, you need to maintain the lifecycle of system components created for video elements to avoid resource leak.</p>

Default is false;

**Type:** boolean

**Since:** 12

<!--Device-BackForwardCacheSupportedFeatures-mediaTakeOver: boolean--><!--Device-BackForwardCacheSupportedFeatures-mediaTakeOver: boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

## nativeEmbed

```TypeScript
nativeEmbed: boolean
```

Whether cache the pages that use native embed.

<p><strong>API Note</strong>:<br>When the value is set to **true**, you need to maintain the lifecycle of system components created for the same-layer rendering elements to avoid resource leak.</p>

Default is false;

**Type:** boolean

**Since:** 12

<!--Device-BackForwardCacheSupportedFeatures-nativeEmbed: boolean--><!--Device-BackForwardCacheSupportedFeatures-nativeEmbed: boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

