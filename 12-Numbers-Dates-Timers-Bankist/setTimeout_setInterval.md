
1. **`setTimeout`**:
   - Fungsi ini memungkinkan kita menjalankan suatu fungsi setelah interval waktu tertentu.
   - Sintaks: 
     ```javascript
     let timerId = setTimeout(func | kode, [delay], [arg1], [arg2], ...);
     ```
   - **Parameter**:
     - `func | kode`: Fungsi atau string kode yang akan dieksekusi. Sebaiknya gunakan fungsi.
     - `delay`: Waktu penundaan dalam milidetik (default: 0).
     - `arg1`, `arg2`, ...: Argumen-argumen untuk fungsi (tidak didukung di IE9-).
   - Contoh:
     ```javascript
     function sayHi() {
       alert('Halo');
     }
     setTimeout(sayHi, 1000); // Memanggil sayHi setelah 1 detik
     ```

2. **`setInterval`**:
   - Fungsi ini memungkinkan kita menjalankan suatu fungsi secara berulang dengan interval waktu tertentu.
   - Sintaks:
     ```javascript
     let timerId = setInterval(func | kode, delay, [arg1], [arg2], ...);
     ```
   - **Parameter**:
     - Sama seperti `setTimeout`.
   - Contoh:
     ```javascript
     function logMessage() {
       console.log('Pesan ini akan muncul setiap 2 detik');
     }
     setInterval(logMessage, 2000); // Menjalankan logMessage setiap 2 detik
     ```

Ingatlah bahwa `setTimeout` hanya dieksekusi sekali, sedangkan `setInterval` akan berulang terus menerus.