# @ohos.net.netFirewall

Provides interfaces to manage net firewall.

**Since:** 14

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## Modules to Import

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addNetFirewallRule](arkts-network-addnetfirewallrule-f.md#addnetfirewallrule-1) | Add a firewall rule. |
| [getNetFirewallPolicy](arkts-network-getnetfirewallpolicy-f.md#getnetfirewallpolicy-1) | Get firewall policy by userId. |
| [getNetFirewallRule](arkts-network-getnetfirewallrule-f.md#getnetfirewallrule-1) | Get a specified firewall rule by userId and ruleId. |
| [getNetFirewallRules](arkts-network-getnetfirewallrules-f.md#getnetfirewallrules-1) | Get firewall rules by userId, and it is necessary to specify the pagination query parameters. |
| [removeNetFirewallRule](arkts-network-removenetfirewallrule-f.md#removenetfirewallrule-1) | Delete a firewall rule by userId and ruleId. |
| [setNetFirewallPolicy](arkts-network-setnetfirewallpolicy-f.md#setnetfirewallpolicy-1) | Set firewall policy by userId. &lt;p&gt;Enables or disables the firewall function, and specifies the default actions for inbound connections and outbound connections.&lt;/p&gt; |
| [updateNetFirewallRule](arkts-network-updatenetfirewallrule-f.md#updatenetfirewallrule-1) | Update a firewall rule. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getInterceptedRecords](arkts-network-getinterceptedrecords-f-sys.md#getinterceptedrecords-1) | Get intercepted records by userId, and it is necessary to specify the pagination query parameters. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [FirewallRulePage](arkts-network-firewallrulepage-i.md) | Rule page information. |
| [NetFirewallDnsParams](arkts-network-netfirewalldnsparams-i.md) | Firewall DNS parameters. |
| [NetFirewallDomainParams](arkts-network-netfirewalldomainparams-i.md) | Firewall domain name parameters. |
| [NetFirewallIpParams](arkts-network-netfirewallipparams-i.md) | Firewall IP parameters. |
| [NetFirewallPolicy](arkts-network-netfirewallpolicy-i.md) | Firewall policy. |
| [NetFirewallPortParams](arkts-network-netfirewallportparams-i.md) | Firewall port parameters. |
| [NetFirewallRule](arkts-network-netfirewallrule-i.md) | Firewall rules. |
| [RequestParam](arkts-network-requestparam-i.md) | Pagination query input parameters. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [InterceptedRecord](arkts-network-interceptedrecord-i-sys.md) | Intercepted record. |
| [InterceptedRecordPage](arkts-network-interceptedrecordpage-i-sys.md) | Intercepted record page information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [FirewallRuleAction](arkts-network-firewallruleaction-e.md) | Firewall rule behavior enumeration. |
| [NetFirewallOrderField](arkts-network-netfirewallorderfield-e.md) | Pagination query sorting field. |
| [NetFirewallOrderType](arkts-network-netfirewallordertype-e.md) | Pagination query sorting type. |
| [NetFirewallRuleDirection](arkts-network-netfirewallruledirection-e.md) | Firewall rule direction enumeration. |
| [NetFirewallRuleType](arkts-network-netfirewallruletype-e.md) | Indicates the firewall rule type. |

