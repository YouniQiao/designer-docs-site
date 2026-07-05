# getTimezoneSync

## getTimezoneSync

```TypeScript
function getTimezoneSync(): string
```

获取系统时区，使用同步方式。

**Since:** 10

**System capability:** SystemCapability.MiscServices.Time

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回系统时区。具体可见[支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#支持的系统时区)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let timezone: string = systemDateTime.getTimezoneSync();
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get timezone. message: ${error.message}, code: ${error.code}`);
}

```

