# getState (System API)

## Modules to Import

```TypeScript
import { inputDeviceCooperate } from '@ohos.multimodalInput.inputDeviceCooperate';
```

## getState

```TypeScript
function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void
```

Obtains the state of the screen hopping switch. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** getCooperateSwitchState

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | Descriptor of the target device for screen hopping. |
| callback | AsyncCallback&lt;{ state: boolean }&gt; | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 |


## getState

```TypeScript
function getState(deviceDescriptor: string): Promise<{ state: boolean }>
```

Checks whether screen hopping is enabled. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** getCooperateSwitchState

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | Descriptor of the target device for screen hopping. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;{ state: boolean }&gt; |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 |

