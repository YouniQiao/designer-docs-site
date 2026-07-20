# isWearDetectionSupported (System API)

## Modules to Import

```TypeScript
import { wearDetection } from '@kit.ConnectivityKit';
```

## isWearDetectionSupported

```TypeScript
function isWearDetectionSupported(deviceId: string, callback: AsyncCallback<boolean>): void
```

Checks whether the device supports wear detection.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

<!--Device-wearDetection-function isWearDetectionSupported(deviceId: string, callback: AsyncCallback<boolean>): void--><!--Device-wearDetection-function isWearDetectionSupported(deviceId: string, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID.For example, "11:22:33:AA:BB:FF", |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | the Callback result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
try {
    wearDetection.isWearDetectionSupported('XX:XX:XX:XX:XX:XX', (err, supported) => {
        console.info('device support wear detection ' + supported);
    });
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```


## isWearDetectionSupported

```TypeScript
function isWearDetectionSupported(deviceId: string): Promise<boolean>
```

Checks whether the device supports wear detection.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

<!--Device-wearDetection-function isWearDetectionSupported(deviceId: string): Promise<boolean>--><!--Device-wearDetection-function isWearDetectionSupported(deviceId: string): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID.For example, "11:22:33:AA:BB:FF", |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
try {
    wearDetection.isWearDetectionSupported('XX:XX:XX:XX:XX:XX').then((supported) => {
        console.info('device support wear detection ' + supported);
    });
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

