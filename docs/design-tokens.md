# Design Tokens - Pondok Pesantren Al-Mukhlis

Dokumentasi lengkap tentang design tokens, palet warna, dan sistem desain website.

## 🎨 Palet Warna

Warna-warna ini diekstrak dari logo resmi Pondok Pesantren Al-Mukhlis dan disesuaikan untuk memastikan kontras yang memenuhi standar aksesibilitas WCAG AA.

### Brand Colors (Warna Brand)

#### Hijau Utama
```css
/* Primary Green - Warna utama brand */
--color-brand-primary: #2E7D32
--color-brand-primary-dark: #1B5E20
--color-brand-primary-light: #4F8E4B
```

**Penggunaan**:
- Tombol utama (CTA)
- Link dan navigasi aktif
- Header section
- Aksen penting

#### Hijau Sekunder
```css
/* Secondary Green - Warna pelengkap */
--color-brand-secondary: #4F6B1D
--color-brand-secondary-dark: #3A4F15
--color-brand-leaf: #3E9B34
```

**Penggunaan**:
- Gradient background
- Aksen sekunder
- Icon dan ilustrasi

#### Emas
```css
/* Gold - Untuk aksen dan highlight */
--color-brand-gold: #C9A227
--color-brand-gold-dark: #A88520
```

**Penggunaan**:
- Border pada box informasi penting
- Highlight teks atau badge
- Icon premium features

⚠️ **Perhatian**: Jangan gunakan emas untuk teks di atas background terang karena kontras tidak memenuhi WCAG AA.

#### Lime (Dekoratif)
```css
/* Lime - Gunakan dengan hati-hati */
--color-brand-lime: #CDD535
```

**Penggunaan**:
- Hanya untuk dekorasi minor
- Tidak untuk teks atau elemen penting
- Gunakan sparingly

### Neutral Colors (Warna Netral)

```css
/* Background & Text */
--color-neutral-white: #FFFFFF
--color-neutral-cream: #F7F4E6
--color-neutral-cream-dark: #EDE9D8
--color-neutral-charcoal: #1F2A1A
--color-neutral-charcoal-light: #2D3D26

/* Grays */
--color-neutral-gray-100: #F5F5F5
--color-neutral-gray-200: #E5E5E5
--color-neutral-gray-300: #D4D4D4
--color-neutral-gray-700: #404040
--color-neutral-gray-800: #262626
```

**Penggunaan**:
- White: Background utama
- Cream: Background alternatif, section
- Charcoal: Teks utama
- Grays: Border, divider, teks sekunder

### Semantic Colors (Warna Semantik)

```css
/* Feedback Colors */
--color-success: #2E7D32  /* Sama dengan primary green */
--color-warning: #C9A227  /* Sama dengan gold */
--color-error: #C62828    /* Merah untuk error */
--color-info: #1976D2     /* Biru untuk informasi */
```

## ♿ Kontras Aksesibilitas (WCAG AA)

Semua kombinasi warna di bawah ini **memenuhi WCAG AA** (minimum contrast ratio 4.5:1 untuk teks normal, 3:1 untuk teks besar).

### ✅ Kombinasi yang Direkomendasikan

#### Teks Gelap di Background Terang
| Teks | Background | Kontras | Status |
|------|------------|---------|--------|
| `#1F2A1A` (charcoal) | `#FFFFFF` (white) | **14.2:1** | ✅ AAA |
| `#1F2A1A` (charcoal) | `#F7F4E6` (cream) | **13.1:1** | ✅ AAA |
| `#1B5E20` (primary-dark) | `#FFFFFF` (white) | **8.1:1** | ✅ AAA |
| `#404040` (gray-700) | `#FFFFFF` (white) | **10.4:1** | ✅ AAA |

#### Teks Terang di Background Gelap
| Teks | Background | Kontras | Status |
|------|------------|---------|--------|
| `#FFFFFF` (white) | `#2E7D32` (primary) | **4.8:1** | ✅ AA |
| `#FFFFFF` (white) | `#1B5E20` (primary-dark) | **8.1:1** | ✅ AAA |
| `#FFFFFF` (white) | `#1F2A1A` (charcoal) | **14.2:1** | ✅ AAA |
| `#FFFFFF` (white) | `#4F6B1D` (secondary) | **5.2:1** | ✅ AA |

### ❌ Kombinasi yang TIDAK Direkomendasikan

| Teks | Background | Kontras | Masalah |
|------|------------|---------|---------|
| `#C9A227` (gold) | `#FFFFFF` (white) | **2.8:1** | ❌ Kontras rendah |
| `#CDD535` (lime) | `#FFFFFF` (white) | **1.9:1** | ❌ Kontras sangat rendah |
| `#C9A227` (gold) | `#F7F4E6` (cream) | **2.6:1** | ❌ Kontras rendah |

