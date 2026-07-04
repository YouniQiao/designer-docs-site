# @ohos.bluetooth.ble

Provides methods to operate or manage Bluetooth.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@ohos.bluetooth.ble';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createBleScanner](arkts-connectivity-createblescanner-f.md#createblescanner-1) | Create a ble scanner instance. Each ble scanner instance can be independently started or stopped. |
| [createGattClientDevice](arkts-connectivity-creategattclientdevice-f.md#creategattclientdevice-1) | create a Gatt client device instance. |
| [createGattClientDevice](arkts-connectivity-creategattclientdevice-f.md#creategattclientdevice-2) | create a Gatt client device instance with custom setting. |
| [createGattServer](arkts-connectivity-creategattserver-f.md#creategattserver-1) | create a Gatt server instance. |
| [disableAdvertising](arkts-connectivity-disableadvertising-f.md#disableadvertising-1) | Disable the advertising with a specific ID temporarily. |
| [disableAdvertising](arkts-connectivity-disableadvertising-f.md#disableadvertising-2) | Disable the advertising with a specific ID temporarily. |
| [enableAdvertising](arkts-connectivity-enableadvertising-f.md#enableadvertising-1) | Enable the advertising with a specific ID temporarily. |
| [enableAdvertising](arkts-connectivity-enableadvertising-f.md#enableadvertising-2) | Enable the advertising with a specific ID temporarily. |
| [getConnectedBLEDevices](arkts-connectivity-getconnectedbledevices-f.md#getconnectedbledevices-1) | Obtains the list of devices in the connected status. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [getConnectedBLEDevices](arkts-connectivity-getconnectedbledevices-f.md#getconnectedbledevices-2) | Obtains the list of devices in the connected status. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe from advertising state change event. |
| [off](arkts-connectivity-off-f.md#off-2) | Unsubscribe BLE scan result. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribing to advertising state change event. |
| [on](arkts-connectivity-on-f.md#on-2) | Subscribe BLE scan result. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [startAdvertising](arkts-connectivity-startadvertising-f.md#startadvertising-1) | Starts BLE advertising. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startAdvertising](arkts-connectivity-startadvertising-f.md#startadvertising-2) | Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startAdvertising](arkts-connectivity-startadvertising-f.md#startadvertising-3) | Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startBLEScan](arkts-connectivity-startblescan-f.md#startblescan-1) | Starts scanning for specified BLE devices with filters. |
| [stopAdvertising](arkts-connectivity-stopadvertising-f.md#stopadvertising-1) | Stops BLE advertising. |
| [stopAdvertising](arkts-connectivity-stopadvertising-f.md#stopadvertising-2) | Stops BLE advertising. Completely stop the advertising corresponding to the ID. |
| [stopAdvertising](arkts-connectivity-stopadvertising-f.md#stopadvertising-3) | Stops BLE advertising. Completely stop the advertising corresponding to the ID. |
| [stopBLEScan](arkts-connectivity-stopblescan-f.md#stopblescan-1) | Stops BLE scanning. |

### Interfaces

| Name | Description |
| --- | --- |
| [AdvertiseData](arkts-connectivity-advertisedata-i.md) | Describes the advertising data. |
| [AdvertiseSetting](arkts-connectivity-advertisesetting-i.md) | Describes the settings for BLE advertising. |
| [AdvertisingDisableParams](arkts-connectivity-advertisingdisableparams-i.md) | Parameter for dynamically disable advertising. |
| [AdvertisingEnableParams](arkts-connectivity-advertisingenableparams-i.md) | Parameter for dynamically enable advertising. |
| [AdvertisingParams](arkts-connectivity-advertisingparams-i.md) | Describes the advertising parameters. |
| [AdvertisingStateChangeInfo](arkts-connectivity-advertisingstatechangeinfo-i.md) | Advertising state change information. |
| [BLECharacteristic](arkts-connectivity-blecharacteristic-i.md) | Describes the Gatt characteristic. |
| [BLEConnectionChangeState](arkts-connectivity-bleconnectionchangestate-i.md) | Describes the Gatt profile connection state. |
| [BLEDescriptor](arkts-connectivity-bledescriptor-i.md) | Describes the Gatt descriptor. |
| [BleScanner](arkts-connectivity-blescanner-i.md) | Manages the ble scanner. Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance. |
| [CharacteristicReadRequest](arkts-connectivity-characteristicreadrequest-i.md) | Describes the parameters of the Gatt client's characteristic read request. |
| [CharacteristicWriteRequest](arkts-connectivity-characteristicwriterequest-i.md) | Describes the parameters of the of the Gatt client's characteristic write request. |
| [DescriptorReadRequest](arkts-connectivity-descriptorreadrequest-i.md) | Describes the parameters of the Gatt client's descriptor read request. |
| [DescriptorWriteRequest](arkts-connectivity-descriptorwriterequest-i.md) | Describes the parameters of the Gatt client's characteristic write request. |
| [GattClientDevice](arkts-connectivity-gattclientdevice-i.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance. |
| [GattPermissions](arkts-connectivity-gattpermissions-i.md) | Describes the permission of a att attribute item. |
| [GattProperties](arkts-connectivity-gattproperties-i.md) | Describes the properties of a gatt characteristic. |
| [GattServer](arkts-connectivity-gattserver-i.md) | Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance. |
| [GattService](arkts-connectivity-gattservice-i.md) | Describes the Gatt service. |
| [GattSetting](arkts-connectivity-gattsetting-i.md) | Describes the setting for Gatt Connection. |
| [ManufactureData](arkts-connectivity-manufacturedata-i.md) | Describes the manufacturer data. |
| [NotifyCharacteristic](arkts-connectivity-notifycharacteristic-i.md) | Describes the value of the indication or notification sent by the Gatt server. |
| [PhyValue](arkts-connectivity-phyvalue-i.md) | Describes the parameters of the Ble phy. |
| [ScanFilter](arkts-connectivity-scanfilter-i.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-connectivity-scanoptions-i.md) | Describes the parameters for scan. |
| [ScanReport](arkts-connectivity-scanreport-i.md) | Describes the contents of the scan report. |
| [ScanResult](arkts-connectivity-scanresult-i.md) | Describes the contents of the scan results. |
| [ServerResponse](arkts-connectivity-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [ServiceData](arkts-connectivity-servicedata-i.md) | Describes the service data. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [GattClientDevice](arkts-connectivity-gattclientdevice-i-sys.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance. |
| [GattRspContext](arkts-connectivity-gattrspcontext-i-sys.md) | Describe the context of GATT responses. |
| [ScanEnhanceMode](arkts-connectivity-scanenhancemode-i-sys.md) | Describes the configuration of scan enhance mode. |
| [ScanFilter](arkts-connectivity-scanfilter-i-sys.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-connectivity-scanoptions-i-sys.md) | Describes the parameters for scan. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AdvertisingState](arkts-connectivity-advertisingstate-e.md) | The enum of BLE advertising state. |
| [BlePhy](arkts-connectivity-blephy-e.md) | Phy type for advertising or connection. |
| [BleProfile](arkts-connectivity-bleprofile-e.md) | The Profile of the BLE protocol. |
| [CodedPhyMode](arkts-connectivity-codedphymode-e.md) | Coded phy mode for advertising or connection. |
| [ConnectionParam](arkts-connectivity-connectionparam-e.md) | GATT connection parameters. |
| [GattDisconnectReason](arkts-connectivity-gattdisconnectreason-e.md) | The enum of gatt disconnection reasons. |
| [GattWriteType](arkts-connectivity-gattwritetype-e.md) | The enum of gatt characteristic write type |
| [MatchMode](arkts-connectivity-matchmode-e.md) | The enum of BLE match mode. |
| [PhyType](arkts-connectivity-phytype-e.md) | Phy type used during scan. |
| [ScanDuty](arkts-connectivity-scanduty-e.md) | The enum of scan duty. |
| [ScanReportMode](arkts-connectivity-scanreportmode-e.md) | Report mode used during scan. |
| [ScanReportType](arkts-connectivity-scanreporttype-e.md) | Scan report type used during scan. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [EnhanceMode](arkts-connectivity-enhancemode-e-sys.md) | Scan enhance mode. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [BluetoothAddress](arkts-connectivity-bluetoothaddress-t.md) | Bluetooth device address. |
| [BluetoothTransport](arkts-connectivity-bluetoothtransport-t.md) | Indicate the transport of a remote device. |
| [ProfileConnectionState](arkts-connectivity-profileconnectionstate-t.md) | Indicate the profile connection state. |

