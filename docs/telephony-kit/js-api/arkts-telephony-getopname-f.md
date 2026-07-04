# getOpName

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## getOpName

```TypeScript
function getOpName(slotId: number, callback: AsyncCallback<string>): void
```

Obtains the operator name of the SIM card in a specified slot.

**Since:** 9

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;string&gt; | Yes | Indicates the callback for getting the operator name;Returns an empty string if no SIM card is inserted or no operator name matched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

try {
    sim.getOpName(0, (err: BusinessError, data: string) => {
    if (err) {
      console.error("getOpName failed, err: " + JSON.stringify(err));
    } else {
      console.info('getOpName successfully, data: ' + JSON.stringify(data));
    }
  });
} catch (err) {
  console.error("getOpName err: " + JSON.stringify(err));
}

```


## getOpName

```TypeScript
function getOpName(slotId: number): Promise<string>
```

Obtains the operator name of the SIM card in a specified slot.

**Since:** 9

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the operator name; returns an empty string if no SIM card is inserted orno operator name matched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getOpName(0).then((data: string) => {
    console.info(`getOpName success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getOpName failed, promise: err->${JSON.stringify(err)}`);
});

```

