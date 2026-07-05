# switchCurrentInputMethodSubtype

## switchCurrentInputMethodSubtype

```TypeScript
function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void
```

Switch current input method subtype. The caller must be the current inputmethod.

**Since:** 9

**Required permissions:** 

- API version9  to  10: ohos.permission.CONNECT_IME_ABILITY

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | InputMethodSubtype | Yes | indicates the target input method subtype. |
| callback | AsyncCallback&lt;boolean> | Yes | the callback of switchCurrentInputMethodSubtype. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. [since 9 - 10] |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let extra: Record<string, string> = {}
// For details, see the parameter description of **InputMethodSubtype**.
inputMethod.switchCurrentInputMethodSubtype({
  id: "ServiceExtAbility",
  label: "",
  name: "com.example.keyboard",
  mode: "upper",
  locale: "",
  language: "",
  icon: "",
  iconId: 0,
  extra: extra
}, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to switchCurrentInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in switching currentInputMethodSubtype.');
  } else {
    console.error('Failed to switchCurrentInputMethodSubtype');
  }
});

```

## switchCurrentInputMethodSubtype

```TypeScript
function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>
```

Switch current input method subtype. The caller must be the current inputmethod.

**Since:** 9

**Required permissions:** 

- API version9  to  10: ohos.permission.CONNECT_IME_ABILITY

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | InputMethodSubtype | Yes | indicates the target input method subtype. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. [since 9 - 10] |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let extra: Record<string, string> = {}
// For details, see the parameter description of **InputMethodSubtype**.
inputMethod.switchCurrentInputMethodSubtype({
  id: "ServiceExtAbility",
  label: "",
  name: "com.example.keyboard",
  mode: "upper",
  locale: "",
  language: "",
  icon: "",
  iconId: 0,
  extra: extra
}).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in switching currentInputMethodSubtype.');
  } else {
    console.error('Failed to switchCurrentInputMethodSubtype.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to switchCurrentInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
});

```

