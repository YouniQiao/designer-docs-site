# hasOperatorPrivileges

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## hasOperatorPrivileges

```TypeScript
function hasOperatorPrivileges(slotId: number, callback: AsyncCallback<boolean>): void
```

Checks whether your application (the caller) has been granted the operator permissions.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from {@code 0} to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback of hasOperatorPrivileges.Returns {@code true} if your application has been granted the operator permissions; returns {@code false} otherwise.If no SIM card is inserted or the SIM card is deactivated will be return {@code false}. |

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
import { sim } from '@kit.TelephonyKit';

sim.hasOperatorPrivileges(0, (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## hasOperatorPrivileges

```TypeScript
function hasOperatorPrivileges(slotId: number): Promise<boolean>
```

Checks whether your application (the caller) has been granted the operator permissions.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from {@code 0} to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if your application has been granted the operator permissions;returns {@code false} otherwise. If no SIM card is inserted or the SIM card is deactivated will bereturn {@code false}. |

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
import { sim } from '@kit.TelephonyKit';

sim.hasOperatorPrivileges(0).then((data: boolean) => {
    console.info(`hasOperatorPrivileges success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`hasOperatorPrivileges failed, promise: err->${JSON.stringify(err)}`);
});

```

