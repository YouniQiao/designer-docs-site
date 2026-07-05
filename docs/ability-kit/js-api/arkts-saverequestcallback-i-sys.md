# SaveRequestCallback

自动保存或者手动保存请求回调。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## onFailure

```TypeScript
onFailure(): void
```

通知保存请求处理失败。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 16000050 | Internal error. |

## onSuccess

```TypeScript
onSuccess(): void
```

通知保存请求已成功处理。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 16000050 | Internal error. |

