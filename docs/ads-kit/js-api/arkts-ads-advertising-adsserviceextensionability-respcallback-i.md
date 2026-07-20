# RespCallback

Ad request callback.

**Since:** 11

<!--Device-unnamed-export interface RespCallback--><!--Device-unnamed-export interface RespCallback-End-->

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { RespCallback } from '@kit.AdsKit';
```

## constructor

```TypeScript
(respData: Map<string, Array<advertising.Advertisement>>): void
```

Data in the ad request callback.

**Since:** 11

<!--Device-RespCallback-(respData: Map<string, Array<advertising.Advertisement>>): void--><!--Device-RespCallback-(respData: Map<string, Array<advertising.Advertisement>>): void-End-->

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| respData | [Map](../../apis-na/arkts-apis/arkts-na-lib-es2015-collection-map-i.md)<string, Array<advertising.Advertisement>> | Yes | Callback data of ad requests.It is a mapping collection that takes ad unit ID as the key and stores acquired ad content. |

