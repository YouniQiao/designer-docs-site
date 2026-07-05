# getDefaultSmsSlotId

## Modules to Import

```TypeScript
import { sms } from '@ohos.telephony.sms';
```

## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(callback: AsyncCallback<number>): void
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates the callback for getting the default SIM card for sending SMSmessages.Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSlotId((err: BusinessError, data: number) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(): Promise<number>
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

**System capability:** SystemCapability.Telephony.SmsMms

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSlotId().then((data: number) => {
    console.info(`getDefaultSmsSlotId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDefaultSmsSlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

