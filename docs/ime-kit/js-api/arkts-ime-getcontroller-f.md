# getController

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getController

```TypeScript
function getController(): InputMethodController
```

Input method controller

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodController | the object of InputMethodController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12800006](../errorcode-inputmethod-framework.md#12800006-input-method-controller-error) | input method controller error. Possible cause:create InputMethodController object failed. |

**Example**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();

```

