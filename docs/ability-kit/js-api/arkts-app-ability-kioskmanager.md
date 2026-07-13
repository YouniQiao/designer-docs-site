# @ohos.app.ability.kioskManager

The KioskManager module provides APIs to manage kiosk mode, including entering/exiting kiosk mode and querying the
kiosk mode status.

Kiosk mode is a dedicated device lockdown mode that ensures the device UI serves only specific interaction scenarios.
In this mode, device usage is confined to predetermined applications. A typical example is a bank ATM, where users
can only interact with the ATM software and cannot exit it or access any other functions.

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { kioskManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [enterKioskMode](arkts-ability-enterkioskmode-f.md#enterkioskmode-1) | Enters kiosk mode. This API uses a promise to return the result.This API can be properly called only on phones, PC/2-in-1 devices, and tablets. On other devices, it returns theerror code 801. |
| [exitKioskMode](arkts-ability-exitkioskmode-f.md#exitkioskmode-1) | Exits kiosk mode. This API uses a promise to return the result.This API takes effect only for applications that have entered kiosk mode.This API can be properly called only on phones, PC/2-in-1 devices, and tablets. On other devices, it returns theerror code 801. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getKioskStatus](arkts-ability-getkioskstatus-f-sys.md#getkioskstatus-1) | Obtains the Kiosk mode status information, including whether the system is in kiosk mode, and the name and UID ofthe application that has entered Kiosk mode. This API uses a promise to return the result. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [KioskStatus](arkts-ability-kioskstatus-t.md) | Defines the kiosk status information, including whether the system is in kiosk mode and the information about theapplication in kiosk mode. |

