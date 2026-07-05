# isWearDetectionEnabled

## isWearDetectionEnabled

```TypeScript
function isWearDetectionEnabled(deviceId: string, callback: AsyncCallback<boolean>): void
```

Check whether the wearing detection is enabled.

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID.For example, "11:22:33:AA:BB:FF", |
| callback | AsyncCallback&lt;boolean> | Yes | the Callback result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
try {
    wearDetection.isWearDetectionEnabled('XX:XX:XX:XX:XX:XX', (err, enabled) => {
        console.info('device enable wear detection ' + enabled);
    });
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

## isWearDetectionEnabled

```TypeScript
function isWearDetectionEnabled(deviceId: string): Promise<boolean>
```

Check whether the wearing detection is enabled.

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID.For example, "11:22:33:AA:BB:FF", |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
try {
    wearDetection.isWearDetectionEnabled('XX:XX:XX:XX:XX:XX').then((enabled) => {
        console.info('device enable wear detection ' + enabled);
    });
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

