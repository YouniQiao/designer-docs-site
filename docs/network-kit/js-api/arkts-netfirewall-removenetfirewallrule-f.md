# removeNetFirewallRule

## removeNetFirewallRule

```TypeScript
function removeNetFirewallRule(userId: number, ruleId: number): Promise<void>
```

Delete a firewall rule by userId and ruleId.

**Since:** 15

**Required permissions:** 

 ohos.permission.MANAGE_NET_FIREWALL

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| ruleId | number | Yes | Rule ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Operation failed. Cannot connect to service. |
| 2100003 | System internal error. |
| 29400000 | The specified user does not exist. |
| 29400006 | The specified rule does not exist. |

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

