# getBundleInstaller (System API)

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

<a id="getbundleinstaller"></a>
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
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInstaller&gt; | Yes | Callback used to return the installation package. |


<a id="getbundleinstaller-1"></a>
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
| Promise&lt;BundleInstaller&gt; | Promise used to return the installation package. |

