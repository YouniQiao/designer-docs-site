# AdRequestParams

广告请求参数。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { advertising } from '@kit.AdsKit';
```

## adType

```TypeScript
adType?: number
```

请求的广告类型。 - 1：开屏广告。 - 3：原生广告。 - 7：激励广告。 - 8：横幅广告。 - 12：插屏广告。 - 60：贴片广告。 不填默认为原生广告类型。

**Type:** number

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adId

```TypeScript
adId: string
```

广告位ID。 说明：getAdRequestBody接口可以不传该参数。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adHeight

```TypeScript
adHeight?: number
```

请求广告时期望的创意高度，单位vp（横幅广告必填）。不填以业务逻辑为准。

**Type:** number

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adCount

```TypeScript
adCount?: number
```

请求的广告数量。不填以业务逻辑为准。

**Type:** number

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adSearchKeyword

```TypeScript
adSearchKeyword?: string
```

广告关键字。不填默认""。 说明：暂不支持使用。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## key

```TypeScript
[key: string]: number | boolean | string | undefined
```

自定义参数。 <!--RP2--><!--RP2End-->

**Type:** number | boolean | string | undefined

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adWidth

```TypeScript
adWidth?: number
```

请求广告时期望的创意宽度，单位vp（横幅广告必填）。不填以业务逻辑为准。

**Type:** number

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

