---
last_update:
  date: 2026-07-04
---

# enable (System API)

## Modules to Import

```TypeScript
import { inputDeviceCooperate } from '@ohos.multimodalInput.inputDeviceCooperate';
```

## enable

```TypeScript
function enable(enable: boolean, callback: AsyncCallback<void>): void
```

Enables or disables screen hopping. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** prepareCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable screen hopping. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback. If the operation is successful, **err** is **undefined**.Otherwise, **error** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 |


## enable

```TypeScript
function enable(enable: boolean): Promise<void>
```

Specifies whether to enable screen hopping. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** prepareCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable screen hopping. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 |

