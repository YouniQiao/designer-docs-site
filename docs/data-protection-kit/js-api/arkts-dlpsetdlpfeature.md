# @ohos.dlpSetDlpFeature

This module controls the Data Loss Prevention (DLP) feature, including enabling or disabling DLP and returning the DLP status.

**Use scenarios**

- Data security compliance requirements must be met.  
- Access control and encryption protection are provided for confidential files.

> **NOTE**  
> - The initial APIs of this module are supported since API version 26.0.0. Newly added APIs will be marked with a  
> - superscript to indicate their earliest API version.  
> - The APIs provided by this module are system APIs.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace dlpSetDlpFeature--><!--Device-unnamed-declare namespace dlpSetDlpFeature-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpSetDlpFeature } from '@kit.DataProtectionKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [setDlpFeature](arkts-dataprotection-dlpsetdlpfeature-setdlpfeature-f-sys.md#setdlpfeature-1) | Sets the DLP status. This API uses a promise to return the result. The system enables or disables the DLP protection function based on the DLP status specified using this API.When this feature is enabled, right-click the file to be encrypted, and the encryption option is displayed in the shortcut menu. Files in .txt, .pdf, .xls, .xlsx, .ppt, .pptx, .doc, and .docx formats can be encrypted.This API is used to enable or disable the DLP function in enterprise policies. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DLPFeatureInfo](arkts-dataprotection-dlpsetdlpfeature-dlpfeatureinfo-i-sys.md) | Sets the DLP status. |
| [StatusInfoResult](arkts-dataprotection-dlpsetdlpfeature-statusinforesult-i-sys.md) | Describes the DLP settings. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DlpFeatureStatus](arkts-dataprotection-dlpsetdlpfeature-dlpfeaturestatus-e-sys.md) | Enumerates DLP statuses. |
<!--DelEnd-->

