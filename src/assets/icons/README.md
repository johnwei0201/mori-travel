# Icons

全部來自 [SVG Repo](https://www.svgrepo.com/),統一使用 24×24、1.5px 描邊的線性風格:

| 來源 | 用到的 icon |
| --- | --- |
| [Iconsax Line](https://www.svgrepo.com/collection/iconsax-line-oval-icons/)(MIT) | plane, clock, wallet, sun, calendar, phone, mail, pin, user, users, shield, headphone, clipboard, image, check, car, bus, ship, drop, plug, message, instagram |
| [Solar Linear](https://www.svgrepo.com/collection/solar-linear-icons/)(CC BY) | train, bed, backpack, passport, suitcase |
| 其他 SVG Repo 單張 | facebook, food |

下載後都做過同樣的處理:去掉 `width` / `height`、把顏色換成 `currentColor`、`stroke-width` 統一成 `1.5`。
所以顏色跟大小完全由使用端的 CSS 決定。

## 怎麼用

```vue
<AppIcon name="plane" :size="18" />
```

`AppIcon`(`src/components/ui/AppIcon.vue`)會用 `import.meta.glob` 把這個資料夾裡的 svg 全部載進來,
檔名就是 `name`。要新增 icon 只要:

1. 從 SVG Repo 上面兩套 collection 挑一張下載到這個資料夾
2. 照上面的規則改成 `currentColor` + `stroke-width="1.5"`,並移除 `width` / `height`
3. 直接用 `<AppIcon name="檔名" />`
