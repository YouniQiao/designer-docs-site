# enableAbility (System API)

## Modules to Import

```TypeScript
import { config } from '@ohos.accessibility.config';
```

## enableAbility

```TypeScript
function enableAbility(name: string, capability: Array<accessibility.Capability>): Promise<void>
```

Enables an accessibility extension ability. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the accessibility extension ability, in the format of 'bundleName/abilityName'. |
| capability | Array&lt;accessibility.Capability&gt; | Yes | Capability of the accessibility extension ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300001](../errorcode-accessibility.md#9300001-invalid-bundle-name-or-ability-name) | Invalid bundle name or ability name. |
| [9300002](../errorcode-accessibility.md#9300002-target-ability-already-enabled) | Target ability already enabled. |


## enableAbility

```TypeScript
function enableAbility(
    name: string,
    capability: Array<accessibility.Capability>,
    callback: AsyncCallback<void>
  ): void
```

Enables an accessibility extension ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the accessibility extension ability, in the format of 'bundleName/abilityName'. |
| capability | Array&lt;accessibility.Capability&gt; | Yes | Capability of the accessibility extension ability. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300001](../errorcode-accessibility.md#9300001-invalid-bundle-name-or-ability-name) | Invalid bundle name or ability name. |
| [9300002](../errorcode-accessibility.md#9300002-target-ability-already-enabled) | Target ability already enabled. |

