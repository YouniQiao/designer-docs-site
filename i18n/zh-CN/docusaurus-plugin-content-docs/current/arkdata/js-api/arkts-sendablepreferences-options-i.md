# Options

Represents the configuration options of a **Preferences** instance.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## 导入模块

```TypeScript
import { sendablePreferences } from '@kit.ArkData';
```

## dataGroupId

```TypeScript
dataGroupId?: string | null
```

Application group ID. <!--RP1-->Currently, this parameter is not supported.<!--RP1End--> This parameter is optional. A **Preferences** instance will be created in the sandbox path corresponding to the specified **dataGroupId**. If this parameter is not specified, the **Preferences** instance is created in the sandbox directory of the application. This attribute can be used only in the stage model.

**类型：** string | null

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## name

```TypeScript
name: string
```

Name of the **Preferences** instance.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

