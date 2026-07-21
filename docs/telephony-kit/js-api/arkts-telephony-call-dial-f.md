# dial

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="dial"></a>
## dial

```TypeScript
function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void
```

Makes a call.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** dialCall

**Required permissions:** ohos.permission.PLACE_CALL

<!--Device-call-function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void--><!--Device-call-function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | [DialOptions](arkts-telephony-call-dialoptions-i.md) | Yes | Indicates additional information carried in the call. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Indicates the callback for getting the result of the call.Returns {@code true} if the call request is successful; returns {@code false} otherwise.Note that the value {@code true} indicates only the successful processing of the request; it does not mean that the call is or can be connected. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialOptions: call.DialOptions = {
    extras: false
}
call.dial("138xxxxxxxx", dialOptions, (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


<a id="dial-1"></a>
## dial

```TypeScript
function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>
```

Makes a call.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** dialCall

**Required permissions:** ohos.permission.PLACE_CALL

<!--Device-call-function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>--><!--Device-call-function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | [DialOptions](arkts-telephony-call-dialoptions-i.md) | No | Indicates additional information carried in the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns the result of the call.Returns {@code true} if the call request is successful; returns {@code false} otherwise.Note that the value {@code true} indicates only the successful processing of the request; it does not mean that the call is or can be connected. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialOptions: call.DialOptions = {
    extras: false
}
call.dial("138xxxxxxxx", dialOptions).then((data: boolean) => {
    console.info(`dial success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`dial fail, promise: err->${JSON.stringify(err)}`);
});

```


<a id="dial-2"></a>
## dial

```TypeScript
function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void
```

Makes a call.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** dialCall

**Required permissions:** ohos.permission.PLACE_CALL

<!--Device-call-function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void--><!--Device-call-function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Indicates the callback for getting the result of the call.Returns {@code true} if the call request is successful; returns {@code false} otherwise.Note that the value {@code true} indicates only the successful processing of the request; it does not mean that the call is or can be connected. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.dial("138xxxxxxxx", (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

