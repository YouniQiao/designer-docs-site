# applyEfficiencyResources

## applyEfficiencyResources

```TypeScript
function applyEfficiencyResources(request: EfficiencyResourcesRequest): void
```

申请能效资源。

**起始版本：** 9

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | EfficiencyResourcesRequest | 是 | 请求的必要信息，包括资源类型、超时时间等。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types; 3. Parameter verification failed. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800003 | Internal transaction failed. |
| 9800004 | System service operation failed. |
| 18700001 | Caller information verification failed for an energy resource request. |

**示例：**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';  
import { BusinessError } from '@kit.BasicServicesKit';

let request: backgroundTaskManager.EfficiencyResourcesRequest = {
    resourceTypes: backgroundTaskManager.ResourceType.CPU, // 申请CPU资源
    isApply: true, // 申请资源
    timeOut: 0, // 资源使用超时时间（ms）
    reason: 'apply', // 申请资源原因
    isPersist: true, // 永久持有资源
    isProcess: false, // 应用申请
    cpuLevel: backgroundTaskManager.EfficiencyResourcesCpuLevel.SMALL_CPU // 运行在小核，从API version 23开始支持。
};
try {
    backgroundTaskManager.applyEfficiencyResources(request);
    console.info('applyEfficiencyResources success.');
} catch (error) {
    console.error(`applyEfficiencyResources failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

