# @ohos.url

URL代表的是统一资源定位符，本模块提供了常用的工具函数，实现了解析URL字符串和构造[URL]{@link url.URL}对象等功能。 > **说明：** > > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。

**起始版本：** 7

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { url } from '@kit.ArkTS';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [URL](arkts-url-url-c.md) | 用于解析、构造、规范、编码对应的URL字符串。 |
| [URLParams](arkts-url-urlparams-c.md) | URLParams是一个用于解析、构造和操作URL参数的实用类。该类提供了统一的接口来处理参数维度（如查询参数、路径参数等）。 |
| [URLSearchParams](arkts-url-urlsearchparams-c.md) | URLSearchParams接口定义了一些处理URL查询字符串的实用方法，从API version 9开始废弃，建议使用[URLParams]{@link url.URLParams}。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [UrlCbFn](arkts-url-urlcbfn-t.md) | [forEach]{@link url.URLParams#forEach(callbackFn: UrlCbFn)}函数所需的回调函数。 |

