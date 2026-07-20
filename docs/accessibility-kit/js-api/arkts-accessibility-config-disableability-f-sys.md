# disableAbility (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## disableAbility

```TypeScript
function disableAbility(name: string): Promise<void>
```

Disables an accessibility extension ability. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

<!--Device-config-function disableAbility(name: string): Promise<void>--><!--Device-config-function disableAbility(name: string): Promise<void>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the accessibility extension ability, in the format of 'bundleName/abilityName'. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300001](../errorcode-accessibility.md#9300001-invalid-bundle-name-or-ability-name) | Invalid bundle name or ability name. |


## disableAbility

```TypeScript
function disableAbility(name: string, callback: AsyncCallback<void>): void
```

Disables an accessibility extension ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

<!--Device-config-function disableAbility(name: string, callback: AsyncCallback<void>): void--><!--Device-config-function disableAbility(name: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the accessibility extension ability, in the format of 'bundleName/abilityName'. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300001](../errorcode-accessibility.md#9300001-invalid-bundle-name-or-ability-name) | Invalid bundle name or ability name. |

