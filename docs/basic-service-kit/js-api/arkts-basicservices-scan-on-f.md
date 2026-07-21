# on

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

<a id="on"></a>
## on('scanDeviceFound')

```TypeScript
function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void
```

Registers a callback used to listen for the scanner discovery event. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

<!--Device-scan-function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void--><!--Device-scan-function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceFound' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ScannerDevice&gt; | Yes | Callback used to return the discovered scanner. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';

scan.on('scanDeviceFound', (device: scan.ScannerDevice) => {
    console.info('scan device found: ' + JSON.stringify(device));
})

```


<a id="on-1"></a>
## on('scanDeviceSync')

```TypeScript
function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void
```

Registers a callback used to listen for the scanner sync event. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-scan-function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void--><!--Device-scan-function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceSync' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ScannerSyncDevice&gt; | Yes | Callback used to return the synced scanner. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';

scan.on('scanDeviceSync', (device: scan.ScannerSyncDevice) => {
    console.info('scan device sync: ' + JSON.stringify(device));
})

```

