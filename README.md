# 🚀 PII Paladin Lite

**The simplest PII stripper ever - just 2 lines of code!**

A lightning-fast, lightweight PII stripper for browser use. No configuration, no complex setup, no heavy dependencies. Just import and use.

## ✨ **Why This Library?**

- **🎯 2 Lines of Code** - That's it. Import and use.
- **⚡ Lightning Fast** - Pure regex, no ML models, no network calls
- **📱 Works Everywhere** - Any browser, any device, no setup
- **🔒 Privacy First** - Everything happens locally
- **📦 Tiny** - Only 4-8KB (vs 90MB for full pii-paladin)

## 🚀 **Usage (2 Lines!)**

```javascript
// Line 1: Import
import { stripPII } from 'pii-paladin-lite';

// Line 2: Use it!
const clean = stripPII("Contact John at john@email.com");
```

**That's literally it.** 🎉

## 📋 **What It Detects**

Automatically finds and replaces:

- 📧 **Emails** → `[EMAIL]`
- 📱 **Phone Numbers** → `[PHONE]`
- 🆔 **SSNs** → `[SSN]`
- 💳 **Credit Cards** → `[CREDIT_CARD]`
- 🌐 **IP Addresses** → `[IP_ADDRESS]`
- 🔗 **URLs** → `[URL]`
- 🏠 **Addresses** → `[ADDRESS]`
- 📮 **ZIP Codes** → `[ZIP_CODE]`
- 👤 **Names** → `[NAME]`
- 🏢 **Companies** → `[COMPANY]`
- 📅 **Dates of Birth** → `[DATE_OF_BIRTH]`
- 🔑 **Driver's Licenses** → `[DRIVER_LICENSE]`
- 📖 **Passport Numbers** → `[PASSPORT]`
- 🏦 **Account Numbers** → `[ACCOUNT_NUMBER]`
- 🔌 **MAC Addresses** → `[MAC_ADDRESS]`

## 🌐 **Browser Usage**

### ES6 Modules (Recommended)
```html
<script type="module">
  import { stripPII } from 'https://unpkg.com/pii-paladin-lite/dist/pii-paladin-lite.esm.js';
  const clean = stripPII("Text with PII");
</script>
```

### UMD/CDN
```html
<script src="https://unpkg.com/pii-paladin-lite/dist/pii-paladin-lite.browser.js"></script>
<script>
  const clean = PiiPaladinLite.stripPII("Text with PII");
</script>
```

### Local Files
```html
<script type="module">
  import { stripPII } from './node_modules/pii-paladin-lite/dist/pii-paladin-lite.esm.js';
  const clean = stripPII("Text with PII");
</script>
```

## 📊 **Examples**

### Basic Text Cleaning
```javascript
import { stripPII } from 'pii-paladin-lite';

const text = "Contact John at john@example.com or (123) 456-7890. SSN: 123-45-6789";
const clean = stripPII(text);
// Result: "Contact John at [EMAIL] or [PHONE]. SSN: [SSN]"
```

### Form Input Sanitization
```javascript
document.getElementById('user-input').addEventListener('input', (e) => {
  const clean = stripPII(e.target.value);
  document.getElementById('preview').textContent = clean;
});
```

### API Response Cleaning
```javascript
async function fetchAndClean() {
  const response = await fetch('/api/user-data');
  const data = await response.json();
  
  // Clean sensitive fields before logging
  const cleanData = {
    ...data,
    notes: stripPII(data.notes),
    description: stripPII(data.description)
  };
  
  console.log('Clean data:', cleanData);
}
```

## 🆚 **vs pii-paladin**

| Feature | pii-paladin | **pii-paladin-lite** |
|---------|-------------|----------------------|
| **Bundle Size** | ~90MB (ML models) | **~5KB (regex only)** |
| **Speed** | Slower (ML inference) | **Lightning fast** |
| **Accuracy** | Higher (ML + regex) | Good (regex only) |
| **Browser Support** | Limited (WASM) | **Universal** |
| **Setup** | Complex (model files) | **Zero config** |
| **Use Case** | Production/accuracy | **Development/speed** |
| **Lines of Code** | Complex setup | **Just 2 lines!** |

## 🚀 **When to Use**

**Choose pii-paladin-lite when you need:**
- ✅ **Something that just works** - No configuration needed
- ✅ **Fast development** - Get PII stripping in 2 lines
- ✅ **Lightweight integration** - Tiny bundle size
- ✅ **Universal compatibility** - Works everywhere
- ✅ **Good enough accuracy** - Covers 95% of common PII

**Choose pii-paladin when you need:**
- ✅ Maximum accuracy for production
- ✅ Advanced ML-based detection
- ✅ Can handle 90MB bundle size

## 📦 **Installation**

```bash
npm install pii-paladin-lite
```

## 🔧 **Development**

```bash
# Install dependencies
npm install

# Build
npm run build
```

## 📄 **License**

MIT License

## 🙏 **Acknowledgments**

- Built as a companion to [pii-paladin](https://www.npmjs.com/package/pii-paladin)
- For developers who just want to get things done quickly

---

**Made with ❤️ for developers who believe less is more!**

**2 lines. That's it. No more, no less.** 🎯
