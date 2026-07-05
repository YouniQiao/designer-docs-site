# getRestorer

## getRestorer

```TypeScript
function getRestorer(): Restorer
```

获取恢复出厂设置对象。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Restorer | 恢复出厂对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
try {
  let restorer = update.getRestorer();
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

