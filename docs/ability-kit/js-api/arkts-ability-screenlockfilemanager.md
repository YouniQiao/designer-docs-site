# @ohos.ability.screenLockFileManager

Provides the capability to access data under lock screen.

**Since:** 12

**System capability:** SystemCapability.Security.ScreenLockFileManager

## Modules to Import

```TypeScript
import { screenLockFileManager } from '@ohos.ability.screenLockFileManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acquireAccess](arkts-ability-acquireaccess-f.md#acquireaccess-1) | Acquire the access of the caller data under the lock screen. |
| [queryAppKeyState](arkts-ability-queryappkeystate-f.md#queryappkeystate-1) | Query the AppKey's status of the caller. |
| [releaseAccess](arkts-ability-releaseaccess-f.md#releaseaccess-1) | Release the access of the caller data and do not allow data access under the lock screen. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [acquireAccess](arkts-ability-acquireaccess-f-sys.md#acquireaccess-2) | Acquire the access of the specified data under the lock screen. |
| [queryAppKeyState](arkts-ability-queryappkeystate-f-sys.md#queryappkeystate-2) | Query the specified AppKey's status. |
| [releaseAccess](arkts-ability-releaseaccess-f-sys.md#releaseaccess-2) | Release the access of the specified data type and do not allow data access under the lock screen. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AccessStatus](arkts-ability-accessstatus-e.md) | AccessStatus. |
| [DataType](arkts-ability-datatype-e.md) | Enumerates the types of data under lock screen. |
| [KeyStatus](arkts-ability-keystatus-e.md) | KeyStatus. |
| [ReleaseStatus](arkts-ability-releasestatus-e.md) | ReleaseStatus. |

