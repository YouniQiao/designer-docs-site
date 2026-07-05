# stopManualNetworkScan

## stopManualNetworkScan

```TypeScript
function stopManualNetworkScan(slotId: int): Promise<void>
```

Stop ManualNetworkScan.

**Since:** 23

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise return stopManualNetworkScan. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
radio.startManualNetworkScan(0, (err: BusinessError, data: radio.NetworkSearchRealTimeResult) => {
    if (err) {
        console.error(`startManualNetworkScan failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`startManualNetworkScan success, callback: data->${JSON.stringify(data)}`);
    radio.stopManualNetworkScan(0);
});

```

