# setGlobalTimeoutOptions

## setGlobalTimeoutOptions

```TypeScript
function setGlobalTimeoutOptions(options?: TimeoutOptions): void
```

Sets timeout configuration for all tasks. Used when task-specific timeout configuration is not configured.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TimeoutOptions | No |  |

**Example**

```TypeScript
try {
  // Set the global timeout options of a task.
  cacheDownload.setGlobalTimeoutOptions({
    networkCheckTimeout: 20,
    httpTotalTimeout: 60,
  })
  cacheDownload.download("https://www.example.com", {});
} catch (err) {
  console.error(`Failed to download the resource. err code: ${err?.code}, err message: ${err?.message}`);
}

```

