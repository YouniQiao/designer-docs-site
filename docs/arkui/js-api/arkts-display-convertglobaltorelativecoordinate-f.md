# convertGlobalToRelativeCoordinate

## convertGlobalToRelativeCoordinate

```TypeScript
function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition
```

将主屏左上角为原点的全局坐标转换成displayId指定屏幕左上角为原点的相对坐标。若未传入displayId，默认转换为全局坐标所在屏幕的相对坐标系。若全局坐标不在任何屏幕上，默认转换成主屏的相对坐标。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | Position | Yes | 需要转化为相对坐标的全局坐标。 |
| displayId | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| RelativePosition | 返回对应屏幕的相对坐标。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
// Define the global coordinates to convert.
let position: display.Position = {
    x: 100,
    y: 200
};

try {
  // Convert the global coordinates to relative coordinates.
  let relPos: display.RelativePosition = display.convertGlobalToRelativeCoordinate(position, 0);
  console.info(`The relative coordinate is ${relPos.displayId}, ${relPos.position.x}, ${relPos.position.y}`)
} catch (exception) {
  console.error(`Failed to convert the global coordinate to the relative coordinate. Code: ${exception.code}, message: ${exception.message}`);
}

```

