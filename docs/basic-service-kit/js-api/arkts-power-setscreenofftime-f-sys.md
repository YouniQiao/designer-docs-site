# setScreenOffTime

## setScreenOffTime

```TypeScript
function setScreenOffTime(timeout: long): void
```

设置熄屏超时时间。

**Since:** 12

**Required permissions:** 

- API version19 and later: ohos.permission.POWER_MANAGER

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | long | Yes | 熄屏超时时间，单位是毫秒，大于0代表熄屏超时时间，-1代表恢复默认超时时间，其它是无效值。 |

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
    power.setScreenOffTime(30000);
} catch(err) {
    console.error('set screen off time failed, err: ' + err);
}

```

