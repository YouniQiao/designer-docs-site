# MediaQueryList

Defines the MediaQuery list info.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MediaQueryEvent, MediaQueryList } from '@system.mediaquery';
```

## addListener

```TypeScript
addListener(callback: (event: MediaQueryEvent) => void): void
```

Adds a listening function to MediaQueryList. The listening function must be added before onShow is called, that is, added to the onInit or onReady function.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

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

## removeListener

```TypeScript
removeListener(callback: (event: MediaQueryEvent) => void): void
```

Removes a listening function from MediaQueryList.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

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

Whether the query is successful. True if the query condition is matched successfully, false otherwise. This parameter is read-only.

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## media

```TypeScript
media?: string
```

Serialized media query condition. This parameter is read-only.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onchange

```TypeScript
onchange?: (matches: boolean) => void
```

Called when the matches value changes.

**Type:** (matches: boolean) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

