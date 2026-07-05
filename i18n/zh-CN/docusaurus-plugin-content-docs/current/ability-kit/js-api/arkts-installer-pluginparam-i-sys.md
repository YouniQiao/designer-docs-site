# PluginParam

插件应用安装、卸载的参数信息。

**起始版本：** 19

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { installer } from '@kit.AbilityKit';
```

## parameters

```TypeScript
parameters?: Array<Parameters>
```

指定安装、卸载插件程序的扩展参数，默认值为空。

**类型：** Array<Parameters>

**起始版本：** 19

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## userId

```TypeScript
userId?: int
```

指定安装、卸载插件程序所在的用户ID，可以通过 [getOsAccountLocalId接口](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId) 获取。默认值：调用方所在用户。

**类型：** int

**起始版本：** 19

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

