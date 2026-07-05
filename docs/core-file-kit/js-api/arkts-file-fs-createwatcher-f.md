# createWatcher

## createWatcher

```TypeScript
declare function createWatcher(path: string, events: number, listener: WatchEventListener): Watcher
```

创建Watcher对象，监听文件或目录变动。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 监听文件或目录的沙箱路径。 |
| events | number | Yes | 监听变动的事件集，多个事件通过或(\|)的方式进行集合。 - 0x1: IN_ACCESS， 文件被访问。 - 0x2: IN_MODIFY，文件内容被修改。- 0x4: IN_ATTRIB，文件元数据被修改。 - 0x8: IN_CLOSE_WRITE，文件在打开时进行了写操作，然后被关闭。 - 0x10: IN_CLOSE_NOWRITE，文件或目录在打开时未  进行写操作，然后被关闭。 - 0x20: IN_OPEN，文件或目录被打开。 - 0x40: IN_MOVED_FROM，监听目录中文件被移动走。 - 0x80: IN_MOVED_TO，监听目录中文  件被移动过来。 - 0x100: IN_CREATE，监听目录中文件或子目录被创建。 - 0x200: IN_DELETE，监听目录中文件或子目录被删除。 - 0x400: IN_DELETE_SELF  ，监听的目录被删除，删除后监听停止。 - 0x800: IN_MOVE_SELF，监听的文件或目录被移动，移动后监听继续。 - 0xfff: IN_ALL_EVENTS，监听以上所有事件。 |
| listener | WatchEventListener | Yes | 监听事件发生后的回调。监听事件每发生一次，回调一次。 |

**Return value:**

| Type | Description |
| --- | --- |
| Watcher | 返回Watcher对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900015 | File exists |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900021 | File table overflow |
| 13900022 | Too many open files |
| 13900025 | No space left on device |
| 13900030 | File name too long |
| 13900042 | Unknown error |