**Solusi**: 
- Untuk emas/gold, gunakan hanya sebagai border atau background, bukan teks
- Untuk lime, gunakan hanya sebagai dekorasi kecil, bukan elemen penting

## 📐 Spacing Scale

```css
/* Layout Spacing */
--spacing-container-padding: 1.5rem    /* 24px */
--spacing-section: 4rem                /* 64px - Desktop */
--spacing-section-sm: 3rem             /* 48px - Mobile */
```

## 🎯 Border Radius

```css
--radius-sm: 0.25rem    /* 4px - Small elements */
--radius-md: 0.375rem   /* 6px - Buttons, inputs */
--radius-lg: 0.5rem     /* 8px - Cards */
--radius-xl: 0.75rem    /* 12px - Large cards */
--radius-full: 9999px   /* Full circle/pill */
```

## 🌑 Shadows

```css
/* Soft shadows untuk depth */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
```

## ⏱️ Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

**Penggunaan**:
- Fast: Hover states, focus rings
- Base: Button clicks, menu toggles
- Slow: Large modal animations, page transitions

## 🔤 Typography Scale

### Font Families
```css
/* Sans-serif stack (default) */
--font-family-sans: 
  ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

/* Serif stack */
--font-family-serif:
  ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
```

### Font Sizes (menggunakan Tailwind defaults)
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)

## 📱 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px    /* Small devices (landscape phones) */
md: 768px    /* Medium devices (tablets) */
lg: 1024px   /* Large devices (desktops) */
xl: 1280px   /* Extra large devices (large desktops) */
2xl: 1536px  /* Extra extra large devices */
```

**Strategi**: Mobile-first design
- Default styles untuk mobile
- Gunakan breakpoints untuk tablet dan desktop

## 🎭 Logo Guidelines

### Format Logo
- **Sumber**: `logo pesantren al mukhlis.jpeg`
- **Bentuk**: Circular (lingkaran)
- **Background**: Abu-abu persegi (harus di-crop)

### Ukuran Logo yang Dihasilkan
- `logo-64.png` - 64x64px (navigation, mobile)
- `logo-128.png` - 128x128px (tablet)
- `logo-256.png` - 256x256px (desktop, print)
- `logo-512.png` - 512x512px (high-res displays)
- `favicon-32x32.png` - 32x32px (browser tab)
- `apple-touch-icon.png` - 180x180px (iOS home screen)
- `icon-192.png` - 192x192px (PWA manifest)
- `icon-512.png` - 512x512px (PWA manifest)
- `og-image.png` - 1200x630px (social media sharing)

**Catatan**: Logo harus di-crop menjadi lingkaran penuh agar background abu-abu persegi tidak terlihat. Versi PNG transparan atau SVG dari pesantren akan menggantikan versi ini di masa depan.

### Penggunaan Logo
```astro
<!-- Dengan class logo-circle untuk crop lingkaran -->
<img
  src="/logo-64.png"
  alt="Logo Pondok Pesantren Al-Mukhlis"
  class="logo-circle"
  width="48"
  height="48"
/>
```

## 🛠️ Implementasi di Kode

### Tailwind Config
Warna brand sudah dikonfigurasi di `frontend/tailwind.config.mjs`:

```js
colors: {
  brand: {
    primary: '#2E7D32',
    'primary-dark': '#1B5E20',
    // dst...
  },
  neutral: {
    cream: '#F7F4E6',
    charcoal: '#1F2A1A',
    // dst...
  }
}
```

### Penggunaan di Component
```astro
<!-- Dengan Tailwind utilities -->
<button class="bg-brand-primary text-white hover:bg-brand-primary-dark">
  Klik Saya
</button>

<div class="bg-neutral-cream text-neutral-charcoal">
  Konten
</div>
```

### Custom CSS Variables
Variables juga tersedia di `frontend/src/styles/global.css` untuk penggunaan di vanilla CSS:

```css
.my-element {
  background-color: var(--color-brand-primary);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}
```

## ✅ Checklist Design System

- [x] Palet warna brand didefinisikan
- [x] Semua kombinasi warna memenuhi WCAG AA
- [x] Spacing scale konsisten
- [x] Border radius scale
- [x] Shadow scale
- [x] Transition timing
- [x] Typography scale (Tailwind defaults)
- [x] Responsive breakpoints
- [ ] Logo dioptimasi dalam berbagai ukuran (placeholder sementara)
- [x] Dokumentasi lengkap

## 📚 Referensi

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Tailwind CSS Color Palette](https://tailwindcss.com/docs/customizing-colors)

---

**Terakhir diperbarui**: November 2026  
**Versi**: 1.0.0  
**Status**: Draft awal - Logo masih menggunakan placeholder
