# hibernate

## hibernate

```TypeScript
function hibernate(clearMemory: boolean): void
```

休眠设备。

**Since:** 12

**Required permissions:** 

- API version19 and later: ohos.permission.POWER_MANAGER

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clearMemory | boolean | Yes | true 代表在进入休眠之前清理内存，否则为false。 |

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
    power.hibernate(true);
} catch(err) {
    console.error('hibernate failed, err: ' + err);
}

```

