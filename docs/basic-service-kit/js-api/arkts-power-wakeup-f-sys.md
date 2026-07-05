# wakeup

## wakeup

```TypeScript
function wakeup(detail: string): void
```

唤醒设备。

**Since:** 9

**Required permissions:** 

- API version19 and later: ohos.permission.POWER_MANAGER

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| detail | string | Yes | 唤醒原因；该参数必须为字符串类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types; |
| 4900101 | Failed to connect to the service. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. [since 19] |

**Example**

```TypeScript
try {
    power.wakeup('wakeup_test');
} catch(err) {
    console.error('wakeup failed, err: ' + err);
}

```

