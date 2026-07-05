# NormalizerMode

```TypeScript
export enum NormalizerMode
```

Enumerates text normalization modes.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

## NFC

```TypeScript
NFC = 1
```

Normalization form C, characters are decomposed and then re-composed by canonical equivalence

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## NFD

```TypeScript
NFD = 2
```

Normalization form D, characters are decomposed by canonical equivalence

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## NFKC

```TypeScript
NFKC = 3
```

Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## NFKD

```TypeScript
NFKD = 4
```

Normalization form KD, characters are decomposed by compatibility

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

