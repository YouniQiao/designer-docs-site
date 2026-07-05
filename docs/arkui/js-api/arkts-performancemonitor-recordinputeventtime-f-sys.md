# recordInputEventTime

## recordInputEventTime

```TypeScript
function recordInputEventTime(type: ActionType, sourceType: SourceType, time: number): void
```

记录动效场景开始前，用户输入触发事件类型与时间。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ActionType | Yes | 用户场景触发模式。 |
| sourceType | SourceType | Yes | 用户场景触发源。 |
| time | number | Yes | 场景触发时间（ms），时间戳，例如1751508570794。若传零或负值将自动转化为当前系统时间，若传正值则正常使用。不正确的传参会导致用户操作响应时延指标异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

**Example**

```TypeScript
import { systemDateTime, BusinessError } from '@kit.BasicServicesKit';
import { performanceMonitor } from '@kit.ArkUI';

// Obtain the current system time.
let time = systemDateTime.getTime(false);
// Update the user trigger event type and time.
performanceMonitor.recordInputEventTime(performanceMonitor.ActionType.LAST_UP, performanceMonitor.SourceType.PERF_MOUSE_EVENT, time);

```

