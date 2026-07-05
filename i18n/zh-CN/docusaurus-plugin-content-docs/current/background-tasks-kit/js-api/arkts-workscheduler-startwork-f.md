# startWork

## startWork

```TypeScript
function startWork(work: WorkInfo): void
```

申请延迟任务，成功后会把任务添加到执行队列，满足触发条件后由系统调度执行。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ResourceSchedule.WorkScheduler

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| work | WorkInfo | 是 | The info of work. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types; 3. Parameter verification failed. |
| 9700001 | Memory operation failed. |
| 9700002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9700003 | System service operation failed. |
| 9700004 | Check on workInfo failed. |
| 9700005 | Calling startWork failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { workScheduler } from '@kit.BackgroundTasksKit';

let workInfo: workScheduler.WorkInfo = {
  workId: 1,
  batteryStatus: workScheduler.BatteryStatus.BATTERY_STATUS_LOW,
  isRepeat: false,
  isPersisted: true,
  bundleName: 'com.example.myapplication',
  abilityName: 'MyExtension',
  parameters: {
    intValue: 1,
    stringValue: 'string value',
    booleanValue: true,
    floatValue: 1.5
  }
}
try {
  workScheduler.startWork(workInfo);
  console.info('workschedulerLog startWork success');
} catch (error) {
  console.error(`workschedulerLog startwork failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

