---
title: "Belajar HTML Level Pemula: Pengenalan Dasar HTML untuk Pemula"
description: Pada artikel ini akan membahas mengenai pengenalan dasar apa itu HTML dan juga penggunaannya, serta dibahas juga mengenai cara membuat sebuah halamannya.
draft: false
image: /uploads/cover/html-basic.png
category:
  - Coding
tags:
  - HTML
  - HTML Dasar
  - Materi HTML
  - Belajar HTML
  - Ngoding
author:
  name: "Cak Adi"
  avatar: null
  email: "cakadi190@gmail.com"
  description: "Seorang Fullstack Web Developer berbasis di Kabupaten Ngawi, dengan passion mendalam dalam desain dan teknologi. Kini, ia juga tengah mengeksplorasi ketertarikannya yang baru terhadap geografi, memperluas cakrawalanya dalam dunia yang penuh inspirasi dan inovasi."
created_at: 2024-08-20 03:00:00
updated_at: 2024-08-20 03:00:00 
---

Halo rek, pada kesempatan kali ini saya ingin berbagi materi terkait dengan bahasa markah HTML yang dipakai untuk pengembangan sebuah situs web. HTML ini singkatnya adalah sebuah bahasa markah untuk merepresentasikan tataletak sebuah situs dan juga isi di dalam web itu sendiri.

HTML, merupakan sebuah bahasa pemrograman yang **WAJIB** untuk dipelajari bagi seorang pengembang situs web. Karena HTML ini adalah kerangka penopang dalam sebuah web untuk menampilkan sebuah informasi atau tata letak yang ada pada sebuah situs web. *Well*, saya yakin kalau dari kalian sudah ada yang pernah mendengar istilah HTML sendiri, namun tidak tau apa itu HTML dengan rinci dan mendalam.

*Let's Get Started!*

## Apa Sih HTML Itu?

Menurut Wikipedia, HTML merupakan sebuah bahasa markah yang digunakan untuk membuat dan membangun sebuah situs web yang mana biasanya akan dibantu dan digabungkan dengan bahasa pengaya (*styling*) dan skripting (*scripting*) lainnya. 

> Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.\
> — [WikiPedia: HTML](https://en.wikipedia.org/wiki/HTML){target="_blank"}

*Well*, kalau belum jelas begini maksudnya.

HTML merupakan sebuah bahasa markah yang mana didefinisikan oleh **penanda** untuk membuat dan membangun sebuah situs. Nah yang dimaksud penanda disini kita sebut saja **TAG**. HTML ini berperan penting dalam sebuah situs untuk menentukan struktur dan tata letak sebuah konten yang akan ditampilkan.

Nah kalau digambarkan atau diilustrasikan, peran HTML itu akan seperti gambar dibawah ini.

![Ilustrasi Fungsi HTML, CSS dan Javascript](/uploads/content/basic-html-preambule/ilustrasi-fungsi-html-css-js.png){title="Ilustrasi Fungsi HTML, CSS dan Javascript"}

Seperti yang sudah dijelaskan sebelumnya, bahwa HTML itu tidaklah sendirian. Melainkan harus didampingi dengan bahasa lainnya untuk membentuk sebuah tampilan, tata letak dan desain situs web yang bagus dan baik untuk dilihat.

Bayangkan sebuah website seperti tubuh manusia. HTML adalah tulangnya, yang memberi struktur dan bentuk. CSS adalah kulitnya, yang membuatnya terlihat menarik dan cantik. Sedangkan JavaScript adalah ototnya, yang membuat tubuh ini bergerak dan berinteraksi. Dengan ketiganya bekerja bersama, website menjadi hidup dan dinamis!

## Awal Sejarah HTML Diciptakan

Artikel ini akan memuat sedikit kisah dan cerita terciptanya HTML, sisanya bisa kalian baca pada artikel ini.

:content-viewer{target="/coding/belajar-html-level-pemula-sejarah-perkembangan-html"}

Begini ceritanya. Dahulu, awal mula HTML diciptakan itu berawal dari tahun 1980-an yang mana berawal dari seorang ilmuan bernama Tim Berners-Lee yang mana adalah seorang karyawan di perusahaan non-teknologi yakni CERN. CERN sendiri merupakan singkatan dari *Conseil Européen pour la Recherche Nucléaire* atau Komisi Eropa untuk Penelitian Fisika Nuklir yang mana berada dibawah naungan Uni Eropa.

Nah peneliti ini membutuhkan sebuah sistem dimana membutuhkan sebuah sistem untuk berbagi dokumen hasil penelitian mereka. Nah, pada akhirnya Tim membuat sebuah peranti lunak (*software*) bertajuk ENQUIRE sebagai hasil dalam riset pengembangan yang sudah dijelaskan tadi.

Lalu di tahun 1989, Tim memperkenalkan ide tentang hypertext berbasis internet yang mana akan menjadi cikal bakal dari HTML dan menggandeng rekan kerjanya bernama Robert Cailliau yang merupakan seorang *system engineer* pada kantor yang sama yakni di CERN, namun proyek ini tidak secara langsung diaplikasikan (diterapkan) ke CERN.

![Ilustrasi Fungsi HTML, CSS dan Javascript](/uploads/content/basic-html-preambule/tim-robert.jpg){title="Foto Bersama Pak Tim dan Pak Robert (Sumber dari <a href='https://www.petanikode.com/html-dasar/' noopener noreferer target='_blank'>Petani Kode</a>)"}

Pada akhir tahun 1991, Tim Berners-Lee memperkenalkan dokumen berjudul "HTML Tags" yang menjelaskan 18 tag dasar yang membentuk fondasi HTML. HTML sendiri dibangun di atas konsep SGML (Standard Generalized Markup Language), sebuah standar internasional untuk pembuatan dokumen dengan markup seperti paragraf, daftar, dan heading. HTML dapat dianggap sebagai implementasi dari SGML, dengan beberapa tag seperti `<title>`, `<p>`, `<li>`, dan `<h1>` hingga `<h6>` yang diadopsi langsung dari SGML. Namun, fitur seperti Hyperlink adalah inovasi orisinal dari Berners-Lee. Ide HTML ini kemudian disebarluaskan melalui mailing list, menarik perhatian ilmuwan komputer global. Untuk rujukannya, bisa teman-teman [periksa disini](https://info.cern.ch/hypertext/WWW/MarkUp/Tags.html){target="blank"}.

## Perkembangan dan Pembaruan Versi HTML

Dalam sejarahnya, HTML diperbarui setiap waktu supaya mengikuti zamannya. Nah berikut daftar versi HTML dari masa ke masa.

- **`[Draft]` HTML 1.0** *(Juni 1993)* adalah versi HTML pertama, namun tidak resmi dirilis;
- **HTML 2.0** *(24 November 1995)* adalah versi HTML kedua yang resmi pertama kali beredar di pasaran dan dirilis oleh IETF;
- **`[Draft]` HTML 3.0** *(28 Maret 1995)* versi ini gagal beredar, karena banyak perubahan yang memicu perdebatan;
- **HTML 3.2** *(14 Januari 1997)* versi resmi yang dirilis W3C pertama kali;
- **HTML 4.0** *(24 April 1998)* versi pengembangan dari yang sebelumnya;
- **HTML 4.01** *(24 Desember 1999)* versi perbaikan dari HTML 4.0;
- **XHTML 1.0** *(26 Januari 2000)* pengembangan dari HTML 4.01 dengan mengadopsi XML;
- **XHTML 2.0** *(Agustus 2002—Juli 2006)* versi kedua dari XHTML;
- **HTML 5** *(28 Oktober 2014)* versi HTML saat ini. `[TERBARU]`
- **HTML 6** masih rumor dan belum jelas keberadaanya. ([Referensinya disini (buka pake VPN!)](https://www.reddit.com/r/HTML/comments/hx36dp/when_will_html6_come_out/){target="_blank" noopener noreferer})

Versi `[draft]` adalah versi yang tidak resmi dirilis ke pasaran. Bentuknya cuma masih dalam draft spesifikasi saja. Nah, untuk sekarang, versi HTML yang digunakan adalah versi ke-5 yang sudah semakin umum dan menjamur.

## Praktik Sebentar Yuk

Nah ini dia, *moment* yang ditunggu-tunggu, waktunya praktik. Nah sebelum lanjut, ada beberapa hal yang harus dipersiapkan. Antara lain:

### 1. Pengubah Teks (*Teks Editor*) Sesuai Dengan Preferensi

Teks editor sebenarnya bebas menggunakan berbagai aplikasi, yang penting bisa digunakan untuk mengetik, mengubah dan memperbaharui kode yang ada pada sebuah *file*. Nah disini saya sarankan menggunakan [Visual Studio Code](https://code.visualstudio.com/download){target="_blank" noopener noreferer}.

![Tampilan VSCode](/uploads/content/basic-html-preambule/vscode-screenshot.png){title="Tampilan Editor dari Visual Studio Code"}

### 2. Peramban (*Browser*)

Untuk peramban juga demikian, kalian bebas memilih untuk menggunakan peramban apapun yang penting bisa digunakan untuk melihat dokumen yang akan dibuat. Seperti contohnya saya menggunakan [Google Chrome](https://www.google.com/chrome){target="_blank" noopener noreferer}.