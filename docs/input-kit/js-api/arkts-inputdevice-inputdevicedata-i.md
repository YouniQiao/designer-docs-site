# InputDeviceData

描述输入设备的信息。

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## Modules to Import

```TypeScript
import { inputDevice } from '@kit.InputKit';
```

## axisRanges

```TypeScript
axisRanges: Array<AxisRange>
```

输入设备的轴信息。

**Type:** Array<AxisRange>

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## bus

```TypeScript
bus: int
```

输入设备的总线类型，该值以输入设备上报为准。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## product

```TypeScript
product: int
```

输入设备的产品信息。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## sources

```TypeScript
sources: Array<SourceType>
```

输入设备的输入能力。包括键盘、鼠标、触摸屏、轨迹球、触控板、操纵杆等。

**Type:** Array<SourceType>

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## phys

```TypeScript
phys: string
```

输入设备的物理地址。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## vendor

```TypeScript
vendor: int
```

输入设备的厂商信息。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## uniq

```TypeScript
uniq: string
```

输入设备的唯一标识。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## name

```TypeScript
name: string
```

输入设备的名称。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## isVirtual

```TypeScript
isVirtual?: boolean
```

输入设备是否为虚拟设备。 true表示是虚拟设备，false表示是非虚拟设备。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## id

```TypeScript
id: int
```

输入设备的唯一标识，同一个物理设备反复插拔，设备ID可能会发生变化。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## version

```TypeScript
version: int
```

输入设备的版本信息。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## isLocal

```TypeScript
isLocal?: boolean
```

输入设备是否为本地设备。 true表示是本地设备，false表示是非本地设备。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

