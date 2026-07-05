# @ohos.resourceschedule.deviceStandby

Provides methods for managing device standby, including the methods for querying standby status and exemption list.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

## 导入模块

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getExemptedApps](arkts-devicestandby-getexemptedapps-f-sys.md#getExemptedApps-1) | Returns the information about the specified exempted application. |
| <!--DelRow-->[getExemptedApps](arkts-devicestandby-getexemptedapps-f-sys.md#getExemptedApps-2) | Returns the information about the specified exempted application. |
| <!--DelRow-->[releaseExemptionResource](arkts-devicestandby-releaseexemptionresource-f-sys.md#releaseExemptionResource-1) | Releases exemption resources. |
| <!--DelRow-->[requestExemptionResource](arkts-devicestandby-requestexemptionresource-f-sys.md#requestExemptionResource-1) | Requests exemption resources. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ExemptedAppInfo](arkts-devicestandby-exemptedappinfo-i-sys.md) | Information about an exempted application. |
| <!--DelRow-->[ResourceRequest](arkts-devicestandby-resourcerequest-i-sys.md) | The request of standby resources. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ResourceType](arkts-devicestandby-resourcetype-e-sys.md) | The type of exemption resources requested by the application. |

