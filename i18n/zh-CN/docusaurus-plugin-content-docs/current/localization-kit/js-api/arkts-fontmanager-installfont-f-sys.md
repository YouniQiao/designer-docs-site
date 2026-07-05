# installFont

## installFont

```TypeScript
function installFont(path: string): Promise<int>
```

安装指定路径下的字体，使用promise异步回调。

**起始版本：** 19

**需要权限：** 

 ohos.permission.UPDATE_FONT

**系统能力：** SystemCapability.Global.FontManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 安装字体文件路径。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | 返回安装结果。返回为0表示安装成功，否则安装失败。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system application. |
| 31100101 | Font does not exist. |
| 31100102 | Font is not supported. |
| 31100103 | Font file copy failed. |
| 31100104 | Font file installed. |
| 31100105 | Exceeded maximum number of installed files. |
| 31100106 | Other error. |

