# getBundleInstaller (System API)

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getBundleInstaller

```TypeScript
function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void
```

Obtains the installation package. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.INSTALL_BUNDLE

<!--Device-bundle-function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void--><!--Device-bundle-function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<BundleInstaller> | Yes | Callback used to return the installation package. |


## getBundleInstaller

```TypeScript
function getBundleInstaller(): Promise<BundleInstaller>
```

Obtains the installation package. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.INSTALL_BUNDLE

<!--Device-bundle-function getBundleInstaller(): Promise<BundleInstaller>--><!--Device-bundle-function getBundleInstaller(): Promise<BundleInstaller>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<BundleInstaller> | Promise used to return the installation package. |

