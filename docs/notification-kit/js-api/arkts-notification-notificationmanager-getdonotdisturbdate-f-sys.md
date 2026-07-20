# getDoNotDisturbDate (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void
```

Obtains the DND time. This API uses an asynchronous callback to return the result.

This API can be properly called on devices other than wearables and TVs. If it is called on wearables and TVs,error code 801 is returned.

**Since:** 9

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notificationManager-function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void--><!--Device-notificationManager-function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DoNotDisturbDate> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let getDoNotDisturbDateCallback = (err: BusinessError, data: notificationManager.DoNotDisturbDate): void => {
    if (err) {
        console.error(`getDoNotDisturbDate failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info(`getDoNotDisturbDate success, data is ${JSON.stringify(data)}`);
    }
}

notificationManager.getDoNotDisturbDate(getDoNotDisturbDateCallback);

```


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(): Promise<DoNotDisturbDate>
```

Obtains the DND time. This API uses a promise to return the result.

This API can be properly called on devices other than wearables and TVs. If it is called on wearables and TVs,error code 801 is returned.

**Since:** 9

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notificationManager-function getDoNotDisturbDate(): Promise<DoNotDisturbDate>--><!--Device-notificationManager-function getDoNotDisturbDate(): Promise<DoNotDisturbDate>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DoNotDisturbDate> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.getDoNotDisturbDate().then((data: notificationManager.DoNotDisturbDate) => {
  console.info(`getDoNotDisturbDate success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDoNotDisturbDate failed, code is ${err.code}, message is ${err.message}`);
});

```


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void
```

Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result.

This API can be properly called on devices other than wearables and TVs. If it is called on wearables and TVs,error code 801 is returned.

**Since:** 9

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notificationManager-function getDoNotDisturbDate(userId: int, callback: AsyncCallback<DoNotDisturbDate>): void--><!--Device-notificationManager-function getDoNotDisturbDate(userId: int, callback: AsyncCallback<DoNotDisturbDate>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DoNotDisturbDate> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600008](../errorcode-notification.md#1600008-user-not-found) | The user does not exist. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let getDoNotDisturbDateCallback = (err: BusinessError, data: notificationManager.DoNotDisturbDate): void => {
    if (err) {
        console.error(`getDoNotDisturbDate failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info(`getDoNotDisturbDate success, data is ${JSON.stringify(data)}`);
    }
}

// Use the actual user ID when calling the API.
let userId: number = 1;

notificationManager.getDoNotDisturbDate(userId, getDoNotDisturbDateCallback);

```


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>
```

Obtains the DND time of a specified user. This API uses a promise to return the result.

This API can be properly called on devices other than wearables and TVs. If it is called on wearables and TVs,error code 801 is returned.

**Since:** 9

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notificationManager-function getDoNotDisturbDate(userId: int): Promise<DoNotDisturbDate>--><!--Device-notificationManager-function getDoNotDisturbDate(userId: int): Promise<DoNotDisturbDate>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DoNotDisturbDate> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600008](../errorcode-notification.md#1600008-user-not-found) | The user does not exist. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Use the actual user ID when calling the API.
let userId: number = 1;

notificationManager.getDoNotDisturbDate(userId).then((data: notificationManager.DoNotDisturbDate) => {
    console.info(`getDoNotDisturbDate success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDoNotDisturbDate failed, code is ${err.code}, message is ${err.message}`);
});

```

