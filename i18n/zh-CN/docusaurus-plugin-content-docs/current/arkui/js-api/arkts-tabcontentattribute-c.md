# TabContentAttribute

��֧��[ͨ������]common�⣬��֧���������ԣ� ��֧��[ͨ���¼�]common�⣬��֧�������¼���

**继承实现关系：** TabContentAttribute继承自：CommonMethod<TabContentAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onWillHide

```TypeScript
onWillHide(event: VoidCallback)
```

�߼��ص���TabContent��Ҫ���ص�ʱ�򴥷��ûص�����������TabContent�л���ҳ���л�������ǰ��̨�л��� > **˵����** > ��API version 20��ʼ���ýӿ�֧����[attributeModifier]CommonMethod#attributeModifier�е��á�

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | VoidCallback | 是 | TabContent��Ҫ���صĻص������� |

## onWillShow

```TypeScript
onWillShow(event: VoidCallback)
```

�߼��ص���TabContent��Ҫ��ʾ��ʱ�򴥷��ûص�����������TabContent�״���ʾ��TabContent�л���ҳ���л�������ǰ��̨�л��� > **˵����** > ��API version 20��ʼ���ýӿ�֧����[attributeModifier]CommonMethod#attributeModifier�е��á�

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | VoidCallback | 是 | TabContent��Ҫ��ʾ�Ļص������� |

## tabBar

```TypeScript
tabBar(options: string | Resource | CustomBuilder | TabBarOptions)
```

����TabBar����ʾ���ݡ� ���icon����svg��ʽͼԴ����ɾ��svgͼԴ���õĿ�������ֵ������icon��С��ʹ��svgͼԴ���õĿ�������ֵ�� ���õ����ݳ���tabBarҳǩʱ���в��С�

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | string \| Resource \| CustomBuilder \| TabBarOptions | 是 | TabBar����ʾ���ݡ� CustomBuilder��?���������ڲ����Դ������  ��API version 8�汾�������ã��� [since 18] |

## tabBar

```TypeScript
tabBar(value: SubTabBarStyle | BottomTabBarStyle)
```

����TabBar����ʾ���ݡ��ײ���ʽû���»���Ч����icon�쳣ʱ��ʾ��ɫͼ�顣 > **˵����** > - ��ҳǩ��[SubTabBarStyle](arkts-subtabbarstyle-c.md#SubTabBarStyle)����ʽ��ͨ��Ϊ����+�»��ߣ�����+�����ҳǩ������������ı���ʽ����������ڶ������ߵײ�ʹ�á��л�ҳǩʱĬ��֧�ֶ�����תЧ������������Ѷ > ��Ӧ�õĶ������ࣨ��"��ע����Ƶ������"��������ģ��Ķ������������� > > - �ײ�ҳǩ/���ҳǩ��[BottomTabBarStyle](arkts-bottomtabbarstyle-c.md#BottomTabBarStyle)����ʽ�����»��ߺͱ���Ч����ҳǩ��ʽͨ��Ϊͼ��+���ֵ���Ϸ�ʽ���л�ҳǩʱĬ���޶�����תЧ�����ײ�ҳǩͨ������Ӧ�� > ������������ҳ�����֡��Ƽ��������ҳǩ�����ڿ���������������vertical(true)�������򲼾֣���ҳǩ�ڲ����ʾ��Ĭ�������ʾ��

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SubTabBarStyle \| BottomTabBarStyle | 是 | TabBar����ʾ���ݡ� SubTabBarStyle��?��ҳǩ��ʽ��  BottomTabBarStyle��?�ײ�ҳǩ�Ͳ��ҳǩ��ʽ�� |

## tabBar

```TypeScript
tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | 
    TabBarOptions)
```

����TabBar����ʾ���ݡ� ʹ��BottomTabBarStyle��TabBarOptions������Ϊ��β�����icon��icon�쳣ʱ��ʾ��ɫͼ�顣���icon����svg��ʽͼԴ����ɾ��svgͼԴ���õĿ�������ֵ������icon��С��ʹ��svgͼԴ���õĿ� ������ֵ�� ���õ����ݳ���TabBarҳǩʱ���в��С�

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | ComponentContent \| SubTabBarStyle \| BottomTabBarStyle \| string \| Resource \| CustomBuilder \| TabBarOptions | 是 | Content displayed on the tab bar. ComponentContent: encapsulation of the component content,  which can be customized. SubTabBarStyle: subtab style. BottomTabBarStyle: style of the bottom and  side tabs. The bottom style does not have the underline effect. string: string type. Resource:  resource reference for importing strings from system or application resources. CustomBuilder: builder  that can take components as arguments. TabBarOptions: options for configuring images and text content on  the tabs. |

