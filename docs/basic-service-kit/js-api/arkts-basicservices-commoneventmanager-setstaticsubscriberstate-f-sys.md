# setStaticSubscriberState (System API)

## Modules to Import

```TypeScript
import { commonEventManager } from '@kit.BasicServicesKit';
```

## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void
```

Enables or disables static subscription for an application. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void--><!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [1500007](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500007-failed-to-send-a-request-through-ipc) | Failed to send the message to the common event service. |
| [1500008](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500008-failed-to-initialize-the-common-event-service) | Failed to initialize the common event service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.setStaticSubscriberState(true, (err: BusinessError) => {
  if (err.code != 0) {
    console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMsg: ${err.message}`);
    return;
  }
  console.info(`setStaticSubscriberState success`);
});

```


## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean): Promise<void>
```

Enables or disables static subscription for an application. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean): Promise<void>--><!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [1500007](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500007-failed-to-send-a-request-through-ipc) | Failed to send the message to the common event service. |
| [1500008](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500008-failed-to-initialize-the-common-event-service) | Failed to initialize the common event service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.setStaticSubscriberState(false).then(() => {
  console.info(`setStaticSubscriberState success`);
}).catch((err: BusinessError) => {
  console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMsg: ${err.message}`);
});

```


## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>
```

Enables or disables the static subscription event for the current application and records the event name. This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>--><!--Device-commonEventManager-function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled. |
| events | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | No | Name of a recorded event. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [1500007](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500007-failed-to-send-a-request-through-ipc) | Failed to send the message to the common event service. |
| [1500008](../../apis-basic-services-kit/errorcode-CommonEventService.md#1500008-failed-to-initialize-the-common-event-service) | Failed to initialize the common event service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let eventName: string[] = ['usual.event.SEND_DATA'];
commonEventManager.setStaticSubscriberState(true, eventName).then(() => {
  console.info(`setStaticSubscriberState success`);
}).catch((err: BusinessError) => {
  console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMsg: ${err.message}`);
});

```

