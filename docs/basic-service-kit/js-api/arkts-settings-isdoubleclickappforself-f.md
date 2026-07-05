# isDoubleClickAppForSelf

## isDoubleClickAppForSelf

```TypeScript
function isDoubleClickAppForSelf(): Promise<boolean>
```

1. Checks whether the application started by double-pressing the Down key is the application itself. 2. This API is triggered to check whether double-pressing the Down key starts the application itself.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Applications.Settings.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Check result.  {@code true} is returned if the specified application is started. Otherwise, {@code false} is returned. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';

settings.isDoubleClickAppForSelf().then((result: boolean) => {
  console.info(`isDoubleClickAppForSelf result: ${result}`);
})

```

