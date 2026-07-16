# @ohos.resourceschedule.systemload

The **systemload** module allows the system to determine the system load level based on the current temperature,
load, and scenario, and notifies registered applications of level changes, if any.

**Since:** 12

**System capability:** SystemCapability.ResourceSchedule.SystemLoad

## Modules to Import

```TypeScript
import { systemLoad } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getLevel](arkts-basicservices-getlevel-f.md#getlevel-1) | Obtains the system load level. This API uses a promise to return the result. |
| [off](arkts-basicservices-off-f.md#off-1) | Disables listening for system load level changes. This API uses an asynchronous callback to return the result. |
| [on](arkts-basicservices-on-f.md#on-1) | Enables listening for system load level changes. This API uses an asynchronous callback to return the result. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SystemLoadLevel](arkts-basicservices-systemloadlevel-e.md) | Enumerates system load levels. |
<!--DelEnd-->

