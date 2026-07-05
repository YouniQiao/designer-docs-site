# FillRequestCallback

自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## onCancel

```TypeScript
onCancel(fillContent?: string): void
```

通知自动填充已被取消。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fillContent | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 16000050 | Internal error. |
| 401 | Parameter error. Possible causes:  1.The input parameter is not valid parameter;  2. Mandatory parameters are left unspecified. [since 12] |

## onFailure

```TypeScript
onFailure(): void
```

通知自动填充请求已失败。

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
onSuccess(response: FillResponse): void
```

通知自动填充请求已成功完成。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | FillResponse | Yes | 自动填充响应信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 401 | Mandatory parameters are left unspecified. |
| 16000050 | Internal error. |

## setAutoFillPopupConfig

```TypeScript
setAutoFillPopupConfig(autoFillPopupConfig: AutoFillPopupConfig): void
```

动态调整气泡弹窗的尺寸和位置。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| autoFillPopupConfig | AutoFillPopupConfig | Yes | 气泡弹窗尺寸和位置信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 401 | Mandatory parameters are left unspecified. |
| 16000050 | Internal error. |

