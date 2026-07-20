# setApplicationEnabled (System API)

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void
```

Sets whether to enable an application. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

<!--Device-bundle-function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void--><!--Device-bundle-function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| isEnable | boolean | Yes | Whether to enable the application. **true** to enable, **false** otherwise. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>
```

Sets whether to enable an application. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

<!--Device-bundle-function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>--><!--Device-bundle-function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| isEnable | boolean | Yes | Whether to enable the application. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

