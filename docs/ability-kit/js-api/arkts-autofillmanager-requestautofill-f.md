# requestAutoFill

## requestAutoFill

```TypeScript
export function requestAutoFill(context: UIContext, request: FillRequest, callback?: AutoFillCallback): void
```

Trigger an auto fill request.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIContext | Yes | Indicates the ui context where the filling operation will be performed. |
| request | FillRequest | Yes | Indicates the struct of automatic filling request. |
| callback | AutoFillCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. |

