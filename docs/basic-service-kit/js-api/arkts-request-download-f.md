# download

## download

```TypeScript
function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void
```

创建并启动一个下载任务，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.downloadFile(context:

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | DownloadConfig | Yes | 下载的配置信息。 |
| callback | AsyncCallback&lt;DownloadTask> | Yes | 回调函数。当下载任务成功，err为undefined，data为获取到的DownloadTask对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
let downloadTask: request.DownloadTask;
// Replace the URL with the HTTP address of the real server.
request.download({ url: 'https://xxxx/xxxxx.hap', 
filePath: 'xxx/xxxxx.hap'}, (err: BusinessError, data: request.DownloadTask) => {
  if (err) {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  downloadTask = data;
});

```

## download

```TypeScript
function download(config: DownloadConfig): Promise<DownloadTask>
```

创建并启动一个下载任务，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.downloadFile(context:

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | DownloadConfig | Yes | 下载的配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DownloadTask> | 使用Promise方式，异步返回下载任务DownloadTask的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
let downloadTask: request.DownloadTask;
// Replace the URL with the HTTP address of the real server.
request.download({ url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
  downloadTask = data;
}).catch((err: BusinessError) => {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
})

```

