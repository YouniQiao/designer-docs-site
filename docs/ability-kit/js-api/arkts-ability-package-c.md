# Package

> **NOTE**
>
> This API has been supported since API version 3 and deprecated since API version 9.

Checks whether a bundle has been installed.

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { CheckPackageHasInstalledResponse, CheckPackageHasInstalledOptions } from '@kit.AbilityKit';
```

## hasInstalled

```TypeScript
static hasInstalled(options: CheckPackageHasInstalledOptions): void
```

Checks whether an application exists, or whether a native application has been installed.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** canOpenLink

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CheckPackageHasInstalledOptions | Yes | Options |

