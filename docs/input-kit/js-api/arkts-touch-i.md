# Touch

触屏点信息。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { SourceType,ToolType,TouchEvent,FixedMode,KeyAction,Touch } from '@kit.InputKit';
```

## globalY

```TypeScript
globalY?: int
```

该触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的 [TouchEventData.useGlobalCoordinate](arkts-inputeventclient-toucheventdata-i-sys.md#TouchEventData)为 true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的Y坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

## globalX

```TypeScript
globalX?: int
```

该触屏输入事件以主屏左上角为原点的全局坐标系的X坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的 [TouchEventData.useGlobalCoordinate](arkts-inputeventclient-toucheventdata-i-sys.md#TouchEventData)为 true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的X坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

## rawY

```TypeScript
rawY: int
```

输入设备上的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## rawX

```TypeScript
rawX: int
```

输入设备上的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## windowY

```TypeScript
windowY: int
```

触屏所在窗口左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## windowX

```TypeScript
windowX: int
```

触屏所在窗口左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## tiltY

```TypeScript
tiltY: int
```

相对XZ平面的角度，单位为度，取值的范围[-90, 90]，其中正值是向下倾斜。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolHeight

```TypeScript
toolHeight: int
```

工具区域高度，单位为像素（px）。当前仅支持整数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressure

```TypeScript
pressure: double
```

压力值，取值范围是[0.0, 1.0]，0.0表示不支持。

**Type:** double

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolType

```TypeScript
toolType: ToolType
```

工具类型。

**Type:** ToolType

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## tiltX

```TypeScript
tiltX: int
```

相对YZ平面的角度，单位为度，取值的范围[-90, 90]，其中正值是向右倾斜。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolWidth

```TypeScript
toolWidth: int
```

工具区域宽度，单位为像素（px）。当前仅支持整数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolX

```TypeScript
toolX: int
```

工具区域的中心点以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolY

```TypeScript
toolY: int
```

工具区域的中心点以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressedTime

```TypeScript
pressedTime: long
```

按下时间戳，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## blobId

```TypeScript
blobId?: int
```

触摸点属性标识。当前仅支持单指触摸：左手触摸为1，右手触摸为2。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## fixedDisplayX

```TypeScript
fixedDisplayX?: int
```

适配单手模式下screenX坐标的修正值，单位为像素（px）。

**Type:** int

**Since:** 19

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## width

```TypeScript
width: int
```

触屏区域的宽度，单位为像素（px）。当前仅支持整数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## fixedDisplayY

```TypeScript
fixedDisplayY?: int
```

适配单手模式下screenY坐标的修正值，单位为像素（px）。

**Type:** int

**Since:** 19

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## id

```TypeScript
id: int
```

触屏输入事件ID。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## screenX

```TypeScript
screenX: int
```

该触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## height

```TypeScript
height: int
```

触屏区域的高度，单位为像素（px）。当前仅支持整数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## screenY

```TypeScript
screenY: int
```

该触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

