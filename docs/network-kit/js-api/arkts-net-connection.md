# @ohos.net.connection

Provides interfaces to manage and use data networks.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addCustomDnsRule](arkts-connection-addcustomdnsrule-f.md#addCustomDnsRule-1) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| [addCustomDnsRule](arkts-connection-addcustomdnsrule-f.md#addCustomDnsRule-2) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| <!--DelRow-->[addVlanIp](arkts-connection-addvlanip-f-sys.md#addVlanIp-1) | Add ip of vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [clearCustomDnsRules](arkts-connection-clearcustomdnsrules-f.md#clearCustomDnsRules-1) | Clear all custom DNS rules for current application. |
| [clearCustomDnsRules](arkts-connection-clearcustomdnsrules-f.md#clearCustomDnsRules-2) | Clear all custom DNS rules for current application. |
| [createNetConnection](arkts-connection-createnetconnection-f.md#createNetConnection-1) | Create a network connection with optional netSpecifier and timeout. |
| <!--DelRow-->[createVlanInterface](arkts-connection-createvlaninterface-f-sys.md#createVlanInterface-1) | Create vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[deleteVlanIp](arkts-connection-deletevlanip-f-sys.md#deleteVlanIp-1) | Delete ip of vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[destroyVlanInterface](arkts-connection-destroyvlaninterface-f-sys.md#destroyVlanInterface-1) | Destroy vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[disableAirplaneMode](arkts-connection-disableairplanemode-f-sys.md#disableAirplaneMode-1) | Disables the airplane mode for a device. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[disableAirplaneMode](arkts-connection-disableairplanemode-f-sys.md#disableAirplaneMode-2) | Disables the airplane mode for a device. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[enableAirplaneMode](arkts-connection-enableairplanemode-f-sys.md#enableAirplaneMode-1) | Enables the airplane mode for a device. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[enableAirplaneMode](arkts-connection-enableairplanemode-f-sys.md#enableAirplaneMode-2) | Enables the airplane mode for a device. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| <!--DelRow-->[factoryReset](arkts-connection-factoryreset-f-sys.md#factoryReset-1) | factory reset network settings To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [findProxyForUrl](arkts-connection-findproxyforurl-f.md#findProxyForUrl-1) | Find pac proxy info for the url. |
| [getAddressesByName](arkts-connection-getaddressesbyname-f.md#getAddressesByName-1) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByName](arkts-connection-getaddressesbyname-f.md#getAddressesByName-2) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByNameWithOptions](arkts-connection-getaddressesbynamewithoptions-f.md#getAddressesByNameWithOptions-1) | Resolves a host name to obtain all IP addresses with specified query option. |
| [getAllNets](arkts-connection-getallnets-f.md#getAllNets-1) | Obtains the list of data networks that are activated. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNets](arkts-connection-getallnets-f.md#getAllNets-2) | Obtains the list of data networks that are activated. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNetsSync](arkts-connection-getallnetssync-f.md#getAllNetsSync-1) | Obtains the list of data networks that are activated. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAppNet](arkts-connection-getappnet-f.md#getAppNet-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNet](arkts-connection-getappnet-f.md#getAppNet-2) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNetSync](arkts-connection-getappnetsync-f.md#getAppNetSync-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getConnectOwnerUid](arkts-connection-getconnectowneruid-f.md#getConnectOwnerUid-1) | Obtains the data network that is activated by default. You can only call this method in VPN application. |
| [getConnectOwnerUidSync](arkts-connection-getconnectowneruidsync-f.md#getConnectOwnerUidSync-1) | Obtains the data network that is activated by default. You can only call this method in VPN application. |
| [getConnectionProperties](arkts-connection-getconnectionproperties-f.md#getConnectionProperties-1) | Queries the connection properties of a network. This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionProperties](arkts-connection-getconnectionproperties-f.md#getConnectionProperties-2) | Queries the connection properties of a network. This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionPropertiesSync](arkts-connection-getconnectionpropertiessync-f.md#getConnectionPropertiesSync-1) | Queries the connection properties of a network. This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultHttpProxy](arkts-connection-getdefaulthttpproxy-f.md#getDefaultHttpProxy-1) | Obtains the default {@link HttpProxy} proxy settings. If an application level proxy is set, the application level proxy parameters are returned. If a global proxy is set, the global proxy parameters are returned. If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned. In other cases, the proxy settings of default network are returned. |
| [getDefaultHttpProxy](arkts-connection-getdefaulthttpproxy-f.md#getDefaultHttpProxy-2) | Obtains the default {@link HttpProxy} proxy settings. If an application level proxy is set, the application level proxy parameters are returned. If a global proxy is set, the global proxy parameters are returned. If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned. In other cases, the proxy settings of default network are returned. |
| [getDefaultNet](arkts-connection-getdefaultnet-f.md#getDefaultNet-1) | Obtains the data network that is activated by default. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNet](arkts-connection-getdefaultnet-f.md#getDefaultNet-2) | Obtains the data network that is activated by default. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNetSync](arkts-connection-getdefaultnetsync-f.md#getDefaultNetSync-1) | Obtains the data network that is activated by default. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDnsAscii](arkts-connection-getdnsascii-f.md#getDnsAscii-1) | Convert a string from Unicode to ASCII Compatible Encoding (ACE), as defined by the ToASCII operation of RFC 3490. |
| [getDnsUnicode](arkts-connection-getdnsunicode-f.md#getDnsUnicode-1) | Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490. |
| <!--DelRow-->[getGlobalHttpProxy](arkts-connection-getglobalhttpproxy-f-sys.md#getGlobalHttpProxy-1) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| <!--DelRow-->[getGlobalHttpProxy](arkts-connection-getglobalhttpproxy-f-sys.md#getGlobalHttpProxy-2) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| [getIpNeighTable](arkts-connection-getipneightable-f.md#getIpNeighTable-1) | Obtain the IP and MAC address correspondence table of the neighboring network. |
| [getNetCapabilities](arkts-connection-getnetcapabilities-f.md#getNetCapabilities-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilities](arkts-connection-getnetcapabilities-f.md#getNetCapabilities-2) | Obtains {@link NetCapabilities} of a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilitiesSync](arkts-connection-getnetcapabilitiessync-f.md#getNetCapabilitiesSync-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttribute](arkts-connection-getnetextattribute-f.md#getNetExtAttribute-1) | Get the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttributeSync](arkts-connection-getnetextattributesync-f.md#getNetExtAttributeSync-1) | Get the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getPacFileUrl](arkts-connection-getpacfileurl-f.md#getPacFileUrl-1) | Obtain the URL {@link pacFileUrl} of the current PAC script. |
| [getPacUrl](arkts-connection-getpacurl-f.md#getPacUrl-1) | Obtain the URL {@link pacUrl} of the current PAC script. |
| <!--DelRow-->[getProxyMode](arkts-connection-getproxymode-f-sys.md#getProxyMode-1) | Obtain the proxy mode {@link ProxyMode}. |
| [getSystemNetPortStates](arkts-connection-getsystemnetportstates-f.md#getSystemNetPortStates-1) | Obtains the port states of system network. To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission. |
| [hasDefaultNet](arkts-connection-hasdefaultnet-f.md#hasDefaultNet-1) | Checks whether the default data network is activated. |
| [hasDefaultNet](arkts-connection-hasdefaultnet-f.md#hasDefaultNet-2) | Checks whether the default data network is activated. |
| [hasDefaultNetSync](arkts-connection-hasdefaultnetsync-f.md#hasDefaultNetSync-1) | Checks whether the default data network is activated. |
| [isDefaultNetMetered](arkts-connection-isdefaultnetmetered-f.md#isDefaultNetMetered-1) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMetered](arkts-connection-isdefaultnetmetered-f.md#isDefaultNetMetered-2) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMeteredSync](arkts-connection-isdefaultnetmeteredsync-f.md#isDefaultNetMeteredSync-1) | Checks whether data traffic usage on the current network is metered. |
| [queryProbeResult](arkts-connection-queryproberesult-f.md#queryProbeResult-1) | Query a network probe result. |
| [queryTraceRoute](arkts-connection-querytraceroute-f.md#queryTraceRoute-1) | Query a network trace route. |
| [refreshGlobalHttpProxy](arkts-connection-refreshglobalhttpproxy-f.md#refreshGlobalHttpProxy-1) | Notifies the system that global proxy re-authentication is required. Upon receiving the notification, the system will reproces the global proxy's authentication status. |
| [removeCustomDnsRule](arkts-connection-removecustomdnsrule-f.md#removeCustomDnsRule-1) | Remove the custom DNS rule of the {@link host} for current application. |
| [removeCustomDnsRule](arkts-connection-removecustomdnsrule-f.md#removeCustomDnsRule-2) | Remove the custom DNS rule of the {@link host} for current application. |
| [reportNetConnected](arkts-connection-reportnetconnected-f.md#reportNetConnected-1) | Reports the network state is connected. |
| [reportNetConnected](arkts-connection-reportnetconnected-f.md#reportNetConnected-2) | Reports the network state is connected. |
| [reportNetDisconnected](arkts-connection-reportnetdisconnected-f.md#reportNetDisconnected-1) | Reports the network state is disconnected. |
| [reportNetDisconnected](arkts-connection-reportnetdisconnected-f.md#reportNetDisconnected-2) | Reports the network state is disconnected. |
| [setAppHttpProxy](arkts-connection-setapphttpproxy-f.md#setAppHttpProxy-1) | Set application level http proxy {@link HttpProxy}. |
| [setAppNet](arkts-connection-setappnet-f.md#setAppNet-1) | Binds a process to {@code NetHandle}. <p>All the sockets created from the process will be bound to the {@code NetHandle}, and the resolution of all host names will be managed by the {@code NetHandle}.</p> |
| [setAppNet](arkts-connection-setappnet-f.md#setAppNet-2) | Binds a process to {@code NetHandle}. <p>All the sockets created from the process will be bound to the {@code NetHandle}, and the resolution of all host names will be managed by the {@code NetHandle}.</p> |
| <!--DelRow-->[setGlobalHttpProxy](arkts-connection-setglobalhttpproxy-f-sys.md#setGlobalHttpProxy-1) | Set a network independent global {@link HttpProxy} proxy settings. |
| <!--DelRow-->[setGlobalHttpProxy](arkts-connection-setglobalhttpproxy-f-sys.md#setGlobalHttpProxy-2) | Set a network independent global {@link HttpProxy} proxy settings. |
| <!--DelRow-->[setInterfaceUp](arkts-connection-setinterfaceup-f-sys.md#setInterfaceUp-1) | Set a specific interface up. |
| [setNetExtAttribute](arkts-connection-setnetextattribute-f.md#setNetExtAttribute-1) | Set the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setNetExtAttributeSync](arkts-connection-setnetextattributesync-f.md#setNetExtAttributeSync-1) | Set the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setPacFileUrl](arkts-connection-setpacfileurl-f.md#setPacFileUrl-1) | Set the URL {@link pacFileUrl} of the current PAC script. Proxy information can be obtained through parsing the script address. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |
| [setPacUrl](arkts-connection-setpacurl-f.md#setPacUrl-1) | Set the URL {@link pacUrl} of the current PAC script. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |
| <!--DelRow-->[setProxyMode](arkts-connection-setproxymode-f-sys.md#setProxyMode-1) | Set the proxy mode {@link ProxyMode}. |

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectionProperties](arkts-connection-connectionproperties-i.md) | Defines the network connection properties. |
| [HttpProxy](arkts-connection-httpproxy-i.md) | Network Global Proxy Configuration Information. |
| [LinkAddress](arkts-connection-linkaddress-i.md) | Defines network link information. |
| [NetAddress](arkts-connection-netaddress-i.md) | Defines a network address. |
| [NetBlockStatusInfo](arkts-connection-netblockstatusinfo-i.md) | Get network status information. |
| [NetCapabilities](arkts-connection-netcapabilities-i.md) | Defines the network capability set. |
| [NetCapabilityInfo](arkts-connection-netcapabilityinfo-i.md) | Receive information about changes in network capabilities. |
| [NetConnection](arkts-connection-netconnection-i.md) | Represents the network connection handle. |
| [NetConnectionPropertyInfo](arkts-connection-netconnectionpropertyinfo-i.md) | Get information about network connections. |
| [NetHandle](arkts-connection-nethandle-i.md) | Defines the handle of the data network. |
| [NetIpMacInfo](arkts-connection-netipmacinfo-i.md) | The correspondence information between IP and MAC address. |
| [NetPortStatesInfo](arkts-connection-netportstatesinfo-i.md) | Defines port states of system network. |
| [NetSpecifier](arkts-connection-netspecifier-i.md) | Provides an instance that bear data network capabilities. |
| [ProbeResultInfo](arkts-connection-proberesultinfo-i.md) | Defines the probe result information. |
| [QueryOptions](arkts-connection-queryoptions-i.md) | Defines options of DNS query. |
| [RouteInfo](arkts-connection-routeinfo-i.md) | Defines network route information. |
| [Socks5Proxy](arkts-connection-socks5proxy-i.md) | Socks5 Proxy Configuration Information. |
| [TcpNetPortStatesInfo](arkts-connection-tcpnetportstatesinfo-i.md) | Defines TCP port states of system network. |
| [TraceRouteInfo](arkts-connection-tracerouteinfo-i.md) | Defines the trace route information structure. |
| [TraceRouteOptions](arkts-connection-tracerouteoptions-i.md) | Network traceroute option definition. |
| [UdpNetPortStatesInfo](arkts-connection-udpnetportstatesinfo-i.md) | Defines UDP port states of system network. |

### Types

| Name | Description |
| --- | --- |
| [HttpRequest](arkts-connection-httprequest-t.md) | Get an HTTP request task. |
| [TCPSocket](arkts-connection-tcpsocket-t.md) | Get a TCPSocket object. |
| [UDPSocket](arkts-connection-udpsocket-t.md) | Get a UDPSocket object. |

### Enums

| Name | Description |
| --- | --- |
| [ConversionProcess](arkts-connection-conversionprocess-e.md) | Defines the flag of conversion operations. |
| [FamilyType](arkts-connection-familytype-e.md) | Defines the address family type. |
| [NetBearType](arkts-connection-netbeartype-e.md) | Enumerates network types. |
| [NetCap](arkts-connection-netcap-e.md) | Defines the network capability. |
| [PacketsType](arkts-connection-packetstype-e.md) | Enumerates packets types. |
| [ProtocolType](arkts-connection-protocoltype-e.md) | Defines the protocol type. |
| <!--DelRow-->[ProxyMode](arkts-connection-proxymode-e-sys.md) | Enumerates proxy modes. |
| [Socks5DnsStrategy](arkts-connection-socks5dnsstrategy-e.md) | Socks5 DNS strategy |
| [TcpState](arkts-connection-tcpstate-e.md) | State of the TCP network port. |

