# getNetFirewallRules

## Modules to Import

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

<a id="getnetfirewallrules"></a>
## getNetFirewallRules

```TypeScript
function getNetFirewallRules(userId: number, requestParam: RequestParam): Promise<FirewallRulePage>
```

Get firewall rules by userId, and it is necessary to specify the pagination query parameters.

**Since:** 15

**Required permissions:** ohos.permission.GET_NET_FIREWALL

<!--Device-netFirewall-function getNetFirewallRules(userId: number, requestParam: RequestParam): Promise<FirewallRulePage>--><!--Device-netFirewall-function getNetFirewallRules(userId: number, requestParam: RequestParam): Promise<FirewallRulePage>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| requestParam | [RequestParam](arkts-network-netfirewall-requestparam-i.md) | Yes | Paging query input parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FirewallRulePage&gt; | Paginated firewall rule list. |

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

let ruleParam: netFirewall.RequestParam = {
  page: 1,
  pageSize: 10,
  orderField: netFirewall.NetFirewallOrderField.ORDER_BY_RULE_NAME,
  orderType: netFirewall.NetFirewallOrderType.ORDER_ASC
};
netFirewall.getNetFirewallRules(100, ruleParam).then((result: netFirewall.FirewallRulePage) => {
  console.info("result:", JSON.stringify(result));
}, (error: BusinessError) => {
  console.error("get firewall rules failed: " + JSON.stringify(error));
});

```

