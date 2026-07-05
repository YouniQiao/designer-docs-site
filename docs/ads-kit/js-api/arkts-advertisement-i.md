# Advertisement

本模块为请求的广告内容。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## rewardVerifyConfig

```TypeScript
rewardVerifyConfig: Map<string, string>
```

服务器验证参数。 { customData: "test", userId: "12345" }

**Type:** Map<string, string>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## adType

```TypeScript
adType: number
```

广告类型。 - 1：开屏广告。 - 3：原生广告。 - 7：激励广告。 - 8：横幅广告。 - 12：插屏广告。 - 60：贴片广告。 不填默认为原生广告类型。

**Type:** number

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## shown

```TypeScript
shown: boolean
```

广告是否展示。 - true：展示。 - false：未展示。

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## rewarded

```TypeScript
rewarded: boolean
```

广告是否获得奖励。 - true：获得奖励。 - false：没有获得奖励。

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## clicked

```TypeScript
clicked: boolean
```

广告是否被点击。 - true：被点击。 - false：未被点击。

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## key

```TypeScript
[key:string]: Object
```

自定义参数。 <!--RP1--><!--RP1End-->

**Type:** Object

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

## uniqueId

```TypeScript
uniqueId: string
```

广告唯一标识。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

