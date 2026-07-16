# @ohos.bluetooth.access

Provides methods for enabling/disabling bluetooth or monitoring bluetooth state.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addPersistentDeviceId](arkts-connectivity-addpersistentdeviceid-f.md#addpersistentdeviceid-1) | Add a persistent random device address. Once the randomized address is successfully added,the application can save it for an extended period of time. |
| [convertUuid](arkts-connectivity-convertuuid-f.md#convertuuid-1) | Convert 2-byte and 4-byte UUID strings to the 16-byte UUID string standard used in Bluetooth. |
| [deletePersistentDeviceId](arkts-connectivity-deletepersistentdeviceid-f.md#deletepersistentdeviceid-1) | Delete a persistent random device address. |
| [disableBluetooth](arkts-connectivity-disablebluetooth-f.md#disablebluetooth-1) | Disables Bluetooth on a device. |
| [disableBluetoothAsync](arkts-connectivity-disablebluetoothasync-f.md#disablebluetoothasync-1) | Asynchronous interface for disables Bluetooth on a device. |
| [enableBluetooth](arkts-connectivity-enablebluetooth-f.md#enablebluetooth-1) | Enables Bluetooth on a device. |
| [enableBluetoothAsync](arkts-connectivity-enablebluetoothasync-f.md#enablebluetoothasync-1) | Asynchronous interface for enables Bluetooth on a device. |
| [getPersistentDeviceIds](arkts-connectivity-getpersistentdeviceids-f.md#getpersistentdeviceids-1) | Obtains the persistent randomized device address of the application. |
| [getState](arkts-connectivity-getstate-f.md#getstate-1) | Obtains the Bluetooth status of a device. |
| [isBluetoothSupported](arkts-connectivity-isbluetoothsupported-f.md#isbluetoothsupported-1) | Check whether Bluetooth is available. |
| [isValidRandomDeviceId](arkts-connectivity-isvalidrandomdeviceid-f.md#isvalidrandomdeviceid-1) | Determine whether the randomized device address application can still be used. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe the event reported when the Bluetooth state changes. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe the event reported when the Bluetooth state changes. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [factoryReset](arkts-connectivity-factoryreset-f-sys.md#factoryreset-1) | Restoring bluetooth settings. |
| [factoryReset](arkts-connectivity-factoryreset-f-sys.md#factoryreset-2) | Restoring bluetooth settings. |
| [getLocalAddress](arkts-connectivity-getlocaladdress-f-sys.md#getlocaladdress-1) | Obtaining the MAC address of the local device. |
| [notifyDialogResult](arkts-connectivity-notifydialogresult-f-sys.md#notifydialogresult-1) | Notify bluetooth the result of bluetooth dialog. |
| [restrictBluetooth](arkts-connectivity-restrictbluetooth-f-sys.md#restrictbluetooth-1) | Restrict Bluetooth BR/EDR ability on a device. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [NotifyDialogResultParams](arkts-connectivity-notifydialogresultparams-i-sys.md) | Describes the result of bluetooth dialog. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BluetoothState](arkts-connectivity-bluetoothstate-e.md) | The enum of bluetooth state. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DialogType](arkts-connectivity-dialogtype-e-sys.md) | The enum of bluetooth dialog type. |
<!--DelEnd-->

