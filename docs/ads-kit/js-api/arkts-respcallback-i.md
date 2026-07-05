# RespCallback

广告请求回调。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { RespCallback } from '@kit.AdsKit';
```

## constructor

```TypeScript
(respData: Map<string, Array<advertising.Advertisement>>): void
```

广告请求回调。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| respData | Map&lt;string, Array&lt;advertising.Advertisement>> | Yes | 广告请求回调数据，是以广告位ID为键，  存储请求到的广告内容的映射集合。 |

