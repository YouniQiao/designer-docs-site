# updateNetFirewallRule

## updateNetFirewallRule

```TypeScript
function updateNetFirewallRule(rule: NetFirewallRule): Promise<void>
```

Update a firewall rule.

**起始版本：** 15

**需要权限：** 

 ohos.permission.MANAGE_NET_FIREWALL

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | NetFirewallRule | 是 | Firewall rule. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Operation failed. Cannot connect to service. |
| 2100003 | System internal error. |
| 29400000 | The specified user does not exist. |
| 29400002 | The number of IP address rules in the firewall rule exceeds the maximum. |
| 29400003 | The number of port rules in the firewall rule exceeds the maximum. |
| 29400004 | The number of domain rules in the firewall rule exceeds the maximum. |
| 29400005 | The number of domain rules exceeds the maximum. |
| 29400006 | The specified rule does not exist. |
| 29400007 | The dns rule is duplication. |

**示例：**

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

