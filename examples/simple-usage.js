// PII Paladin Lite - Simple 2-line usage example

// Line 1: Import
import { stripPII } from 'pii-paladin-lite';

// Line 2: Use it!
const clean = stripPII("Contact John at john@email.com or (123) 456-7890");

console.log(clean);
// Output: "Contact John at [EMAIL] or [PHONE]"

// That's it! 🎉
