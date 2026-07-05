# BleScanner

Manages the ble scanner. Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance.

**Since:** 15

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## off('BLEDeviceFind')

```TypeScript
off(type: 'BLEDeviceFind', callback?: Callback<ScanReport>): void
```

Unsubscribe BLE scan result.

**Since:** 15

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEDeviceFind' | Yes | Type of the scan result event to listen for. |
| callback | Callback&lt;ScanReport> | No | Callback used to listen for the scan result event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { ble } from '@kit.ConnectivityKit';
function onReceiveEvent(scanReport: ble.ScanReport) {
    console.info('bluetooth device find = '+ JSON.stringify(scanReport));
}
let bleScanner: ble.BleScanner = ble.createBleScanner();
try {
    bleScanner.on('BLEDeviceFind', onReceiveEvent);
    bleScanner.off('BLEDeviceFind', onReceiveEvent);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## offBLEDeviceFind

```TypeScript
offBLEDeviceFind(callback?: Callback<ScanReport>): void
```

Unsubscribe BLE scan result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanReport> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

## on('BLEDeviceFind')

```TypeScript
on(type: 'BLEDeviceFind', callback: Callback<ScanReport>): void
```

Subscribe BLE scan result. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 15

**Required permissions:** 

- API version15  to  24: ohos.permission.ACCESS_BLUETOOTH

- API version26.0.0 and later: ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEDeviceFind' | Yes | Type of the scan result event to listen for. |
| callback | Callback&lt;ScanReport> | Yes | Callback used to listen for the scan result event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. [since 15 - 24] |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { ble } from '@kit.ConnectivityKit';
function onReceiveEvent(scanReport: ble.ScanReport) {
    console.info('bluetooth device find = '+ JSON.stringify(scanReport));
}
let bleScanner: ble.BleScanner = ble.createBleScanner();
try {
    bleScanner.on('BLEDeviceFind', onReceiveEvent);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## onBLEDeviceFind

```TypeScript
onBLEDeviceFind(callback: Callback<ScanReport>): void
```

Subscribe BLE scan result. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanReport> | Yes | Callback used to listen for the scan result event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

## startScan

```TypeScript
startScan(filters: Array<ScanFilter>, options?: ScanOptions): Promise<void>
```

Starts scanning for specified BLE devices with filters.

**Since:** 15

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filters | Array&lt;ScanFilter> | Yes | Indicates the list of filters used to filter out specified devices.  If you do not want to use filter, set this parameter to {@code null}. |
| options | ScanOptions | No | Indicates the parameters for scanning and if the user does not assign a value,  the default value will be used. {@link ScanOptions#interval} set to 0,  and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}  and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.  and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.  and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900009 | Fails to start scan as it is out of hardware resources. |
| 2900099 | Operation failed. |
| 2902050 | Failed to start scan as Ble scan is already started by the app. |

**Example**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { ble } from '@kit.ConnectivityKit';
let bleScanner: ble.BleScanner = ble.createBleScanner();
function onReceiveEvent(scanReport: ble.ScanReport) {
    console.info('BLE scan device find result = '+ JSON.stringify(scanReport));
}
try {
    bleScanner.on("BLEDeviceFind", onReceiveEvent);
    let scanFilter: ble.ScanFilter = {
            deviceId:"XX:XX:XX:XX:XX:XX",
            name:"test",
            serviceUuid:"00001888-0000-1000-8000-00805f9b34fb"
        };
    let scanOptions: ble.ScanOptions = {
        interval: 500,
        dutyMode: ble.ScanDuty.SCAN_MODE_LOW_POWER,
        matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE,
        reportMode: ble.ScanReportMode.FENCE_SENSITIVITY_LOW
    }
    bleScanner.startScan([scanFilter],scanOptions);
    console.info('startScan success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## startScan

```TypeScript
startScan(filters: Array<ScanFilter> | null, options?: ScanOptions): Promise<void>
```

Starts scanning for specified BLE devices with filters.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filters | Array&lt;ScanFilter> \| null | Yes | Indicates the list of filters used to filter out specified devices.  If you do not want to use filter, set this parameter to {@code null}. |
| options | ScanOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900009 | Fails to start scan as it is out of hardware resources. |
| 2900099 | Operation failed. |
| 2902050 | Failed to start scan as Ble scan is already started by the app. |

## stopScan

```TypeScript
stopScan(): Promise<void>
```

Stops BLE scanning.

**Since:** 15

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { ble } from '@kit.ConnectivityKit';
let bleScanner: ble.BleScanner = ble.createBleScanner();
try {
    bleScanner.stopScan();
    console.info('stopScan success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

