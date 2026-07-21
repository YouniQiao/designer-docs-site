# startBLEScan

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

<a id="startblescan"></a>
## startBLEScan

```TypeScript
function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void
```

Starts scanning for specified BLE devices with filters.On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and MANAGE_BLUETOOTH and LOCATION to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** startBLEScan

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

<!--Device-BLE-function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void--><!--Device-BLE-function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filters | Array&lt;ScanFilter&gt; | Yes | Indicates the list of filters used to filter out specified devices.If you do not want to use filter, set this parameter to {@code null}. |
| options | [ScanOptions](arkts-connectivity-bluetoothmanager-scanoptions-i.md) | No | Indicates the parameters for scanning and if the user does not assign a value,the default value will be used.{@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
function onReceiveEvent(data: Array<bluetoothManager.ScanResult>) {
    console.info('BLE scan device find result = '+ JSON.stringify(data));
}
try {
    bluetoothManager.BLE.on("BLEDeviceFind", onReceiveEvent);
    let scanfilter: bluetoothManager.ScanFilter = {
        deviceId:"XX:XX:XX:XX:XX:XX",
        name:"test",
        serviceUuid:"00001888-0000-1000-8000-00805f9b34fb"
    };
    let scanoptions: bluetoothManager.ScanOptions = {
        interval: 500,
        dutyMode: bluetoothManager.ScanDuty.SCAN_MODE_LOW_POWER,
        matchMode: bluetoothManager.MatchMode.MATCH_MODE_AGGRESSIVE,
    }
    bluetoothManager.BLE.startBLEScan([scanfilter], scanoptions);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

