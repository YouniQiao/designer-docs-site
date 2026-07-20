# getPorts (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## getPorts

```TypeScript
function getPorts(): Array<USBPort>
```

Obtains the list of all physical USB ports. When the developer mode is disabled, **undefined** may be returned if no device is connected. Check whether the return value of the API is empty.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getPortList()](arkts-basicservices-usbmanager-getportlist-f-sys.md#getportlist-1)

<!--Device-usbManager-function getPorts(): Array<USBPort>--><!--Device-usbManager-function getPorts(): Array<USBPort>-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<USBPort> | List of physical USB ports. |

