# HuksChallengeType

```TypeScript
export enum HuksChallengeType
```

表示密钥使用时生成challenge的类型。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_TYPE_NORMAL

```TypeScript
HUKS_CHALLENGE_TYPE_NORMAL = 0
```

表示challenge为普通类型，默认32字节。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_TYPE_CUSTOM

```TypeScript
HUKS_CHALLENGE_TYPE_CUSTOM = 1
```

表示challenge为用户自定义类型。支持使用多个密钥仅一次认证。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_CHALLENGE_TYPE_NONE

```TypeScript
HUKS_CHALLENGE_TYPE_NONE = 2
```

表示免challenge类型。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

