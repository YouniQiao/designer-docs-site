# setPowerMode

## setPowerMode

```TypeScript
function setPowerMode(mode: DevicePowerMode, callback: AsyncCallback<void>): void
```

设置当前设备的电源模式。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.POWER_OPTIMIZATION

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | DevicePowerMode | Yes | 电源模式；该参数类型是一个枚举类。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置电源模式成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4900301 | Setting the power mode failed. [since 23] |

**Example**

```TypeScript
power.setPowerMode(power.DevicePowerMode.MODE_PERFORMANCE, (err: Error) => {
    if (typeof err === 'undefined') {
        console.info('set power mode to MODE_PERFORMANCE');
    } else {
        console.error('set power mode failed, err: ' + err);
    }
});

```

## setPowerMode

```TypeScript
function setPowerMode(mode: DevicePowerMode): Promise<void>
```

设置当前设备的电源模式。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.POWER_OPTIMIZATION

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | DevicePowerMode | Yes | 电源模式；该参数类型是一个枚举类。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4900301 | Setting the power mode failed. [since 23] |

**Example**

```TypeScript
power.setPowerMode(power.DevicePowerMode.MODE_PERFORMANCE)
.then(() => {
    console.info('set power mode to MODE_PERFORMANCE');
})
.catch((err : Error)=> {
    console.error('set power mode failed, err: ' + err);
});

```

