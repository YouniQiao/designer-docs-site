# XMPTagType

```TypeScript
enum XMPTagType
```

表示XMP标签类型的枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.Core

## UNKNOWN

```TypeScript
UNKNOWN = 0
```

未知类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## STRING

```TypeScript
STRING = 1
```

字符串类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## UNORDERED_ARRAY

```TypeScript
UNORDERED_ARRAY = 2
```

无序数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Bag>。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## ORDERED_ARRAY

```TypeScript
ORDERED_ARRAY = 3
```

有序数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Seq>。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## ALTERNATE_ARRAY

```TypeScript
ALTERNATE_ARRAY = 4
```

备选数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Alt>。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## ALTERNATE_TEXT

```TypeScript
ALTERNATE_TEXT = 5
```

多语言文本类型。序列化时，此类型为XMP格式的xml:lang限定符组成的备选数组。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## STRUCTURE

```TypeScript
STRUCTURE = 6
```

结构体类型。不同于数组元素，结构体字段可以属于不同的命名空间。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

