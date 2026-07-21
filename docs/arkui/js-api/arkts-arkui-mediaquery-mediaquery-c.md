# MediaQuery

Defines the mediaquery interface.

**Since:** 11

<!--Device-unnamed-export default class MediaQuery--><!--Device-unnamed-export default class MediaQuery-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MediaQueryEvent, MediaQueryList } from '@kit.ArkUI';
```

<a id="matchmedia"></a>
## matchMedia

```TypeScript
static matchMedia(condition: string): MediaQueryList
```

Queries a media item and returns a MediaQueryList object.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQuery-static matchMedia(condition: string): MediaQueryList--><!--Device-MediaQuery-static matchMedia(condition: string): MediaQueryList-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MediaQueryList](arkts-arkui-mediaquery-mediaquerylist-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@atomicservice |

**Example**

```TypeScript
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');    

```

