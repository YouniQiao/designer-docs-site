# getDefaultSmsSlotId

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

<a id="getdefaultsmsslotid"></a>
## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(callback: AsyncCallback<number>): void
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

<!--Device-sms-function getDefaultSmsSlotId(callback: AsyncCallback<int>): void--><!--Device-sms-function getDefaultSmsSlotId(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Indicates the callback for getting the default SIM card for sending SMS messages.Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;Returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSlotId((err: BusinessError, data: number) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


<a id="getdefaultsmsslotid-1"></a>
## getDefaultSmsSlotId

```TypeScript
function getDefaultSmsSlotId(): Promise<number>
```

Obtains the default SIM card for sending SMS messages.

**Since:** 7

<!--Device-sms-function getDefaultSmsSlotId(): Promise<int>--><!--Device-sms-function getDefaultSmsSlotId(): Promise<int>-End-->

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

