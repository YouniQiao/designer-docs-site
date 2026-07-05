# @ohos.fileio

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [fileIO](arkts-fileio-n.md) | fileio |

### Functions

| Name | Description |
| --- | --- |
| [access](arkts-fileio-access-f.md#access-1) | 检查当前进程是否可访问某文件，使用Promise异步回调。 |
| [access](arkts-fileio-access-f.md#access-2) | 检查当前进程是否可访问某文件，使用callback异步回调。 |
| [access](arkts-fileio-access-f.md#access-3) | 检查当前进程是否可访问某文件，使用callback异步回调。 |
| [accessSync](arkts-fileio-accesssync-f.md#accessSync-1) | 以同步方法检查当前进程是否可访问某文件。 |
| [chmod](arkts-fileio-chmod-f.md#chmod-1) | 改变文件权限，使用Promise异步回调。 |
| [chmod](arkts-fileio-chmod-f.md#chmod-2) | 改变文件权限，使用callback异步回调。 |
| [chmodSync](arkts-fileio-chmodsync-f.md#chmodSync-1) | 以同步方法改变文件权限。 |
| [chown](arkts-fileio-chown-f.md#chown-1) | 基于文件路径改变文件所有者，使用Promise异步回调。 |
| [chown](arkts-fileio-chown-f.md#chown-2) | 基于文件路径改变文件所有者，使用callback异步回调。 |
| [chownSync](arkts-fileio-chownsync-f.md#chownSync-1) | 以同步的方法基于文件路径改变文件所有者。 |
| [close](arkts-fileio-close-f.md#close-1) | 关闭文件，使用Promise异步回调。 |
| [close](arkts-fileio-close-f.md#close-2) | 关闭文件，使用callback异步回调。 |
| [closeSync](arkts-fileio-closesync-f.md#closeSync-1) | 以同步方法关闭文件。 |
| [copyFile](arkts-fileio-copyfile-f.md#copyFile-1) | 复制文件，使用Promise异步回调。 |
| [copyFile](arkts-fileio-copyfile-f.md#copyFile-2) | copyFile. |
| [copyFile](arkts-fileio-copyfile-f.md#copyFile-3) | 复制文件，使用callback异步回调。 |
| [copyFileSync](arkts-fileio-copyfilesync-f.md#copyFileSync-1) | 以同步方法复制文件。 |
| [createStream](arkts-fileio-createstream-f.md#createStream-1) | 基于文件路径打开文件流，使用Promise异步回调。 |
| [createStream](arkts-fileio-createstream-f.md#createStream-2) | 基于文件路径打开文件流，使用callback异步回调。 |
| [createStreamSync](arkts-fileio-createstreamsync-f.md#createStreamSync-1) | 以同步方法基于文件路径打开文件流。 |
| [createWatcher](arkts-fileio-createwatcher-f.md#createWatcher-1) | 监听文件或者目录的变化，使用callback异步回调。 |
| [fchmod](arkts-fileio-fchmod-f.md#fchmod-1) | 基于文件描述符改变文件权限，使用Promise异步回调。 |
| [fchmod](arkts-fileio-fchmod-f.md#fchmod-2) | 基于文件描述符改变文件权限，使用callback异步回调。 |
| [fchmodSync](arkts-fileio-fchmodsync-f.md#fchmodSync-1) | 以同步方法基于文件描述符改变文件权限。 |
| [fchown](arkts-fileio-fchown-f.md#fchown-1) | 基于文件描述符改变文件所有者，使用Promise异步回调。 |
| [fchown](arkts-fileio-fchown-f.md#fchown-2) | 基于文件描述符改变文件所有者，使用callback异步回调。 |
| [fchownSync](arkts-fileio-fchownsync-f.md#fchownSync-1) | 以同步方法基于文件描述符改变文件所有者。 |
| [fdatasync](arkts-fileio-fdatasync-f.md#fdatasync-1) | 实现文件内容数据同步，使用Promise异步回调。 |
| [fdatasync](arkts-fileio-fdatasync-f.md#fdatasync-2) | 实现文件内容数据同步，使用callback异步回调。 |
| [fdatasyncSync](arkts-fileio-fdatasyncsync-f.md#fdatasyncSync-1) | 以同步方法实现文件内容数据同步。 |
| [fdopenStream](arkts-fileio-fdopenstream-f.md#fdopenStream-1) | 基于文件描述符打开文件流，使用Promise异步回调。 |
| [fdopenStream](arkts-fileio-fdopenstream-f.md#fdopenStream-2) | 基于文件描述符打开文件流，使用callback异步回调。 |
| [fdopenStreamSync](arkts-fileio-fdopenstreamsync-f.md#fdopenStreamSync-1) | 以同步方法基于文件描述符打开文件流。 |
| [fstat](arkts-fileio-fstat-f.md#fstat-1) | 基于文件描述符获取文件状态信息，使用Promise异步回调。 |
| [fstat](arkts-fileio-fstat-f.md#fstat-2) | 基于文件描述符获取文件状态信息，使用callback异步回调。 |
| [fstatSync](arkts-fileio-fstatsync-f.md#fstatSync-1) | 以同步方法基于文件描述符获取文件状态信息。 |
| [fsync](arkts-fileio-fsync-f.md#fsync-1) | 同步文件数据，使用Promise异步回调。 |
| [fsync](arkts-fileio-fsync-f.md#fsync-2) | 同步文件数据，使用callback异步回调。 |
| [fsyncSync](arkts-fileio-fsyncsync-f.md#fsyncSync-1) | 以同步方法同步文件数据。 |
| [ftruncate](arkts-fileio-ftruncate-f.md#ftruncate-1) | 基于文件描述符截断文件，使用Promise异步回调。 |
| [ftruncate](arkts-fileio-ftruncate-f.md#ftruncate-2) | 基于文件描述符截断文件，使用callback异步回调。 |
| [ftruncate](arkts-fileio-ftruncate-f.md#ftruncate-3) | 基于文件描述符截断文件，使用callback异步回调。 |
| [ftruncateSync](arkts-fileio-ftruncatesync-f.md#ftruncateSync-1) | 以同步方法基于文件描述符截断文件。 |
| [hash](arkts-fileio-hash-f.md#hash-1) | 计算文件的哈希值，使用Promise异步回调。 |
| [hash](arkts-fileio-hash-f.md#hash-2) | 计算文件的哈希值，使用callback异步回调。 |
| [lchown](arkts-fileio-lchown-f.md#lchown-1) | 基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是符号链接所指向的实际文件，使用Promise异步回调。 |
| [lchown](arkts-fileio-lchown-f.md#lchown-2) | 基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是更改符号链接所指向的实际文件，使用callback异步回调。 |
| [lchownSync](arkts-fileio-lchownsync-f.md#lchownSync-1) | 以同步方法基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是更改符号链接所指向的实际文件。 |
| [lstat](arkts-fileio-lstat-f.md#lstat-1) | 获取链接信息，使用Promise异步回调。 |
| [lstat](arkts-fileio-lstat-f.md#lstat-2) | 获取链接信息，使用callback异步回调。 |
| [lstatSync](arkts-fileio-lstatsync-f.md#lstatSync-1) | 以同步方法获取链接信息。 |
| [mkdir](arkts-fileio-mkdir-f.md#mkdir-1) | 创建目录，使用Promise异步回调。 |
| [mkdir](arkts-fileio-mkdir-f.md#mkdir-2) | 创建目录，使用callback异步回调。 |
| [mkdir](arkts-fileio-mkdir-f.md#mkdir-3) | 创建目录，使用callback异步回调。 |
| [mkdirSync](arkts-fileio-mkdirsync-f.md#mkdirSync-1) | 以同步方法创建目录。 |
| [mkdtemp](arkts-fileio-mkdtemp-f.md#mkdtemp-1) | 创建临时目录，使用Promise异步回调。 |
| [mkdtemp](arkts-fileio-mkdtemp-f.md#mkdtemp-2) | 创建临时目录，使用callback异步回调。 |
| [mkdtempSync](arkts-fileio-mkdtempsync-f.md#mkdtempSync-1) | 以同步的方法创建临时目录。 |
| [open](arkts-fileio-open-f.md#open-1) | 打开文件，使用Promise异步回调。 |
| [open](arkts-fileio-open-f.md#open-2) | 打开文件，使用callback异步回调。 |
| [open](arkts-fileio-open-f.md#open-3) | 打开文件，使用callback异步回调。 |
| [open](arkts-fileio-open-f.md#open-4) | 打开文件，使用callback异步回调。 |
| [openSync](arkts-fileio-opensync-f.md#openSync-1) | 以同步方法打开文件。 |
| [opendir](arkts-fileio-opendir-f.md#opendir-1) | 打开文件目录，使用Promise异步回调。 |
| [opendir](arkts-fileio-opendir-f.md#opendir-2) | 打开文件目录，使用callback异步回调。 |
| [opendirSync](arkts-fileio-opendirsync-f.md#opendirSync-1) | 以同步方法打开文件目录。 |
| [read](arkts-fileio-read-f.md#read-1) | 从文件读取数据，使用Promise异步回调。 |
| [read](arkts-fileio-read-f.md#read-2) | 从文件读取数据，使用callback异步回调。 |
| [read](arkts-fileio-read-f.md#read-3) | 从文件读取数据，使用callback异步回调。 |
| [readSync](arkts-fileio-readsync-f.md#readSync-1) | 以同步方法从文件读取数据。 |
| [readText](arkts-fileio-readtext-f.md#readText-1) | 基于文本方式读取文件（即直接读取文件的文本内容），使用Promise异步回调。 |
| [readText](arkts-fileio-readtext-f.md#readText-2) | 基于文本方式读取文件（即直接读取文件的文本内容），使用callback异步回调。 |
| [readTextSync](arkts-fileio-readtextsync-f.md#readTextSync-1) | 以同步方法基于文本方式读取文件（即直接读取文件的文本内容）。 |
| [rename](arkts-fileio-rename-f.md#rename-1) | 重命名文件，使用Promise异步回调。 |
| [rename](arkts-fileio-rename-f.md#rename-2) | 重命名文件，使用callback异步回调。 |
| [renameSync](arkts-fileio-renamesync-f.md#renameSync-1) | 以同步方法重命名文件。 |
| [rmdir](arkts-fileio-rmdir-f.md#rmdir-1) | 删除目录，使用Promise异步回调。 |
| [rmdir](arkts-fileio-rmdir-f.md#rmdir-2) | 删除目录，使用callback异步回调。 |
| [rmdirSync](arkts-fileio-rmdirsync-f.md#rmdirSync-1) | 以同步方法删除目录。 |
| [stat](arkts-fileio-stat-f.md#stat-1) | 获取文件信息，使用Promise异步回调。 |
| [stat](arkts-fileio-stat-f.md#stat-2) | 获取文件信息，使用callback异步回调。 |
| [statSync](arkts-fileio-statsync-f.md#statSync-1) | 以同步方法获取文件的信息。 |
| [symlink](arkts-fileio-symlink-f.md#symlink-1) | 基于文件路径创建符号链接，使用Promise异步回调。 |
| [symlink](arkts-fileio-symlink-f.md#symlink-2) | 基于文件路径创建符号链接，使用callback异步回调。 |
| [symlinkSync](arkts-fileio-symlinksync-f.md#symlinkSync-1) | 以同步的方法基于文件路径创建符号链接。 |
| [truncate](arkts-fileio-truncate-f.md#truncate-1) | 基于文件路径截断文件，使用Promise异步回调。 |
| [truncate](arkts-fileio-truncate-f.md#truncate-2) | 基于文件路径截断文件，使用callback异步回调。 |
| [truncate](arkts-fileio-truncate-f.md#truncate-3) | 基于文件路径截断文件，使用callback异步回调。 |
| [truncateSync](arkts-fileio-truncatesync-f.md#truncateSync-1) | 以同步方法基于文件路径截断文件。 |
| [unlink](arkts-fileio-unlink-f.md#unlink-1) | 删除文件，使用Promise异步回调。 |
| [unlink](arkts-fileio-unlink-f.md#unlink-2) | 删除文件，使用callback异步回调。 |
| [unlinkSync](arkts-fileio-unlinksync-f.md#unlinkSync-1) | 以同步方法删除文件。 |
| [write](arkts-fileio-write-f.md#write-1) | 将数据写入文件，使用Promise异步回调。 |
| [write](arkts-fileio-write-f.md#write-2) | 将数据写入文件，使用callback异步回调。 |
| [write](arkts-fileio-write-f.md#write-3) | 将数据写入文件，使用callback异步回调。 |
| [writeSync](arkts-fileio-writesync-f.md#writeSync-1) | 以同步方法将数据写入文件。 |

### Interfaces

| Name | Description |
| --- | --- |
| [Dir](arkts-dir-i.md) | 管理目录，在调用Dir的方法前，需要先通过opendir方法（同步或异步）来构建一个Dir实例。 |
| [Dirent](arkts-dirent-i.md) | 在调用Dirent的方法前，需要先通过[dir.read()]{@link read}方法（同步或异步）来构建一个Dirent实例。 |
| [ReadOut](arkts-readout-i.md) | 仅用于read方法，获取文件的读取结果。 |
| [Stat](arkts-stat-i.md) | 文件具体信息，在调用Stat的方法前，需要先通过[stat()]{@link stat}方法（同步或异步）来构建一个Stat实例。 |
| [Stream](arkts-stream-i.md) | 文件流，在调用Stream的方法前，需要先通过createStream()方法（同步或异步）来构建一个Stream实例。 |
| [Watcher](arkts-watcher-i.md) | Watcher是文件变化监听的实例，调用Watcher.stop()方法（同步或异步）来停止文件监听。 |

