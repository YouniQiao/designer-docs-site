# formatPhoneNumberToE164

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="formatphonenumbertoe164"></a>
## formatPhoneNumberToE164

```TypeScript
function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void
```

Formats a phone number into an E.164 representation.

**Since:** 7

<!--Device-call-function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void--><!--Device-call-function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the phone number to format. |
| countryCode | string | Yes | Indicates a two-digit country code defined in ISO 3166-1. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Returns an E.164 number.Returns an empty string if the input phone number is invalid. |

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

call.formatPhoneNumberToE164("138xxxxxxxx", "CN", (err: BusinessError, data: string) => {
    if (err) {
        console.error(`formatPhoneNumberToE164 fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`formatPhoneNumberToE164 success, data->${JSON.stringify(data)}`);
    }
});

```


<a id="formatphonenumbertoe164-1"></a>
## formatPhoneNumberToE164

```TypeScript
function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>
```

Formats a phone number into an E.164 representation.

**Since:** 7

<!--Device-call-function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>--><!--Device-call-function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the phone number to format. |
| countryCode | string | Yes | Indicates a two-digit country code defined in ISO 3166-1. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns an E.164 number.Returns an empty string if the input phone number is invalid. |

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

call.formatPhoneNumberToE164("138xxxxxxxx", "CN").then((data: string) => {
    console.info(`formatPhoneNumberToE164 success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`formatPhoneNumberToE164 fail, promise: err->${JSON.stringify(err)}`);
});

```

