# @ohos.wifiManager

Provides methods to operate or manage Wi-Fi.

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addCandidateConfig](arkts-connectivity-addcandidateconfig-f.md#addcandidateconfig-1) | Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground. |
| [addCandidateConfig](arkts-connectivity-addcandidateconfig-f.md#addcandidateconfig-2) | Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground. |
| [addDeviceConfig](arkts-connectivity-adddeviceconfig-f.md#adddeviceconfig-1) | Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added. |
| [addDeviceConfig](arkts-connectivity-adddeviceconfig-f.md#adddeviceconfig-2) | Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added. |
| [connectToCandidateConfig](arkts-connectivity-connecttocandidateconfig-f.md#connecttocandidateconfig-1) | Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground. |
| [connectToCandidateConfig](arkts-connectivity-connecttocandidateconfig-f.md#connecttocandidateconfig-2) | Connect to the specified candidate hotspot using connect settings. |
| [connectToCandidateConfigWithUserAction](arkts-connectivity-connecttocandidateconfigwithuseraction-f.md#connecttocandidateconfigwithuseraction-1) | Connect to a specified candidate hotspot by networkId, and wait for user respond result. Only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground. |
| [connectToNetwork](arkts-connectivity-connecttonetwork-f.md#connecttonetwork-1) | Connect to Wi-Fi hotspot by networkId. |
| [createGroup](arkts-connectivity-creategroup-f.md#creategroup-1) | Create a P2P group. |
| [disableWifi](arkts-connectivity-disablewifi-f.md#disablewifi-1) | Disable Wi-Fi. |
| [disconnect](arkts-connectivity-disconnect-f.md#disconnect-1) | Disconnect connection between sta and Wi-Fi hotspot. |
| [enableWifi](arkts-connectivity-enablewifi-f.md#enablewifi-1) | Enable Wi-Fi. |
| [getCandidateConfigs](arkts-connectivity-getcandidateconfigs-f.md#getcandidateconfigs-1) | Obtain the list of all existed candidate Wi-Fi configurations which added by ourself. You can obtain only the Wi-Fi configurations you created on your own application. |
| [getCountryCode](arkts-connectivity-getcountrycode-f.md#getcountrycode-1) | Obtain the country code of the device. |
| [getCurrentGroup](arkts-connectivity-getcurrentgroup-f.md#getcurrentgroup-1) | Obtain information about the current p2p group. |
| [getCurrentGroup](arkts-connectivity-getcurrentgroup-f.md#getcurrentgroup-2) | Obtain information about the current p2p group. |
| [getDeviceConfigs](arkts-connectivity-getdeviceconfigs-f.md#getdeviceconfigs-1) | Obtain the list of all existed Wi-Fi configurations. |
| [getDeviceMacAddress](arkts-connectivity-getdevicemacaddress-f.md#getdevicemacaddress-1) | Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled. The MAC address is unique and cannot be changed. |
| [getIpInfo](arkts-connectivity-getipinfo-f.md#getipinfo-1) | Obtain the IPv4 information of the Wi-Fi connection. The IP information includes the host IP address, gateway address, and DNS information. |
| [getIpv6Info](arkts-connectivity-getipv6info-f.md#getipv6info-1) | Obtain the IPv6 information of the Wi-Fi connection. The IPv6 information includes the host IP address, gateway address, and DNS information. |
| [getLinkedInfo](arkts-connectivity-getlinkedinfo-f.md#getlinkedinfo-1) | Obtain connection information about the Wi-Fi connection. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getLinkedInfo](arkts-connectivity-getlinkedinfo-f.md#getlinkedinfo-2) | Obtain connection information about the Wi-Fi connection. |
| [getLinkedInfoSync](arkts-connectivity-getlinkedinfosync-f.md#getlinkedinfosync-1) | Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getMultiLinkedInfo](arkts-connectivity-getmultilinkedinfo-f.md#getmultilinkedinfo-1) | Obtain multiple Wi-Fi connection information when Wi-Fi linked in MLO(Muti-Link Operation) state. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getP2pLinkedInfo](arkts-connectivity-getp2plinkedinfo-f.md#getp2plinkedinfo-1) | Obtain information about the P2P connection. |
| [getP2pLinkedInfo](arkts-connectivity-getp2plinkedinfo-f.md#getp2plinkedinfo-2) | Obtain information about the P2P connection. |
| [getP2pLocalDevice](arkts-connectivity-getp2plocaldevice-f.md#getp2plocaldevice-1) | Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted. |
| [getP2pLocalDevice](arkts-connectivity-getp2plocaldevice-f.md#getp2plocaldevice-2) | Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted. |
| [getP2pPeerDevices](arkts-connectivity-getp2ppeerdevices-f.md#getp2ppeerdevices-1) | Obtain the information about the found devices. |
| [getP2pPeerDevices](arkts-connectivity-getp2ppeerdevices-f.md#getp2ppeerdevices-2) | Obtain the information about the found devices. |
| [getScanInfoList](arkts-connectivity-getscaninfolist-f.md#getscaninfolist-1) | Obtain the scanned station list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getScanResults](arkts-connectivity-getscanresults-f.md#getscanresults-1) | Obtain the scanned sta list. |
| [getScanResults](arkts-connectivity-getscanresults-f.md#getscanresults-2) | Obtain the scanned sta list. |
| [getScanResultsSync](arkts-connectivity-getscanresultssync-f.md#getscanresultssync-1) | Obtain the scanned sta list. |
| [getSignalLevel](arkts-connectivity-getsignallevel-f.md#getsignallevel-1) | Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band. |
| [isBandTypeSupported](arkts-connectivity-isbandtypesupported-f.md#isbandtypesupported-1) | Check whether the current device supports the specified band. |
| [isConnected](arkts-connectivity-isconnected-f.md#isconnected-1) | Check whether the Wi-Fi connection has been set up. |
| [isFeatureSupported](arkts-connectivity-isfeaturesupported-f.md#isfeaturesupported-1) | Check whether the device supports a specified feature. |
| [isHotspotActive](arkts-connectivity-ishotspotactive-f.md#ishotspotactive-1) | Check whether Wi-Fi hotspot is active on a device. |
| [isMeteredHotspot](arkts-connectivity-ismeteredhotspot-f.md#ismeteredhotspot-1) | Whether the hotspot is metered hotspot or not. |
| [isWifiActive](arkts-connectivity-iswifiactive-f.md#iswifiactive-1) | Query the Wi-Fi status |
| [isWlanSupported](arkts-connectivity-iswlansupported-f.md#iswlansupported-1) | Query whether Wi-Fi is available |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe Wi-Fi status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f.md#off-2) | Unsubscribe Wi-Fi connection change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f.md#off-3) | Unsubscribe Wi-Fi scan status change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f.md#off-4) | Unsubscribe Wi-Fi rssi change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f.md#off-7) | Unsubscribe Wi-Fi hotspot state change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f.md#off-10) | Unsubscribe P2P status change events. |
| [off](arkts-connectivity-off-f.md#off-11) | Unsubscribe P2P connection change events. |
| [off](arkts-connectivity-off-f.md#off-12) | Unsubscribe P2P local device change events. |
| [off](arkts-connectivity-off-f.md#off-13) | Unsubscribe P2P peer device change events. |
| [off](arkts-connectivity-off-f.md#off-14) | Unsubscribe P2P persistent group change events. |
| [off](arkts-connectivity-off-f.md#off-15) | Unsubscribe P2P discovery events. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe Wi-Fi status change events. |
| [on](arkts-connectivity-on-f.md#on-2) | Subscribe Wi-Fi connection change events. |
| [on](arkts-connectivity-on-f.md#on-3) | Subscribe Wi-Fi scan status change events. |
| [on](arkts-connectivity-on-f.md#on-4) | Subscribe Wi-Fi rssi change events. |
| [on](arkts-connectivity-on-f.md#on-7) | Subscribe Wi-Fi hotspot state change events. |
| [on](arkts-connectivity-on-f.md#on-10) | Subscribe P2P status change events. |
| [on](arkts-connectivity-on-f.md#on-11) | Subscribe P2P connection change events. |
| [on](arkts-connectivity-on-f.md#on-12) | Subscribe P2P local device change events. |
| [on](arkts-connectivity-on-f.md#on-13) | Subscribe P2P peer device change events. |
| [on](arkts-connectivity-on-f.md#on-14) | Subscribe P2P persistent group change events. |
| [on](arkts-connectivity-on-f.md#on-15) | Subscribe P2P discovery events. |
| [p2pCancelConnect](arkts-connectivity-p2pcancelconnect-f.md#p2pcancelconnect-1) | Stop an ongoing p2p connection that is being established. |
| [p2pConnect](arkts-connectivity-p2pconnect-f.md#p2pconnect-1) | Initiate a P2P connection to a device with the specified configuration. |
| [removeCandidateConfig](arkts-connectivity-removecandidateconfig-f.md#removecandidateconfig-1) | Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground. |
| [removeCandidateConfig](arkts-connectivity-removecandidateconfig-f.md#removecandidateconfig-2) | Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground. |
| [removeDevice](arkts-connectivity-removedevice-f.md#removedevice-1) | Remove a Wi-Fi DeviceConfig with networkId. After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations. If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted. The application can only delete Wi-Fi DeviceConfig it has created. |
| [removeGroup](arkts-connectivity-removegroup-f.md#removegroup-1) | Remove a P2P group. |
| [scan](arkts-connectivity-scan-f.md#scan-1) | Scan Wi-Fi hotspot. |
| [startDiscoverDevices](arkts-connectivity-startdiscoverdevices-f.md#startdiscoverdevices-1) | Start discover Wi-Fi P2P devices. |
| [startScan](arkts-connectivity-startscan-f.md#startscan-1) | Scan Wi-Fi hotspot. |
| [stopDiscoverDevices](arkts-connectivity-stopdiscoverdevices-f.md#stopdiscoverdevices-1) | Stop discover Wi-Fi P2P devices. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addHotspotBlockList](arkts-connectivity-addhotspotblocklist-f-sys.md#addhotspotblocklist-1) | Add the station into the block list, the station can NOT access the hotspot. |
| [allowAutoConnect](arkts-connectivity-allowautoconnect-f-sys.md#allowautoconnect-1) | Set whther to allow automatic connnect by networkId. The network can be associated with again if isAllowed is true, else not. |
| [connectToDevice](arkts-connectivity-connecttodevice-f-sys.md#connecttodevice-1) | Connect to Wi-Fi hotspot by WifiDeviceConfig. |
| [delHotspotBlockList](arkts-connectivity-delhotspotblocklist-f-sys.md#delhotspotblocklist-1) | Delete the station from block list, the station can access the hotspot. |
| [deletePersistentGroup](arkts-connectivity-deletepersistentgroup-f-sys.md#deletepersistentgroup-1) | Delete the persistent P2P group with the specified network ID. |
| [disableHotspot](arkts-connectivity-disablehotspot-f-sys.md#disablehotspot-1) | Disable Wi-Fi hotspot function. This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled. |
| [disableNetwork](arkts-connectivity-disablenetwork-f-sys.md#disablenetwork-1) | Disable the specified DeviceConfig by networkId. The disabled DeviceConfig will not be associated with again. |
| [disableNetwork](arkts-connectivity-disablenetwork-f-sys.md#disablenetwork-2) | Disable the specified DeviceConfig by networkId for a period of time. The disabled DeviceConfig will not be associated with again. |
| [enableHiLinkHandshake](arkts-connectivity-enablehilinkhandshake-f-sys.md#enablehilinkhandshake-1) | Enable hiLink handshake. |
| [enableHotspot](arkts-connectivity-enablehotspot-f-sys.md#enablehotspot-1) | Enable Wi-Fi hotspot function. This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled. |
| [enableSemiWifi](arkts-connectivity-enablesemiwifi-f-sys.md#enablesemiwifi-1) | Enable semi - Wifi. |
| [factoryReset](arkts-connectivity-factoryreset-f-sys.md#factoryreset-1) | Reset all saved device configure. |
| [get5GChannelList](arkts-connectivity-get5gchannellist-f-sys.md#get5gchannellist-1) | Obtain the supported 5G channel list of the device. |
| [getDeviceConfig](arkts-connectivity-getdeviceconfig-f-sys.md#getdeviceconfig-1) | Obtain the single Wi-Fi configuration with Network ID. |
| [getDisconnectedReason](arkts-connectivity-getdisconnectedreason-f-sys.md#getdisconnectedreason-1) | Obtain the latest disconnected reason. |
| [getHotspotBlockList](arkts-connectivity-gethotspotblocklist-f-sys.md#gethotspotblocklist-1) | Get all the stations in the block list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. |
| [getHotspotConfig](arkts-connectivity-gethotspotconfig-f-sys.md#gethotspotconfig-1) | Obtain the Wi-Fi hotspot configuration. |
| [getP2pGroups](arkts-connectivity-getp2pgroups-f-sys.md#getp2pgroups-1) | Obtain information about the groups. |
| [getP2pGroups](arkts-connectivity-getp2pgroups-f-sys.md#getp2pgroups-2) | Obtain information about the groups. |
| [getScanAlwaysAllowed](arkts-connectivity-getscanalwaysallowed-f-sys.md#getscanalwaysallowed-1) | Get scan always allowed flag. |
| [getStations](arkts-connectivity-getstations-f-sys.md#getstations-1) | Obtain the list of stations that are connected to the Wi-Fi hotspot. This method can only be used on a device that serves as a Wi-Fi hotspot. |
| [getSupportedFeatures](arkts-connectivity-getsupportedfeatures-f-sys.md#getsupportedfeatures-1) | Obtain the features supported by the device. To check whether this device supports a specified feature. |
| [getWifiCapability](arkts-connectivity-getwificapability-f-sys.md#getwificapability-1) | Get Wi-Fi capability |
| [getWifiDetailState](arkts-connectivity-getwifidetailstate-f-sys.md#getwifidetailstate-1) | Obtains information about a Wi-Fi detail state. |
| [isHotspotDualBandSupported](arkts-connectivity-ishotspotdualbandsupported-f-sys.md#ishotspotdualbandsupported-1) | Check whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi. |
| [isOpenSoftApAllowed](arkts-connectivity-isopensoftapallowed-f-sys.md#isopensoftapallowed-1) | Check whether Wi-Fi hotspot is can be operated under some situation. When the airplane mode is turned on and does not support the coexistence of softap and sta, nor does it support signal bridge, the hotspot switch cannot be operated. |
| [isRandomMacDisabled](arkts-connectivity-israndommacdisabled-f-sys.md#israndommacdisabled-1) | is random mac disabled |
| [off](arkts-connectivity-off-f-sys.md#off-5) | Unsubscribe Wi-Fi stream change events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f-sys.md#off-6) | Subscribe Wi-Fi device config change events. |
| [off](arkts-connectivity-off-f-sys.md#off-8) | Unsubscribe Wi-Fi hotspot sta join events. All callback functions will be deregistered If there is no specific callback parameter. |
| [off](arkts-connectivity-off-f-sys.md#off-9) | Unsubscribe Wi-Fi hotspot sta leave events. |
| [on](arkts-connectivity-on-f-sys.md#on-5) | Subscribe Wi-Fi stream change events. |
| [on](arkts-connectivity-on-f-sys.md#on-6) | Subscribe Wi-Fi device config change events. |
| [on](arkts-connectivity-on-f-sys.md#on-8) | Subscribe Wi-Fi hotspot sta join events. |
| [on](arkts-connectivity-on-f-sys.md#on-9) | Subscribe Wi-Fi hotspot sta leave events. |
| [reassociate](arkts-connectivity-reassociate-f-sys.md#reassociate-1) | Re-associate to current network. |
| [reconnect](arkts-connectivity-reconnect-f-sys.md#reconnect-1) | Re-connect to current network. |
| [removeAllNetwork](arkts-connectivity-removeallnetwork-f-sys.md#removeallnetwork-1) | Remove all the saved Wi-Fi configurations. |
| [setDeviceName](arkts-connectivity-setdevicename-f-sys.md#setdevicename-1) | Set the name of the Wi-Fi P2P device. |
| [setHotspotConfig](arkts-connectivity-sethotspotconfig-f-sys.md#sethotspotconfig-1) | Set the hotspot configuration for the device. |
| [setScanAlwaysAllowed](arkts-connectivity-setscanalwaysallowed-f-sys.md#setscanalwaysallowed-1) | User can trigger scan even Wi-Fi is disabled. |
| [setWifiCapability](arkts-connectivity-setwificapability-f-sys.md#setwificapability-1) | Set Wi-Fi capability |
| [startPortalCertification](arkts-connectivity-startportalcertification-f-sys.md#startportalcertification-1) | Start Portal certification. |
| [startWifiDetection](arkts-connectivity-startwifidetection-f-sys.md#startwifidetection-1) | Start Wi-Fi network detection |
| [updateNetwork](arkts-connectivity-updatenetwork-f-sys.md#updatenetwork-1) | Update the specified Wi-Fi configuration. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectSettings](arkts-connectivity-connectsettings-i.md) | Describes the settings for Wi-Fi connection. |
| [IpInfo](arkts-connectivity-ipinfo-i.md) | Wi-Fi IP information. |
| [Ipv6Info](arkts-connectivity-ipv6info-i.md) | Wi-Fi IPv6 information. |
| [WifiDeviceConfig](arkts-connectivity-wifideviceconfig-i.md) | Wi-Fi device configuration information. |
| [WifiEapConfig](arkts-connectivity-wifieapconfig-i.md) | Wi-Fi EAP config. |
| [WifiInfoElem](arkts-connectivity-wifiinfoelem-i.md) | Wi-Fi information elements. |
| [WifiLinkedInfo](arkts-connectivity-wifilinkedinfo-i.md) | Wi-Fi connection information. |
| [WifiP2PConfig](arkts-connectivity-wifip2pconfig-i.md) | P2P config. |
| [WifiP2pDevice](arkts-connectivity-wifip2pdevice-i.md) | P2P device information. |
| [WifiP2pGroupInfo](arkts-connectivity-wifip2pgroupinfo-i.md) | P2P group information. |
| [WifiP2pLinkedInfo](arkts-connectivity-wifip2plinkedinfo-i.md) | P2P linked information. |
| [WifiScanInfo](arkts-connectivity-wifiscaninfo-i.md) | Describes the scanned Wi-Fi information. |
| [WifiWapiConfig](arkts-connectivity-wifiwapiconfig-i.md) | Wi-Fi WAPI config. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HotspotConfig](arkts-connectivity-hotspotconfig-i-sys.md) | Wi-Fi hotspot configuration information. |
| [IpConfig](arkts-connectivity-ipconfig-i-sys.md) | Wi-Fi IP configuration information. |
| [Ipv6Config](arkts-connectivity-ipv6config-i-sys.md) | Wi-Fi Ipv6 configuration information. |
| [StationInfo](arkts-connectivity-stationinfo-i-sys.md) | Wi-Fi station information. |
| [WifiDeviceConfig](arkts-connectivity-wifideviceconfig-i-sys.md) | Wi-Fi device configuration information. |
| [WifiLinkedInfo](arkts-connectivity-wifilinkedinfo-i-sys.md) | Wi-Fi connection information. |
| [WifiProxyConfig](arkts-connectivity-wifiproxyconfig-i-sys.md) | Wi-Fi Proxy config. |
| [WifiScanInfo](arkts-connectivity-wifiscaninfo-i-sys.md) | Describes the scanned Wi-Fi information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ConnState](arkts-connectivity-connstate-e.md) | The state of Wi-Fi connection enumeration. |
| [DeviceAddressType](arkts-connectivity-deviceaddresstype-e.md) | Wi-Fi device address( mac / bssid ) type. |
| [EapMethod](arkts-connectivity-eapmethod-e.md) | Wi-Fi EAP method. |
| [GroupOwnerBand](arkts-connectivity-groupownerband-e.md) | P2P group owner band. |
| [P2pConnectState](arkts-connectivity-p2pconnectstate-e.md) | P2P connection status. |
| [P2pDeviceStatus](arkts-connectivity-p2pdevicestatus-e.md) | P2P device status. |
| [Phase2Method](arkts-connectivity-phase2method-e.md) | Wi-Fi phase 2 method. |
| [WapiPskType](arkts-connectivity-wapipsktype-e.md) | Describes the WAPI pre-shared key Type. |
| [WifiBandType](arkts-connectivity-wifibandtype-e.md) | Wi-Fi band type. |
| [WifiCapability](arkts-connectivity-wificapability-e.md) | Wi-Fi Capability |
| [WifiCategory](arkts-connectivity-wificategory-e.md) | Wi-Fi Category. |
| [WifiChannelWidth](arkts-connectivity-wifichannelwidth-e.md) | Describes the wifi channel width. |
| [WifiLinkType](arkts-connectivity-wifilinktype-e.md) | Wi-Fi link type. |
| [WifiSecurityType](arkts-connectivity-wifisecuritytype-e.md) | Describes the wifi security type. |
| [WifiStandard](arkts-connectivity-wifistandard-e.md) | Wi-Fi standard. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DisconnectedReason](arkts-connectivity-disconnectedreason-e-sys.md) | Wi-Fi disconnected reason. |
| [IpType](arkts-connectivity-iptype-e-sys.md) | Wi-Fi IP type enumeration. |
| [ProxyMethod](arkts-connectivity-proxymethod-e-sys.md) | Wi-Fi Proxy method. |
| [SuppState](arkts-connectivity-suppstate-e-sys.md) | The state of the supplicant enumeration. |
| [WifiDetailState](arkts-connectivity-wifidetailstate-e-sys.md) | Wi-Fi detail state. |
<!--DelEnd-->

