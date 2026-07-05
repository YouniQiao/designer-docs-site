# DownloadProgressCallback

```TypeScript
export type DownloadProgressCallback = (receivedSize: long, totalSize: long) => void
```

The callback function for the download progress event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| receivedSize | long | Yes | the length of downloaded data, in bytes. |
| totalSize | long | Yes | the length of data expected to be downloaded, in bytes. |

