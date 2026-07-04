# getAbilityIcon

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void
```

Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) of the icon corresponding to a given bundle name and ability name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |
| callback | AsyncCallback&lt;image.PixelMap&gt; | Yes | Callback used to return the[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image). |


## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>
```

Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) of the icon corresponding to a given bundle name and ability name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Returns the PixelMap object representing the icon of the specified ability. |

