# bluetoothManager

Provides methods to operate or manage Bluetooth.

**起始版本：** 9

**废弃版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [BLE](arkts-bluetoothmanager-ble-n.md) | Provides methods to operate or manage Bluetooth. |

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[cancelPairedDevice](arkts-bluetoothmanager-cancelpaireddevice-f-sys.md#cancelPairedDevice-1) | Remove a paired remote device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [disableBluetooth](arkts-bluetoothmanager-disablebluetooth-f.md#disableBluetooth-1) | Disables Bluetooth on a device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [enableBluetooth](arkts-bluetoothmanager-enablebluetooth-f.md#enableBluetooth-1) | Enables Bluetooth on a device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getBluetoothScanMode](arkts-bluetoothmanager-getbluetoothscanmode-f.md#getBluetoothScanMode-1) | Obtains the Bluetooth scanning mode of a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getBtConnectionState](arkts-bluetoothmanager-getbtconnectionstate-f.md#getBtConnectionState-1) | Get the local device connection state to any profile of any remote device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getLocalName](arkts-bluetoothmanager-getlocalname-f.md#getLocalName-1) | Obtains the Bluetooth local name of a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getPairedDevices](arkts-bluetoothmanager-getpaireddevices-f.md#getPairedDevices-1) | Obtains the list of Bluetooth devices that have been paired with the current device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getProfileConnectionState](arkts-bluetoothmanager-getprofileconnectionstate-f.md#getProfileConnectionState-1) | Obtains the connection state of profile. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getProfileInstance](arkts-bluetoothmanager-getprofileinstance-f.md#getProfileInstance-1) | Obtains the instance of profile. |
| [getRemoteDeviceClass](arkts-bluetoothmanager-getremotedeviceclass-f.md#getRemoteDeviceClass-1) | Obtains the class of a peer Bluetooth device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getRemoteDeviceName](arkts-bluetoothmanager-getremotedevicename-f.md#getRemoteDeviceName-1) | Obtains the name of a peer Bluetooth device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [getState](arkts-bluetoothmanager-getstate-f.md#getState-1) | Obtains the Bluetooth status of a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-bluetoothmanager-off-f.md#off-1) | Unsubscribe the event reported when a remote Bluetooth device is discovered. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-bluetoothmanager-off-f.md#off-2) | Unsubscribe the event reported when a remote Bluetooth device is bonded. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-bluetoothmanager-off-f.md#off-3) | Unsubscribe the event of a pairing request from a remote Bluetooth device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-bluetoothmanager-off-f.md#off-4) | Unsubscribe the event reported when the Bluetooth state changes. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [off](arkts-bluetoothmanager-off-f.md#off-5) | Unsubscribe the event reported when data is read from the socket. |
| [on](arkts-bluetoothmanager-on-f.md#on-1) | Subscribe the event reported when a remote Bluetooth device is discovered. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-bluetoothmanager-on-f.md#on-2) | Subscribe the event reported when a remote Bluetooth device is bonded. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-bluetoothmanager-on-f.md#on-3) | Subscribe the event of a pairing request from a remote Bluetooth device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-bluetoothmanager-on-f.md#on-4) | Subscribe the event reported when the Bluetooth state changes. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [on](arkts-bluetoothmanager-on-f.md#on-5) | Subscribe the event reported when data is read from the socket. |
| [pairDevice](arkts-bluetoothmanager-pairdevice-f.md#pairDevice-1) | Starts pairing with a remote Bluetooth device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [setBluetoothScanMode](arkts-bluetoothmanager-setbluetoothscanmode-f.md#setBluetoothScanMode-1) | Sets the Bluetooth scan mode for a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [setDevicePairingConfirmation](arkts-bluetoothmanager-setdevicepairingconfirmation-f.md#setDevicePairingConfirmation-1) | Sets the confirmation of pairing with a certain device. On API 10 and above, the permission required by this interface is changed from MANAGE_BLUETOOTH to ACCESS_BLUETOOTH and MANAGE_BLUETOOTH. |
| [setLocalName](arkts-bluetoothmanager-setlocalname-f.md#setLocalName-1) | Sets the Bluetooth friendly name of a device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |
| [sppAccept](arkts-bluetoothmanager-sppaccept-f.md#sppAccept-1) | Waits for a remote device to connect. |
| [sppCloseClientSocket](arkts-bluetoothmanager-sppcloseclientsocket-f.md#sppCloseClientSocket-1) | Disables an spp client socket and releases related resources. |
| [sppCloseServerSocket](arkts-bluetoothmanager-sppcloseserversocket-f.md#sppCloseServerSocket-1) | Disables an spp server socket and releases related resources. |
| [sppConnect](arkts-bluetoothmanager-sppconnect-f.md#sppConnect-1) | Connects to a remote device over the socket. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [sppListen](arkts-bluetoothmanager-spplisten-f.md#sppListen-1) | Creates a Bluetooth server listening socket. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH. |
| [sppWrite](arkts-bluetoothmanager-sppwrite-f.md#sppWrite-1) | Write data through the socket. |
| [startBluetoothDiscovery](arkts-bluetoothmanager-startbluetoothdiscovery-f.md#startBluetoothDiscovery-1) | Starts scanning Bluetooth devices. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and LOCATION and APPROXIMATELY_LOCATION to ACCESS_BLUETOOTH. |
| [stopBluetoothDiscovery](arkts-bluetoothmanager-stopbluetoothdiscovery-f.md#stopBluetoothDiscovery-1) | Stops Bluetooth device scanning. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [A2dpSourceProfile](arkts-bluetoothmanager-a2dpsourceprofile-i.md) | Manager a2dp source profile. |
| [AdvertiseData](arkts-bluetoothmanager-advertisedata-i.md) | Describes the advertising data. |
| [AdvertiseSetting](arkts-bluetoothmanager-advertisesetting-i.md) | Describes the settings for BLE advertising. |
| [BaseProfile](arkts-bluetoothmanager-baseprofile-i.md) | Base interface of profile. |
| [BLECharacteristic](arkts-bluetoothmanager-blecharacteristic-i.md) | Describes the Gatt characteristic. |
| [BLEConnectChangedState](arkts-bluetoothmanager-bleconnectchangedstate-i.md) | Describes the Gatt profile connection state. |
| [BLEDescriptor](arkts-bluetoothmanager-bledescriptor-i.md) | Describes the Gatt descriptor. |
| [BondStateParam](arkts-bluetoothmanager-bondstateparam-i.md) | Describes the class of a bluetooth device. |
| [CharacteristicReadRequest](arkts-bluetoothmanager-characteristicreadrequest-i.md) | Describes the parameters of the Gatt client's characteristic read request. |
| [CharacteristicWriteRequest](arkts-bluetoothmanager-characteristicwriterequest-i.md) | Describes the parameters of the of the Gatt client's characteristic write request. |
| [DescriptorReadRequest](arkts-bluetoothmanager-descriptorreadrequest-i.md) | Describes the parameters of the Gatt client's descriptor read request. |
| [DescriptorWriteRequest](arkts-bluetoothmanager-descriptorwriterequest-i.md) | Describes the parameters of the Gatt client's characteristic write request. |
| [DeviceClass](arkts-bluetoothmanager-deviceclass-i.md) | Describes the class of a bluetooth device. |
| [GattClientDevice](arkts-bluetoothmanager-gattclientdevice-i.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance. |
| [GattServer](arkts-bluetoothmanager-gattserver-i.md) | Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance. |
| [GattService](arkts-bluetoothmanager-gattservice-i.md) | Describes the Gatt service. |
| [HandsFreeAudioGatewayProfile](arkts-bluetoothmanager-handsfreeaudiogatewayprofile-i.md) | Manager handsfree AG profile. |
| [HidHostProfile](arkts-bluetoothmanager-hidhostprofile-i.md) | Manager hid host profile. |
| [ManufactureData](arkts-bluetoothmanager-manufacturedata-i.md) | Describes the manufacturer data. |
| [NotifyCharacteristic](arkts-bluetoothmanager-notifycharacteristic-i.md) | Describes the value of the indication or notification sent by the Gatt server. |
| [PanProfile](arkts-bluetoothmanager-panprofile-i.md) | Manager pan profile. |
| [PinRequiredParam](arkts-bluetoothmanager-pinrequiredparam-i.md) | Describes the bond key param. |
| [ScanFilter](arkts-bluetoothmanager-scanfilter-i.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-bluetoothmanager-scanoptions-i.md) | Describes the parameters for scan. |
| [ScanResult](arkts-bluetoothmanager-scanresult-i.md) | Describes the contents of the scan results. |
| [ServerResponse](arkts-bluetoothmanager-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [ServiceData](arkts-bluetoothmanager-servicedata-i.md) | Describes the service data. |
| [SppOption](arkts-bluetoothmanager-sppoption-i.md) | Describes the spp parameters. |
| [StateChangeParam](arkts-bluetoothmanager-statechangeparam-i.md) | Profile state change parameters. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BluetoothState](arkts-bluetoothmanager-bluetoothstate-e.md) | The enum of bluetooth state. |
| [BondState](arkts-bluetoothmanager-bondstate-e.md) | The enum of bond state. |
| [MajorClass](arkts-bluetoothmanager-majorclass-e.md) | The enum of major class of a bluetooth device. |
| [MajorMinorClass](arkts-bluetoothmanager-majorminorclass-e.md) | The enum of major minor class of a bluetooth device. |
| [MatchMode](arkts-bluetoothmanager-matchmode-e.md) | The enum of BLE match mode. |
| [PlayingState](arkts-bluetoothmanager-playingstate-e.md) | The enum of a2dp playing state. |
| [ProfileConnectionState](arkts-bluetoothmanager-profileconnectionstate-e.md) | The enum of profile connection state. |
| [ProfileId](arkts-bluetoothmanager-profileid-e.md) | The enum of profile id. |
| [ScanDuty](arkts-bluetoothmanager-scanduty-e.md) | The enum of scan duty. |
| [ScanMode](arkts-bluetoothmanager-scanmode-e.md) | The enum of BR scan mode. |
| [SppType](arkts-bluetoothmanager-spptype-e.md) | The enum of SPP type. |

