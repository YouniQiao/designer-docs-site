# Watcher

Listens for file change. You can call the **Watcher.stop()** method synchronously or asynchronously to stop the listening.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [fs:Watcher](arkts-corefile-file-fs-watcher-i.md)

<!--Device-unnamed-declare interface Watcher--><!--Device-unnamed-declare interface Watcher-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

## stop

```TypeScript
stop(): Promise<void>
```

Stops the **watcher** instance. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [stop](arkts-corefile-file-fs-watcher-i.md#stop-1)

<!--Device-Watcher-stop(): Promise<void>--><!--Device-Watcher-stop(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | return Promise |

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

Stops the **watcher** instance. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [stop](arkts-corefile-file-fs-watcher-i.md#stop-1)

<!--Device-Watcher-stop(callback: AsyncCallback<void>): void--><!--Device-Watcher-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when **watcher** is stopped asynchronously. |

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

