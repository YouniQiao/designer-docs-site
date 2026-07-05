# BackupExtensionContext

The context of an ability or an application. It allows access to application-specific resources. Can only be obtained through the ability.

**Inheritance:** BackupExtensionContextextends: ExtensionContext.

**Since:** 12

**System capability:** SystemCapability.FileManagement.StorageService.Backup

## Modules to Import

```TypeScript
import { BackupExtensionContext } from '@kit.CoreFileKit';
```

## backupDir

```TypeScript
readonly backupDir: string
```

Indicates backup dir.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

```TypeScript
get backupDir(): string
```

Indicates the backup directory.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

