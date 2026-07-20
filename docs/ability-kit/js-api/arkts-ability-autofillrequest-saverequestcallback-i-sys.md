# SaveRequestCallback (System API)

Implements callbacks for an automatic or a manual saving request.

**Since:** 11

<!--Device-unnamed-export interface SaveRequestCallback--><!--Device-unnamed-export interface SaveRequestCallback-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## onFailure

```TypeScript
onFailure(): void
```

Called when a saving request fails to be processed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-SaveRequestCallback-onFailure(): void--><!--Device-SaveRequestCallback-onFailure(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## onSuccess

```TypeScript
onSuccess(): void
```

Called when a saving request is successfully processed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-SaveRequestCallback-onSuccess(): void--><!--Device-SaveRequestCallback-onSuccess(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

