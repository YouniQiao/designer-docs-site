# CheckPackageHasInstalledOptions

> **NOTE**  
>  
> This API has been supported since API version 3 and deprecated since API version 9.

Checks whether a bundle has been installed.

**Since:** 3

**Deprecated since:** 9

<!--Device-unnamed-export interface CheckPackageHasInstalledOptions--><!--Device-unnamed-export interface CheckPackageHasInstalledOptions-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { CheckPackageHasInstalledResponse, CheckPackageHasInstalledOptions } from '@kit.AbilityKit';
```

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**Type:** string

**Since:** 3

**Deprecated since:** 9

<!--Device-CheckPackageHasInstalledOptions-bundleName: string--><!--Device-CheckPackageHasInstalledOptions-bundleName: string-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

## complete

```TypeScript
complete?: () => void
```

Called when API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

<!--Device-CheckPackageHasInstalledOptions-complete?: () => void--><!--Device-CheckPackageHasInstalledOptions-complete?: () => void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when API call has failed.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

<!--Device-CheckPackageHasInstalledOptions-fail?: (data: any, code: number) => void--><!--Device-CheckPackageHasInstalledOptions-fail?: (data: any, code: number) => void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

## success

```TypeScript
success?: (data: CheckPackageHasInstalledResponse) => void
```

Called when API call is successful.

**Type:** (data: CheckPackageHasInstalledResponse) => void

**Since:** 3

**Deprecated since:** 9

<!--Device-CheckPackageHasInstalledOptions-success?: (data: CheckPackageHasInstalledResponse) => void--><!--Device-CheckPackageHasInstalledOptions-success?: (data: CheckPackageHasInstalledResponse) => void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

