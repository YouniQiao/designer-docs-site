# @ohos.wifi

Provides methods to operate or manage Wi-Fi.

**起始版本：** 6

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[addDeviceConfig](arkts-wifi-adddeviceconfig-f-sys.md#addDeviceConfig-1) | Adds Wi-Fi connection configuration to the device. <p>The configuration will be updated when the configuration is added.</p> |
| <!--DelRow-->[addDeviceConfig](arkts-wifi-adddeviceconfig-f-sys.md#addDeviceConfig-2) | Adds Wi-Fi connection configuration to the device. <p>The configuration will be updated when the configuration is added.</p> |
| [addUntrustedConfig](arkts-wifi-adduntrustedconfig-f.md#addUntrustedConfig-1) | Adds a specified untrusted hotspot configuration. <p>This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. |
| [addUntrustedConfig](arkts-wifi-adduntrustedconfig-f.md#addUntrustedConfig-2) | Adds a specified untrusted hotspot configuration. <p>This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. |
| <!--DelRow-->[connectToDevice](arkts-wifi-connecttodevice-f-sys.md#connectToDevice-1) | Connects to Wi-Fi network. |
| <!--DelRow-->[connectToNetwork](arkts-wifi-connecttonetwork-f-sys.md#connectToNetwork-1) | Connects to Wi-Fi network. |
| [createGroup](arkts-wifi-creategroup-f.md#createGroup-1) | Creates a P2P group. |
| <!--DelRow-->[deletePersistentGroup](arkts-wifi-deletepersistentgroup-f-sys.md#deletePersistentGroup-1) | Deletes the persistent P2P group with the specified network ID. |
| <!--DelRow-->[disableHotspot](arkts-wifi-disablehotspot-f-sys.md#disableHotspot-1) | Disables a Wi-Fi hotspot. <p>This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled. |
| <!--DelRow-->[disableNetwork](arkts-wifi-disablenetwork-f-sys.md#disableNetwork-1) | Disables a specified network. <p>The disabled network will not be associated with again. |
| <!--DelRow-->[disableWifi](arkts-wifi-disablewifi-f-sys.md#disableWifi-1) | Disables Wi-Fi. |
| <!--DelRow-->[disconnect](arkts-wifi-disconnect-f-sys.md#disconnect-1) | Disconnect Wi-Fi network. |
| <!--DelRow-->[enableHotspot](arkts-wifi-enablehotspot-f-sys.md#enableHotspot-1) | Enables a Wi-Fi hotspot. <p>This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled. |
| <!--DelRow-->[enableWifi](arkts-wifi-enablewifi-f-sys.md#enableWifi-1) | Enables Wi-Fi. |
| [getCountryCode](arkts-wifi-getcountrycode-f.md#getCountryCode-1) | Obtains the country code of this device. |
| [getCurrentGroup](arkts-wifi-getcurrentgroup-f.md#getCurrentGroup-1) | Obtains information about the current group. |
| [getCurrentGroup](arkts-wifi-getcurrentgroup-f.md#getCurrentGroup-2) | Obtains information about the current group. |
| <!--DelRow-->[getDeviceConfigs](arkts-wifi-getdeviceconfigs-f-sys.md#getDeviceConfigs-1) | Obtains the list of all existing Wi-Fi configurations. <p>You can obtain only the Wi-Fi configurations you created on your own application. |
| <!--DelRow-->[getDeviceMacAddress](arkts-wifi-getdevicemacaddress-f-sys.md#getDeviceMacAddress-1) | Obtains the MAC address of a Wi-Fi device. Wi-Fi must be enabled. <p>The MAC address is unique and cannot be changed. |
| <!--DelRow-->[getHotspotConfig](arkts-wifi-gethotspotconfig-f-sys.md#getHotspotConfig-1) | Obtains the Wi-Fi hotspot configuration. |
| [getIpInfo](arkts-wifi-getipinfo-f.md#getIpInfo-1) | Obtains the IP information of a Wi-Fi connection. <p>The IP information includes the host IP address, gateway address, and DNS information. |
| [getLinkedInfo](arkts-wifi-getlinkedinfo-f.md#getLinkedInfo-1) | Obtains information about a Wi-Fi connection. |
| [getLinkedInfo](arkts-wifi-getlinkedinfo-f.md#getLinkedInfo-2) | Obtains information about a Wi-Fi connection. |
| [getP2pLinkedInfo](arkts-wifi-getp2plinkedinfo-f.md#getP2pLinkedInfo-1) | Obtains information about a P2P connection. |
| [getP2pLinkedInfo](arkts-wifi-getp2plinkedinfo-f.md#getP2pLinkedInfo-2) | Obtains information about a P2P connection. |
| [getP2pPeerDevices](arkts-wifi-getp2ppeerdevices-f.md#getP2pPeerDevices-1) | Obtains the information about the found devices. |
| [getP2pPeerDevices](arkts-wifi-getp2ppeerdevices-f.md#getP2pPeerDevices-2) | Obtains the information about the found devices. |
| [getScanInfos](arkts-wifi-getscaninfos-f.md#getScanInfos-1) | Obtains the hotspot information that scanned. |
| [getScanInfos](arkts-wifi-getscaninfos-f.md#getScanInfos-2) | Obtains the hotspot information that scanned. |
| [getSignalLevel](arkts-wifi-getsignallevel-f.md#getSignalLevel-1) | Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band. |
| <!--DelRow-->[getStations](arkts-wifi-getstations-f-sys.md#getStations-1) | Obtains the list of clients that are connected to a Wi-Fi hotspot. <p>This method can only be used on a device that serves as a Wi-Fi hotspot. |
| <!--DelRow-->[getSupportedFeatures](arkts-wifi-getsupportedfeatures-f-sys.md#getSupportedFeatures-1) | Obtains the features supported by this device. <p>To check whether this device supports a specified feature. |
| [isConnected](arkts-wifi-isconnected-f.md#isConnected-1) | Checks whether a Wi-Fi connection has been set up. |
| [isFeatureSupported](arkts-wifi-isfeaturesupported-f.md#isFeatureSupported-1) | Checks whether this device supports a specified feature. |
| <!--DelRow-->[isHotspotActive](arkts-wifi-ishotspotactive-f-sys.md#isHotspotActive-1) | Checks whether Wi-Fi hotspot is active on a device. |
| <!--DelRow-->[isHotspotDualBandSupported](arkts-wifi-ishotspotdualbandsupported-f-sys.md#isHotspotDualBandSupported-1) | Checks whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi. |
| [isWifiActive](arkts-wifi-iswifiactive-f.md#isWifiActive-1) | Queries the Wi-Fi status |
| [off](arkts-wifi-off-f.md#off-1) | Unsubscribe Wi-Fi status change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| [off](arkts-wifi-off-f.md#off-2) | Unsubscribe Wi-Fi connection change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| [off](arkts-wifi-off-f.md#off-3) | Unsubscribe Wi-Fi scan status change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| [off](arkts-wifi-off-f.md#off-4) | Unsubscribe Wi-Fi rssi change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| [off](arkts-wifi-off-f.md#off-5) | Unsubscribe Wi-Fi hotspot state change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| [off](arkts-wifi-off-f.md#off-6) | Unsubscribe P2P status change events. |
| [off](arkts-wifi-off-f.md#off-7) | Unsubscribe P2P connection change events. |
| [off](arkts-wifi-off-f.md#off-8) | Unsubscribe P2P local device change events. |
| [off](arkts-wifi-off-f.md#off-9) | Unsubscribe P2P peer device change events. |
| [off](arkts-wifi-off-f.md#off-10) | Unsubscribe P2P persistent group change events. |
| [off](arkts-wifi-off-f.md#off-11) | Unsubscribe P2P discovery events. |
| <!--DelRow-->[off](arkts-wifi-off-f-sys.md#off-1) | Unsubscribe Wi-Fi stream change events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| <!--DelRow-->[off](arkts-wifi-off-f-sys.md#off-2) | Unsubscribe Wi-Fi hotspot sta join events. <p>All callback functions will be deregistered If there is no specific callback parameter.</p> |
| <!--DelRow-->[off](arkts-wifi-off-f-sys.md#off-3) | Unsubscribe Wi-Fi hotspot sta leave events. |
| [on](arkts-wifi-on-f.md#on-1) | Subscribe Wi-Fi status change events. |
| [on](arkts-wifi-on-f.md#on-2) | Subscribe Wi-Fi connection change events. |
| [on](arkts-wifi-on-f.md#on-3) | Subscribe Wi-Fi scan status change events. |
| [on](arkts-wifi-on-f.md#on-4) | Subscribe Wi-Fi rssi change events. |
| [on](arkts-wifi-on-f.md#on-5) | Subscribe Wi-Fi hotspot state change events. |
| [on](arkts-wifi-on-f.md#on-6) | Subscribe P2P status change events. |
| [on](arkts-wifi-on-f.md#on-7) | Subscribe P2P connection change events. |
| [on](arkts-wifi-on-f.md#on-8) | Subscribe P2P local device change events. |
| [on](arkts-wifi-on-f.md#on-9) | Subscribe P2P peer device change events. |
| [on](arkts-wifi-on-f.md#on-10) | Subscribe P2P persistent group change events. |
| [on](arkts-wifi-on-f.md#on-11) | Subscribe P2P discovery events. |
| <!--DelRow-->[on](arkts-wifi-on-f-sys.md#on-1) | Subscribe Wi-Fi stream change events. |
| <!--DelRow-->[on](arkts-wifi-on-f-sys.md#on-2) | Subscribe Wi-Fi hotspot sta join events. |
| <!--DelRow-->[on](arkts-wifi-on-f-sys.md#on-3) | Subscribe Wi-Fi hotspot sta leave events. |
| [p2pCancelConnect](arkts-wifi-p2pcancelconnect-f.md#p2pCancelConnect-1) | Canceling a P2P connection. |
| [p2pConnect](arkts-wifi-p2pconnect-f.md#p2pConnect-1) | Initiates a P2P connection to a device with the specified configuration. |
| <!--DelRow-->[reassociate](arkts-wifi-reassociate-f-sys.md#reassociate-1) | Re-associate to current network. |
| <!--DelRow-->[reconnect](arkts-wifi-reconnect-f-sys.md#reconnect-1) | Re-connects to current network. |
| <!--DelRow-->[removeAllNetwork](arkts-wifi-removeallnetwork-f-sys.md#removeAllNetwork-1) | Removes all the saved Wi-Fi configurations. |
| <!--DelRow-->[removeDevice](arkts-wifi-removedevice-f-sys.md#removeDevice-1) | Deletes a Wi-Fi network with a specified ID. <p>After a Wi-Fi network is deleted, its configuration will be deleted from the list of Wi-Fi configurations. If the Wi-Fi network is being connected, the connection will be interrupted. The application can only delete Wi-Fi networks it has created. |
| [removeGroup](arkts-wifi-removegroup-f.md#removeGroup-1) | Removes a P2P group. |
| [removeUntrustedConfig](arkts-wifi-removeuntrustedconfig-f.md#removeUntrustedConfig-1) | Removes a specified untrusted hotspot configuration. <p>This method removes one configuration at a time. |
| [removeUntrustedConfig](arkts-wifi-removeuntrustedconfig-f.md#removeUntrustedConfig-2) | Removes a specified untrusted hotspot configuration. <p>This method removes one configuration at a time. |
| [scan](arkts-wifi-scan-f.md#scan-1) | Scans Wi-Fi hotspot. <p>This API works in asynchronous mode.</p> |
| <!--DelRow-->[setDeviceName](arkts-wifi-setdevicename-f-sys.md#setDeviceName-1) | Sets the name of the Wi-Fi P2P device. |
| <!--DelRow-->[setHotspotConfig](arkts-wifi-sethotspotconfig-f-sys.md#setHotspotConfig-1) | Sets the hotspot for a device. <p>Only OPEN and WPA2 PSK hotspot can be configured. |
| [startDiscoverDevices](arkts-wifi-startdiscoverdevices-f.md#startDiscoverDevices-1) | Discover Wi-Fi P2P devices. |
| [stopDiscoverDevices](arkts-wifi-stopdiscoverdevices-f.md#stopDiscoverDevices-1) | Stops discovering Wi-Fi P2P devices. |
| <!--DelRow-->[updateNetwork](arkts-wifi-updatenetwork-f-sys.md#updateNetwork-1) | Updates the specified Wi-Fi configuration. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[HotspotConfig](arkts-wifi-hotspotconfig-i-sys.md) | Wi-Fi hotspot configuration information. |
| <!--DelRow-->[IpConfig](arkts-wifi-ipconfig-i-sys.md) | Wi-Fi IP configuration information. |
| [IpInfo](arkts-wifi-ipinfo-i.md) | Wi-Fi IP information. |
| <!--DelRow-->[StationInfo](arkts-wifi-stationinfo-i-sys.md) | Wi-Fi station information. |
| [WifiDeviceConfig](arkts-wifi-wifideviceconfig-i.md) | Wi-Fi device configuration information. |
| [WifiLinkedInfo](arkts-wifi-wifilinkedinfo-i.md) | Wi-Fi connection information. |
| [WifiP2PConfig](arkts-wifi-wifip2pconfig-i.md) | P2P config. |
| [WifiP2pDevice](arkts-wifi-wifip2pdevice-i.md) | P2P device information. |
| [WifiP2pGroupInfo](arkts-wifi-wifip2pgroupinfo-i.md) | P2P group information. |
| [WifiP2pLinkedInfo](arkts-wifi-wifip2plinkedinfo-i.md) | P2P linked information. |
| [WifiScanInfo](arkts-wifi-wifiscaninfo-i.md) | Describes the scanned Wi-Fi information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ConnState](arkts-wifi-connstate-e.md) | The state of Wi-Fi connection enumeration. |
| [GroupOwnerBand](arkts-wifi-groupownerband-e.md) | P2P group owner band. |
| <!--DelRow-->[IpType](arkts-wifi-iptype-e-sys.md) | Wi-Fi IP type enumeration. |
| [P2pConnectState](arkts-wifi-p2pconnectstate-e.md) | P2P connection status. |
| [P2pDeviceStatus](arkts-wifi-p2pdevicestatus-e.md) | P2P device status. |
| <!--DelRow-->[SuppState](arkts-wifi-suppstate-e-sys.md) | The state of the supplicant enumeration. |
| [WifiSecurityType](arkts-wifi-wifisecuritytype-e.md) | Describes the wifi security type. |

