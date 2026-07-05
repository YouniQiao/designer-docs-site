# Constants

## SaveButton

```TypeScript
declare const SaveButton: SaveButtonInterface
```

安全控件的保存控件系统接口，适用于应用需要临时获取媒体库访问权限以保存图片或视频的场景，例如图片保存到相册、媒体内容导出等。 应用集成保存控件后，用户首次使用该控件时，保存控件会展示弹窗供用户确认。用户点击允许后，应用获取访问媒体库接口的临时授权，相关接口请参见 [Interface (PhotoAccessHelper)](../../apis-media-library-kit/arkts-apis/arkts-photoaccesshelper-photoaccesshelper-i.md#PhotoAccessHelper)；用户拒绝或关闭弹窗时，本次 * 不授权，应用不会获得媒体库接口访问权限。后续使用无需弹窗授权。 在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。 开发者应在授权有效期内调用媒体库接口获取文件句柄，并完成创建媒体资源等需要临时授权的操作。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。 <br>**说明**</br> <ul><li>###### 核心枚举类型</li> <li></li> <li>**[SaveIconStyle](arkts-saveiconstyle-e.md#SaveIconStyle)：** 保存控件图标风格枚举，用于指定控件展示的图标风格。</li> <li>**[SaveDescription](arkts-savedescription-e.md#SaveDescription)：** 保存控件文本描述枚举，用于指定控件展示的文本描述。</li> <li>**[SaveButtonOnClickResult](arkts-savebuttononclickresult-e.md#SaveButtonOnClickResult)：** 保存控件点击结果枚举，用于表示点击后授权是否成功。</li> <li></li> <li>###### 核心接口类型</li> <li></li> <li>**[SaveButtonOptions](arkts-savebuttonoptions-i.md#SaveButtonOptions)：** 保存控件配置对象，用于指定图标、文字和按钮类型等元素属性。</li> <li>**[SaveButtonCallback](arkts-savebuttoncallback-t.md#SaveButtonCallback)：** 保存控件点击回调类型，用于返回点击事件、授权结果和错误信息。</li> <li></li> <li>###### 子组件</li> <li></li> <li>不支持。</li></ul>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## SaveButtonInstance

```TypeScript
declare const SaveButtonInstance: SaveButtonAttribute
```

定义安全访问的保存控件实例。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

