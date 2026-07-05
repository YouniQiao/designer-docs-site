# PathIterator

表示路径操作迭代器，可通过遍历迭代器读取path的操作指令。 > **说明：** > > - 本Class首批接口从API version 18开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## constructor

```TypeScript
constructor(path: Path)
```

构造迭代器并绑定路径。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path | Yes | 迭代器绑定的路径对象。 |

## hasNext

```TypeScript
hasNext(): boolean
```

判断路径操作迭代器中是否还有下一个操作。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 判断路径操作迭代器中是否还有下一个操作。true表示有，false表示没有。 |

## next

```TypeScript
next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb
```

返回当前路径的下一个操作，并将迭代器置于该操作。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| points | Array&lt;common2D.Point> | Yes | 坐标点数组，长度必须至少为偏移量加4，以确保能容纳所有类型的路径数据。操作执行后，该数组会被覆盖。填入的坐标点数量取决于操作类型，其中，  MOVE填入1个坐标点，LINE填入2个坐标点，QUAD填入3个坐标点，CONIC填入3个坐标点 + 1个权重值（共3.5组），CUBIC填入4个坐标点，CLOSE和DONE不填入任何点。 |
| offset | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | 迭代器包含的路径操作类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## next

```TypeScript
next(points: Array<common2D.Point>, offset?: int): PathIteratorVerb | undefined
```

Retrieves the next operation in this path and moves the iterator to that operation.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| points | Array&lt;common2D.Point> | Yes | Indicates the point array. |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | Returns the next verb in this iterator's path. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## peek

```TypeScript
peek(): PathIteratorVerb
```

返回当前路径的下一个操作，迭代器保持在原操作。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | 迭代器包含的路径操作类型。 |

## peek

```TypeScript
peek(): PathIteratorVerb | undefined
```

Retrieves the next operation in this path, without moving the iterator.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | Returns the next verb in the iteration. |

