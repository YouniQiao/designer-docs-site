# getLocalUpdater

## getLocalUpdater

```TypeScript
function getLocalUpdater(): LocalUpdater
```

获取本地升级对象。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| LocalUpdater | 本地升级对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
try {
  let localUpdater = update.getLocalUpdater();
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

