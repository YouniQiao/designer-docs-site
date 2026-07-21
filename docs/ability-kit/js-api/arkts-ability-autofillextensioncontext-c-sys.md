# AutoFillExtensionContext (System API)

The AutoFillExtensionContext module provides the context environment for the AutoFillExtensionAbility. It inherits from [ExtensionContext](arkts-ability-extensioncontext-c.md).

**Inheritance/Implementation:** AutoFillExtensionContext extends [ExtensionContext](arkts-ability-extensioncontext-c.md)

**Since:** 11

<!--Device-unnamed-declare class AutoFillExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class AutoFillExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

<a id="reloadinmodal"></a>
## reloadInModal

```TypeScript
reloadInModal(customData: CustomData): Promise<void>
```

Reload autoFillExtension in modal window.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionContext-reloadInModal(customData: CustomData): Promise<void>--><!--Device-AutoFillExtensionContext-reloadInModal(customData: CustomData): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customData | [CustomData](arkts-ability-customdata-i-sys.md) | Yes | User defined data. When the modal window of AutoFillExtension needs to be raised again, pass this parameter to the application framework. |

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

