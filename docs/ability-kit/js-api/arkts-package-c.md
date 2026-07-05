# Package

> **说明：** > > 从API version 3开始支持，从API version 9开始废弃。 指示应用包是否已安装。

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { CheckPackageHasInstalledResponse,CheckPackageHasInstalledOptions } from '@kit.AbilityKit';
```

## hasInstalled

```TypeScript
static hasInstalled(options: CheckPackageHasInstalledOptions): void
```

查询指定应用是否存在，或者原生应用是否安装。

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager#canOpenLink

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CheckPackageHasInstalledOptions | Yes | Options |

