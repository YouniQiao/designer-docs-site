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
| [addCustomDnsRule](arkts-network-addcustomdnsrule-f.md#addcustomdnsrule-1) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| [addCustomDnsRule](arkts-network-addcustomdnsrule-f.md#addcustomdnsrule-2) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| [clearCustomDnsRules](arkts-network-clearcustomdnsrules-f.md#clearcustomdnsrules-1) | Clear all custom DNS rules for current application. |
| [clearCustomDnsRules](arkts-network-clearcustomdnsrules-f.md#clearcustomdnsrules-2) | Clear all custom DNS rules for current application. |
| [createNetConnection](arkts-network-createnetconnection-f.md#createnetconnection-1) | Create a network connection with optional netSpecifier and timeout. |
| [findProxyForUrl](arkts-network-findproxyforurl-f.md#findproxyforurl-1) | Find pac proxy info for the url. |
| [getAddressesByName](arkts-network-getaddressesbyname-f.md#getaddressesbyname-1) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByName](arkts-network-getaddressesbyname-f.md#getaddressesbyname-2) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByNameWithOptions](arkts-network-getaddressesbynamewithoptions-f.md#getaddressesbynamewithoptions-1) | Resolves a host name to obtain all IP addresses with specified query option. |
| [getAllNets](arkts-network-getallnets-f.md#getallnets-1) | Obtains the list of data networks that are activated.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNets](arkts-network-getallnets-f.md#getallnets-2) | Obtains the list of data networks that are activated.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNetsSync](arkts-network-getallnetssync-f.md#getallnetssync-1) | Obtains the list of data networks that are activated.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAppNet](arkts-network-getappnet-f.md#getappnet-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNet](arkts-network-getappnet-f.md#getappnet-2) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNetSync](arkts-network-getappnetsync-f.md#getappnetsync-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getConnectOwnerUid](arkts-network-getconnectowneruid-f.md#getconnectowneruid-1) | Obtains the data network that is activated by default.You can only call this method in VPN application. |
| [getConnectOwnerUidSync](arkts-network-getconnectowneruidsync-f.md#getconnectowneruidsync-1) | Obtains the data network that is activated by default.You can only call this method in VPN application. |
| [getConnectionProperties](arkts-network-getconnectionproperties-f.md#getconnectionproperties-1) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionProperties](arkts-network-getconnectionproperties-f.md#getconnectionproperties-2) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionPropertiesSync](arkts-network-getconnectionpropertiessync-f.md#getconnectionpropertiessync-1) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultHttpProxy](arkts-network-getdefaulthttpproxy-f.md#getdefaulthttpproxy-1) | Obtains the default {@link HttpProxy} proxy settings.If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned. |
| [getDefaultHttpProxy](arkts-network-getdefaulthttpproxy-f.md#getdefaulthttpproxy-2) | Obtains the default {@link HttpProxy} proxy settings.If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned. |
| [getDefaultNet](arkts-network-getdefaultnet-f.md#getdefaultnet-1) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNet](arkts-network-getdefaultnet-f.md#getdefaultnet-2) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNetSync](arkts-network-getdefaultnetsync-f.md#getdefaultnetsync-1) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDnsAscii](arkts-network-getdnsascii-f.md#getdnsascii-1) | Convert a string from Unicode to ASCII Compatible Encoding (ACE), as defined by the ToASCII operation of RFC 3490. |
| [getDnsUnicode](arkts-network-getdnsunicode-f.md#getdnsunicode-1) | Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490. |
| [getIpNeighTable](arkts-network-getipneightable-f.md#getipneightable-1) | Obtain the IP and MAC address correspondence table of the neighboring network. |
| [getNetCapabilities](arkts-network-getnetcapabilities-f.md#getnetcapabilities-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilities](arkts-network-getnetcapabilities-f.md#getnetcapabilities-2) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilitiesSync](arkts-network-getnetcapabilitiessync-f.md#getnetcapabilitiessync-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttribute](arkts-network-getnetextattribute-f.md#getnetextattribute-1) | Get the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttributeSync](arkts-network-getnetextattributesync-f.md#getnetextattributesync-1) | Get the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getPacFileUrl](arkts-network-getpacfileurl-f.md#getpacfileurl-1) | Obtain the URL {@link pacFileUrl} of the current PAC script. |
| [getPacUrl](arkts-network-getpacurl-f.md#getpacurl-1) | Obtain the URL {@link pacUrl} of the current PAC script. |
| [getSystemNetPortStates](arkts-network-getsystemnetportstates-f.md#getsystemnetportstates-1) | Obtains the port states of system network.To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission. |
| [hasDefaultNet](arkts-network-hasdefaultnet-f.md#hasdefaultnet-1) | Checks whether the default data network is activated. |
| [hasDefaultNet](arkts-network-hasdefaultnet-f.md#hasdefaultnet-2) | Checks whether the default data network is activated. |
| [hasDefaultNetSync](arkts-network-hasdefaultnetsync-f.md#hasdefaultnetsync-1) | Checks whether the default data network is activated. |
| [isDefaultNetMetered](arkts-network-isdefaultnetmetered-f.md#isdefaultnetmetered-1) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMetered](arkts-network-isdefaultnetmetered-f.md#isdefaultnetmetered-2) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMeteredSync](arkts-network-isdefaultnetmeteredsync-f.md#isdefaultnetmeteredsync-1) | Checks whether data traffic usage on the current network is metered. |
| [queryProbeResult](arkts-network-queryproberesult-f.md#queryproberesult-1) | Query a network probe result. |
| [queryTraceRoute](arkts-network-querytraceroute-f.md#querytraceroute-1) | Query a network trace route. |
| [refreshGlobalHttpProxy](arkts-network-refreshglobalhttpproxy-f.md#refreshglobalhttpproxy-1) | Notifies the system that global proxy re-authentication is required.Upon receiving the notification, the system will reproces the global proxy's authentication status. |
| [removeCustomDnsRule](arkts-network-removecustomdnsrule-f.md#removecustomdnsrule-1) | Remove the custom DNS rule of the {@link host} for current application. |
| [removeCustomDnsRule](arkts-network-removecustomdnsrule-f.md#removecustomdnsrule-2) | Remove the custom DNS rule of the {@link host} for current application. |
| [reportNetConnected](arkts-network-reportnetconnected-f.md#reportnetconnected-1) | Reports the network state is connected. |
| [reportNetConnected](arkts-network-reportnetconnected-f.md#reportnetconnected-2) | Reports the network state is connected. |
| [reportNetDisconnected](arkts-network-reportnetdisconnected-f.md#reportnetdisconnected-1) | Reports the network state is disconnected. |
| [reportNetDisconnected](arkts-network-reportnetdisconnected-f.md#reportnetdisconnected-2) | Reports the network state is disconnected. |
| [setAppHttpProxy](arkts-network-setapphttpproxy-f.md#setapphttpproxy-1) | Set application level http proxy {@link HttpProxy}. |
| [setAppNet](arkts-network-setappnet-f.md#setappnet-1) | Binds a process to {@code NetHandle}.&lt;p&gt;All the sockets created from the process will be bound to the {@code NetHandle},and the resolution of all host names will be managed by the {@code NetHandle}.&lt;/p&gt; |
| [setAppNet](arkts-network-setappnet-f.md#setappnet-2) | Binds a process to {@code NetHandle}.&lt;p&gt;All the sockets created from the process will be bound to the {@code NetHandle},and the resolution of all host names will be managed by the {@code NetHandle}.&lt;/p&gt; |
| [setNetExtAttribute](arkts-network-setnetextattribute-f.md#setnetextattribute-1) | Set the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setNetExtAttributeSync](arkts-network-setnetextattributesync-f.md#setnetextattributesync-1) | Set the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setPacFileUrl](arkts-network-setpacfileurl-f.md#setpacfileurl-1) | Set the URL {@link pacFileUrl} of the current PAC script.Proxy information can be obtained through parsing the script address.To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |
| [setPacUrl](arkts-network-setpacurl-f.md#setpacurl-1) | Set the URL {@link pacUrl} of the current PAC script.To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addVlanIp](arkts-network-addvlanip-f-sys.md#addvlanip-1) | Add ip of vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [createVlanInterface](arkts-network-createvlaninterface-f-sys.md#createvlaninterface-1) | Create vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [deleteVlanIp](arkts-network-deletevlanip-f-sys.md#deletevlanip-1) | Delete ip of vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [destroyVlanInterface](arkts-network-destroyvlaninterface-f-sys.md#destroyvlaninterface-1) | Destroy vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [disableAirplaneMode](arkts-network-disableairplanemode-f-sys.md#disableairplanemode-1) | Disables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [disableAirplaneMode](arkts-network-disableairplanemode-f-sys.md#disableairplanemode-2) | Disables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [enableAirplaneMode](arkts-network-enableairplanemode-f-sys.md#enableairplanemode-1) | Enables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [enableAirplaneMode](arkts-network-enableairplanemode-f-sys.md#enableairplanemode-2) | Enables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [factoryReset](arkts-network-factoryreset-f-sys.md#factoryreset-1) | factory reset network settingsTo invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [getGlobalHttpProxy](arkts-network-getglobalhttpproxy-f-sys.md#getglobalhttpproxy-1) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| [getGlobalHttpProxy](arkts-network-getglobalhttpproxy-f-sys.md#getglobalhttpproxy-2) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| [getProxyMode](arkts-network-getproxymode-f-sys.md#getproxymode-1) | Obtain the proxy mode {@link ProxyMode}. |
| [setGlobalHttpProxy](arkts-network-setglobalhttpproxy-f-sys.md#setglobalhttpproxy-1) | Set a network independent global {@link HttpProxy} proxy settings. |
| [setGlobalHttpProxy](arkts-network-setglobalhttpproxy-f-sys.md#setglobalhttpproxy-2) | Set a network independent global {@link HttpProxy} proxy settings. |
| [setInterfaceUp](arkts-network-setinterfaceup-f-sys.md#setinterfaceup-1) | Set a specific interface up. |
| [setProxyMode](arkts-network-setproxymode-f-sys.md#setproxymode-1) | Set the proxy mode {@link ProxyMode}. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectionProperties](arkts-network-connectionproperties-i.md) | Defines the network connection properties. |
| [HttpProxy](arkts-network-httpproxy-i.md) | Network Global Proxy Configuration Information. |
| [LinkAddress](arkts-network-linkaddress-i.md) | Defines network link information. |
| [NetAddress](arkts-network-netaddress-i.md) | Defines a network address. |
| [NetBlockStatusInfo](arkts-network-netblockstatusinfo-i.md) | Get network status information. |
| [NetCapabilities](arkts-network-netcapabilities-i.md) | Defines the network capability set. |
| [NetCapabilityInfo](arkts-network-netcapabilityinfo-i.md) | Receive information about changes in network capabilities. |
| [NetConnection](arkts-network-netconnection-i.md) | Represents the network connection handle. |
| [NetConnectionPropertyInfo](arkts-network-netconnectionpropertyinfo-i.md) | Get information about network connections. |
| [NetHandle](arkts-network-nethandle-i.md) | Defines the handle of the data network. |
| [NetIpMacInfo](arkts-network-netipmacinfo-i.md) | The correspondence information between IP and MAC address. |
| [NetPortStatesInfo](arkts-network-netportstatesinfo-i.md) | Defines port states of system network. |
| [NetSpecifier](arkts-network-netspecifier-i.md) | Provides an instance that bear data network capabilities. |
| [ProbeResultInfo](arkts-network-proberesultinfo-i.md) | Defines the probe result information. |
| [QueryOptions](arkts-network-queryoptions-i.md) | Defines options of DNS query. |
| [RouteInfo](arkts-network-routeinfo-i.md) | Defines network route information. |
| [Socks5Proxy](arkts-network-socks5proxy-i.md) | Socks5 Proxy Configuration Information. |
| [TcpNetPortStatesInfo](arkts-network-tcpnetportstatesinfo-i.md) | Defines TCP port states of system network. |
| [TraceRouteInfo](arkts-network-tracerouteinfo-i.md) | Defines the trace route information structure. |
| [TraceRouteOptions](arkts-network-tracerouteoptions-i.md) | Network traceroute option definition. |
| [UdpNetPortStatesInfo](arkts-network-udpnetportstatesinfo-i.md) | Defines UDP port states of system network. |

### Enums

| Name | Description |
| --- | --- |
| [ConversionProcess](arkts-network-conversionprocess-e.md) | Defines the flag of conversion operations. |
| [FamilyType](arkts-network-familytype-e.md) | Defines the address family type. |
| [NetBearType](arkts-network-netbeartype-e.md) | Enumerates network types. |
| [NetCap](arkts-network-netcap-e.md) | Defines the network capability. |
| [PacketsType](arkts-network-packetstype-e.md) | Enumerates packets types. |
| [ProtocolType](arkts-network-protocoltype-e.md) | Defines the protocol type. |
| [Socks5DnsStrategy](arkts-network-socks5dnsstrategy-e.md) | Socks5 DNS strategy |
| [TcpState](arkts-network-tcpstate-e.md) | State of the TCP network port. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ProxyMode](arkts-network-proxymode-e-sys.md) | Enumerates proxy modes. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [HttpRequest](arkts-network-httprequest-t.md) | Get an HTTP request task. |
| [TCPSocket](arkts-network-tcpsocket-t.md) | Get a TCPSocket object. |
| [UDPSocket](arkts-network-udpsocket-t.md) | Get a UDPSocket object. |

