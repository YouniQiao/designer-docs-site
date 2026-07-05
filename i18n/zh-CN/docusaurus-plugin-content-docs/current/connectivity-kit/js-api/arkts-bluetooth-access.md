# @ohos.bluetooth.access

Provides methods for enabling/disabling bluetooth or monitoring bluetooth state.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addPersistentDeviceId](arkts-access-addpersistentdeviceid-f.md#addPersistentDeviceId-1) | Add a persistent random device address. Once the randomized address is successfully added, the application can save it for an extended period of time. |
| [convertUuid](arkts-access-convertuuid-f.md#convertUuid-1) | Convert 2-byte and 4-byte UUID strings to the 16-byte UUID string standard used in Bluetooth. |
| [deletePersistentDeviceId](arkts-access-deletepersistentdeviceid-f.md#deletePersistentDeviceId-1) | Delete a persistent random device address. |
| [disableBluetooth](arkts-access-disablebluetooth-f.md#disableBluetooth-1) | Disables Bluetooth on a device. |
| [disableBluetoothAsync](arkts-access-disablebluetoothasync-f.md#disableBluetoothAsync-1) | Asynchronous interface for disables Bluetooth on a device. |
| [enableBluetooth](arkts-access-enablebluetooth-f.md#enableBluetooth-1) | Enables Bluetooth on a device. |
| [enableBluetoothAsync](arkts-access-enablebluetoothasync-f.md#enableBluetoothAsync-1) | Asynchronous interface for enables Bluetooth on a device. |
| <!--DelRow-->[factoryReset](arkts-access-factoryreset-f-sys.md#factoryReset-1) | Restoring bluetooth settings. |
| <!--DelRow-->[factoryReset](arkts-access-factoryreset-f-sys.md#factoryReset-2) | Restoring bluetooth settings. |
| <!--DelRow-->[getLocalAddress](arkts-access-getlocaladdress-f-sys.md#getLocalAddress-1) | Obtaining the MAC address of the local device. |
| [getPersistentDeviceIds](arkts-access-getpersistentdeviceids-f.md#getPersistentDeviceIds-1) | Obtains the persistent randomized device address of the application. |
| [getState](arkts-access-getstate-f.md#getState-1) | Obtains the Bluetooth status of a device. |
| [isBluetoothSupported](arkts-access-isbluetoothsupported-f.md#isBluetoothSupported-1) | Check whether Bluetooth is available. |
| [isValidRandomDeviceId](arkts-access-isvalidrandomdeviceid-f.md#isValidRandomDeviceId-1) | Determine whether the randomized device address application can still be used. |
| <!--DelRow-->[notifyDialogResult](arkts-access-notifydialogresult-f-sys.md#notifyDialogResult-1) | Notify bluetooth the result of bluetooth dialog. |
| [off](arkts-access-off-f.md#off-1) | Unsubscribe the event reported when the Bluetooth state changes. |
| [offStateChange](arkts-access-offstatechange-f.md#offStateChange-1) | Unsubscribe the event reported when the Bluetooth state changes. |
| [on](arkts-access-on-f.md#on-1) | Subscribe the event reported when the Bluetooth state changes. |
| [onStateChange](arkts-access-onstatechange-f.md#onStateChange-1) | Subscribe the event reported when the Bluetooth state changes. |
| <!--DelRow-->[restrictBluetooth](arkts-access-restrictbluetooth-f-sys.md#restrictBluetooth-1) | Restrict Bluetooth BR/EDR ability on a device. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[NotifyDialogResultParams](arkts-access-notifydialogresultparams-i-sys.md) | Describes the result of bluetooth dialog. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BluetoothState](arkts-access-bluetoothstate-e.md) | The enum of bluetooth state. |
| <!--DelRow-->[DialogType](arkts-access-dialogtype-e-sys.md) | The enum of bluetooth dialog type. |

