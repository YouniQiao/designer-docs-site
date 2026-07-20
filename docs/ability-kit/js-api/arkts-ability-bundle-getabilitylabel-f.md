# getAbilityLabel

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, abilityName: string, callback: AsyncCallback<string>): void
```

Obtains the application name based on a given bundle name and ability name. This API uses an asynchronous callback to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getAbilityLabel(bundleName: string, abilityName: string, callback: AsyncCallback<string>): void--><!--Device-bundle-function getAbilityLabel(bundleName: string, abilityName: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the application name. |


## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, abilityName: string): Promise<string>
```

Obtains the application name based on a given bundle name and ability name. This API uses a promise to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getAbilityLabel(bundleName: string, abilityName: string): Promise<string>--><!--Device-bundle-function getAbilityLabel(bundleName: string, abilityName: string): Promise<string>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the application name. |

