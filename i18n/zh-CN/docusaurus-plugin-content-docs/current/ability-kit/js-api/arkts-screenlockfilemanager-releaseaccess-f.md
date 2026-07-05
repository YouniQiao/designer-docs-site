# releaseAccess

## releaseAccess

```TypeScript
function releaseAccess(): ReleaseStatus
```

Release the access of the caller data and do not allow data access under the lock screen.

**起始版本：** 12

**系统能力：** SystemCapability.Security.ScreenLockFileManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ReleaseStatus | Returns release the access result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | The specified SystemCapability name was not found. |
| 29300002 | The system ability works abnormally. |
| 29300003 | The application is not enabled the data protection under lock screen. |
| 29300005 | File access was not acquired. |

**示例：**

```TypeScript
// 释放锁屏下应用敏感数据访问权限
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    // 释放访问权限
    let releaseStatus = screenLockFileManager.releaseAccess();
    if (releaseStatus === screenLockFileManager.ReleaseStatus.RELEASE_GRANTED) {
        hilog.info(0x0000, 'testTag', 'releaseAccess successfully.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'releaseAccess failed: %{public}s', message);
}

```

