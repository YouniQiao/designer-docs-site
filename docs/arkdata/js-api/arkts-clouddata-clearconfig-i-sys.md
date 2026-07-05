# ClearConfig

端云协同数据库级清除配置。

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## dbInfo

```TypeScript
dbInfo: Record<string, DBActionInfo>
```

要清除数据的库信息及清除规则。键为数据库名称，值为该数据库的清除配置信息。

**Type:** Record<string, DBActionInfo>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

