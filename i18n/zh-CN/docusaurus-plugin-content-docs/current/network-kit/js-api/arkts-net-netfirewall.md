# @ohos.net.netFirewall

Provides interfaces to manage net firewall.

**起始版本：** 14

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## 导入模块

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addNetFirewallRule](arkts-netfirewall-addnetfirewallrule-f.md#addNetFirewallRule-1) | Add a firewall rule. |
| <!--DelRow-->[getInterceptedRecords](arkts-netfirewall-getinterceptedrecords-f-sys.md#getInterceptedRecords-1) | Get intercepted records by userId, and it is necessary to specify the pagination query parameters. |
| [getNetFirewallPolicy](arkts-netfirewall-getnetfirewallpolicy-f.md#getNetFirewallPolicy-1) | Get firewall policy by userId. |
| [getNetFirewallRule](arkts-netfirewall-getnetfirewallrule-f.md#getNetFirewallRule-1) | Get a specified firewall rule by userId and ruleId. |
| [getNetFirewallRules](arkts-netfirewall-getnetfirewallrules-f.md#getNetFirewallRules-1) | Get firewall rules by userId, and it is necessary to specify the pagination query parameters. |
| [removeNetFirewallRule](arkts-netfirewall-removenetfirewallrule-f.md#removeNetFirewallRule-1) | Delete a firewall rule by userId and ruleId. |
| [setNetFirewallPolicy](arkts-netfirewall-setnetfirewallpolicy-f.md#setNetFirewallPolicy-1) | Set firewall policy by userId. <p>Enables or disables the firewall function, and specifies the default actions for inbound connections and outbound connections.</p> |
| [updateNetFirewallRule](arkts-netfirewall-updatenetfirewallrule-f.md#updateNetFirewallRule-1) | Update a firewall rule. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [FirewallRulePage](arkts-netfirewall-firewallrulepage-i.md) | Rule page information. |
| <!--DelRow-->[InterceptedRecord](arkts-netfirewall-interceptedrecord-i-sys.md) | Intercepted record. |
| <!--DelRow-->[InterceptedRecordPage](arkts-netfirewall-interceptedrecordpage-i-sys.md) | Intercepted record page information. |
| [NetFirewallDnsParams](arkts-netfirewall-netfirewalldnsparams-i.md) | Firewall DNS parameters. |
| [NetFirewallDomainParams](arkts-netfirewall-netfirewalldomainparams-i.md) | Firewall domain name parameters. |
| [NetFirewallIpParams](arkts-netfirewall-netfirewallipparams-i.md) | Firewall IP parameters. |
| [NetFirewallPolicy](arkts-netfirewall-netfirewallpolicy-i.md) | Firewall policy. |
| [NetFirewallPortParams](arkts-netfirewall-netfirewallportparams-i.md) | Firewall port parameters. |
| [NetFirewallRule](arkts-netfirewall-netfirewallrule-i.md) | Firewall rules. |
| [RequestParam](arkts-netfirewall-requestparam-i.md) | Pagination query input parameters. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FirewallRuleAction](arkts-netfirewall-firewallruleaction-e.md) | Firewall rule behavior enumeration. |
| [NetFirewallOrderField](arkts-netfirewall-netfirewallorderfield-e.md) | Pagination query sorting field. |
| [NetFirewallOrderType](arkts-netfirewall-netfirewallordertype-e.md) | Pagination query sorting type. |
| [NetFirewallRuleDirection](arkts-netfirewall-netfirewallruledirection-e.md) | Firewall rule direction enumeration. |
| [NetFirewallRuleType](arkts-netfirewall-netfirewallruletype-e.md) | Indicates the firewall rule type. |

