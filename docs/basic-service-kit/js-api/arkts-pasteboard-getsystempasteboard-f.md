# getSystemPasteboard

## getSystemPasteboard

```TypeScript
function getSystemPasteboard(): SystemPasteboard
```

Obtains **SystemPasteboard** object.

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

**Return value:**

| Type | Description |
| --- | --- |
| SystemPasteboard | SystemPasteboard object. |

**Example**

```TypeScript
// Obtain the SystemPasteboard object.
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();

```

