# queryApnIds

## queryApnIds

```TypeScript
function queryApnIds(apnInfo: ApnInfo): Promise<Array<int>>
```

Query APN IDs.

**起始版本：** 16

**需要权限：** 

 ohos.permission.MANAGE_APN_SETTING

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| apnInfo | ApnInfo | 是 | The APN information that needs to be queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;int>> | Returns IDs of all APNs that meet the query conditions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let apnInfo: data.ApnInfo;
apnInfo = {
  apnName: "CMNET",
  apn: "cmnet",
  mcc: "460",
  mnc: "07",
};

data.queryApnIds(apnInfo).then((apnIds: Array<number>) => {
    console.info(`queryApnIds success, apnIds: ${apnIds}`);
}).catch((err: BusinessError) => {
    console.error(`queryApnIds failed. code: ${err.code}, message: ${err.message}`);
});

```

