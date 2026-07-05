# onScanModeChange

## Modules to Import

```TypeScript
import { connection } from '@ohos.bluetooth.connection';
```

## onScanModeChange

```TypeScript
function onScanModeChange(callback: Callback<ScanMode>): void
```

Subscribe to an event indicating that the scanning mode of the local device has changed.

**Since:** 23

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanMode&gt; | Yes | Callback used to listen. |

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
    connection.onScanModeChange(ScanModeChangeEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

