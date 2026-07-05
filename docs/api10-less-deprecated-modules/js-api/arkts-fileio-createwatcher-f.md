# createWatcher

## createWatcher

```TypeScript
declare function createWatcher(filename: string, events: number, callback: AsyncCallback<number>): Watcher
```

监听文件或者目录的变化，使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:createWatcher

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filename | string | Yes | 待监视文件的应用沙箱路径。 |
| events | number | Yes | -?1:?监听文件或者目录是否发生重命名。 -?2：监听文件或者目录内容的是否修改。 -?3：两者都有。 |
| callback | AsyncCallback&lt;number> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Watcher | Promise对象。返回文件变化监听的实例。 |

