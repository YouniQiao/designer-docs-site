# getPorts

## getPorts

```TypeScript
function getPorts(): Array<USBPort>
```

获取所有物理USB端口描述信息。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.getPorts

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;USBPort> | USB端口描述信息列表。 |

**Example**

```TypeScript
let ret = usb.getPorts();

```

