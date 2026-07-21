# Dirent

Provides information about files and directories. Before calling an API of the **Dirent** class, use [dir.read()](arkts-corefile-fileio-read-f.md#read-1) synchronously or asynchronously to create a **Dirent** instance.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-unnamed-declare interface Dirent--><!--Device-unnamed-declare interface Dirent-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

<a id="isblockdevice"></a>
## isBlockDevice

```TypeScript
isBlockDevice(): boolean
```

Checks whether this directory entry is a block special file. A block special file supports access by block only,and it is cached when accessed.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isBlockDevice(): boolean--><!--Device-Dirent-isBlockDevice(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a block special file; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isBLockDevice = dir.readSync().isBlockDevice();

```

<a id="ischaracterdevice"></a>
## isCharacterDevice

```TypeScript
isCharacterDevice(): boolean
```

Checks whether this directory entry is a character special file. A character special file supports random access,and it is not cached when accessed.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isCharacterDevice(): boolean--><!--Device-Dirent-isCharacterDevice(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a character special file; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isCharacterDevice = dir.readSync().isCharacterDevice(); 

```

<a id="isdirectory"></a>
## isDirectory

```TypeScript
isDirectory(): boolean
```

Checks whether this directory entry is a directory.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isDirectory(): boolean--><!--Device-Dirent-isDirectory(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a directory; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isDirectory = dir.readSync().isDirectory(); 

```

<a id="isfifo"></a>
## isFIFO

```TypeScript
isFIFO(): boolean
```

Checks whether this directory entry is a named pipe (also called FIFO). Named pipes are used for inter-process communication.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isFIFO(): boolean--><!--Device-Dirent-isFIFO(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a named pipe; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isFIFO = dir.readSync().isFIFO(); 

```

<a id="isfile"></a>
## isFile

```TypeScript
isFile(): boolean
```

Checks whether this directory entry is a regular file.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isFile(): boolean--><!--Device-Dirent-isFile(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a regular file; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isFile = dir.readSync().isFile(); 

```

<a id="issocket"></a>
## isSocket

```TypeScript
isSocket(): boolean
```

Checks whether this directory entry is a socket.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isSocket(): boolean--><!--Device-Dirent-isSocket(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a socket; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isSocket = dir.readSync().isSocket(); 

```

<a id="issymboliclink"></a>
## isSymbolicLink

```TypeScript
isSymbolicLink(): boolean
```

Checks whether this directory entry is a symbolic link.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-isSymbolicLink(): boolean--><!--Device-Dirent-isSymbolicLink(): boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if it is a symbolic link; returns **false** otherwise. |

**Example**

```TypeScript
let dir = fileio.opendirSync(pathDir);
let isSymbolicLink = dir.readSync().isSymbolicLink();

```

## name

```TypeScript
readonly name: string
```

Directory entry name.

**Type:** string

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

<!--Device-Dirent-readonly name: string--><!--Device-Dirent-readonly name: string-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

