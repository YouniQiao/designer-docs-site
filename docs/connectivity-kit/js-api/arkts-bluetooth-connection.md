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
| <!--DelRow-->[cancelPairedDevice](arkts-connection-cancelpaireddevice-f-sys.md#cancelPairedDevice-1) | Remove a paired remote device. |
| <!--DelRow-->[cancelPairedDevice](arkts-connection-cancelpaireddevice-f-sys.md#cancelPairedDevice-2) | Remove a paired remote device. |
| <!--DelRow-->[cancelPairingDevice](arkts-connection-cancelpairingdevice-f-sys.md#cancelPairingDevice-1) | Remove a pairing remote device. |
| <!--DelRow-->[cancelPairingDevice](arkts-connection-cancelpairingdevice-f-sys.md#cancelPairingDevice-2) | Remove a pairing remote device. |
| <!--DelRow-->[connectAllowedProfiles](arkts-connection-connectallowedprofiles-f-sys.md#connectAllowedProfiles-1) | Connects all allowed bluetooth profiles between the local and remote device. |
| <!--DelRow-->[connectAllowedProfiles](arkts-connection-connectallowedprofiles-f-sys.md#connectAllowedProfiles-2) | Connects all allowed bluetooth profiles between the local and remote device. |
| <!--DelRow-->[controlDeviceAction](arkts-connection-controldeviceaction-f-sys.md#controlDeviceAction-1) | Controls the actions of Bluetooth peripherals. |
| <!--DelRow-->[disconnectAllowedProfiles](arkts-connection-disconnectallowedprofiles-f-sys.md#disconnectAllowedProfiles-1) | Disconnects all allowed bluetooth profiles between the local and remote device. |
| <!--DelRow-->[disconnectAllowedProfiles](arkts-connection-disconnectallowedprofiles-f-sys.md#disconnectAllowedProfiles-2) | Disconnects all allowed bluetooth profiles between the local and remote device. |
| <!--DelRow-->[generateLocalOobData](arkts-connection-generatelocaloobdata-f-sys.md#generateLocalOobData-1) | Generate out-of-band data of the local device. |
| [getBluetoothScanMode](arkts-connection-getbluetoothscanmode-f.md#getBluetoothScanMode-1) | Obtains the Bluetooth scanning mode of a device. |
| <!--DelRow-->[getCarKeyDfxData](arkts-connection-getcarkeydfxdata-f-sys.md#getCarKeyDfxData-1) | Get the dfx data of car key. |
| [getLastConnectionTime](arkts-connection-getlastconnectiontime-f.md#getLastConnectionTime-1) | Get latest connection time of device. |
| [getLocalName](arkts-connection-getlocalname-f.md#getLocalName-1) | Obtains the Bluetooth local name of a device. |
| <!--DelRow-->[getLocalProfileUuids](arkts-connection-getlocalprofileuuids-f-sys.md#getLocalProfileUuids-1) | Obtains the profile UUIDs supported by the local device. |
| <!--DelRow-->[getLocalProfileUuids](arkts-connection-getlocalprofileuuids-f-sys.md#getLocalProfileUuids-2) | Obtains the profile UUIDs supported by the local device. |
| [getPairState](arkts-connection-getpairstate-f.md#getPairState-1) | Obtains the pair state of a specified device. |
| [getPairedDevices](arkts-connection-getpaireddevices-f.md#getPairedDevices-1) | Obtains the list of Bluetooth devices that have been paired with the current device. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [getProfileConnectionState](arkts-connection-getprofileconnectionstate-f.md#getProfileConnectionState-1) | Get the profile connection state of the current device. |
| [getRemoteDeviceBatteryInfo](arkts-connection-getremotedevicebatteryinfo-f.md#getRemoteDeviceBatteryInfo-1) | Get remote device battery information. |
| [getRemoteDeviceClass](arkts-connection-getremotedeviceclass-f.md#getRemoteDeviceClass-1) | Obtains the class of a peer Bluetooth device. |
| [getRemoteDeviceName](arkts-connection-getremotedevicename-f.md#getRemoteDeviceName-1) | Obtains the name of a peer Bluetooth device. |
| [getRemoteDeviceName](arkts-connection-getremotedevicename-f.md#getRemoteDeviceName-2) | Obtains the name or alias of the Bluetooth peer device. |
| [getRemoteDeviceTransport](arkts-connection-getremotedevicetransport-f.md#getRemoteDeviceTransport-1) | Get the transport of the bluetooth device. |
| <!--DelRow-->[getRemoteDeviceType](arkts-connection-getremotedevicetype-f-sys.md#getRemoteDeviceType-1) | Get remote device custom type. |
| <!--DelRow-->[getRemoteProductId](arkts-connection-getremoteproductid-f-sys.md#getRemoteProductId-1) | Obtains the product ID of a remote device. |
| <!--DelRow-->[getRemoteProfileUuids](arkts-connection-getremoteprofileuuids-f-sys.md#getRemoteProfileUuids-1) | Obtains the profile UUIDs supported by the remote device. |
| <!--DelRow-->[getRemoteProfileUuids](arkts-connection-getremoteprofileuuids-f-sys.md#getRemoteProfileUuids-2) | Obtains the profile UUIDs supported by the remote device. |
| [getVirtualAddressByHash](arkts-connection-getvirtualaddressbyhash-f.md#getVirtualAddressByHash-1) | Obtain the virtual address of the corresponding device based on the hash value of the real address. |
| [isBluetoothDiscovering](arkts-connection-isbluetoothdiscovering-f.md#isBluetoothDiscovering-1) | Check if bluetooth is discovering. |
| [off](arkts-connection-off-f.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [off](arkts-connection-off-f.md#off-2) | Unsubscribe the event reported when a remote Bluetooth device is bonded. |
| [off](arkts-connection-off-f.md#off-3) | Unsubscribe the event of a pairing request from a remote Bluetooth device. |
| [off](arkts-connection-off-f.md#off-4) | Unsubscribe the event of battery state changed from a remote device. |
| <!--DelRow-->[off](arkts-connection-off-f-sys.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [offAclStateChange](arkts-connection-offaclstatechange-f.md#offAclStateChange-1) | Unsubscribe the event of acl state changed from a remote device. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [offBatteryChange](arkts-connection-offbatterychange-f.md#offBatteryChange-1) | Unsubscribe the event of battery state changed from a remote device. |
| [offBluetoothDeviceFind](arkts-connection-offbluetoothdevicefind-f.md#offBluetoothDeviceFind-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [offBondStateChange](arkts-connection-offbondstatechange-f.md#offBondStateChange-1) | Unsubscribe the event reported when a remote Bluetooth device is bonded. |
| [offDiscoveryResult](arkts-connection-offdiscoveryresult-f.md#offDiscoveryResult-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [offPinRequired](arkts-connection-offpinrequired-f.md#offPinRequired-1) | Unsubscribe the event of a pairing request from a remote Bluetooth device. |
| [offScanModeChange](arkts-connection-offscanmodechange-f.md#offScanModeChange-1) | Unsubscribe to an event indicating that the scanning mode of the local device has changed. |
| [on](arkts-connection-on-f.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connection-on-f.md#on-2) | Subscribe the event reported when a remote Bluetooth device is bonded. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connection-on-f.md#on-3) | Subscribe the event of a pairing request from a remote Bluetooth device. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [on](arkts-connection-on-f.md#on-4) | Subscribe the event of battery state changed from a remote device. |
| <!--DelRow-->[on](arkts-connection-on-f-sys.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onAclStateChange](arkts-connection-onaclstatechange-f.md#onAclStateChange-1) | Subscribe the event of acl state changed from a remote device. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onBatteryChange](arkts-connection-onbatterychange-f.md#onBatteryChange-1) | Subscribe the event of battery state changed from a remote device. |
| [onBluetoothDeviceFind](arkts-connection-onbluetoothdevicefind-f.md#onBluetoothDeviceFind-1) | Subscribe the event reported when a remote Bluetooth device is discovered. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onBondStateChange](arkts-connection-onbondstatechange-f.md#onBondStateChange-1) | Subscribe the event reported when a remote Bluetooth device is bonded. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onDiscoveryResult](arkts-connection-ondiscoveryresult-f.md#onDiscoveryResult-1) | Subscribe the event reported when a remote Bluetooth device is discovered. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onPinRequired](arkts-connection-onpinrequired-f.md#onPinRequired-1) | Subscribe the event of a pairing request from a remote Bluetooth device. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onScanModeChange](arkts-connection-onscanmodechange-f.md#onScanModeChange-1) | Subscribe to an event indicating that the scanning mode of the local device has changed. |
| <!--DelRow-->[pairCredibleDevice](arkts-connection-paircredibledevice-f-sys.md#pairCredibleDevice-1) | Starts pairing with a credible remote Bluetooth device with transport. This interface does not trigger a dialog box and does not require user authorization. Only specific system application can use this function. |
| <!--DelRow-->[pairCredibleDevice](arkts-connection-paircredibledevice-f-sys.md#pairCredibleDevice-2) | Starts pairing with a credible remote Bluetooth device with transport. This interface does not trigger a dialog box and does not require user authorization. Only specific system application can use this function. |
| [pairDevice](arkts-connection-pairdevice-f.md#pairDevice-1) | Starts pairing with a remote Bluetooth device. |
| [pairDevice](arkts-connection-pairdevice-f.md#pairDevice-2) | Starts pairing with a remote Bluetooth device. |
| [pairDevice](arkts-connection-pairdevice-f.md#pairDevice-3) | Starts pairing with a remote Bluetooth device. |
| <!--DelRow-->[pairDeviceOutOfBand](arkts-connection-pairdeviceoutofband-f-sys.md#pairDeviceOutOfBand-1) | Starts pairing with a remote Bluetooth device using the Out Of Band mechanism. This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event. If both p192Data and p256Data are null, the function call will fail. If both p192Data and p256Data are used simultaneously, p256Data takes effect. |
| [setBluetoothScanMode](arkts-connection-setbluetoothscanmode-f.md#setBluetoothScanMode-1) | Sets the Bluetooth scan mode for a device. |
| <!--DelRow-->[setCarKeyDfxData](arkts-connection-setcarkeydfxdata-f-sys.md#setCarKeyDfxData-1) | Set the dfx data of car key. |
| [setDevicePairingConfirmation](arkts-connection-setdevicepairingconfirmation-f.md#setDevicePairingConfirmation-1) | Sets the confirmation of pairing with a certain device. |
| [setDevicePinCode](arkts-connection-setdevicepincode-f.md#setDevicePinCode-1) | Set the pin during pairing when the pin type is PIN_TYPE_ENTER_PIN_CODE. |
| [setDevicePinCode](arkts-connection-setdevicepincode-f.md#setDevicePinCode-2) | Set the pin during pairing when the pin type is PIN_TYPE_ENTER_PIN_CODE. |
| [setLocalName](arkts-connection-setlocalname-f.md#setLocalName-1) | Sets the Bluetooth friendly name of a device. It is used only by system applications for security. If a non-system application invokes the interface, exception 801 is thrown. |
| [setRemoteDeviceName](arkts-connection-setremotedevicename-f.md#setRemoteDeviceName-1) | Modify remote device name. |
| <!--DelRow-->[setRemoteDeviceType](arkts-connection-setremotedevicetype-f-sys.md#setRemoteDeviceType-1) | Set remote device custom type. |
| [startBluetoothDiscovery](arkts-connection-startbluetoothdiscovery-f.md#startBluetoothDiscovery-1) | Starts scanning Bluetooth devices. |
| <!--DelRow-->[startPairOutOfBand](arkts-connection-startpairoutofband-f-sys.md#startPairOutOfBand-1) | Starts pairing with the specific remote Bluetooth device using the Out Of Band mechanism. This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event. If both p192Data and p256Data are not used, the function call will fail. If both p192Data and p256Data are used simultaneously, p256Data takes effect. |
| [stopBluetoothDiscovery](arkts-connection-stopbluetoothdiscovery-f.md#stopBluetoothDiscovery-1) | Stops Bluetooth device scanning. |
| <!--DelRow-->[updateCloudBluetoothDevice](arkts-connection-updatecloudbluetoothdevice-f-sys.md#updateCloudBluetoothDevice-1) | update cloud devices. |

### Interfaces

| Name | Description |
| --- | --- |
| [AclStateResult](arkts-connection-aclstateresult-i.md) | Acl state change result. |
| [BatteryInfo](arkts-connection-batteryinfo-i.md) | Describes the contents of the battery information. |
| [BondStateParam](arkts-connection-bondstateparam-i.md) | Describes the class of a bluetooth device. |
| <!--DelRow-->[ControlDeviceActionParams](arkts-connection-controldeviceactionparams-i-sys.md) | Describes information about controlling the Bluetooth peripheral. |
| [DeviceClass](arkts-connection-deviceclass-i.md) | Describes the class of a bluetooth device. |
| <!--DelRow-->[DiscoveryResult](arkts-connection-discoveryresult-i-sys.md) | Describes the contents of the discovery results |
| <!--DelRow-->[OobData](arkts-connection-oobdata-i-sys.md) | Out Of Band data used in Bluetooth device pairing. |
| [PinRequiredParam](arkts-connection-pinrequiredparam-i.md) | Describes the bond key param. |
| <!--DelRow-->[TrustedPairedDevice](arkts-connection-trustedpaireddevice-i-sys.md) | Describes device of cloud pair. |
| <!--DelRow-->[TrustedPairedDevices](arkts-connection-trustedpaireddevices-i-sys.md) | Describes the cloud pair device. |

### Types

| Name | Description |
| --- | --- |
| [BluetoothAddress](arkts-connection-bluetoothaddress-t.md) | Bluetooth device address. |
| [MajorClass](arkts-connection-majorclass-t.md) | Indicate the major class of a bluetooth device. |
| [MajorMinorClass](arkts-connection-majorminorclass-t.md) | Indicate the major minor class of a bluetooth device. |
| [ProfileConnectionState](arkts-connection-profileconnectionstate-t.md) | Indicate the profile connection state. |
| [ProfileId](arkts-connection-profileid-t.md) | Indicate the profile id. |
| <!--DelRow-->[ProfileUuids](arkts-connection-profileuuids-t-sys.md) | Indicate the profile uuid. |

### Enums

| Name | Description |
| --- | --- |
| [AclState](arkts-connection-aclstate-e.md) | The enum of acl state. |
| [BluetoothTransport](arkts-connection-bluetoothtransport-e.md) | Enum for the transport of a remote device |
| [BondState](arkts-connection-bondstate-e.md) | The enum of bond state. |
| <!--DelRow-->[CarKeyActionType](arkts-connection-carkeyactiontype-e-sys.md) | Enum for the action of car key. |
| <!--DelRow-->[ControlObject](arkts-connection-controlobject-e-sys.md) | Describes the control object. |
| <!--DelRow-->[ControlType](arkts-connection-controltype-e-sys.md) | Describes the control type. |
| <!--DelRow-->[ControlTypeValue](arkts-connection-controltypevalue-e-sys.md) | Describes the control type value. |
| [DeviceChargeState](arkts-connection-devicechargestate-e.md) | Enum for the charge state. |
| <!--DelRow-->[DeviceRole](arkts-connection-devicerole-e-sys.md) | Enum for the role of device. |
| <!--DelRow-->[DeviceType](arkts-connection-devicetype-e-sys.md) | Enum for the custom type of remote device. |
| [HashAlgorithmType](arkts-connection-hashalgorithmtype-e.md) | Enum for the hash algorithm type. |
| <!--DelRow-->[PinType](arkts-connection-pintype-e-sys.md) | Enum for the type of pairing to a remote device |
| [ScanMode](arkts-connection-scanmode-e.md) | The enum of BR scan mode. |
| [UnbondCause](arkts-connection-unbondcause-e.md) | Enum for cause of unbond. |

