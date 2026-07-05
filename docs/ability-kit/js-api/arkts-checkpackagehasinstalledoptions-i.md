# CheckPackageHasInstalledOptions

> **说明：** > > 从API version 3开始支持，从API version 9开始废弃。 指示应用包是否已安装。

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { CheckPackageHasInstalledResponse,CheckPackageHasInstalledOptions } from '@kit.AbilityKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

接口调用失败的回调函数。

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## success

```TypeScript
success?: (data: CheckPackageHasInstalledResponse) => void
```

接口调用成功的回调函数。

**Type:** (data: CheckPackageHasInstalledResponse) => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## bundleName

```TypeScript
bundleName: string
```

应用Bundle名称。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

