# @ohos.enterprise.networkManager

本模块提供设备网络管理能力，包括查询设备IP地址、MAC地址信息等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

**起始版本：** 10

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { networkManager } from '@kit.MDMKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addApn](arkts-networkmanager-addapn-f.md#addApn-1) | 添加APN（Access Point Name，接入点名称）。 |
| [addDomainFilterRule](arkts-networkmanager-adddomainfilterrule-f.md#addDomainFilterRule-1) | 为设备添加域名过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 添加了[Action]{@link networkManager.Action}为ALLOW规则后，将会默认添加DENY规则，不在ALLOW规则之内的域名解析数据包将会被丢弃或拦截。 设备重启，将会清空域名过滤规则。 > **说明：** > > 为避免DNS缓存导致拦截规则失效，建议系统启动后立即配置域名过滤规则。若已因DNS缓存导致拦截失效，重启系统可清除缓存，恢复拦截功能。 |
| [addFirewallRule](arkts-networkmanager-addfirewallrule-f.md#addFirewallRule-1) | 为设备添加防火墙过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 添加了[Action]{@link networkManager.Action}为ALLOW规则后，将会默认添加DENY规则，不在ALLOW规则之内的网络数据包将会被丢弃或拦截。 设备重启，将会清空防火墙过滤规则。 |
| <!--DelRow-->[addIptablesFilterRule](arkts-networkmanager-addiptablesfilterrule-f-sys.md#addIptablesFilterRule-1) | 为设备添加网络包过滤规则，仅支持IPv4。使用callback异步回调。 |
| <!--DelRow-->[addIptablesFilterRule](arkts-networkmanager-addiptablesfilterrule-f-sys.md#addIptablesFilterRule-2) | 为设备添加网络包过滤规则，仅支持IPv4。使用Promise异步回调。 |
| [deleteApn](arkts-networkmanager-deleteapn-f.md#deleteApn-1) | 删除APN。 |
| <!--DelRow-->[getAllNetworkInterfaces](arkts-networkmanager-getallnetworkinterfaces-f-sys.md#getAllNetworkInterfaces-1) | 获取所有激活的有线网络接口。使用callback异步回调。 |
| <!--DelRow-->[getAllNetworkInterfaces](arkts-networkmanager-getallnetworkinterfaces-f-sys.md#getAllNetworkInterfaces-2) | 获取所有激活的有线网络接口。使用Promise异步回调。 |
| [getAllNetworkInterfacesSync](arkts-networkmanager-getallnetworkinterfacessync-f.md#getAllNetworkInterfacesSync-1) | 获取所有激活的有线网络接口。 |
| [getDomainFilterRules](arkts-networkmanager-getdomainfilterrules-f.md#getDomainFilterRules-1) | 查询设备域名过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 |
| [getFirewallRules](arkts-networkmanager-getfirewallrules-f.md#getFirewallRules-1) | 查询设备防火墙过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 |
| <!--DelRow-->[getGlobalProxy](arkts-networkmanager-getglobalproxy-f-sys.md#getGlobalProxy-1) | 获取网络全局代理，使用callback异步回调。 |
| <!--DelRow-->[getGlobalProxy](arkts-networkmanager-getglobalproxy-f-sys.md#getGlobalProxy-2) | 获取网络全局代理，使用Promise异步回调。 |
| [getGlobalProxyForAccount](arkts-networkmanager-getglobalproxyforaccount-f.md#getGlobalProxyForAccount-1) | 获取指定用户下的网络代理。 |
| [getGlobalProxySync](arkts-networkmanager-getglobalproxysync-f.md#getGlobalProxySync-1) | 获取网络全局代理。 |
| <!--DelRow-->[getIpAddress](arkts-networkmanager-getipaddress-f-sys.md#getIpAddress-1) | 根据网络接口获取设备IP地址。使用callback异步回调。 |
| <!--DelRow-->[getIpAddress](arkts-networkmanager-getipaddress-f-sys.md#getIpAddress-2) | 根据网络接口获取设备IP地址。使用Promise异步回调。 |
| [getIpAddressSync](arkts-networkmanager-getipaddresssync-f.md#getIpAddressSync-1) | 根据网络接口获取设备IP地址。 |
| <!--DelRow-->[getMac](arkts-networkmanager-getmac-f-sys.md#getMac-1) | 根据网络接口获取设备MAC地址。使用callback异步回调。 |
| <!--DelRow-->[getMac](arkts-networkmanager-getmac-f-sys.md#getMac-2) | 根据网络接口获取设备MAC地址。使用Promise异步回调。 |
| [getMacSync](arkts-networkmanager-getmacsync-f.md#getMacSync-1) | 根据网络接口获取设备MAC地址。 |
| <!--DelRow-->[isNetworkInterfaceDisabled](arkts-networkmanager-isnetworkinterfacedisabled-f-sys.md#isNetworkInterfaceDisabled-1) | 查询指定网络接口是否被禁用。使用callback异步回调。 |
| <!--DelRow-->[isNetworkInterfaceDisabled](arkts-networkmanager-isnetworkinterfacedisabled-f-sys.md#isNetworkInterfaceDisabled-2) | 查询指定网络接口是否被禁用。使用Promise异步回调。 |
| [isNetworkInterfaceDisabledSync](arkts-networkmanager-isnetworkinterfacedisabledsync-f.md#isNetworkInterfaceDisabledSync-1) | 查询指定网络接口是否被禁用。 |
| <!--DelRow-->[listIptablesFilterRules](arkts-networkmanager-listiptablesfilterrules-f-sys.md#listIptablesFilterRules-1) | 获取网络包过滤规则，仅支持IPv4。使用callback异步回调。 |
| <!--DelRow-->[listIptablesFilterRules](arkts-networkmanager-listiptablesfilterrules-f-sys.md#listIptablesFilterRules-2) | 获取网络包过滤规则，仅支持IPv4。使用Promise异步回调。 |
| [queryApn](arkts-networkmanager-queryapn-f.md#queryApn-1) | 查询符合特定APN信息的APN ID。 |
| [queryApn](arkts-networkmanager-queryapn-f.md#queryApn-2) | 查询特定APN的APN参数信息。 |
| [removeDomainFilterRule](arkts-networkmanager-removedomainfilterrule-f.md#removeDomainFilterRule-1) | 移除设备域名过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 移除规则后如果不存在[Action]{@link networkManager.Action}为ALLOW规则后，会将 [addDomainFilterRule]{@link networkManager.addDomainFilterRule}添加的默认DENY规则清空。 |
| [removeFirewallRule](arkts-networkmanager-removefirewallrule-f.md#removeFirewallRule-1) | 移除设备防火墙过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 移除规则后如果不存在[Action]{@link networkManager.Action}为ALLOW规则后，会将[addFirewallRule]{@link networkManager.addFirewallRule}添 加的默认DENY规则清空。 |
| <!--DelRow-->[removeIptablesFilterRule](arkts-networkmanager-removeiptablesfilterrule-f-sys.md#removeIptablesFilterRule-1) | 移除网络包过滤规则，仅支持IPv4。使用callback异步回调。 |
| <!--DelRow-->[removeIptablesFilterRule](arkts-networkmanager-removeiptablesfilterrule-f-sys.md#removeIptablesFilterRule-2) | 移除网络包过滤规则，仅支持IPv4。使用Promise异步回调。 |
| [setEthernetConfig](arkts-networkmanager-setethernetconfig-f.md#setEthernetConfig-1) | 设置特定以太网网络接口的IP地址。 |
| <!--DelRow-->[setGlobalProxy](arkts-networkmanager-setglobalproxy-f-sys.md#setGlobalProxy-1) | 设置网络全局代理，使用callback异步回调。 |
| <!--DelRow-->[setGlobalProxy](arkts-networkmanager-setglobalproxy-f-sys.md#setGlobalProxy-2) | 设置网络全局代理，使用Promise异步回调。 |
| [setGlobalProxyForAccount](arkts-networkmanager-setglobalproxyforaccount-f.md#setGlobalProxyForAccount-1) | 设置指定用户下的网络代理。 |
| [setGlobalProxySync](arkts-networkmanager-setglobalproxysync-f.md#setGlobalProxySync-1) | 设置网络全局代理。 |
| <!--DelRow-->[setNetworkInterfaceDisabled](arkts-networkmanager-setnetworkinterfacedisabled-f-sys.md#setNetworkInterfaceDisabled-1) | 禁止设备使用指定网络。使用callback异步回调。 |
| <!--DelRow-->[setNetworkInterfaceDisabled](arkts-networkmanager-setnetworkinterfacedisabled-f-sys.md#setNetworkInterfaceDisabled-2) | 禁止设备使用指定网络。使用Promise异步回调。 |
| [setNetworkInterfaceDisabledSync](arkts-networkmanager-setnetworkinterfacedisabledsync-f.md#setNetworkInterfaceDisabledSync-1) | 禁止设备使用指定网络接口。 |
| [setPreferredApn](arkts-networkmanager-setpreferredapn-f.md#setPreferredApn-1) | 设置优选APN。 |
| [turnOffMobileData](arkts-networkmanager-turnoffmobiledata-f.md#turnOffMobileData-1) | 关闭移动数据网络。 |
| [turnOnMobileData](arkts-networkmanager-turnonmobiledata-f.md#turnOnMobileData-1) | 开启移动数据网络。 |
| [updateApn](arkts-networkmanager-updateapn-f.md#updateApn-1) | 更新APN。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AddFilterRule](arkts-networkmanager-addfilterrule-i-sys.md) | 添加网络包过滤规则。 |
| [DomainFilterRule](arkts-networkmanager-domainfilterrule-i.md) | 域名过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 |
| [FirewallRule](arkts-networkmanager-firewallrule-i.md) | 防火墙过滤规则。 API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。 从API version 23开始，支持[LogType]{@link networkManager.LogType}。 |
| [InterfaceConfig](arkts-networkmanager-interfaceconfig-i.md) | 以太网的网络接口配置。仅支持IPv4。 |
| <!--DelRow-->[RemoveFilterRule](arkts-networkmanager-removefilterrule-i-sys.md) | 移除网络包过滤规则。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [Action](arkts-networkmanager-action-e.md) | 数据包的行为。 |
| <!--DelRow-->[AddMethod](arkts-networkmanager-addmethod-e-sys.md) | 添加网络包方法。 |
| [Direction](arkts-networkmanager-direction-e.md) | 规则链。 |
| [IpSetMode](arkts-networkmanager-ipsetmode-e.md) | 以太网连接模式。 |
| [LogType](arkts-networkmanager-logtype-e.md) | 日志类型。 |
| [Protocol](arkts-networkmanager-protocol-e.md) | 网络协议。 |

