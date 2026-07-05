# @ohos.fontManager

字体管理模块，提供给系统应用安装和卸载三方字体的能力。

**起始版本：** 19

**系统能力：** SystemCapability.Global.FontManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { fontManager } from '@kit.LocalizationKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[dataMigration](arkts-fontmanager-datamigration-f-sys.md#dataMigration-1) | 设备升级时使用的数据迁移接口，用于拉起迁移任务。 |
| <!--DelRow-->[installFont](arkts-fontmanager-installfont-f-sys.md#installFont-1) | 安装指定路径下的字体，使用promise异步回调。 |
| <!--DelRow-->[uninstallFont](arkts-fontmanager-uninstallfont-f-sys.md#uninstallFont-1) | 卸载指定名称的字体，使用promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DataMigrationCallback](arkts-fontmanager-datamigrationcallback-i-sys.md) | 数据迁移时使用的回调类型。 |
| <!--DelRow-->[DataMigrationProgress](arkts-fontmanager-datamigrationprogress-i-sys.md) | 描述数据迁移的进度信息。 |

