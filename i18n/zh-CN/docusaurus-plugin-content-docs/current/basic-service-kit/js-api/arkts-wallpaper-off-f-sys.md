# off

## off('wallpaperChange')

```TypeScript
function off(
    type: 'wallpaperChange',
    callback?: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void
```

Unregisters a listener for wallpaper changes.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wallpaperChange' | 是 | the incoming wallpaperChange table delete receiver when the user modifies the wallpaper settings. |
| callback | (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void | 否 | wallpaperType indicates the wallpaper type.  resourceType indicates the resource type of the wallpaper.  uri indicates the wallpaper resource address. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

```TypeScript
let listener = (wallpaperType: wallpaper.WallpaperType, resourceType: wallpaper.WallpaperResourceType): void => {
    console.info(`wallpaper color changed.`);
};
try {
    wallpaper.on('wallpaperChange', listener);
} catch (error) {
    console.error(`failed to on. Code: ${error.code}, Message: ${error.message}`);
}

try {
    // 取消订阅listener
    wallpaper.off('wallpaperChange', listener);
} catch (error) {
    console.error(`failed to off. Code: ${error.code}, Message: ${error.message}`);
}

try {
    // 取消所有'wallpaperChange'类型的订阅
    wallpaper.off('wallpaperChange');
} catch (error) {
    console.error(`failed to off. Code: ${error.code}, Message: ${error.message}`);
}

```

