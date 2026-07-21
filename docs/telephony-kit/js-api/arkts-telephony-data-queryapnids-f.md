# queryApnIds

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

<a id="queryapnids"></a>
## queryApnIds

```TypeScript
function queryApnIds(apnInfo: ApnInfo): Promise<Array<number>>
```

Query APN IDs.

**Since:** 16

**Required permissions:** ohos.permission.MANAGE_APN_SETTING

<!--Device-data-function queryApnIds(apnInfo: ApnInfo): Promise<Array<int>>--><!--Device-data-function queryApnIds(apnInfo: ApnInfo): Promise<Array<int>>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| apnInfo | [ApnInfo](arkts-telephony-data-apninfo-i.md) | Yes | The APN information that needs to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Returns IDs of all APNs that meet the query conditions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

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

