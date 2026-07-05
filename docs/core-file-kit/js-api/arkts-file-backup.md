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

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[fileSystemServiceRequest](arkts-backup-filesystemservicerequest-f-sys.md#fileSystemServiceRequest-1) | Requests filesystem garbage collection with specified configuration. |
| <!--DelRow-->[getBackupInfo](arkts-backup-getbackupinfo-f-sys.md#getBackupInfo-1) | Get Backup information from bundle. |
| <!--DelRow-->[getBackupVersion](arkts-backup-getbackupversion-f-sys.md#getBackupVersion-1) | Obtain the backupVersion. |
| <!--DelRow-->[getLocalCapabilities](arkts-backup-getlocalcapabilities-f-sys.md#getLocalCapabilities-1) | Obtain a Json file that describes local capabilities. |
| <!--DelRow-->[getLocalCapabilities](arkts-backup-getlocalcapabilities-f-sys.md#getLocalCapabilities-2) | Obtain a Json file that describes local capabilities. |
| <!--DelRow-->[getLocalCapabilities](arkts-backup-getlocalcapabilities-f-sys.md#getLocalCapabilities-3) | Obtain a json file that describes local capabilities. |
| <!--DelRow-->[updateSendRate](arkts-backup-updatesendrate-f-sys.md#updateSendRate-1) | Update send file fd rate. |
| <!--DelRow-->[updateTimer](arkts-backup-updatetimer-f-sys.md#updateTimer-1) | Update backup or restore timeout. |

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[IncrementalBackupSession](arkts-backup-incrementalbackupsession-c-sys.md) | Control class for incremental backup procedure. |
| <!--DelRow-->[SessionBackup](arkts-backup-sessionbackup-c-sys.md) | Control class for backup procedure. |
| <!--DelRow-->[SessionRestore](arkts-backup-sessionrestore-c-sys.md) | Control class for restore procedure. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[BackupParams](arkts-backup-backupparams-i-sys.md) | Provides configuration parameters for backup and restore. |
| <!--DelRow-->[BackupPriority](arkts-backup-backuppriority-i-sys.md) | Control backup and restore priority sequence |
| <!--DelRow-->[File](arkts-backup-file-i-sys.md) | Corresponds to a file, including its metadata and data and the file's manifest data. Files are useful as IPC and backup services. |
| <!--DelRow-->[FileData](arkts-backup-filedata-i-sys.md) | Corresponding to a file's data. Filedata is useful when doing IPC with the backup service. |
| <!--DelRow-->[FileManifestData](arkts-backup-filemanifestdata-i-sys.md) | Manifest file information in incremental data. FileManifestData is useful when doing IPC with the backup service. |
| <!--DelRow-->[FileMeta](arkts-backup-filemeta-i-sys.md) | Corresponding to a file's metadata. FileMeta is useful when doing IPC with the backup service. |
| <!--DelRow-->[FileSystemRequestConfig](arkts-backup-filesystemrequestconfig-i-sys.md) | Parameters required to perform garbage collection (GC). |
| <!--DelRow-->[GeneralCallbacks](arkts-backup-generalcallbacks-i-sys.md) | General callbacks for both backup and restore procedure. The backup service will notify the client by these callbacks. |
| <!--DelRow-->[IncrementalBackupData](arkts-backup-incrementalbackupdata-i-sys.md) | Corresponds to an incremental application, including its last incremental time and incremental list. |
| <!--DelRow-->[IncrementalBackupTime](arkts-backup-incrementalbackuptime-i-sys.md) | Save the time information of the incremental backup. IncrementalBackupTime is useful when doing IPC with the backup service. |
| <!--DelRow-->[PathInfo](arkts-backup-pathinfo-i-sys.md) | Path information for file migration. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[BundlePara](arkts-backup-bundlepara-t-sys.md) | function that returns backup BundlePara. |
| <!--DelRow-->[OnBackupSizeReport](arkts-backup-onbackupsizereport-t-sys.md) | function that returns backup datasize by bundleName. |
| <!--DelRow-->[OnFileReadyBatch](arkts-backup-onfilereadybatch-t-sys.md) | Function that returns array of file handle. |
| <!--DelRow-->[OnProcess](arkts-backup-onprocess-t-sys.md) | function that returns backup datasize by bundleName. Callback called when the backup_sa service return result information. The first return string parameter indicates the result of the bundle. |
| <!--DelRow-->[OnResultReport](arkts-backup-onresultreport-t-sys.md) | Callback called when the backup service return result information. The first return string parameter indicates the bundleName that triggers the callback. The second return string parameter indicates the result of the bundle. |

