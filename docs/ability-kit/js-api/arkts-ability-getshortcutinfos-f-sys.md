# getShortcutInfos (System API)

## Modules to Import

```TypeScript
import { BundleStatusCallback } from '@kit.AbilityKit';
```

## getShortcutInfos

```TypeScript
function getShortcutInfos(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void
```

Obtains an array of the shortcut information based on a given bundle name. This API uses an asynchronous callback
to return the result.

> **NOTE**
>
> This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
> [getShortcutInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>))
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getShortcutInfo(bundleName

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| callback | AsyncCallback&lt;Array&lt;ShortcutInfo&gt;&gt; | Yes | Callback used to return an array of the shortcutinformation. |


## getShortcutInfos

```TypeScript
function getShortcutInfos(bundleName: string): Promise<Array<ShortcutInfo>>
```

Obtains an array of the shortcut information based on a given bundle name. This API uses a promise to return the
result.

> **NOTE**
>
> This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
> [getShortcutInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>))
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getShortcutInfo(bundleName

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ShortcutInfo&gt;&gt; | Promise used to return an array of the shortcut information. |

