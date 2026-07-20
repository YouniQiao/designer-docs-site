# @ohos.net.connection

Provides interfaces to manage and use data networks.

**Since:** 11

<!--Device-unnamed-declare namespace connection--><!--Device-unnamed-declare namespace connection-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addCustomDnsRule](arkts-network-connection-addcustomdnsrule-f.md#addcustomdnsrule-1) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| [addCustomDnsRule](arkts-network-connection-addcustomdnsrule-f.md#addcustomdnsrule-2) | Add a custom {@link host} and corresponding {@link ip} mapping for current application. |
| [clearCustomDnsRules](arkts-network-connection-clearcustomdnsrules-f.md#clearcustomdnsrules-1) | Clear all custom DNS rules for current application. |
| [clearCustomDnsRules](arkts-network-connection-clearcustomdnsrules-f.md#clearcustomdnsrules-2) | Clear all custom DNS rules for current application. |
| [createNetConnection](arkts-network-connection-createnetconnection-f.md#createnetconnection-1) | Create a network connection with optional netSpecifier and timeout. |
| [findProxyForUrl](arkts-network-connection-findproxyforurl-f.md#findproxyforurl-1) | Find pac proxy info for the url. |
| [getAddressesByName](arkts-network-connection-getaddressesbyname-f.md#getaddressesbyname-1) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByName](arkts-network-connection-getaddressesbyname-f.md#getaddressesbyname-2) | Resolves the host name to obtain all IP addresses based on the default data network. |
| [getAddressesByNameWithOptions](arkts-network-connection-getaddressesbynamewithoptions-f.md#getaddressesbynamewithoptions-1) | Resolves a host name to obtain all IP addresses with specified query option. |
| [getAllNets](arkts-network-connection-getallnets-f.md#getallnets-1) | Obtains the list of data networks that are activated.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNets](arkts-network-connection-getallnets-f.md#getallnets-2) | Obtains the list of data networks that are activated.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAllNetsSync](arkts-network-connection-getallnetssync-f.md#getallnetssync-1) | Obtains the list of data networks that are activated.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getAppNet](arkts-network-connection-getappnet-f.md#getappnet-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNet](arkts-network-connection-getappnet-f.md#getappnet-2) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getAppNetSync](arkts-network-connection-getappnetsync-f.md#getappnetsync-1) | Obtains the {@link NetHandle} bound to a process using {@link setAppNet}. |
| [getConnectOwnerUid](arkts-network-connection-getconnectowneruid-f.md#getconnectowneruid-1) | Obtains the data network that is activated by default.You can only call this method in VPN application. |
| [getConnectOwnerUidSync](arkts-network-connection-getconnectowneruidsync-f.md#getconnectowneruidsync-1) | Obtains the data network that is activated by default.You can only call this method in VPN application. |
| [getConnectionProperties](arkts-network-connection-getconnectionproperties-f.md#getconnectionproperties-1) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionProperties](arkts-network-connection-getconnectionproperties-f.md#getconnectionproperties-2) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getConnectionPropertiesSync](arkts-network-connection-getconnectionpropertiessync-f.md#getconnectionpropertiessync-1) | Queries the connection properties of a network.This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultHttpProxy](arkts-network-connection-getdefaulthttpproxy-f.md#getdefaulthttpproxy-1) | Obtains the default {@link HttpProxy} proxy settings.If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned. |
| [getDefaultHttpProxy](arkts-network-connection-getdefaulthttpproxy-f.md#getdefaulthttpproxy-2) | Obtains the default {@link HttpProxy} proxy settings.If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned. |
| [getDefaultNet](arkts-network-connection-getdefaultnet-f.md#getdefaultnet-1) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNet](arkts-network-connection-getdefaultnet-f.md#getdefaultnet-2) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDefaultNetSync](arkts-network-connection-getdefaultnetsync-f.md#getdefaultnetsync-1) | Obtains the data network that is activated by default.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getDnsAscii](arkts-network-connection-getdnsascii-f.md#getdnsascii-1) | Convert a string from Unicode to ASCII Compatible Encoding (ACE), as defined by the ToASCII operation of RFC 3490. |
| [getDnsUnicode](arkts-network-connection-getdnsunicode-f.md#getdnsunicode-1) | Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490. |
| [getIpNeighTable](arkts-network-connection-getipneightable-f.md#getipneightable-1) | Obtain the IP and MAC address correspondence table of the neighboring network. |
| [getNetCapabilities](arkts-network-connection-getnetcapabilities-f.md#getnetcapabilities-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilities](arkts-network-connection-getnetcapabilities-f.md#getnetcapabilities-2) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetCapabilitiesSync](arkts-network-connection-getnetcapabilitiessync-f.md#getnetcapabilitiessync-1) | Obtains {@link NetCapabilities} of a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttribute](arkts-network-connection-getnetextattribute-f.md#getnetextattribute-1) | Get the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getNetExtAttributeSync](arkts-network-connection-getnetextattributesync-f.md#getnetextattributesync-1) | Get the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission. |
| [getPacFileUrl](arkts-network-connection-getpacfileurl-f.md#getpacfileurl-1) | Obtain the URL {@link pacFileUrl} of the current PAC script. |
| [getPacUrl](arkts-network-connection-getpacurl-f.md#getpacurl-1) | Obtain the URL {@link pacUrl} of the current PAC script. |
| [getSystemNetPortStates](arkts-network-connection-getsystemnetportstates-f.md#getsystemnetportstates-1) | Obtains the port states of system network.To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission. |
| [hasDefaultNet](arkts-network-connection-hasdefaultnet-f.md#hasdefaultnet-1) | Checks whether the default data network is activated. |
| [hasDefaultNet](arkts-network-connection-hasdefaultnet-f.md#hasdefaultnet-2) | Checks whether the default data network is activated. |
| [hasDefaultNetSync](arkts-network-connection-hasdefaultnetsync-f.md#hasdefaultnetsync-1) | Checks whether the default data network is activated. |
| [isDefaultNetMetered](arkts-network-connection-isdefaultnetmetered-f.md#isdefaultnetmetered-1) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMetered](arkts-network-connection-isdefaultnetmetered-f.md#isdefaultnetmetered-2) | Checks whether data traffic usage on the current network is metered. |
| [isDefaultNetMeteredSync](arkts-network-connection-isdefaultnetmeteredsync-f.md#isdefaultnetmeteredsync-1) | Checks whether data traffic usage on the current network is metered. |
| [queryProbeResult](arkts-network-connection-queryproberesult-f.md#queryproberesult-1) | Query a network probe result. |
| [queryTraceRoute](arkts-network-connection-querytraceroute-f.md#querytraceroute-1) | Query a network trace route. |
| [refreshGlobalHttpProxy](arkts-network-connection-refreshglobalhttpproxy-f.md#refreshglobalhttpproxy-1) | Notifies the system that global proxy re-authentication is required.Upon receiving the notification, the system will reproces the global proxy's authentication status. |
| [removeCustomDnsRule](arkts-network-connection-removecustomdnsrule-f.md#removecustomdnsrule-1) | Remove the custom DNS rule of the {@link host} for current application. |
| [removeCustomDnsRule](arkts-network-connection-removecustomdnsrule-f.md#removecustomdnsrule-2) | Remove the custom DNS rule of the {@link host} for current application. |
| [reportNetConnected](arkts-network-connection-reportnetconnected-f.md#reportnetconnected-1) | Reports the network state is connected. |
| [reportNetConnected](arkts-network-connection-reportnetconnected-f.md#reportnetconnected-2) | Reports the network state is connected. |
| [reportNetDisconnected](arkts-network-connection-reportnetdisconnected-f.md#reportnetdisconnected-1) | Reports the network state is disconnected. |
| [reportNetDisconnected](arkts-network-connection-reportnetdisconnected-f.md#reportnetdisconnected-2) | Reports the network state is disconnected. |
| [setAppHttpProxy](arkts-network-connection-setapphttpproxy-f.md#setapphttpproxy-1) | Set application level http proxy {@link HttpProxy}. |
| [setAppNet](arkts-network-connection-setappnet-f.md#setappnet-1) | Binds a process to {@code NetHandle}.&lt;p&gt;All the sockets created from the process will be bound to the {@code NetHandle},and the resolution of all host names will be managed by the {@code NetHandle}.&lt;/p&gt; |
| [setAppNet](arkts-network-connection-setappnet-f.md#setappnet-2) | Binds a process to {@code NetHandle}.&lt;p&gt;All the sockets created from the process will be bound to the {@code NetHandle},and the resolution of all host names will be managed by the {@code NetHandle}.&lt;/p&gt; |
| [setNetExtAttribute](arkts-network-connection-setnetextattribute-f.md#setnetextattribute-1) | Set the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setNetExtAttributeSync](arkts-network-connection-setnetextattributesync-f.md#setnetextattributesync-1) | Set the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission. |
| [setPacFileUrl](arkts-network-connection-setpacfileurl-f.md#setpacfileurl-1) | Set the URL {@link pacFileUrl} of the current PAC script.Proxy information can be obtained through parsing the script address.To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |
| [setPacUrl](arkts-network-connection-setpacurl-f.md#setpacurl-1) | Set the URL {@link pacUrl} of the current PAC script.To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addVlanIp](arkts-network-connection-addvlanip-f-sys.md#addvlanip-1) | Add ip of vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [createVlanInterface](arkts-network-connection-createvlaninterface-f-sys.md#createvlaninterface-1) | Create vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [deleteVlanIp](arkts-network-connection-deletevlanip-f-sys.md#deletevlanip-1) | Delete ip of vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [destroyVlanInterface](arkts-network-connection-destroyvlaninterface-f-sys.md#destroyvlaninterface-1) | Destroy vlan interface by vlanId.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [disableAirplaneMode](arkts-network-connection-disableairplanemode-f-sys.md#disableairplanemode-1) | Disables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [disableAirplaneMode](arkts-network-connection-disableairplanemode-f-sys.md#disableairplanemode-2) | Disables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [enableAirplaneMode](arkts-network-connection-enableairplanemode-f-sys.md#enableairplanemode-1) | Enables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [enableAirplaneMode](arkts-network-connection-enableairplanemode-f-sys.md#enableairplanemode-2) | Enables the airplane mode for a device.To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [factoryReset](arkts-network-connection-factoryreset-f-sys.md#factoryreset-1) | factory reset network settingsTo invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission. |
| [getGlobalHttpProxy](arkts-network-connection-getglobalhttpproxy-f-sys.md#getglobalhttpproxy-1) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| [getGlobalHttpProxy](arkts-network-connection-getglobalhttpproxy-f-sys.md#getglobalhttpproxy-2) | Obtains the network independent global {@link HttpProxy} proxy settings. |
| [getProxyMode](arkts-network-connection-getproxymode-f-sys.md#getproxymode-1) | Obtain the proxy mode {@link ProxyMode}. |
| [setGlobalHttpProxy](arkts-network-connection-setglobalhttpproxy-f-sys.md#setglobalhttpproxy-1) | Set a network independent global {@link HttpProxy} proxy settings. |
| [setGlobalHttpProxy](arkts-network-connection-setglobalhttpproxy-f-sys.md#setglobalhttpproxy-2) | Set a network independent global {@link HttpProxy} proxy settings. |
| [setInterfaceUp](arkts-network-connection-setinterfaceup-f-sys.md#setinterfaceup-1) | Set a specific interface up. |
| [setProxyMode](arkts-network-connection-setproxymode-f-sys.md#setproxymode-1) | Set the proxy mode {@link ProxyMode}. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectionProperties](arkts-network-connection-connectionproperties-i.md) | Defines the network connection properties. |
| [HttpProxy](arkts-network-connection-httpproxy-i.md) | Network Global Proxy Configuration Information. |
| [LinkAddress](arkts-network-connection-linkaddress-i.md) | Defines network link information. |
| [NetAddress](arkts-network-connection-netaddress-i.md) | Defines a network address. |
| [NetBlockStatusInfo](arkts-network-connection-netblockstatusinfo-i.md) | Get network status information. |
| [NetCapabilities](arkts-network-connection-netcapabilities-i.md) | Defines the network capability set. |
| [NetCapabilityInfo](arkts-network-connection-netcapabilityinfo-i.md) | Receive information about changes in network capabilities. |
| [NetConnection](arkts-network-connection-netconnection-i.md) | Represents the network connection handle. |
| [NetConnectionPropertyInfo](arkts-network-connection-netconnectionpropertyinfo-i.md) | Get information about network connections. |
| [NetHandle](arkts-network-connection-nethandle-i.md) | Defines the handle of the data network. |
| [NetIpMacInfo](arkts-network-connection-netipmacinfo-i.md) | The correspondence information between IP and MAC address. |
| [NetPortStatesInfo](arkts-network-connection-netportstatesinfo-i.md) | Defines port states of system network. |
| [NetSpecifier](arkts-network-connection-netspecifier-i.md) | Provides an instance that bear data network capabilities. |
| [ProbeResultInfo](arkts-network-connection-proberesultinfo-i.md) | Defines the probe result information. |
| [QueryOptions](arkts-network-connection-queryoptions-i.md) | Defines options of DNS query. |
| [RouteInfo](arkts-network-connection-routeinfo-i.md) | Defines network route information. |
| [Socks5Proxy](arkts-network-connection-socks5proxy-i.md) | Socks5 Proxy Configuration Information. |
| [TcpNetPortStatesInfo](arkts-network-connection-tcpnetportstatesinfo-i.md) | Defines TCP port states of system network. |
| [TraceRouteInfo](arkts-network-connection-tracerouteinfo-i.md) | Defines the trace route information structure. |
| [TraceRouteOptions](arkts-network-connection-tracerouteoptions-i.md) | Network traceroute option definition. |
| [UdpNetPortStatesInfo](arkts-network-connection-udpnetportstatesinfo-i.md) | Defines UDP port states of system network. |

### Enums

| Name | Description |
| --- | --- |
| [ConversionProcess](arkts-network-connection-conversionprocess-e.md) | Defines the flag of conversion operations. |
| [FamilyType](arkts-network-connection-familytype-e.md) | Defines the address family type. |
| [NetBearType](arkts-network-connection-netbeartype-e.md) | Enumerates network types. |
| [NetCap](arkts-network-connection-netcap-e.md) | Defines the network capability. |
| [PacketsType](arkts-network-connection-packetstype-e.md) | Enumerates packets types. |
| [ProtocolType](arkts-network-connection-protocoltype-e.md) | Defines the protocol type. |
| [Socks5DnsStrategy](arkts-network-connection-socks5dnsstrategy-e.md) | Socks5 DNS strategy |
| [TcpState](arkts-network-connection-tcpstate-e.md) | State of the TCP network port. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ProxyMode](arkts-network-connection-proxymode-e-sys.md) | Enumerates proxy modes. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [HttpRequest](arkts-network-connection-httprequest-t.md) | Get an HTTP request task. |
| [TCPSocket](arkts-network-connection-tcpsocket-t.md) | Get a TCPSocket object. |
| [UDPSocket](arkts-network-connection-udpsocket-t.md) | Get a UDPSocket object. |

