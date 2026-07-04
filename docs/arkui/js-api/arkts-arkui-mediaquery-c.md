# MediaQuery

Defines the mediaquery interface.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MediaQueryEvent, MediaQueryList } from '@system.mediaquery';
```

## matchMedia

```TypeScript
static matchMedia(condition: string): MediaQueryList
```

Queries a media item and returns a MediaQueryList object.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MediaQueryList | @syscap SystemCapability.ArkUI.ArkUI.Full@atomicservice |

**Example**

```TypeScript
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');    

```

