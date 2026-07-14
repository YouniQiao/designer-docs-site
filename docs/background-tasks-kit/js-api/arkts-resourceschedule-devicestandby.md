# @ohos.resourceschedule.deviceStandby

Provides methods for managing device standby, including the methods for querying standby status and exemption list.

**Since:** 10

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

## Modules to Import

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getExemptedApps](arkts-backgroundtasks-getexemptedapps-f-sys.md#getexemptedapps-1) | Returns the information about the specified exempted application. |
| [getExemptedApps](arkts-backgroundtasks-getexemptedapps-f-sys.md#getexemptedapps-2) | Returns the information about the specified exempted application. |
| [releaseExemptionResource](arkts-backgroundtasks-releaseexemptionresource-f-sys.md#releaseexemptionresource-1) | Releases exemption resources. |
| [requestExemptionResource](arkts-backgroundtasks-requestexemptionresource-f-sys.md#requestexemptionresource-1) | Requests exemption resources. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ExemptedAppInfo](arkts-backgroundtasks-exemptedappinfo-i-sys.md) | Information about an exempted application. |
| [ResourceRequest](arkts-backgroundtasks-resourcerequest-i-sys.md) | The request of standby resources. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ResourceType](arkts-backgroundtasks-resourcetype-e-sys.md) | The type of exemption resources requested by the application. |
<!--DelEnd-->

