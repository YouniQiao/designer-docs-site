# @ohos.file.backup

Module providing backup and restore capabilities.

**Since:** 10

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backup } from '@kit.CoreFileKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [fileSystemServiceRequest](arkts-corefile-filesystemservicerequest-f-sys.md#filesystemservicerequest-1) | Requests filesystem garbage collection with specified configuration. |
| [getBackupInfo](arkts-corefile-getbackupinfo-f-sys.md#getbackupinfo-1) | Get Backup information from bundle. |
| [getBackupVersion](arkts-corefile-getbackupversion-f-sys.md#getbackupversion-1) | Obtain the backupVersion. |
| [getLocalCapabilities](arkts-corefile-getlocalcapabilities-f-sys.md#getlocalcapabilities-1) | Obtain a Json file that describes local capabilities. |
| [getLocalCapabilities](arkts-corefile-getlocalcapabilities-f-sys.md#getlocalcapabilities-2) | Obtain a Json file that describes local capabilities. |
| [getLocalCapabilities](arkts-corefile-getlocalcapabilities-f-sys.md#getlocalcapabilities-3) | Obtain a json file that describes local capabilities. |
| [updateSendRate](arkts-corefile-updatesendrate-f-sys.md#updatesendrate-1) | Update send file fd rate. |
| [updateTimer](arkts-corefile-updatetimer-f-sys.md#updatetimer-1) | Update backup or restore timeout. |
<!--DelEnd-->

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [IncrementalBackupSession](arkts-corefile-incrementalbackupsession-c-sys.md) | Control class for incremental backup procedure. |
| [SessionBackup](arkts-corefile-sessionbackup-c-sys.md) | Control class for backup procedure. |
| [SessionRestore](arkts-corefile-sessionrestore-c-sys.md) | Control class for restore procedure. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [File](arkts-corefile-file-i.md) | Corresponds to a file, including its metadata and data and the file's manifest data. Files are useful as IPC and backup services. |
| [IncrementalBackupData](arkts-corefile-incrementalbackupdata-i.md) | Corresponds to an incremental application, including its last incremental time and incremental list. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BackupParams](arkts-corefile-backupparams-i-sys.md) | Provides configuration parameters for backup and restore. |
| [BackupPriority](arkts-corefile-backuppriority-i-sys.md) | Control backup and restore priority sequence |
| [FileData](arkts-corefile-filedata-i-sys.md) | Corresponding to a file's data. Filedata is useful when doing IPC with the backup service. |
| [FileManifestData](arkts-corefile-filemanifestdata-i-sys.md) | Manifest file information in incremental data. FileManifestData is useful when doing IPC with the backup service. |
| [FileMeta](arkts-corefile-filemeta-i-sys.md) | Corresponding to a file's metadata. FileMeta is useful when doing IPC with the backup service. |
| [FileSystemRequestConfig](arkts-corefile-filesystemrequestconfig-i-sys.md) | Parameters required to perform garbage collection (GC). |
| [GeneralCallbacks](arkts-corefile-generalcallbacks-i-sys.md) | General callbacks for both backup and restore procedure. The backup service will notify the client by these callbacks. |
| [IncrementalBackupTime](arkts-corefile-incrementalbackuptime-i-sys.md) | Save the time information of the incremental backup. IncrementalBackupTime is useful when doing IPC with the backup service. |
| [PathInfo](arkts-corefile-pathinfo-i-sys.md) | Path information for file migration. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [OnBackupSizeReport](arkts-corefile-onbackupsizereport-t-sys.md) | function that returns backup datasize by bundleName. |
| [OnFileReadyBatch](arkts-corefile-onfilereadybatch-t-sys.md) | Function that returns array of file handle. |
<!--DelEnd-->

