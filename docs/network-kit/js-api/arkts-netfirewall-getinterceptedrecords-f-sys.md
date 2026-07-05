# getInterceptedRecords

## getInterceptedRecords

```TypeScript
function getInterceptedRecords(userId: number, requestParam: RequestParam): Promise<InterceptedRecordPage>
```

Get intercepted records by userId, and it is necessary to specify the pagination query parameters.

**Since:** 14

**Required permissions:** 

 ohos.permission.GET_NET_FIREWALL

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| requestParam | RequestParam | Yes | Paging query input parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InterceptedRecordPage> | Block Record List. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Operation failed. Cannot connect to service. |
| 2100003 | System internal error. |
| 29400000 | The specified user does not exist. |

**Example**

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let interceptRecordParam: netFirewall.RequestParam = {
  page: 1,
  pageSize: 10,
  orderField: netFirewall.NetFirewallOrderField.ORDER_BY_RECORD_TIME,
  orderType: netFirewall.NetFirewallOrderType.ORDER_DESC
};
netFirewall.getInterceptedRecords(100, interceptRecordParam).then((result: netFirewall.InterceptedRecordPage) => {
  console.info("result:", JSON.stringify(result));
}, (error: BusinessError) => {
  console.error("get intercept records failed: " + JSON.stringify(error));
});

```

