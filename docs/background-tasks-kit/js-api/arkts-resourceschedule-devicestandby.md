# @ohos.resourceschedule.deviceStandby

Provides methods for managing device standby, including the methods for querying standby status and exemption list.

**Since:** 10

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

## Modules to Import

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getExemptedApps](arkts-devicestandby-getexemptedapps-f-sys.md#getExemptedApps-1) | Returns the information about the specified exempted application. |
| <!--DelRow-->[getExemptedApps](arkts-devicestandby-getexemptedapps-f-sys.md#getExemptedApps-2) | Returns the information about the specified exempted application. |
| <!--DelRow-->[releaseExemptionResource](arkts-devicestandby-releaseexemptionresource-f-sys.md#releaseExemptionResource-1) | Releases exemption resources. |
| <!--DelRow-->[requestExemptionResource](arkts-devicestandby-requestexemptionresource-f-sys.md#requestExemptionResource-1) | Requests exemption resources. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[ExemptedAppInfo](arkts-devicestandby-exemptedappinfo-i-sys.md) | Information about an exempted application. |
| <!--DelRow-->[ResourceRequest](arkts-devicestandby-resourcerequest-i-sys.md) | The request of standby resources. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[ResourceType](arkts-devicestandby-resourcetype-e-sys.md) | The type of exemption resources requested by the application. |

