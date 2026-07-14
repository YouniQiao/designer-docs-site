# @ohos.file.environment

The **Environment** module provides ArkTS APIs for obtaining the root directories of the storage and user files.

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.Environment

## Modules to Import

```TypeScript
import { Environment } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getUserDesktopDir](arkts-corefile-getuserdesktopdir-f.md#getuserdesktopdir-1) | Obtains the sandbox path of the pre-authorized **Desktop** directory. |
| [getUserDocumentDir](arkts-corefile-getuserdocumentdir-f.md#getuserdocumentdir-1) | Obtains the sandbox path of the pre-authorized **Document** directory. |
| [getUserDownloadDir](arkts-corefile-getuserdownloaddir-f.md#getuserdownloaddir-1) | Obtains the sandbox path of the pre-authorized **Download** directory. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getExternalStorageDir](arkts-corefile-getexternalstoragedir-f-sys.md#getexternalstoragedir-1) | Obtains the sandbox path of the root directory of an external storage card. This API is available only to the devices with the SystemCapability.FileManagement.File.Environment.FolderObtain system capability. |
| [getStorageDataDir](arkts-corefile-getstoragedatadir-f-sys.md#getstoragedatadir-1) | Obtains the root directory of the memory. This API uses a promise to return the result. |
| [getStorageDataDir](arkts-corefile-getstoragedatadir-f-sys.md#getstoragedatadir-2) | Obtains the root directory of the memory. This API uses an asynchronous callback to return the result. |
| [getUserDataDir](arkts-corefile-getuserdatadir-f-sys.md#getuserdatadir-1) | Obtains the root directory of user files. This API uses a promise to return the result. |
| [getUserDataDir](arkts-corefile-getuserdatadir-f-sys.md#getuserdatadir-2) | Obtains the root directory of user files. This API uses an asynchronous callback to return the result. |
| [getUserHomeDir](arkts-corefile-getuserhomedir-f-sys.md#getuserhomedir-1) | Obtains the sandbox path of the built-in card directory of the current user. This API is available only to the devices with the SystemCapability.FileManagement.File.Environment.FolderObtain system capability. |
<!--DelEnd-->

