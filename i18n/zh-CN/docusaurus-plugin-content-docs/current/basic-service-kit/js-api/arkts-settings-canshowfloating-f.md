# canShowFloating

## canShowFloating

```TypeScript
function canShowFloating(callback: AsyncCallback<boolean>): void
```

Checks whether a specified application can show as a floating window.

**起始版本：** 7

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 |  |

**示例：**

```TypeScript
settings.canShowFloating((err:Error, status: boolean) => {
  if (err) {
    console.error(`Failed to Checks whether a specified application can show as float window ${err.message} `);
    return;
  }
  console.info('Checks whether a specified application can show as float window.');
});

```

## canShowFloating

```TypeScript
function canShowFloating(): Promise<boolean>
```

Checks whether a specified application can show as a floating window.

**起始版本：** 7

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.Applications.Settings.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the application can draw over other applications; returns  {@code false} otherwise. |

**示例：**

```TypeScript
settings.canShowFloating().then((status:boolean) => {
    console.info('Checks whether a specified application can show as float window.');
});

```

