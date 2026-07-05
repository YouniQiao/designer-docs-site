# reboot

## reboot

```TypeScript
function reboot(reason: string): void
```

重启设备。

**Since:** 9

**Required permissions:** 

 ohos.permission.REBOOT

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 重启原因。例如，“updater”表示重启后进入更新模式。如果未指定该参数，系统将在重启后进入正常模式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types; |
| 4900101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    power.reboot('reboot_test');
} catch(err) {
    console.error('reboot failed, err: ' + err);
}

```

