# JavaScriptProxy

定义要注入的JavaScript对象。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## controller

```TypeScript
controller: WebController | WebviewController
```

Controller.

**Type:** WebController | WebviewController

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## asyncMethodList

```TypeScript
asyncMethodList?: Array<string>
```

参与注册的应用侧JavaScript对象的异步方法。异步方法无法获取返回值。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## name

```TypeScript
name: string
```

注册对象的名称，与window中调用的对象名一致。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## permission

```TypeScript
permission?: string
```

permission configuration defining web page URLs that can access JavaScriptProxy methods. The configuration can be defined at two levels, object level and method level.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## methodList

```TypeScript
methodList: Array<string>
```

参与注册的应用侧JavaScript对象的同步方法。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## object

```TypeScript
object: object
```

参与注册的对象。

**Type:** object

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

