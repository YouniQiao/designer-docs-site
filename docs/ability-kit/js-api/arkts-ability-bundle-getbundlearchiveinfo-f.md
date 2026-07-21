# getBundleArchiveInfo

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

<a id="getbundlearchiveinfo"></a>
## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

Obtains information about the bundles contained in a HAP file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

<!--Device-bundle-function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void--><!--Device-bundle-function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | Path where the HAP file is stored. The absolute path of the application and the data directory sandbox path are supported. |
| bundleFlags | number | Yes | Flags used to specify information contained in the BundleInfo object that will be returned. For details about the available enumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInfo&gt; | Yes | Callback used to return the information about the bundles. |


<a id="getbundlearchiveinfo-1"></a>
## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>
```

Obtains information about the bundles contained in a HAP file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

<!--Device-bundle-function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>--><!--Device-bundle-function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | Path where the HAP file is stored. The absolute path of the application and the data directory sandbox path are supported. |
| bundleFlags | number | Yes | Flags used to specify information contained in the BundleInfo object that will be returned. For details about the available enumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo&gt; | - Returns the BundleInfo object. |

