# bluetooth

Provides methods to operate or manage Bluetooth.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** bluetoothManager

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [BLE](arkts-connectivity-ble-n.md) | Provides methods to operate or manage Bluetooth. |

### Functions

| Name | Description |
| --- | --- |
| [getState](arkts-connectivity-getstate-f.md#getstate-1) | Obtains the Bluetooth status of a device. |
| [getBtConnectionState](arkts-connectivity-getbtconnectionstate-f.md#getbtconnectionstate-1) | Get the local device connection state to any profile of any remote device. |
| [pairDevice](arkts-connectivity-pairdevice-f.md#pairdevice-1) | Starts pairing with a remote Bluetooth device. |
| [getRemoteDeviceName](arkts-connectivity-getremotedevicename-f.md#getremotedevicename-1) | Obtains the name of a peer Bluetooth device. |
| [getRemoteDeviceClass](arkts-connectivity-getremotedeviceclass-f.md#getremotedeviceclass-1) | Obtains the class of a peer Bluetooth device. |
| [enableBluetooth](arkts-connectivity-enablebluetooth-f.md#enablebluetooth-1) | Enables Bluetooth on a device. |
| [disableBluetooth](arkts-connectivity-disablebluetooth-f.md#disablebluetooth-1) | Disables Bluetooth on a device. |
| [getLocalName](arkts-connectivity-getlocalname-f.md#getlocalname-1) | Obtains the Bluetooth local name of a device. |
| [getPairedDevices](arkts-connectivity-getpaireddevices-f.md#getpaireddevices-1) | Obtains the list of Bluetooth devices that have been paired with the current device. |
| [getProfileConnState](arkts-connectivity-getprofileconnstate-f.md#getprofileconnstate-1) | Obtains the connection state of profile. |
| [setDevicePairingConfirmation](arkts-connectivity-setdevicepairingconfirmation-f.md#setdevicepairingconfirmation-1) | Sets the confirmation of pairing with a certain device. |
| [setLocalName](arkts-connectivity-setlocalname-f.md#setlocalname-1) | Sets the Bluetooth friendly name of a device. |
| [setBluetoothScanMode](arkts-connectivity-setbluetoothscanmode-f.md#setbluetoothscanmode-1) | Sets the Bluetooth scan mode for a device. |
| [getBluetoothScanMode](arkts-connectivity-getbluetoothscanmode-f.md#getbluetoothscanmode-1) | Obtains the Bluetooth scanning mode of a device. |
| [startBluetoothDiscovery](arkts-connectivity-startbluetoothdiscovery-f.md#startbluetoothdiscovery-1) | Starts scanning Bluetooth devices. |
| [stopBluetoothDiscovery](arkts-connectivity-stopbluetoothdiscovery-f.md#stopbluetoothdiscovery-1) | Stops Bluetooth device scanning. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [on](arkts-connectivity-on-f.md#on-2) | Subscribe the event reported when a remote Bluetooth device is bonded. |
| [off](arkts-connectivity-off-f.md#off-2) | Unsubscribe the event reported when a remote Bluetooth device is bonded. |
| [on](arkts-connectivity-on-f.md#on-3) | Subscribe the event of a pairing request from a remote Bluetooth device. |
| [off](arkts-connectivity-off-f.md#off-3) | Unsubscribe the event of a pairing request from a remote Bluetooth device. |
| [on](arkts-connectivity-on-f.md#on-4) | Subscribe the event reported when the Bluetooth state changes. |
| [off](arkts-connectivity-off-f.md#off-4) | Unsubscribe the event reported when the Bluetooth state changes. |
| [sppListen](arkts-connectivity-spplisten-f.md#spplisten-1) | Creates a Bluetooth server listening socket. |
| [sppAccept](arkts-connectivity-sppaccept-f.md#sppaccept-1) | Waits for a remote device to connect. |
| [sppConnect](arkts-connectivity-sppconnect-f.md#sppconnect-1) | Connects to a remote device over the socket. |
| [sppCloseServerSocket](arkts-connectivity-sppcloseserversocket-f.md#sppcloseserversocket-1) | Disables an spp server socket and releases related resources. |
| [sppCloseClientSocket](arkts-connectivity-sppcloseclientsocket-f.md#sppcloseclientsocket-1) | Disables an spp client socket and releases related resources. |
| [sppWrite](arkts-connectivity-sppwrite-f.md#sppwrite-1) | Write data through the socket. |
| [on](arkts-connectivity-on-f.md#on-5) | Subscribe the event reported when data is read from the socket. |
| [off](arkts-connectivity-off-f.md#off-5) | Unsubscribe the event reported when data is read from the socket. |
| [getProfile](arkts-connectivity-getprofile-f.md#getprofile-1) | Obtains the instance of profile. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cancelPairedDevice](arkts-connectivity-cancelpaireddevice-f-sys.md#cancelpaireddevice-1) | Remove a paired remote device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BaseProfile](arkts-connectivity-baseprofile-i.md) | Base interface of profile. |
| [A2dpSourceProfile](arkts-connectivity-a2dpsourceprofile-i.md) | Manager a2dp source profile. |
| [HandsFreeAudioGatewayProfile](arkts-connectivity-handsfreeaudiogatewayprofile-i.md) | Manager handsfree AG profile. |
| [GattServer](arkts-connectivity-gattserver-i.md) | Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create anGattServer instance. |
| [GattClientDevice](arkts-connectivity-gattclientdevice-i.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create anGattClientDevice instance. |
| [GattService](arkts-connectivity-gattservice-i.md) | Describes the Gatt service. |
| [BLECharacteristic](arkts-connectivity-blecharacteristic-i.md) | Describes the Gatt characteristic. |
| [BLEDescriptor](arkts-connectivity-bledescriptor-i.md) | Describes the Gatt descriptor. |
| [NotifyCharacteristic](arkts-connectivity-notifycharacteristic-i.md) | Describes the value of the indication or notification sent by the Gatt server. |
| [CharacteristicReadReq](arkts-connectivity-characteristicreadreq-i.md) | Describes the parameters of the Gatt client's characteristic read request. |
| [CharacteristicWriteReq](arkts-connectivity-characteristicwritereq-i.md) | Describes the parameters of the of the Gatt client's characteristic write request. |
| [DescriptorReadReq](arkts-connectivity-descriptorreadreq-i.md) | Describes the parameters of the Gatt client's descriptor read request. |
| [DescriptorWriteReq](arkts-connectivity-descriptorwritereq-i.md) | Describes the parameters of the Gatt client's characteristic write request. |
| [ServerResponse](arkts-connectivity-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [BLEConnectChangedState](arkts-connectivity-bleconnectchangedstate-i.md) | Describes the Gatt profile connection state. |
| [ScanResult](arkts-connectivity-scanresult-i.md) | Describes the contents of the scan results. |
| [AdvertiseSetting](arkts-connectivity-advertisesetting-i.md) | Describes the settings for BLE advertising. |
| [AdvertiseData](arkts-connectivity-advertisedata-i.md) | Describes the advertising data. |
| [ManufactureData](arkts-connectivity-manufacturedata-i.md) | Describes the manufacturer data. |
| [ServiceData](arkts-connectivity-servicedata-i.md) | Describes the service data. |
| [ScanFilter](arkts-connectivity-scanfilter-i.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-connectivity-scanoptions-i.md) | Describes the parameters for scan. |
| [SppOption](arkts-connectivity-sppoption-i.md) | Describes the spp parameters. |
| [PinRequiredParam](arkts-connectivity-pinrequiredparam-i.md) | Describes the bond key param. |
| [DeviceClass](arkts-connectivity-deviceclass-i.md) | Describes the class of a bluetooth device. |
| [BondStateParam](arkts-connectivity-bondstateparam-i.md) | Describes the class of a bluetooth device. |
| [StateChangeParam](arkts-connectivity-statechangeparam-i.md) | Profile state change parameters. |

### Enums

| Name | Description |
| --- | --- |
| [ScanDuty](arkts-connectivity-scanduty-e.md) | The enum of scan duty. |
| [MatchMode](arkts-connectivity-matchmode-e.md) | The enum of BLE match mode. |
| [ProfileConnectionState](arkts-connectivity-profileconnectionstate-e.md) | The enum of profile connection state. |
| [BluetoothState](arkts-connectivity-bluetoothstate-e.md) | The enum of bluetooth state. |
| [SppType](arkts-connectivity-spptype-e.md) | The enum of SPP type. |
| [ScanMode](arkts-connectivity-scanmode-e.md) | The enum of BR scan mode. |
| [BondState](arkts-connectivity-bondstate-e.md) | The enum of bond state. |
| [MajorClass](arkts-connectivity-majorclass-e.md) | The enum of major class of a bluetooth device. |
| [MajorMinorClass](arkts-connectivity-majorminorclass-e.md) | The enum of major minor class of a bluetooth device. |
| [PlayingState](arkts-connectivity-playingstate-e.md) | The enum of a2dp playing state. |
| [ProfileId](arkts-connectivity-profileid-e.md) | The enum of profile id. |

