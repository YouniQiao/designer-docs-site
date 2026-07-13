# setBadgeNumberByBundle (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## setBadgeNumberByBundle

```TypeScript
function setBadgeNumberByBundle(bundle: BundleOption, badgeNumber: number): Promise<void>
```

Sets the badge count for other applications. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| badgeNumber | number | Yes | Notification badge number to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-insufficient-memory-space) | No memory space. |
| [1600017](../errorcode-notification.md#1600017-no-configured-proxy-relationship) | There is no corresponding agent relationship configuration. |
| [17700001](../../apis-ability-kit/errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundle: notificationManager.BundleOption = {
    bundle: 'com.example.bundleName',
};
let badgeNumber: number = 10;

notificationManager.setBadgeNumberByBundle(bundle, badgeNumber).then(() => {
    console.info('setBadgeNumberByBundle success');
}).catch((err: BusinessError) => {
    console.error(`setBadgeNumberByBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

