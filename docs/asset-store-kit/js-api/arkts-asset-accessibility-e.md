# Accessibility

```TypeScript
enum Accessibility
```

枚举，关键资产基于锁屏状态的访问控制类型。

**Since:** 11

**System capability:** SystemCapability.Security.Asset

## DEVICE_POWERED_ON

```TypeScript
DEVICE_POWERED_ON = 0
```

开机后可访问。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## DEVICE_FIRST_UNLOCKED

```TypeScript
DEVICE_FIRST_UNLOCKED = 1
```

首次解锁后可访问 **说明：** 未设置锁屏密码时，等同于开机后可访问。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## DEVICE_UNLOCKED

```TypeScript
DEVICE_UNLOCKED = 2
```

解锁状态时可访问 **说明：** 未设置锁屏密码时，等同于开机后可访问。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

