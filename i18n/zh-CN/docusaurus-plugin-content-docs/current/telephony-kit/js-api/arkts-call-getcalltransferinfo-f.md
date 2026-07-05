# getCallTransferInfo

## getCallTransferInfo

```TypeScript
function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>
```

Obtains call transfer information with the phone number.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_CALL_TRANSFER_INFO

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | CallTransferType | 是 | Type of call transfer to be obtained. |
| number | string | 是 | Phone number whose call transfer status is to be obtained.  Whether the SIM card exists will be checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CallTransferResult> | - Call transfer status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8401002 | Invalid input call number. |
| 8401003 | Operation too frequent. |

**示例：**

```TypeScript
import { call } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let type: call.CallTransferType = call.CallTransferType.TRANSFER_TYPE_UNCONDITIONAL;
let number: string = "138xxxxxxxx";

call.getCallTransferInfo(type, number)
    .then((data: call.CallTransferResult) => {
        console.info(`getCallTransferInfo success, data->${JSON.stringify(data)}`);
    })
    .catch((err:BusinessError) => {
        console.error(`getCallTransferInfo fail, err->${JSON.stringify(err)}`);
    });

```

