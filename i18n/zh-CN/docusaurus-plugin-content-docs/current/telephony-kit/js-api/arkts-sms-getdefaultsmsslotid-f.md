# getDefaultSmsSlotId

## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(callback: AsyncCallback<int>): void
```

Obtains the default SIM card for sending SMS messages.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.SmsMms

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | Indicates the callback for getting the default SIM card for sending SMS  messages.  Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;  Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSlotId((err: BusinessError, data: number) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(): Promise<int>
```

Obtains the default SIM card for sending SMS messages.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.SmsMms

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;  Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSlotId().then((data: number) => {
    console.info(`getDefaultSmsSlotId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDefaultSmsSlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

