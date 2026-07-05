# getBundleArchiveInfo

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

Obtains information about the bundles contained in a HAP file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | Path where the HAP file is stored. The absolute path of the application and thedata directory sandbox path are supported. |
| bundleFlags | number | Yes | Flags used to specify information contained in the BundleInfo object that will bereturned. For details about the available enumerated values, see the bundle information flags in[BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| callback | AsyncCallback&lt;BundleInfo&gt; | Yes | Callback used to return the information about the bundles. |


## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>
```

Obtains information about the bundles contained in a HAP file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | Path where the HAP file is stored. The absolute path of the application and thedata directory sandbox path are supported. |
| bundleFlags | number | Yes | Flags used to specify information contained in the BundleInfo object that will bereturned. For details about the available enumerated values, see the bundle information flags in[BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo&gt; | - Returns the BundleInfo object. |

