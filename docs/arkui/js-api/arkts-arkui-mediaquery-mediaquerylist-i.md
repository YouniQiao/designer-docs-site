# MediaQueryList

Defines the MediaQuery list info.

**Since:** 11

<!--Device-unnamed-export interface MediaQueryList--><!--Device-unnamed-export interface MediaQueryList-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MediaQueryEvent, MediaQueryList } from '@kit.ArkUI';
```

<a id="addlistener"></a>
## addListener

```TypeScript
addListener(callback: (event: MediaQueryEvent) => void): void
```

Adds a listening function to MediaQueryList.The listening function must be added before onShow is called, that is, added to the onInit or onReady function.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQueryList-addListener(callback: (event: MediaQueryEvent) => void): void--><!--Device-MediaQueryList-addListener(callback: (event: MediaQueryEvent) => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: MediaQueryEvent) =&gt; void | Yes |  |

**Example**

```TypeScript
import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
  if(e.matches){
    // do something
  }
}
mMediaQueryList.addListener(maxWidthMatch);

```

<a id="removelistener"></a>
## removeListener

```TypeScript
removeListener(callback: (event: MediaQueryEvent) => void): void
```

Removes a listening function from MediaQueryList.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQueryList-removeListener(callback: (event: MediaQueryEvent) => void): void--><!--Device-MediaQueryList-removeListener(callback: (event: MediaQueryEvent) => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: MediaQueryEvent) =&gt; void | Yes |  |

**Example**

```TypeScript
import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
  if(e.matches){
    // do something
  }
}
mMediaQueryList.removeListener(maxWidthMatch);

```

## matches

```TypeScript
matches?: boolean
```

Whether the query is successful. True if the query condition is matched successfully, false otherwise.This parameter is read-only.

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQueryList-matches?: boolean--><!--Device-MediaQueryList-matches?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## media

```TypeScript
media?: string
```

Serialized media query condition.This parameter is read-only.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQueryList-media?: string--><!--Device-MediaQueryList-media?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onchange

```TypeScript
onchange?: (matches: boolean) => void
```

Called when the matches value changes.

**Type:** (matches: boolean) =&gt; void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQueryList-onchange?: (matches: boolean) => void--><!--Device-MediaQueryList-onchange?: (matches: boolean) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

