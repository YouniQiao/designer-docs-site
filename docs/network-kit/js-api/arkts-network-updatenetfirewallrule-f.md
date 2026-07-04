# updateNetFirewallRule

## Modules to Import

```TypeScript
import { netFirewall } from '@ohos.net.netFirewall';
```

## updateNetFirewallRule

```TypeScript
function updateNetFirewallRule(rule: NetFirewallRule): Promise<void>
```

Update a firewall rule.

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_NET_FIREWALL

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | NetFirewallRule | Yes | Firewall rule. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [29400000](../errorcode-net-netfirewall.md#29400000-specified-user-does-not-exist) | The specified user does not exist. |
| [29400002](../errorcode-net-netfirewall.md#29400002-number-of-ip-address-rules-in-the-firewall-rule-exceeds-the-maximum) | The number of IP address rules in the firewall rule exceeds the maximum. |
| [29400003](../errorcode-net-netfirewall.md#29400003-number-of-port-rules-in-the-firewall-rule-exceeds-the-maximum) | The number of port rules in the firewall rule exceeds the maximum. |
| [29400004](../errorcode-net-netfirewall.md#29400004-number-of-domain-name-rules-in-the-firewall-rule-exceeds-the-maximum) | The number of domain rules in the firewall rule exceeds the maximum. |
| [29400005](../errorcode-net-netfirewall.md#29400005-number-of-fuzzy-domain-name-rules-exceeds-the-maximum) | The number of domain rules exceeds the maximum. |
| [29400006](../errorcode-net-netfirewall.md#29400006-specified-rule-does-not-exist) | The specified rule does not exist. |
| [29400007](../errorcode-net-netfirewall.md#29400007-dns-rule-duplication) | The dns rule is duplication. |

**Example**

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ipRuleUpd: netFirewall.NetFirewallRule = {
  id: 1,
  name: "rule1",
  description: "rule1 description update",
  direction: netFirewall.NetFirewallRuleDirection.RULE_IN,
  action:netFirewall.FirewallRuleAction.RULE_DENY,
  type: netFirewall.NetFirewallRuleType.RULE_IP,
  isEnabled: false,
  appUid: 20001,
  localIps: [
    {
      family: 1,
      type: 1,
      address: "10.10.1.1",
      mask: 32
    },{
      family: 1,
      type: 2,
      startIp: "10.20.1.1",
      endIp: "10.20.1.10"
    }],
  userId: 100
};
netFirewall.updateNetFirewallRule(ipRuleUpd).then(() => {
  console.info('update firewall rule success.');
}, (reason: BusinessError) => {
  console.error('update firewall rule failed: ', JSON.stringify(reason));
});

```

