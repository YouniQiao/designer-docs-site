# BundleStatusCallback (System API)

> **NOTE**
>
> The initial APIs of this module are supported since API version 8. Newly added APIs will
> be marked with a superscript to indicate their earliest API version.
>
> The APIs of this module have been deprecated since API version 9. No substitute is provided.
>
> The APIs provided by this module are system APIs.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** bundleMonitor/bundleMonitor

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## add

```TypeScript
add: (bundleName: string, userId: number) => void
```

Used to obtain information when a bundle is installed.

**Type:** (bundleName: string, userId: number) => void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** BundleChangedInfo

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## remove

```TypeScript
remove: (bundleName: string, userId: number) => void
```

Used to obtain information when a bundle is uninstalled.

**Type:** (bundleName: string, userId: number) => void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** BundleChangedInfo

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## update

```TypeScript
update: (bundleName: string, userId: number) => void
```

Used to obtain information when a bundle is updated.

**Type:** (bundleName: string, userId: number) => void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** BundleChangedInfo

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

