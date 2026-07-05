# isWearDetectionEnabled

## isWearDetectionEnabled

```TypeScript
function isWearDetectionEnabled(deviceId: string, callback: AsyncCallback<boolean>): void
```

Check whether the wearing detection is enabled.

**起始版本：** 11

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID.For example, "11:22:33:AA:BB:FF", |
| callback | AsyncCallback&lt;boolean> | 是 | the Callback result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID.For example, "11:22:33:AA:BB:FF", |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
try {
    wearDetection.isWearDetectionEnabled('XX:XX:XX:XX:XX:XX').then((enabled) => {
        console.info('device enable wear detection ' + enabled);
    });
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

