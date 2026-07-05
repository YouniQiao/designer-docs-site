# unregisterShutdownCallback

## unregisterShutdownCallback

```TypeScript
function unregisterShutdownCallback(callback?: Callback<void>): void
```

取消订阅电源关机或重启的回调提醒。使用callback同步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.REBOOT

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    power.unregisterShutdownCallback(() => {
        console.info('unsubscribe shutdown success.');
    });
    console.info('unregister shutdown callback success.');
} catch(err) {
    console.error('unregister shutdown callback failed, err: ' + err);
}

```

