# @ohos.fontManager

The **fontManager** module provides APIs for system applications to install and uninstall third-party fonts.

**Since:** 19

<!--Device-unnamed-declare namespace fontManager--><!--Device-unnamed-declare namespace fontManager-End-->

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fontManager } from '@kit.LocalizationKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [dataMigration](arkts-localization-fontmanager-datamigration-f-sys.md#datamigration) | Starts a migration task during device upgrade. |
| [installFont](arkts-localization-fontmanager-installfont-f-sys.md#installfont) | Installs a font in the specified path. This API uses a promise to return the result. |
| [uninstallFont](arkts-localization-fontmanager-uninstallfont-f-sys.md#uninstallfont) | Uninstalls a font by name. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DataMigrationCallback](arkts-localization-fontmanager-datamigrationcallback-i-sys.md) | Callback type used during data migration. |
| [DataMigrationProgress](arkts-localization-fontmanager-datamigrationprogress-i-sys.md) | Describes the data migration progress. |
<!--DelEnd-->

