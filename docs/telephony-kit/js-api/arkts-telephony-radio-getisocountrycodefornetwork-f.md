# getISOCountryCodeForNetwork

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getISOCountryCodeForNetwork

```TypeScript
function getISOCountryCodeForNetwork(slotId: number, callback: AsyncCallback<string>): void
```

Obtains the ISO-defined country code of the country where the registered network is deployed.

**Since:** 7

<!--Device-radio-function getISOCountryCodeForNetwork(slotId: int, callback: AsyncCallback<string>): void--><!--Device-radio-function getISOCountryCodeForNetwork(slotId: int, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Indicates the callback for getting the country code defined in ISO 3166-2; returns an empty string if the device is not registered with any network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getISOCountryCodeForNetwork(slotId, (err: BusinessError, data: string) => {
    if (err) {
        console.error(`getISOCountryCodeForNetwork failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getISOCountryCodeForNetwork success, callback: data->${JSON.stringify(data)}`);
});

```


## getISOCountryCodeForNetwork

```TypeScript
function getISOCountryCodeForNetwork(slotId: number): Promise<string>
```

Obtains the ISO-defined country code of the country where the registered network is deployed.

**Since:** 7

<!--Device-radio-function getISOCountryCodeForNetwork(slotId: int): Promise<string>--><!--Device-radio-function getISOCountryCodeForNetwork(slotId: int): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the country code defined in ISO 3166-2.Returns an empty string if the device is not registered with any network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getISOCountryCodeForNetwork(slotId).then((data: string) => {
    console.info(`getISOCountryCodeForNetwork success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getISOCountryCodeForNetwork failed, promise: err->${JSON.stringify(err)}`);
});

```

