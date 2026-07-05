# off

## off('operatingHandChanged')

```TypeScript
function off(type: 'operatingHandChanged', callback?: Callback<OperatingHandStatus>): void
```

Unsubscribes from operating hand change events.

**起始版本：** 15

**需要权限：** 

- API版本15 - 19： ohos.permission.ACTIVITY_MOTION

- API版本20+： ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'operatingHandChanged' | 是 | Event type. This parameter has a fixed value of operatingHandChanged. |
| callback | Callback&lt;OperatingHandStatus> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to unsubscribe operatingHandChanged  event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| 401 | Parameter error. Parameter verification failed. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500003 | Unsubscription failed. Possible causes: 1. Callback failure;  2. N-API invocation exception, invalid N-API status; 3. IPC request exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    motion.off('operatingHandChanged');
    console.info("off succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed off and err code is " + error.code);
}

```

## off('holdingHandChanged')

```TypeScript
function off(type: 'holdingHandChanged', callback?: Callback<HoldingHandStatus>): void
```

Disables listening for holding hand status changes.

**起始版本：** 20

**需要权限：** 

 ohos.permission.DETECT_GESTURE

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'holdingHandChanged' | 是 | Event type. The value holdingHandChanged indicates the holding hand  status change event. |
| callback | Callback&lt;HoldingHandStatus> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to unsubscribe holdingHandChanged  event forbidden by permission: ohos.permission.DETECT_GESTURE. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500003 | Unsubscription failed. Possible causes: 1. Callback failure;  2. N-API invocation exception, invalid N-API status; 3. IPC request exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  motion.off('holdingHandChanged'); // 移除所有同类订阅
  console.info('off succeeded');
} catch (err) {
  let error = err as BusinessError;
  console.error('Failed off; err code = ' + error.code);
}

```

