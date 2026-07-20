# makeCall

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## makeCall

```TypeScript
function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void
```

Go to the dial screen and the called number is displayed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-call-function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void--><!--Device-call-function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of makeCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// The tel URI format is supported since API version 15, for example, tel:13xxxx.
call.makeCall("138xxxxxxxx", (err: BusinessError) => {
    if (err) {
        console.error(`makeCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`makeCall success`);
    }
});

```


## makeCall

```TypeScript
function makeCall(phoneNumber: string): Promise<void>
```

Go to the dial screen and the called number is displayed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-call-function makeCall(phoneNumber: string): Promise<void>--><!--Device-call-function makeCall(phoneNumber: string): Promise<void>-End-->

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the makeCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// The tel URI format is supported since API version 15, for example, tel:13xxxx.
call.makeCall("138xxxxxxxx").then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```


## makeCall

```TypeScript
function makeCall(phoneNumber: string, options?: MakeCallOptions): Promise<void>
```

Go to the dial screen and the called number is displayed.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-call-function makeCall(phoneNumber: string, options?: MakeCallOptions): Promise<void>--><!--Device-call-function makeCall(phoneNumber: string, options?: MakeCallOptions): Promise<void>-End-->

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | [MakeCallOptions](arkts-telephony-call-makecalloptions-i.md) | No | Indicates additional information carried in the call.<br>Default value: false. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - The promise returned by the makeCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { call } from '@kit.TelephonyKit';

// Set whether to return to the current application after the call ends.
let makeOptions: call.MakeCallOptions = {
  isHideDialScreen: true
}

call.makeCall("138xxxxxxxx", makeOptions).then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```


## makeCall

```TypeScript
function makeCall(context: Context, phoneNumber: string): Promise<void>
```

Go to the dial screen and the called number is displayed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-call-function makeCall(context: Context, phoneNumber: string): Promise<void>--><!--Device-call-function makeCall(context: Context, phoneNumber: string): Promise<void>-End-->

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context. |
| phoneNumber | string | Yes | Indicates the called number. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the makeCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// Obtain the application context.
let context = this.getUIContext().getHostContext() as Context;
// The tel URI format is supported since API version 15, for example, tel:13xxxx.
call.makeCall(context, "138xxxxxxxx").then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```

