# requestExemptionResource

## requestExemptionResource

```TypeScript
function requestExemptionResource(request: ResourceRequest): void
```

Requests exemption resources.

**起始版本：** 10

**需要权限：** 

 ohos.permission.DEVICE_STANDBY_EXEMPTION

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | ResourceRequest | 是 | requesting or releasing resources. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters. |
| 9800003 | Failed to complete inner transaction. |
| 9800004 | Failed to get device standby service. Possible cause: A necessary system service is not ready. |
| 18700001 | Caller information verification failed. |

**示例：**

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';

let resRequest: deviceStandby.ResourceRequest = {
  resourceTypes: deviceStandby.ResourceType.TIMER,
  uid:10003,
  name:"com.example.app",
  duration:10,
  reason:"apply",
};
deviceStandby.requestExemptionResource(resRequest);

```

