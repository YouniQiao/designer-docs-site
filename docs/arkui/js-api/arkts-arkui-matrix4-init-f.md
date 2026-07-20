# init

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## init

```TypeScript
function init(
    options: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  ): Matrix4Transit
```

Matrix constructor, which is used to create a 4 x 4 matrix with the input parameters. Column-major order is used.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-matrix4-function init(
    options: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  ): Matrix4Transit--><!--Device-matrix4-function init(
    options: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  ): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number,       number     ] | Yes | A number array whose length is 16 (4 x 4). For details, see **4 x 4 matrix description**.<br>Value range of each number: (-∞, +∞)<br>Default value:<br>[1, 0, 0, 0,<br>0, 1, 0, 0,<br>0, 0, 1, 0,<br>0, 0, 0, 1] |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | 4 x 4 matrix object created based on the input parameters. |

