# setNetFirewallPolicy

## Modules to Import

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## setNetFirewallPolicy

```TypeScript
function setNetFirewallPolicy(userId: number, policy: NetFirewallPolicy): Promise<void>
```

Set firewall policy by userId.
<p>Enables or disables the firewall function, and specifies the default actions for inbound connections and
outbound connections.</p>

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_NET_FIREWALL

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| policy | NetFirewallPolicy | Yes | The firewall policy to be set. |

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

**Example**

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let policy: netFirewall.NetFirewallPolicy = {
  isOpen: true,
  inAction: netFirewall.FirewallRuleAction.RULE_DENY,
  outAction: netFirewall.FirewallRuleAction.RULE_ALLOW
};
netFirewall.setNetFirewallPolicy(100, policy).then(() => {
  console.info("set firewall policy success.");
}).catch((error : BusinessError) => {
  console.error("set firewall policy failed: " + JSON.stringify(error));
});

```

