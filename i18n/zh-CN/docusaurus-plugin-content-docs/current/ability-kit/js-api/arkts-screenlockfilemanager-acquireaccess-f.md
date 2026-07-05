# acquireAccess

## acquireAccess

```TypeScript
function acquireAccess(): AccessStatus
```

Acquire the access of the caller data under the lock screen.

**起始版本：** 12

**系统能力：** SystemCapability.Security.ScreenLockFileManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AccessStatus | Returns acquire the access result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | The specified SystemCapability name was not found. |
| 29300002 | The system ability works abnormally. |
| 29300003 | The application is not enabled the data protection under lock screen. |
| 29300004 | File access is denied. |

**示例：**

```TypeScript
// 申请锁屏下应用敏感数据访问权限
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    // 申请访问权限
    let acquireStatus = screenLockFileManager.acquireAccess();
    if (acquireStatus === screenLockFileManager.AccessStatus.ACCESS_GRANTED) {
        hilog.info(0x0000, 'testTag', 'acquireAccess successfully.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'acquireAccess failed: %{public}s', message);
}

```

