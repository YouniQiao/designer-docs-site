# getInterceptedRecords

## getInterceptedRecords

```TypeScript
function getInterceptedRecords(userId: number, requestParam: RequestParam): Promise<InterceptedRecordPage>
```

Get intercepted records by userId, and it is necessary to specify the pagination query parameters.

**起始版本：** 14

**需要权限：** 

 ohos.permission.GET_NET_FIREWALL

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | Indicates the user ID. It cannot be the ID of a user that does not exist. |
| requestParam | RequestParam | 是 | Paging query input parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;InterceptedRecordPage> | Block Record List. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Operation failed. Cannot connect to service. |
| 2100003 | System internal error. |
| 29400000 | The specified user does not exist. |

**示例：**

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

