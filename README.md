# React + TypeScript + Vite
-VITE NATIVE MODUL YAPISI KULLANIR index.html'de script type="module" src="/src/main.tsx" olarak eklenir.
-index.jsx yerine main.tsx

-pnpm create vite
-proje ismi seç
-React' ı seç
-TypeScript' i seç
-pnpm install
-pnpm run dev
-pnpm add @mui/material @emotion/react @emotion/styled
-pnpm add @mui/icons-material
-pnpm add axios
-pnpm add sweetalert2

-vite env de değişiklik olduğunda otomatik server ı yeniden başlatır.değişikliklerin yansıması için Manuel olarak durdurup başlatmaya gerek kalmaz

-mui=>variant style, component html. birisi görüntü birisi gerçek versiyonu seo için h1 gibi.

- disabled={!task.trim()} bu buton özelliği ile input boş iken buton pasif halde olur. Böylece boş task girilmesi engellenmiş olur
- global alanda type tanımlamanın performansa bir etkisi yoktur. TS dev aşaömasında olduğu için production a etkisi olmadığından dolayı
- React.FC => React functinal component type olarak verilirse return ü olmak zorunda

- ListItemText de sx={{wordWrap:"break-word"}} alt satıra geçmesini sağlar.

-TextField de  inputProps={{maxLength:40}} ile 40 karekter sınırı verilir. input a ait propertyleri kullanmak için inputProps açılır.

- helper/sweetalert de enum yapısı kullanıldı. notify fonk. parametrelerine type olarak verildi.

## Useful Links
- [Adding typescript](https://create-react-app.dev/docs/adding-typescript/)

- [Other ready template npm commands](https://www.npmjs.com/search?q=cra%20--)

- [Typescript Tutorials](https://www.totaltypescript.com/tutorials)

- [React Typescript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

- [Custom hooks written in TypeScript](https://usehooks-ts.com/introduction)

- [My Typescript Notes](https://anthonyharold67.github.io/typescript-notes/)











