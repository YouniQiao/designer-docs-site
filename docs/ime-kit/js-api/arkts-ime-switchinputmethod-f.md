# switchInputMethod

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## switchInputMethod

```TypeScript
function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void
```

Switch input method. The caller must be the current inputmethod.

**Since:** 9

**Required permissions:** 
- API version 9 - 10: ohos.permission.CONNECT_IME_ABILITY

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | InputMethodProperty | Yes | indicates the target input method. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of switchInputMethod. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permissions check fails.<br>**Applicable version:** 9 - 10 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [12800005](../errorcode-inputmethod-framework.md#12800005-configuration-persistence-error) | configuration persistence error. |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
inputMethod.switchInputMethod(currentIme, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to switchInputMethod, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in switching input method.');
  } else {
    console.error('Failed to switch input method.');
  }
});

```


## switchInputMethod

```TypeScript
function switchInputMethod(target: InputMethodProperty): Promise<boolean>
```

Switch input method. The caller must be the current inputmethod.

**Since:** 9

**Required permissions:** 
- API version 9 - 10: ohos.permission.CONNECT_IME_ABILITY

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | InputMethodProperty | Yes | indicates the target input method. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permissions check fails.<br>**Applicable version:** 9 - 10 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [12800005](../errorcode-inputmethod-framework.md#12800005-configuration-persistence-error) | configuration persistence error. |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
inputMethod.switchInputMethod(currentIme).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in switching input method.');
  } else {
    console.error('Failed to switch input method.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to switchInputMethod, code: ${err.code}, message: ${err.message}`);
});

```

