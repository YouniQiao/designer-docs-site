# @ohos.wifiManager

Provides methods to operate or manage Wi-Fi.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addCandidateConfig](arkts-wifimanager-addcandidateconfig-f.md#addCandidateConfig-1) | Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground. |
| [addCandidateConfig](arkts-wifimanager-addcandidateconfig-f.md#addCandidateConfig-2) | Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground. |
| [addDeviceConfig](arkts-wifimanager-adddeviceconfig-f.md#addDeviceConfig-1) | Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added. |
| [addDeviceConfig](arkts-wifimanager-adddeviceconfig-f.md#addDeviceConfig-2) | Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added. |
| <!--DelRow-->[addHotspotBlockList](arkts-wifimanager-addhotspotblocklist-f-sys.md#addHotspotBlockList-1) | Add the station into the block list, the station can NOT access the hotspot. |
| <!--DelRow-->[allowAutoConnect](arkts-wifimanager-allowautoconnect-f-sys.md#allowAutoConnect-1) | Set whther to allow automatic connnect by networkId. The network can be associated with again if isAllowed is true, else not. |
| [connectToCandidateConfig](arkts-wifimanager-connecttocandidateconfig-f.md#connectToCandidateConfig-1) | Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground. |
| [connectToCandidateConfig](arkts-wifimanager-connecttocandidateconfig-f.md#connectToCandidateConfig-2) | Connect to the specified candidate hotspot using connect settings. |
| [connectToCandidateConfigWithUserAction](arkts-wifimanager-connecttocandidateconfigwithuseraction-f.md#connectToCandidateConfigWithUserAction-1) | Connect to a specified candidate hotspot by networkId, and wait for user respond result. Only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground. |
| <!--DelRow-->[connectToDevice](arkts-wifimanager-connecttodevice-f-sys.md#connectToDevice-1) | Connect to Wi-Fi hotspot by WifiDeviceConfig. |
| [connectToNetwork](arkts-wifimanager-connecttonetwork-f.md#connectToNetwork-1) | Connect to Wi-Fi hotspot by networkId. |
| [createGroup](arkts-wifimanager-creategroup-f.md#createGroup-1) | Create a P2P group. |
| <!--DelRow-->[delHotspotBlockList](arkts-wifimanager-delhotspotblocklist-f-sys.md#delHotspotBlockList-1) | Delete the station from block list, the station can access the hotspot. |
| <!--DelRow-->[deletePersistentGroup](arkts-wifimanager-deletepersistentgroup-f-sys.md#deletePersistentGroup-1) | Delete the persistent P2P group with the specified network ID. |
| <!--DelRow-->[disableHotspot](arkts-wifimanager-disablehotspot-f-sys.md#disableHotspot-1) | Disable Wi-Fi hotspot function. This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled. |
| <!--DelRow-->[disableNetwork](arkts-wifimanager-disablenetwork-f-sys.md#disableNetwork-1) | Disable the specified DeviceConfig by networkId. The disabled DeviceConfig will not be associated with again. |
| <!--DelRow-->[disableNetwork](arkts-wifimanager-disablenetwork-f-sys.md#disableNetwork-2) | Disable the specified DeviceConfig by networkId for a period of time. The disabled DeviceConfig will not be associated with again. |
| [disableWifi](arkts-wifimanager-disablewifi-f.md#disableWifi-1) | Disable Wi-Fi. |
| [disconnect](arkts-wifimanager-disconnect-f.md#disconnect-1) | Disconnect connection between sta and Wi-Fi hotspot. |
| <!--DelRow-->[enableHiLinkHandshake](arkts-wifimanager-enablehilinkhandshake-f-sys.md#enableHiLinkHandshake-1) | Enable hiLink handshake. |
| <!--DelRow-->[enableHotspot](arkts-wifimanager-enablehotspot-f-sys.md#enableHotspot-1) | Enable Wi-Fi hotspot function. This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled. |
| <!--DelRow-->[enableSemiWifi](arkts-wifimanager-enablesemiwifi-f-sys.md#enableSemiWifi-1) | Enable semi - Wifi. |
| [enableWifi](arkts-wifimanager-enablewifi-f.md#enableWifi-1) | Enable Wi-Fi. |
| <!--DelRow-->[factoryReset](arkts-wifimanager-factoryreset-f-sys.md#factoryReset-1) | Reset all saved device configure. |
| <!--DelRow-->[get5GChannelList](arkts-wifimanager-get5gchannellist-f-sys.md#get5GChannelList-1) | Obtain the supported 5G channel list of the device. |
| [getCandidateConfigs](arkts-wifimanager-getcandidateconfigs-f.md#getCandidateConfigs-1) | Obtain the list of all existed candidate Wi-Fi configurations which added by ourself. You can obtain only the Wi-Fi configurations you created on your own application. |
| [getCountryCode](arkts-wifimanager-getcountrycode-f.md#getCountryCode-1) | Obtain the country code of the device. |
| [getCurrentGroup](arkts-wifimanager-getcurrentgroup-f.md#getCurrentGroup-1) | Obtain information about the current p2p group. |
| [getCurrentGroup](arkts-wifimanager-getcurrentgroup-f.md#getCurrentGroup-2) | Obtain information about the current p2p group. |
| <!--DelRow-->[getDeviceConfig](arkts-wifimanager-getdeviceconfig-f-sys.md#getDeviceConfig-1) | Obtain the single Wi-Fi configuration with Network ID. |
| [getDeviceConfigs](arkts-wifimanager-getdeviceconfigs-f.md#getDeviceConfigs-1) | Obtain the list of all existed Wi-Fi configurations. |
| [getDeviceMacAddress](arkts-wifimanager-getdevicemacaddress-f.md#getDeviceMacAddress-1) | Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled. The MAC address is unique and cannot be changed. |
| <!--DelRow-->[getDisconnectedReason](arkts-wifimanager-getdisconnectedreason-f-sys.md#getDisconnectedReason-1) | Obtain the latest disconnected reason. |
| <!--DelRow-->[getHotspotBlockList](arkts-wifimanager-gethotspotblocklist-f-sys.md#getHotspotBlockList-1) | Get all the stations in the block list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| <!--DelRow-->[getHotspotConfig](arkts-wifimanager-gethotspotconfig-f-sys.md#getHotspotConfig-1) | Obtain the Wi-Fi hotspot configuration. |
| [getIpInfo](arkts-wifimanager-getipinfo-f.md#getIpInfo-1) | Obtain the IPv4 information of the Wi-Fi connection. The IP information includes the host IP address, gateway address, and DNS information. |
| [getIpv6Info](arkts-wifimanager-getipv6info-f.md#getIpv6Info-1) | Obtain the IPv6 information of the Wi-Fi connection. The IPv6 information includes the host IP address, gateway address, and DNS information. |
| [getLinkedInfo](arkts-wifimanager-getlinkedinfo-f.md#getLinkedInfo-1) | Obtain connection information about the Wi-Fi connection. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getLinkedInfo](arkts-wifimanager-getlinkedinfo-f.md#getLinkedInfo-2) | Obtain connection information about the Wi-Fi connection. |
| [getLinkedInfoSync](arkts-wifimanager-getlinkedinfosync-f.md#getLinkedInfoSync-1) | Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getMultiLinkedInfo](arkts-wifimanager-getmultilinkedinfo-f.md#getMultiLinkedInfo-1) | Obtain multiple Wi-Fi connection information when Wi-Fi linked in MLO(Muti-Link Operation) state. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| <!--DelRow-->[getP2pGroups](arkts-wifimanager-getp2pgroups-f-sys.md#getP2pGroups-1) | Obtain information about the groups. |
| <!--DelRow-->[getP2pGroups](arkts-wifimanager-getp2pgroups-f-sys.md#getP2pGroups-2) | Obtain information about the groups. |
| [getP2pLinkedInfo](arkts-wifimanager-getp2plinkedinfo-f.md#getP2pLinkedInfo-1) | Obtain information about the P2P connection. |
| [getP2pLinkedInfo](arkts-wifimanager-getp2plinkedinfo-f.md#getP2pLinkedInfo-2) | Obtain information about the P2P connection. |
| [getP2pLocalDevice](arkts-wifimanager-getp2plocaldevice-f.md#getP2pLocalDevice-1) | Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted. |
| [getP2pLocalDevice](arkts-wifimanager-getp2plocaldevice-f.md#getP2pLocalDevice-2) | Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted. |
| [getP2pPeerDevices](arkts-wifimanager-getp2ppeerdevices-f.md#getP2pPeerDevices-1) | Obtain the information about the found devices. |
| [getP2pPeerDevices](arkts-wifimanager-getp2ppeerdevices-f.md#getP2pPeerDevices-2) | Obtain the information about the found devices. |
| <!--DelRow-->[getScanAlwaysAllowed](arkts-wifimanager-getscanalwaysallowed-f-sys.md#getScanAlwaysAllowed-1) | Get scan always allowed flag. |
| [getScanInfoList](arkts-wifimanager-getscaninfolist-f.md#getScanInfoList-1) | Obtain the scanned station list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getScanResults](arkts-wifimanager-getscanresults-f.md#getScanResults-1) | Obtain the scanned sta list. |
| [getScanResults](arkts-wifimanager-getscanresults-f.md#getScanResults-2) | Obtain the scanned sta list. |
| [getScanResultsSync](arkts-wifimanager-getscanresultssync-f.md#getScanResultsSync-1) | Obtain the scanned sta list. |
| [getSignalLevel](arkts-wifimanager-getsignallevel-f.md#getSignalLevel-1) | Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band. |
| <!--DelRow-->[getStations](arkts-wifimanager-getstations-f-sys.md#getStations-1) | Obtain the list of stations that are connected to the Wi-Fi hotspot. This method can only be used on a device that serves as a Wi-Fi hotspot. |
| <!--DelRow-->[getSupportedFeatures](arkts-wifimanager-getsupportedfeatures-f-sys.md#getSupportedFeatures-1) | Obtain the features supported by the device. To check whether this device supports a specified feature. |
| <!--DelRow-->[getWifiCapability](arkts-wifimanager-getwificapability-f-sys.md#getWifiCapability-1) | Get Wi-Fi capability |
| <!--DelRow-->[getWifiDetailState](arkts-wifimanager-getwifidetailstate-f-sys.md#getWifiDetailState-1) | Obtains information about a Wi-Fi detail state. |
| [isBandTypeSupported](arkts-wifimanager-isbandtypesupported-f.md#isBandTypeSupported-1) | Check whether the current device supports the specified band. |
| [isConnected](arkts-wifimanager-isconnected-f.md#isConnected-1) | Check whether the Wi-Fi connection has been set up. |
| [isFeatureSupported](arkts-wifimanager-isfeaturesupported-f.md#isFeatureSupported-1) | Check whether the device supports a specified feature. |
| [isHotspotActive](arkts-wifimanager-ishotspotactive-f.md#isHotspotActive-1) | Check whether Wi-Fi hotspot is active on a device. |
| <!--DelRow-->[isHotspotDualBandSupported](arkts-wifimanager-ishotspotdualbandsupported-f-sys.md#isHotspotDualBandSupported-1) | Check whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi. |
| [isMeteredHotspot](arkts-wifimanager-ismeteredhotspot-f.md#isMeteredHotspot-1) | Whether the hotspot is metered hotspot or not. |
| <!--DelRow-->[isOpenSoftApAllowed](arkts-wifimanager-isopensoftapallowed-f-sys.md#isOpenSoftApAllowed-1) | Check whether Wi-Fi hotspot is can be operated under some situation. When the airplane mode is turned on and does not support the coexistence of softap and sta, nor does it support signal bridge, the hotspot switch cannot be operated. |
| <!--DelRow-->[isRandomMacDisabled](arkts-wifimanager-israndommacdisabled-f-sys.md#isRandomMacDisabled-1) | is random mac disabled |
| [isWifiActive](arkts-wifimanager-iswifiactive-f.md#isWifiActive-1) | Query the Wi-Fi status |
| [isWlanSupported](arkts-wifimanager-iswlansupported-f.md#isWlanSupported-1) | Query whether Wi-Fi is available |
| [off](arkts-wifimanager-off-f.md#off-1) | Unsubscribe Wi-Fi status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-wifimanager-off-f.md#off-2) | Unsubscribe Wi-Fi connection change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-wifimanager-off-f.md#off-3) | Unsubscribe Wi-Fi scan status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-wifimanager-off-f.md#off-4) | Unsubscribe Wi-Fi rssi change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-wifimanager-off-f.md#off-5) | Unsubscribe Wi-Fi hotspot state change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-wifimanager-off-f.md#off-6) | Unsubscribe P2P status change events. |
| [off](arkts-wifimanager-off-f.md#off-7) | Unsubscribe P2P connection change events. |
| [off](arkts-wifimanager-off-f.md#off-8) | Unsubscribe P2P local device change events. |
| [off](arkts-wifimanager-off-f.md#off-9) | Unsubscribe P2P peer device change events. |
| [off](arkts-wifimanager-off-f.md#off-10) | Unsubscribe P2P persistent group change events. |
| [off](arkts-wifimanager-off-f.md#off-11) | Unsubscribe P2P discovery events. |
| <!--DelRow-->[off](arkts-wifimanager-off-f-sys.md#off-1) | Unsubscribe Wi-Fi stream change events. All callback functions will be deregistered If there is no specific callback parameter. |
| <!--DelRow-->[off](arkts-wifimanager-off-f-sys.md#off-2) | Subscribe Wi-Fi device config change events. |
| <!--DelRow-->[off](arkts-wifimanager-off-f-sys.md#off-3) | Unsubscribe Wi-Fi hotspot sta join events. All callback functions will be deregistered If there is no specific callback parameter. |
| <!--DelRow-->[off](arkts-wifimanager-off-f-sys.md#off-4) | Unsubscribe Wi-Fi hotspot sta leave events. |
| <!--DelRow-->[offDeviceConfigChange](arkts-wifimanager-offdeviceconfigchange-f-sys.md#offDeviceConfigChange-1) | Subscribe Wi-Fi device config change events. |
| <!--DelRow-->[offHotspotStaJoin](arkts-wifimanager-offhotspotstajoin-f-sys.md#offHotspotStaJoin-1) | Unsubscribe Wi-Fi hotspot sta join events. All callback functions will be deregistered If there is no specific callback parameter. |
| <!--DelRow-->[offHotspotStaLeave](arkts-wifimanager-offhotspotstaleave-f-sys.md#offHotspotStaLeave-1) | Unsubscribe Wi-Fi hotspot sta leave events. |
| [offHotspotStateChange](arkts-wifimanager-offhotspotstatechange-f.md#offHotspotStateChange-1) | Unsubscribe Wi-Fi hotspot state change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [offP2pConnectionChange](arkts-wifimanager-offp2pconnectionchange-f.md#offP2pConnectionChange-1) | Unsubscribe P2P connection change events. |
| [offP2pDeviceChange](arkts-wifimanager-offp2pdevicechange-f.md#offP2pDeviceChange-1) | Unsubscribe P2P local device change events. |
| [offP2pDiscoveryChange](arkts-wifimanager-offp2pdiscoverychange-f.md#offP2pDiscoveryChange-1) | Unsubscribe P2P discovery events. |
| [offP2pPeerDeviceChange](arkts-wifimanager-offp2ppeerdevicechange-f.md#offP2pPeerDeviceChange-1) | Unsubscribe P2P peer device change events. |
| [offP2pPersistentGroupChange](arkts-wifimanager-offp2ppersistentgroupchange-f.md#offP2pPersistentGroupChange-1) | Unsubscribe P2P persistent group change events. |
| [offP2pStateChange](arkts-wifimanager-offp2pstatechange-f.md#offP2pStateChange-1) | Unsubscribe P2P status change events. |
| <!--DelRow-->[offStreamChange](arkts-wifimanager-offstreamchange-f-sys.md#offStreamChange-1) | Unsubscribe Wi-Fi stream change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [offWifiConnectionChange](arkts-wifimanager-offwificonnectionchange-f.md#offWifiConnectionChange-1) | Unsubscribe Wi-Fi connection change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [offWifiRssiChange](arkts-wifimanager-offwifirssichange-f.md#offWifiRssiChange-1) | Unsubscribe Wi-Fi rssi change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [offWifiScanStateChange](arkts-wifimanager-offwifiscanstatechange-f.md#offWifiScanStateChange-1) | Unsubscribe Wi-Fi scan status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [offWifiStateChange](arkts-wifimanager-offwifistatechange-f.md#offWifiStateChange-1) | Unsubscribe Wi-Fi status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [on](arkts-wifimanager-on-f.md#on-1) | Subscribe Wi-Fi status change events. |
| [on](arkts-wifimanager-on-f.md#on-2) | Subscribe Wi-Fi connection change events. |
| [on](arkts-wifimanager-on-f.md#on-3) | Subscribe Wi-Fi scan status change events. |
| [on](arkts-wifimanager-on-f.md#on-4) | Subscribe Wi-Fi rssi change events. |
| [on](arkts-wifimanager-on-f.md#on-5) | Subscribe Wi-Fi hotspot state change events. |
| [on](arkts-wifimanager-on-f.md#on-6) | Subscribe P2P status change events. |
| [on](arkts-wifimanager-on-f.md#on-7) | Subscribe P2P connection change events. |
| [on](arkts-wifimanager-on-f.md#on-8) | Subscribe P2P local device change events. |
| [on](arkts-wifimanager-on-f.md#on-9) | Subscribe P2P peer device change events. |
| [on](arkts-wifimanager-on-f.md#on-10) | Subscribe P2P persistent group change events. |
| [on](arkts-wifimanager-on-f.md#on-11) | Subscribe P2P discovery events. |
| <!--DelRow-->[on](arkts-wifimanager-on-f-sys.md#on-1) | Subscribe Wi-Fi stream change events. |
| <!--DelRow-->[on](arkts-wifimanager-on-f-sys.md#on-2) | Subscribe Wi-Fi device config change events. |
| <!--DelRow-->[on](arkts-wifimanager-on-f-sys.md#on-3) | Subscribe Wi-Fi hotspot sta join events. |
| <!--DelRow-->[on](arkts-wifimanager-on-f-sys.md#on-4) | Subscribe Wi-Fi hotspot sta leave events. |
| <!--DelRow-->[onDeviceConfigChange](arkts-wifimanager-ondeviceconfigchange-f-sys.md#onDeviceConfigChange-1) | Subscribe Wi-Fi device config change events. |
| <!--DelRow-->[onHotspotStaJoin](arkts-wifimanager-onhotspotstajoin-f-sys.md#onHotspotStaJoin-1) | Subscribe Wi-Fi hotspot sta join events. |
| <!--DelRow-->[onHotspotStaLeave](arkts-wifimanager-onhotspotstaleave-f-sys.md#onHotspotStaLeave-1) | Subscribe Wi-Fi hotspot sta leave events. |
| [onHotspotStateChange](arkts-wifimanager-onhotspotstatechange-f.md#onHotspotStateChange-1) | Subscribe Wi-Fi hotspot state change events. |
| [onP2pConnectionChange](arkts-wifimanager-onp2pconnectionchange-f.md#onP2pConnectionChange-1) | Subscribe P2P connection change events. |
| [onP2pDeviceChange](arkts-wifimanager-onp2pdevicechange-f.md#onP2pDeviceChange-1) | Subscribe P2P local device change events. |
| [onP2pDiscoveryChange](arkts-wifimanager-onp2pdiscoverychange-f.md#onP2pDiscoveryChange-1) | Subscribe P2P discovery events. |
| [onP2pPeerDeviceChange](arkts-wifimanager-onp2ppeerdevicechange-f.md#onP2pPeerDeviceChange-1) | Subscribe P2P peer device change events. |
| [onP2pPersistentGroupChange](arkts-wifimanager-onp2ppersistentgroupchange-f.md#onP2pPersistentGroupChange-1) | Subscribe P2P persistent group change events. |
| [onP2pStateChange](arkts-wifimanager-onp2pstatechange-f.md#onP2pStateChange-1) | Subscribe P2P status change events. |
| <!--DelRow-->[onStreamChange](arkts-wifimanager-onstreamchange-f-sys.md#onStreamChange-1) | Subscribe Wi-Fi stream change events. |
| [onWifiConnectionChange](arkts-wifimanager-onwificonnectionchange-f.md#onWifiConnectionChange-1) | Subscribe Wi-Fi connection change events. |
| [onWifiRssiChange](arkts-wifimanager-onwifirssichange-f.md#onWifiRssiChange-1) | Subscribe Wi-Fi rssi change events. |
| [onWifiScanStateChange](arkts-wifimanager-onwifiscanstatechange-f.md#onWifiScanStateChange-1) | Subscribe Wi-Fi scan status change events. |
| [onWifiStateChange](arkts-wifimanager-onwifistatechange-f.md#onWifiStateChange-1) | Subscribe Wi-Fi status change events. |
| [p2pCancelConnect](arkts-wifimanager-p2pcancelconnect-f.md#p2pCancelConnect-1) | Stop an ongoing p2p connection that is being established. |
| [p2pConnect](arkts-wifimanager-p2pconnect-f.md#p2pConnect-1) | Initiate a P2P connection to a device with the specified configuration. |
| <!--DelRow-->[reassociate](arkts-wifimanager-reassociate-f-sys.md#reassociate-1) | Re-associate to current network. |
| <!--DelRow-->[reconnect](arkts-wifimanager-reconnect-f-sys.md#reconnect-1) | Re-connect to current network. |
| <!--DelRow-->[removeAllNetwork](arkts-wifimanager-removeallnetwork-f-sys.md#removeAllNetwork-1) | Remove all the saved Wi-Fi configurations. |
| [removeCandidateConfig](arkts-wifimanager-removecandidateconfig-f.md#removeCandidateConfig-1) | Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground. |
| [removeCandidateConfig](arkts-wifimanager-removecandidateconfig-f.md#removeCandidateConfig-2) | Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground. |
| [removeDevice](arkts-wifimanager-removedevice-f.md#removeDevice-1) | Remove a Wi-Fi DeviceConfig with networkId. After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations. If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted. The application can only delete Wi-Fi DeviceConfig it has created. |
| [removeGroup](arkts-wifimanager-removegroup-f.md#removeGroup-1) | Remove a P2P group. |
| [scan](arkts-wifimanager-scan-f.md#scan-1) | Scan Wi-Fi hotspot. |
| <!--DelRow-->[setDeviceName](arkts-wifimanager-setdevicename-f-sys.md#setDeviceName-1) | Set the name of the Wi-Fi P2P device. |
| <!--DelRow-->[setHotspotConfig](arkts-wifimanager-sethotspotconfig-f-sys.md#setHotspotConfig-1) | Set the hotspot configuration for the device. |
| <!--DelRow-->[setScanAlwaysAllowed](arkts-wifimanager-setscanalwaysallowed-f-sys.md#setScanAlwaysAllowed-1) | User can trigger scan even Wi-Fi is disabled. |
| <!--DelRow-->[setWifiCapability](arkts-wifimanager-setwificapability-f-sys.md#setWifiCapability-1) | Set Wi-Fi capability |
| [startDiscoverDevices](arkts-wifimanager-startdiscoverdevices-f.md#startDiscoverDevices-1) | Start discover Wi-Fi P2P devices. |
| <!--DelRow-->[startPortalCertification](arkts-wifimanager-startportalcertification-f-sys.md#startPortalCertification-1) | Start Portal certification. |
| [startScan](arkts-wifimanager-startscan-f.md#startScan-1) | Scan Wi-Fi hotspot. |
| <!--DelRow-->[startWifiDetection](arkts-wifimanager-startwifidetection-f-sys.md#startWifiDetection-1) | Start Wi-Fi network detection |
| [stopDiscoverDevices](arkts-wifimanager-stopdiscoverdevices-f.md#stopDiscoverDevices-1) | Stop discover Wi-Fi P2P devices. |
| <!--DelRow-->[updateNetwork](arkts-wifimanager-updatenetwork-f-sys.md#updateNetwork-1) | Update the specified Wi-Fi configuration. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ConnectSettings](arkts-wifimanager-connectsettings-i.md) | Describes the settings for Wi-Fi connection. |
| <!--DelRow-->[HotspotConfig](arkts-wifimanager-hotspotconfig-i-sys.md) | Wi-Fi hotspot configuration information. |
| <!--DelRow-->[IpConfig](arkts-wifimanager-ipconfig-i-sys.md) | Wi-Fi IP configuration information. |
| [IpInfo](arkts-wifimanager-ipinfo-i.md) | Wi-Fi IP information. |
| <!--DelRow-->[Ipv6Config](arkts-wifimanager-ipv6config-i-sys.md) | Wi-Fi Ipv6 configuration information. |
| [Ipv6Info](arkts-wifimanager-ipv6info-i.md) | Wi-Fi IPv6 information. |
| <!--DelRow-->[StationInfo](arkts-wifimanager-stationinfo-i-sys.md) | Wi-Fi station information. |
| [WifiDeviceConfig](arkts-wifimanager-wifideviceconfig-i.md) | Wi-Fi device configuration information. |
| [WifiEapConfig](arkts-wifimanager-wifieapconfig-i.md) | Wi-Fi EAP config. |
| [WifiInfoElem](arkts-wifimanager-wifiinfoelem-i.md) | Wi-Fi information elements. |
| [WifiLinkedInfo](arkts-wifimanager-wifilinkedinfo-i.md) | Wi-Fi connection information. |
| [WifiP2PConfig](arkts-wifimanager-wifip2pconfig-i.md) | P2P config. |
| [WifiP2pDevice](arkts-wifimanager-wifip2pdevice-i.md) | P2P device information. |
| [WifiP2pGroupInfo](arkts-wifimanager-wifip2pgroupinfo-i.md) | P2P group information. |
| [WifiP2pLinkedInfo](arkts-wifimanager-wifip2plinkedinfo-i.md) | P2P linked information. |
| <!--DelRow-->[WifiProxyConfig](arkts-wifimanager-wifiproxyconfig-i-sys.md) | Wi-Fi Proxy config. |
| [WifiScanInfo](arkts-wifimanager-wifiscaninfo-i.md) | Describes the scanned Wi-Fi information. |
| [WifiWapiConfig](arkts-wifimanager-wifiwapiconfig-i.md) | Wi-Fi WAPI config. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ConnState](arkts-wifimanager-connstate-e.md) | The state of Wi-Fi connection enumeration. |
| [DeviceAddressType](arkts-wifimanager-deviceaddresstype-e.md) | Wi-Fi device address( mac / bssid ) type. |
| <!--DelRow-->[DisconnectedReason](arkts-wifimanager-disconnectedreason-e-sys.md) | Wi-Fi disconnected reason. |
| [EapMethod](arkts-wifimanager-eapmethod-e.md) | Wi-Fi EAP method. |
| [GroupOwnerBand](arkts-wifimanager-groupownerband-e.md) | P2P group owner band. |
| <!--DelRow-->[IpType](arkts-wifimanager-iptype-e-sys.md) | Wi-Fi IP type enumeration. |
| [P2pConnectState](arkts-wifimanager-p2pconnectstate-e.md) | P2P connection status. |
| [P2pDeviceStatus](arkts-wifimanager-p2pdevicestatus-e.md) | P2P device status. |
| [Phase2Method](arkts-wifimanager-phase2method-e.md) | Wi-Fi phase 2 method. |
| <!--DelRow-->[ProxyMethod](arkts-wifimanager-proxymethod-e-sys.md) | Wi-Fi Proxy method. |
| <!--DelRow-->[SuppState](arkts-wifimanager-suppstate-e-sys.md) | The state of the supplicant enumeration. |
| [WapiPskType](arkts-wifimanager-wapipsktype-e.md) | Describes the WAPI pre-shared key Type. |
| [WifiBandType](arkts-wifimanager-wifibandtype-e.md) | Wi-Fi band type. |
| [WifiCapability](arkts-wifimanager-wificapability-e.md) | Wi-Fi Capability |
| [WifiCategory](arkts-wifimanager-wificategory-e.md) | Wi-Fi Category. |
| [WifiChannelWidth](arkts-wifimanager-wifichannelwidth-e.md) | Describes the wifi channel width. |
| <!--DelRow-->[WifiDetailState](arkts-wifimanager-wifidetailstate-e-sys.md) | Wi-Fi detail state. |
| [WifiLinkType](arkts-wifimanager-wifilinktype-e.md) | Wi-Fi link type. |
| [WifiSecurityType](arkts-wifimanager-wifisecuritytype-e.md) | Describes the wifi security type. |
| [WifiStandard](arkts-wifimanager-wifistandard-e.md) | Wi-Fi standard. |

