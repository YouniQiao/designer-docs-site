# Watcher

Watcher是文件变化监听的实例，调用Watcher.stop()方法（同步或异步）来停止文件监听。

**Since:** 7

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:Watcher

**System capability:** SystemCapability.FileManagement.File.FileIO

## stop

```TypeScript
stop(): Promise<void>
```

关闭watcher监听，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:Watcher.stop

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | return Promise |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let watcher = fileio.createWatcher(filePath, 1, (err: BusinessError, event: number) => {
  console.info("event: " + event + "errmsg: " + JSON.stringify(err));
});
watcher.stop().then(() => {
  console.info("close watcher succeed");
});

```

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

关闭watcher监听，使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:Watcher.stop

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes |  |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let watcher = fileio.createWatcher(filePath, 1, (err: BusinessError, event: number) => {
  console.info("event: " + event + "errmsg: " + JSON.stringify(err));
});
watcher.stop(() => {
  console.info("close watcher succeed");
})

```

