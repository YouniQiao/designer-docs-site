# FillRequestCallback (System API)

Implements callbacks for an auto-fill request, which is used to automatically fill in or generate a password. The callbacks can be used to notify the client of the success or failure of the request.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## onCancel

```TypeScript
onCancel(fillContent?: string): void
```

Called when an auto-fill request is canceled.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fillContent | string | No | Content returned to the input method framework when the auto-fill request iscanceled.<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.The input parameter is not valid parameter;<br>2. Mandatory parameters are left unspecified.<br>**Applicable version:** 12 |

## onFailure

```TypeScript
onFailure(): void
```

Called when an auto-fill request fails to be processed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## onSuccess

```TypeScript
onSuccess(response: FillResponse): void
```

Called when an auto-fill request is successfully processed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | FillResponse | Yes | Information about the response to the auto-fill request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Mandatory parameters are left unspecified. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## setAutoFillPopupConfig

```TypeScript
setAutoFillPopupConfig(autoFillPopupConfig: AutoFillPopupConfig): void
```

Sets the size and position of an auto-fill pop-up.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| autoFillPopupConfig | AutoFillPopupConfig | Yes | Size and position of the auto-fill pop-up. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Mandatory parameters are left unspecified. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

