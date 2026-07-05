# BLE

Provides methods to operate or manage Bluetooth.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createGattClientDevice](arkts-ble-creategattclientdevice-f.md#createGattClientDevice-1) | create a JavaScript Gatt client device instance. |
| [createGattServer](arkts-ble-creategattserver-f.md#createGattServer-1) | create a JavaScript Gatt server instance. |
| [getConnectedBLEDevices](arkts-ble-getconnectedbledevices-f.md#getConnectedBLEDevices-1) | Obtains the list of devices in the connected status. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-ble-off-f.md#off-1) | Unsubscribe BLE scan result. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-ble-on-f.md#on-1) | Subscribe BLE scan result. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [startBLEScan](arkts-ble-startblescan-f.md#startBLEScan-1) | Starts scanning for specified BLE devices with filters. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and MANAGE_BLUETOOTH and LOCATION to ACCESS_BLUETOOTH. |
| [stopBLEScan](arkts-ble-stopblescan-f.md#stopBLEScan-1) | Stops BLE scanning. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |

