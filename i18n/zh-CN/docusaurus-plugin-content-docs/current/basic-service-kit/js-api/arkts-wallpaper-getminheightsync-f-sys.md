# getMinHeightSync

## getMinHeightSync

```TypeScript
function getMinHeightSync(): int
```

Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | the number returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

```TypeScript
try {
  let minHeight = wallpaper.getMinHeightSync();
  console.info(`success to getMinHeightSync: ${JSON.stringify(minHeight)}`);
} catch (error) {
  console.error(`failed to getMinHeightSync. Code: ${error.code}, Message: ${error.message}`);
}

```

