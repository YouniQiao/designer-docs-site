# off

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## off('scanDeviceFound')

```TypeScript
function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void
```

Unregisters a callback used to listen for the scanner discovery event. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

<!--Device-scan-function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void--><!--Device-scan-function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceFound' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ScannerDevice> | No | Callback to unregister. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';

let callback = (device: scan.ScannerDevice) => {
    console.info('scan device found: ' + JSON.stringify(device));
};
scan.on('scanDeviceFound', callback);
// Unregister the callback.
scan.off('scanDeviceFound', callback);

```


## off('scanDeviceSync')

```TypeScript
function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void
```

Unregisters a callback used to listen for the scanner sync event. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-scan-function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void--><!--Device-scan-function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceSync' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ScannerSyncDevice> | No | Callback to unregister. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';

let callback = (device: scan.ScannerSyncDevice) => {
    console.info('scan device sync: ' + JSON.stringify(device));
};
scan.on('scanDeviceSync', callback);
// Unregister the callback.
scan.off('scanDeviceSync', callback);

```

