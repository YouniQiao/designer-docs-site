# @ohos.file.storageStatistics

The **storageStatistics** module provides APIs for obtaining storage space information, including the space of
built-in and plug-in memory cards, space occupied by different types of data, and space of application data.

**Since:** 8

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

## Modules to Import

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getCurrentBundleInodes](arkts-corefile-getcurrentbundleinodes-f.md#getcurrentbundleinodes-1) | Get the current bundle inodes. |
| [getCurrentBundleStats](arkts-corefile-getcurrentbundlestats-f.md#getcurrentbundlestats-1) | Obtains the storage space (in bytes) of this application. This API uses an asynchronous callback to return theresult. |
| [getCurrentBundleStats](arkts-corefile-getcurrentbundlestats-f.md#getcurrentbundlestats-2) | Obtains the storage space (in bytes) of this application. This API uses a promise to return the result. |
| [getFreeInodes](arkts-corefile-getfreeinodes-f.md#getfreeinodes-1) | Get the free inodes. |
| [getFreeSize](arkts-corefile-getfreesize-f.md#getfreesize-2) | Get the free size. |
| [getTotalInodes](arkts-corefile-gettotalinodes-f.md#gettotalinodes-1) | Get the total inodes. |
| [getTotalSize](arkts-corefile-gettotalsize-f.md#gettotalsize-2) | Get the total size. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAllExtBundleStats](arkts-corefile-getallextbundlestats-f-sys.md#getallextbundlestats-1) | Obtains the space usage of all system applications or system services of a specified user. This API uses a promiseto return the result. |
| [getBundleStats](arkts-corefile-getbundlestats-f-sys.md#getbundlestats-1) | Obtains the storage space of an application, in bytes. This API uses an asynchronous callback to return the result. |
| [getBundleStats](arkts-corefile-getbundlestats-f-sys.md#getbundlestats-2) | Obtains the storage space of an application, in bytes. This API uses a promise to return the result. |
| [getExtBundleStats](arkts-corefile-getextbundlestats-f-sys.md#getextbundlestats-1) | Obtains the space usage of a specified user, system application bundle name, or system service name. This API usesa promise to return the result. |
| [getFreeSize](arkts-corefile-getfreesize-f-sys.md#getfreesize-1) | Obtains the available space (in bytes) of the built-in storage. This API uses an asynchronous callback to return theresult. |
| [getFreeSizeOfVolume](arkts-corefile-getfreesizeofvolume-f-sys.md#getfreesizeofvolume-1) | Get the free size of volume. |
| [getFreeSizeOfVolume](arkts-corefile-getfreesizeofvolume-f-sys.md#getfreesizeofvolume-2) | Get the free size of volume. |
| [getFreeSizeSync](arkts-corefile-getfreesizesync-f-sys.md#getfreesizesync-1) | Obtains the available space of the built-in storage, in bytes. This API returns the result synchronously. |
| [getSystemDataSize](arkts-corefile-getsystemdatasize-f-sys.md#getsystemdatasize-1) | Get the system data size. |
| [getSystemSize](arkts-corefile-getsystemsize-f-sys.md#getsystemsize-1) | Get the system size. |
| [getSystemSize](arkts-corefile-getsystemsize-f-sys.md#getsystemsize-2) | Get the system size. |
| [getTotalSize](arkts-corefile-gettotalsize-f-sys.md#gettotalsize-1) | Obtains the total size (in bytes) of the built-in storage. This API uses an asynchronous callback to return theresult. |
| [getTotalSizeOfVolume](arkts-corefile-gettotalsizeofvolume-f-sys.md#gettotalsizeofvolume-1) | Get the total size of volume. |
| [getTotalSizeOfVolume](arkts-corefile-gettotalsizeofvolume-f-sys.md#gettotalsizeofvolume-2) | Get the total size of volume. |
| [getTotalSizeSync](arkts-corefile-gettotalsizesync-f-sys.md#gettotalsizesync-1) | Obtains the total space of the built-in storage, in bytes. This API returns the result synchronously. |
| [getUserStorageStats](arkts-corefile-getuserstoragestats-f-sys.md#getuserstoragestats-1) | Obtains the storage statistics of this user, in bytes. This API uses a promise to return the result. |
| [getUserStorageStats](arkts-corefile-getuserstoragestats-f-sys.md#getuserstoragestats-2) | Obtains the storage statistics of this user, in bytes. This API uses an asynchronous callback to return the result. |
| [getUserStorageStats](arkts-corefile-getuserstoragestats-f-sys.md#getuserstoragestats-3) | Obtains the storage statistics of the specified user, in bytes. This API uses a promise to return the result. |
| [getUserStorageStats](arkts-corefile-getuserstoragestats-f-sys.md#getuserstoragestats-4) | Obtains the storage statistics of the specified user, in bytes. This API uses an asynchronous callback toreturn the result. |
| [listUserdataDirInfo](arkts-corefile-listuserdatadirinfo-f-sys.md#listuserdatadirinfo-1) | Queries the space usage of the **\/data** directory on the user device.This API uses a promise to return the result. |
| [setExtBundleStats](arkts-corefile-setextbundlestats-f-sys.md#setextbundlestats-1) | Reports the space usage of system applications or system services. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; If the value of **flag** in **stats** is **false**, the value of **businessName** must be the bundle name of an&gt; application. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BundleStats](arkts-corefile-bundlestats-i.md) | Get the bundle statistics. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ExtBundleStats](arkts-corefile-extbundlestats-i-sys.md) | Details the space usage of system applications or system services. |
| [StorageStats](arkts-corefile-storagestats-i-sys.md) | Get the user storage statistics. |
| [UserdataDirInfo](arkts-corefile-userdatadirinfo-i-sys.md) | Details the space usage of the **\/data** directory on the user device. |
<!--DelEnd-->

