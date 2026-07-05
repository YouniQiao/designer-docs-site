# startTimer

## startTimer

```TypeScript
function startTimer(timer: long, triggerTime: long, callback: AsyncCallback<void>): void
```

开启定时器，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timer | long | Yes | 定时器的ID。 |
| triggerTime | long | Yes | 定时器的触发时间，单位：毫秒。 若定时器类型包含了TIMER_TYPE_REALTIME，该triggerTime应为系统启动时间，建议通过  [systemDateTime.getUptime(STARTUP)](arkts-systemdatetime-getuptime-f.md#getUptime-1)获取； 若定时器类型不包含  TIMER_TYPE_REALTIME，该triggerTime应为墙上时间，建议通过  [systemDateTime.getTime()](arkts-systemdatetime-gettime-f.md#getTime-1)获取。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: systemTimer.TimerOptions = {
  type: systemTimer.TIMER_TYPE_REALTIME,
  repeat:false
}
let triggerTime: number = new Date().getTime();
triggerTime += 3000;

try {
  systemTimer.createTimer(options).then((timerId: number) => {
    systemTimer.startTimer(timerId, triggerTime, (error: BusinessError) => {
      if (error) {
        console.error(`Failed to start timer. message: ${error.message}, code: ${error.code}`);
        return;
      }
      console.info(`Succeeded in starting the timer.`);
    });
    console.info(`Succeeded in creating a timer. timerId: ${timerId}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to create timer. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to create timer. message: ${error.message}, code: ${error.code}`);
}

```

## startTimer

```TypeScript
function startTimer(timer: long, triggerTime: long): Promise<void>
```

开启定时器，使用Promise进行异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timer | long | Yes | 定时器的ID。 |
| triggerTime | long | Yes | 定时器的触发时间，单位：毫秒。 若定时器类型包含了TIMER_TYPE_REALTIME，该triggerTime应为系统启动时间，建议通过  [systemDateTime.getUptime(STARTUP)](arkts-systemdatetime-getuptime-f.md#getUptime-1)获取； 若定时器类型不包含  TIMER_TYPE_REALTIME，该triggerTime应为墙上时间，建议通过  [systemDateTime.getTime()](arkts-systemdatetime-gettime-f.md#getTime-1)获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: systemTimer.TimerOptions = {
  type: systemTimer.TIMER_TYPE_REALTIME,
  repeat:false
}
let triggerTime: number = new Date().getTime();
triggerTime += 3000;

try {
  systemTimer.createTimer(options).then((timerId: number) => {
    systemTimer.startTimer(timerId, triggerTime).then(() => {
      console.info(`Succeeded in starting the timer.`);
    }).catch((error: BusinessError) => {
      console.error(`Failed to start timer. message: ${error.message}, code: ${error.code}`);
    });
    console.info(`Succeeded in creating a timer. timerId: ${timerId}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to create timer. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to create timer. message: ${error.message}, code: ${error.code}`);
}

```

