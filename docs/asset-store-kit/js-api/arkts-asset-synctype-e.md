# SyncType

```TypeScript
enum SyncType
```

枚举，关键资产支持的同步类型。

**Since:** 11

**System capability:** SystemCapability.Security.Asset

## NEVER

```TypeScript
NEVER = 0
```

不允许同步关键资产。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## THIS_DEVICE

```TypeScript
THIS_DEVICE = 1 << 0
```

只在本设备进行同步，如仅在本设备还原的备份场景。 **说明：** 本字段是能力预埋，当前不支持。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## TRUSTED_DEVICE

```TypeScript
TRUSTED_DEVICE = 1 << 1
```

只在可信设备间进行同步，如克隆场景。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## TRUSTED_ACCOUNT

```TypeScript
TRUSTED_ACCOUNT = 1 << 2
```

只在登录可信账号的设备间进行同步，如云同步场景。 **说明：** 本字段是能力预埋，当前不支持。

**Since:** 12

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

