# @ohos.bluetooth.ble

Provides methods to operate or manage Bluetooth.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createBleScanner](arkts-ble-createblescanner-f.md#createBleScanner-1) | Create a ble scanner instance. Each ble scanner instance can be independently started or stopped. |
| [createGattClientDevice](arkts-ble-creategattclientdevice-f.md#createGattClientDevice-1) | create a Gatt client device instance. |
| [createGattClientDevice](arkts-ble-creategattclientdevice-f.md#createGattClientDevice-2) | create a Gatt client device instance with custom setting. |
| [createGattServer](arkts-ble-creategattserver-f.md#createGattServer-1) | create a Gatt server instance. |
| [disableAdvertising](arkts-ble-disableadvertising-f.md#disableAdvertising-1) | Disable the advertising with a specific ID temporarily. |
| [disableAdvertising](arkts-ble-disableadvertising-f.md#disableAdvertising-2) | Disable the advertising with a specific ID temporarily. |
| [enableAdvertising](arkts-ble-enableadvertising-f.md#enableAdvertising-1) | Enable the advertising with a specific ID temporarily. |
| [enableAdvertising](arkts-ble-enableadvertising-f.md#enableAdvertising-2) | Enable the advertising with a specific ID temporarily. |
| [getConnectedBLEDevices](arkts-ble-getconnectedbledevices-f.md#getConnectedBLEDevices-1) | Obtains the list of devices in the connected status. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [getConnectedBLEDevices](arkts-ble-getconnectedbledevices-f.md#getConnectedBLEDevices-2) | Obtains the list of devices in the connected status. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [off](arkts-ble-off-f.md#off-1) | Unsubscribe from advertising state change event. |
| [off](arkts-ble-off-f.md#off-2) | Unsubscribe BLE scan result. |
| [offAdvertisingStateChange](arkts-ble-offadvertisingstatechange-f.md#offAdvertisingStateChange-1) | Unsubscribe from advertising state change event. |
| [offBLEDeviceFind](arkts-ble-offbledevicefind-f.md#offBLEDeviceFind-1) | Unsubscribe BLE scan result. |
| [on](arkts-ble-on-f.md#on-1) | Subscribing to advertising state change event. |
| [on](arkts-ble-on-f.md#on-2) | Subscribe BLE scan result. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [onAdvertisingStateChange](arkts-ble-onadvertisingstatechange-f.md#onAdvertisingStateChange-1) | Subscribing to advertising state change event. |
| [onBLEDeviceFind](arkts-ble-onbledevicefind-f.md#onBLEDeviceFind-1) | Subscribe BLE scan result. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual. |
| [startAdvertising](arkts-ble-startadvertising-f.md#startAdvertising-1) | Starts BLE advertising. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startAdvertising](arkts-ble-startadvertising-f.md#startAdvertising-2) | Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startAdvertising](arkts-ble-startadvertising-f.md#startAdvertising-3) | Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added. |
| [startBLEScan](arkts-ble-startblescan-f.md#startBLEScan-1) | Starts scanning for specified BLE devices with filters. |
| [startBLEScan](arkts-ble-startblescan-f.md#startBLEScan-2) | Starts scanning for specified BLE devices with filters. |
| [stopAdvertising](arkts-ble-stopadvertising-f.md#stopAdvertising-1) | Stops BLE advertising. |
| [stopAdvertising](arkts-ble-stopadvertising-f.md#stopAdvertising-2) | Stops BLE advertising. Completely stop the advertising corresponding to the ID. |
| [stopAdvertising](arkts-ble-stopadvertising-f.md#stopAdvertising-3) | Stops BLE advertising. Completely stop the advertising corresponding to the ID. |
| [stopBLEScan](arkts-ble-stopblescan-f.md#stopBLEScan-1) | Stops BLE scanning. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AdvertiseData](arkts-ble-advertisedata-i.md) | Describes the advertising data. |
| [AdvertiseSetting](arkts-ble-advertisesetting-i.md) | Describes the settings for BLE advertising. |
| [AdvertisingDisableParams](arkts-ble-advertisingdisableparams-i.md) | Parameter for dynamically disable advertising. |
| [AdvertisingEnableParams](arkts-ble-advertisingenableparams-i.md) | Parameter for dynamically enable advertising. |
| [AdvertisingParams](arkts-ble-advertisingparams-i.md) | Describes the advertising parameters. |
| [AdvertisingStateChangeInfo](arkts-ble-advertisingstatechangeinfo-i.md) | Advertising state change information. |
| [BLECharacteristic](arkts-ble-blecharacteristic-i.md) | Describes the Gatt characteristic. |
| [BLEConnectionChangeState](arkts-ble-bleconnectionchangestate-i.md) | Describes the Gatt profile connection state. |
| [BLEDescriptor](arkts-ble-bledescriptor-i.md) | Describes the Gatt descriptor. |
| [BleScanner](arkts-ble-blescanner-i.md) | Manages the ble scanner. Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance. |
| [CharacteristicReadRequest](arkts-ble-characteristicreadrequest-i.md) | Describes the parameters of the Gatt client's characteristic read request. |
| [CharacteristicWriteRequest](arkts-ble-characteristicwriterequest-i.md) | Describes the parameters of the of the Gatt client's characteristic write request. |
| [DescriptorReadRequest](arkts-ble-descriptorreadrequest-i.md) | Describes the parameters of the Gatt client's descriptor read request. |
| [DescriptorWriteRequest](arkts-ble-descriptorwriterequest-i.md) | Describes the parameters of the Gatt client's characteristic write request. |
| [GattClientDevice](arkts-ble-gattclientdevice-i.md) | Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance. |
| [GattPermissions](arkts-ble-gattpermissions-i.md) | Describes the permission of a att attribute item. |
| [GattProperties](arkts-ble-gattproperties-i.md) | Describes the properties of a gatt characteristic. |
| <!--DelRow-->[GattRspContext](arkts-ble-gattrspcontext-i-sys.md) | Describe the context of GATT responses. |
| [GattServer](arkts-ble-gattserver-i.md) | Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance. |
| [GattService](arkts-ble-gattservice-i.md) | Describes the Gatt service. |
| [GattSetting](arkts-ble-gattsetting-i.md) | Describes the setting for Gatt Connection. |
| [ManufactureData](arkts-ble-manufacturedata-i.md) | Describes the manufacturer data. |
| [NotifyCharacteristic](arkts-ble-notifycharacteristic-i.md) | Describes the value of the indication or notification sent by the Gatt server. |
| [PhyValue](arkts-ble-phyvalue-i.md) | Describes the parameters of the Ble phy. |
| <!--DelRow-->[ScanEnhanceMode](arkts-ble-scanenhancemode-i-sys.md) | Describes the configuration of scan enhance mode. |
| [ScanFilter](arkts-ble-scanfilter-i.md) | Describes the criteria for filtering scanning results can be set. |
| [ScanOptions](arkts-ble-scanoptions-i.md) | Describes the parameters for scan. |
| [ScanReport](arkts-ble-scanreport-i.md) | Describes the contents of the scan report. |
| [ScanResult](arkts-ble-scanresult-i.md) | Describes the contents of the scan results. |
| [ServerResponse](arkts-ble-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [ServiceData](arkts-ble-servicedata-i.md) | Describes the service data. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [BluetoothAddress](arkts-ble-bluetoothaddress-t.md) | Bluetooth device address. |
| [BluetoothTransport](arkts-ble-bluetoothtransport-t.md) | Indicate the transport of a remote device. |
| [ProfileConnectionState](arkts-ble-profileconnectionstate-t.md) | Indicate the profile connection state. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AdvertisingState](arkts-ble-advertisingstate-e.md) | The enum of BLE advertising state. |
| [BlePhy](arkts-ble-blephy-e.md) | Phy type for advertising or connection. |
| [BleProfile](arkts-ble-bleprofile-e.md) | The Profile of the BLE protocol. |
| [CodedPhyMode](arkts-ble-codedphymode-e.md) | Coded phy mode for advertising or connection. |
| [ConnectionParam](arkts-ble-connectionparam-e.md) | GATT connection parameters. |
| <!--DelRow-->[EnhanceMode](arkts-ble-enhancemode-e-sys.md) | Scan enhance mode. |
| [GattDisconnectReason](arkts-ble-gattdisconnectreason-e.md) | The enum of gatt disconnection reasons. |
| [GattWriteType](arkts-ble-gattwritetype-e.md) | The enum of gatt characteristic write type |
| [MatchMode](arkts-ble-matchmode-e.md) | The enum of BLE match mode. |
| [PhyType](arkts-ble-phytype-e.md) | Phy type used during scan. |
| [ScanDuty](arkts-ble-scanduty-e.md) | The enum of scan duty. |
| [ScanReportMode](arkts-ble-scanreportmode-e.md) | Report mode used during scan. |
| [ScanReportType](arkts-ble-scanreporttype-e.md) | Scan report type used during scan. |

