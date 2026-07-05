# @ohos.ability.screenLockFileManager

Provides the capability to access data under lock screen.

**起始版本：** 12

**系统能力：** SystemCapability.Security.ScreenLockFileManager

## 导入模块

```TypeScript
import { screenLockFileManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [acquireAccess](arkts-screenlockfilemanager-acquireaccess-f.md#acquireAccess-1) | Acquire the access of the caller data under the lock screen. |
| <!--DelRow-->[acquireAccess](arkts-screenlockfilemanager-acquireaccess-f-sys.md#acquireAccess-1) | Acquire the access of the specified data under the lock screen. |
| [queryAppKeyState](arkts-screenlockfilemanager-queryappkeystate-f.md#queryAppKeyState-1) | Query the AppKey's status of the caller. |
| <!--DelRow-->[queryAppKeyState](arkts-screenlockfilemanager-queryappkeystate-f-sys.md#queryAppKeyState-1) | Query the specified AppKey's status. |
| [releaseAccess](arkts-screenlockfilemanager-releaseaccess-f.md#releaseAccess-1) | Release the access of the caller data and do not allow data access under the lock screen. |
| <!--DelRow-->[releaseAccess](arkts-screenlockfilemanager-releaseaccess-f-sys.md#releaseAccess-1) | Release the access of the specified data type and do not allow data access under the lock screen. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AccessStatus](arkts-screenlockfilemanager-accessstatus-e.md) | AccessStatus. |
| [DataType](arkts-screenlockfilemanager-datatype-e.md) | Enumerates the types of data under lock screen. |
| [KeyStatus](arkts-screenlockfilemanager-keystatus-e.md) | KeyStatus. |
| [ReleaseStatus](arkts-screenlockfilemanager-releasestatus-e.md) | ReleaseStatus. |

