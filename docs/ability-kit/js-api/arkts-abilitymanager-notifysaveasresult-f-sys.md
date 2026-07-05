# notifySaveAsResult

## notifySaveAsResult

```TypeScript
function notifySaveAsResult(parameter: AbilityResult, requestCode: int, callback: AsyncCallback<void>): void
```

该接口仅供[DLP](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md#dlpPermission)（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用 另存为结果。使用callback异步回调。 > **说明：** > > 从API version 10开始支持，从API version 24开始废弃。

**Since:** 10

**Deprecated since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | 返回给调用startAbilityForResult?接口调用方的相关信息。 |
| requestCode | int | Yes | DLP管理应用传入的请求代码。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当另存为结果通知成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## notifySaveAsResult

```TypeScript
function notifySaveAsResult(parameter: AbilityResult, requestCode: int): Promise<void>
```

该接口仅供[DLP](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md#dlpPermission)（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用 另存为结果。使用Promise异步回调。

**Since:** 10

**Deprecated since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | 返回给调用startAbilityForResult?接口调用方的相关信息。 |
| requestCode | int | Yes | DLP管理应用传入的请求代码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

