# getBundleInfo

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

<a id="getbundleinfo"></a>
## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string,
    bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void
```

Obtains the bundle information based on a given bundle name and bundle options. This API uses an asynchronous callback to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getBundleInfo(bundleName: string,
    bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void--><!--Device-bundle-function getBundleInfo(bundleName: string,
    bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| options | [BundleOptions](arkts-ability-bundle-bundleoptions-i.md) | Yes | Includes **userId**. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInfo&gt; | Yes | Callback used to return the bundle information. |


<a id="getbundleinfo-1"></a>
## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

Obtains the bundle information based on a given bundle name. This API uses an asynchronous callback to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void--><!--Device-bundle-function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInfo&gt; | Yes | Callback used to return the bundle information. |


<a id="getbundleinfo-2"></a>
## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>
```

Obtains the bundle information based on a given bundle name. This API uses a promise to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>--><!--Device-bundle-function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| options | [BundleOptions](arkts-ability-bundle-bundleoptions-i.md) | No | Options that contain the user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo&gt; | Promise used to return the bundle information. |

