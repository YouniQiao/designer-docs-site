# PluginParam

插件应用安装、卸载的参数信息。

**Since:** 19

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { installer } from '@kit.AbilityKit';
```

## parameters

```TypeScript
parameters?: Array<Parameters>
```

指定安装、卸载插件程序的扩展参数，默认值为空。

**Type:** Array<Parameters>

**Since:** 19

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## userId

```TypeScript
userId?: int
```

指定安装、卸载插件程序所在的用户ID，可以通过 [getOsAccountLocalId接口](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId) 获取。默认值：调用方所在用户。

**Type:** int

**Since:** 19

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

