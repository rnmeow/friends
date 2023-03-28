# kuohuanhuan / friends @ GitHub

![GitHub stars](https://img.shields.io/github/stars/kuohuanhuan/friends?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/kuohuanhuan/friends?style=for-the-badge)

嗨！你可以在這裡找到我的朋友們。

## 添加友情連結

你需要準備：

1. 一個 GitHub 帳號。
2. 一個可編輯 YAML 格式檔案的編輯器（i.e. [Notepad++](https://notepad-plus-plus.org), [VS Code](https://code.visualstudio.com/), [Brackets](https://brackets.io) ……）。
3. 自己的網站資料。

### 在開始之前

請先確認自己的網站符合下列規範：

- 支援 HTTPS，且憑證沒有過期。
- 網站名稱和簡介沒有過長。
- 網站 Avatar：
  - 長寬**不超過** 512px。
  - 託管服務（圖床、Git 儲存庫、網站目錄、雲端硬碟等）可靠（SLA > 75%）。
  - 檔案大小 < 2 MiByte。
  - 可正常辨識，不模糊或呈現格狀。（8-bit / Minecraft / pixel 等風格不在此限。）
  - 靜態圖片。MP4 / MKV 等影片格式禁止，動態 GIF / WebP 等請在 PR 中註明。
- 網站備有「友情連結」頁面 / 區塊。若沒有，可置於頁首或頁尾。
- **網站內容全年齡段適宜。**

### 操作

1. 添加本站資訊到「友情連結」列表中：

- 名稱：`Huan's Log` 或 `khh.log`
- 連結：<https://blog.nekohuan.cyou>
- 簡介：`$ curl -i https://blog.nekohuan.cyou` 或*其它你認為適合描述我 / 本站的句子*。
- Avatar（選擇困難症發作。）：
  - WebP (128x128, ~17.7KB): <https://nekohuan.cyou/avatar.webp> *（推薦，但[不被較舊版 Safari 支援](https://caniuse.com/webp) 。）*
  - AVIF (128x128, ~2.4KB): <https://nekohuan.cyou/avatar.avif> *（注意：相容性[非常差勁](https://caniuse.com/avif) 。）*
  - JPG (128x128, ~20.1KB): <https://nekohuan.cyou/avatar.jpg>
  - PNG (144x144, ~12.8KB): <https://nekohuan.cyou/apple-touch-icon.png> *（注意：經有損壓縮。）*
  - PNG ([Upload.cc](https://upload.cc) 圖床): <https://upload.cc/i1/2023/01/30/WP5BQS.png> _（注意：[**可能**對中國大陸 IP 並不友好](https://twitter.com/Uploadcc/status/1463519367325356032)。）_
  - HEIC (128x128, ~1.99KB): <https://nekohuan.cyou/avatar.heic> *（注意：[目前尚未有瀏覽器支援](https://caniuse.com/heif) ，戰未來。）*

1. 在 GitHub 上 Fork 此儲存庫。

2. 修改 `src/links.yml` 並 commit，格式如下：*（注意：請勿更動任何無關檔案。）*

```yaml
- name: 範例網站
  url: https://example.com
  avatar: https://example.com/avatar.png
  description: 一個範例網站
```

4. 發起 Pull Request 並等待 Merge。

*（注意：本儲存庫使用 [GitHub Actions](https://github.com/kuohuanhuan/friends/actions) 將在每次 commit 後自動產生 JSON 檔案並推送至 [GitHub Gist](https://gist.github.com/kuohuanhuan/82904828a7b3478b45986441da7569b6)。）*

_（注意：請儘量提供**穩定**且**不常變動**的圖片連結。）_

## 變動 / 更新友情連結

如果出於某些原因，你需要撤下自己的友情連結，請[開個 issue](https://github.com/kuohuanhuan/blog/issues/new) ，**不要**發起 Pull Request。

如果要更新友情連結資訊，請發起 Pull Request。

## 如果友情連結被撤下

可能是因為您的網站……

1. 違反了上述規範。
2. 無法瀏覽。
3. 撤下了本站的連結。（包括設定 CSS 樣式為 `display: none;` 或 `visibility: hidden;` 等行為。）

如果要回覆連結，請確認您的網站已回復到正常狀態，並重新發起 Pull Request。

*如果可以，請附上您的連結被撤下的 commit。*
