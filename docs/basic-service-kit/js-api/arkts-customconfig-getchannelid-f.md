# getChannelId

## getChannelId

```TypeScript
function getChannelId(): string
```

获取应用的预装渠道号。

**Since:** 12

**Atomic service API:** From API version 13 this API can be used in atomic services.

**System capability:** SystemCapability.Customization.CustomConfig

**Return value:**

| Type | Description |
| --- | --- |
| string | 渠道号 |

**Example**

```TypeScript
import { customConfig } from '@kit.BasicServicesKit';

let channelId: string = customConfig.getChannelId();
console.info('app channelId is ' + channelId);

```

