# BLE

Provides methods to operate or manage Bluetooth.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** ble/ble

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createGattServer](arkts-connectivity-creategattserver-f.md#creategattserver-1) | create a JavaScript Gatt server instance. |
| [createGattClientDevice](arkts-connectivity-creategattclientdevice-f.md#creategattclientdevice-1) | create a JavaScript Gatt client device instance. |
| [getConnectedBLEDevices](arkts-connectivity-getconnectedbledevices-f.md#getconnectedbledevices-1) | Obtains the list of devices in the connected status. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [startBLEScan](arkts-connectivity-startblescan-f.md#startblescan-1) | Starts scanning for specified BLE devices with filters. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and MANAGE_BLUETOOTH and LOCATION to ACCESS_BLUETOOTH. |
| [stopBLEScan](arkts-connectivity-stopblescan-f.md#stopblescan-1) | Stops BLE scanning. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe BLE scan result. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe BLE scan result. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |

