# SerialConfigs

Serial port communication configuration.

**Since:** 26.0.0

**System capability:** SystemCapability.BusManager.Serial

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## baudRate

```TypeScript
baudRate?: number
```

Baud rate.
The value must be an integer.
Value constraint: standard baud rates.
<br>Unit: bit/s
<br>Default value: 115200

**Type:** number

**Default:** 115200

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

Data bits.
<br>Default value: EIGHT

**Type:** DataBits

**Default:** EIGHT

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## parity

```TypeScript
parity?: Parity
```

Parity bit.
<br>Default value: NONE

**Type:** Parity

**Default:** NONE

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## rtscts

```TypeScript
rtscts?: boolean
```

Whether to enable hardware-based automatic flow control.
<br>Default value: false.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

Stop bits.

Default value: ONE

**Type:** StopBits

**Default:** ONE

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## xany

```TypeScript
xany?: boolean
```

Whether to enable XANY to control the flow.
<br>Default value: false

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## xoff

```TypeScript
xoff?: boolean
```

Whether to enable XOFF to control the reception of flows.
<br>Default value: false

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

## xon

```TypeScript
xon?: boolean
```

Whether to enable XON to control the sending of flows.
<br>Default value: false

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

