# bluetooth

Provides methods to operate or manage Bluetooth.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [BLE](arkts-bluetooth-ble-n.md) | Provides methods to operate or manage Bluetooth. |

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[cancelPairedDevice](arkts-bluetooth-cancelpaireddevice-f-sys.md#cancelPairedDevice-1) | Remove a paired remote device. |
| [disableBluetooth](arkts-bluetooth-disablebluetooth-f.md#disableBluetooth-1) | Disables Bluetooth on a device. |
| [enableBluetooth](arkts-bluetooth-enablebluetooth-f.md#enableBluetooth-1) | Enables Bluetooth on a device. |
| [getBluetoothScanMode](arkts-bluetooth-getbluetoothscanmode-f.md#getBluetoothScanMode-1) | Obtains the Bluetooth scanning mode of a device. |
| [getBtConnectionState](arkts-bluetooth-getbtconnectionstate-f.md#getBtConnectionState-1) | Get the local device connection state to any profile of any remote device. |
| [getLocalName](arkts-bluetooth-getlocalname-f.md#getLocalName-1) | Obtains the Bluetooth local name of a device. |
| [getPairedDevices](arkts-bluetooth-getpaireddevices-f.md#getPairedDevices-1) | Obtains the list of Bluetooth devices that have been paired with the current device. |
| [getProfile](arkts-bluetooth-getprofile-f.md#getProfile-1) | Obtains the instance of profile. |
| [getProfileConnState](arkts-bluetooth-getprofileconnstate-f.md#getProfileConnState-1) | Obtains the connection state of profile. |
| [getRemoteDeviceClass](arkts-bluetooth-getremotedeviceclass-f.md#getRemoteDeviceClass-1) | Obtains the class of a peer Bluetooth device. |
| [getRemoteDeviceName](arkts-bluetooth-getremotedevicename-f.md#getRemoteDeviceName-1) | Obtains the name of a peer Bluetooth device. |
| [getState](arkts-bluetooth-getstate-f.md#getState-1) | Obtains the Bluetooth status of a device. |
| [off](arkts-bluetooth-off-f.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. |
| [off](arkts-bluetooth-off-f.md#off-2) | Unsubscribe the event reported when a remote Bluetooth device is bonded. |
| [off](arkts-bluetooth-off-f.md#off-3) | Unsubscribe the event of a pairing request from a remote Bluetooth device. |
| [off](arkts-bluetooth-off-f.md#off-4) | Unsubscribe the event reported when the Bluetooth state changes. |
| [off](arkts-bluetooth-off-f.md#off-5) | Unsubscribe the event reported when data is read from the socket. |
| [on](arkts-bluetooth-on-f.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered. |
| [on](arkts-bluetooth-on-f.md#on-2) | Subscribe the event reported when a remote Bluetooth device is bonded. |
| [on](arkts-bluetooth-on-f.md#on-3) | Subscribe the event of a pairing request from a remote Bluetooth device. |
| [on](arkts-bluetooth-on-f.md#on-4) | Subscribe the event reported when the Bluetooth state changes. |
| [on](arkts-bluetooth-on-f.md#on-5) | Subscribe the event reported when data is read from the socket. |
| [pairDevice](arkts-bluetooth-pairdevice-f.md#pairDevice-1) | Starts pairing with a remote Bluetooth device. |
| [setBluetoothScanMode](arkts-bluetooth-setbluetoothscanmode-f.md#setBluetoothScanMode-1) | Sets the Bluetooth scan mode for a device. |
| [setDevicePairingConfirmation](arkts-bluetooth-setdevicepairingconfirmation-f.md#setDevicePairingConfirmation-1) | Sets the confirmation of pairing with a certain device. |
| [setLocalName](arkts-bluetooth-setlocalname-f.md#setLocalName-1) | Sets the Bluetooth friendly name of a device. |
| [sppAccept](arkts-bluetooth-sppaccept-f.md#sppAccept-1) | Waits for a remote device to connect. |
| [sppCloseClientSocket](arkts-bluetooth-sppcloseclientsocket-f.md#sppCloseClientSocket-1) | Disables an spp client socket and releases related resources. |
| [sppCloseServerSocket](arkts-bluetooth-sppcloseserversocket-f.md#sppCloseServerSocket-1) | Disables an spp server socket and releases related resources. |
| [sppConnect](arkts-bluetooth-sppconnect-f.md#sppConnect-1) | Connects to a remote device over the socket. |
| [sppListen](arkts-bluetooth-spplisten-f.md#sppListen-1) | Creates a Bluetooth server listening socket. |
| [sppWrite](arkts-bluetooth-sppwrite-f.md#sppWrite-1) | Write data through the socket. |
| [startBluetoothDiscovery](arkts-bluetooth-startbluetoothdiscovery-f.md#startBluetoothDiscovery-1) | Starts scanning Bluetooth devices. |
| [stopBluetoothDiscovery](arkts-bluetooth-stopbluetoothdiscovery-f.md#stopBluetoothDiscovery-1) | Stops Bluetooth device scanning. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [A2dpSourceProfile](arkts-bluetooth-a2dpsourceprofile-i.md) | Manager a2dp source profile. |
| [AdvertiseData](arkts-bluetooth-advertisedata-i.md) | Describes the advertising data. |
| [AdvertiseSetting](arkts-bluetooth-advertisesetting-i.md) | Describes the settings for BLE advertising. |
| [BaseProfile](arkts-bluetooth-baseprofile-i.md) | Base interface of profile. |
| [BLECharacteristic](arkts-bluetooth-blecharacteristic-i.md) | Describes the Gatt characteristic. |
| [BLEConnectChangedState](arkts-bluetooth-bleconnectchangedstate-i.md) | Describes the Gatt profile connection state. |
| [BLEDescriptor](arkts-bluetooth-bledescriptor-i.md) | Describes the Gatt descriptor. |
| [BondStateParam](arkts-bluetooth-bondstateparam-i.md) | Describes the class of a bluetooth device. |
| [CharacteristicReadReq](arkts-bluetooth-characteristicreadreq-i.md) | Describes the parameters of the Gatt client's characteristic read request. |
| [CharacteristicWriteReq](arkts-bluetooth-characteristicwritereq-i.md) | Describes the parameters of the of the Gatt client's characteristic write request. |
| [DescriptorReadReq](arkts-bluetooth-descriptorreadreq-i.md) | Describes the parameters of the Gatt client's descriptor read request. |
| [DescriptorWriteReq](arkts-bluetooth-descriptorwritereq-i.md) | Describes the parameters of the Gatt client's characteristic write request. |
| [DeviceClass](arkts-bluetooth-deviceclass-i.md) | Describes the class of a bluetooth device. |
| [GattClientDevice](arkts-bluetooth-gattclientdevice-i.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance. |
| [GattServer](arkts-bluetooth-gattserver-i.md) | Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance. |
| [GattService](arkts-bluetooth-gattservice-i.md) | Describes the Gatt service. |
| [HandsFreeAudioGatewayProfile](arkts-bluetooth-handsfreeaudiogatewayprofile-i.md) | Manager handsfree AG profile. |
| [ManufactureData](arkts-bluetooth-manufacturedata-i.md) | Describes the manufacturer data. |
| [NotifyCharacteristic](arkts-bluetooth-notifycharacteristic-i.md) | Describes the value of the indication or notification sent by the Gatt server. |
| [PinRequiredParam](arkts-bluetooth-pinrequiredparam-i.md) | Describes the bond key param. |
| [ScanFilter](arkts-bluetooth-scanfilter-i.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-bluetooth-scanoptions-i.md) | Describes the parameters for scan. |
| [ScanResult](arkts-bluetooth-scanresult-i.md) | Describes the contents of the scan results. |
| [ServerResponse](arkts-bluetooth-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [ServiceData](arkts-bluetooth-servicedata-i.md) | Describes the service data. |
| [SppOption](arkts-bluetooth-sppoption-i.md) | Describes the spp parameters. |
| [StateChangeParam](arkts-bluetooth-statechangeparam-i.md) | Profile state change parameters. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BluetoothState](arkts-bluetooth-bluetoothstate-e.md) | The enum of bluetooth state. |
| [BondState](arkts-bluetooth-bondstate-e.md) | The enum of bond state. |
| [MajorClass](arkts-bluetooth-majorclass-e.md) | The enum of major class of a bluetooth device. |
| [MajorMinorClass](arkts-bluetooth-majorminorclass-e.md) | The enum of major minor class of a bluetooth device. |
| [MatchMode](arkts-bluetooth-matchmode-e.md) | The enum of BLE match mode. |
| [PlayingState](arkts-bluetooth-playingstate-e.md) | The enum of a2dp playing state. |
| [ProfileConnectionState](arkts-bluetooth-profileconnectionstate-e.md) | The enum of profile connection state. |
| [ProfileId](arkts-bluetooth-profileid-e.md) | The enum of profile id. |
| [ScanDuty](arkts-bluetooth-scanduty-e.md) | The enum of scan duty. |
| [ScanMode](arkts-bluetooth-scanmode-e.md) | The enum of BR scan mode. |
| [SppType](arkts-bluetooth-spptype-e.md) | The enum of SPP type. |

