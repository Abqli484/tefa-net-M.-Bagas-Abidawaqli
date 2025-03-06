## 📖 Deskripsi
Proyek ini adalah aplikasi Todo List berbasis .NET yang menyediakan API untuk mengelola daftar tugas (CRUD). Selain itu, proyek ini juga memiliki antarmuka pengguna berbasis HTML, CSS, dan jQuery, yang memungkinkan pengguna berinteraksi langsung dengan sistem melalui tampilan web.

## ⚙️ Cara Setup
### 1. Clone Repository
```sh
git clone https://github.com/username/repository-name.git
```

### 2. Buka di Visual Studio
- Buka Visual Studio
- Pilih **Open a Project or Solution**, lalu arahkan ke folder proyek

### 3. Atur Database (MySQL/SQL Server)
- Pastikan MySQL/SQL Server sudah terinstal
- Sesuaikan connection string di `appsettings.json`

### 4. Jalankan Migrasi Database
```sh
dotnet ef database update
```

### 5. Jalankan Aplikasi
Klik tombol **Run** di Visual Studio atau jalankan perintah:
```sh
dotnet run
```

## 🚀 Cara Menggunakan
### 🔹 Menggunakan API (Postman / HTTP Client)
- Buka **Postman** dan import dokumentasi API yang tersedia
- API endpoint akan otomatis tersedia di dokumentasi Postman

### 🔹 Menggunakan UI (Web Browser)
Setelah program dijalankan, buka browser dan akses:
```sh
http://localhost:7229/index.html
```
Dari halaman ini, Anda bisa menambah, mengedit, melihat, dan menghapus daftar tugas dengan mudah.

## 📂 Struktur File
```
📦 TodoList
 ┣ 📂 Controllers        # Berisi API Controller (CRUD)
 ┣ 📂 Models            # Model data untuk database
 ┣ 📂 wwwroot           # Berisi tampilan UI dan aset statis
 ┃ ┣ 📂 views          # Halaman UI (index.html)
 ┃ ┣ 📂 css            # File CSS untuk styling
 ┃ ┣ 📂 js             # File JavaScript untuk logika frontend
 ┣ 📜 appsettings.json  # Konfigurasi database & aplikasi
 ┣ 📜 Program.cs        # Entry point aplikasi
 ┗ 📜 README.md         # Dokumentasi proyek
```

## 📝 Catatan
- Pastikan koneksi database sesuai dengan environment yang digunakan
- Jika terjadi error, periksa kembali konfigurasi `appsettings.json`
- Dokumentasi API dapat langsung diakses melalui Postman setelah melakukan import

## Dokumentasi API (Postman)
Dokumentasi API dapat ditemukan di folder `postman/`.
Untuk mengimpornya ke Postman:
1. Buka Postman, klik **Import**.
2. Pilih file `postman/ToDoList.postman_collection.json`.
3. Klik **Import** untuk menambahkan ke Postman.


