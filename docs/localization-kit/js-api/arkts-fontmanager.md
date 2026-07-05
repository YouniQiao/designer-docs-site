# @ohos.fontManager

The **fontManager** module provides APIs for system applications to install and uninstall third-party fonts.

**Since:** 19

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fontManager } from '@ohos.fontManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [dataMigration](arkts-localization-datamigration-f-sys.md#datamigration-1) | Starts a migration task during device upgrade. |
| [installFont](arkts-localization-installfont-f-sys.md#installfont-1) | Installs a font in the specified path. This API uses a promise to return the result. |
| [uninstallFont](arkts-localization-uninstallfont-f-sys.md#uninstallfont-1) | Uninstalls a font by name. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DataMigrationCallback](arkts-localization-datamigrationcallback-i-sys.md) | Callback type used during data migration. |
| [DataMigrationProgress](arkts-localization-datamigrationprogress-i-sys.md) | Describes the data migration progress. |
<!--DelEnd-->

