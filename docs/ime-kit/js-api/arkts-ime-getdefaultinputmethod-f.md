# getDefaultInputMethod

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getDefaultInputMethod

```TypeScript
function getDefaultInputMethod(): InputMethodProperty
```

Get default input method

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodProperty | property of the default input method. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
let defaultIme: inputMethod.InputMethodProperty = inputMethod.getDefaultInputMethod();

```

