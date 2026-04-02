# ☕ The Daily Grind - 咖啡店形象網站 (練習專案)

[![Demo](https://img.shields.io/badge/Demo-Live_View-success?style=for-the-badge&logo=github)](https://victor0601yu.github.io/coffee-shop/)

> **聲明**：這是一個用於網頁開發練習的前端作品（Side Project），非實際營運的真實店家。

這是一個專為虛構的「The Daily Grind」咖啡店設計的響應式單頁網站（Landing Page）。網站展示了咖啡店的品牌故事、精選菜單、店面資訊以及聯絡方式，主要用於展示前端切版與互動設計的練習成果。

🔗 **[點擊這裡查看線上 Demo](https://victor0601yu.github.io/coffee-shop/)**

## ✨ 網站特色 (Features)

*   **📱 響應式網頁設計 (RWD)**：完美支援桌機、平板與手機等不同尺寸的螢幕，確保在各裝置上皆有最佳的瀏覽體驗。
*   **📜 平滑滾動與導覽 (Smooth Scrolling)**：點擊導覽列選單時，畫面會平滑地滾動至對應的頁面區塊。
*   **📍 滾動監聽 (ScrollSpy)**：隨著頁面往下滾動，上方導覽列會自動標亮目前瀏覽的區塊位置。
*   **🗺️ 地圖整合**：嵌入互動式的 Google Maps 區塊，方便顧客查看實體店面的確切位置。
*   **✉️ 聯絡表單**：提供乾淨簡潔的聯絡表單介面。

## 🛠️ 使用技術 (Technologies Used)

### 前端核心
*   **HTML5**：語意化的網頁架構。
*   **CSS3 / SCSS**：使用 Sass 預處理器進行樣式撰寫與變數管理，提升程式碼的可維護性與擴充性。
*   **JavaScript (ES6+)**：處理網頁的各種互動效果（例如手機版漢堡選單切換）。

### 框架與工具庫 (Libraries)
*   **Bootstrap Grid (v5.3.8)**：輕量引入 Bootstrap 的網格系統 (Grid System) 以加快多螢幕排版開發。
*   **jQuery (v3.7.1)**：簡化 DOM 的選取操作與事件處理。
*   **FontAwesome**：引入高品質的社群平台與功能性 Icons。
*   **Gumshoe**：實現輕量化的 ScrollSpy (滾動監聽) 功能。
*   **Smooth Scroll**：提供錨點連結的平滑滾動視覺效果。
*   **Normalize.css**：標準化並重置各瀏覽器的預設樣式差異。

## 📂 專案結構 (Directory Structure)

```text
coffee-shop/
├── assets/          # 靜態資源 (圖片集、第三方 CSS 等)
├── css/             # 編譯後輸出的 CSS 檔案
├── js/              # 第三方 JS 工具庫及自訂 main.js
├── README.md        # 專案說明文件
├── index.html       # 網站首頁
└── style-sass.scss  # SCSS 主要的入口檔案
```

## 🚀 如何在本地端運行 (Local Setup)

1. **複製此專案到本地端** 
   ```bash
   git clone https://github.com/victor0601yu/coffee-shop.git
   ```
2. **開啟網頁**
   直接使用瀏覽器開啟 `index.html` 檔案，或是強烈建議使用 VS Code 的 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充功能以啟動本地開發伺服器。
3. **編譯 SCSS (若需要修改樣式)**
   如果您欲修改現有樣式，請編輯 `style-sass.scss` 檔案，並透過 SCSS 編譯工具（如 VS Code 的 `Live Sass Compiler` 擴充功能）將其編譯輸出覆蓋 `css/style-sass.css` 即可。

---

> 註：圖文版權或任何相關素材僅作為個人作品展示與練習用途。
