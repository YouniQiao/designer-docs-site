# getAbilityIcon

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void
```

Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) of the icon corresponding to a given bundle name and ability name. This API uses an asynchronous callback to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void--><!--Device-bundle-function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<image.PixelMap> | Yes | Callback used to return the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md). |


## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>
```

Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) of the icon corresponding to a given bundle name and ability name. This API uses a promise to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

<!--Device-bundle-function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>--><!--Device-bundle-function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| abilityName | string | Yes | Ability name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<image.PixelMap> | Returns the PixelMap object representing the icon of the specified ability. |

