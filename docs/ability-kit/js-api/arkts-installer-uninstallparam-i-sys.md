# UninstallParam

共享包卸载需指定的参数信息。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { installer } from '@kit.AbilityKit';
```

## bundleName

```TypeScript
bundleName: string
```

共享包包名。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## versionCode

```TypeScript
versionCode?: int
```

指示共享包的版本号。默认值：如果不填写versionCode，则卸载该包名的所有共享包。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

