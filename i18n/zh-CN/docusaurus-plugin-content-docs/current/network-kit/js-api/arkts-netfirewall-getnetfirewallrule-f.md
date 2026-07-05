# getNetFirewallRule

## getNetFirewallRule

```TypeScript
function getNetFirewallRule(userId: number, ruleId: number): Promise<NetFirewallRule>
```

Get a specified firewall rule by userId and ruleId.

**起始版本：** 15

**需要权限：** 

 ohos.permission.GET_NET_FIREWALL

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| ruleId | number | 是 | Rule ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetFirewallRule> | Firewall Rule. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Operation failed. Cannot connect to service. |
| 2100003 | System internal error. |
| 29400000 | The specified user does not exist. |
| 29400006 | The specified rule does not exist. |

**示例：**

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

netFirewall.getNetFirewallRule(100, 1).then((rule: netFirewall.NetFirewallRule) => {
  console.info("result:", JSON.stringify(rule));
}).catch((error : BusinessError) => {
  console.error(" get firewall rules failed: " + JSON.stringify(error));
});

```

