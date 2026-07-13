# @ohos.bluetooth.connection

Provides methods to operate or manage Bluetooth.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getBluetoothScanMode](arkts-connectivity-getbluetoothscanmode-f.md#getbluetoothscanmode-1) | Obtains the Bluetooth scanning mode of a device. |
| [getLastConnectionTime](arkts-connectivity-getlastconnectiontime-f.md#getlastconnectiontime-1) | Get latest connection time of device. |
| [getLocalName](arkts-connectivity-getlocalname-f.md#getlocalname-1) | Obtains the Bluetooth local name of a device. |
| [getPairState](arkts-connectivity-getpairstate-f.md#getpairstate-1) | Obtains the pair state of a specified device. |
| [getPairedDevices](arkts-connectivity-getpaireddevices-f.md#getpaireddevices-1) | Obtains the list of Bluetooth devices that have been paired with the current device.On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [getProfileConnectionState](arkts-connectivity-getprofileconnectionstate-f.md#getprofileconnectionstate-1) | Get the profile connection state of the current device. |
| [getRemoteDeviceBatteryInfo](arkts-connectivity-getremotedevicebatteryinfo-f.md#getremotedevicebatteryinfo-1) | Get remote device battery information. |
| [getRemoteDeviceClass](arkts-connectivity-getremotedeviceclass-f.md#getremotedeviceclass-1) | Obtains the class of a peer Bluetooth device. |
| [getRemoteDeviceName](arkts-connectivity-getremotedevicename-f.md#getremotedevicename-1) | Obtains the name of a peer Bluetooth device. |
| [getRemoteDeviceName](arkts-connectivity-getremotedevicename-f.md#getremotedevicename-2) | Obtains the name or alias of the Bluetooth peer device. |
| [getRemoteDeviceTransport](arkts-connectivity-getremotedevicetransport-f.md#getremotedevicetransport-1) | Get the transport of the bluetooth device. |
| [getVirtualAddressByHash](arkts-connectivity-getvirtualaddressbyhash-f.md#getvirtualaddressbyhash-1) | Obtain the virtual address of the corresponding device based on the hash value of the real address. |
| [isBluetoothDiscovering](arkts-connectivity-isbluetoothdiscovering-f.md#isbluetoothdiscovering-1) | Check if bluetooth is discovering. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [off](arkts-connectivity-off-f.md#off-3) | Unsubscribe the event reported when a remote Bluetooth device is bonded. |
| [off](arkts-connectivity-off-f.md#off-4) | Unsubscribe the event of a pairing request from a remote Bluetooth device. |
| [off](arkts-connectivity-off-f.md#off-5) | Unsubscribe the event of battery state changed from a remote device. |
| [offAclStateChange](arkts-connectivity-offaclstatechange-f.md#offaclstatechange-1) | Unsubscribe the event of acl state changed from a remote device.If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [offScanModeChange](arkts-connectivity-offscanmodechange-f.md#offscanmodechange-1) | Unsubscribe to an event indicating that the scanning mode of the local device has changed. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered.On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connectivity-on-f.md#on-3) | Subscribe the event reported when a remote Bluetooth device is bonded.On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connectivity-on-f.md#on-4) | Subscribe the event of a pairing request from a remote Bluetooth device.On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connectivity-on-f.md#on-5) | Subscribe the event of battery state changed from a remote device. |
| [onAclStateChange](arkts-connectivity-onaclstatechange-f.md#onaclstatechange-1) | Subscribe the event of acl state changed from a remote device.If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [onScanModeChange](arkts-connectivity-onscanmodechange-f.md#onscanmodechange-1) | Subscribe to an event indicating that the scanning mode of the local device has changed. |
| [pairDevice](arkts-connectivity-pairdevice-f.md#pairdevice-1) | Starts pairing with a remote Bluetooth device. |
| [pairDevice](arkts-connectivity-pairdevice-f.md#pairdevice-2) | Starts pairing with a remote Bluetooth device. |
| [pairDevice](arkts-connectivity-pairdevice-f.md#pairdevice-3) | Starts pairing with a remote Bluetooth device. |
| [setBluetoothScanMode](arkts-connectivity-setbluetoothscanmode-f.md#setbluetoothscanmode-1) | Sets the Bluetooth scan mode for a device. |
| [setDevicePairingConfirmation](arkts-connectivity-setdevicepairingconfirmation-f.md#setdevicepairingconfirmation-1) | Sets the confirmation of pairing with a certain device. |
| [setDevicePinCode](arkts-connectivity-setdevicepincode-f.md#setdevicepincode-1) | Set the pin during pairing when the pin type is PIN_TYPE_ENTER_PIN_CODE. |
| [setDevicePinCode](arkts-connectivity-setdevicepincode-f.md#setdevicepincode-2) | Set the pin during pairing when the pin type is PIN_TYPE_ENTER_PIN_CODE. |
| [setLocalName](arkts-connectivity-setlocalname-f.md#setlocalname-1) | Sets the Bluetooth friendly name of a device. It is used only by system applications for security.If a non-system application invokes the interface, exception 801 is thrown. |
| [setRemoteDeviceName](arkts-connectivity-setremotedevicename-f.md#setremotedevicename-1) | Modify remote device name. |
| [startBluetoothDiscovery](arkts-connectivity-startbluetoothdiscovery-f.md#startbluetoothdiscovery-1) | Starts scanning Bluetooth devices. |
| [stopBluetoothDiscovery](arkts-connectivity-stopbluetoothdiscovery-f.md#stopbluetoothdiscovery-1) | Stops Bluetooth device scanning. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cancelPairedDevice](arkts-connectivity-cancelpaireddevice-f-sys.md#cancelpaireddevice-1) | Remove a paired remote device. |
| [cancelPairedDevice](arkts-connectivity-cancelpaireddevice-f-sys.md#cancelpaireddevice-2) | Remove a paired remote device. |
| [cancelPairingDevice](arkts-connectivity-cancelpairingdevice-f-sys.md#cancelpairingdevice-1) | Remove a pairing remote device. |
| [cancelPairingDevice](arkts-connectivity-cancelpairingdevice-f-sys.md#cancelpairingdevice-2) | Remove a pairing remote device. |
| [connectAllowedProfiles](arkts-connectivity-connectallowedprofiles-f-sys.md#connectallowedprofiles-1) | Connects all allowed bluetooth profiles between the local and remote device. |
| [connectAllowedProfiles](arkts-connectivity-connectallowedprofiles-f-sys.md#connectallowedprofiles-2) | Connects all allowed bluetooth profiles between the local and remote device. |
| [controlDeviceAction](arkts-connectivity-controldeviceaction-f-sys.md#controldeviceaction-1) | Controls the actions of Bluetooth peripherals. |
| [disconnectAllowedProfiles](arkts-connectivity-disconnectallowedprofiles-f-sys.md#disconnectallowedprofiles-1) | Disconnects all allowed bluetooth profiles between the local and remote device. |
| [disconnectAllowedProfiles](arkts-connectivity-disconnectallowedprofiles-f-sys.md#disconnectallowedprofiles-2) | Disconnects all allowed bluetooth profiles between the local and remote device. |
| [generateLocalOobData](arkts-connectivity-generatelocaloobdata-f-sys.md#generatelocaloobdata-1) | Generate out-of-band data of the local device. |
| [getCarKeyDfxData](arkts-connectivity-getcarkeydfxdata-f-sys.md#getcarkeydfxdata-1) | Get the dfx data of car key. |
| [getLocalProfileUuids](arkts-connectivity-getlocalprofileuuids-f-sys.md#getlocalprofileuuids-1) | Obtains the profile UUIDs supported by the local device. |
| [getLocalProfileUuids](arkts-connectivity-getlocalprofileuuids-f-sys.md#getlocalprofileuuids-2) | Obtains the profile UUIDs supported by the local device. |
| [getRemoteDeviceType](arkts-connectivity-getremotedevicetype-f-sys.md#getremotedevicetype-1) | Get remote device custom type. |
| [getRemoteProductId](arkts-connectivity-getremoteproductid-f-sys.md#getremoteproductid-1) | Obtains the product ID of a remote device. |
| [getRemoteProfileUuids](arkts-connectivity-getremoteprofileuuids-f-sys.md#getremoteprofileuuids-1) | Obtains the profile UUIDs supported by the remote device. |
| [getRemoteProfileUuids](arkts-connectivity-getremoteprofileuuids-f-sys.md#getremoteprofileuuids-2) | Obtains the profile UUIDs supported by the remote device. |
| [off](arkts-connectivity-off-f-sys.md#off-2) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [on](arkts-connectivity-on-f-sys.md#on-2) | Subscribe the event reported when a remote Bluetooth device is discovered.On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,the type of the peer device address is real.Otherwise, the type of the peer device address is virtual. |
| [pairCredibleDevice](arkts-connectivity-paircredibledevice-f-sys.md#paircredibledevice-1) | Starts pairing with a credible remote Bluetooth device with transport.This interface does not trigger a dialog box and does not require user authorization.Only specific system application can use this function. |
| [pairCredibleDevice](arkts-connectivity-paircredibledevice-f-sys.md#paircredibledevice-2) | Starts pairing with a credible remote Bluetooth device with transport.This interface does not trigger a dialog box and does not require user authorization.Only specific system application can use this function. |
| [pairDeviceOutOfBand](arkts-connectivity-pairdeviceoutofband-f-sys.md#pairdeviceoutofband-1) | Starts pairing with a remote Bluetooth device using the Out Of Band mechanism.This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event.If both p192Data and p256Data are null, the function call will fail.If both p192Data and p256Data are used simultaneously, p256Data takes effect. |
| [setCarKeyDfxData](arkts-connectivity-setcarkeydfxdata-f-sys.md#setcarkeydfxdata-1) | Set the dfx data of car key. |
| [setRemoteDeviceType](arkts-connectivity-setremotedevicetype-f-sys.md#setremotedevicetype-1) | Set remote device custom type. |
| [startPairOutOfBand](arkts-connectivity-startpairoutofband-f-sys.md#startpairoutofband-1) | Starts pairing with the specific remote Bluetooth device using the Out Of Band mechanism.This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event.If both p192Data and p256Data are not used, the function call will fail.If both p192Data and p256Data are used simultaneously, p256Data takes effect. |
| [updateCloudBluetoothDevice](arkts-connectivity-updatecloudbluetoothdevice-f-sys.md#updatecloudbluetoothdevice-1) | update cloud devices. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AclStateResult](arkts-connectivity-aclstateresult-i.md) | Acl state change result. |
| [BatteryInfo](arkts-connectivity-batteryinfo-i.md) | Describes the contents of the battery information. |
| [BondStateParam](arkts-connectivity-bondstateparam-i.md) | Describes the class of a bluetooth device. |
| [DeviceClass](arkts-connectivity-deviceclass-i.md) | Describes the class of a bluetooth device. |
| [PinRequiredParam](arkts-connectivity-pinrequiredparam-i.md) | Describes the bond key param. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BatteryInfo](arkts-connectivity-batteryinfo-i-sys.md) | Describes the contents of the battery information. |
| [ControlDeviceActionParams](arkts-connectivity-controldeviceactionparams-i-sys.md) | Describes information about controlling the Bluetooth peripheral. |
| [DiscoveryResult](arkts-connectivity-discoveryresult-i-sys.md) | Describes the contents of the discovery results |
| [OobData](arkts-connectivity-oobdata-i-sys.md) | Out Of Band data used in Bluetooth device pairing. |
| [PinRequiredParam](arkts-connectivity-pinrequiredparam-i-sys.md) | Describes the bond key param. |
| [TrustedPairedDevice](arkts-connectivity-trustedpaireddevice-i-sys.md) | Describes device of cloud pair. |
| [TrustedPairedDevices](arkts-connectivity-trustedpaireddevices-i-sys.md) | Describes the cloud pair device. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AclState](arkts-connectivity-aclstate-e.md) | The enum of acl state. |
| [BluetoothTransport](arkts-connectivity-bluetoothtransport-e.md) | Enum for the transport of a remote device |
| [BondState](arkts-connectivity-bondstate-e.md) | The enum of bond state. |
| [DeviceChargeState](arkts-connectivity-devicechargestate-e.md) | Enum for the charge state. |
| [HashAlgorithmType](arkts-connectivity-hashalgorithmtype-e.md) | Enum for the hash algorithm type. |
| [ScanMode](arkts-connectivity-scanmode-e.md) | The enum of BR scan mode. |
| [UnbondCause](arkts-connectivity-unbondcause-e.md) | Enum for cause of unbond. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [CarKeyActionType](arkts-connectivity-carkeyactiontype-e-sys.md) | Enum for the action of car key. |
| [ControlObject](arkts-connectivity-controlobject-e-sys.md) | Describes the control object. |
| [ControlType](arkts-connectivity-controltype-e-sys.md) | Describes the control type. |
| [ControlTypeValue](arkts-connectivity-controltypevalue-e-sys.md) | Describes the control type value. |
| [DeviceRole](arkts-connectivity-devicerole-e-sys.md) | Enum for the role of device. |
| [DeviceType](arkts-connectivity-devicetype-e-sys.md) | Enum for the custom type of remote device. |
| [PinType](arkts-connectivity-pintype-e-sys.md) | Enum for the type of pairing to a remote device |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [BluetoothAddress](arkts-connectivity-bluetoothaddress-t.md) | Bluetooth device address. |
| [MajorClass](arkts-connectivity-majorclass-t.md) | Indicate the major class of a bluetooth device. |
| [MajorMinorClass](arkts-connectivity-majorminorclass-t.md) | Indicate the major minor class of a bluetooth device. |
| [ProfileConnectionState](arkts-connectivity-profileconnectionstate-t.md) | Indicate the profile connection state. |
| [ProfileId](arkts-connectivity-profileid-t.md) | Indicate the profile id. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ProfileUuids](arkts-connectivity-profileuuids-t-sys.md) | Indicate the profile uuid. |
<!--DelEnd-->

