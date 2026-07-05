# @ohos.fontManager

字体管理模块，提供给系统应用安装和卸载三方字体的能力。

**Since:** 19

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fontManager } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[dataMigration](arkts-fontmanager-datamigration-f-sys.md#dataMigration-1) | 设备升级时使用的数据迁移接口，用于拉起迁移任务。 |
| <!--DelRow-->[installFont](arkts-fontmanager-installfont-f-sys.md#installFont-1) | 安装指定路径下的字体，使用promise异步回调。 |
| <!--DelRow-->[uninstallFont](arkts-fontmanager-uninstallfont-f-sys.md#uninstallFont-1) | 卸载指定名称的字体，使用promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[DataMigrationCallback](arkts-fontmanager-datamigrationcallback-i-sys.md) | 数据迁移时使用的回调类型。 |
| <!--DelRow-->[DataMigrationProgress](arkts-fontmanager-datamigrationprogress-i-sys.md) | 描述数据迁移的进度信息。 |

