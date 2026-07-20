# removeNetFirewallRule

## Modules to Import

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## removeNetFirewallRule

```TypeScript
function removeNetFirewallRule(userId: number, ruleId: number): Promise<void>
```

Delete a firewall rule by userId and ruleId.

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_NET_FIREWALL

<!--Device-netFirewall-function removeNetFirewallRule(userId: number, ruleId: number): Promise<void>--><!--Device-netFirewall-function removeNetFirewallRule(userId: number, ruleId: number): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| ruleId | number | Yes | Rule ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [29400000](../errorcode-net-netfirewall.md#29400000-specified-user-does-not-exist) | The specified user does not exist. |
| [29400006](../errorcode-net-netfirewall.md#29400006-specified-rule-does-not-exist) | The specified rule does not exist. |

**Example**

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

netFirewall.removeNetFirewallRule(100, 1).then(() => {
  console.info("delete firewall rule success.");
}).catch((error : BusinessError) => {
  console.error("delete firewall rule failed: " + JSON.stringify(error));
});

```

