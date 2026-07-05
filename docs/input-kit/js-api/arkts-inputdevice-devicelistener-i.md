# DeviceListener

描述输入设备热插拔的信息。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## Modules to Import

```TypeScript
import { inputDevice } from '@kit.InputKit';
```

## type

```TypeScript
type: ChangedType
```

输入设备插入或者移除。

**Type:** ChangedType

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## deviceId

```TypeScript
deviceId: int
```

输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

