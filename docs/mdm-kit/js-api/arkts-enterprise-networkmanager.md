# @ohos.enterprise.networkManager

The **networkManager** module provides APIs for network management of enterprise devices, including obtaining the device IP address and MAC address.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace networkManager--><!--Device-unnamed-declare namespace networkManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { networkManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addApn](arkts-mdm-networkmanager-addapn-f.md#addapn-1) | Adds an access point name (APN). |
| [addDomainFilterRule](arkts-mdm-networkmanager-adddomainfilterrule-f.md#adddomainfilterrule-1) | Adds domain name filtering rules for the device.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23.After a rule with [Action](arkts-mdm-networkmanager-action-e.md) set to **ALLOW** is added, a rule with **Action** set to **DENY** is added by default to discard or intercept all packets for domain name resolution that do not meet the **ALLOW** rule.After the device is restarted, the domain name filtering rules are cleared. |
| [addFirewallRule](arkts-mdm-networkmanager-addfirewallrule-f.md#addfirewallrule-1) | Adds firewall rules for the device.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23.After a rule with [Action](arkts-mdm-networkmanager-action-e.md) set to **ALLOW** is added, a rule with **Action** set to **DENY** is added by default to discard or intercept all network data packets that do not meet the **ALLOW** rule.After the device is restarted, the firewall rules are cleared. |
| [deleteApn](arkts-mdm-networkmanager-deleteapn-f.md#deleteapn-1) | Deletes the APN. |
| [getAllNetworkInterfacesSync](arkts-mdm-networkmanager-getallnetworkinterfacessync-f.md#getallnetworkinterfacessync-1) | Obtains all activated wired network interfaces. |
| [getDomainFilterRules](arkts-mdm-networkmanager-getdomainfilterrules-f.md#getdomainfilterrules-1) | Obtains domain name filtering rules.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23. |
| [getFirewallRules](arkts-mdm-networkmanager-getfirewallrules-f.md#getfirewallrules-1) | Queries firewall rules of a device.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23. |
| [getGlobalProxyForAccount](arkts-mdm-networkmanager-getglobalproxyforaccount-f.md#getglobalproxyforaccount-1) | Obtains the network proxy for a specified user. |
| [getGlobalProxySync](arkts-mdm-networkmanager-getglobalproxysync-f.md#getglobalproxysync-1) | Obtains the global network proxy. |
| [getIpAddressSync](arkts-mdm-networkmanager-getipaddresssync-f.md#getipaddresssync-1) | Obtains the device IP address based on the network interface. |
| [getMacSync](arkts-mdm-networkmanager-getmacsync-f.md#getmacsync-1) | Obtains the MAC address of a device based on the network interface. |
| [isNetworkInterfaceDisabledSync](arkts-mdm-networkmanager-isnetworkinterfacedisabledsync-f.md#isnetworkinterfacedisabledsync-1) | Queries whether a specified network interface is disabled. |
| [queryApn](arkts-mdm-networkmanager-queryapn-f.md#queryapn-1) | Queries the APN ID. |
| [queryApn](arkts-mdm-networkmanager-queryapn-f.md#queryapn-2) | Queries the APN parameter information. |
| [removeDomainFilterRule](arkts-mdm-networkmanager-removedomainfilterrule-f.md#removedomainfilterrule-1) | Removes the domain name filtering rules.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23.If there is no rule with [Action](arkts-mdm-networkmanager-action-e.md) being **ALLOW** after the rule is removed, the **DENY** rules that are added by default with [addDomainFilterRule](arkts-mdm-networkmanager-adddomainfilterrule-f.md#adddomainfilterrule-1) will be removed. |
| [removeFirewallRule](arkts-mdm-networkmanager-removefirewallrule-f.md#removefirewallrule-1) | Removes a firewall rule.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23.If there is no rule with [Action](arkts-mdm-networkmanager-action-e.md) being **ALLOW** after the rule is removed, the **DENY** rules that are added by default with [addFirewallRule](arkts-mdm-networkmanager-addfirewallrule-f.md#addfirewallrule-1) will be removed. |
| [setEthernetConfig](arkts-mdm-networkmanager-setethernetconfig-f.md#setethernetconfig-1) | Sets the IP address of a specific Ethernet interface. |
| [setGlobalProxyForAccount](arkts-mdm-networkmanager-setglobalproxyforaccount-f.md#setglobalproxyforaccount-1) | Sets the network proxy for a specified user. |
| [setGlobalProxySync](arkts-mdm-networkmanager-setglobalproxysync-f.md#setglobalproxysync-1) | Sets the global network proxy. |
| [setNetworkInterfaceDisabledSync](arkts-mdm-networkmanager-setnetworkinterfacedisabledsync-f.md#setnetworkinterfacedisabledsync-1) | Disables the device from using the specified network interface. |
| [setPreferredApn](arkts-mdm-networkmanager-setpreferredapn-f.md#setpreferredapn-1) | Sets the preferred APN. |
| [turnOffMobileData](arkts-mdm-networkmanager-turnoffmobiledata-f.md#turnoffmobiledata-1) | Turns off mobile data. |
| [turnOnMobileData](arkts-mdm-networkmanager-turnonmobiledata-f.md#turnonmobiledata-1) | Turns on mobile data. |
| [updateApn](arkts-mdm-networkmanager-updateapn-f.md#updateapn-1) | Updates the APN. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addIptablesFilterRule](arkts-mdm-networkmanager-addiptablesfilterrule-f-sys.md#addiptablesfilterrule-1) | Adds a network packet filtering rule for the device. Only IPv4 is supported. This API uses an asynchronous callback to return the result. |
| [addIptablesFilterRule](arkts-mdm-networkmanager-addiptablesfilterrule-f-sys.md#addiptablesfilterrule-2) | Adds a network packet filtering rule for the device. Only IPv4 is supported. This API uses a promise to return the result. |
| [getAllNetworkInterfaces](arkts-mdm-networkmanager-getallnetworkinterfaces-f-sys.md#getallnetworkinterfaces-1) | Obtains all activated wired network interfaces. This API uses an asynchronous callback to return the result. |
| [getAllNetworkInterfaces](arkts-mdm-networkmanager-getallnetworkinterfaces-f-sys.md#getallnetworkinterfaces-2) | Obtains all activated wired network interfaces. This API uses a promise to return the result. |
| [getGlobalProxy](arkts-mdm-networkmanager-getglobalproxy-f-sys.md#getglobalproxy-1) | Obtains the global network proxy. This API uses an asynchronous callback to return the result. |
| [getGlobalProxy](arkts-mdm-networkmanager-getglobalproxy-f-sys.md#getglobalproxy-2) | Obtains the global network proxy. This API uses a promise to return the result. |
| [getIpAddress](arkts-mdm-networkmanager-getipaddress-f-sys.md#getipaddress-1) | Obtains the device IP address based on the network interface. This API uses an asynchronous callback to return the result. |
| [getIpAddress](arkts-mdm-networkmanager-getipaddress-f-sys.md#getipaddress-2) | Obtains the device IP address based on the network interface. This API uses a promise to return the result. |
| [getMac](arkts-mdm-networkmanager-getmac-f-sys.md#getmac-1) | Obtains the MAC address of a device based on the network interface. This API uses an asynchronous callback to return the result. |
| [getMac](arkts-mdm-networkmanager-getmac-f-sys.md#getmac-2) | Obtains the MAC address of a device based on the network interface. This API uses a promise to return the result. |
| [isNetworkInterfaceDisabled](arkts-mdm-networkmanager-isnetworkinterfacedisabled-f-sys.md#isnetworkinterfacedisabled-1) | Queries whether a specified network interface is disabled. This API uses an asynchronous callback to return the result. |
| [isNetworkInterfaceDisabled](arkts-mdm-networkmanager-isnetworkinterfacedisabled-f-sys.md#isnetworkinterfacedisabled-2) | Queries whether a specified network interface is disabled. This API uses a promise to return the result. |
| [listIptablesFilterRules](arkts-mdm-networkmanager-listiptablesfilterrules-f-sys.md#listiptablesfilterrules-1) | Obtains the network packet filtering rule. Only IPv4 is supported. This API uses an asynchronous callback to return the result. |
| [listIptablesFilterRules](arkts-mdm-networkmanager-listiptablesfilterrules-f-sys.md#listiptablesfilterrules-2) | Obtains the network packet filtering rule. Only IPv4 is supported. This API uses a promise to return the result. |
| [removeIptablesFilterRule](arkts-mdm-networkmanager-removeiptablesfilterrule-f-sys.md#removeiptablesfilterrule-1) | Removes the network packet filtering rule. Only IPv4 is supported. This API uses an asynchronous callback to return the result. |
| [removeIptablesFilterRule](arkts-mdm-networkmanager-removeiptablesfilterrule-f-sys.md#removeiptablesfilterrule-2) | Removes the network packet filtering rule. Only IPv4 is supported. This API uses a promise to return the result. |
| [setGlobalProxy](arkts-mdm-networkmanager-setglobalproxy-f-sys.md#setglobalproxy-1) | Sets the global network proxy. This API uses an asynchronous callback to return the result. |
| [setGlobalProxy](arkts-mdm-networkmanager-setglobalproxy-f-sys.md#setglobalproxy-2) | Sets the global network proxy. This API uses a promise to return the result. |
| [setNetworkInterfaceDisabled](arkts-mdm-networkmanager-setnetworkinterfacedisabled-f-sys.md#setnetworkinterfacedisabled-1) | Disables a network interface. This API uses an asynchronous callback to return the result. |
| [setNetworkInterfaceDisabled](arkts-mdm-networkmanager-setnetworkinterfacedisabled-f-sys.md#setnetworkinterfacedisabled-2) | Disables a network interface. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DomainFilterRule](arkts-mdm-networkmanager-domainfilterrule-i.md) | Represents a domain name filtering rule.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23. |
| [FirewallRule](arkts-mdm-networkmanager-firewallrule-i.md) | Represents a firewall rule.In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.[LogType](arkts-mdm-networkmanager-logtype-e.md) is supported since API version 23. |
| [InterfaceConfig](arkts-mdm-networkmanager-interfaceconfig-i.md) | Enumerates Ethernet network interface configurations. Only IPv4 is supported. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AddFilterRule](arkts-mdm-networkmanager-addfilterrule-i-sys.md) | Defines the network packet filtering rule to add. |
| [RemoveFilterRule](arkts-mdm-networkmanager-removefilterrule-i-sys.md) | Defines the network packet filtering rule to remove. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Action](arkts-mdm-networkmanager-action-e.md) | Enumerates the actions that can be taken for data packets. |
| [Direction](arkts-mdm-networkmanager-direction-e.md) | Enumerates the direction chains to which the rule applies. |
| [IpSetMode](arkts-mdm-networkmanager-ipsetmode-e.md) | Enumerates Ethernet connection configuration modes. |
| [LogType](arkts-mdm-networkmanager-logtype-e.md) | Enumerates the log types. |
| [Protocol](arkts-mdm-networkmanager-protocol-e.md) | Enumerates network protocols. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AddMethod](arkts-mdm-networkmanager-addmethod-e-sys.md) | Enumerates the methods used to add the network packets. |
<!--DelEnd-->

