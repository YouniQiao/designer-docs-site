# setDefaultSmsSlotId

## setDefaultSmsSlotId

```TypeScript
function setDefaultSmsSlotId(slotId: int, callback: AsyncCallback<void>): void
```

Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the default SIM card for sending SMS messages. The value {@code 0} indicates  card slot 1, and the value {@code 1} indicates card slot 2. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setDefaultSmsSlotId. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.setDefaultSmsSlotId(0, (err: BusinessError) => {
    console.info(`callback: err->${JSON.stringify(err)}.`);
});

```

## setDefaultSmsSlotId

```TypeScript
function setDefaultSmsSlotId(slotId: int): Promise<void>
```

Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the default SIM card for sending SMS messages. The value {@code 0} indicates  card slot 1, and the value {@code 1} indicates card slot 2. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setDefaultSmsSlotId. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.setDefaultSmsSlotId(0).then(() => {
    console.info(`setDefaultSmsSlotId success.`);
}).catch((err: BusinessError) => {
    console.error(`setDefaultSmsSlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

