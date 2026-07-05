# AreaMode

```TypeScript
export enum AreaMode
```

文件加密分区等级，保证应用在不同场景下的数据安全。开发者可以根据应用的具体需求选择合适的加密等级，以保护用户的数据安全。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## EL1

```TypeScript
EL1 = 0
```

设备级加密区，设备开机后可访问的数据区。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## EL2

```TypeScript
EL2 = 1
```

用户级加密区，设备开机，首次输入密码后才能够访问的数据区。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## EL3

```TypeScript
EL3 = 2
```

用户级加密区，不同场景的文件权限如下： 已打开文件：锁屏时，可读写；解锁后，可读写。 未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。 创建新文件：锁屏时，可创建、可打开、可写不可读；解锁后，可创建、可打开、可读写。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## EL4

```TypeScript
EL4 = 3
```

用户级加密区，不同场景的文件权限如下： 已打开文件：锁屏时，不可读写；解锁后，可读写。 未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。 创建新文件：锁屏时，不可创建；解锁后，可创建、可打开、可读写。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## EL5

```TypeScript
EL5 = 4
```

应用级加密区，不同场景的文件权限如下： 已打开文件：锁屏时，可读写；解锁后，可读写。 未打开文件：锁屏时，调用[Access](js-apis-screenLockFileManager.md#screenlockfilemanageracquireaccess)接口获取保留密钥后，可打开、可读写，否则不可打开 、不可读写；解锁后，可打开、可读写。 创建新文件：锁屏时，可创建、可打开、可读写；解锁后，可创建、可打开、可读写。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

