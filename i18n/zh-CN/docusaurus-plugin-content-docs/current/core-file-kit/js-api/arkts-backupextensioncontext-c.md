# BackupExtensionContext

The context of an ability or an application. It allows access to application-specific resources. Can only be obtained through the ability.

**继承实现关系：** BackupExtensionContext继承自：ExtensionContext。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

## 导入模块

```TypeScript
import { BackupExtensionContext } from '@kit.CoreFileKit';
```

## backupDir

```TypeScript
readonly backupDir: string
```

Indicates backup dir.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

```TypeScript
get backupDir(): string
```

Indicates the backup directory.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

