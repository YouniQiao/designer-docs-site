# Typeface

字体，如宋体、楷体等。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## getFamilyName

```TypeScript
getFamilyName(): string
```

获取字体的族名，即一套字体设计的名称。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回字体的族名。 |

## getFamilyName

```TypeScript
getFamilyName(): string | undefined
```

Get the family name for this typeface.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| string | Family name. |

## isBold

```TypeScript
isBold(): boolean
```

检查字体是否加粗。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回当前字体是否加粗。true表示字体加粗，false表示字体未加粗。 |

## isItalic

```TypeScript
isItalic(): boolean
```

检查字体是否是斜体。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回当前字体是否是斜体。true表示字体是斜体，false表示字体不是斜体。 |

## makeFromCurrent

```TypeScript
makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface
```

基于当前字体结合字体属性构造新的字体对象。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typefaceArguments | TypefaceArguments | Yes | TypefaceArguments for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | 返回字体对象（异常情况下会返回空指针）。 |

## makeFromCurrent

```TypeScript
makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface | undefined
```

Generate typeface from current typeface and TypefaceArguments.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typefaceArguments | TypefaceArguments | Yes | TypefaceArguments for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | Typeface. |

## makeFromFile

```TypeScript
static makeFromFile(filePath: string): Typeface
```

从指定字体文件构造字体。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | 表示字体资源存放的路径。应用沙箱路径和真实物理路径的对应关系请参考  [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | 返回Typeface对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromFile

```TypeScript
static makeFromFile(filePath: string): Typeface | undefined
```

Constructs a typeface from a file.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | file path for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | Typeface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromFileWithArguments

```TypeScript
static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface
```

根据字体文件路径和字体属性构造新的字体。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | 表示字体资源存放的路径。应用沙箱路径和真实物理路径的对应关系请参考  [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系)。 |
| typefaceArguments | TypefaceArguments | Yes | 表示字体属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | 返回字体对象（异常情况下会返回空指针）。 |

## makeFromFileWithArguments

```TypeScript
static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface | undefined
```

Generate typeface from file and TypefaceArguments.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | file path for typeface. |
| typefaceArguments | TypefaceArguments | Yes | TypefaceArguments for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | Typeface. |

## makeFromRawFile

```TypeScript
static makeFromRawFile(rawfile: Resource): Typeface
```

使用指定的字体文件构造字体，其中要求指定的字体文件需保存在应用资源文件夹的rawfile路径下。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | Resource | Yes | 指定字体文件对应的资源对象。当前只支持``$rawfile``格式引用的资源对象，对应格式写为``$rawfile('filePath')``，其中filePath为  指定字体文件相对于工程中resources/rawfile目录的相对路径。如将字体文件直接存放在resources/rawfile目录下，则引用格式应写为：``$rawfile('  HarmonyOS_Sans_Bold.ttf')``；也可以创建子目录，将字体文件存放在resources/rawfile/ttf下，则引用格式应写为：``$rawfile('ttf/  HarmonyOS_Sans_Bold.ttf')``。 |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | 返回Typeface对象（异常情况下会返回空指针）。 |

## makeFromRawFile

```TypeScript
static makeFromRawFile(rawfile: Resource): Typeface | undefined
```

Constructs a typeface from a file, which must be stored in the resources/rawfile directory of the application project.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | Resource | Yes | Resource object corresponding to the file.  Currently, only resource objects referenced in rawfile format are supported.  The corresponding format is rawfile('filePath'),  where filePath is the relative path of the file to the resources/rawfile directory in the project.  If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').  If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,  the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf'). |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | Typeface. |

## makeFromRawFileWithArguments

```TypeScript
static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface
```

使用指定的字体文件和字体属性构造字体，其中要求指定的字体文件需保存在应用资源文件夹的rawfile路径下。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | Resource | Yes | 指定字体文件对应的资源对象。当前只支持``$rawfile``格式引用的资源对象，对应格式写为``$rawfile('filePath')``，其中filePath为  指定字体文件相对于工程中resources/rawfile目录的相对路径。 |
| typefaceArguments | TypefaceArguments | Yes | 表示字体属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | 返回字体对象（异常情况下会返回空指针）。 |

## makeFromRawFileWithArguments

```TypeScript
static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface | undefined
```

Generate typeface from Rawfile and TypefaceArguments.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | Resource | Yes | RawFile for typeface. |
| typefaceArguments | TypefaceArguments | Yes | TypefaceArguments for typeface. |

**Return value:**

| Type | Description |
| --- | --- |
| Typeface | Typeface. |

