# TouchEventData

触屏注入描述信息。

**Since:** 11

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## touchEvent

```TypeScript
touchEvent: TouchEvent
```

触屏输入事件。

**Type:** TouchEvent

**Since:** 11

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## useGlobalCoordinate

```TypeScript
useGlobalCoordinate?: boolean
```

是否使用全局坐标来计算注入的触屏输入事件。默认值为false，取值为false表示使用以指定屏幕左上角为原点的相对坐标系的坐标来计算注入的触屏输入事件。取值为true表示使用以主屏左上角为原点的全局坐标系的坐标来计算注入的触屏 输入事件。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

