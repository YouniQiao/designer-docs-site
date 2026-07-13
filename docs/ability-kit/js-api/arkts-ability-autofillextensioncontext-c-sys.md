# AutoFillExtensionContext (System API)

The AutoFillExtensionContext module provides the context environment for the AutoFillExtensionAbility. It inherits
from [ExtensionContext](arkts-ability-extensioncontext-c.md).

**Inheritance/Implementation:** AutoFillExtensionContext extends [ExtensionContext](arkts-ability-extensioncontext-c.md)

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## reloadInModal

```TypeScript
reloadInModal(customData: CustomData): Promise<void>
```

Reload autoFillExtension in modal window.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customData | CustomData | Yes | User defined data. When the modal window of AutoFillExtensionneeds to be raised again, pass this parameter to the application framework. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

