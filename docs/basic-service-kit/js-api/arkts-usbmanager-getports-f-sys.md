# getPorts

## getPorts

```TypeScript
function getPorts(): Array<USBPort>
```

获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.getPortList()

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;USBPort> | USB端口描述信息列表。 |

