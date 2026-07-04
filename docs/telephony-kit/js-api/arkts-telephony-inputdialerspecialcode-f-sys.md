# inputDialerSpecialCode (System API)

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## inputDialerSpecialCode

```TypeScript
function inputDialerSpecialCode(inputCode: string, callback: AsyncCallback<void>): void
```

Enters the special code on the keypad.

**Since:** 10

**Required permissions:** ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputCode | string | Yes | Indicates the special code to enter. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of inputDialerSpecialCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.inputDialerSpecialCode('*#*#2846579#*#*', (err: BusinessError) => {
    if (err) {
        console.error(`inputDialerSpecialCode fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`inputDialerSpecialCode success`);
    }
});

```


## inputDialerSpecialCode

```TypeScript
function inputDialerSpecialCode(inputCode: string): Promise<void>
```

Enters the special code on the keypad.

**Since:** 10

**Required permissions:** ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputCode | string | Yes | Indicates the special code to enter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the inputDialerSpecialCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    call.inputDialerSpecialCode('*#*#2846579#*#*');
    console.info(`inputDialerSpecialCode success`);
} catch (error) {
    console.error(`inputDialerSpecialCode fail, promise: err->${JSON.stringify(error)}`);
}

```

