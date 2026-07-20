# formatPhoneNumber

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## formatPhoneNumber

```TypeScript
function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void
```

Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space.

**Since:** 7

<!--Device-call-function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void--><!--Device-call-function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the phone number to format. |
| options | [NumberFormatOptions](arkts-telephony-call-numberformatoptions-i.md) | Yes | Indicates the country code option. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Indicates the callback to obtain a formatted phone number.Returns an empty string if the input phone number is invalid. |

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

let options: call.NumberFormatOptions = {
    countryCode: "CN"
}
call.formatPhoneNumber("138xxxxxxxx", options, (err: BusinessError, data: string) => {
    if (err) {
        console.error(`formatPhoneNumber fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`formatPhoneNumber success, data->${JSON.stringify(data)}`);
    }
});

```


## formatPhoneNumber

```TypeScript
function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>
```

Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space.

**Since:** 7

<!--Device-call-function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>--><!--Device-call-function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the phone number to format. |
| options | [NumberFormatOptions](arkts-telephony-call-numberformatoptions-i.md) | No | Indicates the country code option. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the phone number after being formatted. |

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

let options: call.NumberFormatOptions = {
    countryCode: "CN"
}
call.formatPhoneNumber("138xxxxxxxx", options).then((data: string) => {
    console.info(`formatPhoneNumber success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`formatPhoneNumber fail, promise: err->${JSON.stringify(err)}`);
});

```


## formatPhoneNumber

```TypeScript
function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void
```

Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space.

**Since:** 7

<!--Device-call-function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void--><!--Device-call-function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the phone number to format. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Indicates the callback to obtain a formatted phone number.Returns an empty string if the input phone number is invalid. |

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

call.formatPhoneNumber("138xxxxxxxx", (err: BusinessError, data: string) => {
    if (err) {
        console.error(`formatPhoneNumber fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`formatPhoneNumber success, data->${JSON.stringify(data)}`);
    }
});

```

