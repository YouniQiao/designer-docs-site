# HuksChallengePosition

```TypeScript
export enum HuksChallengePosition
```

表示challenge类型为用户自定义类型时，生成的challenge有效长度仅为8字节连续的数据，且仅支持4种位置。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_POS_0

```TypeScript
HUKS_CHALLENGE_POS_0 = 0
```

表示0~7字节为当前密钥的有效challenge。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_POS_1

```TypeScript
HUKS_CHALLENGE_POS_1 = 1
```

表示8~15字节为当前密钥的有效challenge。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_POS_2

```TypeScript
HUKS_CHALLENGE_POS_2 = 2
```

表示16~23字节为当前密钥的有效challenge。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_POS_3

```TypeScript
HUKS_CHALLENGE_POS_3 = 3
```

表示24~31字节为当前密钥的有效challenge。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

