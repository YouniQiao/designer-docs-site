# getRecentOperatingHandStatus

## getRecentOperatingHandStatus

```TypeScript
function getRecentOperatingHandStatus(): OperatingHandStatus
```

Obtains the latest operating hand status.

**起始版本：** 15

**需要权限：** 

- API版本15 - 19： ohos.permission.ACTIVITY_MOTION

- API版本20+： ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OperatingHandStatus | Status of the operating hand. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to get the recent operating hand  status forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let data:motion.OperatingHandStatus = motion.getRecentOperatingHandStatus();
    console.info('get succeeded' + data);
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed get and err code is " + error.code);
}

```

