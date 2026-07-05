# registerShutdownCallback

## registerShutdownCallback

```TypeScript
function registerShutdownCallback(callback: Callback<boolean>): void
```

订阅电源关机或重启的回调提醒。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.REBOOT

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | 回调函数，返回true表示重启；返回false表示关机。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    power.registerShutdownCallback((isReboot: boolean) => {
        console.info('device shutdown is: ' + isReboot);
    });
    console.info('register shutdown callback success.');
} catch(err) {
    console.error('register shutdown callback failed, err: ' + err);
}

```

