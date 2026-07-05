# getMinHeightSync

## getMinHeightSync

```TypeScript
function getMinHeightSync(): int
```

Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**Since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | the number returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
try {
  let minHeight = wallpaper.getMinHeightSync();
  console.info(`success to getMinHeightSync: ${JSON.stringify(minHeight)}`);
} catch (error) {
  console.error(`failed to getMinHeightSync. Code: ${error.code}, Message: ${error.message}`);
}

```

