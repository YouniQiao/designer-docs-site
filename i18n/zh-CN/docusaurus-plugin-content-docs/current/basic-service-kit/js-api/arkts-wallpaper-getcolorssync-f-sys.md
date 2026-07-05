# getColorsSync

## getColorsSync

```TypeScript
function getColorsSync(wallpaperType: WallpaperType): Array<RgbaColor>
```

Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.

**起始版本：** 9

**废弃版本：** 23

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;RgbaColor> | the Array returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

```TypeScript
try {
    let colors = wallpaper.getColorsSync(wallpaper.WallpaperType.WALLPAPER_SYSTEM);
    console.info(`success to getColorsSync: ${JSON.stringify(colors)}`);
} catch (error) {
    console.error(`failed to getColorsSync. Code: ${error.code}, Message: ${error.message}`);
}

```

