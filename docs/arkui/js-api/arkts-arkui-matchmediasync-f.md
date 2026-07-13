# matchMediaSync

## Modules to Import

```TypeScript
import { mediaquery } from '@kit.ArkUI';
```

## matchMediaSync

```TypeScript
function matchMediaSync(condition: string): MediaQueryListener
```

Sets the media query condition. This API returns the corresponding media query listener.

> **NOTE**
>
> - This API is supported since API version 7 and deprecated since API version 18. You are advised to use
> [matchMediaSync](@link @ohos.arkui.UIContext:MediaQuery#matchMediaSync) instead. Before calling this API, you
> need to obtain the [MediaQuery](@link @ohos.arkui.UIContext:MediaQuery) object using the
> [getMediaQuery](@link @ohos.arkui.UIContext:UIContext#getMediaQuery) method in
> [UIContext](@link @ohos.arkui.UIContext).
>
> - Since API version 10, you can use the
> [getMediaQuery](@link @ohos.arkui.UIContext:UIContext#getMediaQuery) API in
> [UIContext](arkts-arkui-uicontext-c.md) to obtain the
> [MediaQuery](arkts-arkui-mediaquery-c.md) object associated with the current UI context.

**Since:** 7

**Deprecated since:** 18

**Substitutes:** matchMediaSync

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | Media query condition. For details, see[Syntax](../../../../ui/arkts-layout-development-media-query.md#syntax). |

**Return value:**

| Type | Description |
| --- | --- |
| MediaQueryListener | Media query listener, which is used to register or deregister the listeningcallback. |

**Example**

```TypeScript
import { mediaquery } from '@kit.ArkUI';

let listener: mediaquery.MediaQueryListener = mediaquery.matchMediaSync('(orientation: landscape)'); // Listen for landscape events.

```

