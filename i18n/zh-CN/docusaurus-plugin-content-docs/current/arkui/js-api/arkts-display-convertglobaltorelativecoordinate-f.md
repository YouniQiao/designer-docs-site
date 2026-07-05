# convertGlobalToRelativeCoordinate

## convertGlobalToRelativeCoordinate

```TypeScript
function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition
```

将主屏左上角为原点的全局坐标转换成displayId指定屏幕左上角为原点的相对坐标。若未传入displayId，默认转换为全局坐标所在屏幕的相对坐标系。若全局坐标不在任何屏幕上，默认转换成主屏的相对坐标。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | Position | 是 | 需要转化为相对坐标的全局坐标。 |
| displayId | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RelativePosition | 返回对应屏幕的相对坐标。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

**示例：**

```TypeScript
// 定义需要转换的全局坐标
let position: display.Position = {
    x: 100,
    y: 200
};

try {
  // 将全局坐标转换为相对坐标
  let relPos: display.RelativePosition = display.convertGlobalToRelativeCoordinate(position, 0);
  console.info(`The relative coordinate is ${relPos.displayId}, ${relPos.position.x}, ${relPos.position.y}`)
} catch (exception) {
  console.error(`Failed to convert the global coordinate to the relative coordinate. Code: ${exception.code}, message: ${exception.message}`);
}

```

