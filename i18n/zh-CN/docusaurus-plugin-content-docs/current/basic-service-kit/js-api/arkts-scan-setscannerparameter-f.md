# setScannerParameter

## setScannerParameter

```TypeScript
function setScannerParameter(scannerId: string, optionIndex: int, value: ScannerOptionValue): Promise<void>
```

设置扫描仪参数。使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scannerId | string | 是 | 扫描仪的ID。 |
| optionIndex | int | 是 | 要设置的选项的索引。 |
| value | ScannerOptionValue | 是 | 要设置的值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

