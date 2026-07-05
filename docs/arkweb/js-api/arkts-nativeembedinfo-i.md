# NativeEmbedInfo

提供同层标签的详细信息。

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## src

```TypeScript
src?: string
```

同层标签的src信息。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## width

```TypeScript
width?: number
```

同层标签的宽，单位为px。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## tag

```TypeScript
tag?: string
```

标签名，统一为大写字符。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## position

```TypeScript
position?: Position
```

同层标签相对于Web组件左上角为坐标原点的位置信息，此处区别于标准Position，单位为px。

**Type:** Position

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## id

```TypeScript
id?: string
```

同层标签的id信息。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## params

```TypeScript
params?: Map<string, string>
```

object标签包含的param标签键值对列表，该map本质为Object类型，请使用Object提供的方法操作该对象，即`embed.info?.param?.["name"]`。

**Type:** Map<string, string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## type

```TypeScript
type?: string
```

同层标签的type信息，统一为小写字符。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url?: string
```

同层标签的url信息。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## height

```TypeScript
height?: number
```

同层标签的高，单位为px。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

