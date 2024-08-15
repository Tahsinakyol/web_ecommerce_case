# Proje Adı

Bu proje, basit bir e-ticaret sepeti uygulamasıdır. Ürünleri listeleyebilir, sepete ekleyebilir,sepetten çıkarabilirsiniz ve ödeme adımına geçebilirsiniz.

## Nasıl Çalıştırılır

1. `npm install` ile node paketleri yüklenmeli.
2. JSON Server'ı başlatmak için `json-server --watch db.json --port 5000` komutunu ana dizinde çalıştırın.
3. Projeyi başlatmak için ana dizinde `npm run dev` komutunu çalıştırın.

## Ek Bilgiler

- **JSON Server**: Projedeki ürün verilerini sağlamak için JSON Server kullanılmaktadır.
- **Geliştirme Sunucusu**: `npm run dev` komutu ile başlatılan geliştirme sunucusu, projeyi `http://localhost:5173` adresinde çalıştırır.

## Bağımlılıklar

- **React**: Kullanıcı arayüzü oluşturmak için.
- **Redux**: Uygulama durumunu yönetmek için.
- **JSON Server**: Mock API sağlamak için.

## Proje Yapısı

```plaintext
public/
src/
  components/
  Pages/
    HomePage.jsx
    CartPage.jsx
  redux/
    actions.js
    store.js
  App.js
  index.js
db.json
package.json
README.md
```

-Not:projede About ve contact sayfaları yoktur Menu ve Footer için Random yazılmıştır.
