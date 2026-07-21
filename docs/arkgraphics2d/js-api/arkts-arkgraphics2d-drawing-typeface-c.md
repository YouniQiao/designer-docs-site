# Typeface

Describes the style of a typeface, such as SimSun or KaiTi.

> **NOTE**  
>  
> - This module uses the physical pixel unit, px.  
>  
> - The module operates under a single-threaded model. The caller needs to manage thread safety and context state  
> transitions.

**Since:** 11

<!--Device-drawing-class Typeface--><!--Device-drawing-class Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

<a id="getfamilyname"></a>
## getFamilyName

```TypeScript
getFamilyName(): string
```

Obtains the name of the typeface family, which is the name given to a collection of related typeface designs.

**Since:** 11

<!--Device-Typeface-getFamilyName(): string--><!--Device-Typeface-getFamilyName(): string-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| string | Family name. |

<a id="isbold"></a>
## isBold

```TypeScript
isBold(): boolean
```

Checks whether the font is bold.

**Since:** 23

<!--Device-Typeface-isBold(): boolean--><!--Device-Typeface-isBold(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. **true** if the font is bold; **false** otherwise. |

<a id="isitalic"></a>
## isItalic

```TypeScript
isItalic(): boolean
```

Checks whether the font is italic.

**Since:** 23

<!--Device-Typeface-isItalic(): boolean--><!--Device-Typeface-isItalic(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. **true** if the font is italic; **false** otherwise. |

<a id="makefromcurrent"></a>
## makeFromCurrent

```TypeScript
makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface
```

Constructs a typeface object from the current typeface and its arguments.

**Since:** 20

<!--Device-Typeface-makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface--><!--Device-Typeface-makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typefaceArguments | [TypefaceArguments](arkts-arkgraphics2d-drawing-typefacearguments-c.md) | Yes | TypefaceArguments for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| [Typeface](arkts-arkgraphics2d-drawing-typeface-c.md) | Typeface object. In abnormal cases, a null pointer is returned. |

<a id="makefromfile"></a>
## makeFromFile

```TypeScript
static makeFromFile(filePath: string): Typeface
```

Constructs a typeface from a file.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Typeface-static makeFromFile(filePath: string): Typeface--><!--Device-Typeface-static makeFromFile(filePath: string): Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | Path of the file. For details, see [Mappings Between Application Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths). |

**Return value:**

| Type | Description |
| --- | --- |
| [Typeface](arkts-arkgraphics2d-drawing-typeface-c.md) | Typeface object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="makefromfilewitharguments"></a>
## makeFromFileWithArguments

```TypeScript
static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface
```

Constructs a typeface from the typeface file path and arguments.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Typeface-static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface--><!--Device-Typeface-static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | Path of the file. For details, see [Mappings Between Application Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths). |
| typefaceArguments | [TypefaceArguments](arkts-arkgraphics2d-drawing-typefacearguments-c.md) | Yes | Typeface arguments. |

**Return value:**

| Type | Description |
| --- | --- |
| [Typeface](arkts-arkgraphics2d-drawing-typeface-c.md) | Typeface object. In abnormal cases, a null pointer is returned. |

<a id="makefromrawfile"></a>
## makeFromRawFile

```TypeScript
static makeFromRawFile(rawfile: Resource): Typeface
```

Constructs a typeface from a file, which must be stored in the **resources/rawfile** directory of the application project.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Typeface-static makeFromRawFile(rawfile: Resource): Typeface--><!--Device-Typeface-static makeFromRawFile(rawfile: Resource): Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | [Resource](../../apis-arkui/arkts-apis/arkts-arkui-resource-t.md) | Yes | Resource object corresponding to the file. Currently, only resource objects referenced in **$rawfile** format are supported. The corresponding format is **$rawfile('filePath')**, where **filePath** is the relative path of the file to the **resources/rawfile** directory in the project. If the file is stored in **resources/rawfile**, the reference format is **$rawfile('HarmonyOS_Sans_Bold.ttf')**. If the file is stored in a subdirectory, for example, in **resources/rawfile/ttf**, the reference format is **$rawfile('ttf/HarmonyOS_Sans_Bold.ttf')**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Typeface](arkts-arkgraphics2d-drawing-typeface-c.md) | Typeface object. In abnormal cases, a null pointer is returned. |

<a id="makefromrawfilewitharguments"></a>
## makeFromRawFileWithArguments

```TypeScript
static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface
```

Constructs a typeface from a file with typeface arguments, which must be stored in the **resources/rawfile** directory of the application project.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Typeface-static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface--><!--Device-Typeface-static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | [Resource](../../apis-arkui/arkts-apis/arkts-arkui-resource-t.md) | Yes | Resource object corresponding to the file. Currently, only resource objects referenced in **$rawfile** format are supported. The corresponding format is **$rawfile('filePath')**, where **filePath** is the relative path of the file to the **resources/rawfile** directory in the project. |
| typefaceArguments | [TypefaceArguments](arkts-arkgraphics2d-drawing-typefacearguments-c.md) | Yes | Typeface arguments. |

**Return value:**

| Type | Description |
| --- | --- |
| [Typeface](arkts-arkgraphics2d-drawing-typeface-c.md) | Typeface object. In abnormal cases, a null pointer is returned. |

