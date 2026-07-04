# @ohos.file.fs

FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [fileIo](arkts-corefile-fileio-n.md) | FileIO |

### Functions

| Name | Description |
| --- | --- |
| [access](arkts-corefile-file-fs-access-f.md#access-1) | Checks whether the file or directory exists or has the operation permission. This API uses a promise to return the result. If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will be thrown. |
| [access](arkts-corefile-file-fs-access-f.md#access-2) | Checks whether a file or directory exists. This API uses an asynchronous callback to return the result. |
| [access](arkts-corefile-file-fs-access-f.md#access-3) | Checks whether the file or directory is stored locally or has the operation permission. This API uses a promise to return the result. If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will be thrown. |
| [accessSync](arkts-corefile-file-fs-accesssync-f.md#accesssync-1) | Checks whether a file or directory exists or has the operation permission. This API returns the result synchronously. If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will be thrown. |
| [accessSync](arkts-corefile-file-fs-accesssync-f.md#accesssync-2) | Checks whether a file or directory is stored locally or has the operation permission. This API returns the result synchronously. If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will be thrown. |
| [close](arkts-corefile-file-fs-close-f.md#close-1) | Closes a file or directory. This API uses a promise to return the result. |
| [close](arkts-corefile-file-fs-close-f.md#close-2) | Closes a file or directory. This API uses an asynchronous callback to return the result. |
| [closeSync](arkts-corefile-file-fs-closesync-f.md#closesync-1) | Closes a file or directory. This API returns the result synchronously. |
| [connectDfs](arkts-corefile-file-fs-connectdfs-f.md#connectdfs-1) | Triggers connection. If the peer device is abnormal, [onStatus](arkts-corefile-dfslisteners-i.md#onstatus-1) in **DfsListeners** will be called to notify the application. |
| [copy](arkts-corefile-file-fs-copy-f.md#copy-1) | Copies a file or directory. This API uses a promise to return the result. File copy across devices is supported. This API forcibly overwrites the file or directory. The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files to be copied at a time cannot exceed 500. |
| [copy](arkts-corefile-file-fs-copy-f.md#copy-2) | Copies a file or directory. This API uses an asynchronous callback to return the result. File copy across devices is supported. This API forcibly overwrites the file or directory. The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files to be copied at a time cannot exceed 500. |
| [copy](arkts-corefile-file-fs-copy-f.md#copy-3) | Copies a file or directory. This API uses an asynchronous callback to return the result. File copy across devices is supported. This API forcibly overwrites the file or directory. The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files to be copied at a time cannot exceed 500. |
| [copyDir](arkts-corefile-file-fs-copydir-f.md#copydir-1) | Copies the source directory to the destination path. This API uses a promise to return the result. |
| [copyDir](arkts-corefile-file-fs-copydir-f.md#copydir-2) | Copies the source directory to the destination directory. This API uses an asynchronous callback to return the result. |
| [copyDir](arkts-corefile-file-fs-copydir-f.md#copydir-3) | Copies the source directory to the destination path. This API uses an asynchronous callback to return the result. An exception will be thrown if the destination directory contains a directory with the same name as the source directory and there are files with the same name in the conflicting directory. All the non-conflicting files in the source directory will be moved to the destination directory, and the non-conflicting files in the destination directory will be retained. The data attribute in the error returned provides information about the conflicting files in the Array\&lt;[ConflictFiles](arkts-corefile-conflictfiles-i.md#conflictfiles)&gt; format. |
| [copyDir](arkts-corefile-file-fs-copydir-f.md#copydir-4) | Copies the source directory to the destination directory. You can set the copy mode. This API uses an asynchronous callback to return the result. |
| [copyDir](arkts-corefile-file-fs-copydir-f.md#copydir-5) | Copies the source directory to the destination path. You can set the copy mode. This API uses an asynchronous callback to return the result. |
| [copyDirSync](arkts-corefile-file-fs-copydirsync-f.md#copydirsync-1) | Copies the source directory to the destination path. This API returns the result synchronously. |
| [copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-1) | Copies a file. This API uses a promise to return the result. |
| [copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-2) | Copies a file. This API overwrites the file with the same name in the destination directory and truncates the part that is not overwritten. This API uses an asynchronous callback to return the result. |
| [copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-3) | Copies a file with the specified mode. This API uses an asynchronous callback to return the result. |
| [copyFileSync](arkts-corefile-file-fs-copyfilesync-f.md#copyfilesync-1) | Copies a file. This API returns the result synchronously. |
| [createRandomAccessFile](arkts-corefile-file-fs-createrandomaccessfile-f.md#createrandomaccessfile-1) | Creates a **RandomAccessFile** instance based on the specified file path or file object. This API uses a promise to return the result. |
| [createRandomAccessFile](arkts-corefile-file-fs-createrandomaccessfile-f.md#createrandomaccessfile-2) | Creates a **RandomAccessFile** object in read-only mode based on a file path or file object. This API uses an asynchronous callback to return the result. |
| [createRandomAccessFile](arkts-corefile-file-fs-createrandomaccessfile-f.md#createrandomaccessfile-3) | Creates a **RandomAccessFile** instance based on a file path or file object. This API uses an asynchronous callback to return the result. |
| [createRandomAccessFileSync](arkts-corefile-file-fs-createrandomaccessfilesync-f.md#createrandomaccessfilesync-1) | Creates a **RandomAccessFile** instance based on a file path or file object. |
| [createReadStream](arkts-corefile-file-fs-createreadstream-f.md#createreadstream-1) | Creates a readable stream. This API returns the result synchronously. |
| [createStream](arkts-corefile-file-fs-createstream-f.md#createstream-1) | Creates a stream based on a file path. This API uses a promise to return the result. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [createStream](arkts-corefile-file-fs-createstream-f.md#createstream-2) | Creates a stream based on a file path. This API uses an asynchronous callback to return the result. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [createStreamSync](arkts-corefile-file-fs-createstreamsync-f.md#createstreamsync-1) | Creates a stream based on a file path. This API returns the result synchronously. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [createWatcher](arkts-corefile-file-fs-createwatcher-f.md#createwatcher-1) | Creates a **Watcher** object to listen for file or directory changes. |
| [createWriteStream](arkts-corefile-file-fs-createwritestream-f.md#createwritestream-1) | Creates a writeable stream. This API returns the result synchronously. |
| [disconnectDfs](arkts-corefile-file-fs-disconnectdfs-f.md#disconnectdfs-1) | Triggers disconnection. |
| [dup](arkts-corefile-file-fs-dup-f.md#dup-1) | Duplicates the file descriptor and returns the corresponding **File** object. |
| [fdatasync](arkts-corefile-file-fs-fdatasync-f.md#fdatasync-1) | Synchronizes the data of a file. This API uses a promise to return the result. |
| [fdatasync](arkts-corefile-file-fs-fdatasync-f.md#fdatasync-2) | Synchronizes the data of a file. This API uses an asynchronous callback to return the result. |
| [fdatasyncSync](arkts-corefile-file-fs-fdatasyncsync-f.md#fdatasyncsync-1) | Synchronizes the data of a file. This API returns the result synchronously. |
| [fdopenStream](arkts-corefile-file-fs-fdopenstream-f.md#fdopenstream-1) | Opens a stream based on an FD. This API uses a promise to return the result. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [fdopenStream](arkts-corefile-file-fs-fdopenstream-f.md#fdopenstream-2) | Opens a stream based on an FD. This API uses an asynchronous callback to return the result. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [fdopenStreamSync](arkts-corefile-file-fs-fdopenstreamsync-f.md#fdopenstreamsync-1) | Opens a stream based on an FD. This API returns the result synchronously. To close the stream, use **close()** of [Stream](arkts-corefile-stream-i.md#stream). |
| [fsync](arkts-corefile-file-fs-fsync-f.md#fsync-1) | Synchronizes the cached data of a file to storage. This API uses a promise to return the result. |
| [fsync](arkts-corefile-file-fs-fsync-f.md#fsync-2) | Synchronizes the cached data of a file to storage. This API uses an asynchronous callback to return the result. |
| [fsyncSync](arkts-corefile-file-fs-fsyncsync-f.md#fsyncsync-1) | Synchronizes the cached data of a file to storage. This API returns the result synchronously. |
| [getxattr](arkts-corefile-file-fs-getxattr-f.md#getxattr-1) | Obtains an extended attribute of a file or directory. This API uses a promise to return the result. |
| [getxattrSync](arkts-corefile-file-fs-getxattrsync-f.md#getxattrsync-1) | Obtains an extended attribute of a file or directory. This API returns the result synchronously. |
| [listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1) | Lists the names of all files and directories in the current path. Filtering is supported. This API uses a promise to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/). |
| [listFile](arkts-corefile-file-fs-listfile-f.md#listfile-2) | Lists the names of all files and directories in the current path. Filtering is supported. This API uses an asynchronous callback to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/). |
| [listFile](arkts-corefile-file-fs-listfile-f.md#listfile-3) | Lists the names of all files and directories in the current path. Filtering is supported. This API uses an asynchronous callback to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/). |
| [listFileExt](arkts-corefile-file-fs-listfileext-f.md#listfileext-1) | Lists all file names in a directory. This API uses a promise to return the result. This API supports recursive listing of all file names and custom file name filtering. The returned result starts with a slash (/) and contains the subdirectory. |
| [listFileExtSync](arkts-corefile-file-fs-listfileextsync-f.md#listfileextsync-1) | Lists all file names in a directory. This API returns the result synchronously. This API supports recursive listing of all file names and custom file name filtering. The returned result starts with a slash (/) and contains the subdirectory. |
| [listFileSync](arkts-corefile-file-fs-listfilesync-f.md#listfilesync-1) | Lists the names of all files and directories in the current directory. This API returns the result synchronously. Filtering is supported. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/). |
| [lseek](arkts-corefile-file-fs-lseek-f.md#lseek-1) | Adjusts the position of the file offset pointer. |
| [lstat](arkts-corefile-file-fs-lstat-f.md#lstat-1) | Obtains information about a symbolic link that is used to refer to a file or directory. This API uses a promise to return the result. |
| [lstat](arkts-corefile-file-fs-lstat-f.md#lstat-2) | Obtains information about a symbolic link that is used to refer to a file or directory. This API uses an asynchronous callback to return the result. |
| [lstatSync](arkts-corefile-file-fs-lstatsync-f.md#lstatsync-1) | Obtains information about a symbolic link that is used to refer to a file or directory. This API returns the result synchronously. |
| [mkdir](arkts-corefile-file-fs-mkdir-f.md#mkdir-1) | Creates a directory. This API uses a promise to return the result. |
| [mkdir](arkts-corefile-file-fs-mkdir-f.md#mkdir-2) | Creates a directory. This API uses a promise to return the result. The value **true** means to create a directory recursively. |
| [mkdir](arkts-corefile-file-fs-mkdir-f.md#mkdir-3) | Creates a directory. This API uses an asynchronous callback to return the result. |
| [mkdir](arkts-corefile-file-fs-mkdir-f.md#mkdir-4) | Creates a directory. This API uses an asynchronous callback to return the result. The value **true** means to create a directory recursively. |
| [mkdirSync](arkts-corefile-file-fs-mkdirsync-f.md#mkdirsync-1) | Creates a directory. This API returns the result synchronously. |
| [mkdirSync](arkts-corefile-file-fs-mkdirsync-f.md#mkdirsync-2) | Creates a directory. This API returns the result synchronously. The value **true** means to create a directory recursively. |
| [mkdtemp](arkts-corefile-file-fs-mkdtemp-f.md#mkdtemp-1) | Creates a temporary directory. This API uses a promise to return the result. |
| [mkdtemp](arkts-corefile-file-fs-mkdtemp-f.md#mkdtemp-2) | Creates a temporary directory. This API uses an asynchronous callback to return the result. |
| [mkdtempSync](arkts-corefile-file-fs-mkdtempsync-f.md#mkdtempsync-1) | Creates a temporary directory. This API returns the result synchronously. |
| [mmap](arkts-corefile-file-fs-mmap-f.md#mmap-1) | Creates a file mapping object based on a file descriptor or file object, using promise asynchronous callback. Maps file contents to memory for efficient read and write access to files. Note: In the read/write mode (MappingMode.READ_WRITE), if the mapping range exceeds the raw file size, the file size will be automatically expanded. |
| [mmapSync](arkts-corefile-file-fs-mmapsync-f.md#mmapsync-1) | Creates a file mapping object based on a file descriptor or file object by using the synchronization method. Maps file contents to memory for efficient read and write access to files. Note: In the read/write mode (MappingMode.READ_WRITE), if the mapping range exceeds the raw file size, the file size will be automatically expanded. |
| [moveDir](arkts-corefile-file-fs-movedir-f.md#movedir-1) | Moves the source directory to the destination directory. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveDir](arkts-corefile-file-fs-movedir-f.md#movedir-2) | Moves the source directory to the destination directory. This API uses an asynchronous callback to return the result. |
| [moveDir](arkts-corefile-file-fs-movedir-f.md#movedir-3) | Moves the source directory to the destination directory. This API uses an asynchronous callback to return the result. An exception will be thrown if a directory conflict occurs, that is, the destination directory contains a directory with the same name as the source directory. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveDir](arkts-corefile-file-fs-movedir-f.md#movedir-4) | Moves the source directory to the destination directory. You can set the move mode. This API uses an asynchronous callback to return the result. |
| [moveDir](arkts-corefile-file-fs-movedir-f.md#movedir-5) | Moves the source directory to the destination directory. You can set the move mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveDirSync](arkts-corefile-file-fs-movedirsync-f.md#movedirsync-1) | Moves the source directory to the destination directory. This API returns the result synchronously. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveFile](arkts-corefile-file-fs-movefile-f.md#movefile-1) | Moves a file. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveFile](arkts-corefile-file-fs-movefile-f.md#movefile-2) | Moves a file and forcibly overwrites the file with the same name in the destination directory. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveFile](arkts-corefile-file-fs-movefile-f.md#movefile-3) | Moves a file with the specified mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [moveFileSync](arkts-corefile-file-fs-movefilesync-f.md#movefilesync-1) | Moves a file. This API returns the result synchronously. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [open](arkts-corefile-file-fs-open-f.md#open-1) | Opens a file or directory. This API uses a promise to return the result. This API supports the use of a URI. |
| [open](arkts-corefile-file-fs-open-f.md#open-2) | Opens a file or directory. This API uses an asynchronous callback to return the result. This API supports the use of a URI. |
| [open](arkts-corefile-file-fs-open-f.md#open-3) | Opens a file or directory with the specified mode. This API uses an asynchronous callback to return the result. This API supports the use of a URI. |
| [openSync](arkts-corefile-file-fs-opensync-f.md#opensync-1) | Opens a file or directory. This API returns the result synchronously. This API supports the use of a URI. |
| [read](arkts-corefile-file-fs-read-f.md#read-1) | Reads file data. This API uses a promise to return the result. |
| [read](arkts-corefile-file-fs-read-f.md#read-2) | Reads data from a file. This API uses an asynchronous callback to return the result. |
| [read](arkts-corefile-file-fs-read-f.md#read-3) | Reads data from a file. This API uses an asynchronous callback to return the result. |
| [readLines](arkts-corefile-file-fs-readlines-f.md#readlines-1) | Reads the text content of a file line by line. This API uses a promise to return the result. Only the files in UTF-8 format are supported. |
| [readLines](arkts-corefile-file-fs-readlines-f.md#readlines-2) | Reads a file text line by line. This API uses an asynchronous callback to return the result. Only the files in UTF-8 format are supported. |
| [readLines](arkts-corefile-file-fs-readlines-f.md#readlines-3) | Reads a file text line by line. This API uses an asynchronous callback to return the result. Only the files in UTF-8 format are supported. |
| [readLinesSync](arkts-corefile-file-fs-readlinessync-f.md#readlinessync-1) | Reads the text content of a file line by line. This API returns the result synchronously. |
| [readSync](arkts-corefile-file-fs-readsync-f.md#readsync-1) | Reads data from a file. This API returns the result synchronously. |
| [readText](arkts-corefile-file-fs-readtext-f.md#readtext-1) | Reads the text content of a file. This API uses a promise to return the result. |
| [readText](arkts-corefile-file-fs-readtext-f.md#readtext-2) | Reads the text content of a file. This API uses an asynchronous callback to return the result. |
| [readText](arkts-corefile-file-fs-readtext-f.md#readtext-3) | Reads the text content of a file. This API uses an asynchronous callback to return the result. |
| [readTextSync](arkts-corefile-file-fs-readtextsync-f.md#readtextsync-1) | Reads the text content of a file. This API returns the result synchronously. |
| [rename](arkts-corefile-file-fs-rename-f.md#rename-1) | Renames a file or directory. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [rename](arkts-corefile-file-fs-rename-f.md#rename-2) | Renames a file or directory. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [renameSync](arkts-corefile-file-fs-renamesync-f.md#renamesync-1) | Renames a file or directory. This API returns the result synchronously. &gt; **NOTE** &gt; &gt; This API is not supported in a distributed directory. |
| [rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-1) | Removes a directory and all its subdirectories and files. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API can be used to remove a single file. However, you are advised to use **unlink()** instead. |
| [rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-2) | Removes a directory and all its subdirectories and files. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API can be used to remove a single file. However, you are advised to use **unlink()** instead. |
| [rmdirSync](arkts-corefile-file-fs-rmdirsync-f.md#rmdirsync-1) | Removes a directory and all its subdirectories and files synchronously. &gt; **NOTE** &gt; &gt; This API can be used to remove a single file. However, you are advised to use **unlinkSync** instead. |
| [setxattr](arkts-corefile-file-fs-setxattr-f.md#setxattr-1) | Sets an extended attribute of a file or directory. This API uses a promise to return the result. |
| [setxattrSync](arkts-corefile-file-fs-setxattrsync-f.md#setxattrsync-1) | Sets an extended attribute of a file or directory. |
| [stat](arkts-corefile-file-fs-stat-f.md#stat-1) | Obtains detailed attribute information of a file or directory. This API uses a promise to return the result. |
| [stat](arkts-corefile-file-fs-stat-f.md#stat-2) | Obtains detailed attribute information of a file or directory. This API uses an asynchronous callback to return the result. |
| [statSync](arkts-corefile-file-fs-statsync-f.md#statsync-1) | Obtains detailed attribute information of a file or directory. This API returns the result synchronously. |
| [symlink](arkts-corefile-file-fs-symlink-f.md#symlink-1) | Creates a symbolic link based on a file path. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; Since API version 11, this API cannot be used by third-party applications. |
| [symlink](arkts-corefile-file-fs-symlink-f.md#symlink-2) | Creates a symbolic link based on the file path. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; Since API version 11, this API cannot be used by third-party applications. |
| [symlinkSync](arkts-corefile-file-fs-symlinksync-f.md#symlinksync-1) | Creates a symbolic link based on the file path. This API returns the result synchronously. &gt; **NOTE** &gt; &gt; Since API version 11, this API cannot be used by third-party applications. |
| [truncate](arkts-corefile-file-fs-truncate-f.md#truncate-1) | Truncates a file. This API uses a promise to return the result. |
| [truncate](arkts-corefile-file-fs-truncate-f.md#truncate-2) | Truncates a file. This API uses an asynchronous callback to return the result. |
| [truncate](arkts-corefile-file-fs-truncate-f.md#truncate-3) | Truncates a file. This API uses an asynchronous callback to return the result. |
| [truncateSync](arkts-corefile-file-fs-truncatesync-f.md#truncatesync-1) | Truncates the file content. This API returns the result synchronously. |
| [unlink](arkts-corefile-file-fs-unlink-f.md#unlink-1) | Removes a file. This API uses a promise to return the result. |
| [unlink](arkts-corefile-file-fs-unlink-f.md#unlink-2) | Removes a file. This API uses an asynchronous callback to return the result. |
| [unlinkSync](arkts-corefile-file-fs-unlinksync-f.md#unlinksync-1) | Removes a file. This API returns the result synchronously. |
| [utimes](arkts-corefile-file-fs-utimes-f.md#utimes-1) | Changes the time when the file was last modified. |
| [write](arkts-corefile-file-fs-write-f.md#write-1) | Writes data into a file. This API uses a promise to return the result. |
| [write](arkts-corefile-file-fs-write-f.md#write-2) | Writes data to a file. This API uses an asynchronous callback to return the result. |
| [write](arkts-corefile-file-fs-write-f.md#write-3) | Writes data to a file. This API uses an asynchronous callback to return the result. |
| [writeSync](arkts-corefile-file-fs-writesync-f.md#writesync-1) | Writes data to a file. This API returns the result synchronously. |

### Classes

| Name | Description |
| --- | --- |
| [AtomicFile](arkts-corefile-atomicfile-c.md) | AtomicFile is a class used to perform atomic read and write operations on files. A temporary file is written and renamed to the original file location, which ensures file integrity. If the write operation fails, the temporary file is deleted without modifying the original file content. You can call **finishWrite()** or **failWrite()** to write or roll back file content. |
| [ReadStream](arkts-corefile-readstream-c.md) | Defines a readable stream. You need to use [fileIo.createReadStream](../../../../reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatereadstream12) to create a **ReadStream** instance, which is inherited from [stream.Readable](../../apis-arkts/arkts-apis/arkts-arkts-readableoptions-i.md#readableoptions). The data obtained by **ReadStream** is a decoded string. Currently, only the UTF-8 format is supported. |
| [TaskSignal](arkts-corefile-tasksignal-c.md) | Provides APIs for interrupting a copy task. |
| [WriteStream](arkts-corefile-writestream-c.md) | Defines a writeable stream. You need to use [fileIo.createWriteStream](../../../../reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatewritestream12) to create a **WriteStream** instance, which is inherited from [stream.Writable](../../apis-arkts/arkts-apis/arkts-arkts-writable-c.md#writable) . |

### Interfaces

| Name | Description |
| --- | --- |
| [ConflictFiles](arkts-corefile-conflictfiles-i.md) | Defines conflicting file information used in **copyDir()** or **moveDir()**. |
| [CopyOptions](arkts-corefile-copyoptions-i.md) | Defines the callback for listening for the copy progress. |
| [DfsListeners](arkts-corefile-dfslisteners-i.md) | Provides APIs for observing events. listening for the distributed file system status. |
| [File](arkts-corefile-file-i.md) | Represents a **File** object opened by **open()**. |
| [FileFilter](arkts-corefile-filefilter-i.md) | Defines the file name filtering interface used by listFileExt(). |
| [FileMapping](arkts-corefile-filemapping-i.md) | File mapping object. Before invoking the FileMapping method, you need to use the mmap() method (synchronous or asynchronous) to construct a FileMapping instance. |
| [Filter](arkts-corefile-filter-i.md) | Defines the file filtering configuration used by **listFile()**. |
| [ListFileExtOptions](arkts-corefile-listfileextoptions-i.md) | Defines the options used in listFileExt(). |
| [ListFileOptions](arkts-corefile-listfileoptions-i.md) | Defines the options used in **listFile()**. |
| [Options](arkts-corefile-options-i.md) | Defines the options used in **readLines()**. |
| [Progress](arkts-corefile-progress-i.md) | Defines the copy progress information. |
| [RandomAccessFile](arkts-corefile-randomaccessfile-i.md) | Provides APIs for randomly reading and writing a stream. Before invoking any API of **RandomAccessFile**, you need to use **createRandomAccessFile()** to create a **RandomAccessFile** instance synchronously or asynchronously. |
| [RandomAccessFileOptions](arkts-corefile-randomaccessfileoptions-i.md) | Defines the options used in **createRandomAccessFile()**. |
| [ReadOptions](arkts-corefile-readoptions-i.md) | Defines the options used in **read()**. |
| [ReadStreamOptions](arkts-corefile-readstreamoptions-i.md) | Defines the options used in **createReadStream()**. |
| [ReadTextOptions](arkts-corefile-readtextoptions-i.md) | Defines the options used in **readText()**. It inherits from [ReadOptions](arkts-corefile-readoptions-i.md#readoptions). |
| [ReaderIterator](arkts-corefile-readeriterator-i.md) | Provides a **ReaderIterator** object. Before calling APIs of **ReaderIterator**, you need to use **readLines()** to create a **ReaderIterator** instance. |
| [ReaderIteratorResult](arkts-corefile-readeriteratorresult-i.md) | Represents the information obtained by the **ReaderIterator** object. |
| [Stat](arkts-corefile-stat-i.md) | Represents detailed file information. Before calling any API of the **Stat()** class, use [stat()](../../../../reference/apis-core-file-kit/js-apis-file-fs.md#fileiostat) to create a **Stat** instance. |
| [Stream](arkts-corefile-stream-i.md) | Provides API for stream operations. Before calling any API of **Stream**, you need to create a **Stream** instance by using [fileIo.createStream](../../../../reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatestream) or [fileIo.fdopenStream](../../../../reference/apis-core-file-kit/js-apis-file-fs.md#fileiofdopenstream). |
| [WatchEvent](arkts-corefile-watchevent-i.md) | Defines the event to observe. |
| [WatchEventListener](arkts-corefile-watcheventlistener-i.md) | (event: WatchEvent): void Provides APIs for observing events. |
| [Watcher](arkts-corefile-watcher-i.md) | Provides APIs for observing the changes of files or directories. Before using the APIs of **Watcher**, call **createWatcher()** to create a **Watcher** object. |
| [WriteOptions](arkts-corefile-writeoptions-i.md) | Defines the options used in **write()**. It inherits from [Options](arkts-corefile-options-i.md#options). |
| [WriteStreamOptions](arkts-corefile-writestreamoptions-i.md) | Defines the options used in **createWriteStream()**. |

### Enums

| Name | Description |
| --- | --- |
| [AccessFlagType](arkts-corefile-accessflagtype-e.md) | Enumerates the locations of the file to verify. |
| [AccessModeType](arkts-corefile-accessmodetype-e.md) | Enumerates the access modes to verify. If this parameter is left blank, the system checks whether the file exists. |
| [LocationType](arkts-corefile-locationtype-e.md) | Enumerates the file locations. |
| [MappingMode](arkts-corefile-mappingmode-e.md) | Enumerated type of the file memory mapping mode, which can be used by the mmap API. |
| [WhenceType](arkts-corefile-whencetype-e.md) | Enumerates the types of the relative offset position used in **lseek()**. |

### Types

| Name | Description |
| --- | --- |
| [ProgressListener](arkts-corefile-progresslistener-t.md) | Listener used to observe the copy progress. |

