# @ohos.stationary

The **stationary** module provides APIs to report the device status, including absolute still and relative still. > **NOTE** > > This module does not support x86 emulators.

**起始版本：** 9

**系统能力：** SystemCapability.Msdp.DeviceStatus.Stationary

## 导入模块

```TypeScript
import { stationary } from '@kit.MultimodalAwarenessKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [off](arkts-stationary-off-f.md#off-1) | Unsubscribes from the device status. |
| [on](arkts-stationary-on-f.md#on-1) | Subscribes to the device status. |
| [once](arkts-stationary-once-f.md#once-1) | Obtains the device status. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ActivityResponse](arkts-stationary-activityresponse-i.md) | Defines the response interface to receive the device status. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ActivityType](arkts-stationary-activitytype-t.md) | Enumerates the device status types. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ActivityEvent](arkts-stationary-activityevent-e.md) | Enumerates the device status events. |
| [ActivityState](arkts-stationary-activitystate-e.md) | Enumerates the device statuses. |

