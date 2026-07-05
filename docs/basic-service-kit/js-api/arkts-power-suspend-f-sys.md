# suspend

## suspend

```TypeScript
function suspend(isImmediate?: boolean): void
```

使设备进入睡眠状态。

**Since:** 9

**Required permissions:** 

- API version19 and later: ohos.permission.POWER_MANAGER

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isImmediate | boolean | No | 是否直接使设备进入睡眠状态。true表示灭屏后立即进入睡眠，不填该参数则默认为false，表示灭屏后由系统自动检测何时进入睡眠。如果只想做灭屏操作，建议不填参数。说明： 从API version 10开始，支持该参数。 [since 10] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4900101 | Failed to connect to the service. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. [since 19] |

**Example**

```TypeScript
try {
    power.suspend();
} catch(err) {
    console.error('suspend failed, err: ' + err);
}

```

