# stopTimer (System API)

## Modules to Import

```TypeScript
import { systemTimer } from '@kit.BasicServicesKit';
```

## stopTimer

```TypeScript
function stopTimer(timer: number, callback: AsyncCallback<void>): void
```

Stops the timer. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-systemTimer-function stopTimer(timer: long, callback: AsyncCallback<void>): void--><!--Device-systemTimer-function stopTimer(timer: long, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timer | number | Yes | ID of the timer. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |

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
    systemTimer.startTimer(timerId, triggerTime);
    systemTimer.stopTimer(timerId, (error: BusinessError) => {
      if (error) {
        console.error(`Failed to stop timer. message: ${error.message}, code: ${error.code}`);
        return;
      }
    console.info(`Succeeded in stopping the timer.`);
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


## stopTimer

```TypeScript
function stopTimer(timer: number): Promise<void>
```

Stops a timer. This API uses a promise to return the result.

**Since:** 7

<!--Device-systemTimer-function stopTimer(timer: long): Promise<void>--><!--Device-systemTimer-function stopTimer(timer: long): Promise<void>-End-->

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timer | number | Yes | ID of the timer. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |

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
    systemTimer.startTimer(timerId, triggerTime);
    systemTimer.stopTimer(timerId).then(() => {
      console.info(`Succeeded in stopping the timer.`);
    }).catch((error: BusinessError) => {
      console.error(`Failed to stop timer. message: ${error.message}, code: ${error.code}`);
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

