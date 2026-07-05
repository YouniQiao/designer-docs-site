# PathIterator

Implements a path operation iterator. You can read path operation instructions by traversing the iterator. > **NOTE** > > - The initial APIs of this class are supported since API version 18. > > - This module uses the physical pixel unit, px. > > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state > transitions.

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@ohos.graphics.drawing';
```

## constructor

```TypeScript
constructor(path: Path)
```

Creates an iterator and binds it with a path.

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path | Yes | **Path** object bound to the iterator. |

## hasNext

```TypeScript
hasNext(): boolean
```

Checks whether there is any next operation in the path operation iterator.

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. **true** means yes; **false** otherwise. |

## next

```TypeScript
next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb
```

Retrieves the next operation in this path and moves the iterator to that operation.

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| points | Array&lt;common2D.Point&gt; | Yes | Array of coordinate points. The array length must be at least theoffset plus 4 to ensure that the array can hold all types of path data. After the operation is executed, thisarray is overwritten. The number of coordinate points to be filled depends on the operation type.Specifically, for **MOVE**, fill one coordinate; for **LINE**, fill two coordinates; for **QUAD**, fill threecoordinates; for **CONIC**, fill three coordinates and one weight value (a total of 3.5 groups); for**CUBIC**, fill four coordinates; for **CLOSE** and **DONE**, do not fill any coordinate points. |
| offset | number | No | Offset from the start of the array where writing begins. The default value is **0**.The value range is [0, size - 4], where **size** is the length of the coordinate point array. |

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | Path operation type contained in the iterator. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## peek

```TypeScript
peek(): PathIteratorVerb
```

Retrieves the next operation in this path, without moving the iterator.

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| PathIteratorVerb | Path operation type contained in the iterator. |

