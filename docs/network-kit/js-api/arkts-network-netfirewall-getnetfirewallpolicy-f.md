# getNetFirewallPolicy

## Modules to Import

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

<a id="getnetfirewallpolicy"></a>
## getNetFirewallPolicy

```TypeScript
function getNetFirewallPolicy(userId: number): Promise<NetFirewallPolicy>
```

Get firewall policy by userId.

**Since:** 15

**Required permissions:** ohos.permission.GET_NET_FIREWALL

<!--Device-netFirewall-function getNetFirewallPolicy(userId: number): Promise<NetFirewallPolicy>--><!--Device-netFirewall-function getNetFirewallPolicy(userId: number): Promise<NetFirewallPolicy>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetFirewallPolicy&gt; | Current user firewall policy. |

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

netFirewall.getNetFirewallPolicy(100).then((result: netFirewall.NetFirewallPolicy) => {
  console.info('firewall policy: ', JSON.stringify(result));
}, (reason: BusinessError) => {
  console.error('get firewall policy failed: ', JSON.stringify(reason));
});

```

