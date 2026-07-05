# addIccDiallingNumbers

## addIccDiallingNumbers

```TypeScript
function addIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo, callback: AsyncCallback<void>): void
```

Add dialing number information to SIM card.

**起始版本：** 8

**需要权限：** 

 ohos.permission.WRITE_CONTACTS

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | ContactType | 是 | Indicates contact type. |
| diallingNumbers | DiallingNumbersInfo | 是 | Indicates dialing number information. |
| callback | AsyncCallback&lt;void> | 是 | The callback of addIccDiallingNumbers. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |
| 8301002 | The SIM card failed to read or update data. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let diallingNumbersInfo: sim.DiallingNumbersInfo = {
    alphaTag: "alpha",
    number: "138xxxxxxxx",
    pin2: "1234"
};
sim.addIccDiallingNumbers(0, sim.ContactType.GENERAL_CONTACT, diallingNumbersInfo, (err: BusinessError) => {
    console.info(`callback: err->${JSON.stringify(err)}`);
});

```

## addIccDiallingNumbers

```TypeScript
function addIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo): Promise<void>
```

Add dialing number information to SIM card.

**起始版本：** 8

**需要权限：** 

 ohos.permission.WRITE_CONTACTS

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | ContactType | 是 | Indicates contact type. |
| diallingNumbers | DiallingNumbersInfo | 是 | Indicates dialing number information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the addIccDiallingNumbers. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |
| 8301002 | The SIM card failed to read or update data. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let diallingNumbersInfo: sim.DiallingNumbersInfo = {
    alphaTag: "alpha",
    number: "138xxxxxxxx"
};
sim.addIccDiallingNumbers(0, sim.ContactType.GENERAL_CONTACT, diallingNumbersInfo).then(() => {
    console.info(`addIccDiallingNumbers success.`);
}).catch((err: BusinessError) => {
    console.error(`addIccDiallingNumbers failed, promise: err->${JSON.stringify(err)}`);
});

```

