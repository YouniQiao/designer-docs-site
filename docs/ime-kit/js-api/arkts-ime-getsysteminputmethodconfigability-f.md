# getSystemInputMethodConfigAbility

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getSystemInputMethodConfigAbility

```TypeScript
function getSystemInputMethodConfigAbility(): ElementName
```

Get system input method config ability

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| ElementName | the information of system input method config ability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';

let inputMethodConfig: bundleManager.ElementName = inputMethod.getSystemInputMethodConfigAbility();

```

