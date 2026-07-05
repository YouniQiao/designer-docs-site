# isLocked

## isLocked

```TypeScript
function isLocked(): boolean
```

Checks whether the screen is currently locked.

**Since:** 9

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | returns true if the screen is currently locked, returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
let isLocked = screenLock.isLocked();

```

