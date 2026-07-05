# create

## create

```TypeScript
function create(colorSpaceName: ColorSpace): ColorSpaceManager
```

创建标准色域对象。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpaceName | ColorSpace | Yes | 标准色域类型枚举值。 UNKNOWN与CUSTOM不可用于直接创建色域对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| ColorSpaceManager | 返回当前创建的色域对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

**Example**

```TypeScript
try {
  let colorSpace = colorSpaceManager.create(colorSpaceManager.ColorSpace.SRGB);
} catch (err) {
  console.error(`Failed to create SRGB colorSpace. Cause: ` + JSON.stringify(err));
}

```

## create

```TypeScript
function create(primaries: ColorSpacePrimaries, gamma: double): ColorSpaceManager
```

创建用户自定义色域对象。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primaries | ColorSpacePrimaries | Yes | 色域标准三原色。 |
| gamma | double | Yes | 色域gamma值，取值为大于0的浮点数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ColorSpaceManager | 返回当前创建的色域对象实例。  色域类型定义为[ColorSpace]colorSpaceManager.ColorSpace枚举值`CUSTOM`。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

**Example**

```TypeScript
try {
  let primaries: colorSpaceManager.ColorSpacePrimaries = {
    redX: 0.1,
    redY: 0.1,
    greenX: 0.2,
    greenY: 0.2,
    blueX: 0.3,
    blueY: 0.3,
    whitePointX: 0.4,
    whitePointY: 0.4
  };
  let gamma = 2.2;
  let colorSpace = colorSpaceManager.create(primaries, gamma);
} catch (err) {
  console.error(`Failed to create colorSpace with customized primaries and gamma. Cause: ` + JSON.stringify(err));
}

```

