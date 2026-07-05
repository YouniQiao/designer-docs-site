# getDefaultSmsSlotId

## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(callback: AsyncCallback<int>): void
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | Indicates the callback for getting the default SIM card for sending SMS  messages.  Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;  Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

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
function getDefaultSmsSlotId(): Promise<int>
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

**System capability:** SystemCapability.Telephony.SmsMms

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;  Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

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

