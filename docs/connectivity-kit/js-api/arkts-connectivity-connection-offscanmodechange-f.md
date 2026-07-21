# offScanModeChange

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="offscanmodechange"></a>
## offScanModeChange

```TypeScript
function offScanModeChange(callback?: Callback<ScanMode>): void
```

Unsubscribe to an event indicating that the scanning mode of the local device has changed.

**Since:** 23

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function offScanModeChange(callback?: Callback<ScanMode>): void--><!--Device-connection-function offScanModeChange(callback?: Callback<ScanMode>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ScanMode&gt; | No | Callback used to listen. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
function ScanModeChangeEvent(scanMode: connection.ScanMode) {
    console.info(`Scan mode has changed, new mode: ${scanMode}`);
}
try {
    connection.offScanModeChange(ScanModeChangeEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

